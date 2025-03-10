import { motion } from 'framer-motion';
import { ExternalLink, Github, Search, ChevronDown, ChevronUp, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Image } from '@/components/ui/image';
import { Link } from 'react-router-dom';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const Projects = () => {
  const [filter, setFilter] = useState('');

  const projects = [
    {
      title: 'AyurMarg (In Progress)',
      description: 'AI-powered Ayurvedic health assistant that blends ancient Ayurvedic principles with modern AI solutions to offer personalized health insights.',
      image: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&q=80&w=1000',
      tags: ['React', 'Node.js', 'MongoDB', 'DeepSeek R1', 'GSAP', 'Locomotive Scroll'],
      features: [
        'Dynamic Dosha Analysis Test',
        'AI-driven health and lifestyle recommendations',
        'Smooth parallax scrolling and micro-interactions',
        'Ayurvedic search engine with verified insights'
      ],
      highlight: 'Combines AI with healthcare, showcasing technical depth and domain expertise.',
      demoUrl: 'https://demo.example.com',
      githubUrl: 'https://github.com/Wakdeprathamesh'
    },
    {
      title: 'Expiry-Based Discount System',
      description: 'Developed a system for businesses to automate discounting based on product expiry dates, reducing waste and increasing sales.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=1000',
      tags: ['Node.js', 'Express.js', 'MongoDB', 'React'],
      features: [
        'Real-time product tracking',
        'Automated discount generation based on expiry date',
        'Secure data handling and real-time updates'
      ],
      highlight: 'A practical business solution with measurable financial benefits.',
      demoUrl: 'https://demo.example.com',
      githubUrl: 'https://github.com/Wakdeprathamesh'
    },
    {
      title: 'Gen AI-Enabled Dashboard',
      description: 'Built an AI-enabled dashboard that generates real-time business insights and predictive analytics using Generative AI.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000',
      tags: ['React', 'Node.js', 'MongoDB', 'OpenAI API'],
      features: [
        'AI-driven data analysis and trend predictions',
        'Customizable UI with real-time chart updates',
        'Natural language-based query interface'
      ],
      highlight: 'Blends AI and business intelligence for data-driven decision-making.',
      demoUrl: 'https://demo.example.com',
      githubUrl: 'https://github.com/Wakdeprathamesh'
    },
    {
      title: 'AI-Based Automatic Website Builder',
      description: 'Developed a web builder that generates fully functional websites based on user instructions using AI.',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&q=80&w=1000',
      tags: ['React (Vite)', 'Node.js', 'Express.js', 'Gemini API', 'MongoDB'],
      features: [
        'Real-time AI-based design suggestions',
        'Auto-generated web content and structure',
        'User customization with live preview'
      ],
      highlight: 'Showcases AI and frontend-backend integration expertise.',
      demoUrl: 'https://demo.example.com',
      githubUrl: 'https://github.com/Wakdeprathamesh'
    },
    {
      title: 'Restaurant Ordering System',
      description: 'Created an online restaurant ordering system with real-time order tracking and payment integration.',
      image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=1000',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe API'],
      features: [
        'Order status tracking',
        'Secure payment gateway',
        'Mobile-responsive design'
      ],
      highlight: 'A high-traffic handling system with secure transaction flow.',
      demoUrl: 'https://demo.example.com',
      githubUrl: 'https://github.com/Wakdeprathamesh'
    },
    {
      title: 'Smart Parking & Car Pooling',
      description: 'Built an AI-powered platform that allows real-time parking spot availability and carpooling suggestions.',
      image: 'https://images.unsplash.com/photo-1573648952759-5785fba4ded8?auto=format&fit=crop&q=80&w=1000',
      tags: ['React', 'Node.js', 'MongoDB', 'OpenStreetMap API'],
      features: [
        'AI-based real-time parking spot availability',
        'Smart carpooling route suggestions',
        'User authentication and feedback system'
      ],
      highlight: 'Demonstrates AI and real-time data handling skills.',
      demoUrl: 'https://demo.example.com',
      githubUrl: 'https://github.com/Wakdeprathamesh'
    }
  ];

  const filteredProjects = projects.filter(project =>
    project.title.toLowerCase().includes(filter.toLowerCase()) ||
    project.description.toLowerCase().includes(filter.toLowerCase()) ||
    project.tags.some(tag => tag.toLowerCase().includes(filter.toLowerCase()))
  );

  return (
    <div className="min-h-screen pt-16">
      <div className="container px-4 mx-auto py-16">
        <motion.div
          initial="initial"
          animate="animate"
          variants={staggerContainer}
          className="max-w-4xl mx-auto mb-12"
        >
          <motion.h1 
            variants={fadeInUp}
            className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70"
          >
            Projects
          </motion.h1>
          <motion.p 
            variants={fadeInUp}
            className="text-xl text-muted-foreground mb-8"
          >
            Explore my portfolio of projects showcasing expertise in full-stack development, AI integration, and innovative solutions.
          </motion.p>
          
          <motion.div 
            variants={fadeInUp}
            className="relative mb-12"
          >
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
            <Input
              type="text"
              placeholder="Search projects by name, description, or technology..."
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="pl-10"
            />
          </motion.div>
        </motion.div>

        <motion.div
          initial="initial"
          animate="animate"
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="group"
            >
              <Card className="overflow-hidden h-full flex flex-col border-2 border-transparent hover:border-primary/20 transition-all duration-300 shadow-sm hover:shadow-md">
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
                    <div className="flex gap-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <Button variant="secondary" size="sm" className="backdrop-blur-sm bg-white/20" asChild>
                        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                          Live Demo
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                      <Button variant="secondary" size="sm" className="backdrop-blur-sm bg-white/20" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          Code
                          <Github className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
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
                  
                  <div className="mt-auto pt-4">
                    <ExpandableProjectDetails 
                      features={project.features} 
                      highlight={project.highlight}
                    />
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

interface ExpandableProjectDetailsProps {
  features: string[];
  highlight: string;
}

const ExpandableProjectDetails = ({ features, highlight }: ExpandableProjectDetailsProps) => {
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
          {highlight && (
            <div className="mb-4 p-3 bg-primary/5 rounded-md border-l-2 border-primary/30">
              <p className="text-sm italic text-primary">
                <span className="font-semibold">Highlight:</span> {highlight}
              </p>
            </div>
          )}
          
          {features && features.length > 0 && (
            <div className="mb-4">
              <h4 className="text-sm font-semibold mb-2">Key Features:</h4>
              <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                {features.map((feature, featureIndex) => (
                  <li key={featureIndex}>{feature}</li>
                ))}
              </ul>
            </div>
          )}
          
          <div className="flex gap-4 mt-4">
            <Button size="sm" variant="outline" className="w-full" asChild>
              <a href="#" target="_blank" rel="noopener noreferrer">
                Live Demo
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button size="sm" variant="outline" className="w-full" asChild>
              <a href="#" target="_blank" rel="noopener noreferrer">
                View Code
                <Github className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Projects;