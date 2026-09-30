import type { Metadata } from 'next';
import CaseStudyHeader from '@/app/components/CaseStudyHeader';
import Link from 'next/link';
import { FaArrowLeft, FaBookOpen, FaShieldAlt, FaUsers } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Discord AI Dungeon Master & NPC Bot | Leonardo Chimal',
  description:
    'Case study: Python Discord AI roleplay bot with NPC personas, persistent MySQL memory, OpenAI-powered DM sessions, initiative tracking, character sheets, and campaign management.',
};

const tags = [
  'Python',
  'discord.py',
  'OpenAI API',
  'MySQL',
  'Railway',
  'Docker',
  'AI Game Master',
  'Persistent Memory',
  'Discord Bot',
];

const featureGroups = [
  {
    title: 'AI dungeon master flow',
    icon: FaBookOpen,
    points: [
      'Runs a real-time DM experience in Discord where players describe actions, and the AI responds with story progression, initiative updates, combat outcomes, and NPC behavior.',
      'Tracks encounter state, party actions, map movement, damage, healing, item pickup, and campaign timeline through structured tags inside generated responses.',
      'Supports multiple roles in the same session: host DM control, player character actions, monster additions, and persistent world-state updates.',
    ],
  },
  {
    title: 'Character and world persistence',
    icon: FaUsers,
    points: [
      'Stores campaign data, character sheets, NPC memory, party state, and long-term facts in MySQL so the game can continue across sessions and guilds.',
      'Allows players to import character sheets by attachment, claim ownership, view stats, and correct fields like HP, AC, and ability scores.',
      'Generates session recaps and remembers important facts between turns so the world feels coherent instead of stateless.',
    ],
  },
  {
    title: 'Production-ready bot structure',
    icon: FaShieldAlt,
    points: [
      'Separates NPC persona routing, LLM prompt construction, memory storage, and voice/Discord event handling into clear Python modules for maintainability.',
      'Supports Docker-first setup and Railway deployment with environment-based configuration for bot token, model, and database connection values.',
      'Includes utility patterns for fixed NPC mode, fallback commands, and multi-server operation without losing session continuity.',
    ],
  },
];

const systemHighlights = [
  'Command-driven bot UX: !bakugo <text> and !dm <text> for different persona modes',
  'Dungeon Master mode automatically resolves combat flow, initiative order, monster creation, and map or encounter updates',
  'Player actions can trigger AI-generated summaries, damage and healing events, loot generation, and campaign checkpoints',
  'Session memory is stored per guild and channel so multiple game tables can coexist without interference',
  'Long-term memory filters important facts and injects only the most relevant details into the current prompt context',
];

const techStack = [
  { layer: 'Bot Framework', technology: 'Python + discord.py for message handling and Discord event routing' },
  { layer: 'AI Layer', technology: 'OpenAI API for NPC dialogue, narrative generation, and session logic' },
  { layer: 'Memory / Data', technology: 'MySQL for campaign state, character sheets, encounters, and long-term memory' },
  { layer: 'Runtime / Ops', technology: 'Docker and Railway for deployment, environment config, and service hosting' },
  { layer: 'Game Systems', technology: 'Initiative tracking, combat resolution, loot logic, and campaign state management' },
];

export default function DiscordNpcPage() {
  return (
    <main className="page-shell">
      <CaseStudyHeader
        eyebrow="Featured Project — AI + Discord Systems"
        title="Discord AI Dungeon Master & NPC Bot"
        lead="Built a Python-based Discord roleplay system that turns a server into an AI-driven tabletop experience."
        summary="The project combines NPC routing, persistent memory, combat tracking, and OpenAI-powered narrative generation into a single bot that can run live sessions, manage campaign data, and maintain context across multiple players and encounters."
        tags={tags}
      />

      <section className="page-section pt-0">
        <div className="page-container">
          <h2 className="text-2xl font-bold text-white mb-6">What the bot does</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {featureGroups.map((group) => {
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
            <h2 className="text-2xl font-bold text-white mb-6">Built for live Discord roleplay sessions</h2>
            <div className="grid md:grid-cols-2 gap-6 text-slate-300">
              <div className="panel-card-soft rounded-xl p-5">
                <h3 className="text-white font-semibold mb-3">For players</h3>
                <p className="leading-relaxed text-sm mb-4">
                  Players simply talk in the Discord channel. The bot reads their actions, interprets the intent, and handles the response as if it is part of a live tabletop session.
                </p>
                <p className="leading-relaxed text-sm">
                  Commands like <span className="text-sky-300 font-mono">!dm sheet</span>, <span className="text-sky-300 font-mono">!dm recap</span>, or <span className="text-sky-300 font-mono">!dm loot</span> help manage sheets, session summary, and gameplay details in a very accessible way.
                </p>
              </div>
              <div className="panel-card-soft rounded-xl p-5">
                <h3 className="text-white font-semibold mb-3">For the host</h3>
                <p className="leading-relaxed text-sm mb-4">
                  The DM or host can start and end a session, set a campaign premise, checkpoint story progression, and let the AI manage in-session events without needing to manually run every detail.
                </p>
                <p className="leading-relaxed text-sm">
                  The bot can manage enemy turns, combat flow, damage resolution, initiative, and world state while keeping the session readable and structured for the whole server.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section pt-0">
        <div className="page-container">
          <div className="panel-card rounded-2xl p-8 md:p-10">
            <p className="page-eyebrow mb-2">System highlights</p>
            <h2 className="text-2xl font-bold text-white mb-6">Real session logic, not just text replies</h2>
            <ul className="space-y-3">
              {systemHighlights.map((item) => (
                <li key={item} className="flex gap-3 text-slate-300 text-sm leading-relaxed">
                  <span className="text-blue-400 mt-0.5 shrink-0">▸</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 border-l-2 border-sky-400 bg-sky-950/10 py-2 pl-5">
              <p className="page-eyebrow mb-2 text-[10px]">Custom Discord services</p>
              <p className="text-slate-200 leading-relaxed text-sm">
                I also design and develop custom Discord systems for communities, gaming groups, and businesses that want a more tailored experience, including AI NPCs, dungeon master workflows, moderation systems, and branded automations. If you&apos;re looking for a custom Discord setup built around your server, I&apos;m open to discussing the project.
              </p>
              <p className="mt-3 text-slate-300 text-sm">
                Reach out by email to talk through the idea, scope, and next steps.
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
