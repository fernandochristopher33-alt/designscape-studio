import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, Award, Users, Building, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const heroImages = [
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1613390792897-aa0c06a52332?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1481253127861-534498168948?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // 5 seconds interval

    return () => clearInterval(interval);
  }, []);

  return (
    <PageTransition>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          {heroImages.map((image, index) => (
            <motion.div
              key={index}
              className="absolute inset-0 z-0"
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: currentImageIndex === index ? 1 : 0,
              }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
            >
              <div
                className="absolute inset-0 bg-center bg-cover"
                style={{
                  backgroundImage: `url("${image}")`,
                }}
              >
                <div className="absolute inset-0 bg-primary/50" />
              </div>
            </motion.div>
          ))}

          <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
            >
              Designing Tomorrow's Spaces Today
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl sm:text-2xl mb-8 max-w-3xl mx-auto"
            >
              Where innovation meets architectural excellence
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link
                to="/projects"
                className="inline-flex items-center px-8 py-3 text-lg font-medium text-white bg-accent rounded-full hover:bg-accent-600 transition-transform hover:scale-105"
              >
                Explore Projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section
          ref={ref}
          className="py-24 bg-white dark:bg-gray-900"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold mb-4 text-primary dark:text-white">Why Choose Designscape Studio</h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                We combine innovative design thinking with sustainable practices to create spaces that inspire and endure.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <Award className="h-8 w-8 text-accent" />,
                  title: 'Award Winning',
                  description: 'Recognized globally for exceptional architectural design',
                },
                {
                  icon: <Users className="h-8 w-8 text-accent" />,
                  title: 'Expert Team',
                  description: 'Skilled professionals with diverse expertise',
                },
                {
                  icon: <Building className="h-8 w-8 text-accent" />,
                  title: 'Sustainable Design',
                  description: 'Eco-friendly solutions for a better tomorrow',
                },
                {
                  icon: <Sparkles className="h-8 w-8 text-accent" />,
                  title: 'Innovation',
                  description: 'Pushing boundaries in architectural design',
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="text-center p-6 rounded-lg bg-gray-50 dark:bg-gray-800 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="inline-block p-3 rounded-full bg-primary-50 dark:bg-primary-900 mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-primary dark:text-white">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Home;