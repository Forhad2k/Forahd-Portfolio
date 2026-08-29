"use client";

import { useState, type FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from "framer-motion";
import { Check, AlertCircle, Send, Loader2, Mail, Github, Linkedin, Copy } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import MagneticButton from "@/components/ui/MagneticButton";
import { site } from "@/data/site";
import { emailjsConfig, emailjsConfigured } from "@/lib/emailjs";

type Status = "idle" | "sending" | "success" | "error";

interface FormState {
  name: string;
  email: string;
  message: string;
}

const initialForm: FormState = { name: "", email: "", message: "" };

function validate(form: FormState) {
  const errors: Partial<FormState> = {};
  if (!form.name.trim()) errors.name = "Your name is required";
  if (!form.email.trim()) {
    errors.email = "Your email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = "Enter a valid email address";
  }
  if (!form.message.trim() || form.message.trim().length < 10) {
    errors.message = "Message should be at least 10 characters";
  }
  return errors;
}

export default function Contact() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [status, setStatus] = useState<Status>("idle");
  const [copied, setCopied] = useState(false);

  const handleChange = (field: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [field]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const validation = validate(form);
    setErrors(validation);
    if (Object.keys(validation).length > 0) return;

    setStatus("sending");
    try {
      if (!emailjsConfigured) {
        throw new Error("EmailJS is not configured yet");
      }
      await emailjs.send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        { publicKey: emailjsConfig.publicKey }
      );
      setStatus("success");
      setForm(initialForm);
      setTimeout(() => setStatus("idle"), 5000);
    } catch (err) {
      console.error(err);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  const copyEmail = async () => {
    await navigator.clipboard.writeText(site.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="border-t border-line py-28 md:py-36">
      <div className="mx-auto max-w-content px-6">
        <SectionHeading
          index="06"
          label="Contact"
          heading="Have a project in mind?"
          description="Let's build something useful, fast and scalable."
        />

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <div className="space-y-8">
              <button
                onClick={copyEmail}
                data-cursor=""
                className="group flex items-center gap-3 font-mono text-sm text-muted transition-colors hover:text-ink"
              >
                <Mail size={16} className="text-signal" />
                {site.email}
                <span className="relative flex h-4 w-4 items-center justify-center">
                  <AnimatePresence mode="wait">
                    {copied ? (
                      <motion.span
                        key="check"
                        initial={{ opacity: 0, scale: 0.6 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.6 }}
                      >
                        <Check size={14} className="text-emerald-500" />
                      </motion.span>
                    ) : (
                      <motion.span
                        key="copy"
                        initial={{ opacity: 0, scale: 0.6 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.6 }}
                      >
                        <Copy size={13} className="opacity-0 transition-opacity group-hover:opacity-70" />
                      </motion.span>
                    )}
                  </AnimatePresence>
                </span>
              </button>

              <div className="flex gap-3">
                <a
                  href={site.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor=""
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-line transition-colors hover:border-signal"
                  aria-label="GitHub"
                >
                  <Github size={17} />
                </a>
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor=""
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-line transition-colors hover:border-signal"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={17} />
                </a>
              </div>

              <p className="max-w-xs text-sm leading-relaxed text-muted">
                Based in {site.location}. Open to freelance projects and remote roles —
                usually replies within a day.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              <div>
                <label htmlFor="name" className="font-mono text-[11px] uppercase tracking-wide text-muted">
                  Name
                </label>
                <input
                  id="name"
                  value={form.name}
                  onChange={handleChange("name")}
                  className="mt-2 w-full border-b border-line bg-transparent py-3 text-lg outline-none transition-colors focus:border-signal"
                  placeholder="Your name"
                  aria-invalid={!!errors.name}
                />
                {errors.name && (
                  <p className="mt-1.5 text-xs text-red-500">{errors.name}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="font-mono text-[11px] uppercase tracking-wide text-muted">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange("email")}
                  className="mt-2 w-full border-b border-line bg-transparent py-3 text-lg outline-none transition-colors focus:border-signal"
                  placeholder="you@email.com"
                  aria-invalid={!!errors.email}
                />
                {errors.email && (
                  <p className="mt-1.5 text-xs text-red-500">{errors.email}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="font-mono text-[11px] uppercase tracking-wide text-muted">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={form.message}
                  onChange={handleChange("message")}
                  className="mt-2 w-full resize-none border-b border-line bg-transparent py-3 text-lg outline-none transition-colors focus:border-signal"
                  placeholder="Tell me about your project"
                  aria-invalid={!!errors.message}
                />
                {errors.message && (
                  <p className="mt-1.5 text-xs text-red-500">{errors.message}</p>
                )}
              </div>

              <div className="flex items-center gap-4 pt-2">
                <MagneticButton
                  type="submit"
                  cursorLabel="SEND"
                  disabled={status === "sending"}
                  className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 font-mono text-[12px] uppercase tracking-[0.1em] text-canvas disabled:opacity-60"
                >
                  {status === "sending" ? (
                    <>
                      <Loader2 size={14} className="animate-spin" /> Sending
                    </>
                  ) : (
                    <>
                      Send Message <Send size={13} />
                    </>
                  )}
                </MagneticButton>

                <AnimatePresence mode="wait">
                  {status === "success" && (
                    <motion.span
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-1.5 font-mono text-xs text-emerald-500"
                    >
                      <Check size={14} /> Message sent
                    </motion.span>
                  )}
                  {status === "error" && (
                    <motion.span
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-1.5 font-mono text-xs text-red-500"
                    >
                      <AlertCircle size={14} />
                      {emailjsConfigured ? "Couldn't send — try again" : "Email isn't set up yet"}
                    </motion.span>
                  )}
                </AnimatePresence>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
