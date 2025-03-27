import { ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

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
    <footer className="bg-background border-t border-border py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div className="space-y-4">
            <Link to="/" className="text-xl font-bold text-gradient">
              MBS
            </Link>
            <p className="text-muted-foreground max-w-xs">
              Crafting innovative digital solutions with precision and passion.
            </p>
          </div>

          <div className="space-y-4 text-right">
            <h3 className="font-medium text-sm uppercase tracking-wider text-muted-foreground">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center justify-end text-foreground/80">
                <Mail className="h-4 w-4 mr-2" />
                <a href="mailto:mbsquared.projects@gmail.com" className="hover:text-primary transition-colors">
                  mbsquared.projects@gmail.com
                </a>
              </li>
              {/* TODO: Add map after we have a physical address */}
              {/* <li className="text-foreground/80">
                123 Tech Street, Suite 101<br />
                San Francisco, CA 94105
              </li> */}
              <li className="flex justify-end">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="inline-flex items-center text-primary font-medium hover:text-primary/80 transition-colors"
                >
                  Get in touch <ArrowUpRight className="h-4 w-4 ml-1" />
                </button>
              </li>
            </ul>
            <div className="flex justify-end space-x-4 pt-2">
              <a href="#" className="text-foreground/60 hover:text-primary transition-colors" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-foreground/60 hover:text-primary transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border/50 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <p className="text-sm text-muted-foreground">
            © {currentYear} MBS. All rights reserved.
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
