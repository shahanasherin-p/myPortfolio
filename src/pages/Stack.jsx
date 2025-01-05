import { motion, useAnimation } from 'framer-motion';
import React, { useEffect } from 'react';
import { SiExpress, SiMongodb, SiNodedotjs, SiReact,SiAngular } from 'react-icons/si';
import { useInView } from "react-intersection-observer";

const Stack = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  // Container animation variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  // Card animation variants
  const cardVariants = {
    hidden: (index) => ({
      opacity: 0,
      y: index % 2 === 0 ? -100 : 100,
      scale: 0.8,
      rotate: index % 2 === 0 ? -10 : 10
    }),
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
  };

  const stackItems = [
    {
      id: 1,
      name: "Mongodb",
      icon: <SiMongodb size={100} />,
      color: "text-indigo-400"
    },
    {
      id: 2,
      name: "Express.js",
      icon: <SiExpress size={100} />,
      color: "text-indigo-400"
    },
    {
        id: 3,
        name: "Angularjs",
        icon: <SiAngular size={100} />,
        color: "text-indigo-400"
      },
    {
      id: 4,
      name: "React.js",
      icon: <SiReact size={100} />,
      color: "text-indigo-400"
    },
    {
      id: 5,
      name: "Node.js",
      icon: <SiNodedotjs size={100} />,
      color: "text-indigo-400"
    }
  ];

  return (
    <section className="py-24 md:py-64 max-w-[1200px] mx-auto text-center relative overflow-hidden" id="stack">
      {/* Background Animation */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent)] animate-pulse"></div>
      
      {/* Title with animated gradient */}
      <motion.h2 
        className="text-6xl font-bold text-center mb-16 relative"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        My{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400 bg-300% animate-gradient">
          Stack
        </span>
      </motion.h2>

      {/* Stack Items Container */}
      <motion.div 
        className="flex flex-wrap justify-center gap-8" 
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        {stackItems.map((item, index) => (
          <motion.div
            key={item.id}
            custom={index}
            variants={cardVariants}
            whileHover={{
              scale: 1.05,
              rotate: [0, -2, 2, 0],
              transition: {
                rotate: {
                  repeat: Infinity,
                  duration: 0.5
                }
              }
            }}
            whileTap={{ scale: 0.95 }}
            className="flex flex-col items-center bg-black/30 backdrop-blur-lg w-[200px] h-[200px] rounded-xl p-4 
              border border-white/10 hover:border-indigo-500/50 transition-all duration-300
              shadow-[0_0_15px_rgba(79,70,229,0.1)] hover:shadow-[0_0_30px_rgba(79,70,229,0.2)]"
          >
            {/* Icon with floating animation */}
            <motion.div 
              className={`mb-4 ${item.color}`}
              animate={{
                y: [0, -10, 0],
                transition: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
            >
              {item.icon}
            </motion.div>

            {/* Technology name with glow effect */}
            <motion.p 
              className="text-white/70 text-xl font-medium relative group"
              whileHover={{
                textShadow: "0 0 8px rgb(129, 140, 248)",
                color: "rgb(255, 255, 255)"
              }}
            >
              {item.name}
            </motion.p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Stack;