import { Gamepad2, Github, Twitter } from "lucide-react";
import { SiPython, SiReact, SiTensorflow } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="border-t bg-muted/30 mt-20">
      <div className="container mx-auto px-4 py-12 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Gamepad2 className="h-6 w-6 text-primary" />
              <span className="font-bold font-serif">PS Predictor</span>
            </div>
            <p className="text-sm text-muted-foreground">
              AI-powered PlayStation game sales predictions with 80%+ accuracy.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Features</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Predictions</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Analytics</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Voice Input</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Chatbot</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">API</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">About</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-3 mb-4">
              <a href="#" className="p-2 rounded-md hover-elevate transition-all" data-testid="link-github">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-md hover-elevate transition-all" data-testid="link-twitter">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
            <div className="flex gap-3 items-center">
              <SiReact className="h-5 w-5 text-muted-foreground" title="React" />
              <SiPython className="h-5 w-5 text-muted-foreground" title="Python" />
              <SiTensorflow className="h-5 w-5 text-muted-foreground" title="TensorFlow" />
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 PlayStation Sales Predictor. Built with ML and passion.</p>
        </div>
      </div>
    </footer>
  );
}
