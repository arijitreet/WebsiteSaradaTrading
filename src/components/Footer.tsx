import React from 'react';
import { motion } from 'framer-motion';
import SocialIcons from './SocialIcons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900/95 backdrop-blur-xl border-t border-primary-500/20 py-12 px-4 sm:px-6 lg:px-8 relative">
      {/* Gradient Border */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-500 via-accent-500 to-success-500" />
      
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Social Icons */}
          <motion.div
            className="flex justify-center mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <SocialIcons className="flex gap-4 bg-white/5 backdrop-blur-md rounded-2xl p-4 border border-white/10" />
          </motion.div>

          {/* Developer Credit */}
          <motion.div
            className="mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <p className="text-accent-400 font-semibold text-lg">
              Developed and managed by{' '}
              <motion.a
                href="https://wa.me/9776327815"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-300 hover:text-primary-400 transition-colors font-bold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Arijit Panda
              </motion.a>
            </p>
          </motion.div>

          {/* Copyright */}
          <motion.p
            className="text-slate-400 text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            &copy; 2025 Sarada Trading. All rights reserved. | Professional Stock Market Training
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;