import Container from "@/components/global/container";

const cards = [
  {
    num: "01",
    title: "We extract your context",
    description:
      "We run a structured discovery session \u2014 15 questions that pull out your positioning, buyer language, proof points, and voice. This becomes the foundation for everything. Your first asset (golden messaging) is ready after just 4 questions.",
  },
  {
    num: "02",
    title: "We build your engine",
    description:
      "We build an AI agent inside Claude loaded with your source material \u2014 your golden messaging, content pillars, writing style guide. Every piece of content starts from your context, not from zero. The output sounds like you because the system knows who you are.",
  },
  {
    num: "03",
    title: "You own it and run it",
    description:
      "Blogs, sales decks, case studies, outbound sequences, explainer videos \u2014 all produced by your engine. You own the system. You run it. If you need changes later, we\u2019re available. The capability compounds over time.",
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
          We extract your context.
          <br />
          We build your engine.
          <br />
          You own it forever.
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
