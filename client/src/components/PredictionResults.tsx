import { useEffect, useState } from "react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { TrendingUp, CheckCircle2 } from "lucide-react";
import successIllustration from "@assets/generated_images/Success_prediction_celebration_illustration_5552f4ac.png";

interface PredictionResultsProps {
  prediction: number;
  accuracy: number;
  console: string;
  region: string;
  genre: string;
}

export default function PredictionResults({ 
  prediction, 
  accuracy, 
  console: consoleType, 
  region, 
  genre 
}: PredictionResultsProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = prediction;
    const duration = 1500;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [prediction]);

  return (
    <Card className="p-8 animate-slide-up">
      <div className="flex items-start gap-4 mb-6">
        <div className="p-3 rounded-lg bg-primary/10">
          <CheckCircle2 className="h-6 w-6 text-primary" />
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-1">Prediction Complete</h3>
          <p className="text-sm text-muted-foreground">
            {consoleType} • {genre} • {region}
          </p>
        </div>
        <img 
          src={successIllustration} 
          alt="Success" 
          className="h-16 w-16 ml-auto opacity-70"
        />
      </div>

      <div className="text-center py-8 border-y">
        <div className="flex items-baseline justify-center gap-2 mb-2">
          <span className="text-7xl font-bold font-serif text-primary animate-count-up" data-testid="text-prediction-value">
            {count.toFixed(2)}
          </span>
          <span className="text-2xl text-muted-foreground">M</span>
        </div>
        <p className="text-sm text-muted-foreground mb-4">Predicted Sales (Million Units)</p>
        
        <Badge variant="secondary" className="gap-2" data-testid="badge-accuracy">
          <TrendingUp className="h-3 w-3" />
          {(accuracy * 100).toFixed(0)}% Model Accuracy
        </Badge>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-6">
        <div className="text-center p-4 rounded-lg bg-muted/50">
          <p className="text-2xl font-bold text-chart-1">{consoleType}</p>
          <p className="text-xs text-muted-foreground mt-1">Console</p>
        </div>
        <div className="text-center p-4 rounded-lg bg-muted/50">
          <p className="text-2xl font-bold text-chart-2">{region}</p>
          <p className="text-xs text-muted-foreground mt-1">Region</p>
        </div>
      </div>
    </Card>
  );
}
