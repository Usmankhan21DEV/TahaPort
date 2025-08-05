import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiBriefcase, FiMapPin, FiCalendar, FiExternalLink } from 'react-icons/fi';

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      company: 'ACE Money Transfer',
      position: 'Cybersecurity Professional',
      duration: '2023 - Present',
      location: 'Pakistan',
      description: 'ACE Money Transfer is a leading global money transfer company that provides fast, secure, and reliable international money transfer services to millions of customers worldwide. The company operates in over 100 countries and offers competitive exchange rates with a focus on customer convenience and security.',
      responsibilities: [
        'Implemented and managed security solutions including SIEM, XDR, and DLP platforms',
        'Monitored security alerts and conducted threat analysis and incident response',
        'Deployed and administered MDM solutions for endpoint security',
        'Managed firewall configurations and network security controls',
        'Conducted security assessments and vulnerability management'
      ],
      technologies: ['SIEM', 'XDR', 'DLP', 'MDM', 'Firewall Management', 'Incident Response'],
      logo: 'https://d27735ao2xxhhe.cloudfront.net/images/svg/include/navbar-logo-lg.svg'
    },
    {
      company: 'NETS International',
      position: 'Security Analyst',
      duration: '2022 - 2023',
      location: 'Pakistan',
      description: 'NETS International is a technology solutions provider specializing in cybersecurity, network infrastructure, and digital transformation services. The company serves clients across various industries with a focus on implementing robust security frameworks and protecting digital assets.',
      responsibilities: [
        'Performed security monitoring and threat detection using SIEM platforms',
        'Deployed and configured security tools including PAM and DLP solutions',
        'Conducted security assessments and compliance audits',
        'Provided technical support for security infrastructure',
        'Collaborated with teams to implement security best practices'
      ],
      technologies: ['SIEM', 'PAM', 'DLP', 'Security Assessment', 'Compliance', 'Infrastructure Security'],
      logo: 'https://nets-international.com/wp-content/uploads/2023/05/nets-logo-1024x728.png'
    }
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-title text-4xl md:text-5xl mb-4">
            <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-secondary to-purple-500 mx-auto rounded-full mb-6"></div>
          <p className="text-textSecondary max-w-2xl mx-auto text-lg">
            Professional experience in cybersecurity roles, implementing and managing security solutions for global organizations.
          </p>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-tertiary rounded-2xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-300"
            >
              <div className="p-8">
                <div className="flex flex-col lg:flex-row gap-8">
                  {/* Company Logo and Info */}
                  <div className="lg:w-1/3">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center p-2">
                        <img
                          src={exp.logo}
                          alt={exp.company}
                          className="w-full h-full object-contain"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'block';
                          }}
                        />
                        <div className="hidden w-full h-full bg-gradient-to-br from-secondary/20 to-purple-500/20 rounded flex items-center justify-center text-secondary font-bold text-lg">
                          {exp.company.split(' ')[0]}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-textPrimary">{exp.company}</h3>
                        <p className="text-secondary font-medium">{exp.position}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3 text-textSecondary">
                        <FiCalendar className="text-secondary" />
                        <span>{exp.duration}</span>
                      </div>
                      <div className="flex items-center space-x-3 text-textSecondary">
                        <FiMapPin className="text-secondary" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Company Description and Responsibilities */}
                  <div className="lg:w-2/3">
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-textPrimary mb-3 flex items-center">
                        <FiBriefcase className="mr-2 text-secondary" />
                        About {exp.company}
                      </h4>
                      <p className="text-textSecondary leading-relaxed">
                        {exp.description}
                      </p>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-textPrimary mb-3">Key Responsibilities</h4>
                      <ul className="space-y-2">
                        {exp.responsibilities.map((responsibility, idx) => (
                          <li key={idx} className="flex items-start space-x-3 text-textSecondary">
                            <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                            <span>{responsibility}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-textPrimary mb-3">Technologies & Tools</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-secondary/10 text-secondary border border-secondary/30 rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
                 </div>

         {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-secondary/10 to-purple-500/10 p-8 rounded-2xl border border-secondary/20">
            <h4 className="text-xl font-semibold text-textPrimary mb-4">
              Ready to secure your organization?
            </h4>
            <p className="text-textSecondary mb-6 max-w-2xl mx-auto">
              I'm available for new opportunities and excited to contribute my cybersecurity expertise to protect your digital assets.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience; 