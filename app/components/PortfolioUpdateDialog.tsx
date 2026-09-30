'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { FaArrowRight, FaTimes } from 'react-icons/fa';

const updateVersion = '2026-09-16';
const storageKey = `portfolio-update-seen:${updateVersion}`;

const highlights = [
  'New Discord Soundboard and AI Dungeon Master case studies',
  'Expanded software, business platform, and engineering project coverage',
  'New project screenshots and faster section navigation',
];

export default function PortfolioUpdateDialog() {
  const [open, setOpen] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    try {
      if (window.localStorage.getItem(storageKey)) return;
      window.localStorage.setItem(storageKey, 'true');
    } catch {
      // Storage may be unavailable; the dialog can still appear for this visit.
    }

    const frame = window.requestAnimationFrame(() => setOpen(true));
    return () => window.cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };

    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleKeyDown);
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center bg-slate-950/80 p-4 backdrop-blur-sm sm:items-center"
      role="presentation"
      onMouseDown={() => setOpen(false)}
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="portfolio-update-title"
        className="max-h-[calc(100vh-2rem)] w-full max-w-xl overflow-y-auto border-y border-sky-400/60 bg-slate-950 px-6 py-6 shadow-2xl shadow-black/50 sm:px-8 sm:py-7"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className="mb-5 flex min-h-9 items-center justify-between gap-5">
          <p className="page-eyebrow">Portfolio Update / 09.16.2026</p>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={() => setOpen(false)}
            className="grid size-9 shrink-0 place-items-center border border-slate-700 text-slate-400 transition-colors hover:border-sky-400 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400"
            aria-label="Close portfolio update"
            title="Close"
          >
            <FaTimes size={14} />
          </button>
        </div>

        <h2 id="portfolio-update-title" className="max-w-md text-2xl font-bold leading-tight text-white sm:text-3xl">
          Here&apos;s what I&apos;ve been working on.
        </h2>
        <p className="mt-4 max-w-lg text-sm leading-relaxed text-slate-400">
          This update adds new full-stack systems, deeper case studies, and a clearer view of my work across software and engineering.
        </p>

        <ol className="mt-6 border-b border-slate-800">
          {highlights.map((highlight, index) => (
            <li key={highlight} className="grid grid-cols-[2.5rem_1fr] items-start gap-3 border-t border-slate-800 py-3 text-sm leading-relaxed text-slate-300">
              <span className="dossier-index">0{index + 1}</span>
              <span>{highlight}</span>
            </li>
          ))}
        </ol>

        <div className="mt-6 grid sm:grid-cols-2">
          <Link
            href="/projects"
            onClick={() => setOpen(false)}
            className="flex min-h-12 items-center justify-between gap-3 border-b border-sky-400 pr-4 text-sm font-medium text-white transition-colors hover:text-sky-300"
          >
            Explore the updates
            <FaArrowRight className="shrink-0" size={12} />
          </Link>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="min-h-12 border-b border-slate-700 text-left text-sm text-slate-400 transition-colors hover:border-slate-500 hover:text-white sm:pl-6"
          >
            Continue to portfolio
          </button>
        </div>
      </section>
    </div>
  );
}