"use client";

import { ArrowUp, Download } from "lucide-react";
import Link from "next/link";
import { navLinks } from "@/constants/navlinks";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-white dark:bg-black border-t border-neutral-200 dark:border-neutral-800 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-5">
          {/* Brand */}
          <div className="space-y-1 text-center md:text-left">
            <Link
              href="#home"
              className="inline-flex items-center gap-2 font-bold text-base tracking-tight"
            >
              <div className="w-7 h-7 rounded-lg bg-black text-white dark:bg-white dark:text-black flex items-center justify-center text-xs font-mono font-bold">
                JP
              </div>
              <span className="text-neutral-900 dark:text-white">Jayesh Patil</span>
            </Link>
            <p className="text-[11px] text-neutral-500 dark:text-neutral-400">
              Full-Stack Developer • B.Tech CSE (AI & ML) @ VIT Bhopal
            </p>
          </div>

          {/* Nav links */}
          <div className="flex flex-wrap justify-center items-center gap-3 text-xs font-medium text-neutral-600 dark:text-neutral-400">
            {navLinks.map((link, idx) => (
              <Link
                key={idx}
                href={link.href}
                className="hover:text-black dark:hover:text-white transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2.5">
            <a
              href="/resume.pdf"
              download="Jayesh_Patil_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 rounded-full bg-black text-white dark:bg-white dark:text-black hover:bg-neutral-800 dark:hover:bg-neutral-200 text-xs font-semibold flex items-center gap-1.5 shadow-sm transition-all"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Resume PDF</span>
            </a>

            <button
              onClick={scrollToTop}
              aria-label="Back to Top"
              className="p-1.5 rounded-full bg-neutral-100 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-200 hover:text-black dark:hover:text-white border border-neutral-200 dark:border-neutral-800 shadow-sm transition-all"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-4 border-t border-neutral-200 dark:border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-2.5 text-[11px] text-neutral-500 dark:text-neutral-400">
          <p>© {new Date().getFullYear()} Jayesh Patil. All rights reserved.</p>
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/Jaypatil1327"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black dark:hover:text-white transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black dark:hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://leetcode.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black dark:hover:text-white transition-colors"
            >
              LeetCode
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
