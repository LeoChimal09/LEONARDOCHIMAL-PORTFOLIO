import type { Metadata } from 'next';
import CaseStudyHeader from '@/app/components/CaseStudyHeader';
import LightboxImage from '@/app/components/LightboxImage';
import Link from 'next/link';
import { FaArrowLeft, FaDownload, FaMicrophoneAlt, FaServer, FaVolumeUp } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Discord Soundboard Admin | Leonardo Chimal',
  description:
    'Case study: full-stack Discord soundboard admin and bot platform with audio uploads, ffmpeg conversion, MySQL metadata storage, and live voice playback.',
};

const tags = [
  'Next.js 16',
  'TypeScript',
  'Discord.js',
  'Drizzle ORM',
  'MySQL',
  'Tailwind CSS',
  'ffmpeg',
  'Audio Processing',
  'Voice Chat',
  'Admin Dashboard',
  'Railway',
];

const featureCards = [
  {
    title: 'Audio upload and processing',
    icon: FaDownload,
    points: [
      'Built an admin dashboard for uploading audio and MP4 files, converting them to a consistent playable format with ffmpeg, and normalizing them for a Discord soundboard workflow.',
      'Handles clip naming, storage, and management so soundboard entries are clean, searchable, and consistent across the project.',
      'Supports a workflow where content can be trimmed, labeled, and organized before it is used in live voice channels.',
    ],
  },
  {
    title: 'Live Discord playback',
    icon: FaVolumeUp,
    points: [
      'The Discord bot can join a voice channel and play a selected clip on command, making the system useful as an actual community tool rather than just a dashboard.',
      'Clip names are normalized and matched with fuzzy lookup so users can type a friendly command instead of an exact rigid identifier.',
      'The bot uses shared database-backed clip metadata so the admin UI and Discord runtime stay in sync.',
    ],
  },
  {
    title: 'Production-oriented stack',
    icon: FaServer,
    points: [
      'Uses Next.js for the web admin, a Discord bot for runtime behavior, and MySQL for persistent clip metadata and access control patterns.',
      'Runs in a deployment-first setup with Railway and Docker-friendly local development while keeping the admin app and bot logically separated.',
      'Designed as a reusable platform for managing custom soundboards in real Discord communities.',
    ],
  },
];

const techStack = [
  { layer: 'Frontend / API', technology: 'Next.js 16 (App Router), React 19, TypeScript' },
  { layer: 'Discord Runtime', technology: 'discord.js for voice playback and bot commands' },
  { layer: 'Media Processing', technology: 'ffmpeg for audio conversion and trimming workflows' },
  { layer: 'ORM / Database', technology: 'Drizzle ORM, MySQL for stored clip metadata and server data' },
  { layer: 'Styling', technology: 'Tailwind CSS for the admin dashboard UI' },
  { layer: 'Hosting', technology: 'Railway for deployment and cloud runtime' },
];

export default function DiscordSoundboardPage() {
  return (
    <main className="page-shell">
      <CaseStudyHeader
        eyebrow="Featured Project — Full-Stack Discord App"
        title="Discord Soundboard Admin"
        lead="Created a full-stack Discord soundboard platform that pairs a modern admin dashboard with a live voice playback bot."
        summary="The app gives a server admin a way to upload, trim, organize, and manage sound clips while a Discord bot reads from the same source of truth and plays them into voice channels on demand."
        tags={tags}
        actions={(
          <a
            href="https://djsoundboard.up.railway.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-b border-sky-400 pb-2 text-sm font-medium text-sky-200 hover:text-white transition-colors"
          >
            <FaMicrophoneAlt size={14} /> Open live demo
          </a>
        )}
      />

      <section className="page-section pt-0">
        <div className="page-container">
          <p className="page-eyebrow mb-2">Product View</p>
          <h2 className="mb-6 text-2xl font-bold text-white">Soundboard Admin Interface</h2>
          <figure className="border-y border-slate-700 py-5">
            <LightboxImage
              src="/projects/discord-soundboard/soundboard-admin-home.png"
              alt="Soundboard Admin landing page with a live clip management interface"
              imageClassName="object-cover object-top"
              wrapperClassName="overflow-hidden bg-slate-900"
              wrapperStyle={{ aspectRatio: '1876 / 903' }}
              sizes="(max-width: 1152px) 100vw, 1152px"
            />
            <figcaption className="mt-3 font-mono text-xs text-slate-500">
              Public landing page previewing clip organization, commands, and bot status.
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="page-section pt-0">
        <div className="page-container">
          <h2 className="text-2xl font-bold text-white mb-6">What the project includes</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {featureCards.map((group) => {
              const Icon = group.icon;
              return (
                <div key={group.title} className="panel-card-soft rounded-2xl p-6">
                  <Icon className="text-sky-400 mb-4" size={22} />
                  <h3 className="text-white font-semibold mb-4">{group.title}</h3>
                  <ul className="space-y-3">
                    {group.points.map((point) => (
                      <li key={point} className="flex gap-3 text-sm text-slate-400 leading-relaxed">
                        <span className="text-sky-400 mt-0.5 shrink-0">▸</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="page-section pt-0">
        <div className="page-container">
          <div className="panel-card rounded-2xl p-8 md:p-10">
            <p className="page-eyebrow mb-2">How it works</p>
            <h2 className="text-2xl font-bold text-white mb-6">Simple for users, powerful for server admins</h2>
            <div className="grid md:grid-cols-2 gap-6 text-slate-300">
              <div className="panel-card-soft rounded-xl p-5">
                <h3 className="text-white font-semibold mb-3">For the bot user</h3>
                <p className="leading-relaxed text-sm mb-4">
                  A Discord user types a clip name like <span className="text-sky-300 font-mono">!play dragon-roar</span> or a similar command configured for the server. The bot joins the voice channel, loads the sound clip, and plays it instantly.
                </p>
                <p className="leading-relaxed text-sm">
                  Users can also list sounds, stop playback, or leave the channel without needing to understand how the admin system works behind the scenes.
                </p>
              </div>
              <div className="panel-card-soft rounded-xl p-5">
                <h3 className="text-white font-semibold mb-3">For the admin</h3>
                <p className="leading-relaxed text-sm mb-4">
                  The admin dashboard is where the soundboard is managed. You upload clips, normalize names, trim audio, organize content, and control what gets exposed to the Discord bot.
                </p>
                <p className="leading-relaxed text-sm">
                  Because the bot and dashboard share the same data source, the soundboard stays current without manually syncing anything between systems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section pt-0">
        <div className="page-container">
          <div className="panel-card rounded-2xl p-8 md:p-10">
            <p className="page-eyebrow mb-2">Project value</p>
            <h2 className="text-2xl font-bold text-white mb-6">A useful Discord utility with real admin tooling</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              This project is a good example of the kind of full-stack product work I enjoy: combining a polished web interface with a backend runtime service, shared data layer, and a user-facing Discord experience. The result is a system that is not just a toy bot, but a practical admin workflow for managing audio content and triggering it in real time.
            </p>
            <div className="border-l-2 border-sky-400 bg-sky-950/10 py-2 pl-5">
              <p className="page-eyebrow mb-2 text-[10px]">Custom Discord solutions</p>
              <p className="text-slate-200 leading-relaxed text-sm">
                I also help communities, gaming servers, and businesses create tailored Discord experiences, including custom soundboards, automation, moderation flows, and branded bot features. If you want a Discord system designed around your server, I&apos;m open to building it for you.
              </p>
              <p className="mt-3 text-slate-300 text-sm">
                Reach out by email to discuss your idea and the scope of the project.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section pt-0">
        <div className="page-container">
          <h2 className="text-2xl font-bold text-white mb-6">Tech Stack</h2>
          <div className="overflow-hidden border-y border-slate-700/80">
            <div className="grid grid-cols-[0.7fr_1.3fr] border-b border-slate-700/80 bg-slate-800/60 text-slate-200">
              <div className="px-5 py-4 text-lg font-medium text-slate-200">Layer</div>
              <div className="px-5 py-4 text-lg font-medium text-slate-200">Technology</div>
            </div>
            {techStack.map((item) => (
              <div key={item.layer} className="grid grid-cols-[0.7fr_1.3fr] border-b border-slate-700/80 last:border-b-0 bg-slate-900/30">
                <div className="px-5 py-4 text-base text-sky-300 font-medium">{item.layer}</div>
                <div className="px-5 py-4 text-base text-slate-300">{item.technology}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="page-container px-6 pb-20 flex justify-between items-center border-t border-slate-800 pt-8">
        <Link href="/projects" className="inline-flex items-center gap-2 text-slate-400 hover:text-sky-300 transition-colors text-sm">
          <FaArrowLeft size={12} /> Back to Projects
        </Link>
      </div>
    </main>
  );
}
