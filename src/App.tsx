import React from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import FloatingSlots from './components/FloatingSlots';
import NextBatch from './components/NextBatch';
import CourseModules from './components/CourseModules';
import Contact from './components/Contact';
import AboutMe from './components/AboutMe';
import Footer from './components/Footer';
import MobileSocial from './components/MobileSocial';
import AIAssistant from './components/AIAssistant';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-slate-100 relative overflow-x-hidden">
      {/* Background Pattern */}
      <div className="fixed inset-0 opacity-30 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.1)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(245,158,11,0.1)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_40%,rgba(16,185,129,0.05)_0%,transparent_50%)]" />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10"
      >
        <Header />
        <main>
          <Hero />
          <FloatingSlots />
          <NextBatch />
          <CourseModules />
          <Contact />
          <AboutMe />
        </main>
        <Footer />
        <MobileSocial />
        <AIAssistant />
      </motion.div>
    </div>
  );
}

export default App;