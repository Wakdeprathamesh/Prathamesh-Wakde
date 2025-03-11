import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle } from 'lucide-react';
import { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters')
});

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

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();
  const [formspreeState, handleFormspreeSubmit] = useForm("xzzebeek");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Validate form data
    try {
      formSchema.parse(formState);
      // If validation passes, submit to Formspree
      await handleFormspreeSubmit(e);
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors = error.flatten().fieldErrors;
        
        // Show toast with first error
        const firstErrorField = Object.keys(fieldErrors)[0];
        const firstErrorMessage = fieldErrors[firstErrorField]?.[0];
        
        if (firstErrorMessage) {
          toast({
            title: "Validation Error",
            description: firstErrorMessage,
            variant: "destructive"
          });
        }
      }
    }
  };

  // Reset form after successful submission
  if (formspreeState.succeeded) {
    toast({
      title: "Message sent successfully!",
      description: "I'll get back to you as soon as possible.",
    });
    
    // Reset form after showing success message
    setTimeout(() => {
      setFormState({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 100);
  }

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: 'Email',
      value: 'wakdeprathamesh12@gmail.com',
      link: 'mailto:wakdeprathamesh12@gmail.com'
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: 'Phone',
      value: '+91 9175686589',
      link: 'tel:+919175686589'
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: 'Location',
      value: 'Pune, India',
      link: 'https://maps.google.com'
    }
  ];

  return (
    <div className="min-h-screen pt-16">
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
            Get in Touch
          </motion.h1>
          <motion.p 
            variants={fadeInUp}
            className="text-xl text-muted-foreground"
          >
            Have a project in mind? Let's discuss how we can work together to bring your ideas to life.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <Card className="p-6 text-center hover:bg-muted/50 transition-colors">
                <a
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex flex-col items-center"
                >
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    {info.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{info.title}</h3>
                  <p className="text-muted-foreground">{info.value}</p>
                </a>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-2xl mx-auto"
        >
          <Card className="p-8">
            <motion.h2 
              variants={fadeInUp}
              className="text-2xl font-bold mb-8"
            >
              Send a Message
            </motion.h2>
            
            {formspreeState.succeeded ? (
              <motion.div 
                variants={fadeInUp}
                className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg text-center"
              >
                <CheckCircle className="h-12 w-12 mx-auto text-green-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Message Sent!</h3>
                <p className="text-muted-foreground mb-4">
                  Thank you for reaching out. I'll get back to you as soon as possible.
                </p>
                <Button 
                  onClick={() => window.location.reload()} 
                  variant="outline"
                >
                  Send Another Message
                </Button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div variants={fadeInUp}>
                  <Input
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                  />
                  <ValidationError prefix="Name" field="name" errors={formspreeState.errors} />
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <Input
                    name="email"
                    type="email"
                    value={formState.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                  />
                  <ValidationError prefix="Email" field="email" errors={formspreeState.errors} />
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <Input
                    name="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                  />
                  <ValidationError prefix="Subject" field="subject" errors={formspreeState.errors} />
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <Textarea
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    className="min-h-[150px]"
                  />
                  <ValidationError prefix="Message" field="message" errors={formspreeState.errors} />
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <Button type="submit" className="w-full" disabled={formspreeState.submitting}>
                    {formspreeState.submitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </motion.div>
              </form>
            )}
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;