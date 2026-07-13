import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import Reveal from './Reveal';

const experiences = [
  {
    role: 'Founder & Full-Stack Developer',
    company: 'WebsterLocale',
    location: 'East Moline, Illinois',
    period: '2026 – Present',
    description: [
      'Founded a local website studio for restaurants, barbershops, salons, and service businesses that need polished websites, booking flows, ordering systems, request capture, and admin dashboards.',
      'Built the WebsterLocale platform with Next.js 16, TypeScript, Drizzle ORM, MySQL, NextAuth, Google OAuth, SMTP email, and Railway deployment workflows.',
      'Developed an internal business pipeline and CRM workflow that tracks outreach status, assigns opportunities, stores notes, and manages client website requests.',
      'Combined software engineering with business operations: positioning services, designing client intake, building reusable local-business product patterns, and preparing a repeatable sales pipeline.',
    ],
    tech: ['Next.js 16', 'TypeScript', 'Drizzle ORM', 'MySQL', 'NextAuth', 'Railway'],
  },
  {
    role: 'Apprentice IT',
    company: 'John Deere',
    location: 'Moline, Illinois',
    period: 'June 2024 – Present',
    description: [
      'Developed internal tools and automation workflows using AWS, Terraform, JavaScript, and API integrations to support scalable backend systems and reduce manual processes.',
      'Designed and deployed a production-grade internal URL shortening platform with multiple URL types, metadata tracking, vanity and pattern redirects, admin governance, QR generation, and backend performance improvements.',
      'Learned to reason through enterprise system design by separating the Next.js management app from a Rust redirect service, then connecting both to MySQL, Okta SSO, group ownership, and role-based access rules.',
      'Built cloud and analytics workflows with AWS Lambda, SNS, SQS, ECS Fargate, Kinesis Firehose, S3, Glue, Athena, and Terraform to support event-driven architecture and redirect reporting.',
      'Applied production security practices including URL validation, SSRF protection, ReDoS prevention, audit logging, referer sanitization, path limits, and guarded database update/delete patterns.',
      'Strengthened engineering discipline through GitHub workflows, documentation, debugging, Testing Library and Vitest coverage, code review feedback, and mentoring incoming IT apprentices.',
    ],
    tech: ['Next.js', 'TypeScript', 'Rust', 'Okta SSO', 'AWS', 'Terraform', 'Kinesis', 'Vitest'],
    detailPage: '/projects/url-shortener',
  },
  {
    role: 'Robotics Design Lead',
    company: 'First Tech Challenge — Team 8813',
    location: 'Moline, Illinois',
    period: 'May 2022 – 2025',
    description: [
      'Led CAD design and mechanical integration for competitive FTC robotics systems using Onshape, collaborating with programming and manufacturing teams to optimize robot performance, maintainability, and weight distribution through iterative prototyping and engineering reviews.',
      'Designed drivetrain, intake, launcher, and structural robot systems while working alongside engineers and mentors from John Deere, Lockheed Martin, Meta, Tesla, Amazon, Black Hawk College, and other STEM organizations.',
      'Helped implement Agile/Scrum-style workflows using Trello, Discord task tracking, and sprint reviews while contributing to STEM outreach, mentoring, engineering presentations, and robotics demonstrations throughout the Quad Cities region.',
      'Qualified for the FTC World Championship in Houston, Texas (2024), FTC State Championship competitions (2025), and the FTC World Championship in Indianapolis, Indiana (2026).',
    ],
    tech: ['Onshape', 'CAD', '3D Printing', 'Agile/Scrum'],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="page-section pt-0">
      <div className="page-container">
        <Reveal>
          <div className="mb-12 grid gap-4 md:grid-cols-[0.35fr_1fr] md:items-end">
            <p className="page-eyebrow">Where I&apos;ve Worked</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Experience</h2>
          </div>
        </Reveal>

        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-sky-400/70 via-slate-700 to-transparent" />

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Reveal key={exp.role} delay={index * 80}>
                <article className="relative ml-12 panel-card rounded-2xl p-6 md:p-8 transition hover:-translate-y-1 hover:border-sky-400/50">
                  <div className="absolute -left-[2.85rem] top-8 h-4 w-4 rounded-full border-2 border-slate-950 bg-sky-400 shadow-[0_0_0_6px_rgba(56,189,248,0.12)]" />
                  <span className="page-eyebrow text-[10px]">{exp.period}</span>

                  <h3 className="text-white font-semibold text-lg mt-1">{exp.role}</h3>
                  <p className="text-slate-400 text-sm mb-4">
                    {exp.company} &mdash; {exp.location}
                  </p>

                  <ul className="space-y-2 mb-4">
                    {exp.description.map((point, i) => (
                      <li key={i} className="text-slate-400 text-sm leading-relaxed flex gap-2">
                        <span className="text-sky-400 mt-1 shrink-0">▹</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <span key={t} className="pill-tag">
                        {t}
                      </span>
                    ))}
                  </div>

                  {'detailPage' in exp && exp.detailPage ? (
                    <Link
                      href={exp.detailPage}
                      className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-sky-300 hover:text-white transition-colors"
                    >
                      View related case study
                      <FaArrowRight size={11} />
                    </Link>
                  ) : null}
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
