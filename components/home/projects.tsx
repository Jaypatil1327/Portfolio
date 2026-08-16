"use client";

import { useState } from "react";
import { projectsData, Project } from "@/constants/projects";
import {
  ExternalLink,
  CheckCircle,
  FolderGit2,
  X,
  ArrowRight,
  Code2,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";

const filterTabs = [
  "All",
  "Full Stack",
  "Next.js",
  "Auth & Security",
  "Frontend & Tools",
] as const;

function Projects() {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects =
    activeFilter === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === activeFilter);

  return (
    <section
      id="projects"
      className="relative w-full py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-neutral-50/70 dark:bg-neutral-950/60"
    >
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Header */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-neutral-100 dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 border border-neutral-200 dark:border-neutral-800">
            <FolderGit2 className="w-3.5 h-3.5 text-neutral-500" />
            <span>Featured Work</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
            Highlighted Projects
          </h2>
          <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 max-w-lg mx-auto">
            Full-stack web applications, authentication architectures, and interactive digital products built with modern stacks
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center items-center gap-1.5 max-w-2xl mx-auto">
          {filterTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveFilter(tab)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 ${
                activeFilter === tab
                  ? "bg-black text-white dark:bg-white dark:text-black shadow-sm"
                  : "bg-white dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-800"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative rounded-3xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between hover:-translate-y-0.5"
            >
              <div className="p-5 sm:p-6 space-y-4">
                {/* Header */}
                <div className="flex items-start justify-between gap-3">
                  <div className="space-y-0.5">
                    <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                      {project.category}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-white">
                      {project.title}
                    </h3>
                    <p className="text-xs font-medium text-neutral-500 dark:text-neutral-400">
                      {project.subtitle}
                    </p>
                  </div>

                  {project.featured && (
                    <span className="px-2 py-0.5 rounded-full text-[9px] font-semibold bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 border border-neutral-200 dark:border-neutral-700 whitespace-nowrap">
                      Featured
                    </span>
                  )}
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  {project.description}
                </p>

                {/* Key Features List */}
                <div className="space-y-1.5 pt-0.5">
                  {project.features.slice(0, 3).map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-1.5 text-xs text-neutral-600 dark:text-neutral-400">
                      <CheckCircle className="w-3.5 h-3.5 text-neutral-900 dark:text-white shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-1 pt-1">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons Footer */}
              <div className="p-4 sm:px-6 sm:py-3.5 bg-neutral-50 dark:bg-neutral-950/40 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-between gap-3">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="text-xs font-semibold text-neutral-800 dark:text-neutral-200 hover:underline flex items-center gap-1"
                >
                  <span>Architecture</span>
                  <ArrowRight className="w-3 h-3" />
                </button>

                <div className="flex items-center gap-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-lg bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-200 hover:text-black dark:hover:text-white border border-neutral-200 dark:border-neutral-700 shadow-sm transition-all text-xs flex items-center gap-1.5 font-medium px-2.5"
                  >
                    <FaGithub className="w-3.5 h-3.5" />
                    <span>Code</span>
                  </a>

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg bg-black text-white dark:bg-white dark:text-black hover:bg-neutral-800 dark:hover:bg-neutral-200 shadow-sm transition-all text-xs flex items-center gap-1 font-semibold px-2.5"
                    >
                      <ExternalLink className="w-3 h-3" />
                      <span>Explore</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Details Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="relative w-full max-w-xl bg-white dark:bg-neutral-900 rounded-3xl border border-neutral-200 dark:border-neutral-800 shadow-2xl p-5 sm:p-6 space-y-4 max-h-[90vh] overflow-y-auto">
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-1.5 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                  {selectedProject.category}
                </span>
                <h3 className="text-xl font-bold text-neutral-900 dark:text-white">
                  {selectedProject.title}
                </h3>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">
                  {selectedProject.subtitle}
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="text-xs font-bold text-neutral-900 dark:text-white flex items-center gap-1.5">
                  <Code2 className="w-3.5 h-3.5 text-neutral-500" />
                  <span>Overview & Architecture</span>
                </h4>
                <p className="text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  {selectedProject.longDescription}
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="text-xs font-bold text-neutral-900 dark:text-white">
                  Key Technical Capabilities
                </h4>
                <div className="space-y-1.5">
                  {selectedProject.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-neutral-600 dark:text-neutral-300">
                      <CheckCircle className="w-3.5 h-3.5 text-neutral-900 dark:text-white shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-1.5 pt-1">
                <h4 className="text-[10px] font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-1">
                  {selectedProject.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-0.5 rounded-md text-[11px] font-medium bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 border border-neutral-200 dark:border-neutral-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-end gap-2 pt-3 border-t border-neutral-100 dark:border-neutral-800">
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2 rounded-xl bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 text-neutral-800 dark:text-neutral-200 font-semibold text-xs flex items-center gap-1.5 transition-all"
                >
                  <FaGithub className="w-3.5 h-3.5" />
                  <span>Repository</span>
                </a>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-3.5 py-2 rounded-xl bg-black text-white dark:bg-white dark:text-black font-semibold text-xs transition-all"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;
