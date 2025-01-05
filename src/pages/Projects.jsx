import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import { FiChevronDown } from 'react-icons/fi';
import { HiOutlineExternalLink } from 'react-icons/hi';
import lmsProjectPic from '../assets/images/lmsProject.png'
import BlogApp from '../assets/images/BlogApp.png'
import chatApp from '../assets/images/cahtApp.png'
import WordScrambleGame from '../assets/images/wordScrambleGame.png'
import DocumentApp from '../assets/images/documentApp.png'
import ImageSearch from '../assets/images/Imagesearch.png'
import NetflixClone from '../assets/images/netflixClone.png'
import paralaxImageSlider from '../assets/images/ParallaxReact.png'
import WeatherApp from '../assets/images/WeatherReact.png'
import staticWebPageReact from '../assets/images/StaticRecatWebpage.png'
import webPageWithFigma from '../assets/images/FigmaTemplateIntoWebpage.png'
import parallaxWithJs from '../assets/images/ParallaxJS.png'
import StaticWebPageWithTailwindCss from '../assets/images/SimpleTailwindCss.png'
import StaticWebPageWithBootstrap from '../assets/images/travelBlogHTMLCSS.png'




const Projects = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  
  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const projects = [
    {
      title: "Learning Management Sysytem",
      desc: "Developed a full-stack LMS with two distinct user views: student and instructor. Student Features: Course purchase, video streaming, progress tracking. Instructor Features: Course creation, revenue tracking, and management dashboard.Used MongoDB for data storage and implemented secure payment integration for purchases  [** The deployed link may take a moment to open due to initial server load. ]",
      devStack: "MongoDB, Express, React, Node.js",
      link: "https://lmsfrontend-syl6.onrender.com",
      git: "https://github.com/shahanasherin-p/lmsFrontend",
      src: lmsProjectPic,
      type: "Fullstack"
    },
    {
      title: "Blog Api with JSON Server",
      desc: "Developed a RESTful API to manage blog data with CRUD functionality. Utilized JSON Server for storage, enabling a lightweight and efficient solution for managing posts.Gained experience in backend data handling and API structuring. ",
      devStack: "React js,Json Server",
      link: "https://blog-frontend-five-sigma.vercel.app/",
      git: "https://github.com/shahanasherin-p/blogFrontend",
      src: BlogApp,
      type: "Fullstack"
    },
    {
      title: "Chat Application ",
      desc: "Built a real-time chat application using React, Redux, Node.js, and WebSocket.Enabled live messaging with state management through Redux for seamless user interactions. Optimized backend communication using WebSocket for reduced latency.",
      devStack: "React, Node.js,Redux,WebSocket",
      link: "https://chat-frontend-zeta-eight.vercel.app/",
      git: "https://github.com/shahanasherin-p/chatFrontend",
      src: chatApp,
      type: "FrontEnd"
    },
    {
      title: "Word Scramble Game  ",
      desc: " Built a dynamic word scramble game using JavaScript, providing an interactive user experience. Implemented logic to generate scrambled words and evaluate user guesses.Focused on user –friendly design and optimized performance ",
      devStack: "JavaScript",
      link: "https://word-scramble-game-21.netlify.app/",
      git: "https://github.com/shahanasherin-p/words-scramble",
      src: WordScrambleGame,
      type: "FrontEnd"
    },
    {
      title: "Document App",
      desc: "Developed a document editing app with CRUD operations and rich text formatting capabilities. Integrated ReactQuill to enable features like bold, underline, large text, links, and lists. Utilized Firebase Firestore for real-time data storage and Firebase Authentication for user security.",
      devStack: "React, ReactQuill,Firebase",
      link: "https://document-app-drab.vercel.app/",
      git: "https://github.com/shahanasherin-p/documentApp",
      src: DocumentApp,
      type: "FullStack"
    },
    {
      title: "Image Serach",
      desc: "This is a user-friendly web application that allows users to search for images using the Unsplash API. Built with JavaScript, the app fetches and displays a wide array of images based on user input.Type in any keyword, hit the search button, and dive into an endless stream of beautiful and relevant images. Whether you're seeking inspiration, visuals for a project, or just browsing, this app delivers a captivating visual experience with ease.",
      devStack: "JavaScript",
      link: "https://img-searchapp.netlify.app/",
      git: "https://github.com/shahanasherin-p/imgesearch",
      src: ImageSearch,
      type: "FrontEnd"
    },
    {
      title: "Netflix Clone",
      desc: "This is a visually appealing Netflix clone built using only HTML and CSS. The project replicates the iconic Netflix interface, featuring a sleek and intuitive design. While it doesn't include backend functionality, it showcases a clean layout, stylish navigation, and attractive movie thumbnails, providing a perfect demonstration of frontend development skills.",
      devStack: "Html,Css",
      link: "https://netflix-clone-ecru-gamma-39.vercel.app/",
      git: "https://github.com/shahanasherin-p/netflix-clone",
      src: NetflixClone,
      type: "FrontEnd"
    },
    {
      title: "Parallax",
      desc: "It is an engaging React project that features mesmerizing parallax effects and a sleek image slider, elevating user experience to new heights!",
      devStack: "React",
      link: "https://parallax-image-slider-three.vercel.app/",
      git: "https://github.com/shahanasherin-p/parallax-ImageSlider",
      src: paralaxImageSlider,
      type: "FrontEnd"
    },
    {
      title: "Weather App",
      desc: "Developed a dynamic Weather App using React and Tailwind CSS, designed for real-time weather insights and a visually engaging user experience.Current Weather Data: Displays temperature in °C and °F, along with wind speed for immediate weather updates.3-Hour Interval Forecast: Provides a detailed timeline of weather changes, helping users plan effectively.5-Day Outlook: Offers a comprehensive weather summary for long-term planning.Sunrise and Sunset Times: Highlights key solar events to assist in daily scheduling.Responsive Design: Ensures seamless functionality and aesthetic appeal across devices.This project integrates real-time API data with intuitive design, demonstrating proficiency in front-end development and UI/UX optimization.",
      devStack: "React",
      link: "https://weather-app-react-phi-ruddy.vercel.app/",
      git: "https://github.com/shahanasherin-p/weatherAppReact",
      src: WeatherApp,
      type: "FrontEnd"
    },
    {
      title: "Static WebPAge Built With React",
      desc: "It is  a modern static webpage using React and React-Bootstrap, showcasing a seamless and responsive design for optimal user experience.Responsive Layout: Ensures a visually appealing interface across all devices, from desktops to mobiles.Smooth Navigation: Features intuitive navigation for effortless browsing.Modern Aesthetics: Combines contemporary design principles with clean and engaging visuals.This project highlights expertise in React and component-based design, delivering a polished front-end solution with a focus on performance and usability.",
      devStack: "React",
      link: "https://static-webpage-react-phi.vercel.app/",
      git: "https://github.com/shahanasherin-p/staticWebpage-react",
      src: staticWebPageReact,
      type: "FrontEnd"
    },
    {
      title: "Design a Webpage using Figma Template",
      desc: "Designed a stunning webpage using a Figma template, focusing on clean aesthetics and user-centric design.Template Customization: Tailored the Figma template to align with specific project goals and branding.Visual Excellence: Achieved a captivating and modern look with attention to detail in layout and typography.Efficient Workflow: Ensured a seamless transition from design to development-ready assets.This project showcases proficiency in UI/UX design, with a strong emphasis on visual storytelling and design precision.",
      devStack: "Html,Css",
      link: "https://figma-style.netlify.app/",
      git: "https://github.com/shahanasherin-p/figma-style",
      src: webPageWithFigma,
      type: "FrontEnd"
    },
    {
      title: "Parallax With JavaScript",
      desc: "Developed a visually striking parallax webpage using JavaScript, designed to elevate online experiences through dynamic interactions and immersive visuals.Dynamic Scrolling: Implemented smooth parallax effects that create depth and movement, captivating users as they scroll.Interactive Layers: Combined creative animations and layered content to enhance storytelling and engagement.Optimized Performance: Applied efficient JavaScript techniques to maintain smooth scrolling and fast load times.This project highlights expertise in JavaScript-driven animations, delivering a modern and engaging web experience.",
      devStack: "JavaScript",
      link: "https://parall-ax.netlify.app/",
      git: "https://github.com/shahanasherin-p/parallax",
      src: parallaxWithJs,
      type: "FrontEnd"
    },
    {
      title: "Simple Static WebPage With TailwindCss",
      desc: "Built a responsive static webpage using Tailwind CSS and HTML, delivering a clean and user-friendly design.Efficient Styling: Leveraged Tailwind CSS for rapid and consistent styling, reducing development time.Responsive Layout: Designed for optimal viewing across devices, ensuring a seamless user experience.Clean Design: Focused on simplicity and functionality to create a visually appealing static page.This project showcases foundational web development skills, emphasizing responsive design and efficient styling with modern tools.",
      devStack: "Html,TailwindCss",
      link: "https://digital-agency-tailwind-css.netlify.app/",
      git: "https://github.com/shahanasherin-p/tailwind-css",
      src: StaticWebPageWithTailwindCss,
      type: "FrontEnd"
    },
    {
      title: "Static WebPage With Bootstrap",
      desc: "Created a responsive and visually appealing webpage using HTML, CSS, and Bootstrap, focused on delivering an intuitive user experience.Bootstrap Framework: Utilized pre-built components and grid system for efficient layout design and responsiveness.Custom Styling: Enhanced aesthetics with tailored CSS, balancing modern design with functionality.User-Friendly Interface: Focused on creating a seamless and accessible browsing experience across devices.This project highlights proficiency in web design fundamentals, showcasing a strong understanding of responsive design and Bootstrap framework capabilities.",
      devStack: "Html,Bootstrap",
      link: "https://travelling-blog-site.netlify.app/",
      git: "https://github.com/shahanasherin-p/travelling",
      src: StaticWebPageWithBootstrap,
      type: "FrontEnd"
    },

  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className='relative text-white py-24 md:py-64 overflow-hidden' id='projects'>
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.05),transparent)] animate-pulse"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-6xl font-bold text-center mb-16"
        >
          My <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400 bg-300% animate-gradient">Projects</span>
        </motion.h2>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className='group relative bg-white/5 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500'
            >
              <motion.div 
                className="p-6 flex justify-between items-center cursor-pointer bg-black/20 border border-white/10 hover:border-indigo-500/30 transition-all duration-300"
                onClick={() => toggleExpand(index)}
                whileHover={{ backgroundColor: "rgba(0,0,0,0.3)" }}
              >
                <motion.h3 
                  className="text-4xl font-semibold bg-gradient-to-r from-white to-white bg-[length:0%_2px] bg-no-repeat bg-left-bottom group-hover:bg-[length:100%_2px] transition-all duration-500"
                >
                  {project.title}
                </motion.h3>
                <div className="flex items-center space-x-4">
                  <motion.span 
                    className="text-3xl font-light text-indigo-400 ms-3"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    {index + 1}
                  </motion.span>
                  <motion.div
                    animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FiChevronDown className="w-6 h-6" />
                  </motion.div>
                </div>
              </motion.div>

              <AnimatePresence>
                {expandedIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className='p-6 bg-black/20 border border-white/10'
                  >
                    <div className="flex flex-col md:flex-row gap-8">
                      <motion.img 
                        src={project.src} 
                        alt=""
                        className='w-full md:w-1/2 h-64 object-cover rounded-lg'
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      />
                      <motion.div 
                        className="flex-1"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        <p className="text-white/70 mb-4">{project.desc}</p>
                        <p className="text-indigo-400 font-medium mb-2">Stack: {project.devStack}</p>
                        <p className="text-indigo-500/60 font-medium mb-4 capitalize">Type: {project.type}</p>
                        <div className="flex justify-start items-center space-x-4">
                          <motion.a 
                            whileHover={{ scale: 1.2, rotate: 15 }}
                            className='text-indigo-400 hover:text-blue-300 transition-colors text-xl' 
                            href={project.link}
                          >
                            <HiOutlineExternalLink />
                          </motion.a>
                          <motion.a 
                            whileHover={{ scale: 1.2, rotate: 15 }}
                            className='text-gray-400 hover:text-gray-300 transition-colors text-xl' 
                            href={project.git}
                          >
                            <FaGithub />
                          </motion.a>
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;