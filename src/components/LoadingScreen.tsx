import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLoading } from '../context/LoadingContext';

const LoadingScreen = () => {
  const { isLoading, setLoading } = useLoading();

  useEffect(() => {
    if (isLoading) {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [isLoading, setLoading]);

  const letterVariants = {
    initial: { y: 0 },
    animate: { y: [-20, 0], transition: { duration: 0.4, ease: "easeOut" } }
  };

  const containerVariants = {
    exit: {
      opacity: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut"
      }
    }
  };

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm"
          initial={{ opacity: 1 }}
          exit={containerVariants.exit}
        >
          <div className="flex space-x-2">
            {['D', 'S', 'G', 'N'].map((letter, index) => (
              <motion.span
                key={letter}
                className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
                initial="initial"
                animate="animate"
                variants={letterVariants}
                transition={{ delay: index * 0.15 }}
              >
                {letter}
              </motion.span>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;