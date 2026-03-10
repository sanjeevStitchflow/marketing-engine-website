"use client";

import Container from "@/components/global/container";

const rows = [
  {
    dimension: "Pipeline",
    before: "10 leads/month from personal network and HN posts",
    after:
      "Qualified inbound + outbound pipeline running independently",
  },
  {
    dimension: "Content velocity",
    before: "1-3 pieces/month, all founder-written",
    after: "8-12+ pieces/month. Quality at scale.",
  },
  {
    dimension: "Your week",
    before: "15 hours writing, editing, rewriting",
    after: "2-3 hours reviewing and approving",
  },
  {
    dimension: "Content accuracy",
    before: "Only you can catch technical errors",
    after:
      "System loaded with your architecture — accurate from the start",
  },
  {
    dimension: "Your next hire",
    before: 'Searching for a unicorn who "gets it"',
    after:
      "Hand them a loaded engine and a pipeline already flowing",
  },
];

export default function BeforeAfterSection() {
  return (
    <section className="bg-background">
      <Container paddingTop="default" paddingBottom="default">
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-text-primary mb-12 md:mb-16 max-w-3xl">
          From founder-dependent marketing to a system that runs without you
        </h2>

        {/* Desktop table */}
        <div className="hidden md:block border border-border rounded-2xl overflow-hidden">
          {/* Header row */}
          <div className="grid grid-cols-[1fr_1.5fr_1.5fr] bg-white/[0.03] border-b border-border">
            <div className="p-4 md:p-5 text-sm font-semibold text-text-primary border-r border-border">
              Dimension
            </div>
            <div className="p-4 md:p-5 text-sm font-semibold text-negative border-r border-border">
              Before
            </div>
            <div className="p-4 md:p-5 text-sm font-semibold text-positive">
              After
            </div>
          </div>

          {/* Data rows */}
          {rows.map((row, i) => (
            <div
              key={i}
              className={`grid grid-cols-[1fr_1.5fr_1.5fr] ${
                i < rows.length - 1 ? "border-b border-border" : ""
              }`}
            >
              <div className="p-4 md:p-5 text-sm font-semibold text-text-primary border-r border-border">
                {row.dimension}
              </div>
              <div className="p-4 md:p-5 text-sm text-text-muted border-r border-border">
                {row.before}
              </div>
              <div className="p-4 md:p-5 text-sm text-text-primary">
                {row.after}
              </div>
            </div>
          ))}
        </div>

        {/* Mobile cards */}
        <div className="md:hidden space-y-4">
          {rows.map((row, i) => (
            <div
              key={i}
              className="border border-border rounded-2xl overflow-hidden"
            >
              <div className="bg-white/[0.03] px-4 py-3 border-b border-border">
                <p className="text-sm font-semibold text-text-primary">
                  {row.dimension}
                </p>
              </div>
              <div className="px-4 py-3 border-b border-border">
                <p className="text-xs font-semibold text-negative mb-1">
                  Before
                </p>
                <p className="text-sm text-text-muted">{row.before}</p>
              </div>
              <div className="px-4 py-3">
                <p className="text-xs font-semibold text-positive mb-1">
                  After
                </p>
                <p className="text-sm text-text-primary">{row.after}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
