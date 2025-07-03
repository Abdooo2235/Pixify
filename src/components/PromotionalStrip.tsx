import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Eraser, 
  Lightbulb, 
  Type, 
  Crop, 
  Palette, 
  Sparkles,
  ArrowRight
} from "lucide-react";

const PromotionalStrip = () => {
  const tools = [
    {
      name: "Cleanup",
      description: "Remove objects from images",
      icon: Eraser,
      color: "text-accent"
    },
    {
      name: "Relight",
      description: "Relight your images",
      icon: Lightbulb,
      color: "text-secondary"
    },
    {
      name: "Text Remover",
      description: "Remove text from images",
      icon: Type,
      color: "text-primary"
    },
    {
      name: "Uncrop", 
      description: "Extend image borders",
      icon: Crop,
      color: "text-accent"
    },
    {
      name: "Replace Background",
      description: "AI background replacement",
      icon: Palette,
      color: "text-secondary"
    },
    {
      name: "Generative Fill",
      description: "Fill missing parts",
      icon: Sparkles,
      color: "text-primary"
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Explore More AI Tools
          </h2>
          <p className="text-muted-foreground text-lg">
            Discover our complete suite of AI-powered image editing tools
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {tools.map((tool, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 cursor-pointer group border border-border/50">
              <div className="flex items-start space-x-4">
                <div className={`p-3 rounded-lg bg-background ${tool.color}`}>
                  <tool.icon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {tool.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    {tool.description}
                  </p>
                  <Button variant="ghost" size="sm" className="p-0 h-auto font-medium text-primary hover:text-primary-hover">
                    Try now
                    <ArrowRight className="w-3 h-3 ml-1" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button className="bg-primary hover:bg-primary-hover text-primary-foreground px-8 py-3">
            View All Tools
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PromotionalStrip;