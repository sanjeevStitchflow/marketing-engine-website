import Container from "@/components/global/container";
import { Eye, ShieldCheck, Repeat } from "lucide-react";

const boxes = [
  {
    title: "You approve everything",
    icon: Eye,
    description:
      "Nothing goes live without your sign-off. We present drafts, you review, we refine. Every asset gets your explicit approval before delivery.",
  },
  {
    title: "Built on your real positioning",
    icon: ShieldCheck,
    description:
      "We don't guess. Every asset is built on the messaging framework we extract during discovery. Your blog sounds like your sales deck because they share the same foundation.",
  },
  {
    title: "Evolves with your business",
    icon: Repeat,
    description:
      "As your positioning sharpens and your market shifts, we update the engine. Your messaging stays current without starting over from scratch.",
  },
];

export default function SecuritySection() {
  return (
    <section className="bg-white border-t border-[#E4DBD0]">
      <Container paddingTop="default" paddingBottom="default">
        <p className="font-mono text-base font-medium tracking-widest uppercase text-[#5A5662] mb-4">
          Quality & Control
        </p>
        <h2 className="text-3xl md:text-5xl font-semibold tracking-tighter text-gray-900 mb-12 max-w-[600px]">
          Your voice.
          <br />
          Your approval.
          <br />
          Every time.
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {boxes.map((box) => (
            <div
              key={box.title}
              className="bg-[#FAF9F8] rounded-2xl border border-[#E4DBD0] shadow-[0_1px_3px_rgba(84,80,88,0.06),0_8px_24px_rgba(84,80,88,0.04)] p-8 md:p-10"
            >
              <h4 className="flex items-center gap-2.5 text-lg font-semibold tracking-tight text-gray-900 mb-4">
                <box.icon className="w-5 h-5 text-[#5A5662]" />
                {box.title}
              </h4>
              <p className="text-base text-[#5A5662] leading-relaxed">
                {box.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
