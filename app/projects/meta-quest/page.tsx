import LightboxImage from '@/app/components/LightboxImage';
import CaseStudyHeader from '@/app/components/CaseStudyHeader';
import Link from 'next/link';
import type { Metadata } from 'next';
import { FaArrowLeft, FaExternalLinkAlt } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Meta Quest Slide-Lock Attachment | Leonardo Chimal',
  description:
    'Case study: custom Meta Quest dual-controller slide-lock attachment designed through iterative CAD development, 3D printing, ergonomic testing, and physical prototype refinement. Published on MakerWorld.',
};

const photos = [
  { src: '/projects/meta-quest/in-hand-1.webp', alt: 'Assembled attachment held in both hands' },
  { src: '/projects/meta-quest/parts.webp', alt: 'Individual printed parts laid out' },
  { src: '/projects/meta-quest/in-hand-2.webp', alt: 'Two-handed grip demonstration' },
];

const tags = ['Onshape', 'CAD', '3D Printing', 'Mechanical Design', 'Product Design', 'Ergonomics'];

const cadRenders = [
  { src: '/projects/meta-quest/cad-exploded.webp', alt: 'CAD render — exploded colorized view' },
  { src: '/projects/meta-quest/cad-gray.webp', alt: 'CAD render — gray technical view' },
];

const iterations = [
  {
    version: 'v1',
    title: 'Initial Prototype',
    description:
      'First print focused on basic dual-controller mounting. Established the slide-lock rail concept and validated controller fit geometry.',
  },
  {
    version: 'v2',
    title: 'Ergonomic Refinement',
    description:
      'Revised grip angle and handle width based on physical testing. Added thumb rests and improved wrist alignment for extended use sessions.',
  },
  {
    version: 'v3',
    title: 'Structural + Locking',
    description:
      'Reinforced slide-lock mechanism to prevent play under load. Tightened controller cradle tolerances for a secure, rattle-free fit. Published on MakerWorld.',
  },
];

export default function MetaQuestPage() {
  return (
    <main className="page-shell">
      <CaseStudyHeader
        eyebrow="Featured Project - Product Design & Prototyping"
        title="Meta Quest Dual Controller Slide-Lock Attachment"
        lead="Designed and prototyped a custom Meta Quest dual-controller slide-lock attachment focused on improving two-handed stability, ergonomic handling, and mechanical locking functionality."
        summary="The project used iterative CAD development and physical testing to refine usability, structural durability, controller alignment accuracy, and the slide-lock mechanism across multiple Onshape and 3D printing iterations."
        tags={tags}
        actions={(
          <a
            href="https://makerworld.com/en/models/2835479-meta-quest-3-controller-gun-attachment"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-sky-500/40 bg-sky-950/40 px-4 py-2 text-sm font-medium text-sky-200 hover:border-sky-300 hover:text-white transition-colors"
          >
            View on MakerWorld <FaExternalLinkAlt size={12} />
          </a>
        )}
      />

      {/* Physical photos */}
      <section className="page-section pt-0">
        <div className="page-container">
        <h2 className="text-2xl font-bold mb-6">Physical Prototype</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {photos.map((img) => (
            <LightboxImage
              key={img.src}
              src={img.src}
              alt={img.alt}
              wrapperClassName="aspect-square panel-card-soft rounded-2xl overflow-hidden shadow-lg"
              imageClassName="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          ))}
        </div>
        <p className="text-slate-500 text-xs font-mono mt-3 text-center">
          in-hand-1.webp · parts.webp · in-hand-2.webp
        </p>
        </div>
      </section>

      {/* CAD renders */}
      <section className="page-section pt-0">
        <div className="page-container">
        <h2 className="text-2xl font-bold mb-6">CAD Renders</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {cadRenders.map((img) => (
            <LightboxImage
              key={img.src}
              src={img.src}
              alt={img.alt}
              wrapperClassName="aspect-video bg-white rounded-xl overflow-hidden border border-slate-700 shadow-lg"
              imageClassName="object-contain p-6"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          ))}
        </div>
        <p className="text-slate-500 text-xs font-mono mt-3 text-center">
          cad-exploded.webp · cad-gray.webp
        </p>
        </div>
      </section>

      {/* Design iterations */}
      <section className="page-section pt-0">
        <div className="page-container">
        <h2 className="text-2xl font-bold mb-8">Design Iterations</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {iterations.map((iter) => (
            <div
              key={iter.version}
              className="panel-card-soft rounded-2xl p-6 hover:border-sky-400/45 transition-colors"
            >
              <span className="page-eyebrow text-[10px]">
                {iter.version}
              </span>
              <h3 className="text-white font-semibold text-lg mt-1 mb-3">{iter.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{iter.description}</p>
            </div>
          ))}
        </div>
        </div>
      </section>

      {/* Footer nav */}
      <div className="page-container px-6 pb-20 flex justify-between items-center border-t border-slate-800 pt-8">
        <Link
          href="/projects/drone"
          className="inline-flex items-center gap-2 text-slate-400 hover:text-sky-300 transition-colors text-sm"
        >
          <FaArrowLeft size={12} /> Prev: AI Drone Platform
        </Link>
        <Link
          href="/projects"
          className="text-sm text-sky-300 hover:text-white transition-colors"
        >
          Back to Projects →
        </Link>
      </div>
    </main>
  );
}
