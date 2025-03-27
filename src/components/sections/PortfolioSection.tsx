import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { useState } from 'react';
import PortfolioCard from '../PortfolioCard';
import ScrollSection from '../ScrollSection';

const PortfolioSection = () => {
  const projects = [
    {
      title: 'E-commerce Platform',
      category: 'Web Development',
      description: 'A modern e-commerce platform with real-time inventory management, secure payment processing, and an intuitive admin dashboard.',
      image: 'https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      technologies: ['Next.js', 'Spring Boot', 'MongoDB']
    },
    {
      title: 'Social Event Gallery',
      category: 'Mobile & Web Development',
      description: 'A cross-platform mobile and web application for creating, sharing, and managing event photo galleries with real-time collaboration features.',
      image: 'https://images.unsplash.com/photo-1617953141905-b27fb1f17d88?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      technologies: ['React Native', 'Supabase', 'AWS', 'Expo']
    },
    {
      title: 'Recruitment Assistant',
      category: 'SaaS',
      description: 'An AI-powered recruitment platform that streamlines the hiring process with automated candidate screening and assessment tools.',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      technologies: ['Python', 'FastAPI', 'Next.js']
    }
  ];

  const categories = ['All', ...new Set(projects.map(project => project.category))];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <ScrollSection id="portfolio" className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Showcasing our best work
          </h2>
          <p className="text-muted-foreground text-lg">
            Explore our recent projects and see how we've helped our clients achieve their goals.
          </p>
        </motion.div>

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

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
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
        </motion.div>
      </div>
    </ScrollSection>
  );
};

export default PortfolioSection;
