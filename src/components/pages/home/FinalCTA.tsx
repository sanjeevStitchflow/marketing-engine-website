import Container from "@/components/global/container";
import { ArrowRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <section id="cta" className="bg-[#FAF9F8]">
      <Container paddingTop="default" paddingBottom="default">
        <div
          className="rounded-2xl border border-white/10 py-16 md:py-20 lg:py-24 px-6 md:px-10 text-center"
          style={{
            background: "linear-gradient(135deg, #2D201D, #3D2E28, #4A3830)",
          }}
        >
          <h2 className="text-3xl md:text-[3.25rem] font-semibold tracking-tighter text-white leading-[1.15] mb-5 max-w-[820px] mx-auto">
            Stop explaining your product to every new freelancer. Let us build
            your marketing engine.
          </h2>
          <p className="text-base md:text-lg text-white/60 leading-relaxed max-w-[480px] md:max-w-[580px] mx-auto mb-10">
            One conversation. One engine. Every marketing asset you need —
            consistent, on-brand, and ready to use.
          </p>
          <div className="flex justify-center">
            <a
              href="#cta"
              className="group h-[48px] px-8 rounded-xl font-medium text-[15px] flex items-center justify-center gap-2 cursor-pointer transition-all duration-200 bg-white text-[#2D201D] hover:bg-white/90"
            >
              <span className="whitespace-nowrap">Book a free call</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </a>
          </div>
          <p className="mt-6 text-sm text-white/60 tracking-wide">
            No commitment. We&apos;ll tell you exactly what we&apos;d build.
          </p>
        </div>
      </Container>
    </section>
  );
}
