import {
  BookHeart,
  BriefcaseBusiness,
  GraduationCap,
  MapPinned,
  Code2,
  Trophy,
  FileText,
  Sparkles,
} from "lucide-react";

export const info = {
  name: "Jayesh Patil",
  role: "Full-Stack Developer & AI/ML Undergrad",
  title: "Passionate Engineer building scalable, user-centric software solutions",

  description:
    "I am a Computer Science undergraduate at VIT Bhopal University specializing in Artificial Intelligence and Machine Learning. With strong expertise in Data Structures & Algorithms, full-stack MERN development, and core Computer Science fundamentals, I build robust, high-performance web applications and solve complex algorithmic problems. I love turning innovative ideas into scalable real-world digital products.",

  location: "Nandurbar, Maharashtra 425312, India",
  phone: "+91-7742481799",
  email: "jaypatil135790@gmail.com",

  props: [
    { val: "Nandurbar, Maharashtra, India", icon: MapPinned },
    { val: "Available for Full-time & Internships", icon: BriefcaseBusiness },
    { val: "B.Tech CSE (AI & ML) @ VIT Bhopal", icon: GraduationCap },
    { val: "512+ LeetCode Solved", icon: Code2 },
    { val: "Published AI Research Paper", icon: FileText },
    { val: "Cricket & Tech Enthusiast", icon: BookHeart },
  ],

  stats: [
    { label: "LeetCode Problems", value: "512+", icon: Code2, suffix: "Solved" },
    { label: "Full-Stack Projects", value: "4+", icon: Sparkles, suffix: "Built" },
    { label: "Certifications", value: "5+", icon: Trophy, suffix: "Earned" },
    { label: "Graduation Year", value: "2027", icon: GraduationCap, suffix: "VIT Bhopal" },
  ],

  education: [
    {
      institution: "VIT Bhopal University, Bhopal",
      degree: "B.Tech in Computer Science & Engineering",
      specialization: "Specialization in Artificial Intelligence and Machine Learning",
      period: "2023 - 2027",
      grade: "Pursuing",
      description:
        "Focusing on DSA, AI/ML systems, Web Technologies, Database Systems, Computer Networks, and Operating Systems.",
      current: true,
    },
    {
      institution: "SJMSM's Arts & Commerce Sr. & Jr. College, Khapar",
      degree: "Higher Secondary Certificate (HSC)",
      specialization: "Science Stream",
      period: "2021 - 2023",
      grade: "79.80%",
      description:
        "Completed Higher Secondary Education under Maharashtra State Board with strong foundation in Mathematics and Physics.",
      current: false,
    },
    {
      institution: "Chavara English Medium School, Shahada",
      degree: "Secondary School Certificate (SSC)",
      specialization: "General Science & Mathematics",
      period: "2021",
      grade: "67.40%",
      description:
        "Completed Secondary Education under Maharashtra State Board with active participation in science exhibitions.",
      current: false,
    },
  ],

  hobbies: [
    { name: "Playing Cricket", icon: "🏏" },
    { name: "Watching Films", icon: "🎬" },
    { name: "Tech & Industry Podcasts", icon: "🎙️" },
    { name: "Exploring AI Innovations", icon: "🤖" },
  ],
};
