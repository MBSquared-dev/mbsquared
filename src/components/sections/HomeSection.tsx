
import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import AnimatedSection from '../AnimatedSection';
import ScrollSection from '../ScrollSection';

const HomeSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <ScrollSection id="home" className="relative pt-28 md:pt-36 pb-20 md:pb-32 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,_rgba(120,170,255,0.15),_transparent_40%)]"></div>
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className={`space-y-8 transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
            <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-primary/10 text-primary">
              <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
              We're open for new projects
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              We build <span className="text-gradient">exceptional</span> digital experiences
            </h1>
            
            <p className="text-xl text-muted-foreground">
              A software development company that transforms your ideas into powerful, elegant solutions. We craft code that matters.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                onClick={() => scrollToSection('contact')}
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-white font-medium transition-all hover:bg-primary/90 cursor-pointer"
              >
                Start a project
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a 
                onClick={() => scrollToSection('services')}
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-secondary text-foreground font-medium transition-colors hover:bg-secondary/80 cursor-pointer"
              >
                Our services
              </a>
            </div>
          </div>
          
          <div className={`transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="relative">
              <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-primary/20 to-purple-500/20 blur-xl opacity-50"></div>
              <div className="relative glass-card rounded-xl overflow-hidden border border-white/20">
                <img 
                  src="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80" 
                  alt="Modern app interface" 
                  className="w-full h-auto rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </ScrollSection>
  );
};

export default HomeSection;
