export const CATEGORIES = [
  { id: 'programming-development', name: 'Programming & Development', icon: 'Code', count: 142 },
  { id: 'digital-marketing', name: 'Digital Marketing', icon: 'TrendingUp', count: 98 },
  { id: 'graphics-design', name: 'Graphics & Design', icon: 'Palette', count: 185 },
  { id: 'video-animation', name: 'Video & Animation', icon: 'Video', count: 76 },
  { id: 'writing-translation', name: 'Writing & Translation', icon: 'FileText', count: 64 },
  { id: 'business-finance', name: 'Business & Finance', icon: 'Briefcase', count: 53 },
  { id: 'data-ai-services', name: 'Data & AI Services', icon: 'Cpu', count: 47 },
  { id: 'music-audio', name: 'Music & Audio', icon: 'Music', count: 31 },
];

export const POPULAR_TAGS = [
  'Website Development',
  'Digital Marketing',
  'Graphics Design',
  'Video Editing',
  'Content Writing',
  'SEO Services'
];

export const GIGS = [
  {
    id: 1,
    title: 'React & Node.js Custom Web App Development and Full Stack Solution',
    category: 'programming-development',
    seller: {
      name: 'MD Walyullah Maruf',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
      badge: true,
      level: 'Top Rated Seller',
      rating: 5.0,
      reviewsCount: 428,
      title: 'Senior Full-Stack Engineer'
    },
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=900&auto=format&fit=crop&q=80',
    price: 95,
    packages: {
      basic: { name: 'Starter Frontend', price: 95, delivery: '3 Days', revisions: '2', desc: 'Single-page React responsive app with clean UI and modern components.' },
      standard: { name: 'Full-Stack Standard', price: 180, delivery: '5 Days', revisions: '5', desc: 'React frontend + Node/Express backend with MongoDB/MySQL database.' },
      premium: { name: 'Complete SaaS MVP', price: 350, delivery: '10 Days', revisions: 'Unlimited', desc: 'Production-ready full-stack application with Auth, Stripe payment, and Dashboard.' }
    },
    description: 'Looking for a high-performance web application? I will develop scalable, secure, and modern React & Node.js web applications tailored to your business needs.',
    rating: 5.0,
    ordersInQueue: 4
  },
  {
    id: 2,
    title: 'Instagram & Facebook Ads Campaign Setup via Meta Ads Manager',
    category: 'digital-marketing',
    seller: {
      name: 'Aziz Mohammed Arafat',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
      badge: true,
      level: 'Level 1',
      rating: 5.0,
      reviewsCount: 23,
      title: 'Digital Marketer & Ads Specialist'
    },
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=900&auto=format&fit=crop&q=80',
    price: 10,
    packages: {
      basic: { name: 'Campaign Setup', price: 10, delivery: '2 Days', revisions: '1', desc: '1 Ad Campaign setup with laser-targeted audience research and copy.' },
      standard: { name: 'Growth Campaign', price: 30, delivery: '4 Days', revisions: '3', desc: '3 Ad Sets, A/B Testing, Pixel setup, and 7-day monitoring.' },
      premium: { name: 'Full Funnel Ads', price: 75, delivery: '7 Days', revisions: 'Unlimited', desc: 'Complete conversion funnel ads setup with retargeting and analytics.' }
    },
    description: 'I will set up highly converting Facebook & Instagram Ad campaigns targeting your ideal customer demographics to maximize ROI and sales.',
    rating: 5.0,
    ordersInQueue: 2
  },
  {
    id: 3,
    title: 'I will optimize your React website performance and reduce page loading time',
    category: 'programming-development',
    seller: {
      name: 'Mst Surnaly Akter',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80',
      badge: true,
      level: 'Top Rated Seller',
      rating: 5.0,
      reviewsCount: 357,
      title: 'Full-Stack Performance Specialist'
    },
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&auto=format&fit=crop&q=80',
    price: 90,
    packages: {
      basic: { name: 'Audit & Quick Fix', price: 90, delivery: '2 Days', revisions: '2', desc: 'Core Web Vitals audit and quick performance fixes (score 85+).' },
      standard: { name: 'Deep Optimization', price: 150, delivery: '4 Days', revisions: '4', desc: 'Code splitting, image compression, memoization, and bundle size reduction.' },
      premium: { name: 'Ultra Speed Guarantee', price: 260, delivery: '7 Days', revisions: 'Unlimited', desc: 'Score 95+ on Google PageSpeed Insights for both mobile & desktop.' }
    },
    description: 'Slow websites lose customers! I will audit and optimize your React, Vite, or Next.js app to load in under 1.5 seconds with optimal Core Web Vitals.',
    rating: 5.0,
    ordersInQueue: 5
  },
  {
    id: 4,
    title: 'Accurate Data Entry, Copy Paste, Web Research & Excel Data Entry Services',
    category: 'business-finance',
    seller: {
      name: 'Aziz Mohammed Arafat',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
      badge: true,
      level: 'Level 1',
      rating: 5.0,
      reviewsCount: 23,
      title: 'Digital Assistant & Researcher'
    },
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=900&auto=format&fit=crop&q=80',
    price: 8,
    packages: {
      basic: { name: 'Basic Entry', price: 8, delivery: '1 Day', revisions: '2', desc: 'Up to 2 hours of data entry or 150 rows in Excel/Google Sheets.' },
      standard: { name: 'Standard Project', price: 25, delivery: '2 Days', revisions: '5', desc: 'Up to 6 hours of web research and spreadsheet organization.' },
      premium: { name: 'Bulk Research', price: 60, delivery: '4 Days', revisions: 'Unlimited', desc: 'Extensive web scraping, verification, and formatted database preparation.' }
    },
    description: 'Get fast, error-free data entry, web research, Excel data cleanup, and copy-paste assistance delivered with 100% precision.',
    rating: 5.0,
    ordersInQueue: 1
  },
  {
    id: 5,
    title: 'I will design standout graphics for your business, products, and promotions',
    category: 'graphics-design',
    seller: {
      name: 'MD Walyullah Maruf',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
      badge: true,
      level: 'Top Rated Seller',
      rating: 5.0,
      reviewsCount: 537,
      title: 'UI/UX & Brand Identity Designer'
    },
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=900&auto=format&fit=crop&q=80',
    price: 35,
    packages: {
      basic: { name: 'Single Graphic', price: 35, delivery: '1 Day', revisions: '3', desc: '1 social media banner or marketing graphic with source files.' },
      standard: { name: 'Brand Pack', price: 85, delivery: '3 Days', revisions: '5', desc: '3 custom promotional graphics + vector assets + social kit.' },
      premium: { name: 'Complete Visual Identity', price: 160, delivery: '5 Days', revisions: 'Unlimited', desc: 'Full branding graphics, flyers, presentation decks, and social media templates.' }
    },
    description: 'Elevate your brand with eye-catching visual assets. I craft modern logos, banners, marketing posters, and social media visuals that drive engagement.',
    rating: 5.0,
    ordersInQueue: 7
  },
  {
    id: 6,
    title: 'I will transform your raw footage into engaging video content and Reels',
    category: 'video-animation',
    seller: {
      name: 'MD Walyullah Maruf',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
      badge: true,
      level: 'Top Rated Seller',
      rating: 5.0,
      reviewsCount: 537,
      title: 'Video Editor & Motion Designer'
    },
    image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=900&auto=format&fit=crop&q=80',
    price: 35,
    packages: {
      basic: { name: 'Short Form Reel', price: 35, delivery: '2 Days', revisions: '2', desc: 'Up to 60 sec Reel/TikTok with dynamic captions, sound design, and color grading.' },
      standard: { name: 'YouTube Video', price: 90, delivery: '4 Days', revisions: '4', desc: 'Up to 10 min polished YouTube edit with B-roll, sound effects, and transitions.' },
      premium: { name: 'Commercial Cut', price: 200, delivery: '6 Days', revisions: 'Unlimited', desc: 'High-end commercial promo video with motion graphics and 4K export.' }
    },
    description: 'Professional video editing with Premiere Pro and After Effects. I create hook-driven, pacing-optimized videos for YouTube, TikTok, Reels, and corporate promos.',
    rating: 5.0,
    ordersInQueue: 3
  },
  {
    id: 7,
    title: 'I will write high-converting SEO articles and blog posts for organic traffic',
    category: 'writing-translation',
    seller: {
      name: 'Amina Rahman',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80',
      badge: true,
      level: 'Level 2',
      rating: 4.9,
      reviewsCount: 112,
      title: 'Content Strategist & Copywriter'
    },
    image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=900&auto=format&fit=crop&q=80',
    price: 25,
    packages: {
      basic: { name: 'Standard Post', price: 25, delivery: '2 Days', revisions: '2', desc: '800 words keyword-optimized article with meta descriptions.' },
      standard: { name: 'In-Depth Guide', price: 50, delivery: '3 Days', revisions: '4', desc: '1,500 words pillar article with header tags and competitor research.' },
      premium: { name: 'Full SEO Package', price: 110, delivery: '5 Days', revisions: 'Unlimited', desc: '3 comprehensive articles (total 3,500 words) with Surfer SEO optimization.' }
    },
    description: 'Boost your Google rankings with well-researched, plagiarism-free, engaging SEO content written to convert visitors into loyal customers.',
    rating: 4.9,
    ordersInQueue: 3
  },
  {
    id: 8,
    title: 'Custom AI Chatbot & Python Machine Learning Model Integration',
    category: 'data-ai-services',
    seller: {
      name: 'MD Walyullah Maruf',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
      badge: true,
      level: 'Top Rated Seller',
      rating: 5.0,
      reviewsCount: 88,
      title: 'AI & Data Science Specialist'
    },
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=900&auto=format&fit=crop&q=80',
    price: 80,
    packages: {
      basic: { name: 'AI API Integration', price: 80, delivery: '3 Days', revisions: '2', desc: 'Connect OpenAI/Gemini API to your web app with custom prompt engineering.' },
      standard: { name: 'RAG Knowledge Bot', price: 190, delivery: '5 Days', revisions: '4', desc: 'Chatbot trained on your custom PDFs, docs, or company knowledge base.' },
      premium: { name: 'Complete AI Solution', price: 380, delivery: '8 Days', revisions: 'Unlimited', desc: 'Full custom AI workflow with vector database, backend API, and React frontend.' }
    },
    description: 'Harness the power of AI for your business. I build smart AI assistants, document question-answering bots, and predictive machine learning models.',
    rating: 5.0,
    ordersInQueue: 2
  }
];

export const FEATURES = [
  {
    title: 'Proof of Quality',
    description: 'Check work samples, client reviews, and verified ratings before hiring.',
    icon: 'Award'
  },
  {
    title: 'No Cost Until You Hire',
    description: 'Interview potential candidates, discuss scopes, and only pay when satisfied.',
    icon: 'ShieldCheck'
  },
  {
    title: 'Safe & Secure Escrow',
    description: 'Your payments are held safely in escrow until you approve completed deliverables.',
    icon: 'Lock'
  },
  {
    title: '24/7 Dedicated Support',
    description: 'Our customer success team is available around the clock to support your projects.',
    icon: 'Headphones'
  }
];

export const HOW_IT_WORKS = [
  {
    step: '01',
    title: 'Explore Services or Post a Job',
    description: 'Browse thousands of curated freelance gigs or post your specific custom requirements.'
  },
  {
    step: '02',
    title: 'Collaborate with Top Talent',
    description: 'Communicate directly with experienced freelancers, agree on terms, and start work immediately.'
  },
  {
    step: '03',
    title: 'Track Work in Real-Time',
    description: 'Receive milestone updates, review draft deliverables, and request instant revisions.'
  },
  {
    step: '04',
    title: 'Release Payment & Review',
    description: 'Only release payment once you are 100% satisfied with the finished project.'
  }
];

export const STATS = [
  { label: 'Completed Projects', value: '15,400+' },
  { label: 'Active Freelancers', value: '3,200+' },
  { label: 'Client Satisfaction', value: '99.4%' },
  { label: 'Average Delivery', value: '48 Hours' }
];

export const FAQS = [
  {
    question: 'What is wmaruf?',
    answer: 'wmaruf is a premier freelance marketplace connecting businesses, agencies, and entrepreneurs with talented independent professionals for flexible projects and digital collaboration.'
  },
  {
    question: 'Who can use wmaruf?',
    answer: 'Both businesses seeking high-caliber freelancers and skilled specialists looking for rewarding freelance projects and sustainable career growth can use the platform.'
  },
  {
    question: 'How are payments protected on wmaruf?',
    answer: 'wmaruf uses a secure escrow payment model. Your funds are held safely and only released to the freelancer once you have reviewed and approved the delivered work.'
  },
  {
    question: 'How can I get started on wmaruf?',
    answer: 'Simply click "Sign in" or "Join" in the top navigation to create your account as a client or freelancer in under two minutes.'
  }
];
