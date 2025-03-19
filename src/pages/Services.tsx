import { ArrowRight, Code, Layers, Smartphone, PencilRuler, Database, Server, Shield, BarChart, Atom, FileCode, Coffee, Terminal, ExternalLink, Share2 } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import ServiceCard from '../components/ServiceCard';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      title: 'Web Development',
      description: 'Modern, responsive websites and web applications built with the latest technologies like React, Vue, and Node.js.',
      icon: <Code className="h-6 w-6" />
    },
    {
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications for iOS and Android using React Native, Flutter, and Swift.',
      icon: <Smartphone className="h-6 w-6" />
    },
    {
      title: 'UI/UX Design',
      description: 'User-centered design solutions that enhance usability and create engaging digital experiences that users love.',
      icon: <PencilRuler className="h-6 w-6" />
    },
    {
      title: 'Custom Software',
      description: 'Tailor-made software solutions that address your specific business needs and streamline your operations.',
      icon: <Layers className="h-6 w-6" />
    },
    {
      title: 'Backend Systems',
      description: 'Scalable and secure backend infrastructure that powers your applications with reliability and performance.',
      icon: <Server className="h-6 w-6" />
    },
    {
      title: 'Database Design',
      description: 'Optimized database architecture and management for efficient data storage, retrieval, and analysis.',
      icon: <Database className="h-6 w-6" />
    },
    {
      title: 'Security Solutions',
      description: 'Comprehensive security measures to protect your applications and data from potential threats and vulnerabilities.',
      icon: <Shield className="h-6 w-6" />
    },
    {
      title: 'Analytics & Reporting',
      description: 'Data visualization and reporting tools that transform complex data into actionable insights for your business.',
      icon: <BarChart className="h-6 w-6" />
    }
  ];
  
  const process = [
    {
      step: '01',
      title: 'Discovery',
      description: 'We start by understanding your business, goals, and requirements through in-depth consultations.'
    },
    {
      step: '02',
      title: 'Planning',
      description: 'Our team creates a detailed roadmap with timelines, deliverables, and technical specifications.'
    },
    {
      step: '03',
      title: 'Design',
      description: 'We craft intuitive interfaces and user experiences that align with your brand and user needs.'
    },
    {
      step: '04',
      title: 'Development',
      description: 'Our engineers build your solution using agile methodologies with regular reviews and updates.'
    },
    {
      step: '05',
      title: 'Testing',
      description: 'Rigorous quality assurance ensures your software is bug-free and performs optimally.'
    },
    {
      step: '06',
      title: 'Deployment',
      description: 'We carefully launch your solution and provide training to ensure a smooth transition.'
    },
    {
      step: '07',
      title: 'Support',
      description: 'Ongoing maintenance and support keeps your software running flawlessly long after launch.'
    }
  ];
  
  const technologies = {
    frontend: [
      { name: 'React', icon: <Atom className="h-10 w-10 mb-2 text-blue-500" /> },
      { name: 'React Native', icon: <Smartphone className="h-10 w-10 mb-2 text-blue-400" /> },
      { name: 'TypeScript', icon: <FileCode className="h-10 w-10 mb-2 text-blue-600" /> },
      { name: 'Next.js', icon: <ExternalLink className="h-10 w-10 mb-2 text-black" /> },
      { name: 'Expo', icon: <Share2 className="h-10 w-10 mb-2 text-blue-300" /> },
    ],
    backend: [
      { name: 'Node.js', icon: <Server className="h-10 w-10 mb-2 text-green-500" /> },
      { name: 'Java', icon: <Coffee className="h-10 w-10 mb-2 text-orange-600" /> },
      { name: 'Python', icon: <Terminal className="h-10 w-10 mb-2 text-yellow-500" /> },
      { name: 'Kotlin', icon: <Code className="h-10 w-10 mb-2 text-purple-500" /> },
      { name: 'Go', icon: <Code className="h-10 w-10 mb-2 text-blue-300" /> },
    ],
    database: [
      { name: 'PostgreSQL', icon: <Database className="h-10 w-10 mb-2 text-blue-500" /> },
      { name: 'MongoDB', icon: <Database className="h-10 w-10 mb-2 text-green-600" /> },
      { name: 'MySQL', icon: <Database className="h-10 w-10 mb-2 text-blue-400" /> },
      { name: 'Firebase', icon: <Database className="h-10 w-10 mb-2 text-yellow-600" /> },
      { name: 'Redis', icon: <Database className="h-10 w-10 mb-2 text-red-500" /> },
    ],
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="pt-28 md:pt-36 pb-16 md:pb-24 relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,_rgba(120,170,255,0.15),_transparent_40%)]"></div>
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <AnimatedSection className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-primary/10 text-primary mb-6">
                Our Services
              </AnimatedSection>
              <AnimatedSection>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Comprehensive software solutions for your business
                </h1>
              </AnimatedSection>
              <AnimatedSection delay={100}>
                <p className="text-xl text-muted-foreground">
                  From concept to deployment, we provide end-to-end services to bring your digital vision to life with precision and excellence.
                </p>
              </AnimatedSection>
            </div>
          </div>
        </section>
        
        {/* Services Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {services.map((service, index) => (
                <AnimatedSection key={service.title} delay={index * 100}>
                  <ServiceCard 
                    title={service.title}
                    description={service.description}
                    icon={service.icon}
                  />
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
        
        {/* Process Section */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6">
            <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-primary/10 text-primary mb-4">
                Our Process
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                How we bring your ideas to life
              </h2>
              <p className="text-muted-foreground text-lg">
                Our proven development process ensures quality, transparency, and successful outcomes for every project.
              </p>
            </AnimatedSection>
            
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-border hidden md:block"></div>
              
              <div className="space-y-12 relative">
                {process.map((item, index) => (
                  <AnimatedSection 
                    key={item.step}
                    delay={index * 100}
                    className={`md:flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                  >
                    <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                      <div className="glass-card rounded-xl p-6 h-full">
                        <div className="inline-block text-3xl font-bold text-primary mb-4">
                          {item.step}
                        </div>
                        <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                        <p className="text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                    
                    {/* Timeline dot */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex h-8 w-8 rounded-full bg-primary items-center justify-center">
                      <div className="h-3 w-3 rounded-full bg-white"></div>
                    </div>
                    
                    <div className="md:w-1/2"></div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* Technologies Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-primary/10 text-primary mb-4">
                Technologies
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                We use cutting-edge technologies
              </h2>
              <p className="text-muted-foreground text-lg">
                Our tech stack combines proven frameworks with emerging technologies to build future-proof solutions.
              </p>
            </AnimatedSection>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <AnimatedSection className="glass-card rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-6 text-center">Frontend</h3>
                <div className="grid grid-cols-2 gap-6">
                  {technologies.frontend.map((tech) => (
                    <div key={tech.name} className="flex flex-col items-center text-center">
                      {tech.icon}
                      <span className="font-medium">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
              
              <AnimatedSection delay={100} className="glass-card rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-6 text-center">Backend</h3>
                <div className="grid grid-cols-2 gap-6">
                  {technologies.backend.map((tech) => (
                    <div key={tech.name} className="flex flex-col items-center text-center">
                      {tech.icon}
                      <span className="font-medium">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
              
              <AnimatedSection delay={200} className="glass-card rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-6 text-center">Database</h3>
                <div className="grid grid-cols-2 gap-6">
                  {technologies.database.map((tech) => (
                    <div key={tech.name} className="flex flex-col items-center text-center">
                      {tech.icon}
                      <span className="font-medium">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6">
            <AnimatedSection className="relative glass-card rounded-xl overflow-hidden p-8 md:p-12 border border-white/20">
              <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom_left,_rgba(120,170,255,0.2),_transparent_60%)]"></div>
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Let's discuss your project
                </h2>
                <p className="text-muted-foreground text-lg mb-8">
                  Ready to start building your next great software solution? Our team is here to help bring your vision to reality.
                </p>
                <Link 
                  to="/contact" 
                  className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-primary text-white font-medium transition-all hover:bg-primary/90"
                >
                  Schedule a consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Services;
