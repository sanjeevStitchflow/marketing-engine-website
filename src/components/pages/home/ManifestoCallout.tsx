import Container from "@/components/global/container";

export default function ManifestoCallout() {
  return (
    <section className="bg-[#FAF9F8]">
      <Container paddingTop="medium" paddingBottom="default">
        <div
          className="rounded-2xl p-10 md:p-12 lg:px-14 lg:py-14 border border-white/10 flex flex-col md:flex-row md:items-center md:justify-between gap-8"
          style={{
            background: "linear-gradient(135deg, #2D201D, #3D2E28, #4A3830)",
          }}
        >
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-white leading-snug mb-5">
              Most marketing teams are either too expensive or too generic.
            </h3>
            <p className="text-[15px] md:text-base text-white/75 leading-[1.8] max-w-[900px]">
              Agencies spend months onboarding and still miss the mark.
              AI tools give everyone the same bland output. We take a different
              approach: we learn your business deeply, then build an AI system
              that produces marketing assets that actually sound like you. Not a
              template. Not a chatbot. A marketing engine built for your company.
            </p>
          </div>
          <a
            href="#how-it-works"
            className="group inline-flex items-center gap-2 h-[48px] px-6 rounded-xl bg-white/[0.06] backdrop-blur-md border border-white/[0.12] text-white/90 text-[15px] font-medium hover:bg-white/[0.1] hover:border-white/[0.18] hover:text-white transition-all duration-300 whitespace-nowrap flex-shrink-0 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"
          >
            How we do it
            <span
              aria-hidden="true"
              className="inline-block transition-transform duration-300 group-hover:translate-x-1"
            >
              &rarr;
            </span>
          </a>
        </div>
      </Container>
    </section>
  );
}
