import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Training from './components/Training';
import Experience from './components/Experience';
import Contact from './components/Contact';
import CustomCursor from './components/CustomCursor';
import { useInView } from 'react-intersection-observer';
import logo from './assets/taha_logo.png'

function SectionReveal({ children, id }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });
  return (
    <motion.div
      id={id}
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="mb-0"
    >
      {children}
    </motion.div>
  );
}

function App() {
  const [loading, setLoading] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Set mounted to true after initial render
    setMounted(true);
    
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Don't render anything until mounted to prevent scroll issues
  if (!mounted) {
    return null;
  }

  return (
    <>
      <CustomCursor />
      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-primary flex items-center justify-center z-50 matrix-bg"
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
              }}
              className="text-center"
            >
              <motion.img 
                src={logo} 
                alt="Taha Khan Logo" 
                className="w-32 h-32 md:w-48 md:h-48 rounded-lg cyber-glow mb-6" 
                animate={{ 
                  scale: [1, 1.05, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              />
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="text-2xl md:text-3xl font-bold gradient-text font-cyber"
              >
                Taha Khan
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="text-matrix text-lg mt-2 font-mono"
              >
                Initializing Security Systems...
              </motion.div>
              <motion.div
                className="mt-6 w-32 h-1 bg-gradient-to-r from-matrix via-cyber to-secondary rounded-full overflow-hidden"
              >
                <motion.div
                  className="h-full bg-gradient-to-r from-matrix to-cyber"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                />
              </motion.div>
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen bg-primary"
          > 
            <Navbar />
            <main>
              <div id="home">
                <Hero />
              </div>
              <div id="about">
                <About />
              </div>
              <div id="projects">
                <Projects />
              </div>
              <div id="certifications">
                <Certifications />
              </div>
              <div id="training">
                <Training />
              </div>
              <div id="experience">
                <Experience />
              </div>
              <div id="contact">
                <Contact />
              </div>
            </main>
            <footer className="py-8 text-center text-textSecondary">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Designed & Built by Taha Khan
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-sm mt-2"
              >
                © {new Date().getFullYear()} All rights reserved.
              </motion.p>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
