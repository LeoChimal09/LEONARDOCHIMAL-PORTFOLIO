import LightboxImage from '@/app/components/LightboxImage';
import Link from 'next/link';
import { FaArrowLeft, FaGithub } from 'react-icons/fa';

const techStack = [
  { label: 'Framework', value: 'Next.js 16 (App Router)' },
  { label: 'UI', value: 'React 19, Tailwind CSS 4, HeroUI, MUI' },
  { label: 'Auth', value: 'NextAuth.js — Google OAuth + magic link' },
  { label: 'ORM', value: 'Drizzle ORM' },
  { label: 'Database', value: 'MySQL via Docker' },
  { label: 'Email', value: 'Resend' },
  { label: 'Language', value: 'TypeScript throughout' },
];

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
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Back nav */}
      <div className="max-w-5xl mx-auto px-6 pt-8">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors text-sm font-mono"
        >
          <FaArrowLeft size={12} />
          cd ../projects
        </Link>
      </div>

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 pt-12 pb-16">
        <p className="text-blue-400 font-mono text-xs tracking-widest uppercase mb-3">
          Featured Project — Full-Stack Web Application
        </p>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
          Cutting Edge Appointments
        </h1>
        <p className="text-slate-400 text-lg max-w-3xl leading-relaxed mb-6">
          A full-stack barber shop booking system built for real local business use. Customers
          can pick a service, choose a barber, select a date and time, and manage their
          appointments after booking. The admin side provides a complete dashboard for managing
          requests, staff schedules, and building hours — everything a business needs to run
          bookings day to day.
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex flex-wrap gap-2">
            {['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS 4', 'Drizzle ORM', 'MySQL', 'NextAuth', 'Google OAuth'].map((t) => (
              <span
                key={t}
                className="px-3 py-1 text-blue-300 font-mono text-xs border border-blue-800/50 rounded-full bg-blue-900/20"
              >
                {t}
              </span>
            ))}
          </div>
          <a
            href="https://github.com/LeoChimal09/APPOINTMENT_PROJECT"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-1.5 border border-slate-500 text-slate-300 hover:border-white hover:text-white rounded text-sm font-medium transition-colors"
          >
            <FaGithub size={14} /> View on GitHub
          </a>
        </div>
      </section>

      {/* Screenshots */}
      <section className="max-w-5xl mx-auto px-6 mb-20">
        <h2 className="text-2xl font-bold mb-6">Screenshots</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {screenshots.map((img) => (
            <LightboxImage
              key={img.src}
              src={img.src}
              alt={img.alt}
              wrapperClassName="rounded-xl overflow-hidden border border-slate-700 shadow-lg bg-slate-800"
              wrapperStyle={{ aspectRatio: '4/3' }}
              imageClassName="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          ))}
        </div>
        <p className="text-slate-500 text-xs font-mono mt-3 text-center">
          Place screenshots in: public/projects/cutting-edge/ — home.png, services.png, booking.png, my-appointments.png, admin-appointments.png, admin-schedule.png, admin-hours.png
        </p>
      </section>

      {/* Overview */}
      <section className="max-w-5xl mx-auto px-6 mb-20">
        <h2 className="text-2xl font-bold mb-6">Project Overview</h2>
        <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-8 text-slate-400 leading-relaxed space-y-4">
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
      </section>

      {/* Feature split */}
      <section className="max-w-5xl mx-auto px-6 mb-20">
        <h2 className="text-2xl font-bold mb-8">Features</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Customer */}
          <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
            <h3 className="text-blue-400 font-mono text-xs uppercase tracking-widest mb-4">
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
          {/* Admin */}
          <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
            <h3 className="text-blue-400 font-mono text-xs uppercase tracking-widest mb-4">
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
      </section>

      {/* Tech stack */}
      <section className="max-w-5xl mx-auto px-6 mb-20">
        <h2 className="text-2xl font-bold mb-6">Tech Stack</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {techStack.map((t) => (
            <div key={t.label} className="bg-slate-800 border border-slate-700 rounded-lg p-5">
              <p className="text-blue-400 font-mono text-xs uppercase tracking-wider mb-1">{t.label}</p>
              <p className="text-white text-sm font-medium">{t.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Local business CTA */}
      <section className="max-w-5xl mx-auto px-6 mb-20">
        <div className="bg-gradient-to-br from-blue-950/60 to-slate-800/60 border border-blue-900/40 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-3">Building for the Quad Cities</h2>
          <p className="text-slate-400 max-w-2xl mx-auto leading-relaxed mb-6">
            I build websites and systems for local businesses — appointment booking, restaurant ordering,
            service-based landing pages, and custom admin tools. If you or someone you know in the
            Quad Cities needs a website that does more than just look good, reach out.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-medium transition-all hover:shadow-lg hover:shadow-blue-500/25"
          >
            Get in touch
          </Link>
        </div>
      </section>

      {/* Footer nav */}
      <div className="max-w-5xl mx-auto px-6 pb-20 flex justify-between items-center border-t border-slate-800 pt-8">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors text-sm"
        >
          <FaArrowLeft size={12} /> Back to Projects
        </Link>
        <a
          href="https://github.com/LeoChimal09/APPOINTMENT_PROJECT"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors"
        >
          <FaGithub size={14} /> View Source
        </a>
      </div>
    </main>
  );
}
