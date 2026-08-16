"use client";

import { useState } from "react";
import { skillCategories } from "@/constants/skills";
import { Code2, Sparkles, Layers, Cpu, Database, Wrench, Binary } from "lucide-react";

const categoryTabs = [
  { id: "all", label: "All Skills", icon: Sparkles },
  { id: "languages", label: "Languages", icon: Binary },
  { id: "frontend", label: "Frontend", icon: Layers },
  { id: "backend", label: "Backend", icon: Cpu },
  { id: "databases", label: "Database & Cloud", icon: Database },
  { id: "tools", label: "Tools & Testing", icon: Wrench },
  { id: "core", label: "Core CS", icon: Code2 },
];

function Skills() {
  const [activeTab, setActiveTab] = useState("all");

  const categoriesToRender =
    activeTab === "all"
      ? Object.entries(skillCategories)
      : Object.entries(skillCategories).filter(([key]) => key === activeTab);

  return (
    <section
      id="skills"
      className="relative w-full py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-background"
    >
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Header */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-neutral-100 dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 border border-neutral-200 dark:border-neutral-800">
            <Cpu className="w-3.5 h-3.5 text-neutral-500" />
            <span>Technical Expertise</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
            Skills & Capabilities
          </h2>
          <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 max-w-lg mx-auto">
            A comprehensive overview of languages, frameworks, developer tools, and core computer science fundamentals
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center items-center gap-1.5 max-w-3xl mx-auto">
          {categoryTabs.map((tab) => {
            const IconComp = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 ${
                  isActive
                    ? "bg-black text-white dark:bg-white dark:text-black shadow-sm"
                    : "bg-neutral-100 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-800"
                }`}
              >
                <IconComp className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Skill Groups */}
        <div className="space-y-8">
          {categoriesToRender.map(([key, category]) => (
            <div key={key} className="space-y-3">
              <div className="flex items-center justify-between border-b border-neutral-200 dark:border-neutral-800 pb-2">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-neutral-900 dark:text-white flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-neutral-900 dark:bg-white" />
                    {category.title}
                  </h3>
                  <p className="text-[11px] text-neutral-500 dark:text-neutral-400">
                    {category.description}
                  </p>
                </div>
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-neutral-100 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 border border-neutral-200 dark:border-neutral-800">
                  {category.items.length} items
                </span>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                {category.items.map((skill, idx) => {
                  const SkillIcon = skill.icon;
                  return (
                    <div
                      key={idx}
                      className="group relative p-3 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-600 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex flex-col items-center justify-center text-center gap-1.5"
                    >
                      <div className="p-2.5 rounded-xl bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 group-hover:scale-110 transition-all duration-300">
                        <SkillIcon className="w-6 h-6 sm:w-7 sm:h-7" />
                      </div>

                      <span className="font-semibold text-xs text-neutral-800 dark:text-neutral-200">
                        {skill.name}
                      </span>

                      {skill.level && (
                        <span className="text-[9px] font-medium px-1.5 py-0.5 rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400">
                          {skill.level}
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
