# Portfolio Website - Pure React

A clean, minimalistic portfolio website built with pure React (Create React App) without any external dependencies like Vite, Tailwind, or UI libraries.

## 🎓 About
Portfolio for an IIT BHU Varanasi Electrical Engineering (B.Tech) graduate specializing in:
- Web Development (Full-stack)
- Database Systems
- Operating Systems
- Computer Networks
- Data Structures & Algorithms
- Computer Programming

## ✨ Features
- **Pure React**: No external dependencies except React
- **Responsive Design**: Mobile-first approach with hamburger navigation
- **Custom CSS**: Hand-crafted styles with smooth animations
- **Interactive Elements**: Hover effects, fade-in animations, and gradient text
- **Skills Showcase**: Animated cards highlighting technical expertise
- **Project Portfolio**: Displays sample projects with technology stacks
- **Professional Layout**: Hero section, about, skills, projects, and contact sections

## 🛠️ Tech Stack
- **React 18** - Core framework
- **React Scripts** - Build tooling (Create React App)
- **Custom CSS** - No external CSS frameworks
- **SVG Icons** - Inline SVG components (no icon libraries)
- **Google Fonts** - Inter font family

## 📦 Installation & Setup

### Prerequisites
- Node.js 14+ 
- npm or yarn

### Quick Start
1. Extract the portfolio files
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start development server:
   ```bash
   npm start
   ```
4. Open your browser to `http://localhost:3000`

### Production Build
```bash
npm run build
```

## 📁 Project Structure
```
portfolio-react/
├── public/
│   └── index.html      # HTML template
├── src/
│   ├── App.js          # Main React component
│   ├── App.css         # Component styles
│   ├── index.js        # React entry point
│   └── index.css       # Global styles
├── package.json        # Dependencies and scripts
└── README.md          # This file
```

## 🎨 Customization

### Personal Information
Update the following in `src/App.js`:
- Hero section title and description
- Contact information
- Social media links (GitHub, LinkedIn)
- Education details
- Skills and expertise areas

### Projects
Add your actual projects by updating the `projects` array:
```javascript
const projects = [
  {
    title: "Your Project Name",
    description: "Project description",
    tech: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/yourusername/project",
    demo: "https://yourproject.com"
  },
  // ... more projects
];
```

### Styling
- Main styles: `src/App.css`
- Global styles: `src/index.css`
- Colors and animations: Modify CSS custom properties

## 🚀 Key Features

### No External Dependencies
- Pure React implementation
- No Tailwind, Bootstrap, or other CSS frameworks
- No icon libraries (all SVGs are inline)
- No complex build tools beyond Create React App

### Responsive Design
- Mobile navigation menu with hamburger icon
- Optimized layouts for different screen sizes
- Touch-friendly buttons and interactions
- Readable typography across devices

### Custom Animations
- Fade-in effects on scroll
- Hover animations for cards and buttons
- Smooth transitions throughout
- CSS-only animations (no JS animation libraries)

## 📱 Mobile Support
- Responsive navigation with hamburger menu
- Touch-optimized button sizes
- Flexible grid layouts
- Optimized typography for mobile reading

## 🎯 Performance
- Fast loading with minimal dependencies
- Optimized CSS and images
- Create React App build optimization
- Clean, semantic HTML structure

## 🚀 Deployment Options

### Netlify
1. Build the project: `npm run build`
2. Upload `build/` folder to Netlify
3. Configure build settings if needed

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add deploy script to package.json:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```
3. Run: `npm run deploy`

### Vercel
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

## 📄 License
This portfolio template is open source and available under the MIT License.

---

**Note**: This is a pure React implementation without external dependencies. All icons are SVG components, and styling is done with custom CSS. Perfect for developers who want full control over their portfolio without the overhead of additional libraries.