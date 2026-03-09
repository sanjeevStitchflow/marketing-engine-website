"use client";

import { useState } from "react";
import Container from "@/components/global/container";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    q: "What do I need to get started?",
    a: "Just book a call. We\u2019ll walk through your product, your audience, and your current marketing. No prep work required on your end \u2014 we handle the heavy lifting from day one.",
  },
  {
    q: "How much does it cost?",
    a: "The engine build is a $3,000 one-time engagement — includes setup, discovery, positioning, and your first set of assets. If you want ongoing support, the retainer is $1,000/month for limited hours — new content, engine updates, and campaign refreshes.",
  },
  {
    q: "How is this different from hiring a marketing agency?",
    a: "Agencies don\u2019t know your product like you do. They spend months onboarding, assign junior staff, and still need three rounds of revisions. We build a system loaded with your context — your positioning, voice, buyer language, proof points. The output sounds like you because the system knows who you are. And you own it after the build.",
  },
  {
    q: "How is this different from using ChatGPT for marketing?",
    a: "Using ChatGPT raw is the \u2018naked AI\u2019 approach — no memory, no context, every session starts from zero. That\u2019s why the output sounds generic. We build a persistent engine loaded with your golden messaging, content pillars, and writing style. Your blog uses the same voice as your sales deck because they share the same foundation. It\u2019s a system, not a chat.",
  },
  {
    q: "What if I already have some marketing assets?",
    a: "Great \u2014 we\u2019ll audit what you have and build on it. If your positioning is strong, we skip straight to production. If it needs work, we\u2019ll tighten it up during discovery. You don\u2019t start from scratch.",
  },
  {
    q: "How long does it take to get my first assets?",
    a: "Discovery takes about an hour of your time. From there, most clients have their first set of assets \u2014 blog posts, sales deck, outbound sequences \u2014 within a week.",
  },
  {
    q: "Do I get to review everything before it goes out?",
    a: "Absolutely. Every asset goes through a review and approval process. You see drafts, request changes, and give final sign-off. Nothing ships without your approval.",
  },
  {
    q: "What kinds of companies do you work with?",
    a: "Founders and heads of marketing who know they should be doing more but don\u2019t have the bandwidth. Typically B2B startups and scale-ups where one person or a small team covers the entire marketing function. If you\u2019re juggling between AI tools and still getting generic output, this is built for you.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-white border-t border-[#E4DBD0]">
      <Container paddingTop="default" paddingBottom="default">
        <p className="font-mono text-base font-medium tracking-widest uppercase text-[#5A5662] mb-4">
          FAQ
        </p>
        <h2 className="text-3xl md:text-5xl font-semibold tracking-tighter text-gray-900 mb-14 md:mb-16 max-w-[600px]">
          Common questions.
        </h2>

        <div className="max-w-[800px] space-y-2">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="rounded-2xl border border-[#E8E4DF] bg-white overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex w-full items-center justify-between px-7 py-5 text-left text-[15px] font-semibold text-gray-900 transition-colors hover:text-[#5A5662] cursor-pointer"
              >
                {faq.q}
                <ChevronDown
                  className={cn(
                    "h-4 w-4 shrink-0 text-[#7B7481] transition-transform duration-200",
                    openIndex === i && "rotate-180"
                  )}
                />
              </button>
              {openIndex === i && (
                <div className="px-7 pb-6 text-[15px] text-[#6B6775] leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
