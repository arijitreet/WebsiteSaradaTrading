import React from 'react';
import { motion } from 'framer-motion';
import { User, TrendingUp, Users, MapPin, Code, Award } from 'lucide-react';

const AboutMe: React.FC = () => {
  const highlights = [
    { icon: <TrendingUp className="w-5 h-5" />, text: '4+ Years Trading Experience' },
    { icon: <Users className="w-5 h-5" />, text: '2+ Years Mentoring' },
    { icon: <MapPin className="w-5 h-5" />, text: 'Based in Bangalore' },
    { icon: <Code className="w-5 h-5" />, text: 'Software Developer' },
    { icon: <Award className="w-5 h-5" />, text: 'High-Risk, High-Reward Specialist' }
  ];

  return (
    <section id="about-me" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-center mb-12 gradient-text font-poppins"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          About Your Mentor
        </motion.h2>

        <motion.div
          className="card-glass p-8 sm:p-12 relative overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Background Pattern */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-accent-500/10 to-primary-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-success-500/10 to-accent-500/10 rounded-full blur-2xl" />

          <div className="relative z-10">
            {/* Header */}
            <motion.div
              className="flex items-center gap-4 mb-8"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <div className="p-3 bg-gradient-to-br from-accent-500 to-accent-600 rounded-xl">
                <User className="w-8 h-8 text-slate-900" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-accent-400">Arijit Panda</h3>
                <p className="text-slate-400">Professional Trader & Mentor</p>
              </div>
            </motion.div>

            {/* Highlights Grid */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3 p-3 bg-primary-600/10 rounded-lg border border-primary-500/20"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.4 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="text-accent-400">{highlight.icon}</div>
                  <span className="text-sm font-medium text-slate-300">{highlight.text}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Bio Content */}
            <motion.div
              className="space-y-6 text-lg text-slate-300 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <p>
                Hi, I'm <span className="text-accent-400 font-semibold">Arijit Panda</span> — a passionate trader and software developer originally from Odisha, now based in Bangalore. I hold a B.Tech degree and currently work at a multinational company as a software developer.
              </p>
              
              <p>
                Outside the 9-to-5, my real passion lies in the stock market, where I bring <span className="text-success-400 font-semibold">4+ years of hands-on trading experience</span> and <span className="text-success-400 font-semibold">2+ years of mentoring</span> individuals in understanding market dynamics.
              </p>
              
              <p>
                My trading style is centered on <span className="text-primary-400 font-semibold">high-risk, high-reward strategies</span>, with a strong focus on momentum and trend-based analysis. I primarily trade in <span className="text-accent-400 font-semibold">Nifty 50 derivatives</span> and also actively engage in <span className="text-accent-400 font-semibold">stock swing trading</span>. I specialize in identifying short- to medium-term opportunities that align with market momentum and technical patterns.
              </p>
              
              <p>
                What sets me apart is <span className="text-success-400 font-semibold">transparency</span> — I've consistently shared my personal journey, PNL updates, and honest market insights with my community on X (formerly Twitter). My mission is to simplify trading, eliminate hype, and provide actionable knowledge to help people build confidence in the markets.
              </p>
              
              <motion.p
                className="text-xl font-semibold text-accent-400 text-center p-6 bg-gradient-to-r from-accent-500/10 to-primary-500/10 rounded-xl border border-accent-500/20"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                If you're passionate about learning stock trading, mutual funds, F&O, or just want real, no-nonsense market content — you're in the right place. <span className="text-success-400">Let's grow and trade smart, together.</span>
              </motion.p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;