"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Download,
  Copy,
  Check,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
} from "lucide-react";
import ThemeToggler from "@/components/helper/theme_toggler";
import { info } from "@/constants/aboutSec";
import { projectsData } from "@/constants/projects";

export default function ResumeClientView() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopy = (text: string, type: "email" | "phone") => {
    navigator.clipboard.writeText(text);
    if (type === "email") {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-neutral-50 dark:bg-black text-neutral-900 dark:text-white">
      {/* Top Navbar */}
      <header className="sticky top-0 z-40 w-full bg-white/90 dark:bg-black/90 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800 py-3 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto flex items-center justify-between gap-4">
          {/* Back Button */}
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-neutral-100 dark:bg-neutral-900 hover:bg-neutral-200 dark:hover:bg-neutral-800 text-xs font-semibold text-neutral-800 dark:text-neutral-200 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Portfolio</span>
          </Link>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            <a
              href="/resume.pdf"
              download="Jayesh_Patil_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-black text-white dark:bg-white dark:text-black hover:bg-neutral-800 dark:hover:bg-neutral-200 text-xs font-semibold shadow-sm transition-all"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>

            <ThemeToggler />
          </div>
        </div>
      </header>

      {/* Main ATS Resume Content */}
      <main className="flex-1 w-full max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
        <div className="w-full rounded-3xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-sm p-6 sm:p-10 space-y-6 animate-in fade-in">
          {/* Header / Contact Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-neutral-200 dark:border-neutral-800 gap-3">
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 dark:text-white">
                Jayesh Patil
              </h1>
              <p className="text-xs sm:text-sm font-semibold text-neutral-600 dark:text-neutral-400">
                Full-Stack MERN Developer • B.Tech CSE (AI & ML)
              </p>
            </div>

            {/* Contact Chips */}
            <div className="flex flex-wrap items-center gap-1.5 text-xs">
              <button
                onClick={() => handleCopy("+91-7742481799", "phone")}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700 text-[11px]"
              >
                <Phone className="w-3 h-3 text-neutral-500" />
                <span>+91-7742481799</span>
                {copiedPhone ? <Check className="w-3 h-3 text-emerald-500" /> : <Copy className="w-3 h-3 text-neutral-400" />}
              </button>

              <button
                onClick={() => handleCopy("jaypatil135790@gmail.com", "email")}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700 text-[11px]"
              >
                <Mail className="w-3 h-3 text-neutral-500" />
                <span>jaypatil135790@gmail.com</span>
                {copiedEmail ? <Check className="w-3 h-3 text-emerald-500" /> : <Copy className="w-3 h-3 text-neutral-400" />}
              </button>

              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700 text-[11px]">
                <MapPin className="w-3 h-3 text-neutral-500" />
                <span>Nandurbar 425312, Maharashtra</span>
              </span>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-1.5">
            <h2 className="text-xs font-bold uppercase tracking-widest text-neutral-900 dark:text-white flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-neutral-900 dark:bg-white" />
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
              Strong knowledge of Data Structures & Algorithms, full-stack MERN development, and core Computer Science fundamentals. Skilled in problem-solving and building efficient, scalable software applications with modern web and AI technologies.
            </p>
          </div>

          {/* Education */}
          <div className="space-y-2.5">
            <h2 className="text-xs font-bold uppercase tracking-widest text-neutral-900 dark:text-white flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-neutral-900 dark:bg-white" />
              Education
            </h2>

            <div className="space-y-2">
              {info.education.map((edu, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-800 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5"
                >
                  <div>
                    <h3 className="font-bold text-xs sm:text-sm text-neutral-900 dark:text-white">
                      {edu.institution}
                    </h3>
                    <p className="text-[11px] text-neutral-600 dark:text-neutral-400 font-medium">
                      {edu.degree} — <span className="text-neutral-500 dark:text-neutral-400">{edu.specialization}</span>
                    </p>
                  </div>
                  <div className="text-left sm:text-right shrink-0">
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-neutral-200 dark:bg-neutral-700 text-neutral-800 dark:text-neutral-200">
                      {edu.period}
                    </span>
                    <p className="text-[10px] text-neutral-500 dark:text-neutral-400 mt-0.5">
                      Score: <strong className="text-neutral-900 dark:text-white">{edu.grade}</strong>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-widest text-neutral-900 dark:text-white flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-neutral-900 dark:bg-white" />
              Skills & Technologies
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs">
              <div className="p-3 rounded-xl bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-800 space-y-0.5">
                <span className="font-bold text-neutral-900 dark:text-white text-[11px]">Languages:</span>
                <p className="text-neutral-600 dark:text-neutral-400 text-[11px]">Python, C++, JavaScript, TypeScript, Java, Kotlin</p>
              </div>

              <div className="p-3 rounded-xl bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-800 space-y-0.5">
                <span className="font-bold text-neutral-900 dark:text-white text-[11px]">Frontend:</span>
                <p className="text-neutral-600 dark:text-neutral-400 text-[11px]">React.js, Next.js, Tailwind CSS, Bootstrap, Shadcn/ui</p>
              </div>

              <div className="p-3 rounded-xl bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-800 space-y-0.5">
                <span className="font-bold text-neutral-900 dark:text-white text-[11px]">Backend:</span>
                <p className="text-neutral-600 dark:text-neutral-400 text-[11px]">Node.js, Express.js, Nest.js, REST APIs, GraphQL</p>
              </div>

              <div className="p-3 rounded-xl bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-800 space-y-0.5">
                <span className="font-bold text-neutral-900 dark:text-white text-[11px]">Databases & Cloud:</span>
                <p className="text-neutral-600 dark:text-neutral-400 text-[11px]">PostgreSQL, MongoDB, Firebase, AWS, SQL</p>
              </div>

              <div className="p-3 rounded-xl bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-800 space-y-0.5">
                <span className="font-bold text-neutral-900 dark:text-white text-[11px]">Tools & Testing:</span>
                <p className="text-neutral-600 dark:text-neutral-400 text-[11px]">Postman, Jest, Git & GitHub</p>
              </div>

              <div className="p-3 rounded-xl bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-800 space-y-0.5">
                <span className="font-bold text-neutral-900 dark:text-white text-[11px]">Core Concepts:</span>
                <p className="text-neutral-600 dark:text-neutral-400 text-[11px]">Data Structures & Algorithms (512+ LeetCode), OOPs, DBMS, OS, Computer Networks</p>
              </div>
            </div>
          </div>

          {/* Projects */}
          <div className="space-y-2.5">
            <h2 className="text-xs font-bold uppercase tracking-widest text-neutral-900 dark:text-white flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-neutral-900 dark:bg-white" />
              Key Projects
            </h2>

            <div className="space-y-2.5">
              {projectsData.map((proj) => (
                <div
                  key={proj.id}
                  className="p-3.5 rounded-xl bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-800 space-y-1"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h3 className="font-bold text-xs sm:text-sm text-neutral-900 dark:text-white">
                      {proj.title}
                    </h3>
                    <span className="text-[11px] text-neutral-500 dark:text-neutral-400 font-medium">
                      {proj.techStack.slice(0, 5).join(" • ")}
                    </span>
                  </div>
                  <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    {proj.longDescription}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-widest text-neutral-900 dark:text-white flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-neutral-900 dark:bg-white" />
              Achievements & Certifications
            </h2>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-neutral-700 dark:text-neutral-300">
              <li className="flex items-center gap-2 p-2 rounded-xl bg-neutral-50 dark:bg-neutral-800/40">
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 shrink-0" />
                <span><strong>LeetCode:</strong> Solved 512+ DSA problems</span>
              </li>
              <li className="flex items-center gap-2 p-2 rounded-xl bg-neutral-50 dark:bg-neutral-800/40">
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 shrink-0" />
                <span><strong>AI Research:</strong> Published paper in international journal</span>
              </li>
              <li className="flex items-center gap-2 p-2 rounded-xl bg-neutral-50 dark:bg-neutral-800/40">
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 shrink-0" />
                <span><strong>Coursera:</strong> Applied Machine Learning in Python</span>
              </li>
              <li className="flex items-center gap-2 p-2 rounded-xl bg-neutral-50 dark:bg-neutral-800/40">
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 shrink-0" />
                <span><strong>Udemy:</strong> Mastery Certificate in C++</span>
              </li>
              <li className="flex items-center gap-2 p-2 rounded-xl bg-neutral-50 dark:bg-neutral-800/40">
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 shrink-0" />
                <span><strong>Google:</strong> IT Support Professional Certificate</span>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
