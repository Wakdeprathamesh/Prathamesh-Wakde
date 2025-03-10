import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { 
  Code, Database, Server, Brain, Cloud, Terminal, Github, PenTool, Package, 
  Layers, Cpu, Workflow, Users, Zap, Figma, Globe, Sparkles, BarChart, Rocket, Clock
} from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Define types
interface Skill {
  name: string;
  icon: React.ReactNode;
  description: string;
}

interface SkillCategory {
  id: string;
  title: string;
  icon: React.ReactNode;
  color: string;
  skills: Skill[];
}

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.05
    }
  }
};

const hexagonVariants = {
  initial: { scale: 0.8, opacity: 0 },
  animate: { scale: 1, opacity: 1, transition: { duration: 0.5 } },
  hover: { scale: 1.05, transition: { duration: 0.2 } }
};

// Skill categories with their skills
const skillCategories: SkillCategory[] = [
  {
    id: 'frontend',
    title: 'Frontend Development',
    icon: <Code className="h-6 w-6" />,
    color: 'from-blue-500 to-cyan-400',
    skills: [
      { name: 'HTML5', icon: <Code className="h-5 w-5" />, description: 'Semantic markup and structure' },
      { name: 'CSS3', icon: <PenTool className="h-5 w-5" />, description: 'Styling and responsive design' },
      { name: 'JavaScript (ES6+)', icon: <Zap className="h-5 w-5" />, description: 'Modern JavaScript programming' },
      { name: 'React.js', icon: <Cpu className="h-5 w-5" />, description: 'Component-based UI development' },
      { name: 'Tailwind CSS', icon: <Layers className="h-5 w-5" />, description: 'Utility-first CSS framework' },
      { name: 'GSAP', icon: <Sparkles className="h-5 w-5" />, description: 'Advanced animations with GreenSock' },
      { name: 'Framer Motion', icon: <Zap className="h-5 w-5" />, description: 'React animation library' },
      { name: 'Vite', icon: <Rocket className="h-5 w-5" />, description: 'Next-generation frontend tooling' },
      { name: 'Locomotive.js', icon: <Sparkles className="h-5 w-5" />, description: 'Smooth scrolling library' }
    ]
  },
  {
    id: 'backend',
    title: 'Backend Development',
    icon: <Server className="h-6 w-6" />,
    color: 'from-green-500 to-emerald-400',
    skills: [
      { name: 'Node.js', icon: <Server className="h-5 w-5" />, description: 'JavaScript runtime for server-side development' },
      { name: 'Express.js', icon: <Rocket className="h-5 w-5" />, description: 'Web application framework for Node.js' },
      { name: 'MongoDB', icon: <Database className="h-5 w-5" />, description: 'NoSQL database for modern applications' },
      { name: 'SQL', icon: <Database className="h-5 w-5" />, description: 'Relational database query language' },
      { name: 'REST APIs', icon: <Globe className="h-5 w-5" />, description: 'RESTful API design and implementation' },
      { name: 'WebSockets', icon: <Zap className="h-5 w-5" />, description: 'Real-time bidirectional communication' },
      { name: 'JWT', icon: <Layers className="h-5 w-5" />, description: 'JSON Web Tokens for authentication' },
      { name: 'OAuth', icon: <Layers className="h-5 w-5" />, description: 'Open standard for access delegation' }
    ]
  },
  {
    id: 'ai',
    title: 'AI/ML Integration',
    icon: <Brain className="h-6 w-6" />,
    color: 'from-purple-500 to-violet-400',
    skills: [
      { name: 'DeepSeek R1', icon: <Brain className="h-5 w-5" />, description: 'Advanced AI model integration' },
      { name: 'Llama 2', icon: <Brain className="h-5 w-5" />, description: 'Open-source large language model' },
      { name: 'Gemini API', icon: <Sparkles className="h-5 w-5" />, description: 'Google\'s multimodal AI model' },
      { name: 'OpenAI API', icon: <Brain className="h-5 w-5" />, description: 'GPT integration for applications' },
      { name: 'TensorFlow', icon: <Cpu className="h-5 w-5" />, description: 'Machine learning framework' },
      { name: 'LangChain', icon: <Layers className="h-5 w-5" />, description: 'Framework for LLM applications' },
      { name: 'RAG', icon: <Database className="h-5 w-5" />, description: 'Retrieval-Augmented Generation' }
    ]
  },
  {
    id: 'fullstack',
    title: 'Full-Stack Technologies',
    icon: <Layers className="h-6 w-6" />,
    color: 'from-red-500 to-orange-400',
    skills: [
      { name: 'MERN Stack', icon: <Layers className="h-5 w-5" />, description: 'MongoDB, Express, React, Node.js' },
      { name: 'MVC Architecture', icon: <Workflow className="h-5 w-5" />, description: 'Model-View-Controller pattern' },
      { name: 'Authentication', icon: <Layers className="h-5 w-5" />, description: 'User authentication systems' },
      { name: 'Middleware', icon: <Workflow className="h-5 w-5" />, description: 'Request processing middleware' },
      { name: 'Redux', icon: <Workflow className="h-5 w-5" />, description: 'State management for React' },
      { name: 'Zustand', icon: <Workflow className="h-5 w-5" />, description: 'Modern state management' }
    ]
  },
  {
    id: 'tools',
    title: 'Tools & Platforms',
    icon: <Package className="h-6 w-6" />,
    color: 'from-amber-500 to-yellow-400',
    skills: [
      { name: 'Git & GitHub', icon: <Github className="h-5 w-5" />, description: 'Version control and collaboration' },
      { name: 'Docker', icon: <Package className="h-5 w-5" />, description: 'Containerization platform' },
      { name: 'Postman', icon: <Globe className="h-5 w-5" />, description: 'API development and testing' },
      { name: 'Firebase', icon: <Database className="h-5 w-5" />, description: 'Backend-as-a-Service platform' },
      { name: 'Netlify', icon: <Cloud className="h-5 w-5" />, description: 'Web hosting and automation' },
      { name: 'Vercel', icon: <Cloud className="h-5 w-5" />, description: 'Deployment and hosting platform' },
      { name: 'Railway', icon: <Cloud className="h-5 w-5" />, description: 'Infrastructure platform' },
      { name: 'Bolt.new', icon: <Zap className="h-5 w-5" />, description: 'Development environment' },
      { name: 'Figma', icon: <Figma className="h-5 w-5" />, description: 'Design and prototyping tool' }
    ]
  },
  {
    id: 'soft',
    title: 'Soft Skills',
    icon: <Users className="h-6 w-6" />,
    color: 'from-pink-500 to-rose-400',
    skills: [
      { name: 'Problem-Solving', icon: <Cpu className="h-5 w-5" />, description: 'Analytical approach to challenges' },
      { name: 'Team Leadership', icon: <Users className="h-5 w-5" />, description: 'Leading development teams' },
      { name: 'Agile & Scrum', icon: <Workflow className="h-5 w-5" />, description: 'Agile methodologies and practices' },
      { name: 'Communication', icon: <Users className="h-5 w-5" />, description: 'Clear and effective communication' },
      { name: 'Critical Thinking', icon: <Brain className="h-5 w-5" />, description: 'Analytical problem assessment' },
      { name: 'Time Management', icon: <Clock className="h-5 w-5" />, description: 'Efficient task prioritization' }
    ]
  },
  {
    id: 'cloud',
    title: 'Cloud & Deployment',
    icon: <Cloud className="h-6 w-6" />,
    color: 'from-sky-500 to-blue-400',
    skills: [
      { name: 'AWS', icon: <Cloud className="h-5 w-5" />, description: 'Amazon Web Services basics' },
      { name: 'Heroku', icon: <Cloud className="h-5 w-5" />, description: 'PaaS for application deployment' },
      { name: 'DigitalOcean', icon: <Cloud className="h-5 w-5" />, description: 'Cloud infrastructure provider' },
      { name: 'Firebase Hosting', icon: <Cloud className="h-5 w-5" />, description: 'Web application hosting' }
    ]
  },
  {
    id: 'libraries',
    title: 'Libraries & Frameworks',
    icon: <Package className="h-6 w-6" />,
    color: 'from-indigo-500 to-blue-400',
    skills: [
      { name: 'Next.js', icon: <Rocket className="h-5 w-5" />, description: 'React framework for production' },
      { name: 'Bootstrap', icon: <Layers className="h-5 w-5" />, description: 'CSS framework for responsive design' },
      { name: 'Chakra UI', icon: <Layers className="h-5 w-5" />, description: 'Component library for React' },
      { name: 'ShadCN', icon: <Layers className="h-5 w-5" />, description: 'UI component library' },
      { name: 'Material UI', icon: <Layers className="h-5 w-5" />, description: 'React UI framework' }
    ]
  },
  {
    id: 'animations',
    title: 'Web Animations & UX',
    icon: <Sparkles className="h-6 w-6" />,
    color: 'from-teal-500 to-green-400',
    skills: [
      { name: 'Parallax Scrolling', icon: <Sparkles className="h-5 w-5" />, description: 'Depth effect with scrolling' },
      { name: 'Micro-interactions', icon: <Sparkles className="h-5 w-5" />, description: 'Subtle animation feedback' },
      { name: 'Smooth Scrolling', icon: <Sparkles className="h-5 w-5" />, description: 'Enhanced scrolling experience' },
      { name: 'Hover Effects', icon: <Sparkles className="h-5 w-5" />, description: 'Interactive element feedback' },
      { name: 'Lazy Loading', icon: <Sparkles className="h-5 w-5" />, description: 'Performance optimization technique' }
    ]
  },
  {
    id: 'devops',
    title: 'DevOps & Automation',
    icon: <Terminal className="h-6 w-6" />,
    color: 'from-gray-500 to-slate-400',
    skills: [
      { name: 'GitHub Actions', icon: <Workflow className="h-5 w-5" />, description: 'CI/CD automation' },
      { name: 'CI/CD Pipelines', icon: <Workflow className="h-5 w-5" />, description: 'Continuous integration/deployment' },
      { name: 'Environment Variables', icon: <Terminal className="h-5 w-5" />, description: 'Configuration management' },
      { name: 'Load Balancing', icon: <BarChart className="h-5 w-5" />, description: 'Traffic distribution' }
    ]
  }
];

// Hexagon component
interface HexagonProps {
  skill: Skill;
  color: string;
  onClick: (skill: Skill) => void;
}

const Hexagon = ({ skill, color, onClick }: HexagonProps) => {
  return (
    <motion.div
      className="skill-hexagon"
      variants={hexagonVariants}
      initial="initial"
      animate="animate"
      whileHover="hover"
      onClick={() => onClick(skill)}
    >
      <div className={`hexagon-inner bg-gradient-to-br ${color}`}>
        <div className="hexagon-content">
          {skill.icon}
          <span className="skill-name">{skill.name}</span>
        </div>
      </div>
    </motion.div>
  );
};

// Main Skills component
const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  
  // Handle skill click
  const handleSkillClick = (skill: Skill) => {
    setSelectedSkill(skill);
  };
  
  // Close modal
  const closeModal = () => {
    setSelectedSkill(null);
  };
  
  // GSAP animations
  useEffect(() => {
    if (!skillsRef.current) return;
    
    const ctx = gsap.context(() => {
      // Animate categories
      gsap.from(".category-title", {
        y: 30,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: skillsRef.current,
          start: "top 80%"
        }
      });
    }, skillsRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen pt-16" ref={skillsRef}>
      <div className="container px-4 mx-auto py-16">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-4xl mx-auto mb-16"
        >
          <motion.h1 
            variants={fadeInUp}
            className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70"
          >
            Skills & Expertise
          </motion.h1>
          <motion.p 
            variants={fadeInUp}
            className="text-xl text-muted-foreground"
          >
            With extensive experience in full-stack development and AI integration, I bring a comprehensive skill set to every project.
          </motion.p>
        </motion.div>

        {/* Hexagonal Skill Map */}
        <div className="mb-16">
          {skillCategories.map((category) => (
            <div key={category.id} className="mb-16">
              <div className="flex items-center gap-3 mb-8 category-title">
                <div className={`p-2 rounded-lg bg-gradient-to-br ${category.color}`}>
                  {category.icon}
                </div>
                <h2 className="text-2xl font-semibold">{category.title}</h2>
              </div>
              
              <motion.div 
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="hexagon-grid"
              >
                {category.skills.map((skill, index) => (
                  <TooltipProvider key={index}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div>
                          <Hexagon 
                            skill={skill} 
                            color={category.color} 
                            onClick={handleSkillClick} 
                          />
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{skill.description}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
        
        {/* Skill Detail Modal */}
        {selectedSkill && (
          <motion.div 
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div 
              className="bg-card p-6 rounded-lg max-w-md w-full mx-4"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-3 mb-4">
                {selectedSkill.icon}
                <h3 className="text-xl font-semibold">{selectedSkill.name}</h3>
              </div>
              <p className="text-muted-foreground mb-4">{selectedSkill.description}</p>
              <button 
                className="px-4 py-2 bg-primary text-primary-foreground rounded-md w-full"
                onClick={closeModal}
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </div>
      
      {/* CSS for hexagonal grid */}
      <style>{`
        .hexagon-grid {
          display: flex;
          flex-wrap: wrap;
          margin-left: 1rem;
          margin-bottom: 2rem;
        }
        
        .skill-hexagon {
          margin: 0 1rem 1.5rem 0;
          cursor: pointer;
          width: 120px;
          height: 120px;
          position: relative;
        }
        
        .hexagon-inner {
          width: 100%;
          height: 100%;
          clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }
        
        .hexagon-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: white;
          text-align: center;
          padding: 0.5rem;
        }
        
        .skill-name {
          margin-top: 0.5rem;
          font-size: 0.8rem;
          font-weight: 500;
        }
        
        @media (max-width: 768px) {
          .skill-hexagon {
            width: 100px;
            height: 100px;
          }
          
          .skill-name {
            font-size: 0.7rem;
          }
        }
        
        @media (max-width: 640px) {
          .skill-hexagon {
            width: 80px;
            height: 80px;
          }
          
          .skill-name {
            font-size: 0.6rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Skills;