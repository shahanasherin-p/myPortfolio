import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import profilePic from '../assets/images/portfolioPic.jpg'
const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showContent, setShowContent] = useState(false);
  const controls = useAnimation();
  
  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "mirror"
    }
  };

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="container relative mx-auto px-4 pt-12 pb-24">
      <div className="flex flex-col items-center justify-center text-center z-10">
        {/* Profile Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative mb-8 mt-24"
        >
          <motion.div
            className="relative w-48 h-48"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            animate={{
              x: isHovered ? mousePosition.x - window.innerWidth / 2 : 0,
              y: isHovered ? mousePosition.y - window.innerHeight / 2 : 0,
              scale: isHovered ? 1.1 : 1
            }}
            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
          >
            <motion.div
              className="absolute inset-[-3px] rounded-full"
              style={{
                background: "linear-gradient(45deg, #4F46E5, #A855F7, #4F46E5)",
                backgroundSize: "200% 200%"
              }}
              animate={{
                backgroundPosition: ['0% 0%', '100% 100%']
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />

            <div className="relative w-full h-full rounded-full overflow-hidden">
              <motion.div
                className="absolute inset-0 bg-gradient-to-b from-indigo-500/20 to-transparent"
                animate={floatingAnimation}
              />
              
              <img
                src={profilePic}
                alt="Profile"
                className="relative z-10 w-full h-full object-cover rounded-full transform scale-125"
              />
              
              <motion.div
                className="absolute inset-0"
                animate={controls}
              />
              
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-indigo-500/20 to-transparent rounded-full"
                animate={isHovered ? { opacity: 0.8 } : { opacity: 0.4 }}
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Text Content with Enhanced Typing Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <h1 className="text-6xl md:text-7xl font-bold tracking-tighter mb-4">
            <TypeAnimation
              sequence={[
                'Hi',
                400,
                'Hi, I',
                400,
                'Hi, I am',
                400,
                'Hi, I am a Web Developer',
                1000,
                'Hi, I am Shahana',
                1000,
                () => setShowContent(true)
              ]}
              wrapper="span"
              speed={50}
              className="block"
              repeat={0}
            />
            {showContent && (
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400 bg-300% animate-gradient"
              >
                <motion.span
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{ duration: 5, repeat: Infinity }}
                >
                  Sherin
                </motion.span>
              </motion.span>
            )}
          </h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: showContent ? 1 : 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <TypeAnimation
              sequence={[
                'I create amazing web experiences.',
                1000,
                'I build responsive websites.',
                1000,
                'I develop fullstack applications.',
                1000,
                'I am a fullstack web developer focusing on creating websites that provide users with the best experiences.',
                1000,
              ]}
              wrapper="p"
              speed={50}
              className="text-xl text-white/80 max-w-lg mx-auto leading-relaxed mb-6"
              repeat={0}
            />
          </motion.div>

          {/* Animated Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: showContent ? 1 : 0, y: showContent ? 0 : 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex gap-4 justify-center"
          >
            <motion.button
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 0 20px rgba(99, 102, 241, 0.5)",
              }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full font-medium transition-all duration-300 relative group"
            >
              <span className="relative z-10"> <a href="mailto:shahanasherinp426@gmail.com">Contact Me</a></span>
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={false}
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.button>
            
            <motion.button
              whileHover={{ 
                scale: 1.05,
                borderColor: "rgba(255,255,255,0.4)"
              }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 border border-white/20 rounded-full font-medium backdrop-blur-sm transition-all duration-300 relative group"
            >
              <span className="relative z-10"> <a href="https://drive.google.com/file/d/1rMWk7JSkbVu7rWkcCQ8PYsDX5XWVfRlh/view?usp=sharing" target='_blank' rel="noopener noreferrer">My Resume</a></span>
              <motion.div
                className="absolute inset-0 rounded-full bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;