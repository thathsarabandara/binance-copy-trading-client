# 🚀 LK Trader - Binance Copy Trading Platform

<div align="center">

![React](https://img.shields.io/badge/React-19.2.0-61dafb?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-3178c6?style=for-the-badge&logo=typescript)
![Vite](https://img.shields.io/badge/Vite-7.2.4-646cff?style=for-the-badge&logo=vite)
![TailwindCSS](https://img.shields.io/badge/Tailwind-3.4.1-38bdf8?style=for-the-badge&logo=tailwindcss)
![Redux](https://img.shields.io/badge/Redux-2.10.1-764abc?style=for-the-badge&logo=redux)

**A modern, full-featured copy trading platform for Binance with three distinct user roles**

[Features](#-features) • [Quick Start](#-quick-start) • [Documentation](#-documentation) • [Architecture](#-architecture)

</div>

---

## 📖 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Quick Start](#-quick-start)
- [User Roles](#-user-roles)
- [Pages & Routes](#-pages--routes)
- [Components](#-components)
- [State Management](#-state-management)
- [Styling](#-styling)
- [Scripts](#-scripts)
- [Environment Setup](#-environment-setup)
- [Development Guidelines](#-development-guidelines)
- [Deployment](#-deployment)
- [License](#-license)

---

## 🌟 Overview

**LK Trader** is a comprehensive copy trading platform that enables users to follow and replicate trades from successful master traders on Binance. The platform features three distinct user roles with dedicated interfaces:

- 🎯 **Master Traders** - Professional traders who share their strategies
- 👥 **Followers** - Users who copy trades from master traders
- 🛡️ **Admins** - Platform administrators with full control

### Key Highlights

✨ **Modern UI/UX** - Clean, minimalistic design with yellow & white theme  
⚡ **Real-time Trading** - Live trade monitoring and execution  
🔐 **Secure Authentication** - Complete auth flow with OTP verification  
📊 **Advanced Analytics** - Comprehensive dashboards and charts  
📱 **Fully Responsive** - Mobile, tablet, and desktop optimized  
🎨 **Component Library** - Reusable, well-documented components  
🔧 **Type-Safe** - 100% TypeScript with strict typing  

---

## ✨ Features

### For Master Traders
- 📈 Real-time portfolio tracking and performance metrics
- 👥 Follower management with detailed analytics
- 💰 Earnings dashboard with payout tracking
- 🔗 Binance API connection management
- ⚙️ Copy trading settings configuration
- 📊 Live trades monitoring
- 📜 Complete trade history
- 🔔 Real-time notifications
- 🎯 Performance fee structure management

### For Followers
- 🏪 Master trader marketplace with filtering
- 📊 Detailed trader profiles and performance stats
- ⚡ One-click copy trading activation
- 💼 Portfolio and wallet management
- 📈 Active trades monitoring
- 🎯 Risk management settings
- 💰 Profit/loss tracking
- 🔔 Trade notifications
- ⚙️ Custom copy settings per trader

### For Admins
- 📊 Platform-wide analytics dashboard
- 👥 Master trader approval and management
- 🧑‍🤝‍🧑 Follower management and monitoring
- 🔄 Copy engine real-time monitoring
- 📜 Global trade history with export
- 💸 Payout and earnings management
- 🔑 API health monitoring
- ✅ KYC verification system
- 💳 Subscription and pricing management
- 🎫 Support ticket system
- ⚙️ System settings and configuration
- 🛡️ Admin accounts and role management

### Common Features
- 🔐 Complete authentication system (Login, Register, OTP, Forgot Password)
- 📱 Responsive design for all devices
- 🎨 Modern, clean UI with consistent design
- 🌙 Dark mode ready architecture
- ♿ Accessible components
- 🔄 Real-time data updates
- 📊 Advanced charting with Chart.js
- 🎭 Smooth animations with GSAP

---

## 🛠️ Tech Stack

### Core Technologies
- **React 19.2.0** - UI library with latest features
- **TypeScript 5.9.3** - Type-safe JavaScript
- **Vite 7.2.4** - Lightning-fast build tool
- **React Router DOM 7.0.0** - Client-side routing

### State Management
- **Redux Toolkit 2.10.1** - Predictable state container
- **React Redux 9.2.0** - Official React bindings

### Styling & UI
- **Tailwind CSS 3.4.1** - Utility-first CSS framework
- **Lucide React 0.408.0** - Beautiful icon library
- **React Icons 5.5.0** - Popular icon packs
- **GSAP 3.13.0** - Professional animations

### Data Visualization
- **Chart.js 4.5.1** - Chart library
- **React Chart.js 2 5.3.1** - React wrapper for Chart.js

### Development Tools
- **ESLint 9.39.1** - Code linting
- **TypeScript ESLint 8.46.4** - TypeScript linting
- **PostCSS 8.4.32** - CSS transformations
- **Autoprefixer 10.4.16** - CSS vendor prefixing

---

## 📁 Project Structure

```
client/
├── public/                          # Static assets
│   └── assets/                      # Images, icons, media
│       ├── common/                  # Shared assets
│       ├── Follower/               # Follower-specific assets
│       └── Trader/                 # Trader-specific assets
│
├── src/                            # Source code
│   ├── components/                 # Reusable components
│   │   ├── AdminSidebar.tsx       # Admin navigation
│   │   ├── FollowerSidebar.tsx    # Follower navigation
│   │   ├── Sidebar.tsx            # Trader navigation
│   │   ├── Navigation.tsx         # Main navigation
│   │   ├── Footer.tsx             # Site footer
│   │   ├── MiniFooter.tsx         # Compact footer
│   │   ├── Card.tsx               # Generic card
│   │   ├── Button.tsx             # Reusable button
│   │   ├── FormInput.tsx          # Form input
│   │   ├── Table.tsx              # Data table
│   │   ├── Chart.tsx              # Chart wrapper
│   │   ├── Badge.tsx              # Status badge
│   │   ├── TraderCard.tsx         # Trader profile card
│   │   ├── FollowerStat.tsx       # Follower statistics
│   │   ├── NotificationCard.tsx   # Notification item
│   │   ├── TicketCard.tsx         # Support ticket
│   │   └── ...                    # Other components
│   │
│   ├── layouts/                    # Layout components
│   │   ├── MainLayout.tsx         # Main app layout
│   │   ├── AuthLayout.tsx         # Authentication layout
│   │   ├── AdminLayout.tsx        # Admin panel layout
│   │   └── FollowerLayout.tsx     # Follower dashboard layout
│   │
│   ├── pages/                      # Page components
│   │   ├── common/                # Shared pages
│   │   │   └── Home.tsx           # Landing page
│   │   │
│   │   ├── trader/                # Master trader pages
│   │   │   ├── auth/              # Authentication
│   │   │   │   ├── Login.tsx
│   │   │   │   ├── Register.tsx
│   │   │   │   ├── OtpVerify.tsx
│   │   │   │   ├── ForgotPassword.tsx
│   │   │   │   └── ResetPassword.tsx
│   │   │   └── pages/             # Dashboard pages
│   │   │       ├── Dashboard.tsx
│   │   │       ├── LiveTradesMonitor.tsx
│   │   │       ├── TradeHistory.tsx
│   │   │       ├── FollowersManagement.tsx
│   │   │       ├── CopyTradingSettings.tsx
│   │   │       ├── EarningsPayouts.tsx
│   │   │       ├── APIConnection.tsx
│   │   │       ├── Notifications.tsx
│   │   │       └── HelpSupport.tsx
│   │   │
│   │   ├── follower/              # Follower pages
│   │   │   ├── auth/              # Authentication
│   │   │   │   ├── Login.tsx
│   │   │   │   ├── Register.tsx
│   │   │   │   ├── OtpVerify.tsx
│   │   │   │   ├── ForgotPassword.tsx
│   │   │   │   └── ResetPassword.tsx
│   │   │   └── pages/             # Dashboard pages
│   │   │       ├── Dashboard.tsx
│   │   │       ├── Marketplace.tsx
│   │   │       ├── MasterTraderProfile.tsx
│   │   │       ├── CopySettings.tsx
│   │   │       ├── ActiveTrades.tsx
│   │   │       ├── TradeHistory.tsx
│   │   │       ├── MyTraders.tsx
│   │   │       ├── WalletBalance.tsx
│   │   │       ├── Notifications.tsx
│   │   │       └── AccountSettings.tsx
│   │   │
│   │   └── admin/                 # Admin pages
│   │       └── pages/             # Admin dashboard
│   │           ├── Dashboard.tsx
│   │           ├── MasterTraders.tsx
│   │           ├── Followers.tsx
│   │           ├── CopyMonitoring.tsx
│   │           ├── TradeHistory.tsx
│   │           ├── Payouts.tsx
│   │           ├── APIManagement.tsx
│   │           ├── KYCVerification.tsx
│   │           ├── Subscriptions.tsx
│   │           ├── Support.tsx
│   │           ├── Settings.tsx
│   │           └── AdminAccounts.tsx
│   │
│   ├── store/                      # Redux store
│   │   ├── store.ts               # Store configuration
│   │   └── slices/                # Redux slices
│   │       └── authSlice.ts       # Authentication state
│   │
│   ├── types/                      # TypeScript types
│   │   ├── admin.ts               # Admin types
│   │   ├── user.ts                # User types
│   │   ├── trade.ts               # Trade types
│   │   ├── order.ts               # Order types
│   │   ├── position.ts            # Position types
│   │   ├── masterTrader.ts        # Master trader types
│   │   ├── follower.ts            # Follower types
│   │   ├── dashboard.ts           # Dashboard types
│   │   ├── earnings.ts            # Earnings types
│   │   ├── notification.ts        # Notification types
│   │   ├── api.ts                 # API types
│   │   ├── copy.ts                # Copy trading types
│   │   ├── account.ts             # Account types
│   │   ├── enums.ts               # Enumerations
│   │   └── index.ts               # Type exports
│   │
│   ├── App.tsx                     # Root component
│   ├── main.tsx                    # Entry point
│   ├── App.css                     # Global styles
│   └── index.css                   # Tailwind imports
│
├── index.html                      # HTML entry
├── vite.config.ts                  # Vite configuration
├── tsconfig.json                   # TypeScript config
├── tsconfig.app.json              # App TS config
├── tsconfig.node.json             # Node TS config
├── tailwind.config.js             # Tailwind config
├── postcss.config.js              # PostCSS config
├── eslint.config.js               # ESLint config
├── package.json                   # Dependencies
└── README.md                      # This file
```

---

## 🚀 Quick Start

### Prerequisites

- **Node.js** >= 18.0.0
- **npm** >= 9.0.0 or **yarn** >= 1.22.0
- **Git** for version control

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/thathsarabandara/binance-copy-trading-client.git
cd binance-copy-trading-client/client
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Set up environment variables** (optional)
```bash
cp .env.example .env
# Edit .env with your configuration
```

4. **Start development server**
```bash
npm run dev
# or
yarn dev
```

5. **Open in browser**
```
http://localhost:5173
```

### Build for Production

```bash
npm run build
# or
yarn build
```

### Preview Production Build

```bash
npm run preview
# or
yarn preview
```

---

## 👥 User Roles

### 🎯 Master Trader
Professional traders who share their trading strategies and earn performance fees.

**Access Points:**
- `/trader/auth/login` - Login page
- `/trader/auth/register` - Registration
- `/trader/dashboard` - Main dashboard

**Key Pages:**
- Dashboard with performance metrics
- Live trades monitoring
- Trade history
- Followers management
- Copy trading settings
- Earnings & payouts
- API connection
- Notifications
- Help & support

### 👤 Follower
Users who copy trades from master traders automatically.

**Access Points:**
- `/follower/auth/login` - Login page
- `/follower/auth/register` - Registration
- `/follower/dashboard` - Main dashboard

**Key Pages:**
- Dashboard overview
- Marketplace (browse traders)
- Master trader profiles
- Copy settings
- Active trades
- Trade history
- My traders
- Wallet balance
- Notifications
- Account settings

### 🛡️ Administrator
Platform administrators with full system control.

**Access Points:**
- `/admin/dashboard` - Admin panel

**Key Pages:**
- Platform dashboard
- Master traders management
- Followers management
- Copy monitoring
- Global trade history
- Payouts management
- API management
- KYC verification
- Subscriptions
- Support tickets
- System settings
- Admin accounts

---

## 🗺️ Pages & Routes

### Public Routes
```typescript
/                              → Landing page (Home)
```

### Trader Routes
```typescript
/trader/auth/login            → Trader login
/trader/auth/register         → Trader registration
/trader/auth/otp-verify       → OTP verification
/trader/auth/forgot-password  → Password recovery
/trader/auth/reset-password   → Reset password

/trader/dashboard             → Trader dashboard
/trader/live-trades           → Live trades monitor
/trader/history               → Trade history
/trader/followers             → Followers management
/trader/settings              → Copy trading settings
/trader/earnings              → Earnings & payouts
/trader/api                   → API connection
/trader/notifications         → Notifications
/trader/help                  → Help & support
```

### Follower Routes
```typescript
/follower/auth/login          → Follower login
/follower/auth/register       → Follower registration
/follower/auth/otp-verify     → OTP verification
/follower/auth/forgot-password → Password recovery
/follower/auth/reset-password  → Reset password

/follower/dashboard           → Follower dashboard
/follower/marketplace         → Browse master traders
/follower/marketplace/:id     → Trader profile
/follower/copy-settings       → Copy settings
/follower/active-trades       → Active trades
/follower/trade-history       → Trade history
/follower/my-traders          → My traders
/follower/wallet              → Wallet balance
/follower/notifications       → Notifications
/follower/settings            → Account settings
```

### Admin Routes
```typescript
/admin/dashboard              → Admin dashboard
/admin/master-traders         → Master traders management
/admin/followers              → Followers management
/admin/copy-monitoring        → Copy engine monitoring
/admin/trade-history          → Global trade history
/admin/payouts                → Payout management
/admin/api-management         → API health monitoring
/admin/kyc                    → KYC verification
/admin/subscriptions          → Subscription management
/admin/support                → Support tickets
/admin/settings               → System settings
/admin/accounts               → Admin accounts
```

---

## 🧩 Components

### Layout Components
- **MainLayout** - Primary app layout with navigation
- **AuthLayout** - Authentication pages layout
- **AdminLayout** - Admin panel with sidebar
- **FollowerLayout** - Follower dashboard layout

### Navigation Components
- **Navigation** - Main site navigation
- **Sidebar** - Trader sidebar navigation
- **FollowerSidebar** - Follower sidebar navigation
- **AdminSidebar** - Admin sidebar navigation

### UI Components
- **Button** - Reusable button with variants
- **Card** - Generic card container
- **Badge** - Status and label badges
- **FormInput** - Form input with validation
- **Table** - Data table component
- **Chart** - Chart wrapper component

### Feature Components
- **TraderCard** - Master trader profile card
- **FollowerStat** - Follower statistics display
- **NotificationCard** - Notification item
- **TicketCard** - Support ticket card
- **AdminStatCard** - Admin statistics card
- **AdminTradeCard** - Trade information card

### Social Components
- **SocialAuthButton** - Social authentication button
- **Footer** - Site footer with links
- **MiniFooter** - Compact footer

---

## 🗃️ State Management

### Redux Store Structure

```typescript
store/
├── store.ts              # Store configuration
└── slices/
    └── authSlice.ts      # Authentication state
```

### Auth Slice
Manages user authentication state:
- User information
- Authentication status
- Token management
- Login/logout actions

### Usage Example

```typescript
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from './store/slices/authSlice';

// In component
const { user, isAuthenticated } = useSelector((state) => state.auth);
const dispatch = useDispatch();

// Login
dispatch(login({ user: userData, token: 'token' }));

// Logout
dispatch(logout());
```

---

## 🎨 Styling

### Tailwind CSS Configuration

**Color Palette:**
```javascript
primary: {
  50: '#fffbf0',   // Lightest
  400: '#fac26e',  // Light yellow
  500: '#f7a842',  // Primary yellow
  600: '#f09d2e',  // Dark yellow
  900: '#92400e',  // Darkest
}

accent: {
  yellow: '#fbbf24',
  white: '#ffffff',
}
```

**Font Family:**
- Primary: Inter, system-ui, sans-serif

### Design System

**Spacing:**
- Consistent spacing scale (4px base unit)
- Responsive breakpoints: sm, md, lg, xl, 2xl

**Typography:**
- Headings: Bold, clear hierarchy
- Body: 16px base, 1.5 line-height
- Monospace: For code and numbers

**Components:**
- Rounded corners: `rounded-lg`, `rounded-xl`
- Shadows: `shadow-sm`, `shadow-md`, `shadow-lg`
- Transitions: `transition-all`, `duration-300`

**Color Usage:**
- Primary actions: Yellow (#f7a842)
- Success: Green (#10b981)
- Warning: Yellow/Orange (#f59e0b)
- Error: Red (#ef4444)
- Info: Blue (#3b82f6)

---

## 📜 Scripts

```json
{
  "dev": "vite",                    // Start development server
  "build": "tsc -b && vite build",  // Build for production
  "lint": "eslint .",               // Lint code
  "preview": "vite preview"         // Preview production build
}
```

### Development
```bash
npm run dev        # Start dev server on http://localhost:5173
```

### Building
```bash
npm run build      # Type check and build for production
npm run preview    # Preview production build locally
```

### Code Quality
```bash
npm run lint       # Run ESLint to check code quality
```

---

## ⚙️ Environment Setup

### Environment Variables (Optional)

Create a `.env` file in the root directory:

```env
# API Configuration
VITE_API_BASE_URL=http://localhost:3000/api
VITE_WS_URL=ws://localhost:3000

# Binance API
VITE_BINANCE_API_URL=https://api.binance.com

# Feature Flags
VITE_ENABLE_DEMO_MODE=false
VITE_ENABLE_ANALYTICS=true

# Other Configuration
VITE_APP_NAME=LK Trader
VITE_SUPPORT_EMAIL=support@lktrader.com
```

### Accessing Environment Variables

```typescript
const apiUrl = import.meta.env.VITE_API_BASE_URL;
const wsUrl = import.meta.env.VITE_WS_URL;
```

---

## 💻 Development Guidelines

### Code Style

- **TypeScript**: Use strict type checking
- **Components**: Functional components with hooks
- **Props**: Define interfaces for all props
- **State**: Use Redux for global state, useState for local
- **Naming**: 
  - Components: PascalCase
  - Functions: camelCase
  - Constants: UPPER_SNAKE_CASE
  - Files: PascalCase for components, camelCase for utilities

### Component Structure

```typescript
import React from 'react';
import type { ComponentProps } from '../types';

interface MyComponentProps {
  title: string;
  count: number;
  onAction: () => void;
}

const MyComponent: React.FC<MyComponentProps> = ({ title, count, onAction }) => {
  // Hooks
  const [state, setState] = React.useState(0);
  
  // Effects
  React.useEffect(() => {
    // Effect logic
  }, []);
  
  // Handlers
  const handleClick = () => {
    onAction();
  };
  
  // Render
  return (
    <div className="p-4">
      <h2>{title}</h2>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Action</button>
    </div>
  );
};

export default MyComponent;
```

### Best Practices

✅ **DO:**
- Use TypeScript for all new code
- Write semantic HTML
- Use Tailwind utility classes
- Keep components small and focused
- Extract reusable logic to custom hooks
- Use proper error boundaries
- Add loading and error states
- Document complex logic
- Write descriptive commit messages

❌ **DON'T:**
- Use inline styles (use Tailwind)
- Create deeply nested components
- Mutate state directly
- Ignore TypeScript errors
- Leave console.logs in production code
- Forget to handle loading/error states
- Use magic numbers (define constants)

---

## 🚀 Deployment

### Build for Production

```bash
# Install dependencies
npm install

# Build
npm run build

# Output directory: dist/
```

### Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### Deploy to Netlify

```bash
# Install Netlify CLI
npm i -g netlify-cli

# Build
npm run build

# Deploy
netlify deploy --prod --dir=dist
```

### Deploy to Custom Server

```bash
# Build
npm run build

# Copy dist/ to server
scp -r dist/* user@server:/var/www/lktrader

# Configure nginx/apache to serve static files
```

### Environment Variables in Production

Set environment variables in your hosting platform:
- Vercel: Project Settings → Environment Variables
- Netlify: Site Settings → Build & Deploy → Environment
- Custom: Set in `.env.production`

---

## 📚 Documentation

### Additional Documentation

- **[ADMIN_PANEL_README.md](./ADMIN_PANEL_README.md)** - Complete admin panel documentation
- **API Documentation** - (Link to API docs)
- **Component Storybook** - (Link if available)
- **Design System** - (Link to Figma/design files)

### API Integration

Currently using mock data. To integrate with backend:

1. Create API service layer in `src/services/`
2. Define API endpoints and methods
3. Replace mock data with API calls
4. Handle loading and error states
5. Implement authentication tokens
6. Add request/response interceptors

Example:
```typescript
// src/services/api.ts
import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add auth token to requests
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
```

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Commit Convention

Follow conventional commits:
- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting, etc.)
- `refactor:` - Code refactoring
- `test:` - Adding tests
- `chore:` - Maintenance tasks

---

## 🐛 Troubleshooting

### Common Issues

**Port already in use:**
```bash
# Change port in vite.config.ts or kill process
lsof -ti:5173 | xargs kill -9
```

**Type errors:**
```bash
# Clear TypeScript cache
rm -rf node_modules/.vite
npm run build
```

**Module not found:**
```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

**Build fails:**
```bash
# Check TypeScript errors
npx tsc --noEmit

# Check ESLint errors
npm run lint
```

---

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## 👨‍💻 Author

**Thathsara Bandara**
- GitHub: [@thathsarabandara](https://github.com/thathsarabandara)
- Project: [binance-copy-trading-client](https://github.com/thathsarabandara/binance-copy-trading-client)

---

## 🙏 Acknowledgments

- React team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- Vite team for the blazing fast build tool
- All contributors and users of this platform

---

## 📊 Project Stats

- **Total Components:** 30+
- **Total Pages:** 40+
- **Type Definitions:** 15+ files
- **Lines of Code:** 10,000+
- **Test Coverage:** TBD
- **Bundle Size:** ~500KB (gzipped)

---

## 🔮 Future Roadmap

- [ ] WebSocket integration for real-time updates
- [ ] Advanced charting with TradingView
- [ ] Mobile app (React Native)
- [ ] Multi-language support (i18n)
- [ ] Dark mode implementation
- [ ] Performance optimizations
- [ ] Unit and integration tests
- [ ] E2E testing with Playwright
- [ ] Storybook component library
- [ ] Analytics dashboard
- [ ] Push notifications
- [ ] Social features
- [ ] AI-powered trade recommendations

---

<div align="center">

**Built with ❤️ by Thathsara Bandara**

⭐ Star this repo if you find it helpful!

</div>
