import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiChevronLeft, FiChevronRight, FiExternalLink } from 'react-icons/fi';

const Certifications = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [currentIndex, setCurrentIndex] = useState(0);

  const certificates = [
    {
      name: 'CEH (Certified Ethical Hacker)',
      image: 'https://drive.google.com/file/d/1HumBSly-iwsIMaGHtHameDq39g0DjHAv/view?usp=sharing',
      link: 'https://drive.google.com/file/d/1HumBSly-iwsIMaGHtHameDq39g0DjHAv/view?usp=sharing',
      description: 'Certified Ethical Hacker certification demonstrating expertise in ethical hacking and penetration testing.'
    },
    {
      name: 'SC 200 (Microsoft Security Operations Analyst)',
      image: 'https://drive.google.com/file/d/1mgTOZJUBapbL873d_MArattRvyd-JA63/view?usp=sharing',
      link: 'https://drive.google.com/file/d/1mgTOZJUBapbL873d_MArattRvyd-JA63/view?usp=sharing',
      description: 'Microsoft Security Operations Analyst certification for threat detection and response.'
    },
    {
      name: 'SAL 1 (Security Analyst Level 1)',
      image: 'https://drive.google.com/file/d/1xuWAraUeXU07EOnpG6yMu7gmjQofqUx6/view?usp=sharing',
      link: 'https://drive.google.com/file/d/1xuWAraUeXU07EOnpG6yMu7gmjQofqUx6/view?usp=sharing',
      description: 'Security Analyst Level 1 certification for foundational security analysis skills.'
    },
    {
      name: 'ISO 27001 Information Security Management',
      image: 'https://drive.google.com/file/d/1Cw69r-ELG-S5O0GYg_LNxRyAYTHENMcr/view?usp=sharing',
      link: 'https://drive.google.com/file/d/1Cw69r-ELG-S5O0GYg_LNxRyAYTHENMcr/view?usp=sharing',
      description: 'ISO 27001 certification for Information Security Management Systems.'
    },
    {
      name: 'Certified in Cyber Security',
      image: 'https://drive.google.com/file/d/1iqK9531V0TE2XlBZcjl7s9fsH3H77Yej/view?usp=sharing',
      link: 'https://drive.google.com/file/d/1iqK9531V0TE2XlBZcjl7s9fsH3H77Yej/view?usp=sharing',
      description: 'Comprehensive cybersecurity certification covering fundamental security concepts.'
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === certificates.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? certificates.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="certifications" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-title text-4xl md:text-5xl mb-4">
            <span className="gradient-text">Certifications</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-secondary to-purple-500 mx-auto rounded-full mb-6"></div>
          <p className="text-textSecondary max-w-2xl mx-auto text-lg">
            Professional certifications demonstrating expertise in cybersecurity and information security management.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main Certificate Display */}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="bg-tertiary rounded-2xl shadow-2xl overflow-hidden">
              <div className="aspect-w-16 aspect-h-9 bg-gray-800 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-32 h-32 bg-gradient-to-br from-secondary/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <FiExternalLink className="w-16 h-16 text-secondary" />
                  </div>
                  <h3 className="text-2xl font-bold text-textPrimary mb-4">
                    {certificates[currentIndex].name}
                  </h3>
                  <p className="text-textSecondary mb-6 max-w-md mx-auto">
                    {certificates[currentIndex].description}
                  </p>
                  <a
                    href={certificates[currentIndex].link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary inline-flex items-center gap-2"
                  >
                    <FiExternalLink />
                    View Certificate
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-primary/80 hover:bg-primary text-secondary p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          >
            <FiChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-primary/80 hover:bg-primary text-secondary p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          >
            <FiChevronRight size={24} />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {certificates.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-secondary scale-125' 
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>

          {/* Certificate List */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className={`p-4 rounded-lg border-2 transition-all duration-300 cursor-pointer hover:scale-105 ${
                  index === currentIndex
                    ? 'border-secondary bg-secondary/10'
                    : 'border-gray-700 hover:border-secondary/50'
                }`}
                onClick={() => setCurrentIndex(index)}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-secondary/20 to-purple-500/20 rounded-lg flex items-center justify-center">
                    <FiExternalLink className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-textPrimary text-sm">
                      {cert.name}
                    </h4>
                    <p className="text-textSecondary text-xs">
                      Click to view
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications; 