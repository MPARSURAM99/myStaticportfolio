"use client";

import { motion } from 'framer-motion';
import { ExternalLink, Github, Calendar, Tag } from 'lucide-react';

const projectsData = [
  {
    title: 'Cloud Compiler - Realtime Collaboration',
    description: 'A real-time collaborative code editor with live compilation and execution capabilities. Features include syntax highlighting, multiple language support, and seamless collaboration.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Express.js', 'Socket.io'],
    github: 'https://github.com/MPARSURAM99/Cloud-Compiler-Realtime-Collaboration',
    live: 'https://cloud-compiler-realtime-collaboration.vercel.app',
    image: '/projects/cloud-compiler.jpg',
    featured: true
  },
  {
    title: 'Spring Angular E-commerce App',
    description: 'Full-stack e-commerce platform with separate admin and user modules. Features include product management, order processing, user authentication, and payment integration.',
    tech: ['Angular', 'Spring Boot', 'MySQL', 'REST API', 'JWT'],
    github: 'https://github.com/MPARSURAM99/spring-angular-E-com-app',
    live: null,
    image: '/projects/ecommerce.jpg',
    featured: true
  },
  {
    title: 'Hotel Management System',
    description: 'Comprehensive hotel booking system with admin panel for room management, booking processing, customer management, and reporting features.',
    tech: ['Java', 'JSP', 'Servlets', 'MySQL', 'HTML', 'CSS'],
    github: 'https://github.com/MPARSURAM99/HotelManagementSystem',
    live: null,
    image: '/projects/hotel.jpg',
    featured: false
  },
  {
    title: 'Portfolio Website',
    description: 'Responsive personal portfolio website showcasing skills, projects, and achievements with modern design and smooth animations.',
    tech: ['React', 'Tailwind CSS', 'JavaScript', 'Responsive Design'],
    github: 'https://github.com/MPARSURAM99/my-portfolio',
    live: 'https://my-portfolio-six-phi-40.vercel.app',
    image: '/projects/portfolio.jpg',
    featured: false
  }
];

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
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

  return (
    <section id="projects" className="py-20 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A showcase of my development work and technical capabilities
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {projectsData.map((project, index) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className={`group relative bg-background/50 backdrop-blur-sm border border-border/50 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 ${
                  project.featured ? 'lg:col-span-1' : ''
                }`}
              >
                {/* Project Image */}
                <div className="relative h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
                  <div className="w-full h-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 flex items-center justify-center">
                    <motion.div
                      animate={{
                        scale: [1, 1.1, 1],
                        rotate: [0, 5, 0]
                      }}
                      transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="text-6xl opacity-20"
                    >
                      💻
                    </motion.div>
                  </div>
                  
                  {project.featured && (
                    <div className="absolute top-4 right-4 z-20">
                      <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-semibold">
                        Featured
                      </span>
                    </div>
                  )}
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-500 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center gap-1 px-3 py-1 bg-secondary/50 text-xs rounded-full border border-border/50"
                      >
                        <Tag className="w-3 h-3" />
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project Links */}
                  <div className="flex gap-4">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2 bg-secondary/50 hover:bg-secondary border border-border/50 rounded-lg transition-all duration-300 text-sm"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </motion.a>
                    {project.live && (
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg transition-all duration-300 text-sm hover:shadow-lg"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </motion.a>
                    )}
                  </div>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </motion.div>
            ))}
          </div>

          {/* View All Projects Button */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-12"
          >
            <motion.a
              href="https://github.com/MPARSURAM99"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-3 bg-secondary/50 backdrop-blur-sm border border-border/50 rounded-lg hover:border-blue-500/50 transition-all duration-300"
            >
              <Github className="w-5 h-5" />
              View All Projects on GitHub
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}