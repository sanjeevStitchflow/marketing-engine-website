"use client";

import Container from "@/components/global/container";
import { motion } from "framer-motion";

const steps = [
  {
    num: 1,
    title: "Discovery session",
    description:
      "We interview you and extract your technical knowledge, positioning, and voice. 15 structured questions, 4 sections. You see real output after the first 4 questions \u2014 not a strategy PDF, a usable asset.",
    time: "2\u20133 hours, one time",
  },
  {
    num: 2,
    title: "Engine build",
    description:
      "We construct your Marketing Engine: an AI agent loaded with your context, your content pillars, your writing style, your buyer\u2019s language. It lives in Claude. You own it.",
    time: "Delivered in days",
  },
  {
    num: 3,
    title: "Content at scale",
    description:
      "Blogs, outbound, case studies, sales decks, explainer videos. 8\u201312+ pieces/month. Technically accurate. In your voice. The system compounds \u2014 every piece makes the engine smarter.",
    time: "Ongoing, you own it",
  },
];

const slideIn = {
  hidden: { opacity: 0, x: -32 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.18, duration: 0.5, ease: "easeOut" as const },
  }),
};

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="relative bg-[var(--color-background)]">
      <Container variant="contained" paddingTop="default" paddingBottom="default">
        {/* Header */}
        <motion.div
          className="mb-14 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tighter text-[var(--color-text-primary)]">
            Your marketing engine in 3 steps
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 to-violet-500" />

          <div className="space-y-16">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                className="relative flex items-start"
                custom={i}
                variants={slideIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
              >
                {/* Numbered circle */}
                <div className="relative z-10 flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-violet-500 text-white font-bold flex items-center justify-center shadow-lg shadow-indigo-500/25">
                  {step.num}
                </div>

                {/* Content */}
                <div className="pl-8">
                  <h3 className="font-bold text-lg text-[var(--color-text-primary)] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-[var(--color-text-secondary)] leading-relaxed max-w-xl">
                    {step.description}
                  </p>
                  <p className="text-[var(--color-accent)] text-sm font-semibold mt-2">
                    {step.time}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
