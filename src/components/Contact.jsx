import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiMapPin, FiClock, FiPhone, FiSend } from 'react-icons/fi';
import emailjs from 'emailjs-com';
import { title } from 'framer-motion/client';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState({
    type: '',
    message: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: 'loading', message: 'Sending message...' });
 
    // EmailJS integration
    emailjs.send(
      'service_hys0yjq', // Your EmailJS service ID
      'template_kgrdt3k', // Your EmailJS template ID
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      },
      'wnIGioN9jClShVr8r' // Your EmailJS public key
    )
    .then((response) => {
      console.log('SUCCESS!', response);
      setStatus({
        type: 'success',
        message: 'Message sent successfully! I will get back to you soon via email or WhatsApp.',
      });
      setFormData({ name: '', email: '', message: '' });
    })
    .catch((error) => {
      console.log('FAILED...', error);
      setStatus({
        type: 'error',
        message: 'Something went wrong. Please try again later.',
      });
    });
  };

  const handleWhatsAppClick = () => {
    const message = `Hello Taha! I'm interested in your cybersecurity services.`;
    const whatsappUrl = `https://wa.me/923125736191?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };
   const handleLinkedInClick = () => {
  const linkedInUrl = 'https://www.linkedin.com/in/taha-khan-aa4a7828b';
  window.open(linkedInUrl, '_blank');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const socialLinks = [
    // {
    //   name: 'GitHub',
    //   icon: <FiGithub size={24} />,
    //   url: 'https://github.com/username',
    //   color: 'hover:text-gray-400',
    // },
    {
      name: 'LinkedIn',
      icon: <FiLinkedin size={24} />,
      url: 'https://www.linkedin.com/in/taha-khan-aa4a7828b',
      color: 'hover:text-blue-400',
    },
    // {
    //   name: 'Twitter',
    //   icon: <FiTwitter size={24} />,
    //   url: 'https://twitter.com/username',
    //   color: 'hover:text-blue-500',
    // },
    {
      name: 'Email',
      icon: <FiMail size={24} />,
      url: 'taha.khan.cyber@gmail.com',
      color: 'hover:text-red-400',
    },
  ];

  const contactInfo = [
    {
      icon: <FiMapPin size={20} />,
      title: 'Location',
      value: 'Pakistan',
      color: 'text-blue-400',
    },
    {
      icon: <FiMail size={20} />,
      title: 'Email',
      value: 'taha.khan.cyber@gmail.com',
      color: 'text-green-400',
    },
    {
      icon: <FiPhone size={20} />,
      title: 'Phone',
      value: '+92 312 5736191',
      color: 'text-purple-400',
    },
    {
      icon: <FiClock size={20} />,
      title: 'Response Time',
      value: 'Within 24 hours',
      color: 'text-orange-400',
    },
  ];

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-title text-4xl md:text-5xl mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-secondary to-purple-500 mx-auto rounded-full mb-6"></div>
          <p className="text-textSecondary max-w-2xl mx-auto text-lg">
            I'm currently looking for new opportunities. Whether you have a question
            or just want to say hi, I'll try my best to get back to you!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch relative">
          {/* Vertical Divider for large screens */}
          <div className="hidden lg:block absolute left-1/2 top-0 h-full w-px bg-gradient-to-b from-transparent via-gray-300 to-transparent z-10" style={{transform: 'translateX(-50%)'}}></div>
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative h-full z-20"
          >
            <div className="card h-full flex flex-col justify-center shadow-xl rounded-2xl p-8 border border-gray-200 dark:border-primary/40">
              <h3 className="text-2xl font-semibold text-textPrimary mb-6 flex items-center gap-3">
                <FiSend className="text-secondary" />
                Send Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-textPrimary mb-2 font-medium">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="form-input w-full"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-textPrimary mb-2 font-medium">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="form-input w-full"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-textPrimary mb-2 font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="form-input w-full resize-none"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>
                <motion.button
                  type="submit"
                  className="btn-primary w-full flex items-center justify-center gap-2 text-lg py-4"
                  disabled={status.type === 'loading'}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {status.type === 'loading' ? (
                    <>
                      <div className="w-5 h-5 border-2 border-secondary border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FiSend />
                      Send Message
                    </>
                  )}
                </motion.button>
                
                {/* WhatsApp Button */}
                <motion.button
                  type="button"
                  onClick={handleWhatsAppClick}
                  className="w-full flex items-center justify-center gap-2 text-lg py-4 bg-green-500 hover:bg-green-600 text-white rounded-md transition-all duration-300 font-medium"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                  Message on WhatsApp
                </motion.button>

                {/* Linkdin Button */}
                <motion.button
                  type="button"
                  onClick={handleLinkedInClick}
                  className="w-full flex items-center justify-center gap-2 text-lg py-4 bg-blue-500 hover:bg-blue-600 text-white rounded-md transition-all duration-300 font-medium"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.451 20.451h-3.554v-5.569c0-1.328-.027-3.039-1.851-3.039-1.853 0-2.137 1.445-2.137 2.939v5.669H9.356V9h3.414v1.561h.049c.476-.899 1.637-1.851 3.369-1.851 3.599 0 4.264 2.368 4.264 5.448v6.293zM5.337 7.433c-1.144 0-2.07-.927-2.07-2.07 0-1.145.926-2.07 2.07-2.07s2.07.925 2.07 2.07c0 1.143-.926 2.07-2.07 2.07zM6.884 20.451H3.791V9h3.093v11.451zM22.225 0H1.771C.792 0 0 .771 0 1.723v20.554C0 23.229.792 24 1.771 24h20.451C23.2 24 24 23.229 24 22.277V1.723C24 .771 23.2 0 22.222 0h.003z"/>
                  </svg>

                  Message on Linkdin
                </motion.button>
                {status.message && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-4 rounded-lg text-sm ${
                      status.type === 'success' 
                        ? 'bg-green-500/10 border border-green-500/20 text-green-400' 
                        : 'bg-red-500/10 border border-red-500/20 text-red-400'
                    }`}
                  >
                    {status.message}
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="h-full flex flex-col justify-center z-20"
          >
            <div className="card h-full flex flex-col justify-between shadow-xl rounded-2xl p-8 border border-gray-200 dark:border-primary/40">
              <h3 className="text-2xl font-semibold text-textPrimary mb-6">
                Let's Connect
              </h3>
              <p className="text-textSecondary mb-8 text-lg leading-relaxed">
                Feel free to reach out through any of these platforms. I'm always
                open to discussing new projects, creative ideas, or opportunities
                to be part of your vision.
              </p>
              
              {/* Contact Information Cards */}
              <div className="space-y-4 mb-8">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    className="flex items-center space-x-4 p-4 rounded-lg bg-primary/30 hover:bg-primary/50 transition-all duration-300 hover-lift"
                  >
                    <div className={`p-3 rounded-lg bg-secondary/10 ${info.color}`}>
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-medium text-textPrimary">{info.title}</h4>
                      <p className="text-textSecondary">{info.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              {/* <div>
                <h4 className="text-lg font-semibold text-textPrimary mb-4">
                  Follow Me
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((link, index) => (
                    <motion.a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`flex items-center space-x-3 p-4 rounded-lg bg-primary/30 hover:bg-primary/50 transition-all duration-300 hover-lift text-textSecondary ${link.color}`}
                    >
                      {link.icon}
                      <span className="font-medium">{link.name}</span>
                    </motion.a>
                  ))}
                </div>
              </div> */}

              {/* Availability Status */}
              <div className="flex items-center justify-center space-x-2 mb-3">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-400 font-medium">Available for new opportunities</span>
              </div>
              <p className="text-textSecondary">
                I'm currently accepting new projects and collaborations
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 