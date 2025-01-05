import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import goals from '../assets/images/gif.gif'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const cardVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.5,
      ease: "easeOut"
    }
  },
  hover: { 
    y: -5,
    scale: 1.02,
    boxShadow: "0 10px 20px rgba(79, 70, 229, 0.1)",
    borderColor: "rgba(99, 102, 241, 0.4)",
    transition: { 
      duration: 0.3,
      ease: "easeInOut"
    }
  }
};

const progressVariants = {
  hidden: { width: 0 },
  visible: (custom) => ({
    width: custom,
    transition: { duration: 1.2, ease: 'easeInOut' },
  }),
};

const imageHoverVariants = {
  initial: { scale: 1 },
  hover: { 
    scale: 1.1,
    filter: "brightness(1.1)",
    transition: { duration: 0.3 }
  }
};

const About = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  return (
    <motion.section 
      id='about' 
      className='text-white p-8 relative overflow-hidden min-h-screen'
      initial="initial"
      animate="animate"
      variants={staggerContainer}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/10 via-transparent to-purple-900/10 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          className="text-6xl font-bold mb-12 relative"
          variants={fadeInUp}
          whileHover={{ scale: 1.02 }}
        >
          About <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400 bg-300% animate-gradient">Me</span>
        </motion.h2>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={staggerContainer}
        >
          {/* Background Section */}
          <motion.div
            className="border border-white/20 rounded-lg p-6 bg-black/20 backdrop-blur-sm transform-gpu"
            variants={cardVariants}
            whileHover="hover"
          >
            <motion.h3 
              className="text-2xl font-bold mb-2"
              whileHover={{ x: 5 }}
            >
              Background
            </motion.h3>
            <p className="text-white/50 mb-6">
              I'm a passionate full-stack developer with a strong foundation in computer science and a love for creating innovative web solutions. My journey in tech started with a curiosity about how things work, which led me to pursue a career in web development.
            </p>
            <motion.div 
              className="rounded-lg p-4 mb-4 border border-white/20 bg-black/30"
              whileHover={{ 
                background: "linear-gradient(to right, rgba(255,255,255,0.1), rgba(99,102,241,0.2))",
                x: 5
              }}
            >
              <motion.code 
                className='text-indigo-200/50'
                whileHover={{ color: "rgba(165, 180, 252, 0.8)" }}
              >
                const skills = [ <br />
                &nbsp;&nbsp; 'JavaScript', <br />
                &nbsp;&nbsp; 'React js', <br />
                &nbsp;&nbsp; 'MongoDB', <br />
                &nbsp;&nbsp; 'Express.js', <br />
                &nbsp;&nbsp; 'Angular', <br />
                &nbsp;&nbsp; 'Node js' <br />
                &nbsp;&nbsp; 'Git' <br />
                ];
              </motion.code>
            </motion.div>
          </motion.div>

          {/* Expertise Section */}
          <motion.div
            className="border border-white/20 rounded-lg p-6 bg-black/20 backdrop-blur-sm transform-gpu"
            variants={cardVariants}
            whileHover="hover"
          >
            <motion.h3 
              className="text-2xl font-bold mb-2"
              whileHover={{ x: 5 }}
            >
              Expertise
            </motion.h3>
            <p className="text-white/50 mb-6">
              I specialize in building robust and scalable web applications using modern technologies. My expertise spans both front-end and back-end development, allowing me to create seamless, end-to-end solutions.
            </p>
            <motion.div 
              className="relative border border-white/20 h-[220px] rounded-lg overflow-hidden"
              whileHover="hover"
            >
              <motion.img 
                src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExbDZ5MDQyaHp2OGtwMG1rdmtyajNnemE0cG04N2t2MnprNGlsdWFxbCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/26tn33aiTi1jkl6H6/giphy.webp"
                alt="expertise"
                className='absolute inset-0 w-full h-full object-cover'
                variants={imageHoverVariants}
              />
            </motion.div>
          </motion.div>

          {/* Skills Section */}
          <motion.div
            className="border border-white/20 rounded-lg p-6 bg-black/20 backdrop-blur-sm transform-gpu"
            variants={cardVariants}
            whileHover="hover"
          >
            <motion.h3 
              className="text-2xl font-bold mb-2"
              whileHover={{ x: 5 }}
            >
              Skills
            </motion.h3>
            <p className="text-white/50 mb-6">
              I'm proficient in a wide range of technologies and constantly expanding my skill set to stay at the forefront of web development.
            </p>
            <div className="grid grid-cols-1 gap-4">
              {['FrontEnd', 'BackEnd', 'Database'].map((category, index) => (
                <motion.div
                  key={category}
                  className="border border-white/20 rounded-lg p-3 bg-black/30"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ 
                    scale: 1.02,
                    background: "linear-gradient(to right, rgba(255,255,255,0.1), rgba(99,102,241,0.2))"
                  }}
                >
                  <motion.h3 
                    className="text-indigo-400 font-medium mb-2"
                    whileHover={{ x: 5 }}
                  >
                    {category}
                  </motion.h3>
                  <ul className="text-white/50 space-y-1 text-sm">
                    {category === 'FrontEnd' && ['React.js', 'Bootstrap', 'JavaScript', 'Tailwind CSS', 'Angular'].map(skill => (
                      <motion.li
                        key={skill}
                        className="cursor-default"
                        whileHover={{ x: 10, color: "rgba(165, 180, 252, 0.8)" }}
                        transition={{ duration: 0.2 }}
                      >
                        {skill}
                      </motion.li>
                    ))}
                    {category === 'BackEnd' && <motion.li whileHover={{ x: 10, color: "rgba(165, 180, 252, 0.8)" }}>Node.js</motion.li>}
                    {category === 'Database' && <motion.li whileHover={{ x: 10, color: "rgba(165, 180, 252, 0.8)" }}>MongoDB</motion.li>}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Approach and Goals Section */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12"
          variants={staggerContainer}
        >
          <motion.div
            className="border border-white/20 rounded-lg p-6 bg-black/20 backdrop-blur-sm transform-gpu"
            variants={cardVariants}
            whileHover="hover"
          >
           
            <motion.h3
              className="text-2xl font-bold mb-2"
              whileHover={{ x: 5 }}
            >
              Approach
            </motion.h3>
            <p className="text-white/50 mb-6">
              I believe in writing clean, maintainable code and following best practices. My approach involves understanding client needs, planning thoroughly, and delivering high-quality solutions on time.
            </p>
            <div className="space-y-4" ref={ref}>
              {[
                { label: 'FrontEnd', width: '90%' },
                { label: 'BackEnd', width: '85%' },
              ].map((item, index) => (
                <div key={index}>
                  <motion.label
                    className="block text-sm font-medium mb-1"
                    whileHover={{ x: 5 }}
                  >
                    {item.label}
                  </motion.label>
                  <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden mb-5">
                    <motion.div
                      custom={item.width}
                      initial="hidden"
                      animate={controls}
                      variants={progressVariants}
                      className="bg-gradient-to-r from-indigo-400 to-purple-400 h-2 rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="border border-white/20 rounded-lg p-6 bg-black/20 backdrop-blur-sm transform-gpu"
            variants={cardVariants}
            whileHover="hover"
          >
            <motion.div
              className="relative border border-white/20 rounded-lg overflow-hidden h-[300px] mb-5"
              whileHover="hover"
            >
              <motion.img
                variants={imageHoverVariants}
                className="absolute inset-0 w-full h-full object-cover"
                src={goals}
                alt="goals"
              />
            </motion.div>
            <div>
              <motion.h3 
                className="text-2xl font-bold mb-2"
                whileHover={{ x: 5 }}
              >
                Goals
              </motion.h3>
              <p className="text-white/50 mb-6">
                My goal is to continue growing as a developer, tackling challenging projects, and contributing to the tech community. I'm always excited to learn new technologies and push the boundaries of what's possible in web development.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;