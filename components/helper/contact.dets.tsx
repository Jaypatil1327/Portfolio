"use client";

import { LucideIcon, Copy, Check } from "lucide-react";
import { useState } from "react";

type Props = {
  val: {
    label: string;
    value: string;
  };
  Icon: LucideIcon;
  canCopy?: boolean;
};

function ContactDetails({ val, Icon, canCopy = true }: Props) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    if (!canCopy) return;
    navigator.clipboard.writeText(val.value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex items-center justify-between p-3.5 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-600 transition-all group">
      <div className="flex items-center gap-3.5">
        <div className="p-2.5 rounded-xl bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white group-hover:scale-105 transition-transform">
          <Icon className="w-4 h-4" />
        </div>
        <div>
          <p className="text-[11px] font-medium text-neutral-500 dark:text-neutral-400">
            {val.label}
          </p>
          <p className="text-xs sm:text-sm font-semibold text-neutral-900 dark:text-white">
            {val.value}
          </p>
        </div>
      </div>

      {canCopy && (
        <button
          onClick={copyToClipboard}
          title={`Copy ${val.label}`}
          aria-label={`Copy ${val.label}`}
          className="p-1.5 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-500 hover:text-black dark:hover:text-white transition-colors"
        >
          {copied ? (
            <Check className="w-3.5 h-3.5 text-black dark:text-white" />
          ) : (
            <Copy className="w-3.5 h-3.5" />
          )}
        </button>
      )}
    </div>
  );
}

export default ContactDetails;
