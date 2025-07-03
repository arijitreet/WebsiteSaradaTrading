import React from 'react';
import { motion } from 'framer-motion';

interface SocialLink {
  href: string;
  icon: string;
  alt: string;
  title: string;
}

const socialLinks: SocialLink[] = [
  {
    href: 'https://wa.me/9776327815',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg',
    alt: 'WhatsApp',
    title: 'Contact us on WhatsApp'
  },
  {
    href: 'https://www.instagram.com/sarada.trading/',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png',
    alt: 'Instagram',
    title: 'Follow us on Instagram'
  },
  {
    href: 'https://x.com/arijitreet',
    icon: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/x.svg',
    alt: 'X (Twitter)',
    title: 'Follow us on X'
  },
  {
    href: 'https://www.youtube.com/arijitpandareet',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/4/42/YouTube_icon_%282013-2017%29.png',
    alt: 'YouTube',
    title: 'Subscribe to our YouTube channel'
  }
];

interface SocialIconsProps {
  className?: string;
  iconSize?: string;
}

const SocialIcons: React.FC<SocialIconsProps> = ({ 
  className = "flex gap-3 bg-white/10 backdrop-blur-md rounded-2xl p-3 border border-white/10",
  iconSize = "w-8 h-8"
}) => {
  return (
    <div className={className}>
      {socialLinks.map((link, index) => (
        <motion.a
          key={link.alt}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          title={link.title}
          className="transition-all duration-300 hover:scale-110 hover:rotate-6"
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.1 }}
        >
          <img 
            src={link.icon} 
            alt={link.alt} 
            className={`${iconSize} rounded-md filter brightness-90 hover:brightness-110 transition-all duration-300`}
          />
        </motion.a>
      ))}
    </div>
  );
};

export default SocialIcons;