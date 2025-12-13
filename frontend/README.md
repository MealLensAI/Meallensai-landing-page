# MealLens AI - Landing Page

A modern, responsive landing page built with React, TypeScript, Vite, and Tailwind CSS.

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm run dev
```

The application will be available at: **http://localhost:5173/**

### Build for Production

```bash
# Create production build
npm run build

# Preview production build
npm run preview
```

The built files will be in the `dist` directory, ready for deployment.

## 📁 Project Structure

```
frontend/
├── src/
│   ├── pages/
│   │   └── WelcomePage.tsx    # Main landing page
│   ├── components/
│   │   ├── ui/                # shadcn/ui components
│   │   └── Logo.tsx           # Logo component
│   ├── lib/
│   │   ├── config.ts          # Configuration
│   │   └── utils.ts           # Utility functions
│   ├── App.tsx                # Main app component (simplified routing)
│   └── main.tsx               # Entry point
├── public/                    # Static assets
│   └── assets/
│       └── images/            # Logo images
├── index.html                 # HTML template
├── vite.config.ts             # Vite configuration
├── tailwind.config.ts         # Tailwind CSS config
├── tsconfig.json              # TypeScript config
├── vercel.json                # Vercel deployment config
└── package.json               # Dependencies
```

## 🛠️ Tech Stack

- **Framework**: React 18
- **Language**: TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI + shadcn/ui
- **Routing**: React Router v6 (simplified)
- **Icons**: Lucide React

## 🎨 Customization

### Updating App Links

Edit `src/pages/WelcomePage.tsx` and update the URLs in:
- `handleGetStarted()` - Signup link
- `handleTryMealLensAI()` - Signup link  
- `handleLogin()` - Login link

### Modifying Content

- **Text Content**: Edit `src/pages/WelcomePage.tsx`
- **Colors**: Modify Tailwind classes in components
- **Styling**: Update `tailwind.config.ts`
- **Assets**: Replace images in `public/assets/images/`

### Pricing Plans

Update subscription plans in `src/lib/config.ts` (APP_CONFIG.subscriptionPlans).

## 🌐 Deployment

### Vercel

1. Push code to GitHub
2. Import repository in Vercel
3. Set root directory to `frontend`
4. Build command: `npm run build`
5. Output directory: `dist`
6. Deploy!

### Netlify

1. Push code to GitHub
2. Import repository in Netlify
3. Build command: `npm install && npm run build`
4. Publish directory: `dist`
5. Deploy!

### Manual Deployment

```bash
npm install
npm run build
# Upload the 'dist' folder to your hosting provider
```

## 📦 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## 🔧 Configuration

No environment variables are required. The landing page is self-contained.

## 📱 Responsive Design

The landing page is fully responsive with mobile-first design:
- Mobile, tablet, and desktop optimized
- Touch-friendly navigation
- Responsive images and layouts

## 🧪 Development Tips

- **Hot Module Replacement**: Changes reflect immediately
- **TypeScript**: Strict mode enabled for type safety
- **Tailwind**: Use utility classes for styling
- **Components**: Reusable UI components in `components/ui/`

---

**Status**: ✅ Ready for Deployment
