# Sahas Eashan - Professional Portfolio

A modern, professional portfolio website built with Next.js, TypeScript, and Tailwind CSS. Showcasing projects, achievements, and technical skills in a clean, LinkedIn-worthy design.

## 🚀 Features

- **Professional Design**: Clean, modern interface optimized for professional networking
- **Responsive Layout**: Perfect display across all devices and screen sizes
- **Performance Optimized**: Fast loading with Next.js and static optimization
- **SEO Ready**: Proper meta tags and structured data for search engines
- **Interactive Animations**: Smooth, professional animations with Framer Motion
- **Project Showcase**: Detailed project cards with GitHub links and live demos
- **Achievement Timeline**: Professional timeline of awards and recognition
- **Skills Matrix**: Organized technical skills with proficiency indicators
- **Contact Integration**: Direct contact form and social media links

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: GitHub Pages with GitHub Actions

## 📱 Sections

1. **Hero**: Professional introduction with key stats
2. **About**: Education, certifications, and leadership roles
3. **Projects**: Featured technical projects with detailed descriptions
4. **Skills**: Technical competencies organized by category
5. **Achievements**: Timeline of awards and recognition
6. **Contact**: Professional contact form and social links

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/sahas-eashan/sahas-portfolio-pro.git
   cd sahas-portfolio-pro
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view the portfolio

### Building for Production

```bash
npm run build
```

This creates an optimized static export in the `out` directory, ready for deployment to GitHub Pages.

## 🌐 Deployment

### GitHub Pages (Automatic)

1. Push your code to the `main` branch
2. GitHub Actions will automatically build and deploy to GitHub Pages
3. Your site will be available at: `https://sahas-eashan.github.io/sahas-portfolio-pro`

### Manual Deployment

1. Build the project: `npm run build`
2. Deploy the `out` directory to your hosting provider

## 📝 Customization

### Personal Information

Update personal details in:
- `src/data/experience.ts` - Education and leadership roles
- `src/data/projects.ts` - Technical projects
- `src/data/skills.ts` - Technical skills
- `src/data/achievements.ts` - Awards and recognition

### Styling

- Global styles: `src/app/globals.css`
- Component styles: Tailwind classes in component files
- Color scheme: Update CSS variables in globals.css

### Content

- Replace placeholder images in `/public/images/`
- Update social media links in header and footer components
- Add your resume PDF to `/public/resume.pdf`

## 📞 Contact

**Sahas Eashan**
- Email: sahas.eashan@example.com
- LinkedIn: [linkedin.com/in/sahas-eashan](https://linkedin.com/in/sahas-eashan)
- GitHub: [github.com/sahas-eashan](https://github.com/sahas-eashan)

---

Built with ❤️ using Next.js and Tailwind CSS
