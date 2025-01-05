import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Header = () => {
    const [nav, setNav] = useState(false);
    const [hoveredItem, setHoveredItem] = useState(null);
    
    const toggleNav = () => {
        setNav(!nav);
    };
    
    const closeNav = () => {
        setNav(false);
    };
    
    const navLinks = [
        { title: "About", path: "#about" },
        { title: "Projects", path: "#projects" },
        { title: "Stack", path: "#stack" },
        { title: "Contact", path: "#contact" },
    ];

    // Enhanced desktop animations
    const containerVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { 
                duration: 0.7,
                staggerChildren: 0.15,
                ease: "easeOut"
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 20
            }
        }
    };

    // Enhanced mobile menu animations
    const mobileMenuVariants = {
        closed: { 
            x: "-100%",
            opacity: 0,
            transition: { 
                type: "spring",
                stiffness: 300,
                damping: 30,
                staggerChildren: 0.1,
                staggerDirection: -1
            }
        },
        open: { 
            x: 0,
            opacity: 1,
            transition: { 
                type: "spring",
                stiffness: 300,
                damping: 30,
                staggerChildren: 0.2,
                delayChildren: 0.2
            }
        }
    };

    const mobileItemVariants = {
        closed: { 
            opacity: 0, 
            x: -50,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 30
            }
        },
        open: { 
            opacity: 1, 
            x: 0,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 30
            }
        }
    };

    // Combined floating and visibility animations for header
    const headerAnimation = {
        hidden: { opacity: 0, y: -20 },
        visible: { 
            opacity: 1, 
            y: [0, -5, 0],
            transition: {
                y: {
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                },
                opacity: {
                    duration: 0.7
                }
            }
        }
    };

    return (
        <div className="z-50 fixed flex justify-center w-full text-white font-bold">
            <motion.div 
                className="border border-white/20 mt-8 backdrop-blur-3xl rounded-3xl hidden md:flex items-center justify-center p-2 max-w-[400px] mx-auto"
                variants={headerAnimation}
                initial="hidden"
                animate="visible"
                whileHover={{ scale: 1.02 }}
            >
                <ul className="flex flex-row p-2 space-x-8">
                    {navLinks.map((link, index) => (
                        <motion.li 
                            key={index}
                            variants={itemVariants}
                            onHoverStart={() => setHoveredItem(index)}
                            onHoverEnd={() => setHoveredItem(null)}
                            whileHover={{ 
                                scale: 1.15,
                                transition: {
                                    type: "spring",
                                    stiffness: 400,
                                    damping: 10
                                }
                            }}
                        >
                            <a 
                                className="relative transform transition-all duration-300 ease-in-out"
                                href={link.path}
                            >
                                {link.title}
                                <motion.div
                                    className="absolute bottom-0 left-0 w-full h-0.5 bg-white/50"
                                    initial={{ scaleX: 0 }}
                                    animate={{ 
                                        scaleX: hoveredItem === index ? 1 : 0,
                                        transition: {
                                            type: "spring",
                                            stiffness: 400,
                                            damping: 20
                                        }
                                    }}
                                />
                            </a>
                        </motion.li>
                    ))}
                </ul>
            </motion.div>

            <motion.div 
                onClick={toggleNav}
                className="md:hidden absolute top-5 right-14 border-rounded z-50 text-white/70 border-white/70 p-2"
                whileTap={{ scale: 0.8 }}
                whileHover={{ scale: 1.2 }}
                transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 10
                }}
            >
                <motion.div
                    animate={nav ? { rotate: 180 } : { rotate: 0 }}
                    transition={{ duration: 0.4 }}
                >
                    {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
                </motion.div>
            </motion.div>

            <AnimatePresence>
                {nav && (
                    <motion.div 
                        className="fixed left-0 top-0 w-full h-full bg-black/90"
                        variants={mobileMenuVariants}
                        initial="closed"
                        animate="open"
                        exit="closed"
                    >
                        <ul className="flex flex-col p-2 items-center justify-center space-y-8 h-full">
                            {navLinks.map((link, index) => (
                                <motion.li 
                                    key={index}
                                    variants={mobileItemVariants}
                                    whileHover={{ 
                                        scale: 1.2,
                                        x: 20,
                                        transition: {
                                            type: "spring",
                                            stiffness: 400,
                                            damping: 10
                                        }
                                    }}
                                >
                                    <a 
                                        onClick={closeNav}
                                        className="text-5xl relative"
                                        href={link.path}
                                    >
                                        {link.title}
                                        <motion.div
                                            className="absolute bottom-0 left-0 w-full h-1 bg-white/50"
                                            initial={{ scaleX: 0 }}
                                            whileHover={{ 
                                                scaleX: 1,
                                                transition: {
                                                    type: "spring",
                                                    stiffness: 400,
                                                    damping: 20
                                                }
                                            }}
                                        />
                                    </a>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Header;