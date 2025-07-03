import { useState } from "react";
import Header from "@/components/Header";
import UploadZone from "@/components/UploadZone";
import UpscaleControls from "@/components/UpscaleControls";
import ImageComparison from "@/components/ImageComparison";
import PromotionalStrip from "@/components/PromotionalStrip";
import Footer from "@/components/Footer";
import ExampleSection from "@/components/ExampleSection";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [selectedScale, setSelectedScale] = useState("x2");
  const [selectedQuality, setSelectedQuality] = useState("smooth");
  const { toast } = useToast();

  const handleFilesSelected = (files: File[]) => {
    setSelectedFiles(files);
    toast({
      title: "Files uploaded",
      description: `${files.length} image(s) ready for upscaling`,
    });
  };

  const handleUpscale = () => {
    if (selectedFiles.length === 0) {
      toast({
        title: "No files selected",
        description: "Please upload images first",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Upscaling started",
      description: `Processing ${selectedFiles.length} image(s) with ${selectedScale} scale`,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 pt-32 pb-16">
        {/* Hero Section */}
        <section id="hero" className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="relative w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent"></div>
              <div className="relative">
                <div className="w-6 h-6 bg-gradient-to-br from-primary to-accent rounded-lg shadow-lg transform transition-transform hover:scale-110"></div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-br from-accent to-secondary rounded opacity-80 animate-pulse"></div>
              </div>
            </div>
          </div>
          <h1 className="text-5xl font-bold mb-4 text-foreground">
            Upscale & Enhance Your Images with AI
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Transform your images in seconds with our AI-powered upscaling technology. 
            Get crisp, high-resolution results with zero quality loss.
          </p>
        </section>

        {/* Upload Zone */}
        <section id="upload" className="max-w-4xl mx-auto mb-8">
          <UploadZone onFilesSelected={handleFilesSelected} />
        
          {/* Controls */}
          <UpscaleControls
            selectedScale={selectedScale}
            onScaleChange={setSelectedScale}
            selectedQuality={selectedQuality}
            onQualityChange={setSelectedQuality}
            onUpscale={handleUpscale}
            disabled={selectedFiles.length === 0}
          />
        </section>
      </main>

      {/* Interactive Preview Section */}
      <section id="preview" className="py-16 bg-muted/20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
            See the AI Magic in Action
          </h2>
          <div className="max-w-4xl mx-auto">
            <ImageComparison
              beforeImage="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=600&h=400&fit=crop&crop=center"
              afterImage="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=1200&h=800&fit=crop&crop=center"
              title="AI-Powered Enhancement"
              description="Experience the power of our AI upscaling technology. Drag the slider to see the dramatic improvement in image quality, clarity, and detail preservation."
            />
          </div>
        </div>
      </section>

      {/* Examples Section */}
      <section id="examples">
        <ExampleSection />
      </section>

      {/* Tools Section */}
      <section id="tools">
        <PromotionalStrip />
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 bg-muted/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4 text-foreground">Simple Pricing</h2>
          <p className="text-xl text-muted-foreground mb-8">Choose the plan that fits your needs</p>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-background rounded-2xl p-8 shadow-lg border border-border">
              <h3 className="text-2xl font-semibold mb-4">Free</h3>
              <p className="text-3xl font-bold mb-6">$0<span className="text-lg font-normal text-muted-foreground">/month</span></p>
              <ul className="text-left space-y-3 mb-8">
                <li className="flex items-center"><span className="w-2 h-2 bg-primary rounded-full mr-3"></span>5 images per month</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-primary rounded-full mr-3"></span>2x upscaling</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-primary rounded-full mr-3"></span>Basic quality</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 shadow-lg border-2 border-primary">
              <h3 className="text-2xl font-semibold mb-4">Pro</h3>
              <p className="text-3xl font-bold mb-6">$19<span className="text-lg font-normal text-muted-foreground">/month</span></p>
              <ul className="text-left space-y-3 mb-8">
                <li className="flex items-center"><span className="w-2 h-2 bg-primary rounded-full mr-3"></span>500 images per month</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-primary rounded-full mr-3"></span>Up to 8x upscaling</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-primary rounded-full mr-3"></span>Premium quality</li>
              </ul>
            </div>
            <div className="bg-background rounded-2xl p-8 shadow-lg border border-border">
              <h3 className="text-2xl font-semibold mb-4">Enterprise</h3>
              <p className="text-3xl font-bold mb-6">Custom</p>
              <ul className="text-left space-y-3 mb-8">
                <li className="flex items-center"><span className="w-2 h-2 bg-primary rounded-full mr-3"></span>Unlimited images</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-primary rounded-full mr-3"></span>API access</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-primary rounded-full mr-3"></span>Priority support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
