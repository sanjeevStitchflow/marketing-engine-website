import Container from "@/components/global/container";
import Link from "next/link";

interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
}

const footerLinks: Record<string, FooterLink[]> = {
  Services: [
    { label: "Positioning & Messaging", href: "#what-we-do" },
    { label: "Blog Content", href: "#what-we-do" },
    { label: "Case Studies", href: "#what-we-do" },
    { label: "Sales Decks", href: "#what-we-do" },
    { label: "Outbound Campaigns", href: "#what-we-do" },
    { label: "ICP & Prospect Lists", href: "#what-we-do" },
  ],
  Company: [
    { label: "How It Works", href: "#how-it-works" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
    { label: "Book a Call", href: "#cta" },
  ],
};

export default function FooterSection() {
  return (
    <footer
      style={{
        background: "linear-gradient(to top, #E0D5C8, #FAF9F8)",
      }}
    >
      <Container paddingTop="default" paddingBottom="none">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 pb-16">
          {/* Brand */}
          <div>
            <span className="font-semibold text-lg text-[#363338] tracking-tight">
              Marketing Engine
            </span>
            <p className="text-[15px] text-[#6B6775] leading-relaxed max-w-[280px] mt-4">
              We build AI-powered marketing systems for B2B startups. Your
              positioning, your voice, every asset.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <p className="font-mono text-xs font-medium tracking-widest uppercase text-[#8A8490] mb-4">
                {section}
              </p>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[15px] text-[#5A5662] hover:text-[#363338] transition-colors"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-[15px] text-[#5A5662] hover:text-[#363338] transition-colors"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="border-t border-[#D1C9BE] py-6 text-center">
          <p className="text-sm text-[#8A8490]">
            &copy; {new Date().getFullYear()} Marketing Engine. All rights
            reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
