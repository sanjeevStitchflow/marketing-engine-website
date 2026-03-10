"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Container from "@/components/global/container";

const painCards = [
  {
    icon: "3h",
    title: "Blog posts",
    description: "you write them. 3 hours each, 1-3 per month.",
  },
  {
    icon: "~",
    title: "Outbound sequences",
    description: "you write them. Nobody else gets the tone right.",
  },
  {
    icon: "90m",
    title: "Sales decks",
    description: "you customize them the night before. 90 minutes per prospect.",
  },
  {
    icon: "8mo",
    title: "Website copy",
    description: "you wrote it at 2am. Haven't updated it in 8 months.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

export default function ProblemSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="problem" className="relative bg-background">
      {/* Top accent bar */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-red-500" />

      <Container variant="contained" paddingTop="default" paddingBottom="default">
        <div ref={ref}>
          {/* Headline */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeUp}
            custom={0}
            className="max-w-[800px] mb-14"
          >
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tighter text-text-primary leading-tight mb-5">
              You&apos;re the bottleneck. And your bandwidth is shrinking.
            </h2>
            <p className="text-lg md:text-xl text-text-secondary leading-relaxed">
              You&apos;re the only person who can produce content your technical
              audience respects. So everything runs through you:
            </p>
          </motion.div>

          {/* 2x2 Pain Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
            {painCards.map((card, i) => (
              <motion.div
                key={card.title}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={fadeUp}
                custom={i + 1}
                className="bg-glass-bg border border-glass-border rounded-2xl p-6"
              >
                <span className="font-mono text-2xl font-extrabold text-accent-warm block mb-3">
                  {card.icon}
                </span>
                <p className="text-text-primary">
                  <span className="font-semibold">{card.title}</span>
                  {" \u2014 "}
                  <span className="text-text-secondary">{card.description}</span>
                </p>
              </motion.div>
            ))}
          </div>

          {/* Stat callout */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeUp}
            custom={5}
            className="bg-orange-500/5 border border-orange-500/15 rounded-2xl p-8 text-center"
          >
            <span className="gradient-text-warm text-7xl md:text-8xl font-extrabold tracking-tighter block mb-3">
              15
            </span>
            <p className="text-lg md:text-xl text-text-secondary max-w-[600px] mx-auto">
              hours/week on marketing instead of product, customers, and strategy.
            </p>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
