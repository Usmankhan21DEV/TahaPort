import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiChevronLeft, FiChevronRight, FiExternalLink } from 'react-icons/fi';

const Training = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [currentIndex, setCurrentIndex] = useState(0);

  const trainings = [
    {
      name: 'High Impact IT Training NUST PDC',
      image: 'https://drive.google.com/file/d/1ka_CKDSOc_ISsmfGAxd6f2n5gRc0-bY_/view?usp=sharing',
      link: 'https://drive.google.com/file/d/1ka_CKDSOc_ISsmfGAxd6f2n5gRc0-bY_/view?usp=sharing',
      description: 'Comprehensive IT training program from NUST Professional Development Center covering advanced IT concepts and practices.'
    },
    {
      name: 'Privileged Access Management (PAM)',
      image: 'https://app.cybrary.it/courses/api/certificate/CC-1bec0c70-e030-4e47-bdd0-83441c328cc5/view',
      link: 'https://app.cybrary.it/courses/api/certificate/CC-1bec0c70-e030-4e47-bdd0-83441c328cc5/view',
      description: 'Specialized training in Privileged Access Management from Cybrary, covering PAM implementation and best practices.'
    },
    {
      name: 'Pre Security Certificate',
      image: 'https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-8NIR3SULJI.pdf',
      link: 'https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-8NIR3SULJI.pdf',
      description: 'Pre-Security certification from TryHackMe demonstrating foundational cybersecurity knowledge and skills.'
    },
    {
      name: 'Introduction To Threat Intelligence Landscape 2.0',
      image: 'https://drive.google.com/file/d/1XlcAxXqdiPyQ4U1fZTr9rOY-2td3lVCV/view?usp=sharing',
      link: 'https://drive.google.com/file/d/1XlcAxXqdiPyQ4U1fZTr9rOY-2td3lVCV/view?usp=sharing',
      description: 'Advanced training in threat intelligence covering the latest landscape and intelligence gathering techniques.'
    },
    {
      name: 'Blockchain Security Specialization',
      image: 'https://www.coursera.org/account/accomplishments/specialization/CKS3LF9A8EHR',
      link: 'https://www.coursera.org/account/accomplishments/specialization/CKS3LF9A8EHR',
      description: 'Specialized training in blockchain security from Coursera, covering blockchain vulnerabilities and security measures.'
    },
    {
      name: 'Cyber Security Fundamentals Associate',
      image: 'https://drive.google.com/file/d/1A6XfWkKY4TqCkKzbfS7OBsosIiLAVsNz/view?usp=sharing',
      link: 'https://drive.google.com/file/d/1A6XfWkKY4TqCkKzbfS7OBsosIiLAVsNz/view?usp=sharing',
      description: 'Fundamental cybersecurity training covering core security concepts, threats, and protective measures.'
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === trainings.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? trainings.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="training" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-title text-4xl md:text-5xl mb-4">
            <span className="gradient-text">Training</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-secondary to-purple-500 mx-auto rounded-full mb-6"></div>
          <p className="text-textSecondary max-w-2xl mx-auto text-lg">
            Specialized training programs and courses that have enhanced my cybersecurity expertise and technical skills.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main Training Display */}
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
                    {trainings[currentIndex].name}
                  </h3>
                  <p className="text-textSecondary mb-6 max-w-md mx-auto">
                    {trainings[currentIndex].description}
                  </p>
                  <a
                    href={trainings[currentIndex].link}
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
            {trainings.map((_, index) => (
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

          {/* Training List */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trainings.map((training, index) => (
              <motion.div
                key={training.name}
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
                      {training.name}
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

export default Training; 