import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Download, Eye } from "lucide-react";

interface ImageComparisonProps {
  beforeImage: string;
  afterImage: string;
  title: string;
  description: string;
}

const ImageComparison = ({ beforeImage, afterImage, title, description }: ImageComparisonProps) => {
  const [sliderValue, setSliderValue] = useState([50]);
  const [showLoginPrompt, setShowLoginPrompt] = useState(false);

  const handleDownload = () => {
    setShowLoginPrompt(true);
  };

  return (
    <div className="space-y-6">
      <div className="relative w-full h-96 rounded-lg overflow-hidden bg-muted">
        {/* Before Image */}
        <div 
          className="absolute inset-0 transition-all duration-300"
          style={{ clipPath: `inset(0 ${100 - sliderValue[0]}% 0 0)` }}
        >
          <img
            src={beforeImage}
            alt="Before enhancement"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 left-4 bg-destructive text-destructive-foreground px-3 py-1 rounded text-sm font-medium">
            Before
          </div>
        </div>
        
        {/* After Image */}
        <div 
          className="absolute inset-0 transition-all duration-300"
          style={{ clipPath: `inset(0 0 0 ${sliderValue[0]}%)` }}
        >
          <img
            src={afterImage}
            alt="After enhancement"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded text-sm font-medium">
            After
          </div>
        </div>
        
        {/* Slider Handle */}
        <div 
          className="absolute top-0 bottom-0 w-1 bg-white shadow-lg z-10 transition-all duration-300 cursor-col-resize"
          style={{ left: `${sliderValue[0]}%`, transform: 'translateX(-50%)' }}
        >
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
            <Eye className="w-4 h-4 text-foreground" />
          </div>
        </div>
      </div>
      
      {/* Slider Control */}
      <div className="px-4">
        <Slider
          value={sliderValue}
          onValueChange={setSliderValue}
          max={100}
          step={1}
          className="w-full"
        />
      </div>
      
      {/* Content */}
      <div className="text-center space-y-4">
        <h3 className="text-2xl font-semibold text-foreground">{title}</h3>
        <p className="text-muted-foreground max-w-2xl mx-auto">{description}</p>
        <div className="flex justify-center space-x-4">
          <Button 
            onClick={handleDownload}
            className="bg-primary hover:bg-primary-hover text-primary-foreground font-medium"
          >
            <Download className="w-4 h-4 mr-2" />
            Download Enhanced
          </Button>
          <Button variant="outline">
            Try with your image
          </Button>
        </div>
      </div>
      
      {/* Login Prompt Modal */}
      {showLoginPrompt && (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center">
          <div className="bg-card p-8 rounded-lg shadow-lg max-w-md w-full mx-4">
            <h3 className="text-xl font-semibold mb-4">Login Required</h3>
            <p className="text-muted-foreground mb-6">
              Please log in to download high-resolution enhanced images.
            </p>
            <div className="flex space-x-3">
              <Button className="flex-1 bg-primary hover:bg-primary-hover">
                Login
              </Button>
              <Button 
                variant="outline" 
                onClick={() => setShowLoginPrompt(false)}
              >
                Cancel
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageComparison;