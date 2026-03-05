import Container from "@/components/global/container";
import {
  Search,
  PenLine,
  BookOpen,
  Target,
  Presentation,
  Send,
  Video,
  Globe,
} from "lucide-react";

const deliverables = [
  {
    icon: Search,
    title: "Positioning & Messaging",
    description:
      "We extract your golden messaging, founder thesis, and narrative arc. The foundation every other asset is built on.",
  },
  {
    icon: PenLine,
    title: "Blog Content",
    description:
      "Blog posts written in your voice with your POV baked in. Plus LinkedIn and Twitter derivatives ready for distribution.",
  },
  {
    icon: BookOpen,
    title: "Case Studies",
    description:
      "We run structured customer interviews and produce complete case studies with problem, solution, and measurable results.",
  },
  {
    icon: Target,
    title: "ICP & Prospect Lists",
    description:
      "We define your ideal customer profile, scout real prospects, validate fit, and deliver a ready-to-use list.",
  },
  {
    icon: Presentation,
    title: "Sales Decks",
    description:
      "Narrative-driven sales decks with speaker notes, built on the same positioning framework as every other asset.",
  },
  {
    icon: Send,
    title: "Outbound Campaigns",
    description:
      "Personalized cold email sequences built from your ICP list. Ready to send or export to your sending platform.",
  },
  {
    icon: Video,
    title: "Explainer Videos",
    description:
      "Script, voiceover, and simple explainer videos that communicate your product clearly and consistently.",
  },
  {
    icon: Globe,
    title: "Website Audit",
    description:
      "We crawl your site and compare every page against your golden messaging. You get a report of what\u2019s off and how to fix it.",
  },
];

export default function SkillsSection() {
  return (
    <section
      id="what-we-do"
      className="relative"
      style={{
        background: "linear-gradient(to bottom, #2D201D, #3D2E28, #4A3830)",
      }}
    >
      <Container paddingTop="default" paddingBottom="default">
        <div className="mb-14 md:mb-20">
          <p className="font-mono text-base font-medium tracking-widest uppercase text-[#C4A882] mb-4">
            What we deliver
          </p>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tighter text-white max-w-[720px]">
            A complete marketing stack.
            <br className="hidden md:block" />
            {" "}Built for your business.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {deliverables.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-7 flex flex-col"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                    <Icon className="w-4 h-4 text-[#C4A882]" />
                  </div>
                  <h3 className="text-base font-semibold text-white">
                    {item.title}
                  </h3>
                </div>
                <p className="text-[14px] text-white/75 leading-relaxed flex-1">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Full engine callout */}
        <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-8 md:p-10">
          <h3 className="text-2xl md:text-3xl font-semibold tracking-tighter text-white mb-4">
            Everything stays consistent.
          </h3>
          <p className="text-white/75 leading-relaxed max-w-[800px]">
            Every asset we produce is built on the same positioning foundation.
            Your blog sounds like your sales deck. Your outbound references the
            same messaging as your case studies. No more Frankenstein marketing
            where every piece sounds like it came from a different company.
          </p>
        </div>
      </Container>
    </section>
  );
}
