"use client";

import { skills } from "@/constants/skills";
import { motion } from "framer-motion";

function Frontend() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Frontend</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
        {skills.frontend.map((val, idx) => (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1,
              delay: idx * 0.1,
            }}
            key={idx}
            className="h-28 border-2 border-slate-700/40 flex flex-col justify-center items-center rounded-2xl shadow-md hover:scale-105 transition-transform duration-300 bg-gray-50 dark:bg-indigo-950"
          >
            <val.icon size={"2em"} />

            <p className="mt-2 text-sm sm:text-base font-medium">{val.name}</p>
          </motion.div>
        ))}

        <div></div>
      </div>
    </div>
  );
}

export default Frontend;
