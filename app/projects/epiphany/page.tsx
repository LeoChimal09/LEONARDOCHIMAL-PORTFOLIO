import type { Metadata } from 'next';
import {
  FaBell,
  FaCalendarAlt,
  FaComments,
  FaGithub,
  FaHeart,
  FaSlidersH,
  FaStickyNote,
} from 'react-icons/fa';
import CaseStudyHeader from '@/app/components/CaseStudyHeader';
import LightboxImage from '@/app/components/LightboxImage';

export const metadata: Metadata = {
  title: 'Epiphany Personal Assistant | Leonardo Chimal',
  description:
    'Epiphany is a personal assistant built to make multiple commitments easier to manage through conversational planning, clear schedules, consistent check-ins, and well-being awareness.',
};

const snapshot = [
  { label: 'Role', value: 'Creator & Developer', note: 'Built around a problem I experience firsthand' },
  { label: 'Purpose', value: 'Personal Planning', note: 'A clearer schedule and support for competing commitments' },
  { label: 'Interfaces', value: 'Web + Discord', note: 'Conversational assistance with Google Calendar integration' },
  { label: 'Status', value: 'In Personal Use', note: 'A tool I currently rely on heavily' },
];

const tags = [
  'Next.js',
  'React',
  'TypeScript',
  'Bun',
  'discord.js',
  'Drizzle ORM',
  'SQLite',
  'OpenAI API',
  'Google Calendar API',
];

const techStack = [
  { layer: 'Frontend / API', technology: 'Next.js, React, TypeScript for the dashboard and server API' },
  { layer: 'Discord Runtime', technology: 'Bun and discord.js for the assistant and background jobs' },
  { layer: 'Shared Services', technology: 'Shared authorization and domain services in packages/core' },
  { layer: 'ORM / Database', technology: 'Drizzle ORM, SQLite in WAL mode, @libsql/client, versioned migrations' },
  { layer: 'AI Layer', technology: 'OpenAI tool calling with server-side validation' },
  { layer: 'Calendar Integration', technology: 'Google Calendar API for imports and mirroring Epiphany-owned planning records' },
];

const capabilities = [
  {
    title: 'Conversational Planning',
    icon: FaComments,
    description:
      'Ask Epi provides a place to talk through tasks, notes, and questions in natural language, including capturing an idea without leaving the conversation.',
  },
  {
    title: 'Schedule Clarity',
    icon: FaCalendarAlt,
    description:
      'Calendar views and Google Calendar integration make upcoming commitments visible, so I can look ahead instead of keeping every deadline in my head.',
  },
  {
    title: 'Consistent Check-Ins',
    icon: FaBell,
    description:
      'Discord check-ins surface overdue work and approaching deadlines. I can reply when something is finished and have that completion reflected in the planner.',
  },
  {
    title: 'Personal Planning Defaults',
    icon: FaSlidersH,
    description:
      'Routine settings include sleep, meals, protected time, event buffers, and minimum work blocks, giving planning a place to account for everyday life.',
  },
  {
    title: 'Notes & Ideas',
    icon: FaStickyNote,
    description:
      'A searchable space keeps thoughts available beyond the original conversation, with categories and a way to return to a note through Ask Epi.',
  },
  {
    title: 'Well-Being Awareness',
    icon: FaHeart,
    description:
      'Personal features make room for learning about the user and their well-being, not just tracking what is due next. The goal is support that feels personal rather than another task list.',
  },
];

const screenshots = [
  {
    src: '/projects/epiphany/discord-check-ins.webp',
    title: 'Check-ins where I already communicate',
    alt: 'Epiphany Discord check-ins showing upcoming deadlines and a reply that marks a task complete',
    caption: 'A morning overview, deadline reminders, and a conversational completion update keep the plan connected to progress.',
  },
  {
    src: '/projects/epiphany/google-calendar.webp',
    title: 'Deadlines on the calendar',
    alt: 'Google Calendar event for a physics exam deadline managed by Epiphany',
    caption: 'An Epiphany-managed deadline appears in Google Calendar alongside the rest of the schedule.',
  },
  {
    src: '/projects/epiphany/planning-defaults.webp',
    title: 'Planning around a real routine',
    alt: 'Epiphany planning defaults for sleep, meals, protected time, event buffers, and minimum work blocks',
    caption: 'Saved routine defaults give planning more context than an empty calendar.',
  },
  {
    src: '/projects/epiphany/notes-and-ideas.webp',
    title: 'Ideas that do not get lost',
    alt: 'Epiphany Notes and ideas view with category filters, search, and a saved personal assistant development note',
    caption: 'A note captured through conversation remains available to revisit, edit, or discuss with Epi.',
  },
];

export default function EpiphanyPage() {
  return (
    <main className="page-shell">
      <CaseStudyHeader
        eyebrow="Featured Project - Personal Assistant"
        title="Epiphany"
        lead="A personal assistant that helps me see my schedule clearly, plan ahead, and stay on top of multiple commitments with consistent check-ins."
        summary="I built Epiphany because managing several responsibilities at once has always been a challenge for me. Inspired by JARVIS from Marvel, I wanted an assistant that feels like ongoing support: a place to organize what is on my mind, keep track of what is coming up, and make room for personal well-being."
        snapshot={snapshot}
        tags={tags}
        actions={(
          <a
            href="https://github.com/LeoChimal09/Epiphany"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-b border-sky-400 pb-2 text-sm font-medium text-sky-200 hover:text-white transition-colors"
          >
            <FaGithub size={14} />
            View on GitHub
          </a>
        )}
      />

      <section className="page-section pt-0">
        <div className="page-container">
          <p className="page-eyebrow mb-2">Product View</p>
          <h2 className="mb-6 text-2xl font-bold text-white">Ask Epi Interface</h2>
          <figure className="border-y border-slate-700 py-5">
            <LightboxImage
              src="/projects/epiphany/ask-epi.webp"
              alt="Ask Epi conversation saving a personal assistant development idea as a note and confirming it was saved"
              imageClassName="object-contain"
              wrapperClassName="overflow-hidden bg-slate-900"
              wrapperStyle={{ aspectRatio: '880 / 480' }}
              sizes="(max-width: 1152px) 100vw, 1152px"
            />
            <figcaption className="mt-3 font-mono text-xs leading-relaxed text-slate-500">
              A thought becomes a saved note through conversation, with confirmation and a link back to it.
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="page-section pt-0">
        <div className="page-container">
          <div className="panel-card rounded-2xl p-8 md:p-10">
            <p className="page-eyebrow mb-2">Why I Built It</p>
            <h2 className="mb-6 text-2xl font-bold text-white">Less juggling. More confidence.</h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                When several commitments overlap, the hard part is not only doing the work.
                It is keeping a clear picture of what needs attention, finding time for it,
                and checking back before something slips through the cracks.
              </p>
              <p>
                The JARVIS inspiration was about having a dependable assistant, not simply
                a futuristic interface. I wanted clear scheduling and consistent follow-through,
                alongside personal features that pay attention to how the user is doing.
              </p>
              <div className="border-l-2 border-sky-400 bg-sky-950/10 py-2 pl-5">
                <p className="page-eyebrow mb-2 text-[10px]">Personal Impact</p>
                <p className="text-sm leading-relaxed text-slate-200">
                  I currently rely on Epiphany heavily. It makes me feel much more confident
                  about managing several responsibilities because I can see what is ahead
                  and have support checking in along the way.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section pt-0">
        <div className="page-container">
          <h2 className="mb-6 text-2xl font-bold text-white">What the project includes</h2>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map(({ title, description, icon: Icon }) => (
              <div key={title} className="panel-card-soft rounded-2xl p-6">
                <Icon className="mb-4 text-sky-400" size={22} />
                <h3 className="mb-3 font-semibold text-white">{title}</h3>
                <p className="text-sm leading-relaxed text-slate-400">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section pt-0">
        <div className="page-container">
          <h2 className="mb-6 text-2xl font-bold text-white">Screenshots</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {screenshots.map((screenshot) => (
              <figure key={screenshot.src} className="min-w-0">
                <LightboxImage
                  src={screenshot.src}
                  alt={screenshot.alt}
                  imageClassName="object-contain"
                  wrapperClassName="rounded-2xl overflow-hidden border border-slate-700/70 shadow-lg bg-slate-800"
                  wrapperStyle={{ aspectRatio: '4 / 3' }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1152px) 50vw, 560px"
                />
                <figcaption className="mt-3 text-sm leading-relaxed text-slate-400">
                  <span className="mb-1 block font-semibold text-white">{screenshot.title}</span>
                  {screenshot.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section pt-0">
        <div className="page-container">
          <h2 className="mb-6 text-2xl font-bold text-white">Tech Stack</h2>
          <div className="overflow-hidden border-y border-slate-700/80">
            <div className="grid grid-cols-[0.7fr_1.3fr] border-b border-slate-700/80 bg-slate-800/60 text-slate-200">
              <div className="px-5 py-4 text-lg font-medium">Layer</div>
              <div className="px-5 py-4 text-lg font-medium">Technology</div>
            </div>
            {techStack.map((item) => (
              <div key={item.layer} className="grid grid-cols-[0.7fr_1.3fr] border-b border-slate-700/80 last:border-b-0 bg-slate-900/30">
                <div className="px-5 py-4 text-base font-medium text-sky-300">{item.layer}</div>
                <div className="min-w-0 break-words px-5 py-4 text-base text-slate-300">{item.technology}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
