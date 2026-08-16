"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Download,
  FileText,
  Eye,
  Check,
  Copy,
  Mail,
  Phone,
  MapPin,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { info } from "@/constants/aboutSec";
import { projectsData } from "@/constants/projects";

function ResumeSection() {
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
    <section
      id="resume"
      className="relative w-full py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-neutral-50/70 dark:bg-neutral-950/60"
    >
      <div className="max-w-5xl mx-auto space-y-10">
        {/* Header */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-neutral-100 dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 border border-neutral-200 dark:border-neutral-800">
            <FileText className="w-3.5 h-3.5 text-neutral-500" />
            <span>Curriculum Vitae</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
            Resume & Credentials
          </h2>
          <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 max-w-lg mx-auto">
            Review my professional background, education, and technical competencies, or view the complete PDF in your browser
          </p>
        </div>

        {/* Action Header Card */}
        <div className="rounded-3xl bg-neutral-900 dark:bg-neutral-900 text-white p-5 sm:p-6 shadow-md border border-neutral-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/10 text-[11px] font-medium border border-white/10">
              <Sparkles className="w-3 h-3 text-neutral-300" />
              <span>Updated for 2026 Opportunities</span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold">Jayesh Patil - Resume.pdf</h3>
            <p className="text-xs text-neutral-400 max-w-md">
              Complete ATS-optimized resume covering full-stack MERN, AI & ML, DSA (512+ LeetCode), and research publications.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2">
            {/* View in Browser Button (Redirects to /resume page) */}
            <Link
              href="/resume"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white text-black font-bold text-xs shadow-sm hover:bg-neutral-200 transition-all cursor-pointer"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>View in Browser</span>
              <ArrowRight className="w-3 h-3" />
            </Link>

            {/* Direct Download Button */}
            <a
              href="/resume.pdf"
              download="Jayesh_Patil_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs border border-white/20 transition-all"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>
          </div>
        </div>

        {/* Interactive Resume Sheet Container */}
        <div className="rounded-3xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-sm p-5 sm:p-7 space-y-5">
          {/* Top Contact Bar */}
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-3 border-b border-neutral-200 dark:border-neutral-800 gap-3">
            <div>
              <h3 className="text-lg sm:text-xl font-extrabold text-neutral-900 dark:text-white">
                Jayesh Patil
              </h3>
              <p className="text-xs font-semibold text-neutral-600 dark:text-neutral-400">
                Full-Stack MERN Developer • B.Tech CSE (AI & ML)
              </p>
            </div>

            {/* Contact Chips with Copy Button */}
            <div className="flex flex-wrap items-center gap-1.5 text-xs">
              <button
                onClick={() => handleCopy("+91-7742481799", "phone")}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700 transition-colors text-[11px]"
              >
                <Phone className="w-3 h-3 text-neutral-500" />
                <span>+91-7742481799</span>
                {copiedPhone ? <Check className="w-3 h-3 text-emerald-500" /> : <Copy className="w-3 h-3 text-neutral-400" />}
              </button>

              <button
                onClick={() => handleCopy("jaypatil135790@gmail.com", "email")}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700 transition-colors text-[11px]"
              >
                <Mail className="w-3 h-3 text-neutral-500" />
                <span>jaypatil135790@gmail.com</span>
                {copiedEmail ? <Check className="w-3 h-3 text-emerald-500" /> : <Copy className="w-3 h-3 text-neutral-400" />}
              </button>

              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700 text-[11px]">
                <MapPin className="w-3 h-3 text-neutral-500" />
                <span>Nandurbar 425312, MH</span>
              </span>
            </div>
          </div>

          {/* Section: Professional Summary */}
          <div className="space-y-1">
            <h4 className="text-[11px] font-bold uppercase tracking-widest text-neutral-900 dark:text-white flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-neutral-900 dark:bg-white" />
              Professional Summary
            </h4>
            <p className="text-xs text-neutral-700 dark:text-neutral-300 leading-relaxed">
              Strong knowledge of Data Structures & Algorithms, full-stack MERN development, and core Computer Science fundamentals. Skilled in problem-solving and building efficient, scalable software applications with modern web and AI technologies.
            </p>
          </div>

          {/* Section: Education */}
          <div className="space-y-2">
            <h4 className="text-[11px] font-bold uppercase tracking-widest text-neutral-900 dark:text-white flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-neutral-900 dark:bg-white" />
              Education
            </h4>

            <div className="space-y-2">
              {info.education.map((edu, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-800 flex flex-col sm:flex-row sm:items-center justify-between gap-1"
                >
                  <div className="space-y-0.5">
                    <h5 className="font-bold text-xs sm:text-sm text-neutral-900 dark:text-white">
                      {edu.institution}
                    </h5>
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

          {/* Section: Technical Skills */}
          <div className="space-y-1.5">
            <h4 className="text-[11px] font-bold uppercase tracking-widest text-neutral-900 dark:text-white flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-neutral-900 dark:bg-white" />
              Skills & Technologies
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs">
              <div className="p-2.5 rounded-xl bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-800 space-y-0.5">
                <span className="font-bold text-neutral-900 dark:text-white text-[11px]">Languages:</span>
                <p className="text-neutral-600 dark:text-neutral-400 text-[11px]">Python, C++, JavaScript, TypeScript, Java, Kotlin</p>
              </div>

              <div className="p-2.5 rounded-xl bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-800 space-y-0.5">
                <span className="font-bold text-neutral-900 dark:text-white text-[11px]">Frontend:</span>
                <p className="text-neutral-600 dark:text-neutral-400 text-[11px]">React.js, Next.js, Tailwind CSS, Bootstrap, Shadcn/ui</p>
              </div>

              <div className="p-2.5 rounded-xl bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-800 space-y-0.5">
                <span className="font-bold text-neutral-900 dark:text-white text-[11px]">Backend:</span>
                <p className="text-neutral-600 dark:text-neutral-400 text-[11px]">Node.js, Express.js, Nest.js, REST APIs, GraphQL</p>
              </div>

              <div className="p-2.5 rounded-xl bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-800 space-y-0.5">
                <span className="font-bold text-neutral-900 dark:text-white text-[11px]">Databases & Cloud:</span>
                <p className="text-neutral-600 dark:text-neutral-400 text-[11px]">PostgreSQL, MongoDB, Firebase, AWS, SQL</p>
              </div>

              <div className="p-2.5 rounded-xl bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-800 space-y-0.5">
                <span className="font-bold text-neutral-900 dark:text-white text-[11px]">Tools & Testing:</span>
                <p className="text-neutral-600 dark:text-neutral-400 text-[11px]">Postman, Jest, Git & GitHub</p>
              </div>

              <div className="p-2.5 rounded-xl bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-800 space-y-0.5">
                <span className="font-bold text-neutral-900 dark:text-white text-[11px]">Core Concepts:</span>
                <p className="text-neutral-600 dark:text-neutral-400 text-[11px]">Data Structures & Algorithms (512+ LeetCode), OOPs, DBMS, OS, Computer Networks</p>
              </div>
            </div>
          </div>

          {/* Section: Projects */}
          <div className="space-y-2">
            <h4 className="text-[11px] font-bold uppercase tracking-widest text-neutral-900 dark:text-white flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-neutral-900 dark:bg-white" />
              Key Projects
            </h4>

            <div className="space-y-2">
              {projectsData.map((proj) => (
                <div
                  key={proj.id}
                  className="p-3 rounded-xl bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-800 space-y-1"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h5 className="font-bold text-xs text-neutral-900 dark:text-white">
                      {proj.title}
                    </h5>
                    <span className="text-[10px] text-neutral-500 dark:text-neutral-400 font-medium">
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

          {/* Section: Achievements & Certifications */}
          <div className="space-y-1.5">
            <h4 className="text-[11px] font-bold uppercase tracking-widest text-neutral-900 dark:text-white flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-neutral-900 dark:bg-white" />
              Achievements & Certifications
            </h4>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-neutral-700 dark:text-neutral-300">
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
      </div>
    </section>
  );
}

export default ResumeSection;
