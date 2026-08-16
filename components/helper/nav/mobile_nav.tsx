"use client";

import { navLinks } from "@/constants/navlinks";
import { Download, X, Mail, Phone } from "lucide-react";
import Link from "next/link";

type Props = {
  showNav: boolean;
  closeNav: () => void;
};

function MobileNav({ showNav, closeNav }: Props) {
  return (
    <div
      className={`fixed inset-0 z-[100] transition-opacity duration-300 ${
        showNav ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
    >
      {/* Backdrop overlay */}
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
        onClick={closeNav}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-[80%] max-w-xs bg-white dark:bg-neutral-950 border-l border-neutral-200 dark:border-neutral-800 text-neutral-900 dark:text-white shadow-2xl z-[101] flex flex-col justify-between p-5 transform transition-transform duration-300 ease-out ${
          showNav ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-neutral-200 dark:border-neutral-800">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-black text-white dark:bg-white dark:text-black flex items-center justify-center font-mono font-bold text-xs">
              JP
            </div>
            <span className="font-bold text-sm">Jayesh Patil</span>
          </div>
          <button
            onClick={closeNav}
            aria-label="Close menu"
            className="p-1.5 rounded-lg bg-neutral-100 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Nav Links */}
        <nav className="flex flex-col gap-1.5 my-auto">
          {navLinks.map((val, idx) => (
            <Link
              href={val.href}
              key={idx}
              onClick={closeNav}
              className="px-3.5 py-2 rounded-xl text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-all flex items-center justify-between"
            >
              <span>{val.name}</span>
              <span className="text-xs text-neutral-400">→</span>
            </Link>
          ))}
        </nav>

        {/* Footer actions in Drawer */}
        <div className="space-y-3 pt-3 border-t border-neutral-200 dark:border-neutral-800">
          <a
            href="/resume.pdf"
            download="Jayesh_Patil_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeNav}
            className="w-full flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-black text-white dark:bg-white dark:text-black font-semibold shadow-sm transition-all text-xs"
          >
            <Download className="w-3.5 h-3.5" />
            Download Resume (PDF)
          </a>

          <div className="text-[11px] text-neutral-500 dark:text-neutral-400 space-y-1">
            <div className="flex items-center gap-1.5 truncate">
              <Mail className="w-3 h-3 text-neutral-400" />
              <span>jaypatil135790@gmail.com</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Phone className="w-3 h-3 text-neutral-400" />
              <span>+91-7742481799</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileNav;
