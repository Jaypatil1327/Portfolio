"use client";

import { useState } from "react";
import Image from "next/image";
import { Trophy, Sparkles, ExternalLink, Award, Eye, X } from "lucide-react";
import { certificationsData, Certification } from "@/constants/certifications";

const filterTabs = [
  { id: "all", label: "All Credentials" },
  { id: "featured", label: "Key Highlights" },
  { id: "courses", label: "Certifications" },
];

function Certifications() {
  const [activeTab, setActiveTab] = useState("all");
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  const filteredCerts =
    activeTab === "all"
      ? certificationsData
      : activeTab === "featured"
      ? certificationsData.filter((c) => c.featured)
      : certificationsData.filter((c) => c.type === "Course" || c.type === "Professional");

  return (
    <section
      id="certifications"
      className="relative w-full py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-background"
    >
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Header */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-neutral-100 dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 border border-neutral-200 dark:border-neutral-800">
            <Trophy className="w-3.5 h-3.5 text-neutral-500" />
            <span>Honors & Certifications</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
            Achievements & Certifications
          </h2>
          <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 max-w-lg mx-auto">
            Peer-reviewed research publication, problem-solving milestones, and verified industry credentials
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center items-center gap-1.5 max-w-md mx-auto">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 ${
                activeTab === tab.id
                  ? "bg-black text-white dark:bg-white dark:text-black shadow-sm"
                  : "bg-neutral-100 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-800"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Certificates & Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredCerts.map((cert) => (
            <div
              key={cert.id}
              className={`group relative rounded-3xl bg-white dark:bg-neutral-900 border overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between hover:-translate-y-0.5 ${
                cert.featured
                  ? "border-neutral-900 dark:border-neutral-100"
                  : "border-neutral-200 dark:border-neutral-800"
              }`}
            >
              <div>
                {/* Certificate Image Frame in Natural Full Color */}
                <div
                  onClick={() => setSelectedCert(cert)}
                  className="relative w-full h-44 sm:h-52 bg-neutral-50 dark:bg-neutral-950 flex items-center justify-center overflow-hidden cursor-pointer border-b border-neutral-200 dark:border-neutral-800"
                >
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    fill
                    className="object-contain p-2.5 group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Hover Inspect Overlay */}
                  <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-1.5 text-white">
                    <Eye className="w-4 h-4" />
                    <span className="text-xs font-semibold">Inspect Certificate</span>
                  </div>

                  {/* Top Badge */}
                  <div className="absolute top-3 right-3">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-white/95 dark:bg-black/90 text-neutral-900 dark:text-white border border-neutral-300 dark:border-neutral-700 shadow-sm backdrop-blur-md">
                      {cert.badgeText}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-5 space-y-2.5">
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-1.5 text-[11px] font-semibold text-neutral-500 dark:text-neutral-400">
                      <Award className="w-3.5 h-3.5" />
                      <span>{cert.issuer}</span>
                    </div>
                    <h3 className="text-sm sm:text-base font-bold text-neutral-900 dark:text-white line-clamp-2">
                      {cert.title}
                    </h3>
                  </div>

                  <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed line-clamp-3">
                    {cert.description}
                  </p>

                  {/* Skills tags */}
                  <div className="flex flex-wrap gap-1 pt-1">
                    {cert.skills.slice(0, 3).map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded-md text-[10px] font-medium bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="p-3.5 sm:px-5 sm:py-3 bg-neutral-50 dark:bg-neutral-950/50 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-between gap-2">
                <button
                  onClick={() => setSelectedCert(cert)}
                  className="text-xs font-semibold text-neutral-800 dark:text-neutral-200 hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>View Details</span>
                </button>

                <span className="text-[11px] text-neutral-500 dark:text-neutral-400 font-medium">
                  Verified ✓
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fullscreen Certificate Inspection Modal */}
      {selectedCert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="relative max-w-3xl w-full bg-white dark:bg-neutral-900 rounded-3xl border border-neutral-200 dark:border-neutral-800 shadow-2xl p-5 sm:p-6 space-y-4 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-3 border-b border-neutral-200 dark:border-neutral-800">
              <div className="space-y-0.5">
                <span className="text-[11px] font-semibold text-neutral-500 dark:text-neutral-400">
                  {selectedCert.issuer} • {selectedCert.badgeText}
                </span>
                <h3 className="text-base sm:text-lg font-bold text-neutral-900 dark:text-white">
                  {selectedCert.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedCert(null)}
                className="p-1.5 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Certificate Preview Image in Natural Color */}
            <div className="relative w-full h-64 sm:h-80 bg-neutral-50 dark:bg-neutral-950 rounded-2xl overflow-hidden flex items-center justify-center border border-neutral-200 dark:border-neutral-800">
              <Image
                src={selectedCert.image}
                alt={selectedCert.title}
                fill
                className="object-contain p-3"
              />
            </div>

            {/* Description & Competencies */}
            <div className="space-y-2 text-xs">
              <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                {selectedCert.description}
              </p>

              <div className="flex flex-wrap gap-1 pt-1">
                {selectedCert.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-0.5 rounded-md text-[11px] font-medium bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 border border-neutral-200 dark:border-neutral-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Modal Actions */}
            <div className="flex items-center justify-end gap-2 pt-2 border-t border-neutral-100 dark:border-neutral-800">
              {selectedCert.credentialUrl && selectedCert.credentialUrl !== "#" && (
                <a
                  href={selectedCert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2 rounded-xl bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 text-neutral-800 dark:text-neutral-200 font-semibold text-xs flex items-center gap-1.5 transition-all"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Verify Online</span>
                </a>
              )}
              <button
                onClick={() => setSelectedCert(null)}
                className="px-4 py-2 rounded-xl bg-black text-white dark:bg-white dark:text-black font-semibold text-xs transition-all cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Certifications;
