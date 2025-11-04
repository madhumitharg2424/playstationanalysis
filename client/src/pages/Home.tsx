import { useState } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PredictionForm from "@/components/PredictionForm";
import VoiceInput from "@/components/VoiceInput";
import PredictionResults from "@/components/PredictionResults";
import ChatInterface from "@/components/ChatInterface";
import DataVisualization from "@/components/DataVisualization";
import FeatureCard from "@/components/FeatureCard";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Mic, MessageSquare, Brain, TrendingUp, Globe, Zap } from "lucide-react";
import voiceIllustration from "@assets/generated_images/Voice_input_illustration_character_ace10a41.png";

export default function Home() {
  const [prediction, setPrediction] = useState<{
    value: number;
    accuracy: number;
    console: string;
    region: string;
    genre: string;
  } | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handlePrediction = (data: { console: string; region: string; genre: string }) => {
    setIsLoading(true);
    setPrediction(null);
    
    setTimeout(() => {
      const mockPrediction = Math.random() * 15 + 2;
      setPrediction({
        value: parseFloat(mockPrediction.toFixed(2)),
        accuracy: 0.82,
        console: data.console,
        region: data.region,
        genre: data.genre,
      });
      setIsLoading(false);
    }, 1500);
  };

  const handleVoiceInput = (transcript: string) => {
    console.log('Voice input received:', transcript);
    handlePrediction({ console: "PS4", region: "NA", genre: "Action" });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <HeroSection />

        <section id="predictor" className="container mx-auto px-4 py-20 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-serif mb-4">Make Your Prediction</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choose your preferred method: fill out the form, chat with our AI, or simply speak your query.
            </p>
          </div>

          <Tabs defaultValue="form" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="form" className="gap-2" data-testid="tab-form">
                <Brain className="h-4 w-4" />
                Form
              </TabsTrigger>
              <TabsTrigger value="voice" className="gap-2" data-testid="tab-voice">
                <Mic className="h-4 w-4" />
                Voice
              </TabsTrigger>
              <TabsTrigger value="chat" className="gap-2" data-testid="tab-chat">
                <MessageSquare className="h-4 w-4" />
                Chat
              </TabsTrigger>
            </TabsList>

            <TabsContent value="form" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <PredictionForm onSubmit={handlePrediction} isLoading={isLoading} />
                {prediction && (
                  <PredictionResults
                    prediction={prediction.value}
                    accuracy={prediction.accuracy}
                    console={prediction.console}
                    region={prediction.region}
                    genre={prediction.genre}
                  />
                )}
                {!prediction && !isLoading && (
                  <div className="flex items-center justify-center text-center p-8 border-2 border-dashed rounded-lg">
                    <p className="text-muted-foreground">
                      Select your parameters and click predict to see results
                    </p>
                  </div>
                )}
                {isLoading && (
                  <div className="flex items-center justify-center p-8">
                    <div className="text-center space-y-4">
                      <div className="h-12 w-12 mx-auto border-4 border-primary border-t-transparent rounded-full animate-spin" />
                      <p className="text-muted-foreground">Analyzing data...</p>
                    </div>
                  </div>
                )}
              </div>
            </TabsContent>

            <TabsContent value="voice" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="space-y-6">
                  <VoiceInput onVoiceInput={handleVoiceInput} />
                  <div className="flex items-center justify-center">
                    <img 
                      src={voiceIllustration} 
                      alt="Voice interaction" 
                      className="h-48 w-48 opacity-50"
                    />
                  </div>
                </div>
                {prediction && (
                  <PredictionResults
                    prediction={prediction.value}
                    accuracy={prediction.accuracy}
                    console={prediction.console}
                    region={prediction.region}
                    genre={prediction.genre}
                  />
                )}
              </div>
            </TabsContent>

            <TabsContent value="chat">
              <ChatInterface />
            </TabsContent>
          </Tabs>
        </section>

        <section id="analytics" className="container mx-auto px-4 py-20 lg:px-8 bg-muted/30">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-serif mb-4">Data Insights</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore historical trends and patterns from our comprehensive dataset of 4,965 PlayStation games.
            </p>
          </div>
          <DataVisualization />
        </section>

        <section id="about" className="container mx-auto px-4 py-20 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-serif mb-4">Powerful Features</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Everything you need for accurate game sales predictions in one platform.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              icon={Mic}
              title="Voice Recognition"
              description="Natural language processing allows you to speak your queries instead of typing them."
            />
            <FeatureCard
              icon={Brain}
              title="Machine Learning"
              description="Advanced ML models trained on thousands of games achieve 80%+ prediction accuracy."
            />
            <FeatureCard
              icon={TrendingUp}
              title="Real-time Predictions"
              description="Get instant sales forecasts with detailed breakdowns and confidence scores."
            />
            <FeatureCard
              icon={Globe}
              title="Multi-Region Analysis"
              description="Compare predictions across North America, Europe, Japan, and other markets."
            />
            <FeatureCard
              icon={MessageSquare}
              title="AI Chatbot"
              description="Interactive conversational interface makes predictions as easy as chatting."
            />
            <FeatureCard
              icon={Zap}
              title="Fast & Accurate"
              description="Lightning-fast predictions backed by scientifically validated models."
            />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
