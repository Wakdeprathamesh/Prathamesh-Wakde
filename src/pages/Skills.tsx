import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { 
  Code, Database, Server, Brain, Cloud, Github, PenTool, Package, 
  Layers, Cpu, Workflow, Users, Zap, Figma, Globe, Sparkles, BarChart, Rocket,
  Building, Lightbulb, Target, Heart, MessageSquare
} from 'lucide-react';
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
    id: 'technical',
    title: 'Technical Skills',
    icon: <Code className="h-6 w-6" />,
    color: 'from-blue-500 to-cyan-400',
    skills: [
      { name: 'HTML', icon: <Code className="h-5 w-5" />, description: 'Semantic markup and structure' },
      { name: 'CSS', icon: <PenTool className="h-5 w-5" />, description: 'Styling and responsive design' },
      { name: 'JavaScript', icon: <Zap className="h-5 w-5" />, description: 'Modern JavaScript programming' },
      { name: 'React', icon: <Cpu className="h-5 w-5" />, description: 'Component-based UI development' },
      { name: 'Node.js', icon: <Server className="h-5 w-5" />, description: 'JavaScript runtime for server-side development' },
      { name: 'Express.js', icon: <Rocket className="h-5 w-5" />, description: 'Web application framework for Node.js' },
      { name: 'MongoDB', icon: <Database className="h-5 w-5" />, description: 'NoSQL database for modern applications' },
      { name: 'REST APIs', icon: <Globe className="h-5 w-5" />, description: 'RESTful API design and implementation' },
      { name: 'FastAPI', icon: <Rocket className="h-5 w-5" />, description: 'Modern, fast web framework for Python' },
      { name: 'Vite', icon: <Rocket className="h-5 w-5" />, description: 'Next-generation frontend tooling' },
      { name: 'Tailwind CSS', icon: <Layers className="h-5 w-5" />, description: 'Utility-first CSS framework' },
      { name: 'Git', icon: <Github className="h-5 w-5" />, description: 'Version control system' },
      { name: 'GitHub', icon: <Github className="h-5 w-5" />, description: 'Collaboration and version control platform' },
      { name: 'VS Code', icon: <Code className="h-5 w-5" />, description: 'Code editor' },
      { name: 'Postman', icon: <Globe className="h-5 w-5" />, description: 'API development and testing' },
      { name: 'SQL', icon: <Database className="h-5 w-5" />, description: 'Relational database query language' },
      { name: 'Firebase', icon: <Database className="h-5 w-5" />, description: 'Backend-as-a-Service platform' },
      { name: 'MongoDB Atlas', icon: <Cloud className="h-5 w-5" />, description: 'Cloud database service' },
      { name: 'Python', icon: <Code className="h-5 w-5" />, description: 'General-purpose programming language' },
      { name: 'C++', icon: <Code className="h-5 w-5" />, description: 'High-performance programming language' },
      { name: 'GSAP', icon: <Sparkles className="h-5 w-5" />, description: 'Advanced animations with GreenSock' },
      { name: 'Locomotive Scroll', icon: <Sparkles className="h-5 w-5" />, description: 'Smooth scrolling library' },
      { name: 'Framer Motion', icon: <Sparkles className="h-5 w-5" />, description: 'React animation library' }
    ]
  },
  {
    id: 'ai',
    title: 'AI & Machine Learning',
    icon: <Brain className="h-6 w-6" />,
    color: 'from-purple-500 to-violet-400',
    skills: [
      { name: 'RAG Architecture', icon: <Workflow className="h-5 w-5" />, description: 'Retrieval-Augmented Generation' },
      { name: 'FAISS', icon: <Database className="h-5 w-5" />, description: 'Vector similarity search library' },
      { name: 'Langchain', icon: <Layers className="h-5 w-5" />, description: 'Framework for LLM applications' },
      { name: 'DeepSeek', icon: <Brain className="h-5 w-5" />, description: 'Large language model integration' },
      { name: 'Gemini API', icon: <Sparkles className="h-5 w-5" />, description: 'Google\'s multimodal AI model' },
      { name: 'Llama Models', icon: <Brain className="h-5 w-5" />, description: 'Open-source large language models' },
      { name: 'LangGraph', icon: <Workflow className="h-5 w-5" />, description: 'Graph-based LLM orchestration' },
      { name: 'MCP Servers', icon: <Server className="h-5 w-5" />, description: 'Model control protocol servers' },
      { name: 'Agentic AI', icon: <Cpu className="h-5 w-5" />, description: 'AI agent development and orchestration' },
      { name: 'Python', icon: <Code className="h-5 w-5" />, description: 'Primary language for ML development' },
      { name: 'PyTorch (CUDA)', icon: <Cpu className="h-5 w-5" />, description: 'Deep learning framework with GPU acceleration' },
      { name: 'HuggingFace', icon: <Package className="h-5 w-5" />, description: 'Transformers library and model hub' },
      { name: 'Prompt Engineering', icon: <MessageSquare className="h-5 w-5" />, description: 'Designing effective prompts for LLMs' },
      { name: 'OpenAI API', icon: <Brain className="h-5 w-5" />, description: 'Integration with OpenAI services' }
    ]
  },
  {
    id: 'product',
    title: 'Product & Business Skills',
    icon: <Lightbulb className="h-6 w-6" />,
    color: 'from-amber-500 to-yellow-400',
    skills: [
      { name: 'Product Ideation', icon: <Lightbulb className="h-5 w-5" />, description: 'Generating and refining product ideas' },
      { name: 'Prototyping', icon: <Layers className="h-5 w-5" />, description: 'Creating functional product prototypes' },
      { name: 'MVP Development', icon: <Rocket className="h-5 w-5" />, description: 'Building minimum viable products' },
      { name: 'User Journey Mapping', icon: <Workflow className="h-5 w-5" />, description: 'Mapping user experiences and interactions' },
      { name: 'UX Focus', icon: <Users className="h-5 w-5" />, description: 'User-centered design approach' },
      { name: 'Feature Roadmapping', icon: <Target className="h-5 w-5" />, description: 'Planning product feature development' },
      { name: 'Prioritization', icon: <BarChart className="h-5 w-5" />, description: 'Evaluating and prioritizing features' },
      { name: 'Market Research', icon: <Globe className="h-5 w-5" />, description: 'Analyzing market trends and opportunities' },
      { name: 'Competitor Analysis', icon: <Target className="h-5 w-5" />, description: 'Evaluating competitive landscape' }
    ]
  },
  {
    id: 'hr',
    title: 'People & HR Skills',
    icon: <Users className="h-6 w-6" />,
    color: 'from-pink-500 to-rose-400',
    skills: [
      { name: 'Talent Acquisition', icon: <Users className="h-5 w-5" />, description: 'Recruiting and hiring processes' },
      { name: 'Onboarding', icon: <Workflow className="h-5 w-5" />, description: 'New employee integration processes' },
      { name: 'HR Operations', icon: <Building className="h-5 w-5" />, description: 'Day-to-day HR management' },
      { name: 'Employee Engagement', icon: <Heart className="h-5 w-5" />, description: 'Fostering workplace satisfaction' },
      { name: 'Culture Building', icon: <Users className="h-5 w-5" />, description: 'Developing positive workplace culture' },
      { name: 'Internal Communication', icon: <MessageSquare className="h-5 w-5" />, description: 'Effective organizational communication' },
      { name: 'Team Coordination', icon: <Users className="h-5 w-5" />, description: 'Managing team dynamics and workflow' },
      { name: 'Leadership Support', icon: <Users className="h-5 w-5" />, description: 'Assisting leadership teams' }
    ]
  },
  {
    id: 'creative',
    title: 'Creative & Communication',
    icon: <PenTool className="h-6 w-6" />,
    color: 'from-teal-500 to-green-400',
    skills: [
      { name: 'Personal Branding', icon: <Target className="h-5 w-5" />, description: 'Developing professional brand identity' },
      { name: 'Storytelling', icon: <MessageSquare className="h-5 w-5" />, description: 'Narrative creation and delivery' },
      { name: 'Content Writing', icon: <PenTool className="h-5 w-5" />, description: 'Blogs, documentation, and copy' },
      { name: 'UI Design', icon: <Figma className="h-5 w-5" />, description: 'Basics of interface design' },
      { name: 'Figma', icon: <Figma className="h-5 w-5" />, description: 'Design and prototyping tool' },
      { name: 'Canva', icon: <PenTool className="h-5 w-5" />, description: 'Graphic design platform' },
      { name: 'Public Speaking', icon: <MessageSquare className="h-5 w-5" />, description: 'Presentation and public address skills' },
      { name: 'Community Building', icon: <Users className="h-5 w-5" />, description: 'Growing and nurturing communities' },
      { name: 'Collaboration', icon: <Users className="h-5 w-5" />, description: 'Working effectively with others' }
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