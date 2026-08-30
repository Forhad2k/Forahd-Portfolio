"use client";

import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { site } from "@/data/site";

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="border-t border-line py-12">
      <div className="mx-auto flex max-w-content flex-col gap-8 px-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <span className="font-display text-2xl">{site.name}</span>
          <p className="mt-1 font-mono text-xs text-muted">{site.role}</p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={`mailto:${site.email}`}
            data-cursor=""
            className="flex h-10 w-10 items-center justify-center rounded-full border border-line transition-colors hover:border-signal"
            aria-label="Email"
          >
            <Mail size={15} />
          </a>
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor=""
            className="flex h-10 w-10 items-center justify-center rounded-full border border-line transition-colors hover:border-signal"
            aria-label="GitHub"
          >
            <Github size={15} />
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor=""
            className="flex h-10 w-10 items-center justify-center rounded-full border border-line transition-colors hover:border-signal"
            aria-label="LinkedIn"
          >
            <Linkedin size={15} />
          </a>
          <button
            onClick={scrollTop}
            data-cursor=""
            className="ml-2 flex h-10 w-10 items-center justify-center rounded-full border border-line transition-colors hover:border-signal"
            aria-label="Back to top"
          >
            <ArrowUp size={15} />
          </button>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-content px-6">
        <p className="font-mono text-[11px] text-muted">
          © 2026 {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
