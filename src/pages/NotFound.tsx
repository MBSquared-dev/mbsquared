
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import AnimatedSection from '../components/AnimatedSection';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow flex items-center">
        <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
            <AnimatedSection animation="slide-in-left" className="space-y-8">
              <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-primary/10 text-primary">
                404 Error
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                Oops! Page not found
              </h1>
              
              <p className="text-xl text-muted-foreground">
                We can't seem to find the page you're looking for. It might have been moved, deleted, or never existed.
              </p>
              
              <div className="pt-4">
                <Link 
                  to="/" 
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-white font-medium transition-all hover:bg-primary/90"
                >
                  Return to home
                </Link>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="slide-in-right">
              <div className="relative">
                <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-primary/20 to-purple-500/20 blur-xl opacity-50"></div>
                <div className="relative glass-card rounded-xl overflow-hidden border border-white/20 p-6 md:p-8 text-center">
                  <div className="text-9xl font-bold text-gradient mb-4">404</div>
                  <p className="text-lg text-muted-foreground">
                    The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
