"use client";

import { motion } from 'framer-motion';
import { User, Target, Award } from 'lucide-react';
import Image from "next/image";

export default function About() {
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
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Passionate Full Stack Developer with expertise in modern web technologies
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            {/* <motion.div variants={itemVariants} className="relative">
              <div className="relative mx-auto w-80 h-80 lg:w-96 lg:h-96">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl rotate-6"></div>
                <div className="relative bg-secondary/50 backdrop-blur-sm border border-border/50 rounded-2xl p-4 h-full flex items-center justify-center">
                  <div className="w-full h-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl flex items-center justify-center">
                    <User className="w-32 h-32 text-muted-foreground" />
                  </div>
                </div>
              </div>
            </motion.div> */}

            {/* Profile Image */}
<motion.div variants={itemVariants} className="relative">
  <div className="relative mx-auto w-80 h-80 lg:w-96 lg:h-96">
    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl rotate-6"></div>
    <div className="relative bg-secondary/50 backdrop-blur-sm border border-border/50 rounded-2xl p-4 h-full flex items-center justify-center">
      <div className="w-full h-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl flex items-center justify-center overflow-hidden">
        <Image
          src="/profile.png" // Path to your image in public folder
          alt="PARSURAM MAHARANA"
          width={300} // Adjust size
          height={300}
          className="rounded-xl object-cover"
        />
      </div>
    </div>
  </div>
</motion.div>


            {/* About Content */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold flex items-center gap-3">
                  <Target className="w-6 h-6 text-blue-500" />
                  Professional Summary
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  I'm a dedicated Full Stack Developer currently pursuing B.Tech in Computer Science 
                  at Centurion University. With a strong foundation in Java, Spring Boot, Angular, 
                  and MERN stack technologies, I build scalable and efficient web applications.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  My journey started with medical laboratory technology, but my passion for coding 
                  and problem-solving led me to transition into software development. I've successfully 
                  built multiple real-world projects and continue to expand my skillset with cutting-edge technologies.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-secondary/30 backdrop-blur-sm border border-border/50 rounded-lg p-6"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <Award className="w-5 h-5 text-blue-500" />
                    <h4 className="font-semibold">Education</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    B.Tech in Computer Science<br />
                    CGPA: 8.9/10<br />
                    Expected: May 2026
                  </p>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-secondary/30 backdrop-blur-sm border border-border/50 rounded-lg p-6"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <Target className="w-5 h-5 text-purple-500" />
                    <h4 className="font-semibold">Focus Areas</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Full Stack Development<br />
                    Problem Solving<br />
                    System Design
                  </p>
                </motion.div>
              </div>

              <div className="flex flex-wrap gap-3">
                {[
                  'Problem Solver',
                  'Team Player',
                  'Quick Learner',
                  'Detail Oriented',
                  'Agile Practitioner'
                ].map((trait, index) => (
                  <motion.span
                    key={trait}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="px-3 py-1 bg-blue-500/10 text-blue-500 rounded-full text-sm border border-blue-500/20"
                  >
                    {trait}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}