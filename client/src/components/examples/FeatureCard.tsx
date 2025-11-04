import FeatureCard from '../FeatureCard'
import { Mic, Brain, TrendingUp } from 'lucide-react'

export default function FeatureCardExample() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4 max-w-6xl mx-auto">
      <FeatureCard 
        icon={Mic}
        title="Voice Input"
        description="Speak naturally to get predictions. Just say what you want to predict and let AI handle the rest."
      />
      <FeatureCard 
        icon={Brain}
        title="ML Powered"
        description="Advanced machine learning models trained on 4,965 games with 80%+ accuracy."
      />
      <FeatureCard 
        icon={TrendingUp}
        title="Real Insights"
        description="Get actionable sales forecasts across multiple regions, consoles, and genres."
      />
    </div>
  )
}
