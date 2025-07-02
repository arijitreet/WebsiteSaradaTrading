import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-center mb-12 gradient-text font-poppins"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Get In Touch
        </motion.h2>

        <motion.div
          className="card-glass p-8 sm:p-12 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.p
            className="text-lg text-slate-300 mb-8 leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Ready to start your trading journey? Have questions about our courses? We're here to help you succeed in the stock market.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* WhatsApp Contact */}
            <motion.div
              className="bg-success-600/10 border border-success-500/20 rounded-xl p-6 hover:bg-success-600/20 transition-all duration-300"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center justify-center gap-3 mb-4">
                <Phone className="w-6 h-6 text-success-400" />
                <h3 className="text-xl font-bold text-success-400">WhatsApp</h3>
              </div>
              <motion.a
                href="https://wa.me/9776327815"
                target="_blank"
                rel="noopener noreferrer"
                className="text-success-300 font-bold text-lg hover:text-success-200 transition-colors inline-flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <MessageCircle className="w-5 h-5" />
                +91 97763 27815
              </motion.a>
            </motion.div>

            {/* Email Contact */}
            <motion.div
              className="bg-primary-600/10 border border-primary-500/20 rounded-xl p-6 hover:bg-primary-600/20 transition-all duration-300"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center justify-center gap-3 mb-4">
                <Mail className="w-6 h-6 text-primary-400" />
                <h3 className="text-xl font-bold text-primary-400">Email</h3>
              </div>
              <motion.a
                href="mailto:saradatradinginstitute@gmail.com"
                className="text-primary-300 font-bold text-lg hover:text-primary-200 transition-colors break-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                saradatradinginstitute@gmail.com
              </motion.a>
            </motion.div>
          </div>

          {/* Call to Action */}
          <motion.div
            className="mt-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <motion.a
              href="https://wa.me/9776327815?text=Hi! I'm interested in learning more about the Sarada Trading course. Can you provide me with more details?"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-lg inline-flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <MessageCircle className="w-5 h-5" />
              Start Your Trading Journey Today
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;