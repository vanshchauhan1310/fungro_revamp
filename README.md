# Funngro Stellar Revamp

A modern, interactive financial literacy platform designed to teach kids smart money management through gamified learning experiences, supervised spending, and interactive tools.

## 🚀 Features

- **Interactive Learning**: Gamified financial education for children
- **Supervised Spending**: Parent-controlled spending with real-time monitoring
- **Savings Goals**: Visual progress tracking for financial goals
- **Weekly Challenges**: Engaging challenges to build money habits
- **Digital Wallet**: Safe, RBI-approved digital wallet for kids
- **Parent Dashboard**: Comprehensive oversight and control features
- **Bank-level Security**: Enterprise-grade security measures

## 🛠️ Tech Stack

- **Frontend**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with custom animations
- **UI Components**: shadcn/ui with Radix UI primitives
- **State Management**: TanStack Query for server state
- **Routing**: React Router DOM
- **Forms**: React Hook Form with Zod validation
- **Charts**: Recharts for data visualization
- **Icons**: Lucide React
- **Themes**: next-themes for dark/light mode support

## 📦 Prerequisites

- Node.js (v18 or higher)
- npm or bun package manager

## 🚀 Getting Started

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repository-url>
   cd funngro-stellar-revamp-project
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   bun install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   bun dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application.

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:dev` - Build for development
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/            # shadcn/ui components
│   ├── Hero.tsx       # Landing page hero section
│   ├── Navigation.tsx # Main navigation
│   ├── Features.tsx   # Features showcase
│   ├── HowItWorks.tsx # How it works section
│   ├── Testimonials.tsx # Customer testimonials
│   ├── Stats.tsx      # Statistics section
│   ├── Footer.tsx     # Footer component
│   └── CTA.tsx        # Call-to-action component
├── pages/             # Page components
│   ├── Index.tsx      # Home page
│   ├── About.tsx      # About page
│   ├── Contact.tsx    # Contact page
│   └── NotFound.tsx   # 404 page
├── hooks/             # Custom React hooks
├── lib/               # Utility functions and configurations
├── App.tsx            # Main app component
└── main.tsx          # Application entry point
```

## 🎨 Design System

The project uses a comprehensive design system built with:

- **Tailwind CSS**: Utility-first CSS framework
- **shadcn/ui**: High-quality, accessible components
- **Custom Animations**: Smooth transitions and micro-interactions
- **Responsive Design**: Mobile-first approach
- **Color Palette**: Purple, blue, and indigo gradient theme

## 🔧 Configuration Files

- `vite.config.ts` - Vite configuration
- `tailwind.config.ts` - Tailwind CSS configuration
- `tsconfig.json` - TypeScript configuration
- `eslint.config.js` - ESLint configuration
- `components.json` - shadcn/ui configuration

## 🚀 Deployment

### Development
```bash
npm run build:dev
```

### Production
```bash
npm run build
```

The built files will be in the `dist/` directory, ready for deployment to any static hosting service.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is proprietary software. All rights reserved.

## 📞 Support

For support and questions:
- Email: support@funngro.com
- Website: https://funngro.com

## 🔒 Security

This application implements bank-level security measures including:
- RBI-approved compliance
- Encrypted data transmission
- Secure authentication
- Parental controls and monitoring

---

**Built with ❤️ for the next generation of financially literate kids**
