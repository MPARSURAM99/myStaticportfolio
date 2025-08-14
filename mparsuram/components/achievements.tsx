"use client";

import { motion } from 'framer-motion';
import { Trophy, Code, GitBranch, Users, Target, CheckCircle } from 'lucide-react';

const achievements = [
  {
    icon: Code,
    title: 'Solved 100+ Coding Problems',
    description: 'Successfully solved over 100 coding problems on GeeksForGeeks, demonstrating strong problem-solving skills and algorithmic thinking.',
    metric: '100+',
    category: 'Problem Solving',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: GitBranch,
    title: 'Multiple Real-World Projects',
    description: 'Built and deployed multiple full-stack applications using Java, Spring Boot, Hibernate, React, and modern web technologies.',
    metric: '10+',
    category: 'Development',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: Target,
    title: 'Full-Stack E-commerce Platform',
    description: 'Successfully deployed a complete e-commerce solution using Angular, Spring Boot, and MySQL with admin and user modules.',
    metric: '1',
    category: 'Major Project',
    color: 'from-purple-500 to-indigo-500'
  },
  {
    icon: Users,
    title: 'Regular GitHub Contributor',
    description: 'Actively contributing to open source projects and maintaining a consistent coding practice with version control best practices.',
    metric: 'Active',
    category: 'Open Source',
    color: 'from-orange-500 to-red-500'
  }
];

export default function Achievements() {
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
    <section id="achievements" className="py-20 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Achievements
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Key milestones and accomplishments in my development journey
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.05 }}
                className="group relative"
              >
                <div className="bg-background/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 h-full">
                  {/* Icon and Metric */}
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${achievement.color} bg-opacity-10 group-hover:scale-110 transition-transform duration-300`}>
                      <achievement.icon className={`w-6 h-6 text-transparent bg-gradient-to-r ${achievement.color} bg-clip-text`} />
                    </div>
                    <div className={`text-2xl font-bold text-transparent bg-gradient-to-r ${achievement.color} bg-clip-text`}>
                      {achievement.metric}
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="mb-3">
                    <span className={`inline-block px-3 py-1 text-xs rounded-full bg-gradient-to-r ${achievement.color} bg-opacity-10 border border-opacity-20`}>
                      {achievement.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold mb-3 group-hover:text-blue-500 transition-colors">
                    {achievement.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {achievement.description}
                  </p>

                  {/* Completion Indicator */}
                  <div className="mt-4 pt-4 border-t border-border/50">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-xs text-green-500 font-medium">Completed</span>
                    </div>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${achievement.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`} />
              </motion.div>
            ))}
          </div>

          {/* Additional Info */}
          <motion.div
            variants={itemVariants}
            className="mt-16 text-center"
          >
            <div className="bg-background/50 backdrop-blur-sm border border-border/50 rounded-xl p-8 max-w-4xl mx-auto">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Trophy className="w-6 h-6 text-yellow-500" />
                <h3 className="text-xl font-semibold">Development Philosophy</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                I believe in continuous learning, practical implementation, and contributing to the developer community. 
                My focus on building real-world projects and solving algorithmic challenges has strengthened my 
                foundation in both theoretical concepts and practical development skills. I practice Agile methodologies 
                and maintain high code quality standards through proper version control and testing practices.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}