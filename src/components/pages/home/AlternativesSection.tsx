"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Container from "@/components/global/container";

const alternatives = [
  {
    label: "Freelance writers",
    cost: "$50-100/hr",
    description:
      "Wrote '5 Reasons to Use [Product].' Developers would dismiss it. You rewrote 80%.",
    verdict: "Context: zero",
  },
  {
    label: "Content agencies",
    cost: "$5-15K/mo",
    description:
      "Produced volume. Zero qualified leads. More time editing than writing from scratch.",
    verdict: "Context: zero",
  },
  {
    label: "ChatGPT / Claude raw",
    cost: "$20/mo",
    description:
      "Got your architecture wrong in paragraph 2. Technical inaccuracies your audience would catch instantly.",
    verdict: "Context: zero",
  },
  {
    label: "The 'right hire'",
    cost: "$150K+/yr",
    description:
      "The marketer who understands your domain AND writes for technical buyers AND runs demand-gen doesn't exist at your budget.",
    verdict: "Doesn't exist",
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

export default function AlternativesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="bg-background">
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
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tighter text-text-primary leading-tight">
              Every approach fails for the same reason: zero context.
            </h2>
          </motion.div>

          {/* 2x2 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
            {alternatives.map((card, i) => (
              <motion.div
                key={card.label}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={fadeUp}
                custom={i + 1}
                className="bg-glass-bg border border-glass-border rounded-2xl p-6 flex flex-col"
              >
                <div className="flex items-baseline justify-between mb-3">
                  <span className="font-bold text-lg text-text-primary">
                    {card.label}
                  </span>
                  <span className="text-text-muted text-sm">{card.cost}</span>
                </div>
                <p className="text-text-secondary leading-relaxed flex-1">
                  {card.description}
                </p>
                <p className="text-negative font-semibold text-sm mt-3">
                  &#10007; {card.verdict}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Takeaway */}
          <motion.p
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeUp}
            custom={5}
            className="text-center text-lg md:text-xl text-text-secondary max-w-[740px] mx-auto leading-relaxed"
          >
            The pattern: they all start from zero. No one captured your technical
            context, your buyer&apos;s language, or your product&apos;s architecture.
          </motion.p>
        </div>
      </Container>
    </section>
  );
}
