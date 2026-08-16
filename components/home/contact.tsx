"use client";

import { Mail, MapPin, Phone, Download } from "lucide-react";
import ContactDetails from "../helper/contact.dets";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import Form from "../helper/contact.form";

export default function Contact_me() {
  return (
    <section
      id="contact"
      className="relative w-full py-12 md:py-18 px-4 sm:px-6 lg:px-8 bg-background"
    >
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-1.5">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-neutral-100 dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 border border-neutral-200 dark:border-neutral-800">
            <Mail className="w-3 h-3 text-neutral-500" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
            Let&apos;s Connect
          </h2>
          <p className="text-[11px] sm:text-xs text-neutral-600 dark:text-neutral-400 max-w-md mx-auto">
            Have a project in mind, an internship opportunity, or want to discuss AI & full-stack development?
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* LEFT: Info & Socials */}
          <div className="lg:col-span-5 space-y-4">
            <div className="space-y-1.5">
              <h3 className="text-sm sm:text-base font-bold text-neutral-900 dark:text-white leading-snug">
                Let&apos;s build something impactful together
              </h3>

              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-[11px] sm:text-xs">
                Whether you are looking for a full-stack engineer with strong Data Structures & Algorithms expertise or want to discuss machine learning applications, feel free to reach out directly.
              </p>
            </div>

            {/* CONTACT DETAILS WITH COPY */}
            <div className="space-y-2">
              <ContactDetails
                val={{
                  label: "Phone / WhatsApp",
                  value: "+91-7742481799",
                }}
                Icon={Phone}
              />

              <ContactDetails
                val={{
                  label: "Email Address",
                  value: "jaypatil135790@gmail.com",
                }}
                Icon={Mail}
              />

              <ContactDetails
                val={{
                  label: "Location",
                  value: "Nandurbar, Maharashtra 425312, India",
                }}
                Icon={MapPin}
                canCopy={false}
              />
            </div>

            {/* Resume Download Badge */}
            <div className="p-3 rounded-2xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 flex items-center justify-between gap-3">
              <div className="space-y-0.5">
                <p className="text-[11px] font-bold text-neutral-900 dark:text-white">Looking for my full resume?</p>
                <p className="text-[10px] text-neutral-500 dark:text-neutral-400">Download the PDF version directly</p>
              </div>
              <a
                href="/resume.pdf"
                download="Jayesh_Patil_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-2.5 py-1 rounded-xl text-[11px] font-semibold bg-black text-white dark:bg-white dark:text-black hover:bg-neutral-800 dark:hover:bg-neutral-200 shadow-sm flex items-center gap-1 shrink-0 transition-all"
              >
                <Download className="w-3 h-3" />
                <span>Download CV</span>
              </a>
            </div>

            {/* SOCIALS */}
            <div className="space-y-1">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                Connect on Social Networks
              </p>
              <div className="flex items-center gap-2">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="p-2 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all"
                >
                  <FaLinkedinIn className="w-3.5 h-3.5" />
                </a>

                <a
                  href="https://github.com/Jaypatil1327"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="p-2 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all"
                >
                  <FaGithub className="w-3.5 h-3.5" />
                </a>

                <a
                  href="https://leetcode.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LeetCode"
                  className="p-2 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all"
                >
                  <SiLeetcode className="w-3.5 h-3.5" />
                </a>

                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                  className="p-2 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all"
                >
                  <FaTwitter className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT: Contact Form Card */}
          <div className="lg:col-span-7 rounded-3xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 p-4 sm:p-5 shadow-sm">
            <div className="space-y-0.5 mb-3">
              <h3 className="text-sm sm:text-base font-bold text-neutral-900 dark:text-white">
                Send a Direct Message
              </h3>
              <p className="text-[11px] text-neutral-500 dark:text-neutral-400">
                I typically respond within 24 hours.
              </p>
            </div>
            <Form />
          </div>
        </div>
      </div>
    </section>
  );
}
