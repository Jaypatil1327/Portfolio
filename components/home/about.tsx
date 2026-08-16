"use client";

import { info } from "@/constants/aboutSec";
import { Download, GraduationCap, Calendar, Sparkles, User } from "lucide-react";
import Link from "next/link";

function About() {
  return (
    <section
      id="about"
      className="relative w-full py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-neutral-50/70 dark:bg-neutral-950/60"
    >
      <div className="max-w-5xl mx-auto space-y-10">
        {/* Section Header */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-neutral-100 dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 border border-neutral-200 dark:border-neutral-800">
            <User className="w-3.5 h-3.5 text-neutral-500" />
            <span>Discover My Journey</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
            About Me
          </h2>
          <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 max-w-lg mx-auto">
            Get to know the developer, problem solver, and AI enthusiast behind the code
          </p>
        </div>

        {/* Core Bio & Quick Details Card */}
        <div className="rounded-3xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-sm p-6 sm:p-8 space-y-6">
          <div className="space-y-3 max-w-3xl">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-neutral-900 dark:text-white leading-snug">
              {info.title}
            </h3>
            <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed text-xs sm:text-sm">
              {info.description}
            </p>
          </div>

          {/* Quick Info Chips */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5 pt-1">
            {info.props.map((val, idx) => {
              const IconComponent = val.icon;
              return (
                <div
                  key={idx}
                  className="flex items-center gap-2.5 p-2.5 rounded-xl bg-neutral-50 dark:bg-neutral-800/60 border border-neutral-200 dark:border-neutral-800 text-xs text-neutral-700 dark:text-neutral-300"
                >
                  <div className="p-1.5 rounded-lg bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 border border-neutral-200 dark:border-neutral-700 shrink-0">
                    <IconComponent className="w-3.5 h-3.5" />
                  </div>
                  <span className="font-medium truncate">{val.val}</span>
                </div>
              );
            })}
          </div>

          {/* Key Stats Counter Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
            {info.stats.map((stat, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-2xl bg-neutral-50 dark:bg-neutral-800/40 border border-neutral-200 dark:border-neutral-800 text-center transition-all"
              >
                <div className="text-lg sm:text-xl font-extrabold text-neutral-900 dark:text-white">
                  {stat.value}
                </div>
                <div className="text-[11px] font-semibold text-neutral-800 dark:text-neutral-200 mt-0.5">
                  {stat.label}
                </div>
                <div className="text-[10px] text-neutral-500 dark:text-neutral-400">
                  {stat.suffix}
                </div>
              </div>
            ))}
          </div>

          {/* Actions */}
          <div className="flex flex-wrap items-center gap-3 pt-2 border-t border-neutral-100 dark:border-neutral-800">
            <a
              href="/resume.pdf"
              download="Jayesh_Patil_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-black text-white dark:bg-white dark:text-black hover:bg-neutral-800 dark:hover:bg-neutral-200 shadow-sm transition-all"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Resume</span>
            </a>
            <Link
              href="#projects"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-800 dark:text-neutral-200 transition-all"
            >
              <span>View Portfolio Projects</span>
              <span>→</span>
            </Link>
          </div>
        </div>

        {/* Education Timeline */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white">
              <GraduationCap className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-neutral-900 dark:text-white">
                Education Timeline
              </h3>
              <p className="text-[11px] text-neutral-500 dark:text-neutral-400">
                Academic foundations and continuous specialization
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {info.education.map((edu, idx) => (
              <div
                key={idx}
                className={`relative rounded-2xl p-4 sm:p-5 transition-all duration-300 hover:-translate-y-1 bg-white dark:bg-neutral-900 border ${
                  edu.current
                    ? "border-neutral-900 dark:border-neutral-100 shadow-sm"
                    : "border-neutral-200 dark:border-neutral-800"
                }`}
              >
                {edu.current && (
                  <span className="absolute -top-2 right-3 px-2 py-0.5 rounded-full text-[9px] font-bold bg-black text-white dark:bg-white dark:text-black shadow-sm">
                    Current Focus
                  </span>
                )}

                <div className="flex items-center gap-1.5 text-[11px] font-semibold text-neutral-700 dark:text-neutral-300 mb-1.5">
                  <Calendar className="w-3 h-3 text-neutral-500" />
                  <span>{edu.period}</span>
                  <span className="px-1.5 py-0.5 rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 text-[10px]">
                    {edu.grade}
                  </span>
                </div>

                <h4 className="text-xs sm:text-sm font-bold text-neutral-900 dark:text-white line-clamp-2">
                  {edu.institution}
                </h4>

                <p className="text-[11px] font-semibold text-neutral-700 dark:text-neutral-300 mt-0.5">
                  {edu.degree}
                </p>

                <p className="text-[11px] text-neutral-500 dark:text-neutral-400 mt-0.5 italic">
                  {edu.specialization}
                </p>

                <p className="text-[11px] text-neutral-600 dark:text-neutral-400 mt-2 leading-relaxed">
                  {edu.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Hobbies & Interests */}
        <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h4 className="font-bold text-xs sm:text-sm text-neutral-900 dark:text-white">
                Hobbies & Personal Interests
              </h4>
              <p className="text-[11px] text-neutral-500 dark:text-neutral-400">
                Beyond coding and algorithmic problem solving
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-1.5">
            {info.hobbies.map((hobby, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700"
              >
                <span>{hobby.icon}</span>
                <span>{hobby.name}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
