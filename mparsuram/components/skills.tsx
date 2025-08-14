"use client";

import { motion } from 'framer-motion';
import { 
  SiJavascript, 
  SiTypescript, 
  SiReact, 
  SiNextdotjs, 
  SiAngular,
  SiSpring,
  SiNodedotjs,
  SiMongodb,
  SiMysql,
  SiGit,
  SiDocker,
  SiTailwindcss,
  SiBootstrap,
  SiPostman,
  SiVercel,
  SiHtml5,
  SiCss3
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { Code, Database, Wrench, BookOpen } from 'lucide-react';

const skillCategories = [
  {
    title: 'Programming Languages',
    icon: Code,
    skills: [
      { name: 'Java', icon: FaJava, level: 90, color: 'from-orange-500 to-red-500' },
      { name: 'JavaScript', icon: SiJavascript, level: 85, color: 'from-yellow-500 to-orange-500' },
      { name: 'TypeScript', icon: SiTypescript, level: 80, color: 'from-blue-500 to-blue-600' }
    ]
  },
  {
    title: 'Web Technologies',
    icon: Code,
    skills: [
      { name: 'HTML5', icon: SiHtml5, level: 95, color: 'from-orange-600 to-red-600' },
      { name: 'CSS3', icon: SiCss3, level: 90, color: 'from-blue-500 to-blue-600' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, level: 85, color: 'from-cyan-500 to-blue-500' },
      { name: 'Bootstrap', icon: SiBootstrap, level: 80, color: 'from-purple-600 to-purple-700' }
    ]
  },
  {
    title: 'Frontend Frameworks',
    icon: Code,
    skills: [
      { name: 'React.js', icon: SiReact, level: 88, color: 'from-cyan-500 to-blue-500' },
      { name: 'Next.js', icon: SiNextdotjs, level: 82, color: 'from-gray-800 to-black' },
      { name: 'Angular', icon: SiAngular, level: 85, color: 'from-red-600 to-red-700' }
    ]
  },
  {
    title: 'Backend & APIs',
    icon: Database,
    skills: [
      { name: 'Spring Boot', icon: SiSpring, level: 87, color: 'from-green-500 to-green-600' },
      { name: 'Node.js', icon: SiNodedotjs, level: 83, color: 'from-green-600 to-green-700' },
      { name: 'RESTful APIs', icon: Code, level: 85, color: 'from-blue-500 to-purple-500' }
    ]
  },
  {
    title: 'Databases',
    icon: Database,
    skills: [
      { name: 'MySQL', icon: SiMysql, level: 85, color: 'from-blue-600 to-blue-700' },
      { name: 'MongoDB', icon: SiMongodb, level: 80, color: 'from-green-500 to-green-600' }
    ]
  },
  {
    title: 'Tools & Platforms',
    icon: Wrench,
    skills: [
      { name: 'Git', icon: SiGit, level: 88, color: 'from-orange-600 to-red-600' },
      { name: 'Docker', icon: SiDocker, level: 75, color: 'from-blue-500 to-blue-600' },
      { name: 'Postman', icon: SiPostman, level: 85, color: 'from-orange-500 to-orange-600' },
      { name: 'Vercel', icon: SiVercel, level: 82, color: 'from-gray-800 to-black' }
    ]
  },
  {
    title: 'CS Fundamentals',
    icon: BookOpen,
    skills: [
      { name: 'Data Structures', icon: BookOpen, level: 85, color: 'from-purple-500 to-purple-600' },
      { name: 'Algorithms', icon: BookOpen, level: 80, color: 'from-indigo-500 to-indigo-600' },
      { name: 'Problem Solving', icon: BookOpen, level: 88, color: 'from-pink-500 to-rose-500' }
    ]
  }
];

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.div variants={categoryVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Skills & Technologies
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A comprehensive overview of my technical expertise and proficiency levels
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                variants={categoryVariants}
                whileHover={{ y: -5 }}
                className="bg-background/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 shadow-lg"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg">
                    <category.icon className="w-6 h-6 text-blue-500" />
                  </div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: categoryIndex * 0.1 + index * 0.1 }}
                      viewport={{ once: true }}
                      className="group"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <skill.icon className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                          <span className="font-medium">{skill.name}</span>
                        </div>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      
                      <div className="relative h-2 bg-secondary rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, ease: "easeOut", delay: categoryIndex * 0.1 + index * 0.1 }}
                          viewport={{ once: true }}
                          className={`absolute inset-y-0 left-0 bg-gradient-to-r ${skill.color} rounded-full`}
                        />
                        <motion.div
                          animate={{
                            x: [-10, 10, -10],
                            opacity: [0.5, 1, 0.5]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                          className="absolute inset-y-0 right-0 w-2 bg-white/30 rounded-full"
                          style={{ left: `${skill.level}%` }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}