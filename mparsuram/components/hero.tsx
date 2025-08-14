"use client";

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Download, Mail, Phone, MapPin, Github, Linkedin, ExternalLink } from 'lucide-react';

const roles = [
  'Full Stack Developer',
  'Java Developer',
  'Spring Boot Expert',
  'Angular Developer',
  'MERN Stack Developer',
  'React Developer'
];

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = roles[currentRole];
    const timeout = setTimeout(() => {
      if (!isDeleting && displayText === role) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setCurrentRole((prev) => (prev + 1) % roles.length);
      } else if (isDeleting) {
        setDisplayText(role.substring(0, displayText.length - 1));
      } else {
        setDisplayText(role.substring(0, displayText.length + 1));
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [currentRole, displayText, isDeleting]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const contactInfo = [
    { icon: Mail, text: 'mparsuram99@gmail.com', href: 'mailto:mparsuram99@gmail.com' },
    { icon: Phone, text: '+91 7326899101', href: 'tel:+917326899101' },
    { icon: MapPin, text: 'Cuttack, Odisha, India', href: null },
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/MPARSURAM99', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/mparsuram', label: 'LinkedIn' },
    { icon: ExternalLink, href: 'https://mparsuram.vercel.app', label: 'Portfolio' },
  ];

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-pink-500/10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent"></div>
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{
          y: [-20, 20, -20],
          rotate: [0, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-20 left-10 w-20 h-20 border border-blue-500/20 rounded-lg"
      />
      <motion.div
        animate={{
          y: [20, -20, 20],
          rotate: [360, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-20 right-10 w-16 h-16 border border-purple-500/20 rounded-full"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          <motion.div variants={itemVariants} className="mb-8">
            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                PARSURAM MAHARANA
              </span>
            </motion.h1>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-12">
            <div className="text-xl md:text-2xl lg:text-3xl text-muted-foreground h-12 flex items-center justify-center">
              <span>{displayText}</span>
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="ml-1 text-blue-500"
              >
                |
              </motion.span>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants} className="mb-12">
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center space-x-2 bg-secondary/50 backdrop-blur-sm rounded-lg px-4 py-2 border border-border/50"
                >
                  <item.icon className="w-4 h-4 text-blue-500" />
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {item.text}
                    </a>
                  ) : (
                    <span className="text-sm text-muted-foreground">{item.text}</span>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-4 mb-8">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 rounded-lg bg-secondary/50 backdrop-blur-sm border border-border/50 hover:border-blue-500/50 transition-all duration-300 group"
                  aria-label={link.label}
                >
                  <link.icon className="w-5 h-5 text-muted-foreground group-hover:text-blue-500 transition-colors" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Download className="mr-2 w-5 h-5" />
              View Resume
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center px-8 py-4 bg-secondary/50 backdrop-blur-sm border border-border/50 text-foreground rounded-lg font-semibold text-lg hover:border-blue-500/50 transition-all duration-300"
            >
              <Mail className="mr-2 w-5 h-5" />
              Contact Me
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-blue-500/50 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-blue-500 rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
}