const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

// Body parser
app.use(express.json());

// CORS Middleware
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
});

// Mock Database for wmaruf marketplace
const CATEGORIES = [
  { id: 'programming-development', name: 'Programming & Development', count: 142 },
  { id: 'digital-marketing', name: 'Digital Marketing', count: 98 },
  { id: 'graphics-design', name: 'Graphics & Design', count: 185 },
  { id: 'video-animation', name: 'Video & Animation', count: 76 },
  { id: 'writing-translation', name: 'Writing & Translation', count: 64 },
  { id: 'business-finance', name: 'Business & Finance', count: 53 },
  { id: 'data-ai-services', name: 'Data & AI Services', count: 47 },
  { id: 'music-audio', name: 'Music & Audio', count: 31 }
];

const GIGS = [
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
  }
];

// Health Check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    platform: 'wmaruf freelance marketplace API',
    timestamp: new Date().toISOString()
  });
});

// Categories list
app.get('/api/categories', (req, res) => {
  res.json({ success: true, data: CATEGORIES });
});

// Gigs list with optional category & search filters
app.get('/api/gigs', (req, res) => {
  const { category, search } = req.query;
  let results = [...GIGS];

  if (category && category !== 'all') {
    results = results.filter((g) => g.category.toLowerCase() === category.toLowerCase());
  }

  if (search) {
    const q = search.toLowerCase().trim();
    results = results.filter(
      (g) =>
        g.title.toLowerCase().includes(q) ||
        g.category.toLowerCase().includes(q) ||
        g.seller.name.toLowerCase().includes(q) ||
        g.description.toLowerCase().includes(q)
    );
  }

  res.json({ success: true, count: results.length, data: results });
});

// Single Gig detail
app.get('/api/gigs/:id', (req, res) => {
  const gigId = parseInt(req.params.id, 10);
  const gig = GIGS.find((g) => g.id === gigId);

  if (!gig) {
    return res.status(404).json({ success: false, message: 'Gig not found' });
  }

  res.json({ success: true, data: gig });
});

// Platform stats
app.get('/api/stats', (req, res) => {
  res.json({
    success: true,
    data: {
      completedProjects: '15,400+',
      activeFreelancers: '3,200+',
      clientSatisfaction: '99.4%',
      avgDeliveryTime: '48 Hours'
    }
  });
});

// Contact endpoint
app.post('/api/contact', (req, res) => {
  const { name, email, message, gigId } = req.body;
  
  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: 'Please provide name, email, and message.' });
  }

  console.log(`[wmaruf] New contact message received from ${name} (${email}): ${message.slice(0, 50)}...`);

  res.json({
    success: true,
    message: 'Your message has been received! The freelancer will reach out to you shortly.'
  });
});

// Orders endpoint
app.post('/api/orders', (req, res) => {
  const { gigId, tier, clientName, clientEmail } = req.body;
  const orderId = `WM-${Date.now()}`;

  res.json({
    success: true,
    orderId,
    message: `Order ${orderId} created successfully. Payment held safely in wmaruf escrow.`
  });
});

// Root Route
app.get('/', (req, res) => {
  res.send('wmaruf Freelance Marketplace API is running smoothly.');
});

// Start server
app.listen(PORT, () => {
  console.log(`wmaruf server is running at http://localhost:${PORT}`);
});
