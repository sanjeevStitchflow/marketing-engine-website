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
              Every option for scaling marketing is broken.
            </h3>
            <p className="text-[15px] md:text-base text-white/75 leading-[1.8] max-w-[900px]">
              Agencies are expensive and lose your voice. Freelancers need three
              rounds of revisions. ChatGPT gives you the same generic output your
              competitors get. SaaS tools promise AI marketing and produce slop.
              We take a different approach: we build a system loaded with your
              context — your positioning, your voice, your proof points — so
              every piece of content sounds like you wrote it.
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
