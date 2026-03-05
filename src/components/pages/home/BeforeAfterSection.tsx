import Container from "@/components/global/container";

const beforeItems = [
  "Hire an agency. Wait 3 months for onboarding.",
  "Brief a freelancer. Re-explain your product every time.",
  "Ask ChatGPT. Get the same copy your competitors get.",
  "Cobble together a sales deck that doesn\u2019t match your blog.",
  "Write outbound emails by hand. No personalization at scale.",
  "Marketing assets scattered across Docs, Notion, and Slack.",
];

const afterItems = [
  "We learn your business in a single working session.",
  "We build a system that already knows your product and voice.",
  "Every asset grounded in your positioning. Sounds like you.",
  "Blog, sales deck, outbound \u2014 all using the same messaging.",
  "AI-personalized sequences built from your ideal customer profile.",
  "Everything organized, consistent, and ready to use.",
];

export default function BeforeAfterSection() {
  return (
    <section className="bg-white border-t border-[#E4DBD0]">
      <Container paddingTop="default" paddingBottom="default">
        <p className="font-mono text-sm md:text-base font-medium tracking-widest uppercase text-[#5A5662] mb-4">
          Before &rarr; After
        </p>
        <h2 className="text-4xl md:text-6xl font-semibold tracking-tighter text-gray-900 mb-14 md:mb-16">
          Three months and $30K.
          <br />
          Or one engagement with us.
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Before */}
          <div className="rounded-2xl border border-[#E8E4DF] bg-white p-8 md:p-10">
            <p className="font-mono text-xs font-medium tracking-widest uppercase text-[#C4956A] mb-6">
              The old way
            </p>
            <div className="space-y-5">
              {beforeItems.map((item, i) => (
                <div key={i} className="flex gap-3.5 items-start">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 16 16"
                    fill="none"
                    className="flex-shrink-0 mt-[3px]"
                  >
                    <path
                      d="M4 4L12 12M12 4L4 12"
                      stroke="#C4956A"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                  <p className="text-[15px] text-[#6B6775] leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* After */}
          <div className="rounded-2xl border border-[#E8E4DF] bg-[#FAF9F8] p-8 md:p-10">
            <p className="font-mono text-xs font-medium tracking-widest uppercase text-[#2D201D] mb-6">
              Working with us
            </p>
            <div className="space-y-5">
              {afterItems.map((item, i) => (
                <div key={i} className="flex gap-3.5 items-start">
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
                  <p className="text-[15px] text-[#4A4550] leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Summary stats */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Time to first asset", before: "3 months", after: "1 week" },
            { label: "Ongoing cost", before: "$10K+/mo", after: "Fraction" },
            { label: "Voice consistency", before: "Varies", after: "100%" },
            { label: "Your involvement", before: "Constant", after: "Minimal" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-[#EEEBE7] bg-[#FAF9F8] p-5 text-center"
            >
              <p className="text-xs text-[#8A8490] uppercase tracking-wider mb-2">
                {stat.label}
              </p>
              <p className="text-sm text-[#C4956A] line-through mb-1">
                {stat.before}
              </p>
              <p className="text-lg font-semibold text-[#363338]">
                {stat.after}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
