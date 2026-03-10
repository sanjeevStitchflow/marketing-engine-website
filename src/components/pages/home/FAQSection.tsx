"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "@/components/global/container";

const faqs = [
  {
    q: "How long until we see results?",
    a: "You see usable output during the discovery session itself — after the first 4 questions. Full engine is production-ready within days, not weeks.",
  },
  {
    q: "Can AI really handle the technical complexity of our product?",
    a: "Raw AI can't. AI loaded with your product architecture, buyer language, and positioning does. We use the same system for Stitchflow — IT automation across 100+ SaaS apps. Our buyers are CISOs. The output holds up.",
  },
  {
    q: "What if we've been burned by AI content tools before?",
    a: "Those tools started from zero context. They didn't know your positioning, your buyer, or your competitive landscape. Marketing Engine starts from everything you know. The difference is the context, not the AI model.",
  },
  {
    q: "Do we need technical skills to use the engine?",
    a: "You need Claude (the AI tool). No coding required. The engine is a set of skills that run inside Claude — you talk to it like you'd talk to a marketing teammate.",
  },
  {
    q: "What do we actually own after the engagement?",
    a: "Everything. The engine lives in your repo. Your golden messaging, content pillars, writing style guide, and all 10 production skills. No subscription, no dependency.",
  },
  {
    q: "We're about to hire a head of marketing. Should we wait?",
    a: "Build the engine first. When your marketer arrives, they inherit a loaded system with your positioning, voice, and playbooks. They run the engine instead of starting from a blank page.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-background">
      <Container paddingTop="default" paddingBottom="default">
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-text-primary mb-14 md:mb-16 text-center">
          Frequently asked questions
        </h2>

        <div className="max-w-[800px] mx-auto divide-y divide-border">
          {faqs.map((faq, i) => (
            <div key={i}>
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex w-full items-center justify-between py-5 text-left text-base font-semibold text-text-primary cursor-pointer hover:text-accent transition-colors"
              >
                <span className="pr-4">{faq.q}</span>
                <span className="shrink-0 text-text-muted text-xl leading-none w-6 text-center">
                  {openIndex === i ? "\u2212" : "+"}
                </span>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="text-text-secondary pb-5 leading-relaxed">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
