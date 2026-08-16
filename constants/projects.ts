export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  category: "Full Stack" | "Next.js" | "Auth & Security" | "Frontend & Tools";
  techStack: string[];
  features: string[];
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
  gradient: string;
  accentColor: string;
}

export const projectsData: Project[] = [
  {
    id: "stack-board",
    title: "Stack-Board",
    subtitle: "Full-Stack Agile Scrum Board with Drag-and-Drop",
    description:
      "A modern full-stack Scrum management board featuring JWT authentication, customizable sprint workflows, and dynamic drag-and-drop task tracking.",
    longDescription:
      "Developed a full-stack Scrum board application with JWT authentication and drag-and-drop functionality using the MERN stack (MongoDB, Express, React, Node.js), Mongoose, and Shadcn/ui. Provides interactive project boards, task prioritization, status transitions, and seamless user collaboration.",
    category: "Full Stack",
    techStack: ["MongoDB", "Express.js", "React.js", "Node.js", "Mongoose", "Shadcn/ui", "JWT", "Tailwind CSS"],
    features: [
      "Secure JWT-based authentication & user session management",
      "Interactive Drag-and-Drop Kanban columns (To Do, In Progress, Review, Done)",
      "Dynamic task creation, assignment, priority tags, and deadline tracking",
      "Clean, modern UI designed with Shadcn/ui components and smooth animations",
    ],
    githubUrl: "https://github.com/Jaypatil1327",
    liveUrl: "https://github.com/Jaypatil1327",
    featured: true,
    gradient: "from-neutral-400 to-neutral-600 dark:from-neutral-700 dark:to-neutral-500",
    accentColor: "border-neutral-300 text-neutral-900 dark:text-neutral-100",
  },
  {
    id: "skillsphere",
    title: "SkillSphere",
    subtitle: "Next.js E-Learning Marketplace & Creator Studio",
    description:
      "Full-stack course publishing & learning platform with Razorpay checkout, BetterAuth authentication, and protected interactive student dashboards.",
    longDescription:
      "Developed a full-stack course platform using Next.js where creators can publish courses and users can purchase and access content. Integrated Razorpay payments, BetterAuth authentication, and protected user dashboards with video streaming and progress tracking.",
    category: "Next.js",
    techStack: ["Next.js", "React.js", "TypeScript", "Razorpay", "BetterAuth", "Node.js", "Tailwind CSS"],
    features: [
      "Creator studio for curriculum management, video uploads, and pricing setup",
      "Seamless payment gateway integration using Razorpay with instant order confirmation",
      "Role-based authentication & protected route guards via BetterAuth",
      "Interactive student dashboard with learning progress, course resume, and certificate generation",
    ],
    githubUrl: "https://github.com/Jaypatil1327",
    liveUrl: "https://github.com/Jaypatil1327",
    featured: true,
    gradient: "from-neutral-400 to-neutral-600 dark:from-neutral-700 dark:to-neutral-500",
    accentColor: "border-neutral-300 text-neutral-900 dark:text-neutral-100",
  },
  {
    id: "secure-user-auth",
    title: "Secure User Auth System",
    subtitle: "Production-Grade Authentication with Firebase",
    description:
      "A complete full-stack Firebase Authentication application with state-based route guards, secure registration, email verification, and password reset.",
    longDescription:
      "Developed a full-stack web application with a complete Firebase Authentication system, implementing secure user registration, login, logout, and password reset functionality, and protecting routes based on user state.",
    category: "Auth & Security",
    techStack: ["React.js", "Firebase Auth", "Tailwind CSS", "JavaScript", "Context API"],
    features: [
      "Multi-method authentication (Email/Password, Google OAuth)",
      "Secure password reset workflows and verification email triggers",
      "State-based protected route wrappers preventing unauthorized navigation",
      "Real-time session persistence and friendly error feedback banners",
    ],
    githubUrl: "https://github.com/Jaypatil1327",
    liveUrl: "https://github.com/Jaypatil1327",
    featured: false,
    gradient: "from-neutral-400 to-neutral-600 dark:from-neutral-700 dark:to-neutral-500",
    accentColor: "border-neutral-300 text-neutral-900 dark:text-neutral-100",
  },
  {
    id: "attendance-tracker",
    title: "Attendance Tracker",
    subtitle: "Interactive Student Attendance & Percentage Visualizer",
    description:
      "An intuitive attendance monitoring tool calculating real-time presence percentage with a color-coded threshold alert system.",
    longDescription:
      "Designed and built an interactive attendance tracker that records class presence, calculates percentage, and visually indicates status using a color-coded alert system, developed with JavaScript, HTML, and Tailwind CSS.",
    category: "Frontend & Tools",
    techStack: ["JavaScript (ES6+)", "HTML5", "Tailwind CSS", "LocalStorage API"],
    features: [
      "Real-time attendance percentage calculator per subject & cumulative",
      "Color-coded visual status indicators (Green >= 75%, Yellow 65-74%, Red < 65%)",
      "Bunk/Attend predictor calculating classes needed to maintain criteria",
      "Instant offline data persistence using browser LocalStorage",
    ],
    githubUrl: "https://github.com/Jaypatil1327",
    liveUrl: "https://github.com/Jaypatil1327",
    featured: false,
    gradient: "from-neutral-400 to-neutral-600 dark:from-neutral-700 dark:to-neutral-500",
    accentColor: "border-neutral-300 text-neutral-900 dark:text-neutral-100",
  },
];
