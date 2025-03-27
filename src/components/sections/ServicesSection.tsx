import { motion } from 'framer-motion';
import { BarChart, CloudCog, Code, Database, Layers, PencilRuler, Server, Shield, Smartphone } from 'lucide-react';
import ScrollSection from '../ScrollSection';
import TechnologySection from '../TechnologyCard';

const ServicesSection = () => {
  const detailedServices = [
    {
      title: 'Web Development',
      description: 'We build modern, responsive websites and web applications that deliver exceptional user experiences.',
      features: [],
      icon: <Code className="h-8 w-8" />
    },
    {
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android that engage your users.',
      features: [],
      icon: <Smartphone className="h-8 w-8" />
    },
    {
      title: 'UI/UX Design',
      description: 'User-centered design solutions that enhance usability and create delightful user experiences.',
      features: [],
      icon: <PencilRuler className="h-8 w-8" />
    },
    {
      title: 'Backend Systems',
      description: 'Scalable and secure backend infrastructure that powers your applications with reliability and performance.',
      features: [],
      icon: <Server className="h-8 w-8" />
    },
    {
      title: 'Database Design',
      description: 'Optimized database architecture and management for efficient data storage, retrieval, and analysis.',
      features: [],
      icon: <Database className="h-8 w-8" />
    },
    {
      title: 'Custom Software',
      description: 'Tailor-made software solutions that address your specific business needs and challenges.',
      features: [],
      icon: <Layers className="h-8 w-8" />
    },
    {
      title: 'Cloud Services',
      description: 'Scalable, secure, and cost-effective cloud solutions for your business applications.',
      features: [],
      icon: <CloudCog className="h-8 w-8" />
    },
    {
      title: 'Security Solutions',
      description: 'Comprehensive security measures to protect your applications and data from potential threats and vulnerabilities.',
      features: [],
      icon: <Shield className="h-8 w-8" />
    },
    {
      title: 'Analytics & Reporting',
      description: 'Data visualization and reporting tools that transform complex data into actionable insights for your business.',
      features: [],
      icon: <BarChart className="h-8 w-8" />
    }
  ];

  const process = [
    {
      title: 'Discovery',
      description: 'Understanding your business goals and project requirements'
    },
    {
      title: 'Planning',
      description: 'Creating detailed project roadmap and architecture'
    },
    {
      title: 'Design',
      description: 'Crafting intuitive and beautiful user interfaces for your brand'
    },
    {
      title: 'Development',
      description: 'Building robust and scalable solutions with cutting-edge technologies'
    },
    {
      title: 'Testing',
      description: 'Ensuring quality, security, and performance with thorough testing'
    },
    {
      title: 'Deployment',
      description: 'Smooth launch and monitoring of your application'
    },
    {
      title: 'Support',
      description: 'Ongoing maintenance and updates to ensure your application remains up-to-date and performs optimally'
    }
  ];

  const technologies = {
    frontend: [
      { name: 'React', logo: '/logos/react.svg' },
      { name: 'React Native', logo: '/logos/react-native.svg' },
      { name: 'TypeScript', logo: '/logos/typescript.svg' },
      { name: 'Next.js', logo: '/logos/nextjs.svg' },
      { name: 'Expo', logo: '/logos/expo.svg' },
    ],
    backend: [
      { name: 'Node.js', logo: '/logos/nodejs.svg' },
      { name: 'Java', logo: '/logos/java.svg' },
      { name: 'Python', logo: '/logos/python.svg' },
      { name: 'Kotlin', logo: '/logos/kotlin.svg' },
    ],
    database: [
      { name: 'PostgreSQL', logo: '/logos/postgresql.svg' },
      { name: 'MongoDB', logo: '/logos/mongodb.svg' },
      { name: 'Supabase', logo: '/logos/supabase.svg' },
    ],
  };

  return (
    <ScrollSection id="services" className="py-20 md:py-28 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Solutions that drive your business forward
          </h2>
          <p className="text-muted-foreground text-lg">
            We offer a comprehensive range of software development services to help you achieve your business goals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {detailedServices.map((service, index) => {
            const randomDelay = Math.floor(Math.random() * 700) + 100;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, x: 30, scale: 0.5 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 0.7,
                  delay: randomDelay / 1000,
                  ease: [0.34, 1.56, 0.64, 1]
                }}
              >
                <div className="glass-card rounded-xl p-6 border border-white/20 h-full">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="glass-card rounded-xl overflow-hidden p-8 md:p-12 border border-white/20">
            <h3 className="text-2xl font-bold mb-6 text-center">Our Development Process</h3>
            <div className="grid grid-cols-1 md:grid-cols-7 gap-6 relative">
              <div className="hidden md:block absolute top-6 left-[8%] right-[8%] h-[2px] bg-primary/20 -z-10"></div>
              {process.map((step, index) => (
                <motion.div
                  key={step.title}
                  className="relative"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.2,
                    ease: [0.34, 1.56, 0.64, 1]
                  }}
                >
                  <div className="flex flex-col items-center">
                    <motion.div
                      className="w-12 h-12 rounded-full bg-background flex items-center justify-center text-primary font-semibold text-lg mb-4 border-2 border-primary/20"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.2,
                        ease: [0.34, 1.56, 0.64, 1]
                      }}
                    >
                      {index + 1}
                    </motion.div>
                    <motion.h4
                      className="text-lg font-semibold mb-2 text-center"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.2 + 0.1,
                        ease: "easeOut"
                      }}
                    >
                      {step.title}
                    </motion.h4>
                    <motion.p
                      className="text-muted-foreground text-center text-sm"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.2 + 0.2,
                        ease: "easeOut"
                      }}
                    >
                      {step.description}
                    </motion.p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="glass-card rounded-xl overflow-hidden p-8 md:p-12 border border-white/20">
            <h3 className="text-2xl font-bold mb-8 text-center">We use cutting-edge technologies</h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <TechnologySection title="Frontend" technologies={technologies.frontend} />
              <TechnologySection title="Backend" technologies={technologies.backend} />
              <TechnologySection title="Database" technologies={technologies.database} />
            </div>
          </div>
        </motion.div>
      </div>
    </ScrollSection>
  );
};

export default ServicesSection;
