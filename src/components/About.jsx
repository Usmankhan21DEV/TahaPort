import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FiCode, 
  FiDatabase,  
  FiGitBranch, 
  FiLayers, 
  FiZap, 
  FiAward,
  FiUsers,
  FiClock,
  FiTarget
} from 'react-icons/fi';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = [
    { name: 'SIEM Solutions', icon: <FiDatabase />, color: 'from-blue-400 to-cyan-500' },
    { name: 'XDR Platforms', icon: <FiZap />, color: 'from-green-400 to-emerald-500' },
    { name: 'DLP Systems', icon: <FiLayers />, color: 'from-purple-400 to-pink-500' },
    { name: 'PAM Solutions', icon: <FiCode />, color: 'from-orange-400 to-red-500' },
    { name: 'MDM Management', icon: <FiGitBranch />, color: 'from-indigo-400 to-purple-500' },
    { name: 'Firewall Security', icon: <FiZap />, color: 'from-red-400 to-orange-500' },
    { name: 'Threat Detection', icon: <FiLayers />, color: 'from-yellow-400 to-orange-500' },
    { name: 'Incident Response', icon: <FiCode />, color: 'from-green-400 to-blue-500' },
  ];

  const stats = [
    { icon: <FiAward />, value: '2+', label: 'Years Experience' },
    { icon: <FiUsers />, value: '20+', label: 'Projects' },
    { icon: <FiClock />, value: '2500+', label: 'Hours Monitoring' },
    { icon: <FiTarget />, value: '15+', label: 'Security Solutions' },
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="cyber-title text-4xl md:text-5xl mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-matrix via-cyber to-secondary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Profile Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="relative group">
              <div className="aspect-w-4 aspect-h-5 rounded-2xl overflow-hidden shadow-2xl">
                <div className="w-full h-[600px] bg-gradient-to-br from-secondary/20 to-purple-500/20 rounded-2xl flex items-center justify-center">
                  <img
                    src="/taha_khan.png"
                    alt="Taha Khan - Cybersecurity Professional"
                    className="w-full h-full object-cover rounded-2xl"
                    style={{ background: 'transparent' }}
                    onError={(e) => {
                      // Fallback to a professional cybersecurity-themed placeholder
                      e.target.src = "https://via.placeholder.com/400x600/0a0e1a/00ff88?text=Taha+Khan&font=orbitron";
                    }}
                  />
                </div>
              </div>
              
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="space-y-4 text-textSecondary text-lg leading-relaxed">
              <p className="text-xl font-medium text-textPrimary mb-4">
                Hello! I'm <span className="gradient-text">Taha</span>, a passionate cybersecurity professional.
              </p>
              <p>
                My journey into cybersecurity began in 2023 when I attended the Ignite Cyber Security Hackathon Workshop—an experience that sparked a deep passion for securing digital systems. Leading the team from my university in that event marked the start of my hands-on journey in the field.
              </p>
              <p>
                Since then, I have ranked in the top 2% on TryHackMe and have worked across key areas of cybersecurity including Privileged Access Management (PAM), Data Loss Prevention (DLP), Extended Detection and Response (XDR), and SIEM solutions. I’ve also been involved in monitoring, deploying, and administering security assets, as well as managing firewalls and endpoint defenses.
              </p>
              <p>
                When I’m not hardening environments or solving security challenges, you will likely find me hiking, reading and traveling. I’m always eager to push boundaries, learn new technologies, and contribute to building safer digital spaces.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="text-center p-4 rounded-lg bg-primary/50 hover:bg-primary/70 transition-all duration-300 hover-lift"
                >
                  <div className="text-secondary text-2xl mb-2">{stat.icon}</div>
                  <div className="text-2xl font-bold text-textPrimary">{stat.value}</div>
                  <div className="text-sm text-textSecondary">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Skills Section */}
        <motion.div
          id="skills"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center"
        >
          <h3 className="cyber-title text-2xl font-semibold text-textPrimary mb-8">
            Here are the key <span className="gradient-text">cybersecurity technologies</span> I specialize in:
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="group"
              >
                <div className="cyber-card p-4 rounded-xl bg-primary/50 border border-gray-700 hover:border-matrix/50 transition-all duration-300 hover-lift">
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${skill.color} text-white group-hover:scale-110 transition-transform duration-300`}>
                      {skill.icon}
                    </div>
                    <span className="text-textPrimary font-medium group-hover:text-matrix transition-colors duration-300">
                      {skill.name}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Technologies Section */}
        <motion.div
          id="technologies"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center mt-4"
        >
          <h3 className="cyber-title text-2xl font-semibold text-textPrimary mb-8">
            Security <span className="gradient-text">Technologies</span> I've worked with:
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: 'Delinea PAM', logo: 'https://logos-world.net/wp-content/uploads/2022/03/Delinea-Symbol.png' },
              { name: 'Symantec DLP', logo: 'https://tse3.mm.bing.net/th/id/OIP.RvXAkSMdznxAZdNbsCzVJQHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3' },
              { name: 'Zscaler DLP', logo: 'https://tse4.mm.bing.net/th/id/OIP.HLe3yjNOAp9zSU4eyfofIAHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3' },
              { name: 'Trend Micro Vision One XDR', logo: 'https://3.imimg.com/data3/DD/BY/MY-9447834/trend-micro-support-500x500.png' },
              { name: 'Sophos XDR', logo: 'https://1000logos.net/wp-content/uploads/2020/08/Sophos-Emblem-1024x640.jpg' },
              { name: 'Microsoft Defender XDR', logo: 'https://th.bing.com/th/id/OIP.s9YRL63y154sRs4Lyz62OgHaH8?w=170&h=182&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3' },
              { name: 'Microsoft Intune MDM', logo: 'https://th.bing.com/th/id/OIP.s9YRL63y154sRs4Lyz62OgHaH8?w=170&h=182&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3' },
              { name: 'Hexnode MDM', logo: 'https://th.bing.com/th/id/OIP.JPm2e99u_tLjpb4KrLIM2gHaHa?w=171&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3' },
              { name: 'Sophos MDM', logo: 'https://1000logos.net/wp-content/uploads/2020/08/Sophos-Emblem-1024x640.jpg' },
              { name: 'Jumpcloud MDM', logo: 'https://th.bing.com/th/id/OIP.144kYe-7ET8DDNMaMaRlpwHaHa?w=167&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3' },
              { name: 'Kandgi MDM', logo: 'https://th.bing.com/th/id/OIP.AD3lYczZfvNlYP-RVHMbJgAAAA?w=187&h=187&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
              { name: 'Cloudflare WAF', logo: 'https://ts4.mm.bing.net/th?id=OIP.ri_JSpa4jpBbkPE5GfoAEwHaHa&pid=15.1' },
              { name: 'AWS WAF', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg' },
              { name: 'Pfsense Firewall', logo: 'https://th.bing.com/th/id/OIP.l1VE5FRGV_GkCa7DXrV7ZgHaHO?w=183&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3' },
              { name: 'WAZUH SIEM', logo: 'https://th.bing.com/th/id/OIP.21r-apQ2ZtaXIbdkAzvqagAAAA?w=159&h=176&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3' },
              { name: 'Splunk SIEM', logo: 'https://th.bing.com/th/id/OIP.3u1BIjJU8bGIp_TKC_emigHaEK?w=263&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3' },
              { name: 'IBM QRadar SIEM', logo: 'https://th.bing.com/th/id/OIP.6bLseTSHRtXJkJySLstn5AAAAA?w=180&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3' },
            ].map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 1.0 + index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="group"
              >
                <div className="cyber-card p-4 rounded-xl bg-primary/50 border border-gray-700 hover:border-matrix/50 transition-all duration-300 hover-lift">
                  <div className="flex flex-col items-center space-y-3">
                    <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center p-2">
                      <img
                        src={tech.logo}
                        alt={tech.name}
                        className="w-full h-full object-contain"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'block';
                        }}
                      />
                      <div className="hidden w-full h-full bg-gray-300 rounded flex items-center justify-center text-gray-600 text-xs font-bold">
                        {tech.name.split(' ')[0]}
                      </div>
                    </div>
                    <span className="text-textPrimary font-medium group-hover:text-matrix transition-colors duration-300 text-xs text-center">
                      {tech.name}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-matrix/10 to-cyber/10 p-8 rounded-2xl border border-matrix/20 cyber-glow">
            <h4 className="text-xl font-semibold text-textPrimary mb-4">
              Ready to work together?
            </h4>
            <p className="text-textSecondary mb-6 max-w-2xl mx-auto">
              I'm always interested in new opportunities and exciting projects. 
              Let's discuss how we can bring your ideas to life!
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary cyber-glow"
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              >
                Get In Touch
              </motion.button>
              <a
                href="/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download
                className="btn-primary inline-block matrix-glow"
                style={{ textDecoration: 'none' }}
              >
                Download My CV
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 