
import { Code, Layers, Smartphone, PencilRuler, Database, Server, Shield } from 'lucide-react';
import AnimatedSection from '../AnimatedSection';
import ScrollSection from '../ScrollSection';

const ServicesSection = () => {
  const detailedServices = [
    {
      title: 'Web Development',
      description: 'We build modern, responsive websites and web applications that deliver exceptional user experiences.',
      features: [
        'Custom website development',
        'Progressive Web Apps (PWA)',
        'E-commerce solutions',
        'CMS integration',
        'Performance optimization'
      ],
      icon: <Code className="h-8 w-8" />
    },
    {
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android that engage your users.',
      features: [
        'iOS & Android native apps',
        'Cross-platform development',
        'App store optimization',
        'Push notifications',
        'Offline functionality'
      ],
      icon: <Smartphone className="h-8 w-8" />
    },
    {
      title: 'UI/UX Design',
      description: 'User-centered design solutions that enhance usability and create delightful user experiences.',
      features: [
        'User research & testing',
        'Wireframing & prototyping',
        'Visual design',
        'Interaction design',
        'Design systems'
      ],
      icon: <PencilRuler className="h-8 w-8" />
    },
    {
      title: 'Custom Software',
      description: 'Tailor-made software solutions that address your specific business needs and challenges.',
      features: [
        'Enterprise applications',
        'SaaS products',
        'Automation tools',
        'Legacy system modernization',
        'API development & integration'
      ],
      icon: <Layers className="h-8 w-8" />
    },
    {
      title: 'Cloud Services',
      description: 'Scalable, secure, and cost-effective cloud solutions for your business applications.',
      features: [
        'Cloud migration',
        'Infrastructure as code',
        'Serverless architecture',
        'Continuous integration/deployment',
        'Monitoring & optimization'
      ],
      icon: <Server className="h-8 w-8" />
    },
    {
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your data and applications from threats.',
      features: [
        'Security assessments',
        'Penetration testing',
        'Compliance consulting',
        'Secure software development',
        'Security training'
      ],
      icon: <Shield className="h-8 w-8" />
    }
  ];
  
  const process = [
    {
      title: 'Discovery',
      description: 'We begin by understanding your business, goals, and requirements through in-depth consultation.'
    },
    {
      title: 'Planning',
      description: 'We create a detailed roadmap, including timelines, milestones, and resource allocation.'
    },
    {
      title: 'Design',
      description: 'Our designers create wireframes, mockups, and prototypes for your approval.'
    },
    {
      title: 'Development',
      description: 'Our development team builds your solution using the most appropriate technologies.'
    },
    {
      title: 'Testing',
      description: 'We rigorously test your solution to ensure quality, performance, and security.'
    },
    {
      title: 'Deployment',
      description: 'We launch your solution and provide training and documentation.'
    },
    {
      title: 'Support',
      description: 'We continue to support your solution, making improvements and adding features as needed.'
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
      { name: 'Go', logo: '/logos/go.svg' },
    ],
    database: [
      { name: 'PostgreSQL', logo: '/logos/postgresql.svg' },
      { name: 'MongoDB', logo: '/logos/mongodb.svg' },
      { name: 'MySQL', logo: '/logos/mysql.svg' },
      { name: 'Firebase', logo: '/logos/firebase.svg' },
      { name: 'Redis', logo: '/logos/redis.svg' },
    ],
  };

  return (
    <ScrollSection id="services" className="py-20 md:py-28 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-primary/10 text-primary mb-4">
            Our Services
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Solutions that drive your business forward
          </h2>
          <p className="text-muted-foreground text-lg">
            We offer a comprehensive range of software development services to help you achieve your business goals.
          </p>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {detailedServices.map((service, index) => (
            <AnimatedSection key={service.title} delay={index * 100}>
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
            </AnimatedSection>
          ))}
        </div>
        
        <AnimatedSection className="mt-16">
          <div className="glass-card rounded-xl overflow-hidden p-8 md:p-12 border border-white/20">
            <h3 className="text-2xl font-bold mb-6 text-center">Our Development Process</h3>
            <div className="grid grid-cols-1 md:grid-cols-7 gap-6">
              {process.map((step, index) => (
                <div key={step.title} className="relative">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold text-lg mb-4">
                      {index + 1}
                    </div>
                    <h4 className="text-lg font-semibold mb-2 text-center">{step.title}</h4>
                    <p className="text-muted-foreground text-center text-sm">{step.description}</p>
                  </div>
                  {index < process.length - 1 && (
                    <div className="hidden md:block absolute top-6 left-[calc(100%)] w-full h-0.5 bg-primary/20 -z-10"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
        
        <AnimatedSection className="mt-16">
          <div className="glass-card rounded-xl overflow-hidden p-8 md:p-12 border border-white/20">
            <h3 className="text-2xl font-bold mb-8 text-center">We use cutting-edge technologies</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h4 className="text-lg font-semibold mb-6 text-center">Frontend</h4>
                <div className="grid grid-cols-2 gap-6">
                  {technologies.frontend.map((tech) => (
                    <div key={tech.name} className="flex flex-col items-center text-center">
                      <div className="h-16 w-16 mb-3 flex items-center justify-center">
                        <img 
                          src={tech.logo} 
                          alt={`${tech.name} logo`} 
                          className="object-contain h-full w-full"
                        />
                      </div>
                      <span className="font-medium">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-6 text-center">Backend</h4>
                <div className="grid grid-cols-2 gap-6">
                  {technologies.backend.map((tech) => (
                    <div key={tech.name} className="flex flex-col items-center text-center">
                      <div className="h-16 w-16 mb-3 flex items-center justify-center">
                        <img 
                          src={tech.logo} 
                          alt={`${tech.name} logo`}
                          className="object-contain h-full w-full" 
                        />
                      </div>
                      <span className="font-medium">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-6 text-center">Database</h4>
                <div className="grid grid-cols-2 gap-6">
                  {technologies.database.map((tech) => (
                    <div key={tech.name} className="flex flex-col items-center text-center">
                      <div className="h-16 w-16 mb-3 flex items-center justify-center">
                        <img 
                          src={tech.logo} 
                          alt={`${tech.name} logo`}
                          className="object-contain h-full w-full" 
                        />
                      </div>
                      <span className="font-medium">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </ScrollSection>
  );
};

export default ServicesSection;
