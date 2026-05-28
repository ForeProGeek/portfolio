# React Portfolio Build Guide

> **Design Reference:** `Screenshot 2026-05-28 141843.png`  
> **Profile Photo:** `WhatsApp Image 2026-05-27 at 11.07.55.jpeg`  
> **Stack:** React + Vite + Tailwind CSS + Framer Motion  
> **Level:** Intermediate

---

## 1. Design Overview

This is a **single-page dark-themed portfolio** with a premium, minimal aesthetic. It features a fixed navbar, a bold hero section with a large background watermark text, a skills ribbon, and an about section.

### Sections (in order)
1. **Navbar** — Logo + nav links + CTA button + mobile hamburger
2. **Hero** — Greeting, name, bio, CTAs, social icons, profile image, background watermark
3. **Skills** — Circular icon badges with percentage labels
4. **About Me** — Heading with decorative underline + paragraph
5. *(Continuation)* Portfolio, Services, Testimonial, Blog, Contact sections

### Mood
- Dark, sleek, professional
- High contrast (white text on near-black)
- Generous whitespace
- Subtle animations on scroll

---

## 2. Tech Stack

| Layer | Tool | Purpose |
|-------|------|---------|
| **Bundler** | Vite | Fast dev server and build |
| **Framework** | React 18 | UI components |
| **Styling** | Tailwind CSS | Utility-first responsive styling |
| **Animations** | Framer Motion | Scroll reveals, hover effects, page transitions |
| **Icons** | React Icons | Social icons, menu icons |
| **Fonts** | Google Fonts | Inter (body), Playfair Display or similar (accent) |
| **Deploy** | Vercel | Free hosting with custom domain support |

### Install Commands
```bash
npm create vite@latest portfolio -- --template react
cd portfolio
npm install
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
npm install framer-motion react-icons
```

---

## 3. Design Tokens

Copy these values into your Tailwind config or a `theme.js` file.

### Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `--bg-primary` | `#0a0a0a` | Page background |
| `--bg-card` | `#111111` | Cards, subtle containers |
| `--bg-surface` | `#1a1a1a` | Hover states, borders |
| `--text-primary` | `#ffffff` | Headings, main text |
| `--text-secondary` | `#a1a1aa` | Body text, descriptions |
| `--text-muted` | `#71717a` | Labels, placeholders |
| `--accent` | `#ffffff` | Primary buttons |
| `--accent-hover` | `#e4e4e7` | Button hover |
| `--border` | `#27272a` | Dividers, subtle lines |

### Typography

| Element | Font | Size | Weight |
|---------|------|------|--------|
| Logo | Inter | 24px | 700 |
| Nav links | Inter | 14px | 500 |
| Greeting | Inter | 16px | 400 |
| Hero name | Inter / Playfair | 64px (desktop), 40px (mobile) | 700 |
| Body | Inter | 16px | 400 |
| Buttons | Inter | 14px | 600 |
| Watermark | Inter | 120px (desktop) | 800 |
| Section title | Inter | 32px | 700 |

### Spacing

- Page horizontal padding: `px-6 md:px-12 lg:px-24`
- Section vertical spacing: `py-20 md:py-32`
- Max content width: `1280px` (Tailwind `max-w-7xl`)
- Gap between elements: `gap-6` to `gap-12`

---

## 4. Component Architecture

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── MobileMenu.jsx
│   ├── Hero.jsx
│   ├── SkillBadge.jsx
│   ├── SkillsRibbon.jsx
│   ├── AboutSection.jsx
│   ├── SectionTitle.jsx
│   ├── PrimaryButton.jsx
│   ├── GhostButton.jsx
│   └── SocialIcons.jsx
├── pages/
│   └── Home.jsx
├── hooks/
│   └── useScrollAnimation.js
├── data/
│   ├── skills.js
│   ├── navLinks.js
│   └── socialLinks.js
├── App.jsx
├── main.jsx
└── index.css
```

---

## 5. Section-by-Section Build Guide

### A. Navbar (`Navbar.jsx`)

**Structure:**
```
<nav> (fixed, top-0, z-50, backdrop-blur)
  ├── <div> Logo: "Pertest" </div>
  ├── <ul> Desktop links (hidden on mobile) </ul>
  ├── <div>
  │     "Let's Talk" button
  │     Hamburger icon (mobile only)
  │   </div>
</nav>
```

**Requirements:**
- Fixed position, full width
- Background: `rgba(10,10,10,0.8)` with `backdrop-filter: blur(12px)`
- Height: `80px`
- Logo on left, links center, CTA + hamburger right
- On scroll past hero, add a subtle bottom border (`border-b border-zinc-800`)
- Mobile: hide links, show hamburger → opens full-screen overlay menu

**Nav Links:**
```javascript
const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About Me", href: "#about" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Services", href: "#services" },
  { name: "Testimonial", href: "#testimonial" },
  { name: "Blog", href: "#blog" },
  { name: "Contact", href: "#contact" },
];
```

**Smooth Scroll:**
Add this to `index.css`:
```css
html {
  scroll-behavior: smooth;
}
```

---

### B. Hero Section (`Hero.jsx`)

**Layout:** Two-column on desktop, stacked on mobile.

```
<section id="home">
  {/* Background Watermark */}
  <div className="absolute ...">UI UX DESIGNER</div>

  <div className="grid grid-cols-1 lg:grid-cols-2">
    {/* Left: Profile Image */}
    <div>
      <img src="/profile.png" alt="Profile" />
    </div>

    {/* Right: Text Content */}
    <div>
      <p>Hi there! 👋 I'm</p>
      <h1>Your Name</h1>
      <p>Bio description...</p>
      <div>
        <PrimaryButton>Let's Talk</PrimaryButton>
        <GhostButton>Download CV</GhostButton>
      </div>
      <SocialIcons />
    </div>
  </div>
</section>
```

**Background Watermark Text:**
- Text: "UI UX DESIGNER" (or your role, e.g., "FULL STACK DEV")
- Style: `font-size: 120px`, `font-weight: 800`, `color: transparent`, `stroke: 1px rgba(255,255,255,0.1)`
- Position: absolute, behind the content, slightly offset
- Tailwind trick: Use `-webkit-text-stroke: 1px rgba(255,255,255,0.1)` with `color: transparent`

**Profile Image:**
- Use your photo: `WhatsApp Image 2026-05-27 at 11.07.55.jpeg`
- Remove background if possible (use remove.bg or Photoshop)
- Position: left side, slightly overlapping the watermark text
- Style: rounded corners or natural cutout

**Buttons:**
- **Primary:** White bg, black text, pill shape (`rounded-full`), arrow icon
- **Ghost:** Transparent bg, white text, white border, pill shape, arrow icon

**Social Icons:**
- Facebook, X (Twitter), Behance, Dribbble
- Style: `40px` circles, `border: 1px solid #333`, icon in center
- Hover: bg turns white, icon turns black

---

### C. Skills Ribbon (`SkillsRibbon.jsx` + `SkillBadge.jsx`)

**Layout:** Horizontal row of circular badges. On mobile, allow horizontal scroll.

```
<section>
  <div className="flex gap-8 overflow-x-auto pb-4">
    {skills.map(skill => <SkillBadge key={skill.name} {...skill} />)}
  </div>
</section>
```

**SkillBadge Component:**
```
<div className="flex flex-col items-center gap-2">
  <div className="w-16 h-16 rounded-full flex items-center justify-center bg-[skillColor]">
    <Icon />
  </div>
  <span className="text-white font-bold">{percentage}%</span>
  <span className="text-zinc-500 text-sm">{name}</span>
</div>
```

**Skills Data:**
```javascript
export const skills = [
  { name: "WordPress", percent: 85, color: "#21759b", icon: "FaWordpress" },
  { name: "Adobe XD", percent: 90, color: "#FF61F6", icon: "SiAdobexd" },
  { name: "Figma", percent: 80, color: "#F24E1E", icon: "FaFigma" },
  { name: "Photoshop", percent: 75, color: "#31A8FF", icon: "SiAdobephotoshop" },
  { name: "Canva", percent: 90, color: "#00C4CC", icon: "SiCanva" },
  { name: "WordPress", percent: 85, color: "#21759b", icon: "FaWordpress" },
  { name: "HTML5", percent: 95, color: "#E34F26", icon: "FaHtml5" },
];
```

> **Note:** Replace duplicates with your actual skills (React, JavaScript, CSS, Node.js, etc.)

---

### D. About Me Section (`AboutSection.jsx`)

**Structure:**
```
<section id="about">
  <SectionTitle>About Me</SectionTitle>
  <p className="text-xl text-zinc-400 leading-relaxed max-w-3xl">
    I am a [Your Role] with over [X] years of experience...
  </p>
</section>
```

**SectionTitle Component:**
- Text + decorative underline
- Underline: short line with a dot at the end
- Color: white text, white line, white dot

**Content to write:**
- 2–3 sentences about yourself
- Mention your school (SQI), your stack, and what you're passionate about
- Keep it professional but personal

---

## 6. Animation Plan (Framer Motion)

| Element | Animation | Trigger |
|---------|-----------|---------|
| Navbar | Slide down + fade | On page load |
| Hero text | Stagger children fade-up | On page load |
| Profile image | Slide in from left | On page load |
| Watermark text | Slow fade in | On page load |
| Skills | Stagger scale-up | Scroll into view |
| About text | Fade up | Scroll into view |
| Buttons | Scale up on hover | Hover |
| Social icons | Background fill on hover | Hover |

**Reusable Fade-Up Wrapper:**
```jsx
import { motion } from "framer-motion";

export function FadeUp({ children, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
}
```

---

## 7. Responsive Breakpoints

| Breakpoint | Tailwind Prefix | Layout Changes |
|------------|-----------------|----------------|
| Mobile | default | Single column, hamburger menu, smaller text |
| Tablet | `md:` (768px) | Two columns begin appearing, larger spacing |
| Desktop | `lg:` (1024px) | Full layout, watermark text visible, all nav links shown |
| Wide | `xl:` (1280px) | Max content width reached, generous whitespace |

---

## 8. Asset Checklist

Before coding, prepare these files in the `/public` folder:

| File | Source | Notes |
|------|--------|-------|
| `profile.png` | Your WhatsApp photo | Remove background, save as PNG with transparency |
| `resume.pdf` | Your CV | Export from Word/Google Docs |
| `favicon.ico` | Your logo initial | Use favicon.io or your logo |

---

## 9. Tailwind Config Setup

```javascript
// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#0a0a0a",
        surface: "#111111",
        border: "#27272a",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Playfair Display", "serif"],
      },
    },
  },
  plugins: [],
};
```

```css
/* index.css */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:wght@700&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

html {
  scroll-behavior: smooth;
}

body {
  background-color: #0a0a0a;
  color: #ffffff;
  font-family: 'Inter', sans-serif;
}

/* Watermark text stroke */
.text-stroke {
  -webkit-text-stroke: 1px rgba(255, 255, 255, 0.1);
  color: transparent;
}
```

---

## 10. Build Order (Do It Step By Step)

1. **Setup** — Initialize Vite, install dependencies, configure Tailwind
2. **Navbar** — Build fixed navbar with mobile hamburger menu
3. **Hero** — Build the hero section with your name, photo, and watermark
4. **Buttons** — Create PrimaryButton and GhostButton components
5. **Social Icons** — Create the social icon row
6. **Skills** — Build SkillBadge and SkillsRibbon with your tech stack
7. **About** — Build AboutSection with SectionTitle component
8. **Animations** — Add Framer Motion fade-ups to all sections
9. **Responsive** — Test and fix mobile layout issues
10. **Deploy** — Push to GitHub and deploy on Vercel

---

## 11. Deploy to Vercel

```bash
# 1. Push to GitHub
git init
git add .
git commit -m "Initial portfolio build"
git push origin main

# 2. Go to vercel.com
# 3. Import your GitHub repo
# 4. Deploy
```

---

**Do you want me to:**
1. **Create the starter files** (Vite + Tailwind config + folder structure)?
2. **Build the first component** (Navbar)?
3. **Show you the code for a specific section** (e.g., the Hero with watermark text)?
