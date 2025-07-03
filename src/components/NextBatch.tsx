import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Phone, MessageCircle } from 'lucide-react';

const NextBatch: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const [isShaking, setIsShaking] = useState(false);

  useEffect(() => {
    const targetDate = new Date('2025-07-12T15:00:00+05:30');

    const updateCountdown = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    // Shake animation interval
    const shakeInterval = setInterval(() => {
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 500);
    }, 3000);

    return () => {
      clearInterval(interval);
      clearInterval(shakeInterval);
    };
  }, []);

  return (
    <section id="next-batch" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="card-glass p-8 sm:p-12 text-center relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-accent-500/20 to-success-500/20"
              animate={{ rotate: [0, 180, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            />
          </div>

          <div className="relative z-10">
            <motion.div
              className="flex items-center justify-center gap-3 mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Calendar className="w-8 h-8 text-accent-400" />
              <h2 className="text-2xl sm:text-3xl font-bold text-accent-400">
                Next Stock Market Batch Starting on{' '}
                <span className="text-primary-400 font-black">July 12, 2025</span>
              </h2>
            </motion.div>

            {/* Countdown Timer */}
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              {Object.entries(timeLeft).map(([unit, value], index) => (
                <motion.div
                  key={unit}
                  className="bg-gradient-to-br from-primary-700 to-primary-800 rounded-xl p-4 border border-accent-500/30 shadow-lg"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-3xl sm:text-4xl font-bold text-accent-400">
                    {value}
                  </div>
                  <div className="text-slate-300 font-semibold capitalize">
                    {unit}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              className={`flex flex-col sm:flex-row gap-4 justify-center ${isShaking ? 'animate-shake' : ''}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <motion.a
                href="https://wa.me/9776327815"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex items-center justify-center gap-2 text-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className="w-5 h-5" />
                Join Next Batch
              </motion.a>
              <motion.a
                href="https://wa.me/9776327815"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary flex items-center justify-center gap-2 text-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <MessageCircle className="w-5 h-5" />
                Inquire About Batch
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NextBatch;