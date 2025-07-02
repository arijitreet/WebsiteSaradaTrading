import React from 'react';
import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';

const FloatingSlots: React.FC = () => {
  return (
    <motion.div
      className="max-w-2xl mx-auto px-4 mb-8"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="bg-gradient-to-r from-accent-500 to-accent-400 text-slate-900 font-bold text-lg text-center rounded-2xl p-4 shadow-xl border-2 border-white/20 relative overflow-hidden"
        animate={{ 
          y: [0, -8, 0],
          scale: [1, 1.02, 1]
        }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          repeatType: 'reverse'
        }}
      >
        {/* Animated background */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-accent-400 to-accent-500"
          animate={{ 
            background: [
              'linear-gradient(90deg, #f59e0b 0%, #fbbf24 100%)',
              'linear-gradient(90deg, #fbbf24 0%, #f59e0b 100%)'
            ]
          }}
          transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse' }}
        />
        
        <div className="relative z-10 flex items-center justify-center gap-2">
          <Clock className="w-5 h-5" />
          <span>
            Last <span className="text-red-700 font-black text-xl">2 slots</span> left for the next batch! Hurry up!
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default FloatingSlots;