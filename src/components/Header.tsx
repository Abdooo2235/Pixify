import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { smoothScrollToSection } from "@/lib/smooth-scroll";
import { useAuth } from "@/contexts/AuthContext";
import { Shield, LogOut } from "lucide-react";
const Header = () => {
  const { isAdmin, logout, adminUser } = useAuth();
  
  return <header className="fixed top-0 left-0 right-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-lg bg-foreground flex items-center justify-center">
            <div className="w-4 h-4 bg-background rounded-sm"></div>
          </div>
          <span className="font-semibold text-lg">Pixify</span>
          <span className="text-muted-foreground text-sm">
        </span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <Button 
            variant="ghost" 
            className="text-sm font-medium text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-200"
            onClick={() => smoothScrollToSection('upload')}
          >
            Upscaler
          </Button>
          <Button 
            variant="ghost" 
            className="text-sm font-medium text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-200"
            onClick={() => smoothScrollToSection('examples')}
          >
            Examples
          </Button>
          <Button 
            variant="ghost" 
            className="text-sm font-medium text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-200"
            onClick={() => smoothScrollToSection('tools')}
          >
            Tools
          </Button>
          <Button 
            variant="ghost" 
            className="text-sm font-medium text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-200"
            onClick={() => smoothScrollToSection('pricing')}
          >
            Pricing
          </Button>
        </nav>
        
        <div className="flex items-center space-x-3">
          {isAdmin ? (
            <>
              <Button variant="ghost" className="text-foreground hover:text-primary hover:bg-primary/10 font-medium px-4 transition-all duration-200" asChild>
                <Link to="/admin">
                  <Shield className="mr-2 h-4 w-4" />
                  Admin Panel
                </Link>
              </Button>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-muted-foreground">{adminUser?.name}</span>
                <Button 
                  variant="ghost" 
                  size="icon"
                  onClick={logout}
                  className="text-foreground hover:text-primary hover:bg-primary/10"
                >
                  <LogOut className="h-4 w-4" />
                </Button>
              </div>
            </>
          ) : (
            <>
              <Button variant="ghost" className="text-foreground hover:text-primary hover:bg-primary/10 font-medium px-4 transition-all duration-200" asChild>
                <Link to="/login">Login</Link>
              </Button>
              <Button className="bg-gradient-to-r from-primary to-accent hover:from-primary/80 hover:to-accent/80 hover:shadow-lg text-primary-foreground font-medium px-6 rounded-full shadow-lg transform transition-all duration-200 hover:scale-105" asChild>
                <Link to="/signup">Sign up</Link>
              </Button>
            </>
          )}
        </div>
      </div>
    </header>;
};
export default Header;