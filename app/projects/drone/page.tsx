import LightboxImage from '@/app/components/LightboxImage';
import CaseStudyHeader from '@/app/components/CaseStudyHeader';
import Link from 'next/link';
import type { Metadata } from 'next';
import { FaArrowLeft, FaCheckCircle, FaMicrochip, FaProjectDiagram, FaTools } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Autonomous AI Drone Platform | Leonardo Chimal',
  description:
    'Engineering case study: modular 5-inch autonomous drone platform covering CAD-driven design, embedded electronics, power distribution, vibration-aware mounting, ESC soldering, validation checks, and autonomous expansion planning.',
};

const projectSnapshot = [
  { label: 'Current Phase', value: 'Bench Integration', note: 'CAD model to powered prototype' },
  { label: 'Main Skill Growth', value: 'ESC Soldering', note: 'Motor phase wires, heat control, continuity checks' },
  { label: 'Systems Focus', value: 'Signal + Power', note: 'ELRS, flight controller, ESC, 4S LiPo path' },
  { label: 'Next Milestone', value: 'Safe Spin-Up', note: 'Motor order, direction, failsafe, vibration checks' },
];

const tags = ['Onshape', 'CAD', '3D Printing', 'ESC Soldering', 'ELRS', 'Betaflight', 'Embedded Systems', 'Power Distribution', 'Mechanical Design', 'Raspberry Pi'];

const specs = [
  { label: 'Total Mass', value: '856g', note: 'CAD-estimated assembled mass' },
  { label: 'Total Thrust', value: '4,000g', note: '4x AE2207 motors' },
  { label: 'Thrust-to-Weight', value: '4.7 : 1', note: 'Design target before flight testing' },
  { label: 'Estimated Flight Time', value: '8-12 min', note: 'Expected range for current configuration' },
  { label: 'Frame Size', value: '5 inch', note: '3D-printed prototype / future carbon frame' },
  { label: 'COM X', value: '0.006 mm', note: 'Left-right balance from CAD' },
  { label: 'COM Y', value: '-1.228 mm', note: 'Front-back offset from CAD' },
  { label: 'COM Z', value: '-2.854 mm', note: 'Lower center of mass for stability' },
];

const coreComponents = [
  { role: 'Pilot Link', component: 'RadioMaster Pocket ELRS', engineeringUse: 'Long-range low-latency command input and failsafe behavior' },
  { role: 'Receiver', component: 'RadioMaster RP1 ELRS Nano', engineeringUse: 'Receives radio packets and passes control data to the flight controller' },
  { role: 'Flight Control', component: 'SpeedyBee F405 V4', engineeringUse: 'Gyro sensing, input mixing, motor output control, Betaflight configuration' },
  { role: 'Power Switching', component: 'SpeedyBee 4-in-1 ESC', engineeringUse: 'Converts battery power into three-phase motor drive commands' },
  { role: 'Actuation', component: 'Axisflying AE2207 1860KV Motors', engineeringUse: 'Thrust generation, motor direction, phase-wire soldering practice' },
  { role: 'Energy Storage', component: 'Ovonic 4S 1300mAh XT60 LiPo', engineeringUse: 'High-current power source requiring polarity, insulation, and safety checks' },
  { role: 'Mechanical Platform', component: 'Source One / Mark4 Prototype', engineeringUse: 'Fit checks, service access, mass distribution, and mount iteration' },
];

const learningApplications = [
  {
    title: 'Motor-to-ESC Soldering',
    icon: FaTools,
    points: [
      'Prepared ESC pads and motor leads before joining them so each connection wets cleanly.',
      'Practiced heat control to avoid cold joints, lifted pads, or melted insulation near high-current wiring.',
      'Used continuity and visual inspection to check for bridged pads before applying battery power.',
    ],
  },
  {
    title: 'Embedded Communication Flow',
    icon: FaProjectDiagram,
    points: [
      'Mapped how ELRS receiver data reaches the flight controller and becomes motor commands.',
      'Connected the physical wiring work to the software configuration needed for motor order, arming, and failsafe behavior.',
      'Learned the difference between low-current signal wiring and high-current battery / motor paths.',
    ],
  },
  {
    title: 'Mechanical + Electrical Integration',
    icon: FaMicrochip,
    points: [
      'Routed battery leads, motor wires, receiver wiring, and controller mounting around service access constraints.',
      'Balanced CAD intent with real-world cable bend radius, connector clearance, and vibration exposure.',
      'Kept the build modular enough to troubleshoot electronics without tearing down the whole frame.',
    ],
  },
];

const systemPaths = [
  {
    label: 'Command Signal Path',
    path: 'Transmitter -> ELRS receiver -> flight controller -> ESC protocol -> motor outputs',
    detail:
      'The receiver sends pilot input to the flight controller, where gyro feedback and control logic are mixed into individual motor commands.',
  },
  {
    label: 'High-Current Power Path',
    path: '4S LiPo -> XT60 wiring -> 4-in-1 ESC -> motor phase wires -> brushless motors',
    detail:
      'The ESC switches battery power into three motor phases, so solder quality, polarity awareness, and insulation directly affect reliability.',
  },
  {
    label: 'Regulated Electronics Path',
    path: 'Battery / ESC rail -> regulated 5V -> flight controller + receiver',
    detail:
      'Control electronics need stable regulated power, separated mentally and physically from the high-current motor wiring.',
  },
  {
    label: 'Future Autonomy Path',
    path: 'Raspberry Pi 5 -> camera / GPS processing -> flight-controller interface',
    detail:
      'The autonomy layer is planned as a companion-computer expansion after manual flight, safety checks, and baseline control are proven.',
  },
];

const validationChecks = [
  { check: 'Continuity Before Power', result: 'Verify no solder bridges between ESC pads, battery pads, or motor phase outputs.' },
  { check: 'Polarity + Insulation Review', result: 'Confirm XT60 polarity, strain relief, heat shrink coverage, and safe wire routing.' },
  { check: 'Smoke-Stopper Power-Up', result: 'Use a current-limiting first-power check before connecting the LiPo directly.' },
  { check: 'Motor Order + Direction', result: 'Confirm each motor maps to the expected output and spins the correct direction before prop testing.' },
  { check: 'Failsafe Behavior', result: 'Validate receiver loss behavior so the drone disarms safely when radio control is interrupted.' },
  { check: 'Vibration + Clearance', result: 'Inspect controller mounting, prop clearance, wire slack, and fastener tightness after bench spin-up.' },
];

const aiComponents = [
  { component: 'Raspberry Pi 5', role: 'Companion computer for onboard perception and autonomy experiments' },
  { component: 'Camera Module 3', role: 'Vision input for object detection, landing targets, or navigation research' },
  { component: 'BN-220 GPS', role: 'Position estimate for waypoint and return-to-home experiments' },
  { component: '5V BEC', role: 'Dedicated regulated power for autonomy electronics' },
  { component: 'Telemetry / Logging', role: 'Flight data capture for debugging, tuning, and engineering review' },
];

const cadImages = [
  { src: '/projects/drone/top.webp', alt: 'Top-down CAD view' },
  { src: '/projects/drone/isometric.webp', alt: 'Isometric CAD view' },
  { src: '/projects/drone/side.webp', alt: 'Side CAD view' },
  { src: '/projects/drone/front.webp', alt: 'Front CAD view' },
];

const buildImages = [
  {
    src: '/projects/drone/drone.webp',
    alt: 'Powered drone prototype with the flight controller LEDs on',
    caption: 'Powered bench assembly showing the flight controller mounted, motor wiring routed, and battery leads prepared for controlled testing.',
  },
  {
    src: '/projects/drone/motor-esc-soldering.webp',
    alt: 'Close-up of motor wires soldered to an electronic speed controller board',
    caption: 'Close-up evidence of the current skill milestone: soldering motor phase wires directly to the ESC pads and inspecting the joints.',
  },
];

export default function DronePage() {
  return (
    <main className="page-shell">
      <CaseStudyHeader
        eyebrow="Engineering Case Study - CAD, Electronics, Controls"
        title="Autonomous AI Drone Platform"
        lead="Designed and prototyped a modular 5-inch autonomous drone platform in Onshape integrating embedded electronics, power distribution, vibration-aware mounting, and future autonomous system integration."
        summary="The current milestone is bench integration. I moved beyond CAD modeling into soldering motor leads to the ESC, routing high-current power, mounting the flight controller, and learning how commands move from transmitter to receiver to flight controller to ESC outputs before safe spin-up and flight testing."
        snapshot={projectSnapshot}
        tags={tags}
      />

      {/* Build Evidence */}
      <section className="page-section pt-0">
        <div className="page-container">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-start">
          <div>
            <p className="page-eyebrow mb-2">Current Build Evidence</p>
            <h2 className="text-2xl font-bold text-white mb-4">From CAD Model to Powered Bench Prototype</h2>
            <p className="text-slate-400 leading-relaxed mb-5">
              This stage documents what has been physically integrated, what I learned from the
              assembly, and which checks are required before the system is allowed to spin motors
              or fly.
            </p>
            <div className="space-y-3 text-sm text-slate-400">
              <p>
                <span className="text-white font-semibold">Applied learning:</span> soldering motor
                phase wires to ESC pads, routing high-current battery leads, and separating power
                wiring from signal wiring.
              </p>
              <p>
                <span className="text-white font-semibold">Engineering concern:</span> each physical
                connection affects safety, reliability, vibration tolerance, maintainability, and future debugging.
              </p>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {buildImages.map((img) => (
              <div key={img.src}>
                <LightboxImage
                  src={img.src}
                  alt={img.alt}
                  wrapperClassName="aspect-[4/5] panel-card-soft rounded-2xl overflow-hidden shadow-lg"
                  imageClassName="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <p className="text-slate-400 text-sm leading-relaxed mt-3">{img.caption}</p>
              </div>
            ))}
          </div>
        </div>
        </div>
      </section>

      {/* Applied Learning */}
      <section className="page-section pt-0">
        <div className="page-container">
        <p className="page-eyebrow mb-2">What I Am Learning and Applying</p>
        <h2 className="text-2xl font-bold mb-6">Engineering Skills Demonstrated</h2>
        <div className="grid md:grid-cols-3 gap-5">
          {learningApplications.map((item) => {
            const Icon = item.icon;

            return (
              <div key={item.title} className="panel-card-soft rounded-2xl p-6">
                <Icon className="text-sky-400 mb-4" size={22} />
                <h3 className="text-white font-semibold mb-4">{item.title}</h3>
                <ul className="space-y-3">
                  {item.points.map((point) => (
                    <li key={point} className="flex gap-3 text-sm text-slate-400 leading-relaxed">
                      <FaCheckCircle className="text-sky-400 shrink-0 mt-0.5" size={13} />
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

      {/* System Architecture */}
      <section className="page-section pt-0">
        <div className="page-container">
        <div className="panel-card rounded-2xl p-6 md:p-8">
          <p className="page-eyebrow mb-2">System Architecture</p>
          <h2 className="text-2xl font-bold mb-4">How Commands, Power, and Future Autonomy Move Through the Drone</h2>
          <p className="text-slate-400 leading-relaxed max-w-3xl mb-8">
            This build taught me to read the drone as multiple connected systems rather than a pile
            of parts. The important engineering work is understanding which paths carry data,
            which paths carry high current, and where validation has to happen before flight.
          </p>
          <div className="space-y-4">
            {systemPaths.map((item) => (
              <div key={item.label} className="panel-card-soft rounded-xl p-5">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-2">
                  <h3 className="text-white font-semibold">{item.label}</h3>
                  <p className="text-sky-300 font-mono text-xs md:text-right">{item.path}</p>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
        </div>
      </section>

      {/* Validation */}
      <section className="page-section pt-0">
        <div className="page-container">
        <p className="page-eyebrow mb-2">Test Discipline</p>
        <h2 className="text-2xl font-bold mb-6">Bench Validation Before Flight</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {validationChecks.map((item) => (
            <div key={item.check} className="panel-card-soft rounded-xl p-5">
              <h3 className="text-white font-semibold mb-2">{item.check}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{item.result}</p>
            </div>
          ))}
        </div>
        </div>
      </section>

      {/* Component Roles */}
      <section className="page-section pt-0">
        <div className="page-container">
        <h2 className="text-2xl font-bold mb-6">Component Roles and Engineering Use</h2>
        <div className="overflow-x-auto rounded-2xl border border-slate-700/70">
          <table className="w-full text-sm">
            <thead className="bg-slate-800 text-slate-400 font-mono text-xs uppercase">
              <tr>
                <th className="text-left px-5 py-3">Subsystem</th>
                <th className="text-left px-5 py-3">Component</th>
                <th className="text-left px-5 py-3">What It Proves</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {coreComponents.map((item) => (
                <tr key={item.role} className="bg-slate-900 hover:bg-slate-800 transition-colors">
                  <td className="px-5 py-3 text-slate-300 font-medium">{item.role}</td>
                  <td className="px-5 py-3 text-slate-400">{item.component}</td>
                  <td className="px-5 py-3 text-slate-400">{item.engineeringUse}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        </div>
      </section>

      {/* CAD and Specs */}
      <section className="page-section pt-0">
        <div className="page-container">
        <div className="grid lg:grid-cols-[1fr_0.9fr] gap-8 items-start">
          <div>
            <p className="page-eyebrow mb-2">CAD-Driven Design</p>
            <h2 className="text-2xl font-bold mb-4 text-white">Mechanical Design Constraints</h2>
            <p className="text-slate-400 leading-relaxed mb-6">
              The Onshape model was used to reason about component placement before assembly:
              center of mass, motor spacing, battery volume, controller mounting, wiring clearance,
              fastener access, and future space for the autonomy stack. The CAD work gives each
              hardware decision a measurable reason instead of guessing during assembly.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {specs.map((spec) => (
                <div key={spec.label} className="panel-card-soft rounded-xl p-4">
                  <p className="page-eyebrow text-[10px] mb-1">{spec.label}</p>
                  <p className="text-white text-xl font-bold">{spec.value}</p>
                  <p className="text-slate-500 text-xs mt-1 leading-relaxed">{spec.note}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {cadImages.map((img) => (
              <LightboxImage
                key={img.src}
                src={img.src}
                alt={img.alt}
                wrapperClassName="aspect-square bg-white rounded-2xl overflow-hidden border border-slate-700 shadow-lg"
                imageClassName="object-contain p-4"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            ))}
          </div>
        </div>
        </div>
      </section>

      {/* AI Expansion */}
      <section className="page-section pt-0">
        <div className="page-container">
        <div className="panel-card rounded-2xl p-8">
          <p className="page-eyebrow mb-2">Next Engineering Phase</p>
          <h2 className="text-2xl font-bold mb-3">Autonomous AI Expansion Plan</h2>
          <p className="text-slate-400 mb-8 leading-relaxed max-w-3xl">
            The autonomy layer comes after the manual platform is electrically safe and mechanically
            proven. The plan is to add a companion computer for perception and navigation, then use
            logs and controlled tests to validate behavior instead of jumping straight to full autonomy.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {aiComponents.map((item) => (
              <div key={item.component} className="panel-card-soft rounded-xl p-5">
                <h3 className="text-white font-semibold mb-2">{item.component}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.role}</p>
              </div>
            ))}
          </div>
        </div>
        </div>
      </section>

      {/* Footer nav */}
      <div className="page-container px-6 pb-20 flex justify-between items-center border-t border-slate-800 pt-8">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-slate-400 hover:text-sky-300 transition-colors text-sm"
        >
          <FaArrowLeft size={12} /> Back to Projects
        </Link>
        <Link
          href="/projects/meta-quest"
          className="text-sm text-sky-300 hover:text-white transition-colors"
        >
          Next Project: Meta Quest Slide-Lock →
        </Link>
      </div>
    </main>
  );
}
