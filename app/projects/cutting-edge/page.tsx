import LightboxImage from '@/app/components/LightboxImage';
import CaseStudyHeader from '@/app/components/CaseStudyHeader';
import Link from 'next/link';
import type { Metadata } from 'next';
import { FaArrowLeft, FaGithub } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Cutting Edge Appointments | Leonardo Chimal',
  description:
    'Case study: full-stack barber shop booking system built for real local business use. Next.js 16, TypeScript, Drizzle ORM, MySQL, NextAuth, Google OAuth, Tailwind CSS.',
};

const techStack = [
  { label: 'Framework', value: 'Next.js 16 (App Router)' },
  { label: 'UI', value: 'React 19, Tailwind CSS 4, HeroUI, MUI' },
  { label: 'Auth', value: 'NextAuth.js — Google OAuth + magic link' },
  { label: 'ORM', value: 'Drizzle ORM' },
  { label: 'Database', value: 'MySQL via Docker' },
  { label: 'Email', value: 'Resend' },
  { label: 'Language', value: 'TypeScript throughout' },
];

const tags = ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS 4', 'Drizzle ORM', 'MySQL', 'NextAuth', 'Google OAuth'];

const customerFeatures = [
  'Browse services with durations and descriptions',
  'Choose a barber and pick a date from a live calendar',
  'Real-time availability — slots computed from staff schedules and building hours',
  'No double-booking: time slots are validated server-side',
  'View appointment history with status badges (Pending, Accepted, Completed, Cancelled)',
  'Cancel appointments or book again in one click',
  'Guest mode with persisted draft contact info for returning visitors',
];

const adminFeatures = [
  'Admin dashboard protected by Google OAuth — only allowlisted emails can access',
  'Review all appointment requests, filter by barber or status',
  'Move appointments through workflow: Pending → Accepted → Completed',
  'Per-staff weekly schedule editor — set working days and hours for each barber',
  'Building hours configuration — customers can only book during open hours',
  'Staff roster management: add/remove staff, toggle active/inactive',
];

const screenshots = [
  { src: '/projects/cutting-edge/home.png', alt: 'Home page with next visit preview and business hours' },
  { src: '/projects/cutting-edge/home-reviews.png', alt: 'Reviews section and social proof footer' },
  { src: '/projects/cutting-edge/services.png', alt: 'Services page with staff cards and availability' },
  { src: '/projects/cutting-edge/booking.png', alt: 'Booking calendar with service and time slot picker' },
  { src: '/projects/cutting-edge/my-appointments.png', alt: 'My appointments with status filters' },
  { src: '/projects/cutting-edge/admin-appointments.png', alt: 'Admin appointment request management' },
  { src: '/projects/cutting-edge/admin-schedule.png', alt: 'Admin staff weekly schedule editor' },
  { src: '/projects/cutting-edge/admin-hours.png', alt: 'Admin building hours configuration' },
];

export default function CuttingEdgePage() {
  return (
    <main className="page-shell">
      <CaseStudyHeader
        eyebrow="Featured Project - Full-Stack Web Application"
        title="Cutting Edge Appointments"
        lead="A full-stack barber shop booking system built for real local business use."
        summary="Customers can pick a service, choose a barber, select a date and time, and manage their appointments after booking. The admin side provides a complete dashboard for managing requests, staff schedules, and building hours - everything a business needs to run bookings day to day."
        tags={tags}
        actions={(
          <a
            href="https://github.com/LeoChimal09/APPOINTMENT_PROJECT"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-sky-500/40 bg-sky-950/40 px-4 py-2 text-sm font-medium text-sky-200 hover:border-sky-300 hover:text-white transition-colors"
          >
            <FaGithub size={14} /> View on GitHub
          </a>
        )}
      />

      {/* Screenshots */}
      <section className="page-section pt-0">
        <div className="page-container">
        <h2 className="text-2xl font-bold mb-6">Screenshots</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {screenshots.map((img) => (
            <LightboxImage
              key={img.src}
              src={img.src}
              alt={img.alt}
              wrapperClassName="rounded-2xl overflow-hidden border border-slate-700/70 shadow-lg bg-slate-800"
              wrapperStyle={{ aspectRatio: '4/3' }}
              imageClassName="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          ))}
        </div>
        </div>
      </section>

      {/* Overview */}
      <section className="page-section pt-0">
        <div className="page-container">
        <h2 className="text-2xl font-bold mb-6">Project Overview</h2>
        <div className="panel-card rounded-2xl p-8 text-slate-400 leading-relaxed space-y-4">
          <p>
            The main idea was to build something a real local business could actually use — not just a
            demo with fake data. The booking flow is driven by real database-backed availability:
            time slots are computed from each staff member&apos;s weekly schedule intersected with
            the business&apos;s building hours, so customers can only see and book genuinely open slots.
          </p>
          <p>
            The admin dashboard is fully separated from the customer side and protected by Google OAuth.
            Only allowlisted emails can access it. From there, admins can accept or complete appointment
            requests, manage the staff roster, set each barber&apos;s weekly availability, and configure
            building hours — all of which directly control what customers see on the booking page.
          </p>
          <p>
            This project is part of the broader work I&apos;m doing designing and building websites for
            local businesses in the Quad Cities — systems that don&apos;t just look good, but actually
            help businesses handle real tasks like bookings, scheduling, and customer management.
          </p>
        </div>
        </div>
      </section>

      {/* Feature split */}
      <section className="page-section pt-0">
        <div className="page-container">
        <h2 className="text-2xl font-bold mb-8">Features</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="panel-card-soft rounded-2xl p-6">
            <h3 className="page-eyebrow mb-4 text-[10px]">
              Customer Experience
            </h3>
            <ul className="space-y-3">
              {customerFeatures.map((f) => (
                <li key={f} className="flex items-start gap-2 text-slate-400 text-sm leading-relaxed">
                  <span className="text-blue-500 mt-0.5 shrink-0">▸</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>
          <div className="panel-card-soft rounded-2xl p-6">
            <h3 className="page-eyebrow mb-4 text-[10px]">
              Admin Dashboard
            </h3>
            <ul className="space-y-3">
              {adminFeatures.map((f) => (
                <li key={f} className="flex items-start gap-2 text-slate-400 text-sm leading-relaxed">
                  <span className="text-blue-500 mt-0.5 shrink-0">▸</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>
        </div>
      </section>

      {/* Tech stack */}
      <section className="page-section pt-0">
        <div className="page-container">
        <h2 className="text-2xl font-bold mb-6">Tech Stack</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {techStack.map((t) => (
            <div key={t.label} className="panel-card-soft rounded-xl p-5">
              <p className="page-eyebrow text-[10px] mb-1">{t.label}</p>
              <p className="text-white text-sm font-medium">{t.value}</p>
            </div>
          ))}
        </div>
        </div>
      </section>

      {/* Local business CTA */}
      <section className="page-section pt-0">
        <div className="page-container">
        <div className="panel-card rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-3">Building for the Quad Cities</h2>
          <p className="text-slate-400 max-w-2xl mx-auto leading-relaxed mb-6">
            I build websites and systems for local businesses — appointment booking, restaurant ordering,
            service-based landing pages, and custom admin tools. If you or someone you know in the
            Quad Cities needs a website that does more than just look good, reach out.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-sky-500 hover:bg-sky-400 text-slate-950 rounded-full font-semibold transition-all hover:shadow-lg hover:shadow-sky-500/25"
          >
            Get in touch
          </Link>
        </div>
        </div>
      </section>

      {/* Footer nav */}
      <div className="page-container px-6 pb-20 flex justify-between items-center border-t border-slate-800 pt-8">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-slate-400 hover:text-sky-300 transition-colors text-sm"
        >
          <FaArrowLeft size={12} /> Back to Projects
        </Link>
        <a
          href="https://github.com/LeoChimal09/APPOINTMENT_PROJECT"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-sky-300 hover:text-white transition-colors"
        >
          <FaGithub size={14} /> View Source
        </a>
      </div>
    </main>
  );
}
