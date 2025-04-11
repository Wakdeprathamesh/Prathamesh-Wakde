import { motion } from 'framer-motion';
import { Heart, Brain, Code, Users, Target, Rocket, Lightbulb, Download, FileText } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

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

const About = () => {
  const timeline = [
    {
      year: '2021',
      title: 'Co-founder & CTO - MillionaireMentality',
      description: 'Launched an EdTech platform focused on financial literacy and entrepreneurial skills. Scaled it to significant revenue before strategic closure.',
      icon: <Rocket className="h-6 w-6" />,
    },
    {
      year: '2022',
      title: 'Full-Stack Developer - PHN Technologies',
      description: 'Worked on high-performance web applications and scalable backend solutions.',
      icon: <Code className="h-6 w-6" />,
    },
    {
      year: '2023',
      title: 'Freelancer | Head of Writing & Poetry Club',
      description: 'Led creative and technical projects, blending art and code. Built a freelancing team focused on AI-driven web solutions.',
      icon: <Users className="h-6 w-6" />,
    },
    {
      year: '2024',
      title: 'Gen AI & BI Intern - Cognizant',
      description: 'Integrated AI models into enterprise systems, optimizing backend performance.',
      icon: <Brain className="h-6 w-6" />,
    },
    {
      year: '2025',
      title: 'Building AyurMarg | Hackathons',
      description: 'Developing an AI-powered Ayurvedic health assistant while actively participating in hackathons and freelancing.',
      icon: <Lightbulb className="h-6 w-6" />,
    }
  ];

  const values = [
    {
      icon: <Heart className="h-6 w-6 text-red-500" />,
      title: 'Passion for Innovation',
      description: 'Driven by the desire to create cutting-edge solutions'
    },
    {
      icon: <Users className="h-6 w-6 text-blue-500" />,
      title: 'Team Collaboration',
      description: 'Believe in the power of collaborative development'
    },
    {
      icon: <Target className="h-6 w-6 text-green-500" />,
      title: 'Goal-Oriented',
      description: 'Focused on delivering measurable results'
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      <div className="container px-4 mx-auto py-16">
        {/* Bio Section */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-4xl mx-auto mb-20"
        >
          <motion.h1 
            variants={fadeInUp}
            className="text-4xl font-bold mb-8"
          >
            About Me
          </motion.h1>
          <motion.div 
            variants={fadeInUp}
            className="prose prose-lg dark:prose-invert"
          >
            <p className="text-xl text-muted-foreground mb-6">
              I'm Prathamesh Wakde, a passionate Full Stack AI Developer with a rich background in building engaging, intelligent digital experiences. My journey spans from early coding challenges to leading innovative projects with my talented freelancing team.
            </p>
            <p className="text-lg text-muted-foreground">
              I believe in continuous learning, creativity, and delivering excellence. With expertise in both front-end and back-end development, coupled with AI integration capabilities, I help businesses transform their digital presence.
            </p>
          </motion.div>
        </motion.div>

        {/* Resume Download Section */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-4xl mx-auto mb-20 bg-card rounded-lg p-6 border"
        >
          <motion.h2 
            variants={fadeInUp}
            className="text-2xl font-semibold mb-4"
          >
            My Resume
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-muted-foreground mb-6"
          >
            Download my resume tailored to different professional roles:
          </motion.p>
          <motion.div 
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button className="flex items-center gap-2" size="lg" asChild>
              <a 
                href="/assets/resume/ai-powered-full-stack-engineer.pdf" 
                download="Prathamesh-Wakde-Technical-Resume.pdf"
              >
                <FileText className="h-5 w-5 mr-1" />
                Technical/AI Resume
                <Download className="h-4 w-4 ml-2" />
              </a>
            </Button>
            <Button className="flex items-center gap-2" variant="outline" size="lg" asChild>
              <a 
                href="/assets/resume/Product_Resume.pdf" 
                download="Prathamesh-Wakde-Business-Resume.pdf"
              >
                <FileText className="h-5 w-5 mr-1" />
                Business/Product Resume
                <Download className="h-4 w-4 ml-2" />
              </a>
            </Button>
          </motion.div>
        </motion.div>

        {/* Timeline Section */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-4xl mx-auto mb-20"
        >
          <motion.h2 
            variants={fadeInUp}
            className="text-3xl font-bold mb-12"
          >
            My Journey
          </motion.h2>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-border" />
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="relative flex gap-8 mb-12"
              >
                <div className="absolute left-0 w-16 h-16 rounded-full bg-muted flex items-center justify-center">
                  {item.icon}
                </div>
                <div className="ml-24">
                  <span className="text-sm text-muted-foreground">{item.year}</span>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Values Section */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-4xl mx-auto"
        >
          <motion.h2 
            variants={fadeInUp}
            className="text-3xl font-bold mb-12"
          >
            Core Values
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
              >
                <Card className="p-6">
                  <div className="mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;