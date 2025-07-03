import { Button } from "@/components/ui/button";
import { Twitter, MessageCircle, Github } from "lucide-react";

const Footer = () => {
  const toolLinks = [
    "Image Upscaler", "Cleanup", "Relight", "Text Remover", 
    "Uncrop", "Replace Background", "Generative Fill"
  ];

  const companyLinks = [
    "About", "Careers", "Blog", "Press Kit"
  ];

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg bg-background flex items-center justify-center">
                <div className="w-4 h-4 bg-foreground rounded-sm"></div>
              </div>
              <span className="font-semibold text-lg">Pixify</span>
            </div>
            <p className="text-background/80 text-sm">
              AI-powered image editing tools for professionals and creators. 
              Transform your images with cutting-edge artificial intelligence.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="text-background hover:bg-primary/20 hover:text-primary p-2 transition-all duration-200">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-background hover:bg-primary/20 hover:text-primary p-2 transition-all duration-200">
                <MessageCircle className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-background hover:bg-primary/20 hover:text-primary p-2 transition-all duration-200">
                <Github className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Tools */}
          <div>
            <h3 className="font-semibold mb-4 text-background">Tools</h3>
            <ul className="space-y-2">
              {toolLinks.map((tool, index) => (
                <li key={index}>
                  <Button variant="ghost" className="p-0 h-auto text-background/80 hover:text-primary hover:bg-transparent text-sm font-normal justify-start transition-colors duration-200">
                    {tool}
                  </Button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4 text-background">Company</h3>
            <ul className="space-y-2">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <Button variant="ghost" className="p-0 h-auto text-background/80 hover:text-primary hover:bg-transparent text-sm font-normal justify-start transition-colors duration-200">
                    {link}
                  </Button>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-4 text-background">Support</h3>
            <ul className="space-y-2">
              <li>
                <Button variant="ghost" className="p-0 h-auto text-background/80 hover:text-primary hover:bg-transparent text-sm font-normal justify-start transition-colors duration-200">
                  Help Center
                </Button>
              </li>
              <li>
                <Button variant="ghost" className="p-0 h-auto text-background/80 hover:text-primary hover:bg-transparent text-sm font-normal justify-start transition-colors duration-200">
                  API Documentation
                </Button>
              </li>
              <li>
                <Button variant="ghost" className="p-0 h-auto text-background/80 hover:text-primary hover:bg-transparent text-sm font-normal justify-start transition-colors duration-200">
                  Contact Us
                </Button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-background/60 text-sm mb-4 md:mb-0">
            © 2024 Pixify. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Button variant="ghost" className="p-0 h-auto text-background/60 hover:text-accent hover:bg-transparent text-sm font-normal transition-colors duration-200">
              Privacy Policy
            </Button>
            <Button variant="ghost" className="p-0 h-auto text-background/60 hover:text-accent hover:bg-transparent text-sm font-normal transition-colors duration-200">
              Terms of Service
            </Button>
            <Button variant="ghost" className="p-0 h-auto text-background/60 hover:text-accent hover:bg-transparent text-sm font-normal transition-colors duration-200">
              Cookie Policy
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;