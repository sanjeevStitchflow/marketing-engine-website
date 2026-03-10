export default function FinalCTA() {
  return (
    <section id="cta" className="py-32 text-center relative overflow-hidden bg-background">
      {/* Floating orbs */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full bg-indigo-500 blur-[120px] opacity-[0.1] pointer-events-none"
        style={{ top: "-200px", left: "-150px" }}
      />
      <div
        className="absolute w-[500px] h-[500px] rounded-full bg-violet-500 blur-[120px] opacity-[0.1] pointer-events-none"
        style={{ bottom: "-150px", right: "-100px" }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-2xl mx-auto px-4">
        <h2 className="gradient-text text-4xl md:text-6xl font-extrabold tracking-tight">
          Get your pipeline unstuck.
        </h2>

        <p className="text-text-secondary text-lg max-w-lg mx-auto mt-6">
          Book a 30-minute call. We&rsquo;ll show you what your content looks
          like when AI actually has your context.
        </p>

        <div className="mt-10 flex justify-center">
          <a
            href="mailto:sanjeev@stitchflow.com"
            className="group relative inline-flex items-center justify-center h-[52px] px-8 rounded-xl font-semibold text-[15px] text-white cursor-pointer transition-all duration-200 hover:-translate-y-[1px]"
            style={{
              background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
            }}
          >
            {/* Pulsing glow */}
            <span
              className="absolute inset-0 rounded-xl pointer-events-none"
              style={{
                background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                filter: "blur(20px)",
                opacity: 0.4,
                animation: "pulse-glow 3s ease-in-out infinite",
              }}
            />
            <span className="relative z-10">Book a Call</span>
          </a>
        </div>

        <p className="text-text-muted text-xs mt-4">
          One-time engagement. You own the system. No subscription.
        </p>
      </div>
    </section>
  );
}
