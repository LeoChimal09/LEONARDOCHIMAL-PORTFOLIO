import Link from 'next/link';
import type { Metadata } from 'next';
import CaseStudyHeader from '@/app/components/CaseStudyHeader';
import {
  FaArrowLeft,
  FaBriefcase,
  FaDatabase,
  FaEnvelope,
  FaExternalLinkAlt,
  FaRocket,
  FaShieldAlt,
  FaUsers,
} from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'WebsterLocale | Leonardo Chimal',
  description:
    'Case study: WebsterLocale, a local website studio and operating platform for client intake, business opportunity tracking, admin lead management, employee assignments, email outreach, and Railway deployment.',
};

const snapshot = [
  { label: 'Role', value: 'Founder & Full-Stack Developer', note: 'Business strategy, product design, engineering, and operations' },
  { label: 'Market', value: 'Local Businesses', note: 'Restaurants, barbershops, salons, and service companies' },
  { label: 'Product', value: 'Website Studio + CRM', note: 'Public request site with private lead and client workflows' },
  { label: 'Status', value: 'Launched Platform', note: 'Railway environments for production and development' },
];

const tags = ['Next.js 16', 'TypeScript', 'Drizzle ORM', 'MySQL', 'NextAuth', 'Google OAuth', 'Nodemailer', 'Railway', 'CRM Workflows'];

const productModules = [
  {
    title: 'Public Business Site',
    description:
      'A client-facing WebsterLocale website that explains services, shows restaurant and appointment examples, and routes serious prospects into a request flow.',
    Icon: FaBriefcase,
  },
  {
    title: 'Client Request Intake',
    description:
      'A validated request form captures business name, contact details, business type, timeline, budget, current website, and project goals.',
    Icon: FaEnvelope,
  },
  {
    title: 'Business Opportunity Pipeline',
    description:
      'An internal workflow keeps potential client opportunities organized around business fit, outreach progress, assignment, notes, and follow-up status.',
    Icon: FaRocket,
  },
  {
    title: 'Admin Lead CRM',
    description:
      'Admins track leads through new, connected, converted, building, completed, and skipped states while editing notes, contact data, and website pricing fields.',
    Icon: FaDatabase,
  },
  {
    title: 'Employee Assignments',
    description:
      'Configured employees can receive assigned leads, review their workspace, and update outreach progress without accessing the full admin surface.',
    Icon: FaUsers,
  },
  {
    title: 'Role-Based Access',
    description:
      'NextAuth with Google OAuth and allowlisted admin / employee emails protects operational pages while keeping the public site open.',
    Icon: FaShieldAlt,
  },
];

const operatingWorkflow = [
  {
    step: '01',
    title: 'Position the Offer',
    detail:
      'WebsterLocale presents concrete service lanes: restaurant websites, online ordering, admin dashboards, booking flows, and lead-ready pages.',
  },
  {
    step: '02',
    title: 'Identify the Right Fit',
    detail:
      'The operating workflow focuses on local businesses that would benefit from clearer websites, booking flows, ordering systems, or request capture.',
  },
  {
    step: '03',
    title: 'Manage Outreach',
    detail:
      'Leads move through outreach statuses, assignments, notes, and contact updates so business development work stays organized.',
  },
  {
    step: '04',
    title: 'Convert Into Builds',
    detail:
      'Confirmed clients can be tracked through building and completed states, including completed website URLs and compensation fields.',
  },
];

const technicalStack = [
  { layer: 'Frontend', tools: 'Next.js 16 App Router, React 19, TypeScript, Tailwind CSS' },
  { layer: 'Database', tools: 'MySQL 8, Drizzle ORM, schema migrations, repository pattern' },
  { layer: 'Authentication', tools: 'NextAuth, Google OAuth, admin and employee allowlists, JWT sessions' },
  { layer: 'Business Pipeline', tools: 'Opportunity records, outreach status, assignments, notes, request tracking' },
  { layer: 'Email', tools: 'Nodemailer SMTP, client request notifications, local Mailpit testing' },
  { layer: 'Deployment', tools: 'Railway production / development environments, develop-to-main release workflow' },
];

const engineeringHighlights = [
  'Designed separate public, admin, and employee surfaces so the same platform can sell, intake, and operate the business.',
  'Modeled business opportunities, lead status, dismissals, assignments, client requests, pricing, completion URLs, and timestamps in Drizzle schema.',
  'Built API routes for client request submission, admin request review, lead assignment, employee lead views, CSV export, and email sending.',
  'Added guardrails around environment configuration, production OAuth, local development sign-in, role-based access, and staged secret checks.',
  'Used repository modules to keep database access reusable across dynamic pages, admin dashboards, and route handlers.',
];

const nextSteps = [
  'Add stronger analytics around outreach conversion, request sources, and completed website revenue.',
  'Build proposal templates that turn captured request data into a repeatable client quote workflow.',
  'Add screenshot-based case studies for each completed client website as WebsterLocale signs real businesses.',
  'Continue separating reusable website patterns for restaurants, appointments, ordering, galleries, and owner dashboards.',
];

export default function WebsterLocalePage() {
  return (
    <main className="page-shell">
      <CaseStudyHeader
        eyebrow="New Business - Founder, Product, Full-Stack Engineering"
        title="WebsterLocale"
        lead="A local website studio and internal operating platform for helping underserved local businesses improve their online presence, capture website requests, manage opportunities, assign outreach work, and turn prospects into client builds."
        summary="I built WebsterLocale to connect business development with software engineering. The public site markets websites, ordering flows, booking systems, and admin tools; the private app supports the actual operations behind the business with opportunity tracking, request tracking, role-based dashboards, email workflows, and deployment discipline."
        snapshot={snapshot}
        tags={tags}
        actions={(
          <a
            href="https://websterlocale-production.up.railway.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-sky-500/40 bg-sky-950/40 px-4 py-2 text-sm font-medium text-sky-200 hover:border-sky-300 hover:text-white transition-colors"
          >
            Live WebsterLocale Site
            <FaExternalLinkAlt size={12} />
          </a>
        )}
      />

      <section className="page-section pt-0">
        <div className="page-container">
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/80 px-4 py-2 text-sm text-slate-400 mb-8">
            <FaRocket size={12} />
            Production + development Railway workflow
          </span>

        <p className="page-eyebrow mb-2">Product Scope</p>
        <h2 className="text-2xl font-bold mb-6">What WebsterLocale Includes</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {productModules.map(({ title, description, Icon }) => (
            <div key={title} className="panel-card-soft rounded-2xl p-6">
              <Icon className="text-sky-400 mb-4" size={22} />
              <h3 className="text-white font-semibold mb-3">{title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
        </div>
      </section>

      <section className="page-section pt-0">
        <div className="page-container">
        <div className="panel-card rounded-2xl p-6 md:p-8">
          <p className="page-eyebrow mb-2">Business System</p>
          <h2 className="text-2xl font-bold mb-4">How the Business Operates</h2>
          <p className="text-slate-400 leading-relaxed max-w-3xl mb-8">
            The goal is not only to build websites. The platform gives WebsterLocale a repeatable
            pipeline for identifying businesses that need help, organizing outreach, receiving
            inbound requests, and tracking work after a client confirms.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {operatingWorkflow.map((item) => (
              <div key={item.step} className="panel-card-soft rounded-xl p-5">
                <p className="page-eyebrow text-[10px] mb-2">{item.step}</p>
                <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
        </div>
      </section>

      <section className="page-section pt-0">
        <div className="page-container">
        <h2 className="text-2xl font-bold mb-6">Technical Architecture</h2>
        <div className="overflow-x-auto rounded-2xl border border-slate-700/70">
          <table className="w-full text-sm">
            <thead className="bg-slate-800 text-slate-400 font-mono text-xs uppercase">
              <tr>
                <th className="text-left px-5 py-3">Layer</th>
                <th className="text-left px-5 py-3">Tools and Design Choices</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {technicalStack.map((item) => (
                <tr key={item.layer} className="bg-slate-900 hover:bg-slate-800 transition-colors">
                  <td className="px-5 py-3 text-slate-300 font-medium">{item.layer}</td>
                  <td className="px-5 py-3 text-slate-400">{item.tools}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        </div>
      </section>

      <section className="page-section pt-0">
        <div className="page-container">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-8 items-start">
          <div>
            <p className="page-eyebrow mb-2">Engineering Depth</p>
            <h2 className="text-2xl font-bold mb-4">What This Demonstrates</h2>
            <p className="text-slate-400 leading-relaxed">
              WebsterLocale is useful on a portfolio because it shows ownership across product,
              customer acquisition, data modeling, backend workflows, authentication, deployment,
              and maintainable full-stack code. It is a business, but it is also a real operating
              system for that business.
            </p>
          </div>
          <ul className="space-y-3">
            {engineeringHighlights.map((item) => (
              <li key={item} className="flex gap-3 text-slate-300 text-sm leading-relaxed">
                <span className="text-sky-400 mt-0.5 shrink-0">▸</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
        </div>
      </section>

      <section className="page-section pt-0">
        <div className="page-container">
        <div className="panel-card rounded-2xl p-8">
          <p className="page-eyebrow mb-2">Next Steps</p>
          <h2 className="text-2xl font-bold mb-6">Growing the Business and Platform</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {nextSteps.map((item) => (
              <div key={item} className="panel-card-soft rounded-xl p-5">
                <p className="text-slate-400 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
        </div>
      </section>

      <div className="page-container px-6 pb-20 flex justify-between items-center border-t border-slate-800 pt-8">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-slate-400 hover:text-sky-300 transition-colors text-sm"
        >
          <FaArrowLeft size={12} /> Back to Projects
        </Link>
        <Link
          href="/projects/url-shortener"
          className="text-sm text-sky-300 hover:text-white transition-colors"
        >
          Next Project: Enterprise URL Shortener -&gt;
        </Link>
      </div>
    </main>
  );
}