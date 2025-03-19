
import { ArrowRight, ExternalLink } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import PortfolioCard from '../components/PortfolioCard';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Portfolio = () => {
  const categories = ['All', 'Web Apps', 'Mobile Apps', 'E-commerce', 'Enterprise'];
  const [activeCategory, setActiveCategory] = useState('All');
  
  const projects = [
    {
      title: 'Fintech Dashboard',
      category: 'Web Apps',
      description: 'A comprehensive dashboard for financial management with real-time data visualization.',
      imageSrc: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
    },
    {
      title: 'Health & Fitness App',
      category: 'Mobile Apps',
      description: 'A mobile application that helps users track their fitness goals and maintain a healthy lifestyle.',
      imageSrc: 'https://images.unsplash.com/photo-1550345332-09e3ac987658?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80'
    },
    {
      title: 'E-commerce Platform',
      category: 'E-commerce',
      description: 'A full-featured online shopping platform with integrated payment processing and inventory management.',
      imageSrc: 'https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
    },
    {
      title: 'HR Management System',
      category: 'Enterprise',
      description: 'A comprehensive solution for managing employee data, performance, and HR processes.',
      imageSrc: 'https://images.unsplash.com/photo-1531496730074-83b874594986?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80'
    },
    {
      title: 'Travel Booking App',
      category: 'Mobile Apps',
      description: 'A mobile application for booking flights, hotels, and activities with a personalized recommendation system.',
      imageSrc: 'https://images.unsplash.com/photo-1564536894808-3c591e1a3288?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
    },
    {
      title: 'Real Estate Platform',
      category: 'Web Apps',
      description: 'A web application for property listings with virtual tours and advanced search capabilities.',
      imageSrc: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80'
    }
  ];
  
  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);
  
  const caseStudies = [
    {
      title: 'HealthTech Platform',
      client: 'MediCorp',
      description: 'Designed and developed a HIPAA-compliant patient management system that improved operational efficiency by 40%.',
      results: ['50% reduction in patient wait times', '35% increase in staff productivity', 'Seamless integration with existing systems'],
      imageSrc: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
    },
    {
      title: 'E-commerce Transformation',
      client: 'Urban Retail',
      description: 'Rebuilt an outdated e-commerce platform with modern architecture, resulting in improved user experience and higher conversion rates.',
      results: ['215% increase in online sales', '65% reduction in page load time', '47% increase in mobile conversions'],
      imageSrc: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80'
    }
  ];
  
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
                Our Portfolio
              </AnimatedSection>
              <AnimatedSection>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Showcasing our best work
                </h1>
              </AnimatedSection>
              <AnimatedSection delay={100}>
                <p className="text-xl text-muted-foreground">
                  Explore our portfolio of successful projects across various industries and technologies.
                </p>
              </AnimatedSection>
            </div>
          </div>
        </section>
        
        {/* Portfolio Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <AnimatedSection className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                    ${activeCategory === category 
                      ? 'bg-primary text-white' 
                      : 'bg-secondary text-foreground hover:bg-secondary/80'}`}
                >
                  {category}
                </button>
              ))}
            </AnimatedSection>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {filteredProjects.map((project, index) => (
                <AnimatedSection key={project.title} delay={index * 100}>
                  <PortfolioCard 
                    title={project.title}
                    category={project.category}
                    description={project.description}
                    imageSrc={project.imageSrc}
                  />
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
        
        {/* Case Studies Section */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6">
            <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-primary/10 text-primary mb-4">
                Case Studies
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Diving deeper into our success stories
              </h2>
              <p className="text-muted-foreground text-lg">
                Explore in-depth analyses of how we've solved complex challenges for our clients.
              </p>
            </AnimatedSection>
            
            <div className="space-y-16">
              {caseStudies.map((study, index) => (
                <AnimatedSection key={study.title} className="glass-card rounded-xl overflow-hidden border border-white/20">
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="overflow-hidden">
                      <img 
                        src={study.imageSrc} 
                        alt={study.title} 
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                    <div className="p-8 md:p-10">
                      <div className="text-xs font-medium uppercase tracking-wider text-primary mb-2">
                        Client: {study.client}
                      </div>
                      <h3 className="text-2xl font-semibold mb-4">{study.title}</h3>
                      <p className="text-muted-foreground mb-6">
                        {study.description}
                      </p>
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold uppercase tracking-wider mb-3">Results</h4>
                        <ul className="space-y-2">
                          {study.results.map((result, i) => (
                            <li key={i} className="flex items-start">
                              <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-3">
                                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                </svg>
                              </span>
                              {result}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <a 
                        href="#" 
                        className="inline-flex items-center font-medium text-primary hover:underline"
                      >
                        Read the full case study
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
        
        {/* Testimonials Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-primary/10 text-primary mb-4">
                Client Testimonials
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                What our clients say about us
              </h2>
              <p className="text-muted-foreground text-lg">
                Don't just take our word for it – hear what our clients have to say about working with us.
              </p>
            </AnimatedSection>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <AnimatedSection className="glass-card rounded-xl p-8 border border-white/20">
                <div className="flex flex-col h-full">
                  <svg className="h-8 w-8 text-primary mb-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="text-lg mb-6 flex-grow">
                    "CodeCraft delivered our platform ahead of schedule and exceeded our expectations. Their team was responsive, professional, and truly understood our business needs."
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                      <img 
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" 
                        alt="Jessica Williams" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-semibold">Jessica Williams</div>
                      <div className="text-sm text-muted-foreground">CEO, TechStart</div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
              
              <AnimatedSection delay={100} className="glass-card rounded-xl p-8 border border-white/20">
                <div className="flex flex-col h-full">
                  <svg className="h-8 w-8 text-primary mb-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="text-lg mb-6 flex-grow">
                    "Working with CodeCraft transformed our business. Their mobile app increased our customer engagement by 200% and streamlined our operations significantly."
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                      <img 
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                        alt="David Chen" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-semibold">David Chen</div>
                      <div className="text-sm text-muted-foreground">COO, Retail Evolution</div>
                    </div>
                  </div>
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
                  Ready to build your next great project?
                </h2>
                <p className="text-muted-foreground text-lg mb-8">
                  Let's collaborate to create a solution that meets your unique requirements and drives your business forward.
                </p>
                <Link 
                  to="/contact" 
                  className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-primary text-white font-medium transition-all hover:bg-primary/90"
                >
                  Start a conversation
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

export default Portfolio;
