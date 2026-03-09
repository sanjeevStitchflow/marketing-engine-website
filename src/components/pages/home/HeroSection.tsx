import Container from "@/components/global/container";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: "linear-gradient(to bottom, #FAF9F8, #F0EBE4)" }}
    >
      <Container paddingTop="none" paddingBottom="none">
        <div className="pt-32 md:pt-44 lg:pt-52 pb-20 md:pb-28 lg:pb-36 max-w-[780px] mx-auto text-center">
          <h1 className="text-3xl md:text-[3.5rem] md:leading-[1.1] font-semibold tracking-tighter text-gray-900">
            You know you should be doing
            <br className="hidden md:block" />
            {" "}more in marketing.
          </h1>

          <p className="mt-6 text-xl md:text-2xl font-medium text-gray-900">
            You don&apos;t need another tool. You need a system that knows your business.
          </p>

          <div className="mt-6 flex flex-col gap-2 text-lg text-[#5A5662] leading-relaxed max-w-[640px] mx-auto">
            <p>
              Marketing Engine by Stitchflow builds you an AI-powered engine
              loaded with your positioning, voice, and buyer language. Blogs,
              sales decks, outbound, case studies — output that sounds like you,
              not like a robot.
            </p>
            <p>
              You own the engine. The capability compounds.
            </p>
          </div>

          <div className="mt-10 flex justify-center items-center gap-5 flex-wrap">
            <Link
              href="#cta"
              className="group h-[48px] px-6 rounded-xl font-medium text-[15px] flex items-center justify-center gap-2 cursor-pointer transition-all duration-200 bg-[#2D201D] text-white shadow-sm hover:shadow-md hover:-translate-y-[1px] active:translate-y-0 active:shadow-sm"
            >
              <span className="whitespace-nowrap">Book a call</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="#how-it-works"
              className="group h-[48px] px-6 rounded-xl font-medium text-[15px] flex items-center gap-2 border-[1.5px] border-[#E0D5C8] bg-white text-[#363338] transition-all duration-200 hover:border-[#C4A882]"
            >
              See how it works
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
