export interface Certification {
  id: string;
  title: string;
  issuer: string;
  type: "Research" | "Milestone" | "Course" | "Professional";
  date?: string;
  badgeText: string;
  description: string;
  image: string;
  credentialUrl?: string;
  skills: string[];
  featured: boolean;
}

export const certificationsData: Certification[] = [
  {
    id: "ai-research",
    title: "AI Research Publication: Dental Appointment System",
    issuer: "International Journal",
    type: "Research",
    badgeText: "Published Paper",
    description:
      "Authored and published research on an intelligent automated dental appointment scheduling and triage system utilizing applied AI algorithms.",
    image: "/images/coursera2.jpeg",
    credentialUrl: "#",
    skills: ["Artificial Intelligence", "Machine Learning", "Healthcare Tech", "Research Methodologies"],
    featured: true,
  },
  {
    id: "leetcode-512",
    title: "512+ Solved Problems on LeetCode",
    issuer: "LeetCode",
    type: "Milestone",
    badgeText: "512+ Solved",
    description:
      "Consistent problem-solving track record across Data Structures & Algorithms including Dynamic Programming, Graphs, Trees, Arrays, and Strings.",
    image: "/images/dsa1.png",
    credentialUrl: "https://leetcode.com",
    skills: ["Data Structures", "Algorithms", "Dynamic Programming", "Graph Theory", "C++"],
    featured: true,
  },
  {
    id: "coursera-ml",
    title: "Applied Machine Learning in Python",
    issuer: "Coursera",
    type: "Course",
    badgeText: "Certified",
    description:
      "In-depth training on supervised/unsupervised machine learning, scikit-learn models, model evaluation, and predictive analytics using Python.",
    image: "/images/coursera2.jpeg",
    credentialUrl: "#",
    skills: ["Python", "Scikit-Learn", "Applied ML", "Data Modeling", "Supervised Learning"],
    featured: false,
  },
  {
    id: "udemy-cpp",
    title: "Mastering C++ Programming Certificate",
    issuer: "Udemy",
    type: "Course",
    badgeText: "Certified",
    description:
      "Comprehensive mastery of modern C++ standard library (STL), Object-Oriented Programming (OOP), memory management, and pointers.",
    image: "/images/udemy.jpg",
    credentialUrl: "#",
    skills: ["C++", "STL", "Object-Oriented Programming", "Memory Management"],
    featured: false,
  },
  {
    id: "google-it-support",
    title: "Google IT Support Professional Certificate",
    issuer: "Google",
    type: "Professional",
    badgeText: "Google Certified",
    description:
      "Foundational systems administration, networking fundamentals, OS architecture, computer security, and troubleshooting protocols.",
    image: "/images/google_it.png",
    credentialUrl: "#",
    skills: ["Networking Protocols", "Operating Systems", "System Administration", "Security"],
    featured: false,
  },
];
