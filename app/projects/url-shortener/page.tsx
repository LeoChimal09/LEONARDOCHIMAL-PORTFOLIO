import Link from 'next/link';
import { FaArrowLeft, FaLock } from 'react-icons/fa';

const techStack = [
  { label: 'Frontend / API', value: 'Next.js 16 (App Router), React 19, tRPC, Material-UI v7' },
  { label: 'Language', value: 'TypeScript — strict mode, noUncheckedIndexedAccess' },
  { label: 'Redirect Service', value: 'Rust — Hyper, Tokio, Woothee (device detection)' },
  { label: 'ORM / Database', value: 'Drizzle ORM, MySQL 8.0 / Aurora RDS' },
  { label: 'Auth', value: 'NextAuth.js + Okta OIDC (SSO)' },
  { label: 'Analytics', value: 'Kinesis Firehose → S3 → AWS Glue → Athena' },
  { label: 'Infrastructure', value: 'AWS ECS Fargate, RDS Aurora, Route 53, Terraform' },
  { label: 'Runtime', value: 'Bun 1.3.10' },
  { label: 'Testing', value: 'Vitest + Testing Library (~750 tests)' },
  { label: 'CI/CD', value: 'GitHub Actions' },
];

const urlTypes = [
  {
    name: 'Tiny URLs',
    description: 'Auto-generated short aliases for any destination URL.',
  },
  {
    name: 'Vanity URLs',
    description: 'Human-readable custom paths, including support for custom registered domains (e.g. myproduct.company.com/path).',
  },
  {
    name: 'Pattern URLs',
    description: 'Regex-based redirect rules with dynamic path forwarding under a /x/ prefix. Protected against ReDoS attacks at creation time via nested-quantifier detection.',
  },
  {
    name: 'Mobile App Store Redirects',
    description: 'A single short link routes users to iOS App Store, Google Play, or a desktop URL based on real-time User-Agent device detection.',
  },
];

const rustFeatures = [
  'User-Agent device detection via the woothee library (iOS / Android / Desktop)',
  'Regex pattern caching with 300s TTL and thundering-herd prevention (single-flight refresh)',
  'Query param allowlisting — strips internal/tracking params before forwarding',
  'IDNA hostname normalization for international domains',
  'Hard limits: 1 024-byte path cap, 2 048-byte path+query cap',
  'Path traversal and control-character rejection',
  'Async analytics emission to Kinesis Firehose — fire-and-forget, zero redirect latency impact',
];

const analyticsFeatures = [
  'Every redirect event (timestamp, alias, device type, sanitized referer) streamed to Kinesis Firehose → S3 → Glue → Athena',
  'Preset date ranges: 7 / 30 / 90 days, 12 months',
  'Custom date picker with per-URL daily click area chart (zero-filled for missing days)',
  'Device breakdown: Desktop / iOS / Android',
  'CSV export for any URL\'s analytics',
];

const authFeatures = [
  'Okta SSO via NextAuth.js (OIDC) with session enrichment — user ID, email, admin flag, group memberships',
  'Group memberships synced from Okta on every login into a junction table',
  'Group ownership model — URLs and vanity hosts can be owned by a team group, giving all members owner-level access',
  "Two roles: regular users (manage their own URLs and their groups') and admins (manage everything)",
];

const uiFeatures = [
  'Paginated, sortable, searchable table (server-side) with URL type filter chips',
  'Multi-select with bulk delete and bulk QR code generation',
  'Create modal adapts to URL type: scheme toggle, alias conflict detection, similar-alias typo warnings, live regex tester, mobile triple-URL form, group/owner selector',
  'Force-recreate — users can reclaim their own previously deleted aliases',
  'Tracking URL auto-detection when destination matches a configured campaign format',
];

const securityHighlights = [
  'SSRF protection on destination URL health checks — blocks localhost, all RFC 1918 ranges, AWS metadata IPs, link-local IPv6, multicast, and broadcast',
  'ReDoS guard rejects patterns with nested quantifiers at creation time',
  'Referer header sanitization strips query strings before analytics logging',
  'URI size limits and character validation on all redirect paths',
  'No raw SQL — all queries go through Drizzle ORM with enforced .where() on every update/delete',
];

const uxFeatures = [
  'Global ⌘K / Ctrl+K command palette with live URL search (debounced 250ms)',
  'Keyboard shortcuts modal with styled key hints',
  'Admin CSV bulk upload with client-side preview, duplicate detection, and paginated preview table',
  'Responsive layout: table view on desktop, card view on mobile',
  'Soft-delete / recycle bin with restore and permanent delete',
];

export default function UrlShortenerPage() {
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
        <p className="text-blue-400 font-mono text-xs tracking-widest uppercase mb-3">John Deere — Internal Tool</p>
        <h1 className="text-4xl font-bold text-white mb-4">Enterprise URL Shortening Platform</h1>
        <p className="text-slate-400 text-lg leading-relaxed max-w-3xl mb-6">
          A production-grade internal URL shortening service built for large-organization use. Goes far beyond short links — supporting device-aware redirects, regex-based routing, team ownership, admin governance, audit trails, an async Rust redirect service, and a full analytics pipeline backed by AWS.
        </p>
        <div className="inline-flex items-center gap-2 bg-slate-800 border border-slate-700 rounded-full px-4 py-1.5 text-slate-400 text-sm font-mono">
          <FaLock size={11} />
          Internal project — no public repository or live demo
        </div>
      </section>

      {/* 4 URL Types */}
      <section className="bg-slate-900 border-y border-slate-800 py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-white mb-2">4 URL Types</h2>
          <p className="text-slate-400 mb-8">Each type has dedicated creation UI, validation rules, and redirect logic in the Rust service.</p>
          <div className="grid sm:grid-cols-2 gap-5">
            {urlTypes.map((t) => (
              <div key={t.name} className="bg-slate-800 border border-slate-700 rounded-lg p-5">
                <h3 className="text-blue-400 font-semibold mb-2">{t.name}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{t.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rust Redirect Service */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-white mb-2">Rust Redirect Service</h2>
          <p className="text-slate-400 mb-8">
            A standalone HTTP server built with <span className="text-amber-400 font-mono">Hyper + Tokio</span> handles all actual redirects, completely separate from the Next.js app. Designed to stay out of the hot path while feeding rich analytics asynchronously.
          </p>
          <ul className="space-y-3">
            {rustFeatures.map((f) => (
              <li key={f} className="flex gap-3 text-slate-300 text-sm leading-relaxed">
                <span className="text-amber-500 mt-0.5 shrink-0">▸</span>
                {f}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Analytics Pipeline */}
      <section className="bg-slate-900 border-y border-slate-800 py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-white mb-2">Analytics Pipeline</h2>
          <p className="text-slate-400 mb-8">
            Every redirect event flows asynchronously from the Rust service into a serverless data lake — zero impact on redirect latency.
          </p>
          <div className="flex flex-wrap items-center gap-3 mb-8 font-mono text-sm">
            {['Kinesis Firehose', '→', 'S3', '→', 'AWS Glue', '→', 'Athena', '→', 'UI'].map((step, i) => (
              <span key={i} className={step === '→' ? 'text-slate-600' : 'bg-slate-800 border border-slate-700 rounded px-3 py-1 text-blue-300'}>
                {step}
              </span>
            ))}
          </div>
          <ul className="space-y-3">
            {analyticsFeatures.map((f) => (
              <li key={f} className="flex gap-3 text-slate-300 text-sm leading-relaxed">
                <span className="text-blue-400 mt-0.5 shrink-0">▸</span>
                {f}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Auth & Ownership */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-white mb-2">Auth & Authorization</h2>
          <p className="text-slate-400 mb-8">Okta SSO with group-based ownership — not just user-level permissions.</p>
          <ul className="space-y-3">
            {authFeatures.map((f) => (
              <li key={f} className="flex gap-3 text-slate-300 text-sm leading-relaxed">
                <span className="text-blue-400 mt-0.5 shrink-0">▸</span>
                {f}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* URL Management UI */}
      <section className="bg-slate-900 border-y border-slate-800 py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-white mb-2">URL Management UI</h2>
          <p className="text-slate-400 mb-8">A full-featured data table with server-side search, filtering, and multi-select actions.</p>
          <ul className="space-y-3">
            {uiFeatures.map((f) => (
              <li key={f} className="flex gap-3 text-slate-300 text-sm leading-relaxed">
                <span className="text-blue-400 mt-0.5 shrink-0">▸</span>
                {f}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Admin & Governance */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-white mb-8">Admin & Governance</h2>
          <div className="grid sm:grid-cols-3 gap-5">
            <div className="bg-slate-800 border border-slate-700 rounded-lg p-5">
              <h3 className="text-white font-semibold mb-3">Approval Workflow</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Non-admin users submit change requests for URLs they don&apos;t own. Admins review pending/approved/denied requests in a dedicated queue. Approval directly applies the change.
              </p>
            </div>
            <div className="bg-slate-800 border border-slate-700 rounded-lg p-5">
              <h3 className="text-white font-semibold mb-3">URL Blocking</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Admins can block any URL (redirects 404 immediately), unblock it, or mark URLs as LOCKED — served normally but protected from modification.
              </p>
            </div>
            <div className="bg-slate-800 border border-slate-700 rounded-lg p-5">
              <h3 className="text-white font-semibold mb-3">Audit Log</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Append-only compliance history with 13 tracked action types. Stores actor identity, timestamp, action, entity alias, and a full JSON snapshot of the entity at time of change.
              </p>
            </div>
            <div className="bg-slate-800 border border-slate-700 rounded-lg p-5">
              <h3 className="text-white font-semibold mb-3">Vanity Host Management</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Register and manage custom domains as vanity hosts — SSL status tracking, group ownership, soft delete/restore, DNS A-record/CNAME live lookup, and search.
              </p>
            </div>
            <div className="bg-slate-800 border border-slate-700 rounded-lg p-5">
              <h3 className="text-white font-semibold mb-3">QR Code Generator</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Standalone page and inline modal. Generates downloadable QR codes for any short URL. Includes an accessibility contrast checker for foreground/background color combinations.
              </p>
            </div>
            <div className="bg-slate-800 border border-slate-700 rounded-lg p-5">
              <h3 className="text-white font-semibold mb-3">Campaign Tracking Builder</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Configurable URL builder that composes tracking parameter values from admin-defined fields (dropdowns, text, date pickers, fiscal year selectors) into a formatted query string.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Security */}
      <section className="bg-slate-900 border-y border-slate-800 py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-white mb-2">Security Highlights</h2>
          <p className="text-slate-400 mb-8">Defense-in-depth across the redirect service, API layer, and database queries.</p>
          <ul className="space-y-3">
            {securityHighlights.map((f) => (
              <li key={f} className="flex gap-3 text-slate-300 text-sm leading-relaxed">
                <span className="text-amber-500 mt-0.5 shrink-0">▸</span>
                {f}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* UX Polish */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-white mb-2">UX Polish</h2>
          <p className="text-slate-400 mb-8">Quality-of-life features that make day-to-day use significantly faster.</p>
          <ul className="space-y-3">
            {uxFeatures.map((f) => (
              <li key={f} className="flex gap-3 text-slate-300 text-sm leading-relaxed">
                <span className="text-blue-400 mt-0.5 shrink-0">▸</span>
                {f}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="bg-slate-900 border-y border-slate-800 py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-white mb-8">Tech Stack</h2>
          <div className="overflow-x-auto rounded-lg border border-slate-700">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-800 text-left">
                  <th className="px-5 py-3 text-slate-400 font-mono font-medium">Layer</th>
                  <th className="px-5 py-3 text-slate-400 font-mono font-medium">Technology</th>
                </tr>
              </thead>
              <tbody>
                {techStack.map((row, i) => (
                  <tr key={row.label} className={i % 2 === 0 ? 'bg-slate-900' : 'bg-slate-800/40'}>
                    <td className="px-5 py-3 text-blue-300 font-mono whitespace-nowrap">{row.label}</td>
                    <td className="px-5 py-3 text-slate-300">{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Footer nav */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors text-sm font-mono"
        >
          <FaArrowLeft size={12} />
          Back to projects
        </Link>
      </div>
    </main>
  );
}
