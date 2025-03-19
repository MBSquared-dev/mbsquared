
import { Github, Linkedin, Twitter } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import TeamMember from '../components/TeamMember';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About = () => {
  const teamMembers = [
    {
      name: 'Alex Johnson',
      role: 'CEO & Founder',
      bio: 'Tech visionary with 15+ years of experience in software development and business leadership.',
      imageSrc: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
    },
    {
      name: 'Sarah Chen',
      role: 'CTO',
      bio: 'Engineering leader specializing in scalable architecture and emerging technologies.',
      imageSrc: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
    },
    {
      name: 'Michael Rodriguez',
      role: 'Lead Designer',
      bio: 'Award-winning UI/UX designer with a passion for creating intuitive digital experiences.',
      imageSrc: 'https://images.unsplash.com/photo-1531384441138-2736e62e0919?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
    },
    {
      name: 'Emma Wilson',
      role: 'Project Manager',
      bio: 'Certified PM with expertise in agile methodologies and cross-functional team leadership.',
      imageSrc: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=461&q=80'
    }
  ];
  
  const socialLinks = (
    <>
      <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
        <Github className="h-5 w-5" />
      </a>
      <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
        <Linkedin className="h-5 w-5" />
      </a>
      <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
        <Twitter className="h-5 w-5" />
      </a>
    </>
  );
  
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
                About Us
              </AnimatedSection>
              <AnimatedSection>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  We're a team of passionate tech enthusiasts
                </h1>
              </AnimatedSection>
              <AnimatedSection delay={100}>
                <p className="text-xl text-muted-foreground">
                  Founded in 2018, CodeCraft has grown from a small startup to a sought-after software development company working with clients worldwide.
                </p>
              </AnimatedSection>
            </div>
          </div>
        </section>
        
        {/* Our Story Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
              <AnimatedSection animation="slide-in-left">
                <div className="relative">
                  <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-blue-500/20 to-teal-500/20 blur-xl opacity-50"></div>
                  <div className="relative glass-card rounded-xl overflow-hidden border border-white/20">
                    <img 
                      src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                      alt="Our team collaborating" 
                      className="w-full h-auto rounded-xl"
                    />
                  </div>
                </div>
              </AnimatedSection>
              
              <AnimatedSection animation="slide-in-right" className="space-y-6">
                <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-primary/10 text-primary">
                  Our Story
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold">
                  From idea to innovation
                </h2>
                
                <p className="text-muted-foreground">
                  CodeCraft was born from a simple idea: to create software that makes a real difference. Our founders, Alex and Sarah, met while working at a major tech company and shared a vision for building a more human-centered approach to software development.
                </p>
                
                <p className="text-muted-foreground">
                  Starting with just a small team of four developers, we've grown to a diverse team of designers, engineers, and project managers united by our passion for elegant, effective solutions.
                </p>
                
                <p className="text-muted-foreground">
                  Today, we're proud to work with clients ranging from innovative startups to established enterprises across multiple industries. Our journey continues as we push the boundaries of what's possible with code.
                </p>
              </AnimatedSection>
            </div>
          </div>
        </section>
        
        {/* Mission & Values Section */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6">
            <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-primary/10 text-primary mb-4">
                Mission & Values
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                What drives us forward
              </h2>
              <p className="text-muted-foreground text-lg">
                Our core values guide every decision we make and every line of code we write.
              </p>
            </AnimatedSection>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <AnimatedSection className="glass-card rounded-xl p-8 border border-white/20">
                <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
                <p className="text-muted-foreground">
                  To create software that empowers businesses and enhances people's lives through intelligent, accessible technology solutions.
                </p>
              </AnimatedSection>
              
              <AnimatedSection delay={100} className="glass-card rounded-xl p-8 border border-white/20">
                <h3 className="text-xl font-semibold mb-4">Our Vision</h3>
                <p className="text-muted-foreground">
                  To be recognized as the most innovative and client-focused software development company, known for our technical excellence and transformative solutions.
                </p>
              </AnimatedSection>
              
              <AnimatedSection delay={200} className="glass-card rounded-xl p-8 border border-white/20">
                <h3 className="text-xl font-semibold mb-4">Our Values</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Innovation in everything we do</li>
                  <li>• Relentless quality focus</li>
                  <li>• Client-centered approach</li>
                  <li>• Transparent communication</li>
                  <li>• Continuous learning</li>
                </ul>
              </AnimatedSection>
            </div>
          </div>
        </section>
        
        {/* Team Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-primary/10 text-primary mb-4">
                Our Team
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Meet the people behind the code
              </h2>
              <p className="text-muted-foreground text-lg">
                A dedicated team of professionals passionate about creating exceptional software.
              </p>
            </AnimatedSection>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
              {teamMembers.map((member, index) => (
                <AnimatedSection key={member.name} delay={index * 100}>
                  <TeamMember 
                    name={member.name}
                    role={member.role}
                    bio={member.bio}
                    imageSrc={member.imageSrc}
                    socialLinks={socialLinks}
                  />
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
