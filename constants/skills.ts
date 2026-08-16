import {
  FaReact,
  FaPython,
  FaGitAlt,
  FaAws,
  FaJs,
  FaNode,
  FaJava,
  FaBootstrap,
  FaDatabase,
  FaCubes,
  FaDesktop,
  FaProjectDiagram,
  FaServer,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiPostman,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiTailwindcss,
  SiNestjs,
  SiGraphql,
  SiFirebase,
  SiJest,
  SiKotlin,
  SiLeetcode,
} from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";

export interface SkillItem {
  name: string;
  icon: React.ComponentType<{ className?: string; size?: string | number }>;
  color?: string;
  level?: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  items: SkillItem[];
}

export const skillCategories: Record<string, SkillCategory> = {
  languages: {
    title: "Programming Languages",
    description:
      "Core languages used for problem solving and software development",
    items: [
      { name: "C++", icon: TbBrandCpp, level: "Advanced" },
      { name: "Python", icon: FaPython, level: "Proficient" },
      { name: "JavaScript", icon: FaJs, level: "Advanced" },
      { name: "TypeScript", icon: SiTypescript, level: "Advanced" },
      { name: "Java", icon: FaJava, level: "Intermediate" },
      { name: "Kotlin", icon: SiKotlin, level: "Intermediate" },
    ],
  },
  frontend: {
    title: "Frontend Development",
    description: "Modern UI/UX libraries, frameworks, and styling systems",
    items: [
      { name: "React.js", icon: FaReact, level: "Advanced" },
      { name: "Next.js", icon: SiNextdotjs, level: "Advanced" },
      { name: "Tailwind CSS", icon: SiTailwindcss, level: "Expert" },
      { name: "Shadcn / UI", icon: FaCubes, level: "Advanced" },
      { name: "Bootstrap", icon: FaBootstrap, level: "Proficient" },
    ],
  },
  backend: {
    title: "Backend & APIs",
    description: "Scalable server architectures, microservices, and API design",
    items: [
      { name: "Node.js", icon: FaNode, level: "Advanced" },
      { name: "Express.js", icon: SiExpress, level: "Advanced" },
      { name: "Nest.js", icon: SiNestjs, level: "Intermediate" },
      { name: "REST APIs", icon: FaServer, level: "Expert" },
      { name: "GraphQL", icon: SiGraphql, level: "Intermediate" },
    ],
  },
  databases: {
    title: "Databases & Cloud",
    description: "Relational, NoSQL databases and cloud services",
    items: [
      { name: "PostgreSQL", icon: SiPostgresql, level: "Proficient" },
      { name: "MongoDB", icon: SiMongodb, level: "Advanced" },
      { name: "Firebase", icon: SiFirebase, level: "Advanced" },
      { name: "AWS", icon: FaAws, level: "Intermediate" },
      { name: "SQL", icon: FaDatabase, level: "Advanced" },
    ],
  },
  tools: {
    title: "Tools & Testing",
    description: "Version control, automated testing, and developer workflows",
    items: [
      { name: "Postman", icon: SiPostman, level: "Advanced" },
      { name: "Jest", icon: SiJest, level: "Intermediate" },
      { name: "Git & GitHub", icon: FaGitAlt, level: "Advanced" },
    ],
  },
  core: {
    title: "Core CS Fundamentals",
    description:
      "Foundation in computational theory, architecture, and systems",
    items: [
      {
        name: "Data Structures & Algorithms",
        icon: SiLeetcode,
        level: "512+ Solved",
      },
      { name: "OOPs", icon: FaCubes, level: "Advanced" },
      { name: "DBMS", icon: FaDatabase, level: "Advanced" },
      { name: "Operating Systems", icon: FaDesktop, level: "Proficient" },
      {
        name: "Computer Networks",
        icon: FaProjectDiagram,
        level: "Proficient",
      },
    ],
  },
};
