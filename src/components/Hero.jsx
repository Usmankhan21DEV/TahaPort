import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { HiArrowDown } from 'react-icons/hi';
import { FiGithub, FiLinkedin, FiInstagram, FiShield, FiLock, FiEye } from 'react-icons/fi';
import { Typewriter } from 'react-simple-typewriter';

const Hero = () => {
  const socialLinks = [
    { icon: <FiGithub size={20} />, url: 'https://github.com/taha-khan' },
    { icon: <FiLinkedin size={20} />, url: 'https://www.linkedin.com/in/taha-khan-aa4a7828b' },
    { icon: <FiShield size={20} />, url: 'https://tryhackme.com/p/taha.khan' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
  };

  const socialVariants = {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' } },
  };

  const scrollIndicatorVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 1.2 } },
  };

  const bounceVariants = {
    animate: {
      y: [0, 10, 0],
      transition: { duration: 1.5, repeat: Infinity, ease: 'easeInOut' },
    },
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden matrix-bg">
      <div className="hero-bg-circles">
        <div className="hero-circle hero-circle1"></div>
        <div className="hero-circle hero-circle2"></div>
        <div className="hero-circle hero-circle3"></div>
      </div>
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Main content */}
          <motion.div
            className="lg:col-span-8 text-center lg:text-left"
            variants={itemVariants}
          >
            <motion.p
              variants={itemVariants}
              className="text-matrix font-mono mb-4 flex items-center justify-center lg:justify-start gap-2"
            >
              <FiShield className="animate-pulse-cyber" />
              Hi, my name is
            </motion.p>
            
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 cyber-title"
            >
              <span className="gradient-text">Taha Khan</span>
            </motion.h1>
            
            <motion.h2
              variants={itemVariants}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-matrix mb-8 font-cyber"
            >
              I secure the digital world.
            </motion.h2>
            
            <motion.p
              variants={itemVariants}
              className="max-w-2xl mx-auto lg:mx-0 text-textSecondary text-lg mb-12"
            >
              Cybersecurity professional ranked in the top 2% on TryHackMe, focused on building secure, human-centered systems and defending against real-world threats.
            </motion.p>
            
            {/* Security Status Indicators */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8"
            >
              <span className="security-status status-secure">
                <FiLock className="mr-1" />
                System Secure
              </span>
              <span className="security-status status-secure">
                <FiEye className="mr-1" />
                Threat Detection Active
              </span>
              <span className="security-status status-secure">
                <FiShield className="mr-1" />
                Firewall Enabled
              </span>
            </motion.div>
            
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="btn-primary cyber-glow"
              >
                View My Work
              </Link>
              
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="btn-primary matrix-glow"
              >
                Get In Touch
              </Link>
            </motion.div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="lg:col-span-4 flex justify-center lg:justify-end"
            variants={socialVariants}
          >
            <div className="flex flex-col space-y-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-tertiary rounded-full flex items-center justify-center text-matrix hover:bg-matrix/10 transition-all duration-300 hover-lift cyber-glow"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          variants={scrollIndicatorVariants}
        >
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <motion.div
              className="w-6 h-10 border-2 border-matrix rounded-full flex justify-center cyber-glow"
              variants={bounceVariants}
              animate="animate"
            >
              <HiArrowDown className="text-matrix mt-2 animate-bounce" />
            </motion.div>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero; 