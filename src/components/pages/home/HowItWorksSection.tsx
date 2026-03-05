import Container from "@/components/global/container";

const cards = [
  {
    num: "01",
    title: "We learn your business",
    description:
      "We run a structured discovery session with you \u2014 your product, your audience, your competitive landscape, your voice. This becomes the foundation for everything we build. No generic questionnaires. A real conversation.",
  },
  {
    num: "02",
    title: "We build your marketing engine",
    description:
      "Using AI, we construct a system tailored to your business: your positioning, your messaging framework, your writing style, your POV pillars. This engine produces assets that sound like you wrote them \u2014 because it learned from you.",
  },
  {
    num: "03",
    title: "You get a full marketing stack",
    description:
      "Blog posts, sales decks, case studies, outbound campaigns, ICP lists, explainer videos \u2014 all produced by your engine, all consistent with your brand. We handle the build. You approve the output.",
  },
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="bg-[#FAF9F8]">
      <Container paddingTop="default" paddingBottom="default">
        <p className="font-mono text-base font-medium tracking-widest uppercase text-[#5A5662] mb-4">
          How it works
        </p>
        <h2 className="text-3xl md:text-5xl font-semibold tracking-tighter text-gray-900 mb-14 md:mb-16 max-w-[600px]">
          We learn your business.
          <br />
          We build your engine.
          <br />
          You get the output.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card) => (
            <div
              key={card.num}
              className="flex flex-col bg-white rounded-2xl border border-[#DDD9D3] overflow-hidden h-full transition-shadow hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)]"
            >
              <div className="flex flex-col flex-1 p-8 md:p-10">
                <p className="text-sm font-medium text-[#C4956A] mb-5">
                  {card.num}
                </p>
                <h3 className="text-xl font-semibold tracking-tight text-gray-900 leading-snug mb-4 md:min-h-[3.5rem]">
                  {card.title}
                </h3>
                <p className="text-[15px] text-[#6B6775] leading-relaxed flex-1">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
