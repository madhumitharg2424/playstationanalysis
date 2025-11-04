import { Gamepad2 } from "lucide-react";
import { Button } from "./ui/button";
import { ThemeToggle } from "./ThemeToggle";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 lg:px-8">
        <div className="flex items-center gap-2">
          <Gamepad2 className="h-7 w-7 text-primary" data-testid="logo-icon" />
          <span className="text-xl font-bold font-serif" data-testid="logo-text">
            PS Sales Predictor
          </span>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <a href="#predictor" className="text-sm font-medium transition-colors hover:text-primary" data-testid="nav-predictor">
            Predictor
          </a>
          <a href="#analytics" className="text-sm font-medium transition-colors hover:text-primary" data-testid="nav-analytics">
            Analytics
          </a>
          <a href="#about" className="text-sm font-medium transition-colors hover:text-primary" data-testid="nav-about">
            About
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Button size="sm" data-testid="button-get-started">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
}
