import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, Award } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="card-glass p-8 sm:p-12 text-center relative overflow-hidden"
        >
          {/* Background Animation */}
          <div className="absolute inset-0 opacity-10">
            <motion.div
              className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary-500/20 to-accent-500/20"
              animate={{ 
                background: [
                  'linear-gradient(135deg, rgba(59,130,246,0.2) 0%, rgba(245,158,11,0.2) 100%)',
                  'linear-gradient(135deg, rgba(245,158,11,0.2) 0%, rgba(16,185,129,0.2) 100%)',
                  'linear-gradient(135deg, rgba(16,185,129,0.2) 0%, rgba(59,130,246,0.2) 100%)'
                ]
              }}
              transition={{ duration: 10, repeat: Infinity, repeatType: 'reverse' }}
            />
          </div>

          <div className="relative z-10">
            <motion.h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold font-poppins mb-8 gradient-text"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Master the Stock Market with Expert Guidance
            </motion.h2>

            <motion.div
              className="space-y-6 text-lg text-slate-300 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <p>
                The Sarada Trading Course is a comprehensive, step-by-step stock market training program designed for beginners as well as aspiring traders and investors who want to build a strong foundation and grow their wealth systematically.
              </p>
              <p>
                Led by <span className="text-accent-400 font-semibold">Arijit Panda</span>, a professional trader and investor with years of real market experience, this course provides not just theoretical knowledge, but also practical insights, live examples, and proven strategies that actually work in the Indian stock market.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <div className="flex flex-col items-center p-4 bg-primary-600/10 rounded-xl border border-primary-500/20">
                <TrendingUp className="w-8 h-8 text-success-400 mb-2" />
                <span className="text-2xl font-bold text-accent-400">4+</span>
                <span className="text-slate-400">Years Experience</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-primary-600/10 rounded-xl border border-primary-500/20">
                <Users className="w-8 h-8 text-success-400 mb-2" />
                <span className="text-2xl font-bold text-accent-400">2+</span>
                <span className="text-slate-400">Years Mentoring</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-primary-600/10 rounded-xl border border-primary-500/20">
                <Award className="w-8 h-8 text-success-400 mb-2" />
                <span className="text-2xl font-bold text-accent-400">85%+</span>
                <span className="text-slate-400">Success Rate</span>
              </div>
            </motion.div>

            {/* Community Link */}
            <motion.div
              className="mt-8 p-6 bg-success-600/10 rounded-xl border border-success-500/20"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <p className="text-lg font-semibold mb-2">
                🚀 Join our free WhatsApp analysis community:
              </p>
              <motion.a
                href="https://chat.whatsapp.com/J3c4pHw3rnSLoK0VW2uwIy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-success-400 font-bold text-lg hover:text-success-300 transition-colors underline"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Sarada Trading Community
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;