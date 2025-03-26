import { motion } from 'framer-motion';
import { Github, Linkedin } from 'lucide-react';
import ScrollSection from '../ScrollSection';
import TeamMember from '../TeamMember';

const AboutSection = () => {
  const teamMembers = [
    {
      name: 'Mark Váradi',
      role: 'Fullos Engineer',
      bio: 'With over 15 years of experience in software development and business leadership.',
      imageSrc: 'https://media.licdn.com/dms/image/v2/D4D03AQHXd6OZdq5uDA/profile-displayphoto-shrink_800_800/B4DZWjGfVpG4Ac-/0/1742198143295?e=1748476800&v=beta&t=r0tq0AJm_2R0FWGcVv1-A5WaluBezdYh0LThbB5xGdo',
      social: [
        // { icon: <Twitter className="h-5 w-5" />, link: "#" },
        { icon: <Github className="h-5 w-5" />, link: "https://github.com/markvaradi94" },
        { icon: <Linkedin className="h-5 w-5" />, link: "https://www.linkedin.com/in/markvaradi03/" }
      ]
    },
    {
      name: 'Béla Sinkó',
      role: 'Hátsó Developer',
      bio: 'Former Google engineer with expertise in scalable systems and cloud architecture.',
      imageSrc: 'https://avatars.githubusercontent.com/u/72758637?v=4',
      social: [
        // { icon: <Twitter className="h-5 w-5" />, link: "#" },
        { icon: <Github className="h-5 w-5" />, link: "https://github.com/sinkobela" },
        { icon: <Linkedin className="h-5 w-5" />, link: "https://www.linkedin.com/in/bela-sinko/" }
      ]
    },
    {
      name: 'Márk Erdei',
      role: 'Izé',
      bio: 'Award-winning designer with a passion for creating intuitive user experiences.',
      imageSrc: 'https://media.licdn.com/dms/image/v2/C4D03AQFM9XCyoqb2pw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1517275228530?e=1748476800&v=beta&t=BC8Ux5ud_qfqPSI1BdkqA2rsy8XAQUozWMOY9Xd0kuY',
      social: [
        // { icon: <Twitter className="h-5 w-5" />, link: "#" },
        { icon: <Github className="h-5 w-5" />, link: "https://github.com/cadin7" },
        { icon: <Linkedin className="h-5 w-5" />, link: "https://www.linkedin.com/in/mark-erdei/" }
      ]
    },
    {
      name: 'Barnabás Horányi',
      role: 'AI Pro',
      bio: 'Full-stack developer specializing in React, Node.js, and cloud infrastructure.',
      imageSrc: 'https://avatars.githubusercontent.com/u/42639897?v=4',
      social: [
        // { icon: <Twitter className="h-5 w-5" />, link: "#" },
        { icon: <Github className="h-5 w-5" />, link: "https://github.com/Criticalbarny01" },
        { icon: <Linkedin className="h-5 w-5" />, link: "https://www.linkedin.com/in/b-horanyi/" }
      ]
    }
  ];

  const stats = [
    { value: '20+', label: 'Completed Projects' },
    { value: '10+', label: 'Happy Clients' },
    { value: '10+', label: 'Years Experience' },
    { value: '4', label: 'Team Members' }
  ];

  return (
    <>
      <ScrollSection id="about" className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center mb-16">
            {/* Image section with slide-in-left animation */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <div className="relative">
                <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-blue-500/20 to-teal-500/20 blur-xl opacity-50"></div>
                <div className="relative glass-card rounded-xl overflow-hidden border border-white/20">
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    alt="Our team collaborating"
                    className="w-full h-auto rounded-xl"
                  />
                </div>
              </div>
            </motion.div>

            {/* Text content with slide-in-right animation */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <h2 className="text-3xl md:text-4xl font-bold">
                We build software that solves real problems
              </h2>

              <p className="text-muted-foreground text-lg">
                Founded in 2018, MBS is a team of passionate developers, designers, and strategists dedicated to creating exceptional digital experiences. We believe in using technology to solve real-world problems and help businesses thrive in the digital age.
              </p>

              <p className="text-muted-foreground text-lg">
                Our mission is to craft innovative, scalable, and user-friendly software solutions that drive growth and success for our clients. We take pride in our collaborative approach, technical expertise, and commitment to excellence.
              </p>

              <div className="space-y-5">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                      <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
                      <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
                      <path d="M7 21h10" />
                      <path d="M12 3v18" />
                      <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">End-to-End Services</h3>
                    <p className="text-muted-foreground">
                      From concept to deployment, we handle all aspects of software development.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                      <ellipse cx="12" cy="5" rx="9" ry="3" />
                      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
                      <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Scalable Solutions</h3>
                    <p className="text-muted-foreground">
                      We build systems that grow with your business, adapting to changing needs.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="text-center max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Meet Our Team
            </h2>
            <p className="text-muted-foreground text-lg">
              Our team of experts is passionate about creating innovative solutions that drive your business forward.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.2,
                  ease: "easeOut"
                }}
              >
                <TeamMember
                  name={member.name}
                  role={member.role}
                  bio={member.bio}
                  imageSrc={member.imageSrc}
                  socialLinks={
                    <div className="flex space-x-3">
                      {member.social.map((item, i) => (
                        <a
                          key={i}
                          href={item.link}
                          className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors"
                        >
                          {item.icon}
                        </a>
                      ))}
                    </div>
                  }
                />
              </motion.div>
            ))}
          </div>
        </div>
      </ScrollSection>

      <ScrollSection id="stats" className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: [0.175, 0.885, 0.32, 1.275] // Spring-like animation
                }}
              >
                <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </ScrollSection>
    </>
  );
};

export default AboutSection;
