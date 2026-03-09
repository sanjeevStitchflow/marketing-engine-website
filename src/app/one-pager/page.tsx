import type { Metadata } from "next";
import Container from "@/components/global/container";
import Link from "next/link";
import { ArrowRight, Terminal } from "lucide-react";

export const metadata: Metadata = {
  title: "One Pager | Marketing Engine by Stitchflow",
  description:
    "Marketing Engine by Stitchflow helps marketing teams use AI to scale content production. One-pager overview of what we do, who it's for, and how it works.",
};

const deliverables = [
  "Golden messaging & positioning",
  "Blog posts in your voice",
  "Customer case studies",
  "ICP & prospect lists",
  "Sales decks with speaker notes",
  "Personalized outbound sequences",
  "Explainer videos",
  "Website copy audit",
];

export default function OnePagerPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header bar */}
      <div className="border-b border-[#E4DBD0] bg-[#FAF9F8]">
        <Container paddingTop="none" paddingBottom="none">
          <div className="flex items-center justify-between py-5">
            <Link href="/" className="flex items-center gap-2">
              <Terminal className="w-5 h-5 text-[#363338]" />
              <span className="font-semibold text-lg text-[#363338] tracking-tight">
                Marketing Engine by Stitchflow
              </span>
            </Link>
            <Link
              href="/#cta"
              className="group h-[40px] px-5 rounded-xl font-medium text-[14px] flex items-center gap-2 bg-[#2D201D] text-white transition-all duration-200 hover:bg-[#1c1c1c]"
            >
              Book a call
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </Container>
      </div>

      {/* Main content */}
      <Container paddingTop="none" paddingBottom="none">
        <div className="max-w-[820px] mx-auto py-16 md:py-24">
          {/* Title block */}
          <div className="mb-16">
            <p className="font-mono text-sm font-medium tracking-widest uppercase text-[#C4956A] mb-4">
              One Pager
            </p>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tighter text-gray-900 leading-[1.1] mb-6">
              Marketing Engine
              <br />
              by Stitchflow
            </h1>
            <p className="text-xl text-[#5A5662] leading-relaxed max-w-[640px]">
              We help marketing teams use AI to scale content production — not
              by adding another SaaS tool, but by building them an AI engine
              loaded with their context. The output sounds like them, not like a
              robot.
            </p>
          </div>

          {/* The Problem */}
          <section className="mb-14">
            <h2 className="text-sm font-mono font-medium tracking-widest uppercase text-[#C4956A] mb-5">
              The Problem
            </h2>
            <div className="space-y-4 text-[16px] text-[#4A4550] leading-relaxed">
              <p>
                Marketing teams are stuck choosing between three broken options:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="rounded-xl border border-[#E8E4DF] bg-[#FAF9F8] p-5">
                  <p className="font-semibold text-[#363338] text-[15px] mb-2">
                    Agencies & freelancers
                  </p>
                  <p className="text-[14px] text-[#6B6775] leading-relaxed">
                    Expensive, slow to onboard, and they never sound like you.
                    Three rounds of revisions and it&apos;s still off.
                  </p>
                </div>
                <div className="rounded-xl border border-[#E8E4DF] bg-[#FAF9F8] p-5">
                  <p className="font-semibold text-[#363338] text-[15px] mb-2">
                    Raw AI (ChatGPT, Claude)
                  </p>
                  <p className="text-[14px] text-[#6B6775] leading-relaxed">
                    No memory, no context, every session starts from zero. The
                    output sounds generic because the AI doesn&apos;t know your
                    business.
                  </p>
                </div>
                <div className="rounded-xl border border-[#E8E4DF] bg-[#FAF9F8] p-5">
                  <p className="font-semibold text-[#363338] text-[15px] mb-2">
                    AI marketing SaaS
                  </p>
                  <p className="text-[14px] text-[#6B6775] leading-relaxed">
                    Another subscription, another dashboard. Promises
                    AI-powered marketing, produces slop.
                  </p>
                </div>
              </div>
              <p>
                The buyer&apos;s reality:{" "}
                <span className="italic text-[#363338]">
                  &ldquo;We don&apos;t even know where to start.&rdquo;
                </span>
              </p>
            </div>
          </section>

          {/* What We Do */}
          <section className="mb-14">
            <h2 className="text-sm font-mono font-medium tracking-widest uppercase text-[#C4956A] mb-5">
              What We Do
            </h2>
            <div className="space-y-4 text-[16px] text-[#4A4550] leading-relaxed">
              <p>
                We build you an AI-powered marketing engine that sits inside
                Claude, loaded with your positioning, voice, buyer language, and
                proof points. Every piece of content starts from your context,
                not from zero.
              </p>
              <p>
                After the build, the engine is yours. You own it. You run it.
                The capability compounds.
              </p>
            </div>
          </section>

          {/* Who It's For */}
          <section className="mb-14">
            <h2 className="text-sm font-mono font-medium tracking-widest uppercase text-[#C4956A] mb-5">
              Who It&apos;s For
            </h2>
            <div className="space-y-4 text-[16px] text-[#4A4550] leading-relaxed">
              <p>
                <span className="font-semibold text-[#363338]">
                  Heads of marketing and founders who own marketing.
                </span>{" "}
                Companies where one person or a small team covers the entire
                marketing function — blogs, case studies, sales decks, outbound,
                video — but doesn&apos;t have the bandwidth to do it all.
              </p>
              <p>
                They know they should be doing more in marketing. They want to
                use AI but it&apos;s too scattered and all over the place. They
                don&apos;t know which tools to use or what to try.
              </p>
            </div>
          </section>

          {/* How It Works */}
          <section className="mb-14">
            <h2 className="text-sm font-mono font-medium tracking-widest uppercase text-[#C4956A] mb-5">
              How It Works
            </h2>
            <div className="space-y-1">
              {[
                {
                  num: "01",
                  title: "Discovery",
                  desc: "We run a structured interview (15 questions) to extract your positioning, voice, buyer language, and proof points. Your first asset — golden messaging — is ready after just 4 questions.",
                },
                {
                  num: "02",
                  title: "Engine Build",
                  desc: "We build an AI agent inside Claude loaded with your source material — golden messaging, content pillars, writing style guide. The output sounds like you because the system knows who you are.",
                },
                {
                  num: "03",
                  title: "Content Production",
                  desc: "You use the engine to produce blogs, case studies, sales decks, outbound sequences, explainer videos. All built on the same positioning foundation.",
                },
                {
                  num: "04",
                  title: "Handoff",
                  desc: "The engine is yours. You own it, you run it. If you need changes to the system later, we're available for consulting. The capability compounds over time.",
                },
              ].map((step) => (
                <div
                  key={step.num}
                  className="flex gap-5 py-5 border-b border-[#EEEBE7] last:border-0"
                >
                  <span className="text-sm font-medium text-[#C4956A] pt-0.5 shrink-0">
                    {step.num}
                  </span>
                  <div>
                    <p className="font-semibold text-[#363338] mb-1">
                      {step.title}
                    </p>
                    <p className="text-[15px] text-[#6B6775] leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* What You Get */}
          <section className="mb-14">
            <h2 className="text-sm font-mono font-medium tracking-widest uppercase text-[#C4956A] mb-5">
              What You Get
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {deliverables.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    className="shrink-0"
                  >
                    <path
                      d="M3 8.5L6.5 12L13 4"
                      stroke="#363338"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="text-[15px] text-[#4A4550]">{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-xl border border-[#E8E4DF] bg-[#FAF9F8] p-5">
              <p className="text-[15px] text-[#4A4550] leading-relaxed">
                <span className="font-semibold text-[#363338]">
                  Everything stays consistent.
                </span>{" "}
                Every asset is built on the same positioning foundation. Your
                blog sounds like your sales deck. Your outbound references the
                same messaging as your case studies.
              </p>
            </div>
          </section>

          {/* Before & After */}
          <section className="mb-14">
            <h2 className="text-sm font-mono font-medium tracking-widest uppercase text-[#C4956A] mb-5">
              Before & After
            </h2>
            <div className="rounded-xl border border-[#E8E4DF] overflow-hidden">
              <table className="w-full text-[15px]">
                <thead>
                  <tr className="border-b border-[#E8E4DF] bg-[#FAF9F8]">
                    <th className="text-left py-3 px-5 font-medium text-[#8A8490] text-[13px] uppercase tracking-wider w-[30%]">
                      &nbsp;
                    </th>
                    <th className="text-left py-3 px-5 font-medium text-[#8A8490] text-[13px] uppercase tracking-wider">
                      Before
                    </th>
                    <th className="text-left py-3 px-5 font-medium text-[#8A8490] text-[13px] uppercase tracking-wider">
                      After
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      dim: "Content production",
                      before:
                        "Juggling ChatGPT, Canva, Google Docs. Copy-pasting prompts.",
                      after:
                        "One system. Type what you need. Output sounds like you.",
                    },
                    {
                      dim: "Quality",
                      before:
                        "AI produces volume but sounds generic. You edit more than you write.",
                      after:
                        "AI produces quality because it has your context. You review, not rewrite.",
                    },
                    {
                      dim: "Starting point",
                      before:
                        "\u201CWe don\u2019t even know where to start.\u201D",
                      after:
                        "A complete engine with your positioning, voice, and playbooks baked in.",
                    },
                  ].map((row) => (
                    <tr
                      key={row.dim}
                      className="border-b border-[#EEEBE7] last:border-0"
                    >
                      <td className="py-4 px-5 font-semibold text-[#363338] align-top">
                        {row.dim}
                      </td>
                      <td className="py-4 px-5 text-[#6B6775] align-top">
                        {row.before}
                      </td>
                      <td className="py-4 px-5 text-[#4A4550] align-top">
                        {row.after}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Why Us */}
          <section className="mb-14">
            <h2 className="text-sm font-mono font-medium tracking-widest uppercase text-[#C4956A] mb-5">
              Why Us
            </h2>
            <div className="space-y-4 text-[16px] text-[#4A4550] leading-relaxed">
              <p>
                Most AI marketing tools optimize for speed. We optimize for{" "}
                <span className="italic">
                  &ldquo;would the CEO actually say this?&rdquo;
                </span>
              </p>
              <p>
                The difference is context. Raw AI doesn&apos;t know your
                positioning, your buyer&apos;s language, or your proof points.
                Our engine does. That&apos;s why the output passes the quality
                bar.
              </p>
              <p>
                We also believe marketing teams should own their system — not
                rent it. A system you control and extend, not another SaaS
                dashboard you&apos;re locked into.
              </p>
            </div>
          </section>

          {/* The Investment */}
          <section className="mb-14">
            <h2 className="text-sm font-mono font-medium tracking-widest uppercase text-[#C4956A] mb-5">
              The Investment
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="rounded-xl border border-[#E8E4DF] bg-[#FAF9F8] p-6">
                <p className="font-semibold text-[#363338] mb-2">
                  Engine Build
                </p>
                <p className="text-[14px] text-[#6B6775] leading-relaxed">
                  One-time engagement. Discovery, positioning framework,
                  messaging, writing style, and your first set of marketing
                  assets. You walk away with a working engine.
                </p>
              </div>
              <div className="rounded-xl border border-[#E8E4DF] bg-[#FAF9F8] p-6">
                <p className="font-semibold text-[#363338] mb-2">
                  Ongoing Consulting
                </p>
                <p className="text-[14px] text-[#6B6775] leading-relaxed">
                  Available if you need changes to the system, new content
                  types, or engine updates as your positioning evolves.
                  You&apos;re not paying for a subscription — you&apos;re paying
                  for capability.
                </p>
              </div>
            </div>
          </section>

          {/* Proof */}
          <section className="mb-16">
            <h2 className="text-sm font-mono font-medium tracking-widest uppercase text-[#C4956A] mb-5">
              Proof
            </h2>
            <div className="rounded-xl border border-[#E8E4DF] bg-[#FAF9F8] p-6">
              <p className="text-[16px] text-[#4A4550] leading-relaxed">
                <span className="font-semibold text-[#363338]">Natoma</span>{" "}
                wanted to hire a head of marketing but couldn&apos;t find anyone
                who was truly AI-native. Instead of settling for a traditional
                hire, they came to Stitchflow to build the marketing engine and
                make the function AI-native from the start.
              </p>
            </div>
          </section>

          {/* CTA */}
          <section>
            <div
              className="rounded-2xl p-10 md:p-12 text-center border border-white/10"
              style={{
                background:
                  "linear-gradient(135deg, #2D201D, #3D2E28, #4A3830)",
              }}
            >
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-4">
                You should be doing more in marketing. Now you can.
              </h2>
              <p className="text-[15px] text-white/60 leading-relaxed mb-8 max-w-[480px] mx-auto">
                Book a call. We&apos;ll look at what you have, what you need,
                and tell you exactly what we&apos;d build. No commitment.
              </p>
              <Link
                href="/#cta"
                className="group inline-flex h-[48px] px-8 rounded-xl font-medium text-[15px] items-center gap-2 bg-white text-[#2D201D] hover:bg-white/90 transition-all duration-200"
              >
                Book a free call
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </section>
        </div>
      </Container>
    </div>
  );
}
