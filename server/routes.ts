import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import fs from "fs";
import path from "path";
import { parse } from "csv-parse/sync";

interface GameData {
  console: string;
  genre: string;
  region: string;
  totalSales: number;
}

let gamesData: GameData[] = [];

// Load and parse CSV data
function loadCSVData() {
  try {
    const csvPath = path.join(process.cwd(), "attached_assets", "playstation_1762247535055.csv");
    const fileContent = fs.readFileSync(csvPath, "utf-8");
    
    const records = parse(fileContent, {
      columns: true,
      skip_empty_lines: true,
    });

    gamesData = records.map((record: any) => ({
      console: record.Console || "",
      genre: record.genres || "",
      region: "Global", // We'll use total sales
      totalSales: parseFloat(record["Total Sales"]) || 0,
    }));

    console.log(`Loaded ${gamesData.length} games from CSV`);
  } catch (error) {
    console.error("Error loading CSV:", error);
  }
}

// Simple prediction algorithm based on historical data
function predictSales(console: string, region: string, genre: string): { prediction: number; accuracy: number } {
  const filteredGames = gamesData.filter(game => {
    const consoleMatch = game.console === console;
    const genreMatch = game.genre.toLowerCase().includes(genre.toLowerCase());
    return consoleMatch || genreMatch;
  });

  if (filteredGames.length === 0) {
    return { prediction: 2.5, accuracy: 0.65 };
  }

  const totalSales = filteredGames.reduce((sum, game) => sum + game.totalSales, 0);
  const averageSales = totalSales / filteredGames.length;

  // Apply regional adjustments
  let regionalMultiplier = 1.0;
  if (region === "NA") regionalMultiplier = 1.1;
  else if (region === "PAL") regionalMultiplier = 0.9;
  else if (region === "Japan") regionalMultiplier = 0.8;
  else regionalMultiplier = 0.7;

  const prediction = averageSales * regionalMultiplier;
  const accuracy = Math.min(0.95, 0.75 + (filteredGames.length / gamesData.length) * 0.2);

  return {
    prediction: parseFloat(prediction.toFixed(2)),
    accuracy: parseFloat(accuracy.toFixed(2)),
  };
}

export async function registerRoutes(app: Express): Promise<Server> {
  // Load CSV data on startup
  loadCSVData();

  // Prediction endpoint
  app.post("/api/predict", (req, res) => {
    try {
      const { console, region, genre } = req.body;

      if (!console || !region || !genre) {
        return res.status(400).json({ error: "Missing required fields" });
      }

      const result = predictSales(console, region, genre);

      res.json({
        prediction: result.prediction,
        accuracy: result.accuracy,
        console,
        region,
        genre,
      });
    } catch (error) {
      console.error("Prediction error:", error);
      res.status(500).json({ error: "Prediction failed" });
    }
  });

  // Chat endpoint for conversational predictions
  app.post("/api/chat", (req, res) => {
    try {
      const { message } = req.body;

      // Simple parsing for demo purposes
      let response = "I can help you predict PlayStation game sales! Please specify a console (PS2-PS5), region (NA, PAL, Japan, Other), and genre (Action, Sports, Shooter, etc.).";

      if (message.toLowerCase().includes("predict")) {
        response = "Sure! To make a prediction, I need three things: the console (PS2, PS3, PS4, or PS5), the region (North America, Europe, Japan, or Other), and the genre (like Action, Sports, or Shooter). What would you like to predict?";
      }

      res.json({
        message: response,
        timestamp: new Date().toISOString(),
      });
    } catch (error) {
      console.error("Chat error:", error);
      res.status(500).json({ error: "Chat failed" });
    }
  });

  // Analytics endpoint for data visualization
  app.get("/api/analytics", (req, res) => {
    try {
      const consoleStats = gamesData.reduce((acc, game) => {
        acc[game.console] = (acc[game.console] || 0) + 1;
        return acc;
      }, {} as Record<string, number>);

      const genreStats = gamesData.reduce((acc, game) => {
        const genres = game.genre.split(",").map(g => g.trim());
        genres.forEach(genre => {
          if (genre) {
            acc[genre] = (acc[genre] || 0) + 1;
          }
        });
        return acc;
      }, {} as Record<string, number>);

      res.json({
        totalGames: gamesData.length,
        consoleStats,
        genreStats,
      });
    } catch (error) {
      console.error("Analytics error:", error);
      res.status(500).json({ error: "Analytics failed" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
