import Container from "@/components/global/container";
import Link from "next/link";

interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
}

const footerColumns: Record<string, FooterLink[]> = {
  Product: [
    { label: "How It Works", href: "#how-it-works" },
    { label: "Features", href: "#features" },
    { label: "FAQ", href: "#faq" },
  ],
  Company: [
    { label: "About Stitchflow", href: "https://stitchflow.com", external: true },
    { label: "Blog", href: "https://stitchflow.com/blog", external: true },
  ],
  Contact: [
    { label: "sanjeev@stitchflow.com", href: "mailto:sanjeev@stitchflow.com" },
  ],
};

export default function FooterSection() {
  return (
    <footer className="border-t border-border bg-background py-16">
      <Container variant="contained">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr] gap-12 md:gap-8">
          {/* Brand */}
          <div>
            <p className="font-bold text-lg text-text-primary mb-2">
              Stitchflow
            </p>
            <p className="text-text-muted text-sm">
              Marketing Engine for technical founders
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerColumns).map(([title, links]) => (
            <div key={title}>
              <p className="text-xs font-semibold uppercase tracking-widest text-text-muted mb-4">
                {title}
              </p>
              <ul>
                {links.map((link) => (
                  <li key={link.label}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-text-muted text-sm py-1 block hover:text-text-primary transition-colors"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-text-muted text-sm py-1 block hover:text-text-primary transition-colors"
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

        {/* Bottom bar */}
        <div className="border-t border-border pt-6 mt-12">
          <p className="text-text-muted text-xs">
            &copy; 2026 Stitchflow. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
