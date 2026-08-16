"use client";

import { Download, FolderOpen, ArrowDown, Code2, GraduationCap, FileText } from "lucide-react";
import TypeWriter from "../helper/typewrite";
import Link from "next/link";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

function HeroSection() {
  return (
    <section
      id="home"
      className="relative w-full min-h-[90vh] flex flex-col items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-200/50 via-background to-background dark:from-neutral-900/60 dark:via-background dark:to-background"
    >
      <div className="max-w-3xl mx-auto flex flex-col items-center text-center gap-5">
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-neutral-300 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 px-3.5 py-1 text-xs font-medium text-neutral-800 dark:text-neutral-200 shadow-sm transition-all hover:scale-105">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neutral-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-neutral-900 dark:bg-neutral-100" />
          </span>
          <span>Available for Opportunities & Internships</span>
        </div>

        {/* Hero Title */}
        <h1 className="font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-tight text-neutral-900 dark:text-white leading-tight">
          Hi, I&apos;m Jayesh Patil
        </h1>

        {/* Animated Typewriter */}
        <TypeWriter />

        {/* Pitch / Bio */}
        <p className="text-xs sm:text-sm md:text-base text-neutral-600 dark:text-neutral-400 max-w-xl leading-relaxed">
          Computer Science undergrad at <span className="font-semibold text-neutral-900 dark:text-white">VIT Bhopal</span> specializing in <span className="font-semibold text-neutral-900 dark:text-white">AI & Machine Learning</span>. Passionate about building robust full-stack MERN & Next.js applications and solving complex algorithmic challenges with 512+ LeetCode problems solved.
        </p>

        {/* Quick Highlights / Mini Badges */}
        <div className="flex flex-wrap justify-center items-center gap-2 pt-0.5">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium bg-neutral-100 dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 border border-neutral-200 dark:border-neutral-800">
            <Code2 className="w-3.5 h-3.5 text-neutral-500" />
            <span>512+ LeetCode Solved</span>
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium bg-neutral-100 dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 border border-neutral-200 dark:border-neutral-800">
            <GraduationCap className="w-3.5 h-3.5 text-neutral-500" />
            <span>B.Tech CSE (AI & ML) &apos;27</span>
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium bg-neutral-100 dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 border border-neutral-200 dark:border-neutral-800">
            <FileText className="w-3.5 h-3.5 text-neutral-500" />
            <span>Published AI Research</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-3 pt-2 w-full sm:w-auto">
          {/* Open Projects Button */}
          <Link
            href="#projects"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm bg-black text-white dark:bg-white dark:text-black hover:bg-neutral-800 dark:hover:bg-neutral-200 shadow-sm transition-all"
          >
            <FolderOpen className="w-4 h-4" />
            <span>View Projects</span>
          </Link>

          {/* Download Resume Button */}
          <a
            href="/resume.pdf"
            download="Jayesh_Patil_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm bg-white dark:bg-neutral-900 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-900 dark:text-white border border-neutral-300 dark:border-neutral-700 shadow-sm transition-all group"
          >
            <Download className="w-4 h-4 text-neutral-500 group-hover:text-black dark:group-hover:text-white" />
            <span>Download Resume</span>
          </a>

          {/* Dedicated Resume Page Link */}
          <Link
            href="/resume"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl font-medium text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-all"
          >
            <span>View Resume</span>
            <span>→</span>
          </Link>
        </div>

        {/* Social Quick Bar */}
        <div className="flex items-center gap-2.5 pt-2 text-neutral-600 dark:text-neutral-400">
          <a
            href="https://github.com/Jaypatil1327"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="p-2 rounded-xl bg-neutral-100 dark:bg-neutral-900 hover:text-black dark:hover:text-white hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-all"
          >
            <FaGithub className="w-4 h-4" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="p-2 rounded-xl bg-neutral-100 dark:bg-neutral-900 hover:text-black dark:hover:text-white hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-all"
          >
            <FaLinkedinIn className="w-4 h-4" />
          </a>
          <a
            href="https://leetcode.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LeetCode"
            className="p-2 rounded-xl bg-neutral-100 dark:bg-neutral-900 hover:text-black dark:hover:text-white hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-all"
          >
            <SiLeetcode className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1 text-neutral-400 dark:text-neutral-500 text-[11px]">
        <Link href="#about" className="flex flex-col items-center gap-1 hover:text-black dark:hover:text-white transition-colors">
          <span>Scroll to explore</span>
          <ArrowDown className="w-3 h-3 animate-bounce" />
        </Link>
      </div>
    </section>
  );
}

export default HeroSection;
