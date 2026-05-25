import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Heart, Clock, Users, Coffee, Instagram } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [descriptionRef, descriptionInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [statsRef, statsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const team = [
    {
      name: 'Jannes Pasaribu',
      role: 'Founder, Principal Architect',
      description: 'An architect with 15+ years of experience in sustainable design and urban development.',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
      instagram: 'john.architect'
    },
    {
      name: 'Grace Pasaribu',
      role: 'CO-Founder',
      description: 'Innovative designer specializing in biophilic architecture and sustainable urban planning solutions.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
      instagram: 'sarah.designs'
    },
    {
      name: 'Michael Anderson',
      role: 'Project Lead',
      description: 'Experienced project leader with expertise in commercial and residential architectural design.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
      instagram: 'marcus.arch'
    }
  ];

  const stats = [
    { icon: <Heart className="h-6 w-6" />, value: '250+', label: 'Happy Clients' },
    { icon: <Clock className="h-6 w-6" />, value: '15+', label: 'Years Experience' },
    { icon: <Users className="h-6 w-6" />, value: '50+', label: 'Team Members' },
    { icon: <Coffee className="h-6 w-6" />, value: '500+', label: 'Projects Completed' },
  ];

  return (
    <div className="min-h-screen pt-16 bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-center bg-cover"
            style={{
              backgroundImage: 'url("https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80")',
            }}
          >
            <div className="absolute inset-0 bg-blue-900/90 mix-blend-multiply" />
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
          >
            About Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl max-w-3xl mx-auto"
          >
            Creating exceptional spaces through innovative design
          </motion.p>
        </div>
      </section>

      {/* Company Description Section */}
      <section
        ref={descriptionRef}
        className="py-24 relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={descriptionInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="relative z-10"
            >
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                Crafting Architectural Excellence Since 1997
              </h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>
                  At Designscape Studio, we believe that exceptional architecture has the power to transform lives and shape communities. Our journey began with a vision to create spaces that seamlessly blend innovation, sustainability, and timeless design principles.
                </p>
                <p>
                  With a dedicated team of visionary architects and designers, we approach each project as an opportunity to push boundaries and create something truly extraordinary. Our commitment to excellence has earned us recognition as one of the leading architectural firms in the industry.
                </p>
              </div>
            </motion.div>

            <div className="relative">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={descriptionInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative z-20 rounded-lg overflow-hidden shadow-xl transform -rotate-6 hover:rotate-0 transition-transform duration-300"
              >
                <img
                  src="https://images.unsplash.com/photo-1431576901776-e539bd916ba2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1024&q=80"
                  alt="Architecture Design"
                  className="w-full h-64 object-cover"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={descriptionInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="absolute top-20 -right-4 z-10 rounded-lg overflow-hidden shadow-xl w-2/3 transform rotate-6 hover:rotate-0 transition-transform duration-300"
              >
                <img
                  src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1024&q=80"
                  alt="Modern Building"
                  className="w-full h-48 object-cover"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={descriptionInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="absolute bottom-0 -left-8 z-30 rounded-lg overflow-hidden shadow-xl w-2/3 transform -rotate-3 hover:rotate-0 transition-transform duration-300"
              >
                <img
                  src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1024&q=80"
                  alt="Interior Design"
                  className="w-full h-40 object-cover"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section
        ref={statsRef}
        className="py-8 pb-20 bg-white dark:bg-gray-900"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={statsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-[0_8px_32px_rgba(0,0,0,0.10)] overflow-hidden"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-gray-100 dark:divide-gray-700">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 16 }}
                  animate={statsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex flex-col items-center justify-center py-10 px-6 text-center group"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 font-medium tracking-wide uppercase">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section
        ref={ref}
        className="py-24 bg-gray-50 dark:bg-gray-800"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Meet Our Team</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              The creative minds behind our architectural innovations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                <div className="p-6">
                  <div className="relative w-32 h-32 mx-auto mb-6">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover rounded-full ring-4 ring-blue-100 dark:ring-blue-900"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-center mb-2 text-gray-900 dark:text-white">
                    {member.name}
                  </h3>
                  <div className="text-blue-600 dark:text-blue-400 text-center font-medium mb-4">
                    {member.role}
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-center mb-6">
                    {member.description}
                  </p>
                  <div className="flex justify-center">
                    <a
                      href={`https://instagram.com/${member.instagram}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                    >
                      <Instagram className="h-6 w-6" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;