"use client";

import Container from "@/components/global/container";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.5, ease: "easeOut" as const },
  }),
};

function BlogMockup() {
  return (
    <div className="rounded-xl bg-[var(--color-surface)] border border-[var(--color-border)] p-5 space-y-3 text-left">
      <p className="font-bold text-sm text-[var(--color-text-primary)]">
        Understanding Distributed Caching at Scale
      </p>
      <p className="text-xs text-[var(--color-text-muted)]">
        12 min read &middot; Architecture
      </p>
      <div className="space-y-2">
        <div className="h-2 w-full rounded-full bg-white/5" />
        <div className="h-2 w-[85%] rounded-full bg-white/5" />
        <div className="h-2 w-[92%] rounded-full bg-white/5" />
      </div>
      <div className="rounded-lg bg-black/30 p-3 font-mono text-xs leading-relaxed">
        <span className="text-violet-400">const</span>{" "}
        <span className="text-blue-400">cache</span>{" "}
        <span className="text-[var(--color-text-muted)]">=</span>{" "}
        <span className="text-violet-400">new</span>{" "}
        <span className="text-blue-400">DistributedCache</span>
        <span className="text-[var(--color-text-muted)]">{"({"}</span>
        <br />
        {"  "}
        <span className="text-[var(--color-text-primary)]">shards</span>
        <span className="text-[var(--color-text-muted)]">:</span>{" "}
        <span className="text-orange-400">16</span>
        <span className="text-[var(--color-text-muted)]">,</span>
        <br />
        {"  "}
        <span className="text-[var(--color-text-primary)]">strategy</span>
        <span className="text-[var(--color-text-muted)]">:</span>{" "}
        <span className="text-emerald-400">&quot;consistent-hash&quot;</span>
        <span className="text-[var(--color-text-muted)]">,</span>
        <br />
        {"  "}
        <span className="text-[var(--color-text-primary)]">ttl</span>
        <span className="text-[var(--color-text-muted)]">:</span>{" "}
        <span className="text-orange-400">3600</span>
        <br />
        <span className="text-[var(--color-text-muted)]">{"})"}</span>
      </div>
      <div className="space-y-2">
        <div className="h-2 w-[88%] rounded-full bg-white/5" />
        <div className="h-2 w-[76%] rounded-full bg-white/5" />
      </div>
    </div>
  );
}

function EmailMockup() {
  return (
    <div className="rounded-lg bg-[var(--color-surface)] border border-[var(--color-border)] p-4 font-mono text-xs space-y-2">
      <p className="text-[var(--color-text-secondary)]">
        To: <span className="text-[var(--color-accent)]">sarah@</span>acme.dev
      </p>
      <p className="font-bold text-[var(--color-text-primary)]">
        Re: your caching infra
      </p>
      <p className="italic text-[var(--color-text-muted)]">
        I noticed Acme is scaling past Redis...
      </p>
    </div>
  );
}

function SlidesMockup() {
  return (
    <div className="flex gap-3">
      <div className="flex-1 rounded-md bg-[var(--color-surface)] border-2 border-[var(--color-accent)] aspect-video p-2 flex items-center justify-center">
        <span className="gradient-text text-xs font-bold">The Big Shift</span>
      </div>
      <div className="flex-1 rounded-md bg-[var(--color-surface)] border border-[var(--color-border)] aspect-video p-2 flex items-center justify-center">
        <span className="text-xs text-[var(--color-text-muted)]">Slide 2</span>
      </div>
    </div>
  );
}

function MetricMockup() {
  return (
    <div className="flex items-center gap-3 text-sm">
      <span className="line-through opacity-70 text-red-400">10 leads/mo</span>
      <span className="text-[var(--color-accent)]">&rarr;</span>
      <span className="font-bold text-emerald-400">50+ leads/mo</span>
    </div>
  );
}

export default function FeaturesSection() {
  return (
    <section id="features" className="relative bg-[var(--color-background)]">
      <Container variant="contained" paddingTop="default" paddingBottom="default">
        {/* Header */}
        <motion.div
          className="mb-14 md:mb-20 max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tighter text-[var(--color-text-primary)] mb-5">
            One system. Your context.
            <br className="hidden md:block" />
            {" "}Content at your quality bar.
          </h2>
          <p className="text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed max-w-2xl">
            Marketing Engine captures your technical knowledge once, then
            produces content across every channel — technically accurate, in your
            voice, at 10x the speed.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Hero Card — full width */}
          <motion.div
            className="md:col-span-3 relative rounded-2xl border border-[var(--color-glass-border)] bg-[var(--color-glass-bg)] p-8 hover:-translate-y-1 transition-transform overflow-hidden"
            custom={0}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            {/* Left gradient border */}
            <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-indigo-500 to-violet-500 rounded-l-2xl" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-[var(--color-text-primary)] mb-3">
                  Blogs that rank AND convert
                </h3>
                <p className="text-[var(--color-text-secondary)] leading-relaxed">
                  Technically accurate content your developer audience would
                  actually read. Not SEO fluff — real depth that builds authority
                  and drives qualified inbound.
                </p>
              </div>
              <BlogMockup />
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            className="rounded-2xl border border-[var(--color-glass-border)] bg-[var(--color-glass-bg)] p-8 hover:-translate-y-1 transition-transform flex flex-col"
            custom={1}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <h3 className="text-lg font-bold text-[var(--color-text-primary)] mb-2">
              Outbound that speaks their language
            </h3>
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-5">
              Personalized cold emails built from your ICP criteria and buyer
              research.
            </p>
            <div className="mt-auto">
              <EmailMockup />
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            className="rounded-2xl border border-[var(--color-glass-border)] bg-[var(--color-glass-bg)] p-8 hover:-translate-y-1 transition-transform flex flex-col"
            custom={2}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <h3 className="text-lg font-bold text-[var(--color-text-primary)] mb-2">
              Sales decks without you
            </h3>
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-5">
              Narrative-driven decks your champion can forward internally.
            </p>
            <div className="mt-auto">
              <SlidesMockup />
            </div>
          </motion.div>

          {/* Card 4 */}
          <motion.div
            className="rounded-2xl border border-[var(--color-glass-border)] bg-[var(--color-glass-bg)] p-8 hover:-translate-y-1 transition-transform flex flex-col"
            custom={3}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <h3 className="text-lg font-bold text-[var(--color-text-primary)] mb-2">
              Case studies with depth
            </h3>
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-5">
              Architecture details, integration specifics, metrics that
              technical buyers care about.
            </p>
            <div className="mt-auto">
              <MetricMockup />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
