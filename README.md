# 🚀 Jayesh Patil — Modern Developer Portfolio & Resume

A sleek, high-performance, minimalist **Black & White** personal portfolio and interactive resume website built with **Next.js 16 (App Router)**, **React 19**, **TypeScript**, and **Tailwind CSS v4**.

![Portfolio Preview Banner](https://img.shields.io/badge/Status-Live%20%26%20Active-success?style=for-the-badge)
![Next.js 16](https://img.shields.io/badge/Next.js-16.0-black?style=for-the-badge&logo=next.js)
![React 19](https://img.shields.io/badge/React-19.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

---

## 🌟 Key Highlights & Features

- **🖤 Minimalist Black & White Theme**: High-contrast, editorial-grade monochrome design system with pure dark (`#000000`) and light (`#ffffff`) themes, powered by `next-themes`.
- **📄 Dedicated In-Browser Resume Page (`/resume`)**: Instant access to a clean ATS-friendly resume breakdown with direct download triggers and 1-click copy for contact tokens.
- **💻 Interactive Projects Showcase**: Filterable portfolio projects (*Stack-Board*, *SkillSphere*, *Secure User Auth*, *Attendance Tracker*) with tech badges and GitHub repository links.
- **🏆 Credentials & Research Showcase**: Highlights peer-reviewed **AI Research Publication** in an international journal, **LeetCode 512+ Solved Problems**, Coursera ML, Udemy C++, and Google IT certifications with fullscreen inspection modals.
- **⚡ 6-Category Skills Matrix**: Interactive skill grid covering Programming Languages, Frontend, Backend & APIs, Databases & Cloud, Tools & Testing, and Core CS Fundamentals.
- **📬 Working Contact Form & Direct Actions**: Form with validation via `zod` and `react-hook-form`, integrated with server-side email dispatch.
- **📱 100% Fully Responsive**: Pixel-perfect layout tailored across mobile, tablet, laptop, and ultra-wide displays.
- **🔍 SEO & Social Meta Optimized**: Rich metadata, OpenGraph cards, semantic HTML5, and accessible ARIA attributes.

---

## 🛠️ Technology Stack

| Domain | Technologies Used |
|---|---|
| **Framework** | [Next.js 16](https://nextjs.org/) (App Router, Server & Client Components) |
| **UI Library** | [React 19](https://react.dev/) |
| **Language** | [TypeScript](https://www.typescriptlang.org/) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) with CSS Variables |
| **Icons** | [Lucide React](https://lucide.dev/) & [React Icons](https://react-icons.github.io/react-icons/) |
| **Theming** | [next-themes](https://github.com/pacocoursey/next-themes) (Light / Dark mode persistence) |
| **Validation** | [Zod](https://zod.dev/) & [React Hook Form](https://react-hook-form.com/) |
| **Email Transport** | [Nodemailer](https://nodemailer.com/) |

---

## 📂 Project Structure

```bash
Portfolio/
├── app/
│   ├── globals.css            # Minimalist monochrome color tokens & styles
│   ├── layout.tsx             # Root layout, theme provider, and SEO metadata
│   ├── page.tsx               # Home landing page assembling all sections
│   └── resume/
│       ├── page.tsx           # Dedicated resume route (/resume)
│       └── resume-client.tsx  # ATS structured resume view & download actions
├── components/
│   ├── helper/
│   │   ├── contact.dets.tsx   # Contact chip with 1-click clipboard copy
│   │   ├── contact.form.tsx   # Zod-validated contact form
│   │   ├── footer.tsx         # Minimalist footer with back-to-top button
│   │   ├── nav/
│   │   │   ├── nav_bar.tsx    # Sticky navbar with active scroll spy
│   │   │   └── mobile_nav.tsx # Mobile drawer navigation
│   │   ├── slider.tsx         # Certificate inspection slider
│   │   ├── theme_provider.tsx # next-themes wrapper
│   │   ├── theme_toggler.tsx  # Light/Dark mode switcher button
│   │   └── typewrite.tsx      # Dynamic role typewriter animation
│   └── home/
│       ├── about.tsx          # Bio, education timeline, and personal interests
│       ├── certifications.tsx # Achievements & verified credential cards
│       ├── contact.tsx        # Direct contact section & form
│       ├── hero.tsx           # Hero section with headline and action CTAs
│       ├── home.tsx           # Main homepage section coordinator
│       ├── projects.tsx       # Filterable full-stack projects grid
│       ├── resume-section.tsx # Resume section with "View in Browser" link
│       └── skills.tsx         # 6-category technical competencies matrix
├── constants/
│   ├── aboutSec.ts            # Bio, education history, and hobbies data
│   ├── certifications.ts      # Certifications, research paper, and credentials
│   ├── navlinks.ts            # Navigation bar route definitions
│   ├── projects.ts            # Project details, descriptions, and tech stacks
│   └── skills.ts              # Categorized skills list and proficiency levels
├── lib/
│   └── actions/
│       └── send.email.ts      # Server action for sending contact form emails
├── public/
│   ├── images/                # Certificate images and assets
│   └── resume.pdf             # Downloadable resume PDF
├── package.json
├── tsconfig.json
└── README.md
```

---

## 🚀 Getting Started Locally

### 1. Prerequisites
- [Node.js](https://nodejs.org/) (version 18.17 or higher recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) / [pnpm](https://pnpm.io/)

### 2. Clone the Repository
```bash
git clone https://github.com/Jaypatil1327/Portfolio.git
cd Portfolio
```

### 3. Install Dependencies
```bash
npm install
```

### 4. Configure Environment Variables (Optional for Email)
Create a `.env.local` file in the root directory:
```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-specific-password
RECEIVER_EMAIL=jaypatil135790@gmail.com
```

### 5. Run the Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to explore the portfolio.

---

## 📦 Build for Production

To create an optimized production build:

```bash
npm run build
npm run start
```

---

## 👤 About Jayesh Patil

- **Degree**: B.Tech in Computer Science & Engineering (Specialization in AI & Machine Learning)
- **University**: VIT Bhopal University (2023 – 2027)
- **LeetCode**: [512+ Solved Problems](https://leetcode.com)
- **GitHub**: [@Jaypatil1327](https://github.com/Jaypatil1327)
- **Email**: [jaypatil135790@gmail.com](mailto:jaypatil135790@gmail.com)
- **Location**: Nandurbar, Maharashtra 425312, India

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
