
import { Mail, MapPin, Phone, Clock, ArrowRight } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import ContactForm from '../components/ContactForm';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      title: 'Email Us',
      description: 'Our friendly team is here to help.',
      contact: 'hello@codecraft.com',
      link: 'mailto:hello@codecraft.com'
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      title: 'Visit Us',
      description: 'Come say hello at our office.',
      contact: '123 Tech Street, Suite 101, San Francisco, CA 94105',
      link: 'https://maps.google.com'
    },
    {
      icon: <Phone className="h-5 w-5" />,
      title: 'Call Us',
      description: 'Mon-Fri from 8am to 5pm.',
      contact: '+1 (555) 123-4567',
      link: 'tel:+15551234567'
    },
    {
      icon: <Clock className="h-5 w-5" />,
      title: 'Working Hours',
      description: 'We\'re available during these times.',
      contact: 'Monday - Friday, 8am to 5pm PST',
      link: null
    }
  ];
  
  const faq = [
    {
      question: 'What is your typical process for new projects?',
      answer: 'Our process typically includes an initial consultation, requirements gathering, proposal and estimate, design and development phases, testing, and deployment. We maintain clear communication throughout the entire process.'
    },
    {
      question: 'How long does it take to develop a custom application?',
      answer: 'Project timelines vary based on complexity and scope. A simple website might take 4-6 weeks, while a complex enterprise application could take 6+ months. We provide detailed timelines during our proposal phase.'
    },
    {
      question: 'Do you offer ongoing maintenance and support?',
      answer: 'Yes, we offer various maintenance and support packages to ensure your application continues to run smoothly after launch. These can include regular updates, security patches, performance monitoring, and technical support.'
    },
    {
      question: 'How do you handle project pricing?',
      answer: 'We offer both fixed-price and time-and-materials pricing models depending on project requirements. For well-defined projects, we often recommend fixed-price, while more complex or evolving projects may benefit from time-and-materials pricing.'
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
                Contact Us
              </AnimatedSection>
              <AnimatedSection>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Let's start a conversation
                </h1>
              </AnimatedSection>
              <AnimatedSection delay={100}>
                <p className="text-xl text-muted-foreground">
                  Have a project in mind or want to learn more about our services? We're here to help and answer any questions you might have.
                </p>
              </AnimatedSection>
            </div>
          </div>
        </section>
        
        {/* Contact Info Section */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {contactInfo.map((info, index) => (
                <AnimatedSection key={info.title} delay={index * 100}>
                  <div className="glass-card rounded-xl p-6 border border-white/20 h-full">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-5">
                      {info.icon}
                    </div>
                    <h3 className="text-lg font-semibold mb-1">{info.title}</h3>
                    <p className="text-muted-foreground text-sm mb-3">{info.description}</p>
                    {info.link ? (
                      <a 
                        href={info.link} 
                        className="font-medium text-primary hover:underline"
                      >
                        {info.contact}
                      </a>
                    ) : (
                      <span className="font-medium">{info.contact}</span>
                    )}
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
        
        {/* Contact Form Section */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
              <AnimatedSection animation="slide-in-left">
                <div className="space-y-6">
                  <h2 className="text-3xl md:text-4xl font-bold">
                    Get in touch with our team
                  </h2>
                  <p className="text-muted-foreground text-lg">
                    Whether you're curious about our services, have a technical challenge, or are ready to start a project – our team is ready to answer all your questions.
                  </p>
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold">What happens next?</h3>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <div className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-3 font-medium">
                          1
                        </div>
                        <div>
                          <p className="font-medium">We'll get back to you within 24 hours</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-3 font-medium">
                          2
                        </div>
                        <div>
                          <p className="font-medium">We'll schedule a consultation call to discuss your needs</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-3 font-medium">
                          3
                        </div>
                        <div>
                          <p className="font-medium">We'll send you a proposal with timeline and pricing</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
              
              <AnimatedSection animation="slide-in-right">
                <ContactForm />
              </AnimatedSection>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6">
            <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-primary/10 text-primary mb-4">
                FAQ
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Frequently asked questions
              </h2>
              <p className="text-muted-foreground text-lg">
                We've compiled answers to some of the most common questions we receive.
              </p>
            </AnimatedSection>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {faq.map((item, index) => (
                <AnimatedSection key={index} delay={index * 100}>
                  <div className="glass-card rounded-xl p-6 border border-white/20">
                    <h3 className="text-lg font-semibold mb-3">{item.question}</h3>
                    <p className="text-muted-foreground">{item.answer}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
            
            <AnimatedSection className="text-center mt-12">
              <p className="text-muted-foreground mb-4">
                Still have questions?
              </p>
              <a 
                href="mailto:hello@codecraft.com" 
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-white font-medium transition-all hover:bg-primary/90"
              >
                Email us
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </AnimatedSection>
          </div>
        </section>
        
        {/* Map Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <AnimatedSection className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Visit our office
              </h2>
              <p className="text-muted-foreground text-lg">
                We're located in the heart of San Francisco's tech district.
              </p>
            </AnimatedSection>
            
            <AnimatedSection className="relative rounded-xl overflow-hidden h-96 glass-card border border-white/20">
              <iframe
                title="Office Location"
                className="absolute inset-0 w-full h-full"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12615.261941253381!2d-122.4194!3d37.7749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858080a379575d%3A0x6cf7a313d6a53ec7!2sSan%20Francisco%2C%20CA%2094105!5e0!3m2!1sen!2sus!4v1645583291955!5m2!1sen!2sus"
                frameBorder="0"
                loading="lazy"
                style={{ filter: 'grayscale(1) contrast(1.2) opacity(0.8)' }}
              ></iframe>
            </AnimatedSection>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
