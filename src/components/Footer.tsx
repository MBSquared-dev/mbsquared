
import { Link } from 'react-router-dom';
import { Github, Linkedin, Twitter, Mail, ArrowUpRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-background border-t border-border py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          <div className="space-y-4">
            <Link to="/" className="text-xl font-bold text-gradient">
              CodeCraft
            </Link>
            <p className="text-muted-foreground max-w-xs">
              Crafting innovative digital solutions with precision and passion.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-foreground/60 hover:text-primary transition-colors" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-foreground/60 hover:text-primary transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-foreground/60 hover:text-primary transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-medium text-sm uppercase tracking-wider text-muted-foreground">
              Company
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-foreground/80 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-foreground/80 hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-foreground/80 hover:text-primary transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-foreground/80 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-medium text-sm uppercase tracking-wider text-muted-foreground">
              Services
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/services" className="text-foreground/80 hover:text-primary transition-colors">
                  Web Development
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-foreground/80 hover:text-primary transition-colors">
                  Mobile Applications
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-foreground/80 hover:text-primary transition-colors">
                  UI/UX Design
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-foreground/80 hover:text-primary transition-colors">
                  Custom Software
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-medium text-sm uppercase tracking-wider text-muted-foreground">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center text-foreground/80">
                <Mail className="h-4 w-4 mr-2" />
                <a href="mailto:hello@codecraft.com" className="hover:text-primary transition-colors">
                  hello@codecraft.com
                </a>
              </li>
              <li className="text-foreground/80">
                123 Tech Street, Suite 101<br />
                San Francisco, CA 94105
              </li>
              <li>
                <Link to="/contact" className="inline-flex items-center text-primary font-medium">
                  Get in touch <ArrowUpRight className="h-4 w-4 ml-1" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border/50 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <p className="text-sm text-muted-foreground">
            © {currentYear} CodeCraft. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
