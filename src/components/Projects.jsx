import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiFolder } from 'react-icons/fi';

const Projects = () => {
  const [hovered, setHovered] = useState(null);
  const projects = [
    {
      title: 'Monitoring',
     description: 'Actively monitoring and investigating alerts via SIEM platforms, managing firewall logs to detect network anomalies, and ensuring compliance with SLA commitments to maintain operational visibility and support timely incident response.',
      technologies: ['SIEM',`Firewall`,'SLA', 'Threat Detection'],
      github: '#',
      live: '#',
    },
    {
      title: 'Deployment',
      description: 'Deploying SIEM, MDM, XDR, and DLP solutions to strengthen threat detection, response capabilities, and data security.',
      technologies: ['SIEM', 'MDM', 'XDR', 'DLP'],
      github: '#',
      live: '#',
    },
    {
      title: 'Administration',
     description: 'Managing XDR, MDM, and DLP solutions to maintain security controls, enforce policies, and protect organizational assets. Administering SIEM, PAM, and Firewall technologies to ensure threat visibility, privileged access management, and robust network defense.',
     technologies: ['SIEM', 'XDR', 'PAM', 'Firewall', 'MDM', 'DLP'],
      github: '#',
      live: '#',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="section-title">Featured Projects</h2>
          <p className="text-textSecondary max-w-2xl mx-auto">
            Core cybersecurity services and capabilities I provide to organizations. Each area represents specialized expertise in protecting digital assets and infrastructure.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              className="relative bg-tertiary rounded-xl shadow-lg overflow-hidden group transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
              onMouseEnter={() => setHovered(idx)}
              onMouseLeave={() => setHovered(null)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div className="w-full h-48 bg-gradient-to-br from-secondary/10 to-purple-500/10 flex items-center justify-center overflow-hidden">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-secondary/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FiFolder className="w-10 h-10 text-secondary" />
                  </div>
                  <h3 className="text-xl font-bold text-textPrimary">{project.title}</h3>
                </div>
              </div>
              <div className="p-5 flex flex-col gap-3">
                <div className="flex items-center gap-2 text-secondary mb-1">
                  <FiFolder size={18} />
                  <span className="font-mono text-xs uppercase tracking-wider">Project</span>
                </div>
                <h3 className="text-lg font-bold text-textPrimary">{project.title}</h3>
                <p className="text-sm text-textSecondary line-clamp-3 min-h-[48px]">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="bg-primary/80 text-white text-xs px-2 py-1 rounded font-mono">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 mt-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-textSecondary hover:text-secondary transition-colors duration-300"
                  >
                    <FiGithub size={20} />
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-textSecondary hover:text-secondary transition-colors duration-300"
                  >
                    <FiExternalLink size={20} />
                  </a>
                </div>
              </div>
              {/* Overlay on hover */}
              <div className={`absolute inset-0 bg-primary/80 flex flex-col justify-center items-center text-white px-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 ${hovered === idx ? '' : 'pointer-events-none'}`}>
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-base mb-4 text-center">{project.description}</p>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-secondary transition-colors duration-300"
                  >
                    <FiGithub size={24} />
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-secondary transition-colors duration-300"
                  >
                    <FiExternalLink size={24} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 