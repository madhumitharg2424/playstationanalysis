import { Card } from "./ui/card";
import { BarChart3, PieChart as PieChartIcon } from "lucide-react";

export default function DataVisualization() {
  const regionalData = [
    { region: "North America", sales: 35, color: "bg-chart-1" },
    { region: "Europe", sales: 28, color: "bg-chart-2" },
    { region: "Japan", sales: 22, color: "bg-chart-3" },
    { region: "Other", sales: 15, color: "bg-chart-4" },
  ];

  const genreData = [
    { genre: "Action", percentage: 32 },
    { genre: "Sports", percentage: 24 },
    { genre: "Shooter", percentage: 20 },
    { genre: "RPG", percentage: 14 },
    { genre: "Other", percentage: 10 },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card className="p-6">
        <div className="flex items-center gap-2 mb-6">
          <BarChart3 className="h-5 w-5 text-primary" />
          <h3 className="font-semibold">Regional Sales Distribution</h3>
        </div>
        <div className="space-y-4">
          {regionalData.map((item, i) => (
            <div key={i} className="space-y-2 animate-fade-in" style={{ animationDelay: `${i * 100}ms` }}>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">{item.region}</span>
                <span className="font-semibold">{item.sales}M</span>
              </div>
              <div className="h-3 rounded-full bg-muted overflow-hidden">
                <div
                  className={`h-full ${item.color} transition-all duration-1000 ease-out`}
                  style={{ width: `${item.sales}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </Card>

      <Card className="p-6">
        <div className="flex items-center gap-2 mb-6">
          <PieChartIcon className="h-5 w-5 text-primary" />
          <h3 className="font-semibold">Genre Popularity</h3>
        </div>
        <div className="space-y-3">
          {genreData.map((item, i) => (
            <div 
              key={i} 
              className="flex items-center justify-between p-3 rounded-lg hover-elevate transition-all animate-slide-up"
              style={{ animationDelay: `${i * 100}ms` }}
              data-testid={`genre-stat-${i}`}
            >
              <span className="text-sm font-medium">{item.genre}</span>
              <div className="flex items-center gap-3">
                <div className="h-2 w-24 rounded-full bg-muted overflow-hidden">
                  <div
                    className="h-full bg-primary transition-all duration-1000"
                    style={{ width: `${item.percentage}%` }}
                  />
                </div>
                <span className="text-sm font-semibold text-muted-foreground min-w-[3rem] text-right">
                  {item.percentage}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
