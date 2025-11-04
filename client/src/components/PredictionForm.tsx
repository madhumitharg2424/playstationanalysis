import { useState } from "react";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Card } from "./ui/card";
import { Sparkles } from "lucide-react";

interface PredictionFormProps {
  onSubmit: (data: { console: string; region: string; genre: string }) => void;
  isLoading?: boolean;
}

export default function PredictionForm({ onSubmit, isLoading = false }: PredictionFormProps) {
  const [console, setConsole] = useState("PS4");
  const [region, setRegion] = useState("NA");
  const [genre, setGenre] = useState("Action");

  const consoles = ["PS2", "PS3", "PS4", "PS5"];
  const regions = [
    { value: "NA", label: "North America" },
    { value: "PAL", label: "Europe (PAL)" },
    { value: "Japan", label: "Japan" },
    { value: "Other", label: "Other Regions" },
  ];
  const genres = [
    "Action", "Sports", "Shooter", "Role-Playing", "Racing", 
    "Platform", "Fighting", "Adventure", "Simulation", "Puzzle", "Strategy"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ console, region, genre });
  };

  return (
    <Card className="p-8">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="console">Console</Label>
          <Select value={console} onValueChange={setConsole}>
            <SelectTrigger id="console" data-testid="select-console">
              <SelectValue placeholder="Select console" />
            </SelectTrigger>
            <SelectContent>
              {consoles.map((c) => (
                <SelectItem key={c} value={c} data-testid={`option-console-${c}`}>
                  {c}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="region">Region</Label>
          <Select value={region} onValueChange={setRegion}>
            <SelectTrigger id="region" data-testid="select-region">
              <SelectValue placeholder="Select region" />
            </SelectTrigger>
            <SelectContent>
              {regions.map((r) => (
                <SelectItem key={r.value} value={r.value} data-testid={`option-region-${r.value}`}>
                  {r.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="genre">Genre</Label>
          <Select value={genre} onValueChange={setGenre}>
            <SelectTrigger id="genre" data-testid="select-genre">
              <SelectValue placeholder="Select genre" />
            </SelectTrigger>
            <SelectContent>
              {genres.map((g) => (
                <SelectItem key={g} value={g} data-testid={`option-genre-${g}`}>
                  {g}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <Button 
          type="submit" 
          className="w-full gap-2" 
          disabled={isLoading}
          data-testid="button-predict"
        >
          {isLoading ? (
            <>Processing...</>
          ) : (
            <>
              <Sparkles className="h-4 w-4" />
              Predict Sales
            </>
          )}
        </Button>
      </form>
    </Card>
  );
}
