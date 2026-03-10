import Container from "@/components/global/container";

const trustPills = [
  "Built by the team behind Stitchflow (IT automation for 100+ SaaS apps)",
  "Used by Natoma to build an AI-native marketing function",
];

export default function ProofSection() {
  return (
    <section className="bg-background">
      <Container paddingTop="default" paddingBottom="default">
        {/* Trust pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {trustPills.map((pill) => (
            <span
              key={pill}
              className="bg-glass-bg border border-glass-border rounded-full px-5 py-2 text-sm text-text-secondary"
            >
              {pill}
            </span>
          ))}
        </div>

        {/* Testimonial card */}
        <div className="max-w-2xl mx-auto bg-glass-bg border border-glass-border rounded-2xl p-12 relative">
          {/* Quote mark */}
          <span className="absolute top-4 left-6 text-7xl gradient-text opacity-30 font-serif leading-none select-none">
            &ldquo;
          </span>

          <blockquote className="relative z-10">
            <p className="italic text-lg text-text-primary leading-relaxed">
              &ldquo;We wanted to hire a head of marketing who was AI-native. We
              couldn&rsquo;t find one. Marketing Engine let us build the
              marketing function as AI-native from the start.&rdquo;
            </p>

            <footer className="mt-8 flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-gradient-to-br from-indigo-500 to-violet-500 text-white font-bold flex items-center justify-center text-sm">
                N
              </div>
              <div>
                <p className="font-semibold text-text-primary">Natoma</p>
                <p className="text-text-muted text-sm">Early adopter</p>
              </div>
            </footer>
          </blockquote>
        </div>

        {/* Credibility text */}
        <p className="mt-10 max-w-xl mx-auto text-center text-text-secondary text-sm leading-relaxed">
          Built by the team behind Stitchflow — IT automation across 100+ SaaS
          apps. We built Marketing Engine to solve our own demand-gen problem
          first.
        </p>
      </Container>
    </section>
  );
}
