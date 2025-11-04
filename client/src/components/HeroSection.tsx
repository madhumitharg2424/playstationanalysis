import { ArrowRight, TrendingUp, Globe, Cpu } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import heroBackground from "@assets/generated_images/PlayStation_hero_background_gradient_34a43309.png";

export default function HeroSection() {
  const stats = [
    { icon: TrendingUp, label: "80%+ Accuracy", value: "Proven ML Model" },
    { icon: Globe, label: "Multi-Region", value: "Global Data" },
    { icon: Cpu, label: "4,965 Games", value: "Analyzed" },
  ];

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20 dark:opacity-10"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
      
      <div className="container relative z-10 mx-auto px-4 py-20 lg:px-8">
        <div className="mx-auto max-w-4xl text-center animate-slide-up">
          <h1 className="text-5xl font-bold tracking-tight font-serif sm:text-6xl lg:text-7xl mb-6" data-testid="hero-title">
            Predict PlayStation Sales with{" "}
            <span className="text-primary">AI Precision</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto" data-testid="hero-subtitle">
            Leverage advanced machine learning to forecast game sales across consoles, regions, and genres. 
            Voice or text - your choice.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <Button size="lg" className="gap-2" data-testid="button-start-predicting">
              Start Predicting <ArrowRight className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" data-testid="button-view-demo">
              View Demo
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            {stats.map((stat, i) => (
              <Card 
                key={i}
                className="p-6 hover-elevate transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${i * 100}ms` }}
                data-testid={`stat-card-${i}`}
              >
                <stat.icon className="h-8 w-8 text-primary mb-3 mx-auto" />
                <h3 className="font-semibold text-lg mb-1">{stat.label}</h3>
                <p className="text-sm text-muted-foreground">{stat.value}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
