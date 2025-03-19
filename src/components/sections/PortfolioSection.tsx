
import { useState } from 'react';
import AnimatedSection from '../AnimatedSection';
import ScrollSection from '../ScrollSection';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import PortfolioCard from '../PortfolioCard';

const PortfolioSection = () => {
  const categories = ['All', 'Web Development', 'Mobile Development', 'Custom Software', 'UI/UX Design'];
  const [activeCategory, setActiveCategory] = useState('All');
  
  const projects = [
    {
      title: 'E-commerce Platform',
      category: 'Web Development',
      description: 'A full-featured online shopping platform with real-time inventory management.',
      image: 'https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      technologies: ['React', 'Node.js', 'PostgreSQL']
    },
    {
      title: 'Fitness Tracking App',
      category: 'Mobile Development',
      description: 'An iOS and Android app for tracking workouts, nutrition, and personal fitness goals.',
      image: 'https://images.unsplash.com/photo-1617953141905-b27fb1f17d88?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      technologies: ['React Native', 'Firebase', 'GraphQL']
    },
    {
      title: 'Healthcare Management System',
      category: 'Custom Software',
      description: 'A comprehensive system for managing patient records, appointments, and billing for a medical clinic.',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      technologies: ['Angular', 'Java', 'PostgreSQL']
    },
    {
      title: 'Real Estate Platform',
      category: 'Web Development',
      description: 'A platform connecting property buyers, sellers, and agents with integrated mapping and virtual tours.',
      image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      technologies: ['Next.js', 'Node.js', 'MongoDB']
    },
    {
      title: 'Financial Dashboard',
      category: 'UI/UX Design',
      description: 'An intuitive dashboard for tracking investments, expenses, and financial goals with data visualization.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      technologies: ['React', 'D3.js', 'TypeScript']
    },
    {
      title: 'Inventory Management App',
      category: 'Custom Software',
      description: 'A comprehensive inventory management solution for a retail chain with multiple locations.',
      image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      technologies: ['React', 'Node.js', 'PostgreSQL']
    }
  ];

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <ScrollSection id="portfolio" className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-primary/10 text-primary mb-4">
            Our Portfolio
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Showcasing our best work
          </h2>
          <p className="text-muted-foreground text-lg">
            Explore our recent projects and see how we've helped our clients achieve their goals.
          </p>
        </AnimatedSection>
        
        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {categories.map((category, index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Button
                variant={activeCategory === category ? "default" : "outline"}
                onClick={() => setActiveCategory(category)}
                className="rounded-full"
              >
                {category}
              </Button>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <PortfolioCard
              key={project.title}
              title={project.title}
              category={project.category}
              description={project.description}
              imageSrc={project.image}
              technologies={project.technologies}
            />
          ))}
        </div>
      </div>
    </ScrollSection>
  );
};

export default PortfolioSection;
