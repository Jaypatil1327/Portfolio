"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { sendMail } from "@/lib/actions/send.email";
import { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(50, "Name is too long"),
  subject: z.string().min(2, "Subject is required").max(100, "Subject is too long"),
  email: z.string().email("Please enter a valid email address"),
  description: z.string().min(5, "Message must be at least 5 characters").max(1500, "Message is too long"),
});

type FormValues = z.infer<typeof formSchema>;

function Form() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      subject: "",
      email: "",
      description: "",
    },
  });

  async function onSubmit(data: FormValues) {
    setLoading(true);
    setStatus("idle");
    try {
      await sendMail(data);
      setStatus("success");
      form.reset();
    } catch (err) {
      console.error(err);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
      {status === "success" && (
        <div className="p-3.5 rounded-2xl bg-neutral-100 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-white flex items-center gap-2.5 text-xs animate-in fade-in">
          <CheckCircle2 className="w-4 h-4 shrink-0" />
          <span>Thank you! Your message has been sent successfully. I will get back to you shortly.</span>
        </div>
      )}

      {status === "error" && (
        <div className="p-3.5 rounded-2xl bg-neutral-100 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-white flex items-center gap-2.5 text-xs animate-in fade-in">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>Unable to send message right now. Please email me directly at jaypatil135790@gmail.com</span>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
        {/* Name */}
        <div className="space-y-1">
          <label htmlFor="name" className="text-xs font-medium text-neutral-700 dark:text-neutral-300">
            Your Name *
          </label>
          <input
            {...form.register("name")}
            id="name"
            placeholder="Jayesh Patil"
            className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-50 dark:bg-neutral-800/80 border border-neutral-200 dark:border-neutral-700 text-neutral-900 dark:text-white placeholder:text-neutral-400 focus:outline-none focus:ring-1 focus:ring-black dark:focus:ring-white text-xs transition-all"
          />
          {form.formState.errors.name && (
            <p className="text-[11px] text-neutral-500">{form.formState.errors.name.message}</p>
          )}
        </div>

        {/* Email */}
        <div className="space-y-1">
          <label htmlFor="email" className="text-xs font-medium text-neutral-700 dark:text-neutral-300">
            Email Address *
          </label>
          <input
            {...form.register("email")}
            id="email"
            type="email"
            placeholder="name@example.com"
            className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-50 dark:bg-neutral-800/80 border border-neutral-200 dark:border-neutral-700 text-neutral-900 dark:text-white placeholder:text-neutral-400 focus:outline-none focus:ring-1 focus:ring-black dark:focus:ring-white text-xs transition-all"
          />
          {form.formState.errors.email && (
            <p className="text-[11px] text-neutral-500">{form.formState.errors.email.message}</p>
          )}
        </div>
      </div>

      {/* Subject */}
      <div className="space-y-1">
        <label htmlFor="subject" className="text-xs font-medium text-neutral-700 dark:text-neutral-300">
          Subject *
        </label>
        <input
          {...form.register("subject")}
          id="subject"
          placeholder="Collaboration / Job Opportunity / Project Discussion"
          className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-50 dark:bg-neutral-800/80 border border-neutral-200 dark:border-neutral-700 text-neutral-900 dark:text-white placeholder:text-neutral-400 focus:outline-none focus:ring-1 focus:ring-black dark:focus:ring-white text-xs transition-all"
        />
        {form.formState.errors.subject && (
          <p className="text-[11px] text-neutral-500">{form.formState.errors.subject.message}</p>
        )}
      </div>

      {/* Message */}
      <div className="space-y-1">
        <label htmlFor="description" className="text-xs font-medium text-neutral-700 dark:text-neutral-300">
          Message *
        </label>
        <textarea
          {...form.register("description")}
          id="description"
          rows={4}
          placeholder="Hi Jayesh, I would love to discuss a developer opportunity with you..."
          className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-50 dark:bg-neutral-800/80 border border-neutral-200 dark:border-neutral-700 text-neutral-900 dark:text-white placeholder:text-neutral-400 focus:outline-none focus:ring-1 focus:ring-black dark:focus:ring-white text-xs transition-all resize-none"
        />
        {form.formState.errors.description && (
          <p className="text-[11px] text-neutral-500">{form.formState.errors.description.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold text-xs bg-black text-white dark:bg-white dark:text-black hover:bg-neutral-800 dark:hover:bg-neutral-200 shadow-sm disabled:opacity-50 transition-all cursor-pointer"
      >
        {loading ? (
          <>
            <Loader2 className="w-3.5 h-3.5 animate-spin" />
            <span>Sending Message...</span>
          </>
        ) : (
          <>
            <Send className="w-3.5 h-3.5" />
            <span>Send Message</span>
          </>
        )}
      </button>
    </form>
  );
}

export default Form;
