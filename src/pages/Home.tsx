import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail, Code, Brain, Rocket, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Image } from '@/components/ui/image';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import profileImage from '../assets/profile.jpg';
import SEO from '@/components/SEO/SEO';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const fadeInUp = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const cardHoverVariants = {
  initial: { 
    scale: 1, 
    boxShadow: "0px 0px 0px rgba(0, 0, 0, 0)",
    y: 0
  },
  hover: { 
    scale: 1.05, 
    boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.1)",
    y: -10,
    transition: { 
      duration: 0.3, 
      ease: "easeInOut" 
    }
  }
};

const buttonHoverVariants = {
  initial: { scale: 1, boxShadow: "0px 0px 0px rgba(0, 0, 0, 0)" },
  hover: { 
    scale: 1.05, 
    boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
    transition: { duration: 0.3, ease: "easeInOut" }
  }
};

const Home = () => {
  const skills = [
    { icon: <Code className="h-8 w-8" />, title: 'Full Stack Development', description: 'Building end-to-end web applications with modern technologies' },
    { icon: <Brain className="h-8 w-8" />, title: 'AI Integration', description: 'Implementing intelligent solutions and AI-powered features' },
    { icon: <Rocket className="h-8 w-8" />, title: 'Team Leadership', description: 'Leading a talented freelancing team to deliver excellence' }
  ];

  const featuredProjects = [
    {
      title: 'AyurMarg (In Progress)',
      description: 'AI-powered Ayurvedic health assistant blending ancient wisdom with modern AI',
      image: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&q=80&w=1000',
      tags: ['React', 'Node.js', 'MongoDB', 'DeepSeek R1'],
      highlight: 'Combines AI with healthcare, showcasing technical depth and domain expertise.'
    },
    {
      title: 'Gen AI-Enabled Dashboard',
      description: 'AI-enabled dashboard generating real-time business insights and predictive analytics',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000',
      tags: ['React', 'Node.js', 'MongoDB', 'OpenAI API'],
      highlight: 'Blends AI and business intelligence for data-driven decision-making.'
    },
    {
      title: 'AI-Based Website Builder',
      description: 'Web builder that generates fully functional websites based on user instructions using AI',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&q=80&w=1000',
      tags: ['React', 'Node.js', 'Gemini API', 'MongoDB'],
      highlight: 'Showcases AI and frontend-backend integration expertise.'
    }
  ];
  
  // Comment out the testimonials array
  /* 
  const testimonials = [
    {
      quote: "Prathamesh delivered an exceptional web application that exceeded our expectations. His expertise in AI integration added tremendous value to our project.",
      author: "Sarah Johnson",
      position: "CTO, TechInnovate",
      avatar: "https://randomuser.me/api/portraits/women/32.jpg"
    },
    {
      quote: "Working with Prathamesh and his team was a seamless experience. They understood our requirements perfectly and delivered a high-quality solution on time.",
      author: "Michael Chen",
      position: "Product Manager, DataViz Inc.",
      avatar: "https://randomuser.me/api/portraits/men/46.jpg"
    },
    {
      quote: "The AI features implemented by Prathamesh transformed our platform completely. Our user engagement has increased by 40% since the launch.",
      author: "Emily Rodriguez",
      position: "Founder, EduTech Solutions",
      avatar: "https://randomuser.me/api/portraits/women/65.jpg"
    }
  ];
  */

  // GSAP Animation References
  const heroSectionRef = useRef(null);
  const backgroundRef = useRef(null);
  const socialIconsRef = useRef(null);
  const contentRef = useRef(null);
  const imageRef = useRef(null);
  const buttonsRef = useRef(null);
  
  // Refs for scroll animations
  const overviewSectionRef = useRef(null);
  const overviewTitleRef = useRef(null);
  const overviewTextRef = useRef(null);
  const skillsGridRef = useRef(null);
  
  const projectsSectionRef = useRef(null);
  const projectsTitleRef = useRef(null);
  const projectsTextRef = useRef(null);
  const projectsGridRef = useRef(null);

  // Initialize GSAP animations
  useEffect(() => {
    // Hero section animations
    const heroTimeline = gsap.timeline({ defaults: { ease: "power3.out" } });
    
    // Background animation
    heroTimeline.fromTo(
      backgroundRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1 }
    );
    
    // Social icons animation
    heroTimeline.fromTo(
      socialIconsRef.current,
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 0.8 },
      "-=0.5" // Start slightly before the previous animation ends
    );
    
    // Content animation (text)
    heroTimeline.fromTo(
      contentRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8 },
      "-=0.5"
    );
    
    // Image animation
    heroTimeline.fromTo(
      imageRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 0.8 },
      "-=0.5"
    );
    
    // Buttons animation
    heroTimeline.fromTo(
      buttonsRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6 },
      "-=0.3"
    );
    
    // Overview section scroll animations
    const overviewTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: overviewSectionRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none none"
      }
    });
    
    overviewTimeline.fromTo(
      overviewTitleRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.8 }
    );
    
    overviewTimeline.fromTo(
      overviewTextRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8 },
      "-=0.6"
    );
    
    // Staggered animation for skills cards
    gsap.fromTo(
      ".skill-card",
      { opacity: 0, y: 50 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.6,
        stagger: 0.15,
        scrollTrigger: {
          trigger: skillsGridRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none"
        }
      }
    );
    
    // Projects section scroll animations
    const projectsTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: projectsSectionRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none none"
      }
    });
    
    projectsTimeline.fromTo(
      projectsTitleRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.8 }
    );
    
    projectsTimeline.fromTo(
      projectsTextRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8 },
      "-=0.6"
    );
    
    // Staggered animation for project cards
    gsap.fromTo(
      ".project-card",
      { opacity: 0, y: 50 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.6,
        stagger: 0.15,
        scrollTrigger: {
          trigger: projectsGridRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none"
        }
      }
    );
    
    return () => {
      // Cleanup animations
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      heroTimeline.kill();
      overviewTimeline.kill();
      projectsTimeline.kill();
    };
  }, []);

  // Person structured data for SEO
  const personStructuredData = {
    type: 'Person',
    data: {
      name: 'Prathamesh Wakde',
      jobTitle: 'Full Stack AI Developer',
      url: 'https://prathameshwakde.com',
      sameAs: [
        'https://github.com/Wakdeprathamesh',
        'https://www.linkedin.com/in/prathamesh-wakde-479b09236/',
      ],
      image: 'https://prathameshwakde.com/og-image.jpg',
      description: 'Full Stack AI Developer specializing in creating dynamic, intelligent web experiences with precision, innovation, and a dedicated team.',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Pune',
        addressRegion: 'Maharashtra',
        addressCountry: 'India'
      }
    }
  };

  return (
    <>
      <SEO 
        title="Home" 
        description="Full Stack AI Developer specializing in creating dynamic, intelligent web experiences with precision, innovation, and a dedicated team."
        url="https://prathameshwakde.com"
        structuredData={personStructuredData as any}
      />
      
    <div className="min-h-screen">
      {/* Hero Section */}
        <section ref={heroSectionRef} className="relative h-screen flex items-center justify-center overflow-hidden w-full">
          <div ref={backgroundRef} className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-background/50" />
        </div>
        
          <div className="container px-4 mx-auto relative z-10 w-full">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <motion.div
                ref={socialIconsRef}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="hidden md:flex flex-col gap-6 items-center"
              >
                <Button variant="ghost" size="icon" className="rounded-full h-12 w-12" asChild>
                  <a href="https://github.com/Wakdeprathamesh" target="_blank" rel="noopener noreferrer">
                    <Github className="h-6 w-6" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" className="rounded-full h-12 w-12" asChild>
                  <a href="https://www.linkedin.com/in/prathamesh-wakde-479b09236/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-6 w-6" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" className="rounded-full h-12 w-12" asChild>
                  <a href="mailto:wakdeprathamesh12@gmail.com">
                    <Mail className="h-6 w-6" />
                  </a>
                </Button>
              </motion.div>

          <motion.div
                ref={contentRef}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.8, 
                  ease: [0.6, 0.05, 0.01, 0.9],
                  delay: 0.4
                }}
                className="text-left max-w-2xl"
          >
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Hi, I'm Prathamesh Wakde
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                  className="text-xl md:text-2xl text-muted-foreground mb-8"
            >
              Full Stack AI Developer & Freelancing Leader
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 0.8 }}
                  className="text-lg text-muted-foreground mb-12"
            >
              Building dynamic, intelligent web experiences with precision, innovation, and a dedicated team.
            </motion.p>
            
            <motion.div
                  ref={buttonsRef}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
                  transition={{ delay: 1.2, duration: 0.8 }}
                  className="flex flex-col sm:flex-row gap-4 mb-12"
                >
                  <motion.div
                    variants={buttonHoverVariants}
                    initial="initial"
                    whileHover="hover"
                  >
                    <Button size="lg" className="group w-full" asChild>
                      <Link to="/contact">
                Hire Me
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
              </Button>
            </motion.div>

                  <motion.div
                    variants={buttonHoverVariants}
                    initial="initial"
                    whileHover="hover"
                  >
                    <Button size="lg" variant="outline" className="w-full" asChild>
                      <Link to="/projects">
                        View Projects
                      </Link>
                    </Button>
                  </motion.div>
                </motion.div>

                {/* Mobile Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
                  transition={{ delay: 1.4, duration: 0.8 }}
                  className="flex md:hidden gap-4 justify-center"
            >
                  <Button variant="ghost" size="icon" className="rounded-full" asChild>
                    <a href="https://github.com/Wakdeprathamesh" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
                  <Button variant="ghost" size="icon" className="rounded-full" asChild>
                    <a href="https://www.linkedin.com/in/prathamesh-wakde-479b09236/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
                  <Button variant="ghost" size="icon" className="rounded-full" asChild>
                    <a href="mailto:wakdeprathamesh12@gmail.com">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </motion.div>
          </motion.div>

              <motion.div
                ref={imageRef}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="relative"
              >
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20 shadow-xl">
                  <Image 
                    src={profileImage}
                    alt="Prathamesh Wakde"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-lg font-bold">
                  <span>2+ Years</span>
                </div>
              </motion.div>
            </div>
        </div>
      </section>

      {/* Overview Section */}
        <section ref={overviewSectionRef} className="py-20 bg-muted/50 w-full scroll-mt-16">
          <div className="container px-4 mx-auto w-full">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 ref={overviewTitleRef} className="text-3xl font-bold mb-6">
              Overview
              </h2>
              <p ref={overviewTextRef} className="text-lg text-muted-foreground">
              I'm Prathamesh Wakde, a Full Stack AI Developer specializing in creating interactive, intelligent web experiences. With 6–7 key projects and a dedicated freelancing team, I turn innovative ideas into reality.
              </p>
            </div>

            <div ref={skillsGridRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                  variants={cardHoverVariants}
                  initial="initial"
                  whileHover="hover"
                  className="skill-card"
                >
                  <Card className="p-6 h-full transition-all duration-300">
                    <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{skill.title}</h3>
                <p className="text-muted-foreground">{skill.description}</p>
                    </div>
                  </Card>
              </motion.div>
            ))}
            </div>
        </div>
      </section>

      {/* Featured Projects Section */}
        <section ref={projectsSectionRef} className="py-20 w-full scroll-mt-16">
          <div className="container px-4 mx-auto w-full">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 ref={projectsTitleRef} className="text-3xl font-bold mb-6">
              Featured Projects
              </h2>
              <p ref={projectsTextRef} className="text-lg text-muted-foreground">
              Explore some of my recent work that showcases my expertise in full-stack development and AI integration.
              </p>
            </div>

            <div ref={projectsGridRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={index}
                  variants={cardHoverVariants}
                  initial="initial"
                  whileHover="hover"
                  className="project-card"
                >
                  <Card className="overflow-hidden h-full transition-all duration-300 border-2 border-transparent hover:border-primary/20 shadow-sm hover:shadow-md">
                  <div className="aspect-video relative overflow-hidden">
                      <div className="absolute top-2 right-2 z-10">
                        <span className="px-3 py-1 text-xs font-medium rounded-full bg-black/70 text-white">
                          {project.tags[0]}
                        </span>
                      </div>
                      <Image
                      src={project.image}
                      alt={project.title}
                        className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
                    />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <Button variant="secondary" size="sm" className="backdrop-blur-sm bg-white/20" asChild>
                          <Link to="/projects">
                        View Project
                        <ExternalLink className="ml-2 h-4 w-4" />
                          </Link>
                      </Button>
                    </div>
                  </div>
                  <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">{project.title}</h3>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                      
                      {project.highlight && (
                        <HomeProjectDetails highlight={project.highlight} />
                      )}
                  </div>
                </Card>
              </motion.div>
            ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section - Hidden until we have real testimonials
        <motion.section 
          className="py-20 bg-muted/30"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center mb-16"
              variants={fadeInUp}
            >
              <h2 className="text-3xl font-bold mb-4">
                Client Testimonials
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                What people are saying about working with me
              </p>
          </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
          <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover="hover"
            initial="initial"
                  className="h-full"
                >
                  <Card 
                    className="p-8 h-full flex flex-col"
                    variants={cardHoverVariants}
                  >
                    <p className="text-lg mb-6 flex-grow italic text-muted-foreground">"{testimonial.quote}"</p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                        <Image 
                          src={testimonial.avatar} 
                          alt={testimonial.author}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold">{testimonial.author}</h4>
                        <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
        */}
        
        {/* Call to Action Section */}
        <section className="py-20 w-full scroll-mt-16">
          <div className="container px-4 mx-auto w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center bg-gradient-to-r from-primary/20 to-primary/5 p-12 rounded-2xl"
            >
              <h2 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Let's collaborate to bring your ideas to life with cutting-edge technology and exceptional design.
              </p>
              <motion.div
                variants={buttonHoverVariants}
                initial="initial"
                whileHover="hover"
                className="inline-block"
              >
                <Button size="lg" className="group" asChild>
                  <Link to="/contact">
                    Get in Touch
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

interface HomeProjectDetailsProps {
  highlight: string;
}

const HomeProjectDetails = ({ highlight }: HomeProjectDetailsProps) => {
  const [expanded, setExpanded] = useState(false);
  
  return (
    <div>
      <Button 
        variant="ghost" 
        className="group text-primary hover:text-primary/80 p-0 h-auto flex items-center"
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? 'Hide Details' : 'View Details'}
        {expanded ? 
          <ChevronUp className="ml-2 h-4 w-4 transition-transform duration-300" /> : 
          <ChevronDown className="ml-2 h-4 w-4 transition-transform duration-300" />
        }
      </Button>
      
      {expanded && (
        <motion.div
          initial={{ height: 0, opacity: 0, marginTop: 0 }}
          animate={{ height: 'auto', opacity: 1, marginTop: 16 }}
          exit={{ height: 0, opacity: 0, marginTop: 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <div className="mb-4 p-3 bg-primary/5 rounded-md border-l-2 border-primary/30">
            <p className="text-sm italic text-primary">
              <span className="font-semibold">Highlight:</span> {highlight}
            </p>
          </div>
          
          <div className="flex gap-4 mt-4">
            <Button size="sm" variant="outline" className="w-full" asChild>
              <Link to="/projects">
                See All Projects
              <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          </motion.div>
      )}
    </div>
  );
};

export default Home;