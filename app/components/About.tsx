import Image from 'next/image';
import { FaUniversity, FaCode, FaMicrochip } from 'react-icons/fa';

const highlights = [
  {
    icon: <FaUniversity className="text-blue-400" size={22} />,
    title: 'Education',
    description:
      'Black Hawk College, GPA 3.36, graduating May 2027. Previously United Township High School, GPA 4.1 (weighted), May 2025. Focused on engineering, computer science, and applied systems.',
  },
  {
    icon: <FaMicrochip className="text-blue-400" size={22} />,
    title: 'Engineering',
    description:
      'Experienced in CAD-driven prototyping using Onshape, 3D printing with PETG, drone systems, embedded electronics, power distribution, and vibration-isolated mechanical design.',
  },
  {
    icon: <FaCode className="text-blue-400" size={22} />,
    title: 'Software',
    description:
      'Full-stack development with Next.js, React, TypeScript, and tRPC. Rust systems programming. Cloud infrastructure with AWS and Terraform. Database design with MySQL and Drizzle ORM.'
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-slate-900 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-blue-400 font-mono text-sm tracking-widest uppercase mb-2">
            Who I Am
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">About Me</h2>
          <div className="w-12 h-0.5 bg-blue-500 mx-auto mt-4" />
        </div>

        {/* Profile photo — centered */}
        <div className="flex justify-center mb-12">
          <div className="relative w-56 h-72 rounded-2xl overflow-hidden border-2 border-slate-700 ring-4 ring-blue-500/20 shadow-xl shadow-blue-900/20">
            <Image
              src="/profile.webp"
              alt="Leonardo Chimal"
              fill
              className="object-cover object-top"
              sizes="224px"
              priority
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Bio */}
          <div className="space-y-5 text-slate-400 leading-relaxed">
            <p>
              I&apos;m an engineering student at Black Hawk College combining mechanical design,
              embedded electronics, and software development to build functional prototypes.
              My background spans CAD-driven design, drone systems, robotics, and full-stack web
              development — giving me a unique perspective on how hardware and software work together.
            </p>
            <p>
              At John Deere I designed and built a production enterprise URL shortening platform
              using Next.js 16, TypeScript, tRPC, Rust, Drizzle ORM, MySQL, and AWS (Fargate,
              Kinesis, Terraform) — deployed internally for organization-wide use. As Robotics
              Design Lead for FTC Team 8813 I led CAD design and
              mechanical integration, qualifying for the FTC World Championship in Houston, TX (2024)
              and the FTC World Championship in Indianapolis, IN (2026).
            </p>
            <p>
              Outside of engineering I enjoy prototyping new ideas, 3D printing, drone building,
              and working on open-source projects.
            </p>

            {/* Quick facts */}
            <div className="pt-4 grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-blue-400 font-mono">&gt; Name:</span>
                <span className="text-slate-300 ml-2">Leonardo Chimal</span>
              </div>
              <div>
                <span className="text-blue-400 font-mono">&gt; Location:</span>
                <span className="text-slate-300 ml-2">East Moline, IL</span>
              </div>
              <div>
                <span className="text-blue-400 font-mono">&gt; School:</span>
                <span className="text-slate-300 ml-2">Black Hawk College</span>
              </div>
              <div>
                <span className="text-blue-400 font-mono">&gt; Available:</span>
                <span className="text-green-400 ml-2">Open to internships</span>
              </div>
            </div>
          </div>

          {/* Highlight cards */}
          <div className="space-y-4">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="bg-slate-800 border border-slate-700 rounded-lg p-5 hover:border-blue-500/50 transition-colors"
              >
                <div className="flex items-center gap-3 mb-2">
                  {item.icon}
                  <h3 className="text-white font-semibold">{item.title}</h3>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
