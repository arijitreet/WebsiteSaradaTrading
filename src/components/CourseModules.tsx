import React from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  TrendingUp, 
  BarChart3, 
  Brain, 
  Target, 
  DollarSign, 
  Zap,
  Award,
  PieChart,
  Lightbulb,
  Wallet,
  Activity
} from 'lucide-react';

interface Module {
  id: string;
  title: string;
  icon: React.ReactNode;
  items: string[];
  highlights?: string[];
}

const modules: Module[] = [
  {
    id: 'intro',
    title: 'Introduction to Stock Market',
    icon: <BookOpen className="w-6 h-6" />,
    items: [
      'What is the stock market and how it works',
      'History and evolution of Indian stock markets',
      'Understanding NSE, BSE, SEBI, and market indices',
      'Opening and operating Demat and Trading Accounts'
    ]
  },
  {
    id: 'fundamental',
    title: 'Fundamental Analysis',
    icon: <BarChart3 className="w-6 h-6" />,
    items: [
      'Understanding company financials (P&L, Balance Sheet, Cash Flow)',
      'Key financial ratios: PE, ROE, Debt-to-Equity, and more',
      'How to read and analyze Annual Reports',
      'Sector analysis and quality stock selection'
    ]
  },
  {
    id: 'technical',
    title: 'Technical Analysis',
    icon: <TrendingUp className="w-6 h-6" />,
    items: [
      'Chart patterns and trend analysis',
      'Candlestick patterns and their significance',
      'Key indicators: RSI, MACD, Moving Averages, Bollinger Bands',
      'Support & Resistance levels and trendline analysis'
    ]
  },
  {
    id: 'psychology',
    title: 'Trading Psychology & Risk Management',
    icon: <Brain className="w-6 h-6" />,
    items: [
      'Controlling emotions and developing discipline',
      'Building the right trader mindset',
      'Position sizing and capital protection strategies',
      'Common trading mistakes and how to avoid them'
    ],
    highlights: ['Money Management', 'Mind Management', 'Psychology Control', 'Time Management']
  },
  {
    id: 'strategies',
    title: 'Intraday & Swing Trading Strategies',
    icon: <Target className="w-6 h-6" />,
    items: [
      'Proven setups used by professional traders',
      'Entry, exit, and stop-loss techniques',
      'Live market case studies and real examples',
      'Trading tools and platforms for active traders'
    ],
    highlights: ['5+ High-Accuracy Strategies (85%+ Success Rate)']
  },
  {
    id: 'wealth',
    title: 'Long-Term Wealth Building',
    icon: <DollarSign className="w-6 h-6" />,
    items: [
      'Value investing vs growth investing strategies',
      'Building and managing a long-term portfolio',
      'Power of compounding and wealth creation',
      'SIPs, Mutual Funds, and diversification strategies'
    ]
  },
  {
    id: 'derivatives',
    title: 'Futures, Options & Derivatives',
    icon: <Zap className="w-6 h-6" />,
    items: [
      'Understanding derivatives and their applications',
      'When and how to use Options and Futures',
      'Hedging strategies vs speculation',
      'Simple and effective option strategies'
    ],
    highlights: ['F&O Rules & Advanced Strategies']
  }
];

const advancedModules: Module[] = [
  {
    id: 'fundamentals',
    title: 'Market Fundamentals',
    icon: <PieChart className="w-6 h-6" />,
    items: [
      'Stock market ecosystem overview',
      'Understanding stock listings and valuations',
      'Indian vs Global market dynamics',
      'Market\'s role in economic growth',
      'Nifty 50 and index investing'
    ],
    highlights: ['IPO Analysis & Investment']
  },
  {
    id: 'management',
    title: 'Psychology & Management',
    icon: <Brain className="w-6 h-6" />,
    items: [
      'Different types of market participants',
      'Developing a winning trading mindset',
      'Ego management in trading',
      'FOMO management techniques',
      'Loss booking strategies'
    ],
    highlights: ['Money Management', 'Mind Management', 'Psychology Control', 'Time Management']
  },
  {
    id: 'investment',
    title: 'Investment & Wealth Creation',
    icon: <Wallet className="w-6 h-6" />,
    items: [
      'Stocks vs Mutual Funds comparison',
      'SIP and EPF calculators usage',
      'Importance of financial planning',
      'Starting your investment journey',
      'Wealth building through smart investing',
      'Stock selection and buying process'
    ]
  },
  {
    id: 'trading',
    title: 'Trading Strategies',
    icon: <Activity className="w-6 h-6" />,
    items: [
      'Stock weightage and portfolio allocation',
      'Stock and mutual fund selection criteria',
      'Trading vs investing decision framework',
      'Candlestick pattern recognition',
      'Wealth creation through active trading',
      'Aggressive trading techniques'
    ]
  },
  {
    id: 'advanced',
    title: 'Advanced Trading',
    icon: <Award className="w-6 h-6" />,
    items: [
      'Profit booking strategies and timing',
      'Market prediction techniques',
      'Following market trends and momentum',
      'Market timing and when to stay away',
      'Professional trading methodologies'
    ],
    highlights: ['5+ High-Accuracy Strategies (85%+ Success Rate)']
  },
  {
    id: 'fno',
    title: 'F&O Mastery',
    icon: <Lightbulb className="w-6 h-6" />,
    items: [
      'Bank Nifty trading strategies',
      'Index vs Equity trading differences',
      'Building confidence in your strategy',
      'Advanced ego and emotion management',
      'Professional trader mindset development',
      'Advanced trader classification and techniques'
    ],
    highlights: ['F&O Rules & Advanced Strategies']
  }
];

const CourseModules: React.FC = () => {
  const renderModule = (module: Module, index: number) => (
    <motion.div
      key={module.id}
      className="card-glass p-6 hover:shadow-2xl transition-all duration-300 group"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      whileHover={{ y: -5 }}
    >
      {/* Module Header */}
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 bg-gradient-to-br from-accent-500 to-accent-600 rounded-lg text-slate-900">
          {module.icon}
        </div>
        <h3 className="text-xl font-bold text-accent-400 group-hover:text-accent-300 transition-colors">
          ✅ {module.title}
        </h3>
      </div>

      {/* Module Items */}
      <ul className="space-y-3">
        {module.items.map((item, itemIndex) => (
          <motion.li
            key={itemIndex}
            className="flex items-start gap-3 p-3 bg-primary-600/5 rounded-lg border-l-3 border-primary-400 hover:bg-primary-600/10 hover:border-accent-400 transition-all duration-300"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: (index * 0.1) + (itemIndex * 0.05) }}
          >
            <span className="text-primary-400 font-bold mt-1">→</span>
            <span className="text-slate-300">{item}</span>
          </motion.li>
        ))}
      </ul>

      {/* Highlights */}
      {module.highlights && (
        <div className="mt-4 space-y-2">
          {module.highlights.map((highlight, highlightIndex) => (
            <motion.div
              key={highlightIndex}
              className="inline-block bg-gradient-to-r from-success-500 to-success-400 text-slate-900 px-3 py-1 rounded-full text-sm font-bold mr-2 mb-2"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: (index * 0.1) + 0.5 }}
            >
              {highlight}
            </motion.div>
          ))}
        </div>
      )}
    </motion.div>
  );

  return (
    <section id="about" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-center mb-16 gradient-text font-poppins"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Comprehensive Course Contents
        </motion.h2>

        {/* Core Modules */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {modules.map((module, index) => renderModule(module, index))}
        </div>

        {/* Advanced Topics Section */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-accent-400 font-poppins">
            🎯 Advanced Topics & Practical Applications
          </h3>
        </motion.div>

        {/* Advanced Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {advancedModules.map((module, index) => renderModule(module, index))}
        </div>
      </div>
    </section>
  );
};

export default CourseModules;