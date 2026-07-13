import CaseStudyHeader from '@/app/components/CaseStudyHeader';
import Link from 'next/link';
import type { Metadata } from 'next';
import {
  FaArrowLeft,
  FaCalendarCheck,
  FaChartLine,
  FaExternalLinkAlt,
  FaImages,
  FaShoppingCart,
  FaShieldAlt,
  FaUtensils,
} from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Zacatika Restaurant Platform | Leonardo Chimal',
  description:
    'Case study: Zacatika, a full-stack restaurant platform from RestaurantProject with online ordering, reservations, live hours, order tracking, admin dashboards, reports, gallery and event management, Drizzle ORM, MySQL, NextAuth, email workflows, and Railway deployment.',
};

const snapshot = [
  { label: 'Origin', value: 'RestaurantProject', note: 'Reusable local-business restaurant platform' },
  { label: 'Product Type', value: 'Restaurant OS', note: 'Public site, ordering, reservations, admin, reports' },
  { label: 'Data Layer', value: 'Drizzle + MySQL', note: 'Orders, hours, menu edits, events, gallery, reservations' },
  { label: 'Deployment', value: 'Railway', note: 'Production app with database-backed workflows' },
];

const tags = [
  'Next.js 16',
  'React 19',
  'TypeScript',
  'Drizzle ORM',
  'MySQL',
  'NextAuth',
  'Resend',
  'Stripe',
  'AWS S3',
  'Admin Dashboards',
];

const productModules = [
  {
    title: 'Public Restaurant Site',
    description:
      'A polished Zacatika Bar & Grill website with brand storytelling, hero sections, about content, gallery, reservations, contact, social links, and database-backed business hours.',
    Icon: FaUtensils,
  },
  {
    title: 'Menu + Cart Flow',
    description:
      'Customers browse categorized menu items, guest favorites, item photos, subtype options, removals, quantity controls, cart state, and checkout-ready order summaries.',
    Icon: FaShoppingCart,
  },
  {
    title: 'Checkout + Order Tracking',
    description:
      'Checkout validates customer details, supports pickup or delivery, stores order refs with secrets, and lets customers poll active order status or reorder completed purchases.',
    Icon: FaShieldAlt,
  },
  {
    title: 'Reservations',
    description:
      'A customer reservation flow stores table requests with guest count, notes, status, admin notes, timestamps, and approval or denial states.',
    Icon: FaCalendarCheck,
  },
  {
    title: 'Admin Operations',
    description:
      'The admin dashboard manages orders, restaurant hours, menu items, reports, events, gallery uploads, and reservations from one operations surface.',
    Icon: FaChartLine,
  },
  {
    title: 'Media + Events',
    description:
      'Admin-uploaded gallery images and event records support homepage content updates without changing code, including focal-point controls and event poster metadata.',
    Icon: FaImages,
  },
];

const customerJourney = [
  {
    step: '01',
    title: 'Discover the Restaurant',
    detail:
      'The homepage presents Zacatika as a real restaurant brand with live hours, menu links, gallery, reservation CTA, contact information, and social channels.',
  },
  {
    step: '02',
    title: 'Build an Order',
    detail:
      'Guests browse menu categories, restaurant-selected favorites, custom menu edits, item images, subtype choices, and cart totals before checkout.',
  },
  {
    step: '03',
    title: 'Checkout Safely',
    detail:
      'The checkout flow validates name, email, phone, fulfillment mode, delivery fields, terms, payment choice, and restaurant open status before creating an order.',
  },
  {
    step: '04',
    title: 'Track and Reorder',
    detail:
      'Customers can view active order status, see completed or cancelled order history, remove old records, and rebuild the cart from past orders.',
  },
];

const adminSystems = [
  'Order management with pending, confirmed, preparing, ready, completed, and cancelled states.',
  'Restaurant hours editor that controls live open/closed behavior and public footer hours.',
  'Reports surface for sales summaries, popular items, and daily revenue signals.',
  'Menu item management for hiding items, featuring guest favorites, and editing item data.',
  'Events and gallery management for homepage content, uploads, focal points, and visual updates.',
  'Reservation review workflow for approving or denying table booking requests.',
];

const technicalStack = [
  { layer: 'Framework', tools: 'Next.js 16 App Router, React 19, TypeScript, Tailwind CSS 4' },
  { layer: 'Database', tools: 'Drizzle ORM, MySQL, repository modules for orders, hours, events, gallery, menu items, reservations' },
  { layer: 'Authentication', tools: 'NextAuth routes and protected admin surfaces' },
  { layer: 'Orders', tools: 'Order refs, customer secrets, status polling, local order history, reorder flow, checkout validation' },
  { layer: 'Messaging', tools: 'Resend, Nodemailer, email verification token schema, SMTP-ready workflows' },
  { layer: 'Media + Storage', tools: 'AWS S3 SDK, upload APIs, gallery/event/menu image storage, focal-point metadata' },
  { layer: 'Payments', tools: 'Stripe dependency and card/cash payment branch in checkout UX' },
  { layer: 'Quality', tools: 'ESLint, TypeScript noEmit, Vitest, Testing Library-ready setup' },
];

const learningHighlights = [
  'Turned a restaurant website into a full product system with customer-facing flows and owner-facing operations instead of a static landing page.',
  'Modeled restaurant data across orders, hours, menu overrides, menu edits, events, gallery images, reservations, customers, and email verification tokens.',
  'Built toward real business needs: live hours, order status, admin reports, content management, guest favorites, reservations, and reorder behavior.',
  'Practiced separating public UI, route handlers, repositories, database schema, cart state, checkout validation, and admin workflows into maintainable boundaries.',
  'Used this as a reusable local-business pattern for WebsterLocale restaurant clients who need more than a brochure website.',
];

const nextSteps = [
  'Add production screenshots to this case study as the Zacatika UI stabilizes across desktop and mobile.',
  'Finish the Stripe payment path and connect payment state back into order status updates.',
  'Expand reporting into clearer owner metrics: revenue by day, popular items, cancellation reasons, and reservation conversion.',
  'Package the restaurant platform as a repeatable WebsterLocale template for future restaurant clients.',
];

export default function ZacatikaPage() {
  return (
    <main className="page-shell">
      <CaseStudyHeader
        eyebrow="RestaurantProject - Full-Stack Local Business Platform"
        title="Zacatika Restaurant Platform"
        lead="A full-stack restaurant web platform built from RestaurantProject, designed to handle the public guest experience and the private operations a restaurant owner needs day to day."
        summary="Zacatika combines a polished restaurant site with online ordering, reservations, order tracking, live business hours, admin dashboards, reports, gallery and event management, production data workflows, and Railway deployment."
        snapshot={snapshot}
        tags={tags}
        actions={(
          <a
            href="https://restaurantproject-production-630b.up.railway.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-sky-500/40 bg-sky-950/40 px-4 py-2 text-sm font-medium text-sky-200 hover:border-sky-300 hover:text-white transition-colors"
          >
            Live Zacatika Site
            <FaExternalLinkAlt size={12} />
          </a>
        )}
      />

      <section className="page-section pt-0">
        <div className="page-container">
          <p className="page-eyebrow mb-2">Product Scope</p>
          <h2 className="text-2xl font-bold mb-6">What Zacatika Includes</h2>
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
            <p className="page-eyebrow mb-2">Customer Journey</p>
            <h2 className="text-2xl font-bold mb-4">From Restaurant Discovery to Reorder</h2>
            <p className="text-slate-400 leading-relaxed max-w-3xl mb-8">
              The customer side is designed around real restaurant tasks: finding the business,
              browsing the menu, placing an order, tracking status, and coming back later without
              starting from scratch.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {customerJourney.map((item) => (
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
          <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-8 items-start">
            <div>
              <p className="page-eyebrow mb-2">Owner Tools</p>
              <h2 className="text-2xl font-bold mb-4">Admin Operations Built Into the Product</h2>
              <p className="text-slate-400 leading-relaxed">
                The admin side turns the restaurant site into an operating tool. Instead of hardcoding
                every update, owners can manage orders, hours, menu visibility, content, reports,
                events, gallery images, and reservation requests from dashboard modules.
              </p>
            </div>
            <ul className="space-y-3">
              {adminSystems.map((item) => (
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
                    <td className="px-5 py-3 text-slate-300 font-medium whitespace-nowrap">{item.layer}</td>
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
              <h2 className="text-2xl font-bold mb-4">What This Project Shows</h2>
              <p className="text-slate-400 leading-relaxed">
                Zacatika is useful in the portfolio because it shows that I can build software
                around a real business workflow: public experience, checkout logic, data modeling,
                admin operations, reporting, media workflows, deployment, and reusable product design.
              </p>
            </div>
            <ul className="space-y-3">
              {learningHighlights.map((item) => (
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
            <h2 className="text-2xl font-bold mb-6">Turning RestaurantProject Into a Repeatable Template</h2>
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
          href="/projects/websterlocale"
          className="text-sm text-sky-300 hover:text-white transition-colors"
        >
          Next Project: WebsterLocale -&gt;
        </Link>
      </div>
    </main>
  );
}