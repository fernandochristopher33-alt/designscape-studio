import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLoading } from '../context/LoadingContext';

interface PageTransitionProps {
  children: React.ReactNode;
}

const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  const { setLoading } = useLoading();

  useEffect(() => {
    setLoading(true);
  }, [setLoading]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;