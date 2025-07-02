import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';

const AIAssistant: React.FC = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [hasShownPopup, setHasShownPopup] = useState(false);

  useEffect(() => {
    // Show popup after 5 seconds if not shown before
    const timer = setTimeout(() => {
      if (!hasShownPopup) {
        setIsPopupVisible(true);
        setHasShownPopup(true);
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, [hasShownPopup]);

  const handleButtonClick = () => {
    setIsPopupVisible(true);
    setHasShownPopup(true);
  };

  const handlePopupClick = () => {
    window.open('https://wa.me/9776327815?text=Hi! I need help with stock market trading. Can you guide me?', '_blank');
    setIsPopupVisible(false);
  };

  const handleClosePopup = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsPopupVisible(false);
  };

  return (
    <>
      {/* AI Assistant Button */}
      <motion.button
        onClick={handleButtonClick}
        className="fixed bottom-20 right-6 lg:bottom-8 lg:right-8 z-50 w-14 h-14 bg-gradient-to-r from-primary-600 to-primary-500 rounded-full shadow-xl flex items-center justify-center text-white hover:shadow-2xl transition-all duration-300"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ delay: 2, duration: 0.6, type: 'spring' }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        style={{
          animation: 'float 3s ease-in-out infinite'
        }}
      >
        <MessageCircle className="w-6 h-6" />
      </motion.button>

      {/* Popup Message */}
      <AnimatePresence>
        {isPopupVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.3, y: 100 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.3, y: 100 }}
            transition={{ type: 'spring', damping: 20, stiffness: 300 }}
            className="fixed bottom-36 right-6 lg:bottom-24 lg:right-8 z-50 max-w-xs"
          >
            <div
              onClick={handlePopupClick}
              className="card-glass p-4 cursor-pointer hover:shadow-2xl transition-all duration-300 relative group"
            >
              <button
                onClick={handleClosePopup}
                className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white text-xs hover:bg-red-600 transition-colors"
              >
                <X className="w-3 h-3" />
              </button>
              
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-primary-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-accent-400 font-semibold text-sm mb-1">
                    Trading Assistant
                  </p>
                  <p className="text-slate-300 text-sm">
                    Struggling in stock market? Click here to contact me directly!
                  </p>
                </div>
              </div>
              
              {/* Pulse animation */}
              <motion.div
                className="absolute inset-0 bg-primary-500/20 rounded-2xl"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIAssistant;