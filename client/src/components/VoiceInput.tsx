import { useState } from "react";
import { Mic, MicOff } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

interface VoiceInputProps {
  onVoiceInput?: (transcript: string) => void;
}

export default function VoiceInput({ onVoiceInput }: VoiceInputProps) {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState("");

  const toggleListening = () => {
    setIsListening(!isListening);
    if (!isListening) {
      setTranscript("Listening...");
      setTimeout(() => {
        const mockTranscript = "Predict sales for PS4 Action games in North America";
        setTranscript(mockTranscript);
        onVoiceInput?.(mockTranscript);
        setIsListening(false);
      }, 2000);
    }
  };

  return (
    <Card className="p-6">
      <div className="flex flex-col items-center gap-6">
        <div className="relative">
          {isListening && (
            <>
              <div className="absolute inset-0 rounded-full bg-primary/20 animate-pulse-ring" />
              <div className="absolute inset-0 rounded-full bg-primary/20 animate-pulse-ring" style={{ animationDelay: "0.5s" }} />
            </>
          )}
          <Button
            size="icon"
            variant={isListening ? "default" : "outline"}
            className="h-20 w-20 rounded-full"
            onClick={toggleListening}
            data-testid="button-voice-toggle"
          >
            {isListening ? (
              <MicOff className="h-8 w-8" />
            ) : (
              <Mic className="h-8 w-8" />
            )}
          </Button>
        </div>
        
        <div className="text-center">
          <p className="text-sm font-medium mb-2">
            {isListening ? "Listening..." : "Click to speak"}
          </p>
          {transcript && !isListening && (
            <p className="text-sm text-muted-foreground italic" data-testid="text-transcript">
              "{transcript}"
            </p>
          )}
        </div>
      </div>
    </Card>
  );
}
