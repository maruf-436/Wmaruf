# wmaruf - Freelance Marketplace Platform

A modern, high-performance freelance marketplace platform inspired by **jakabase.com**, fully rebranded and customized for **wmaruf**.

---

## 🚀 Key Features

- **Branded Design System**: Complete rebranding from JakaBase to **wmaruf** with modern typography, polished color palettes, and responsive layouts.
- **Service Categories**: Explore programming, digital marketing, graphics & design, video & animation, data/AI, and more.
- **Interactive Search & Category Filter**: Live search filtering by title, skill, seller name, or category tags.
- **Detailed Gig Cards**: 3:2 aspect-ratio media cards, seller avatars, verification badges, seller tiers, ratings, and starting prices.
- **Interactive Modals**:
  - **Gig Detail Modal**: Full overview, package tiers (Basic, Standard, Premium), delivery timelines, and order flow.
  - **Contact Modal**: Direct messaging to freelancers with message dispatch.
  - **Authentication Modal**: Tabbed Sign In and Register dialogs for Clients and Freelancers.
- **Floating Quick Contact Widgets**: One-click WhatsApp link (+880 1754 649731), direct email shortcut, and interactive live support chat drawer.
- **Backend API**: Express REST service offering gigs listing, categories, platform statistics, and contact endpoints.

---

## 📁 Project Structure

```
wmaruf/
├── client/
│   └── client/             # Vite + React Frontend Application
│       ├── index.html      # wmaruf HTML template with Tailwind CSS
│       ├── package.json
│       ├── src/
│       │   ├── App.jsx     # Main Marketplace state & layout
│       │   ├── index.css   # Global marketplace theme & animations
│       │   ├── components/ # Navbar, Hero, CategoryBar, GigCard, Modals, Footer, etc.
│       │   └── data/       # marketplaceData.js (Gigs, Categories, FAQs, Features)
│       └── dist/           # Production build output
└── Server/                 # Express Backend API
    ├── index.js            # REST endpoints (/api/gigs, /api/categories, /api/contact)
    └── package.json
```

---

## 🛠️ How to Run

### 1. Run the Frontend (React + Vite)
```powershell
cd client/client
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

To generate a production build:
```powershell
npm run build
```

### 2. Run the Backend API (Express)
```powershell
cd Server
npm start
```
The server will start at [http://localhost:5000](http://localhost:5000).

API endpoints:
- `GET http://localhost:5000/api/gigs` (supports `?category=...` and `?search=...`)
- `GET http://localhost:5000/api/categories`
- `GET http://localhost:5000/api/stats`
- `POST http://localhost:5000/api/contact`
- `GET http://localhost:5000/api/health`
