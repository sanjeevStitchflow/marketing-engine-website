import Container from "@/components/global/container";
import { ArrowRight } from "lucide-react";

function CheckIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 16 16"
      fill="none"
      className="flex-shrink-0 mt-[3px]"
    >
      <path
        d="M3 8.5L6.5 12L13 4"
        stroke="#363338"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function PricingSection() {
  return (
    <section id="pricing" className="bg-[#FAF9F8]">
      <Container paddingTop="default" paddingBottom="default">
        <p className="font-mono text-base font-medium tracking-widest uppercase text-[#5A5662] mb-4">
          Pricing
        </p>
        <h2 className="text-4xl md:text-[3.5rem] font-semibold tracking-tighter text-gray-900 mb-14 md:mb-16 max-w-[600px] leading-[1.05]">
          How we work together.
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Engine Build */}
          <div className="bg-white rounded-2xl border border-[#E8E4DF] px-8 py-10 md:px-10 md:py-12 flex flex-col justify-between min-h-[380px] transition-shadow duration-200 hover:shadow-[0_2px_20px_rgba(0,0,0,0.04)]">
            <div>
              <p className="font-mono text-xs font-medium tracking-widest uppercase text-[#C4956A] mb-3">
                Engine Build
              </p>
              <h3 className="text-[2.75rem] md:text-[3rem] font-semibold tracking-tight text-[#1A1A1A] leading-none">
                One-time
              </h3>
              <p className="text-[15px] text-[#8A8490] mt-2 mb-10">
                We build your complete marketing engine.
              </p>
              <p className="text-[15px] text-[#4A4550] leading-relaxed">
                Discovery session, positioning framework, messaging, writing
                style, and your first set of marketing assets. Blog posts,
                sales deck, case study framework, ICP list, outbound sequences
                — the full stack.
              </p>
            </div>
          </div>

          {/* Ongoing */}
          <div className="bg-white rounded-2xl border border-[#E8E4DF] px-8 py-10 md:px-10 md:py-12 flex flex-col min-h-[380px] transition-shadow duration-200 hover:shadow-[0_2px_20px_rgba(0,0,0,0.04)]">
            <p className="font-mono text-xs font-medium tracking-widest uppercase text-[#C4956A] mb-3">
              Ongoing
            </p>
            <h3 className="text-[2.75rem] md:text-[3rem] font-semibold tracking-tight text-[#1A1A1A] leading-none">
              Retainer
            </h3>
            <p className="text-[15px] text-[#8A8490] mt-2 mb-10">
              Continuous content and campaign production.
            </p>

            <div className="flex-1">
              {[
                "New blog posts, case studies, and content on a regular cadence.",
                "Outbound campaigns refreshed as your ICP evolves.",
                "Engine maintained and updated as your positioning sharpens.",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex gap-3.5 items-start py-4 border-t border-[#EEEBE7]"
                >
                  <CheckIcon />
                  <p className="text-[15px] text-[#4A4550] leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-6 text-sm text-[#8A8490]">
              Pricing depends on scope. Let&apos;s talk about what you need.
            </p>
          </div>
        </div>

        {/* Callout */}
        <div className="mt-10 rounded-2xl bg-[#F5F2EE] border border-[#EBE7E2] px-8 py-7 md:px-10 md:py-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <p className="text-base text-[#4A4550] leading-relaxed max-w-[560px]">
            Not sure where to start? Book a call. We&apos;ll look at what you
            have, what you need, and tell you exactly what we&apos;d build.
            No commitment.
          </p>
          <a
            href="#cta"
            className="group inline-flex items-center gap-2 h-[48px] px-6 rounded-xl bg-[#2D201D] text-white text-[15px] font-medium hover:bg-[#3D2E28] transition-all duration-200 whitespace-nowrap flex-shrink-0"
          >
            Book a free call
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </a>
        </div>
      </Container>
    </section>
  );
}
