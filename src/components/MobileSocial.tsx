import React from 'react';
import { motion } from 'framer-motion';
import SocialIcons from './SocialIcons';

const MobileSocial: React.FC = () => {
  return (
    <motion.div
      className="lg:hidden fixed bottom-4 left-1/2 transform -translate-x-1/2 z-40"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.6 }}
    >
      <SocialIcons 
        className="flex gap-3 bg-slate-900/95 backdrop-blur-xl rounded-2xl p-3 border border-primary-500/30 shadow-xl"
        iconSize="w-7 h-7"
      />
    </motion.div>
  );
};

export default MobileSocial;