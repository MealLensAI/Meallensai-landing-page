# MealLens AI - Landing Page

A clean, modern landing page for MealLens AI, built with React, TypeScript, and Vite.

## 🚀 Quick Start

### Prerequisites

- Node.js 16+ 
- npm or yarn

### Installation

```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

✅ Development server running at: **http://localhost:5173**

### Build for Production

```bash
cd frontend
npm run build
```

The built files will be in the `frontend/dist` directory, ready for deployment.

## 🎯 Features

- Modern, responsive design
- Mobile-friendly interface
- Fast and lightweight
- SEO optimized
- Easy to deploy

## 📦 Tech Stack

### Frontend
- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI + shadcn/ui
- **Icons**: Lucide React

## 🌐 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository in Vercel
3. Set the build directory to `frontend`
4. Set the build command to `cd frontend && npm run build`
5. Set the output directory to `frontend/dist`
6. Deploy!

### Netlify

1. Push your code to GitHub
2. Import your repository in Netlify
3. Set the build command to `cd frontend && npm install && npm run build`
4. Set the publish directory to `frontend/dist`
5. Deploy!

### Manual Deployment

```bash
cd frontend
npm install
npm run build
# Upload the 'dist' folder to your hosting provider
```

## 🔧 Configuration

### Environment Variables

No environment variables are required for the landing page deployment.

### Updating App Links

If you need to update the signup/login links in the landing page, edit `frontend/src/pages/WelcomePage.tsx` and update the URLs in the `handleGetStarted`, `handleTryMealLensAI`, and `handleLogin` functions.

## 📁 Project Structure

```
frontend/
├── src/
│   ├── pages/
│   │   └── WelcomePage.tsx    # Main landing page
│   ├── components/
│   │   ├── ui/                # UI components (shadcn/ui)
│   │   └── Logo.tsx           # Logo component
│   ├── lib/
│   │   ├── config.ts          # Configuration
│   │   └── utils.ts           # Utility functions
│   ├── App.tsx                # Main app component
│   └── main.tsx               # Entry point
├── public/                    # Static assets
├── package.json
└── vite.config.ts
```

## 🎨 Customization

The landing page is fully customizable:

- **Colors**: Edit Tailwind classes in `WelcomePage.tsx`
- **Content**: Update text and features in `WelcomePage.tsx`
- **Styling**: Modify Tailwind config in `tailwind.config.ts`
- **Assets**: Replace images in `public/assets/images/`

## 📝 License

[Add your license here]

---

**Status**: ✅ Ready for Deployment
**Last Updated**: 2025
