<div align="center">

# 🌟 Personal Portfolio Website

### A Modern, Interactive Portfolio Built with React & TypeScript

[![React](https://img.shields.io/badge/React-18.3.1-61dafb?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-3178c6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4.1-646cff?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-3.4.11-38bdf8?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

[Live Demo](#) • [Report Bug](https://github.com/mk23rd/PersonalPortfolio/issues) • [Request Feature](https://github.com/mk23rd/PersonalPortfolio/issues)

</div>

---

## 📋 Table of Contents

- [About the Project](#-about-the-project)
- [Key Features](#-key-features)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Project](#running-the-project)
- [Project Structure](#-project-structure)
- [Available Scripts](#-available-scripts)
- [Customization](#-customization)
- [Deployment](#-deployment)
- [Contributing](#-contributing)
- [License](#-license)
- [Contact](#-contact)
- [Acknowledgments](#-acknowledgments)

---

## 🎯 About the Project

Welcome to my personal portfolio website! This is a dynamic, single-page application that showcases my journey as a Computer Science student at Hilcoe School of Computer Science and Technology. The portfolio features an elegant, modern design with smooth animations and interactive elements that create an engaging user experience.

The website serves as a comprehensive platform to:
- 🎓 Display my educational background and professional experience
- 💼 Showcase my technical skills and expertise
- 📂 Present my projects and work
- 📬 Provide easy ways to get in touch

---

## ✨ Key Features

### 🎨 Design & User Experience
- **Fully Responsive Design** - Seamlessly adapts to all screen sizes (desktop, tablet, mobile)
- **Dark Mode Support** - Built-in theme system with elegant dark/light mode toggle
- **Smooth Animations** - Custom-crafted animations using Tailwind CSS and Framer Motion principles
- **Glass Morphism UI** - Modern glassmorphic design elements for a sophisticated look
- **Interactive Components** - Engaging hover effects and scroll animations

### 🛠️ Technical Features
- **Type-Safe Development** - Built with TypeScript for robust, maintainable code
- **Modern React Patterns** - Utilizing React hooks and functional components
- **Optimized Performance** - Lightning-fast load times with Vite's build optimization
- **Component Library** - Powered by shadcn/ui and Radix UI for accessible components
- **Form Validation** - React Hook Form with Zod schema validation
- **Routing** - Client-side routing with React Router DOM
- **Email Delivery** - Contact form sends messages via EmailJS directly to your inbox

### 📱 Sections
- **Hero Section** - Eye-catching introduction with animated text
- **Projects** - Showcase of work and accomplishments
- **Skills** - Technical proficiency visualization with progress bars
- **Education** - Timeline of academic and professional journey
- **Contact** - Easy-to-use contact form with validation

---

## 🚀 Tech Stack

### Frontend Framework
- **React 18.3.1** - Modern UI library for building user interfaces
- **TypeScript 5.5.3** - Typed superset of JavaScript for enhanced developer experience

### Build Tools & Dev Environment
- **Vite 5.4.1** - Next-generation frontend build tool
- **ESLint** - Code linting for maintaining code quality
- **PostCSS & Autoprefixer** - CSS processing and vendor prefixing

### Styling
- **TailwindCSS 3.4.11** - Utility-first CSS framework
- **tailwindcss-animate** - Animation utilities for Tailwind
- **class-variance-authority** - For creating variant-based components
- **clsx & tailwind-merge** - Conditional className utilities

### UI Components
- **shadcn/ui** - Re-usable component library built on Radix UI
- **Radix UI** - Unstyled, accessible component primitives
- **Lucide React** - Beautiful & consistent icon set

### Forms & Validation
- **React Hook Form 7.53.0** - Performant form library
- **Zod 3.23.8** - TypeScript-first schema validation

### State Management & Data Fetching
- **TanStack Query 5.56.2** - Powerful data synchronization library
- **React Router DOM 6.26.2** - Declarative routing for React

### Additional Libraries
- **sonner** - Toast notifications
- **next-themes** - Theme management
- **date-fns** - Date utility library
- **embla-carousel-react** - Lightweight carousel library

---

## 🎬 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development purposes.

### Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js** (v18.0.0 or higher)
  ```bash
  # Check your Node.js version
  node --version
  ```

- **npm** or **bun** (package manager)
  ```bash
  # Check your npm version
  npm --version
  ```

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/mk23rd/PersonalPortfolio.git
   ```

2. **Navigate to the project directory**
   ```bash
   cd PersonalPortfolio
   ```

3. **Install dependencies**
   ```bash
   npm install
   # or if you use bun
   bun install
   ```

4. **Configure environment variables**
   ```bash
   cp .env.example .env
   # Fill in the EmailJS keys used by the contact form
   ```

### Running the Project

Start the development server:

```bash
npm run dev
```

The application will open in your default browser at `http://localhost:8080`

---

## 📁 Project Structure

```
PersonalPortfolio/
├── public/                    # Static assets
│   └── placeholder.svg
├── src/
│   ├── components/           # React components
│   │   ├── ui/              # shadcn/ui components
│   │   ├── AnimatedSection.tsx
│   │   ├── Contact.tsx
│   │   ├── Education.tsx
│   │   ├── EducationItem.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Navigation.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── Projects.tsx
│   │   ├── SkillCard.tsx
│   │   └── Skills.tsx
│   ├── lib/                 # Utility functions
│   ├── pages/              # Page components
│   │   ├── Index.tsx
│   │   └── NotFound.tsx
│   ├── App.tsx             # Main application component
│   └── main.tsx            # Application entry point
├── .gitignore
├── components.json         # shadcn/ui configuration
├── eslint.config.js       # ESLint configuration
├── index.html             # HTML template
├── package.json           # Project dependencies
├── postcss.config.js      # PostCSS configuration
├── tailwind.config.ts     # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
└── vite.config.ts         # Vite configuration
```

---

## 📜 Available Scripts

In the project directory, you can run:

### `npm run dev`
Runs the app in development mode at [http://localhost:8080](http://localhost:8080)
- Hot Module Replacement (HMR) enabled
- Fast refresh for instant feedback

### `npm run build`
Builds the app for production to the `dist` folder
- Optimizes the build for best performance
- Minifies code and assets
- Bundles are correctly hashed for cache busting

### `npm run build:dev`
Creates a development build with source maps for debugging

### `npm run lint`
Runs ESLint to check code quality
- Identifies potential errors
- Enforces code style consistency

### `npm run preview`
Locally preview the production build
- Serves the production build on a local server
- Useful for final testing before deployment

---

## 🎨 Customization

### Updating Personal Information

1. **Hero Section** - Edit `src/components/Hero.tsx`
   ```tsx
   // Update your name, title, and bio
   ```

2. **Skills** - Modify `src/components/Skills.tsx`
   ```tsx
   // Add/remove skills and adjust proficiency levels
   const technicalSkills = [
     { name: "JavaScript", proficiency: 60 },
     // Add more skills...
   ];
   ```

3. **Education** - Edit `src/components/Education.tsx`
   ```tsx
   // Update education and work experience timeline
   const educationData = [
     // Your education items...
   ];
   ```

4. **Contact Information** - Update `src/components/Contact.tsx`
   - Modify contact form settings
   - Update social media links
   - Supply EmailJS service/template IDs in `.env`

### Styling & Theme

- **Colors**: Edit `tailwind.config.ts` to customize color palette
- **Fonts**: Update font families in `tailwind.config.ts`
- **Animations**: Modify keyframes in `tailwind.config.ts`

### Adding New Components

The project uses shadcn/ui. To add new components:

```bash
npx shadcn-ui@latest add [component-name]
```

---

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Visit [Vercel](https://vercel.com)
3. Import your repository
4. Vercel will auto-detect Vite configuration
5. Click "Deploy"

### Deploy to Netlify

1. Build the project:
   ```bash
   npm run build
   ```
2. Drag and drop the `dist` folder to [Netlify](https://app.netlify.com/drop)

### Deploy to GitHub Pages

1. Install gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```
2. Add deploy scripts to `package.json`:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
3. Deploy:
   ```bash
   npm run deploy
   ```

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

## 📧 Contact

**Michael** - 4th Year Computer Science Student

- GitHub: [@mk23rd](https://github.com/mk23rd)
- Project Link: [https://github.com/mk23rd/PersonalPortfolio](https://github.com/mk23rd/PersonalPortfolio)

---

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - The web framework used
- [TypeScript](https://www.typescriptlang.org/) - For type safety
- [Vite](https://vitejs.dev/) - Build tool
- [TailwindCSS](https://tailwindcss.com/) - For styling
- [shadcn/ui](https://ui.shadcn.com/) - Component library
- [Radix UI](https://www.radix-ui.com/) - Accessible primitives
- [Lucide](https://lucide.dev/) - Icon library
- [Hilcoe School of Computer Science and Technology](https://hilcoe.net/) - My educational institution

---

<div align="center">

### ⭐ Star this repository if you find it helpful!

Made with ❤️ by Michael

</div>
