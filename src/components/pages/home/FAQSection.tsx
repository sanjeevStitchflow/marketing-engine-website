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
    a: "Pricing depends on scope. The engine build is a one-time engagement. Ongoing content and campaigns are on a retainer. Book a call and we\u2019ll scope what makes sense for your stage and budget.",
  },
  {
    q: "How is this different from hiring a marketing agency?",
    a: "Agencies spend months onboarding, assign junior staff, and produce generic work. We use AI to learn your business deeply in a single session, then build a system that produces assets in your voice. Faster, more consistent, and a fraction of the cost.",
  },
  {
    q: "How is this different from using ChatGPT for marketing?",
    a: "ChatGPT has no memory of your positioning, voice, or audience. Every session starts from zero. We build a persistent engine trained on your business. Your blog uses the same voice as your sales deck. Your outbound references the same messaging as your case studies. It\u2019s a system, not a chat.",
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
    a: "Mostly B2B startups and scale-ups \u2014 founders and small teams who need a full marketing stack but don\u2019t have the bandwidth or budget for a traditional agency. If you have a product and need to tell the market about it, we can help.",
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
