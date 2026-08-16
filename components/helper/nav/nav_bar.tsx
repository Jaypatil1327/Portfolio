"use client";

import ThemeToggler from "../theme_toggler";
import { Download, Menu } from "lucide-react";
import { navLinks } from "@/constants/navlinks";
import Link from "next/link";
import { useEffect, useState } from "react";

function NavBar({ showNav }: { showNav: () => void }) {
  const [bgScroll, setBgScroll] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY >= 50) {
        setBgScroll(true);
      } else {
        setBgScroll(false);
      }

      const sections = navLinks.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(sections[i]);
        if (sectionEl && sectionEl.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        bgScroll
          ? "glass-panel bg-white/90 dark:bg-black/90 shadow-sm py-3 border-b border-neutral-200 dark:border-neutral-800"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo / Brand */}
        <Link
          href="#home"
          className="group flex items-center gap-2 font-bold text-base sm:text-lg tracking-tight transition-transform hover:opacity-80"
        >
          <div className="w-8 h-8 rounded-lg bg-black text-white dark:bg-white dark:text-black flex items-center justify-center font-mono font-bold text-xs shadow-sm">
            JP
          </div>
          <span className="text-neutral-900 dark:text-white font-bold">
            Jayesh Patil
          </span>
        </Link>

        {/* Desktop Navlinks */}
        <nav className="hidden lg:flex items-center gap-1 bg-neutral-100 dark:bg-neutral-900 px-2 py-1 rounded-full border border-neutral-200 dark:border-neutral-800">
          {navLinks.map((val, index) => {
            const isActive = activeSection === val.href.substring(1);
            return (
              <Link
                key={index}
                href={val.href}
                className={`relative px-3.5 py-1 rounded-full text-xs font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-black text-white dark:bg-white dark:text-black font-semibold shadow-sm"
                    : "text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white"
                }`}
              >
                {val.name}
              </Link>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-2.5">
          {/* Resume Download button */}
          <a
            href="/resume.pdf"
            download="Jayesh_Patil_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-full bg-black text-white dark:bg-white dark:text-black hover:bg-neutral-800 dark:hover:bg-neutral-200 shadow-sm transition-all"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Resume</span>
          </a>

          {/* Theme Toggler */}
          <ThemeToggler />

          {/* Mobile Menu Button */}
          <button
            onClick={showNav}
            aria-label="Open menu"
            className="lg:hidden p-1.5 rounded-lg bg-neutral-100 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-200 hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
}

export default NavBar;
