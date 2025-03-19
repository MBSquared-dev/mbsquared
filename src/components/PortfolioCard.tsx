
import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface PortfolioCardProps {
  title: string;
  category: string;
  description: string;
  imageSrc: string;
  technologies?: string[];
  link?: string;
}

const PortfolioCard = ({ 
  title, 
  category, 
  description, 
  imageSrc, 
  technologies = [],
  link = "#" 
}: PortfolioCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div 
      className="group relative overflow-hidden rounded-xl h-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="h-full w-full overflow-hidden">
        <img 
          src={imageSrc} 
          alt={title}
          className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      
      <div className="absolute inset-0 bg-black/60 flex flex-col justify-end p-6">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <h2 className="text-2xl font-bold text-white mb-2">{title}</h2>
          <p className="text-white/80 mb-6">
            {description}
          </p>
          
          {technologies.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {technologies.map((tech) => (
                <span 
                  key={tech} 
                  className="inline-block px-4 py-2 rounded-full bg-primary text-white text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
          
          <a 
            href={link} 
            className="inline-flex items-center text-white font-medium group/link"
          >
            View Project <ArrowUpRight className="ml-1 w-5 h-5 transition-transform duration-200 group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default PortfolioCard;
