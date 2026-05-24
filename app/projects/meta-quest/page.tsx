import LightboxImage from '@/app/components/LightboxImage';
import Link from 'next/link';
import type { Metadata } from 'next';
import { FaArrowLeft, FaExternalLinkAlt } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Meta Quest SlideLock Attachment | Leonardo Chimal',
  description:
    'Case study: custom Meta Quest dual-controller slide-lock attachment designed and prototyped through iterative CAD development in Onshape and PETG 3D printing. Published on MakerWorld.',
};

const photos = [
  { src: '/projects/meta-quest/in-hand-1.webp', alt: 'Assembled attachment held in both hands' },
  { src: '/projects/meta-quest/parts.webp', alt: 'Individual printed parts laid out' },
  { src: '/projects/meta-quest/in-hand-2.webp', alt: 'Two-handed grip demonstration' },
];

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
      'Reinforced slide-lock mechanism to prevent play under load. Tightened controller cradle tolerances for a secure, rattle-free fit. Published on Cults3D.',
  },
];

export default function MetaQuestPage() {
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
          Featured Project — Product Design & Prototyping
        </p>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
          Meta Quest Dual Controller<br />SlideLock Attachment
        </h1>
        <p className="text-slate-400 text-lg max-w-3xl leading-relaxed mb-6">
          A custom Meta Quest dual-controller slide-lock attachment designed and prototyped through
          iterative CAD development and physical testing. Improves two-handed stability, ergonomic
          handling, and mechanical locking functionality. Multiple design iterations using Onshape
          and PETG 3D printing refined usability, structural durability, and controller alignment
          accuracy. Published and available on Cults3D.
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex flex-wrap gap-2">
            {['Onshape', 'CAD', '3D Printing', 'PETG', 'Product Design', 'Ergonomics', 'Mechanical Design'].map((t) => (
              <span
                key={t}
                className="px-3 py-1 text-blue-300 font-mono text-xs border border-blue-800/50 rounded-full bg-blue-900/20"
              >
                {t}
              </span>
            ))}
          </div>
          <a
            href="https://makerworld.com/en/models/2835479-meta-quest-3-controller-gun-attachment"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-1.5 border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white rounded text-sm font-medium transition-colors"
          >
            View on MakerWorld <FaExternalLinkAlt size={12} />
          </a>
        </div>
      </section>

      {/* Physical photos */}
      <section className="max-w-5xl mx-auto px-6 mb-16">
        <h2 className="text-2xl font-bold mb-6">Physical Prototype</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {photos.map((img) => (
            <LightboxImage
              key={img.src}
              src={img.src}
              alt={img.alt}
              wrapperClassName="aspect-square bg-slate-800 rounded-xl overflow-hidden border border-slate-700 shadow-lg"
              imageClassName="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          ))}
        </div>
        <p className="text-slate-500 text-xs font-mono mt-3 text-center">
          in-hand-1.webp · parts.webp · in-hand-2.webp
        </p>
      </section>

      {/* CAD renders */}
      <section className="max-w-5xl mx-auto px-6 mb-20">
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
      </section>

      {/* Design iterations */}
      <section className="max-w-5xl mx-auto px-6 mb-20">
        <h2 className="text-2xl font-bold mb-8">Design Iterations</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {iterations.map((iter) => (
            <div
              key={iter.version}
              className="bg-slate-800 border border-slate-700 rounded-xl p-6 hover:border-blue-500/50 transition-colors"
            >
              <span className="text-blue-400 font-mono text-xs uppercase tracking-widest">
                {iter.version}
              </span>
              <h3 className="text-white font-semibold text-lg mt-1 mb-3">{iter.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{iter.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer nav */}
      <div className="max-w-5xl mx-auto px-6 pb-20 flex justify-between items-center border-t border-slate-800 pt-8">
        <Link
          href="/projects/drone"
          className="inline-flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors text-sm"
        >
          <FaArrowLeft size={12} /> Prev: AI Drone Platform
        </Link>
        <Link
          href="/#projects"
          className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
        >
          Back to Projects →
        </Link>
      </div>
    </main>
  );
}
