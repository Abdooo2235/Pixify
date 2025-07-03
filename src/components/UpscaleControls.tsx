import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface UpscaleControlsProps {
  selectedScale: string;
  onScaleChange: (scale: string) => void;
  selectedQuality: string;
  onQualityChange: (quality: string) => void;
  onUpscale: () => void;
  disabled?: boolean;
}

const UpscaleControls = ({
  selectedScale,
  onScaleChange,
  selectedQuality,
  onQualityChange,
  onUpscale,
  disabled = false
}: UpscaleControlsProps) => {
  const scaleOptions = [
    { value: "x2", label: "x2" },
    { value: "x4", label: "x4" },
    { value: "x8", label: "x8" },
    { value: "x16", label: "x16" }
  ];

  return (
    <div className="flex items-center justify-center space-x-4 mt-6 p-6 bg-gradient-to-r from-background via-muted/20 to-background rounded-xl border border-border/50">
      <Select value={selectedQuality} onValueChange={onQualityChange}>
        <SelectTrigger className="w-32 bg-card border-primary/20 shadow-sm hover:border-primary/40 transition-colors">
          <SelectValue placeholder="Quality" />
        </SelectTrigger>
        <SelectContent className="bg-card border-primary/20">
          <SelectItem value="smooth">Smooth</SelectItem>
          <SelectItem value="sharp">Sharp</SelectItem>
          <SelectItem value="enhance">Enhance</SelectItem>
        </SelectContent>
      </Select>

      <div className="flex items-center space-x-1 bg-card rounded-lg p-1 border border-primary/20 shadow-sm">
        {scaleOptions.map((option) => (
          <Button
            key={option.value}
            variant={selectedScale === option.value ? "default" : "ghost"}
            size="sm"
            onClick={() => onScaleChange(option.value)}
            className={`px-4 py-2 text-sm font-medium transition-all duration-200 ${
              selectedScale === option.value 
                ? "bg-gradient-to-r from-primary to-secondary text-primary-foreground shadow-md scale-105" 
                : "hover:bg-primary/10 hover:text-primary hover:scale-105"
            }`}
          >
            {option.label}
          </Button>
        ))}
      </div>

      <Button 
        onClick={onUpscale}
        disabled={disabled}
        className="px-8 py-3 bg-gradient-to-r from-primary via-secondary to-accent text-primary-foreground font-medium shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:hover:scale-100"
      >
        Upscale
      </Button>
    </div>
  );
};

export default UpscaleControls;