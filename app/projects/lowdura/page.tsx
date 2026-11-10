import type { Metadata } from 'next';
import CaseStudyHeader from '@/app/components/CaseStudyHeader';

export const metadata: Metadata = {
  title: 'LowDura | Leonardo Chimal',
  description:
    'LowDura is a local-first video review tool that finds dialogue sections in long gameplay recordings and exports approved clips with FFmpeg.',
};

const tags = [
  'Next.js 16',
  'React 19',
  'TypeScript',
  'Bun',
  'FFmpeg',
  'Audio Signal Analysis',
  'Local Video Processing',
];

const workflow = [
  {
    title: 'Analyze a long recording',
    detail:
      'LowDura scans local gameplay footage and uses audio energy and activity to identify likely dialogue sections, grouping speech across natural pauses.',
  },
  {
    title: 'Review the sections',
    detail:
      'A review studio turns the scan into separate candidate clips. Keep the moments worth sharing, remove the misses, and adjust the selected sections before export.',
  },
  {
    title: 'Cut locally with FFmpeg',
    detail:
      'Export a small review-project JSON file, then run the local Bun command to create the finished YouTube and Shorts files from the original recording.',
  },
];

export default function LowDuraPage() {
  return (
    <main className="page-shell">
      <CaseStudyHeader
        eyebrow="Featured Project — Local Creator Tool"
        title="LowDura"
        lead="A local-first editing workflow for turning hours of gameplay into sections worth watching."
        summary="The idea came after I recorded gameplay and realized it would be wasteful not to share it, but manually editing hours of footage was a barrier. LowDura finds likely dialogue moments, lets me review them as separate clips, and cuts the approved sections on my machine."
        tags={tags}
      />

      <section className="page-section pt-0">
        <div className="page-container">
          <p className="page-eyebrow mb-2">Output sample</p>
          <h2 className="mb-6 text-2xl font-bold text-white">Dead by Daylight gameplay edit</h2>
          <figure>
            <div className="aspect-video overflow-hidden border-y border-slate-700 bg-black">
              <iframe
                src="https://www.youtube-nocookie.com/embed/YQ4-IwAwHyU"
                title="Dead by Daylight gameplay edited with LowDura"
                className="size-full"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
            <figcaption className="mt-3 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500">
              <span>A gameplay video with friends, edited using LowDura.</span>
              <a
                href="https://youtu.be/YQ4-IwAwHyU"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-300 transition-colors hover:text-white"
              >
                Watch on YouTube
              </a>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="page-section pt-0">
        <div className="page-container grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="page-eyebrow mb-3">The problem</p>
            <h2 className="text-2xl font-bold text-white">Hours of footage, one useful moment at a time.</h2>
          </div>
          <div className="space-y-4 text-sm leading-relaxed text-slate-300">
            <p>
              Capturing gameplay is easy; finding the moments worth editing can mean scrubbing through hours of recording. That made sharing a good session feel like a second project of its own.
            </p>
            <p>
              LowDura turns that first pass into a review workflow. Instead of starting from a blank timeline, I can work through candidate sections and keep only the parts I want to publish.
            </p>
          </div>
        </div>
      </section>

      <section className="page-section pt-0">
        <div className="page-container">
          <p className="page-eyebrow mb-2">Workflow</p>
          <h2 className="mb-7 text-2xl font-bold text-white">From recording to selected clips</h2>
          <div className="border-y border-slate-700/80">
            {workflow.map((step, index) => (
              <article key={step.title} className="grid gap-3 border-b border-slate-800 py-5 last:border-b-0 sm:grid-cols-[3rem_0.65fr_1.35fr] sm:gap-5">
                <span className="dossier-index">0{index + 1}</span>
                <h3 className="font-semibold text-white">{step.title}</h3>
                <p className="text-sm leading-relaxed text-slate-400">{step.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section pt-0">
        <div className="page-container grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="page-eyebrow mb-3">Built for local editing</p>
            <h2 className="text-2xl font-bold text-white">Keep the source recording on your machine.</h2>
          </div>
          <div className="space-y-4 text-sm leading-relaxed text-slate-300">
            <p>
              The review project stores the chosen timestamps, not a re-encoded copy of the full recording. The local FFmpeg cutter uses that project to write final files into separate YouTube and Shorts output folders.
            </p>
            <p>
              Local analysis and cutting work without an AI service. Optional AI enrichment can add transcription and semantic moment detection when a server-side API key is configured.
            </p>
            <p className="border-l border-sky-400/60 pl-4 font-mono text-xs text-sky-200">
              bun run cut --project my-session_lowdura-project.json
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}