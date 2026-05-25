import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Compass, PenTool, Ruler, Lightbulb, TreePine, Shield, Palette, Zap } from 'lucide-react';

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      icon: <PenTool className="h-8 w-8 text-blue-600" />,
      title: 'Architectural Design',
      description: 'Innovative and functional designs that transform spaces into memorable experiences.',
    },
    {
      icon: <Ruler className="h-8 w-8 text-blue-600" />,
      title: 'Interior Planning',
      description: 'Thoughtful interior layouts that maximize space and enhance daily living.',
    },
    {
      icon: <Compass className="h-8 w-8 text-blue-600" />,
      title: 'Urban Planning',
      description: 'Comprehensive urban design solutions that create sustainable communities.',
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-blue-600" />,
      title: 'Concept Development',
      description: 'Creative conceptualization that brings your architectural vision to life.',
    },
    {
      icon: <TreePine className="h-8 w-8 text-blue-600" />,
      title: 'Sustainable Design',
      description: 'Eco-friendly architectural solutions for a greener future.',
    },
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: 'Project Management',
      description: 'Efficient project oversight from concept to completion.',
    },
    {
      icon: <Palette className="h-8 w-8 text-blue-600" />,
      title: 'Design Consultation',
      description: 'Expert guidance to help shape your architectural projects.',
    },
    {
      icon: <Zap className="h-8 w-8 text-blue-600" />,
      title: 'Renovation Design',
      description: 'Transformative renovation solutions that breathe new life into spaces.',
    },
  ];

  return (
    <div className="min-h-screen pt-16 bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-center bg-cover"
            style={{
              backgroundImage: 'url("https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80")',
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
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl max-w-3xl mx-auto"
          >
            Comprehensive architectural solutions tailored to your vision
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section
        ref={ref}
        className="py-24 bg-gray-50 dark:bg-gray-800"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="inline-block p-3 rounded-full bg-blue-100 dark:bg-blue-900 mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;