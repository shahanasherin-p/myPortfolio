import React, { useState, useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { ChevronUp } from 'lucide-react';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled up to given distance
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <footer className="relative py-16 text-white overflow-hidden">
      {/* Scroll To Top Button */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 rounded-full 
                   bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400
                   text-white shadow-lg cursor-pointer
                   hover:scale-110 transition-all duration-300
                   animate-pulse z-50"
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-6 h-6" />
        </button>
      )}

      <div className="max-w-7xl mx-auto px-6 md:px-12" id='contact'>
        <div className="absolute top-0 left-0 w-full h-px"></div>
        <div className="absolute inset-0 pointer-events-none"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold">
                Get In
                <span className="ml-2 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400 bg-300% animate-gradient animate-pulse">
                  Touch
                </span>
              </h2>
              <p className="text-gray-400 text-lg">
                <TypeAnimation
                  sequence={[
                    'Ready to bring your vision to life?',
                    1000,
                    'Let\'s connect and make it happen.',
                    1000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </p>
            </div>

            <div className="space-y-6">
              <a
                href="mailto:shahanasherinp426@gmail.com"
                className="group flex items-center space-x-2 text-lg hover:text-blue-400 transition-colors duration-300"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="group-hover:underline underline-offset-4">shahanasherinp426@gmail.com</span>
              </a>
              
              <a
                href="tel:+91806787987790"
                className="group flex items-center space-x-2 text-lg hover:text-blue-400 transition-colors duration-300"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="group-hover:underline underline-offset-4">+91 806787987790</span>
              </a>
            </div>
          </div>

          <div className="flex flex-col justify-between">
            <div className="text-right">
              <h3 className="text-7xl font-bold text-white/20 animate-pulse">SHAHANA</h3>
              <h4 className="text-5xl font-bold text-white/20 mt-2 animate-pulse">SHERIN</h4>
            </div>

            <div className="flex justify-end space-x-4 mt-8">
              <a
                href="https://github.com/shahanasherin-p"
                target='_blank'
                className="p-3 rounded-full bg-gray-800/50 hover:bg-blue-500/20 hover:text-indigo-400 transition-all duration-300 backdrop-blur-sm"
                aria-label="Github"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/shahana-sherin-p82"
                target='_blank'
                className="p-3 rounded-full bg-gray-800/50 hover:bg-blue-500/20 hover:text-indigo-400 transition-all duration-300 backdrop-blur-sm"
                aria-label="LinkedIn"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">
              © 2024 All rights reserved.
            </p>
            <p className="text-sm text-gray-500">
              Designed with passion
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;