'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Download, ExternalLink } from 'lucide-react';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'sahaseashangalle@gmail.com',
      href: 'mailto:sahaseashangalle@gmail.com',
      color: 'text-blue-400'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'University of Moratuwa, Sri Lanka',
      href: null,
      color: 'text-green-400'
    },
    {
      icon: Phone,
      label: 'Available for',
      value: 'Internships & Collaborations',
      href: null,
      color: 'text-purple-400'
    }
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/sahas-eashan',
      icon: Github,
      description: 'View my code repositories'
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/sahas-eashan',
      icon: Linkedin,
      description: 'Connect professionally'
    },
    {
      name: 'Resume',
      href: '/resume.pdf',
      icon: Download,
      description: 'Download my latest resume'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission
    console.log('Form submitted:', formData);
    // For now, create a mailto link
    const mailtoLink = `mailto:sahaseashangalle@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Hi Sahas,\n\n${formData.message}\n\nBest regards,\n${formData.name}\n${formData.email}`
    )}`;
    window.location.href = mailtoLink;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="contact" className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-20 lg:py-32">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 15 }, (_, i) => {
          // Use deterministic values based on index to avoid hydration mismatch
          const left = (i * 7.13 * 47) % 100;
          const top = (i * 11.37 * 23) % 100;
          const delay = (i * 0.13) % 2;
          const duration = 2 + (i * 0.2) % 3;

          return (
            <div
              key={i}
              className="absolute w-1 h-1 bg-blue-400/60 rounded-full animate-pulse"
              style={{
                left: left + '%',
                top: top + '%',
                animationDelay: delay + 's',
                animationDuration: duration + 's'
              }}
            />
          );
        })}
      </div>

      <div className="relative z-10 w-full flex flex-col items-center justify-center px-8 lg:px-16">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            I'm always interested in discussing new opportunities, collaborations, and innovative projects.
            Whether you're looking for an intern, a project partner, or just want to connect, feel free to reach out!
          </p>
        </motion.div>

        <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-semibold text-slate-800 dark:text-white mb-6">Let's Connect</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
                I'm currently pursuing my degree in Electronic & Telecommunication Engineering
                and actively seeking opportunities to apply my skills in real-world projects.
                I'm particularly interested in robotics, AI, and hardware development roles.
              </p>
            </motion.div>

            {/* Contact Details */}
            <div className="space-y-4">
              {contactInfo.map((info) => {
                const IconComponent = info.icon;
                return (
                  <motion.div
                    key={info.label}
                    variants={itemVariants}
                    whileHover={{ x: 5 }}
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`p-3 bg-slate-800/50 rounded-lg ${info.color}`}>
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-slate-400 text-sm">{info.label}</p>
                        {info.href ? (
                          <a
                            href={info.href}
                            className="text-white hover:text-blue-400 transition-colors duration-200"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-white">{info.value}</p>
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Social Links */}
            <motion.div
              className="space-y-4 pt-8 border-t border-slate-700/50"
              variants={itemVariants}
            >
              <h4 className="text-lg font-semibold text-white">Connect Online</h4>
              <div className="grid grid-cols-1 gap-3">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 p-3 rounded-lg bg-slate-800/30 hover:bg-slate-800/50 transition-colors duration-200 group"
                      whileHover={{ scale: 1.02 }}
                    >
                      <IconComponent className="w-5 h-5 text-blue-400" />
                      <div className="flex-1">
                        <p className="text-white font-medium">{social.name}</p>
                        <p className="text-slate-400 text-sm">{social.description}</p>
                      </div>
                      <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors duration-200" />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Card>
              <h3 className="text-xl font-semibold text-white mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-slate-300 text-sm mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors duration-200"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-slate-300 text-sm mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors duration-200"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-slate-300 text-sm mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors duration-200"
                    placeholder="What's this about?"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-slate-300 text-sm mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors duration-200 resize-vertical"
                    placeholder="Tell me about your project or opportunity..."
                  />
                </div>
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  icon={<Send size={18} />}
                  className="w-full"
                >
                  Send Message
                </Button>
              </form>
              <p className="text-slate-400 text-sm mt-4 text-center">
                I'll get back to you within 24 hours!
              </p>
            </Card>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16 p-8 rounded-2xl bg-gradient-to-r from-blue-600/10 to-indigo-600/10 border border-blue-600/20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-semibold text-white mb-4">Ready to Collaborate?</h3>
          <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
            I'm always open to discussing exciting projects, internship opportunities,
            or potential collaborations in robotics, AI, and technology innovation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button
              variant="primary"
              size="lg"
              icon={<Mail size={18} />}
              onClick={() => window.location.href = 'mailto:sahaseashangalle@gmail.com'}
            >
              Email Me
            </Button>
            <Button
              variant="outline"
              size="lg"
              icon={<Download size={18} />}
              onClick={() => window.open('/resume.pdf', '_blank')}
            >
              Download Resume
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;