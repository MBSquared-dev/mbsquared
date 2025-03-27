import { motion } from 'framer-motion';
import { ArrowRight, Clock, Mail } from 'lucide-react';
import ContactForm from '../ContactForm';
import ScrollSection from '../ScrollSection';

const ContactSection = () => {
  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      title: 'Email Us',
      description: 'Our friendly team is here to help.',
      contact: 'mbsquared.projects@gmail.com',
      link: 'mailto:mbsquared.projects@gmail.com'
    },
    // TODO: Add map after we have a physical address
    // {
    //   icon: <MapPin className="h-5 w-5" />,
    //   title: 'Visit Us',
    //   description: 'Come say hello at our office.',
    //   contact: '123 Tech Street, Suite 101, San Francisco, CA 94105',
    //   link: 'https://maps.google.com'
    // },
    // {
    //   icon: <Phone className="h-5 w-5" />,
    //   title: 'Call Us',
    //   description: 'Mon-Fri from 8am to 5pm.',
    //   contact: '+40727137601',
    //   link: 'tel:+40727137601'
    // },
    {
      icon: <Clock className="h-5 w-5" />,
      title: 'Working Hours',
      description: 'We\'re available during these times.',
      contact: 'Monday - Friday, 8am to 5pm CET',
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
    <>
      <ScrollSection id="contact" className="py-20 md:py-28 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Let's start a conversation
            </h2>
            <p className="text-muted-foreground text-lg">
              Have a project in mind or want to learn more about our services? We're here to help and answer any questions you might have.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex"
              >
                <div className="glass-card rounded-xl p-6 border border-white/20 w-full h-full">
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
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              <div className="space-y-6">
                <h3 className="text-2xl md:text-3xl font-bold">
                  Get in touch with our team
                </h3>
                <p className="text-muted-foreground text-lg">
                  Whether you're curious about our services, have a technical challenge, or are ready to start a project – our team is ready to answer all your questions.
                </p>
                <div className="space-y-4">
                  <h4 className="text-xl font-semibold">What happens next?</h4>
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
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              <ContactForm />
            </motion.div>
          </div>

          <motion.div
            className="mt-24"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="glass-card rounded-xl overflow-hidden p-8 md:p-12 border border-white/20">
              <h3 className="text-2xl font-bold mb-8 text-center">Frequently Asked Questions</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {faq.map((item, index) => (
                  <div key={index} className="space-y-3">
                    <h4 className="text-lg font-semibold">{item.question}</h4>
                    <p className="text-muted-foreground">{item.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* TODO: Add map after we have a physical address */}
          {/* <motion.div className="mt-24">
            <div className="relative rounded-xl overflow-hidden h-96 glass-card border border-white/20">
              <iframe
                title="Office Location"
                className="absolute inset-0 w-full h-full"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12615.261941253381!2d-122.4194!3d37.7749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858080a379575d%3A0x6cf7a313d6a53ec7!2sSan%20Francisco%2C%20CA%2094105!5e0!3m2!1sen!2sus!4v1645583291955!5m2!1sen!2sus"
                loading="lazy"
                style={{ filter: 'grayscale(1) contrast(1.2) opacity(0.8)' }}
              ></iframe>
            </div>
          </motion.div> */}
        </div>
      </ScrollSection>

      <ScrollSection id="cta" className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            className="relative glass-card rounded-xl overflow-hidden p-8 md:p-12 border border-white/20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom_left,_rgba(120,170,255,0.2),_transparent_60%)]"></div>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to bring your ideas to life?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Contact us today to discuss how we can help you achieve your software development goals.
              </p>
              <a
                onClick={() => scrollToSection('contact')}
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-primary text-white font-medium transition-all hover:bg-primary/90 cursor-pointer"
              >
                Get in touch
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </ScrollSection>
    </>
  );
};

export default ContactSection;
