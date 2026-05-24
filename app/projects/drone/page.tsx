import LightboxImage from '@/app/components/LightboxImage';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';

const specs = [
  { label: 'Total Mass', value: '856g', note: 'From CAD model' },
  { label: 'Total Thrust', value: '4,000g', note: '4× AE2207 motors' },
  { label: 'Thrust-to-Weight', value: '4.7 : 1', note: 'Strong flight performance' },
  { label: 'Estimated Flight Time', value: '8 – 12 min', note: 'Average for config' },
  { label: 'Frame Size', value: '5 inch', note: 'Carbon fiber / PETG prototype' },
  { label: 'COM X', value: '0.006 mm', note: 'Perfect left-right balance' },
  { label: 'COM Y', value: '-1.228 mm', note: 'Excellent front-back offset' },
  { label: 'COM Z', value: '-2.854 mm', note: 'Lower center → improved stability' },
];

const coreComponents = [
  { component: 'Transmitter', item: 'RadioMaster Pocket ELRS', price: '$80' },
  { component: 'Flight Controller + ESC', item: 'SpeedyBee F405 V4 Stack', price: '$68' },
  { component: 'Motors (×4)', item: 'Axisflying AE2207 1860KV', price: '$66' },
  { component: 'Battery Charger', item: 'ISDT 608PD Smart Charger', price: '$30' },
  { component: 'Radio Receiver', item: 'RadioMaster RP1 ELRS Nano', price: '$22' },
  { component: 'Mounting Hardware', item: 'Metric M2/M3 Hardware Kit', price: '$19' },
  { component: 'Battery', item: 'Ovonic 4S 1300mAh XT60 LiPo', price: '$18' },
  { component: 'Propellers', item: 'HQProp 5×4.8×3 Tri-Blade Set', price: '$10' },
  { component: 'Wiring', item: '16–30AWG Silicone Wire Kit', price: '$11' },
  { component: 'Soldering Kit', item: 'Eoppen Solder Seal + Heat Shrink Kit', price: '$37' },
  { component: 'Smoke Stopper', item: 'Pasotim Smart Smoke Stopper', price: '$12' },
  { component: 'Multimeter', item: 'KAIWEETS Digital Multimeter', price: '$14' },
  { component: 'Frame', item: 'Source One V5 / Mark4 (PETG Prototype)', price: '$0' },
];

const aiComponents = [
  { component: 'AI Computer', item: 'Raspberry Pi 5 (8GB)', price: '$100' },
  { component: 'Camera Module', item: 'Raspberry Pi Camera Module 3', price: '$35' },
  { component: 'GPS Module', item: 'BN-220 MAVLink GPS', price: '$30' },
  { component: 'Voltage Regulator', item: 'Matek 5V 5A BEC', price: '$15' },
  { component: 'Distance Sensor', item: 'HC-SR04 Ultrasonic Sensor', price: '$5' },
  { component: 'SD Card', item: 'Samsung EVO 64GB', price: '$15' },
  { component: 'Cooling', item: 'Raspberry Pi Cooler', price: '$20' },
];

const cadImages = [
  { src: '/projects/drone/top.webp', alt: 'Top-down CAD view' },
  { src: '/projects/drone/isometric.webp', alt: 'Isometric CAD view' },
  { src: '/projects/drone/side.webp', alt: 'Side CAD view' },
  { src: '/projects/drone/front.webp', alt: 'Front CAD view' },
];

export default function DronePage() {
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
          Featured Project — CAD & Embedded Systems
        </p>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
          Autonomous AI Drone Platform
        </h1>
        <p className="text-slate-400 text-lg max-w-3xl leading-relaxed mb-6">
          A modular 5-inch FPV drone designed and prototyped entirely in Onshape — integrating
          embedded electronics, custom power distribution, vibration-isolated mounting systems,
          and a planned autonomous AI stack powered by Raspberry Pi 5, GPS, and computer vision.
          Focused on iterative CAD development, component integration, weight optimization, and
          maintainable mechanical design workflows.
        </p>
        <div className="flex flex-wrap gap-2">
          {['Onshape', 'CAD', '3D Printing', 'PETG', 'Embedded Systems', 'Python', 'Raspberry Pi', 'Drone Systems', 'Mechanical Design'].map((t) => (
            <span
              key={t}
              className="px-3 py-1 text-blue-300 font-mono text-xs border border-blue-800/50 rounded-full bg-blue-900/20"
            >
              {t}
            </span>
          ))}
        </div>
      </section>

      {/* CAD Image Gallery */}
      <section className="max-w-5xl mx-auto px-6 mb-20">
        <h2 className="text-2xl font-bold mb-6 text-white">CAD Renders</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {cadImages.map((img) => (
            <LightboxImage
              key={img.src}
              src={img.src}
              alt={img.alt}
              wrapperClassName="aspect-square bg-white rounded-xl overflow-hidden border border-slate-700 shadow-lg"
              imageClassName="object-contain p-6"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          ))}
        </div>
        <p className="text-slate-500 text-xs font-mono mt-3 text-center">
          top.webp · isometric.webp · side.webp · front.webp
        </p>
      </section>

      {/* Technical Specs */}
      <section className="max-w-5xl mx-auto px-6 mb-20">
        <h2 className="text-2xl font-bold mb-8">Technical Specs</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {specs.map((s) => (
            <div key={s.label} className="bg-slate-800 border border-slate-700 rounded-lg p-5">
              <p className="text-blue-400 font-mono text-xs uppercase tracking-wider mb-1">{s.label}</p>
              <p className="text-white text-xl font-bold">{s.value}</p>
              <p className="text-slate-500 text-xs mt-1">{s.note}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Core BOM */}
      <section className="max-w-5xl mx-auto px-6 mb-20">
        <h2 className="text-2xl font-bold mb-6">Core Build — Bill of Materials</h2>
        <div className="overflow-x-auto rounded-xl border border-slate-700">
          <table className="w-full text-sm">
            <thead className="bg-slate-800 text-slate-400 font-mono text-xs uppercase">
              <tr>
                <th className="text-left px-5 py-3">Component</th>
                <th className="text-left px-5 py-3">Item</th>
                <th className="text-right px-5 py-3">Price</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {coreComponents.map((c) => (
                <tr key={c.component} className="bg-slate-900 hover:bg-slate-800 transition-colors">
                  <td className="px-5 py-3 text-slate-300 font-medium">{c.component}</td>
                  <td className="px-5 py-3 text-slate-400">{c.item}</td>
                  <td className="px-5 py-3 text-blue-400 font-mono text-right">{c.price}</td>
                </tr>
              ))}
              <tr className="bg-slate-800 border-t-2 border-blue-900/50">
                <td className="px-5 py-3 text-white font-bold" colSpan={2}>Core Build Total</td>
                <td className="px-5 py-3 text-blue-400 font-bold font-mono text-right">$395</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* AI Expansion */}
      <section className="max-w-5xl mx-auto px-6 mb-20">
        <div className="bg-gradient-to-br from-slate-800/60 to-blue-950/30 border border-blue-900/40 rounded-xl p-8">
          <p className="text-blue-400 font-mono text-xs uppercase tracking-widest mb-2">Phase 2</p>
          <h2 className="text-2xl font-bold mb-3">Autonomous AI Expansion</h2>
          <p className="text-slate-400 mb-8 leading-relaxed max-w-2xl">
            The second build phase integrates a Raspberry Pi 5 for onboard AI processing, computer
            vision via the Camera Module 3, GPS-based autonomous navigation, and ultrasonic obstacle
            avoidance — enabling fully self-guided flight.
          </p>
          <div className="overflow-x-auto rounded-xl border border-slate-700/50">
            <table className="w-full text-sm">
              <thead className="bg-slate-900/80 text-slate-400 font-mono text-xs uppercase">
                <tr>
                  <th className="text-left px-5 py-3">Component</th>
                  <th className="text-left px-5 py-3">Item</th>
                  <th className="text-right px-5 py-3">Price</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/50">
                {aiComponents.map((c) => (
                  <tr key={c.component} className="bg-slate-900/40 hover:bg-slate-800/60 transition-colors">
                    <td className="px-5 py-3 text-slate-300 font-medium">{c.component}</td>
                    <td className="px-5 py-3 text-slate-400">{c.item}</td>
                    <td className="px-5 py-3 text-blue-400 font-mono text-right">{c.price}</td>
                  </tr>
                ))}
                <tr className="bg-slate-800/60 border-t-2 border-blue-900/50">
                  <td className="px-5 py-3 text-white font-bold" colSpan={2}>AI Module Total</td>
                  <td className="px-5 py-3 text-blue-400 font-bold font-mono text-right">$220</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Footer nav */}
      <div className="max-w-5xl mx-auto px-6 pb-20 flex justify-between items-center border-t border-slate-800 pt-8">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors text-sm"
        >
          <FaArrowLeft size={12} /> Back to Projects
        </Link>
        <Link
          href="/projects/meta-quest"
          className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
        >
          Next Project: Meta Quest SlideLock →
        </Link>
      </div>
    </main>
  );
}
