import { Button } from "@/components/ui/button";

const ExampleSection = () => {
  const examples = [
    {
      title: "Remove compression",
      description: "Pixify Image upscaler can improve image quality from compressed images",
      beforeImage: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=400&h=300&fit=crop&crop=center",
      afterImage: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=800&h=600&fit=crop&crop=center"
    },
    {
      title: "Denoise",
      description: "Pixify denoises images by raising the resolution with minimal loss of sharpness and fidelity.",
      beforeImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop&crop=center",
      afterImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop&crop=center"
    },
    {
      title: "Sharpen",
      description: "Pixify Image upscaler makes images, especially photos and screenshots, sharper and more crisp and less pixelated. And it's super easy to use. Just drop your image and that's it!",
      beforeImage: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=300&fit=crop&crop=center",
      afterImage: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&h=600&fit=crop&crop=center"
    }
  ];

  return (
    <section className="w-full py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
          TRY AN EXAMPLE
        </h2>
        
        <div className="flex justify-center space-x-4 mb-12">
          <Button variant="default" className="bg-foreground text-background hover:bg-foreground/90">
            Remove compression
          </Button>
          <Button variant="outline">
            Denoise
          </Button>
          <Button variant="outline">
            Sharpen
          </Button>
        </div>

        <div className="space-y-16">
          {examples.map((example, index) => (
            <div key={index} className="text-center">
              <div className="grid md:grid-cols-2 gap-8 items-center max-w-4xl mx-auto">
                <div className="space-y-4">
                  <div className="relative">
                    <img
                      src={example.beforeImage}
                      alt="Before upscaling"
                      className="w-full h-64 object-cover rounded-lg shadow-lg"
                    />
                    <div className="absolute top-2 left-2 bg-foreground/80 text-background px-2 py-1 rounded text-sm">
                      Before
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="relative">
                    <img
                      src={example.afterImage}
                      alt="After upscaling"
                      className="w-full h-64 object-cover rounded-lg shadow-lg"
                    />
                    <div className="absolute top-2 left-2 bg-primary text-primary-foreground px-2 py-1 rounded text-sm">
                      After
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="max-w-2xl mx-auto mt-8">
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  {example.title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {example.description}
                </p>
                <Button variant="outline" className="font-medium">
                  Try with this example
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExampleSection;