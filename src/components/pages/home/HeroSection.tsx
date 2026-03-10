"use client";

import Container from "@/components/global/container";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[var(--color-background)] flex items-center">
      {/* Floating Orbs */}
      <div
        className="absolute top-[-150px] right-[-100px] w-[500px] h-[500px] rounded-full bg-indigo-500 opacity-[0.12] blur-[100px]"
        style={{ animation: "float-orb 8s ease-in-out infinite" }}
      />
      <div
        className="absolute bottom-[-100px] left-[-80px] w-[400px] h-[400px] rounded-full bg-violet-500 opacity-[0.12] blur-[100px]"
        style={{ animation: "float-orb 10s ease-in-out infinite reverse" }}
      />
      <div
        className="absolute top-[40%] left-[55%] w-[250px] h-[250px] rounded-full bg-orange-500 opacity-[0.12] blur-[100px]"
        style={{ animation: "float-orb 12s ease-in-out infinite" }}
      />

      <Container variant="contained" paddingTop="none" paddingBottom="none">
        <div className="relative z-10 pt-32 md:pt-44 lg:pt-52 pb-20 md:pb-28 lg:pb-36 max-w-4xl mx-auto text-center">
          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="gradient-text text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[1.05]"
          >
            Turn your technical knowledge into a demand-gen engine
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="mt-6 text-lg md:text-xl text-[var(--color-text-secondary)] max-w-2xl mx-auto leading-relaxed"
          >
            You close 40% of demos. You&apos;re getting 10 leads a month.
            Marketing Engine captures what you know and turns it into blogs,
            outbound, case studies, and sales decks — at 10x the speed, without
            sacrificing accuracy.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
            className="mt-10 flex justify-center items-center gap-4 flex-wrap"
          >
            {/* Primary CTA with pulsing glow */}
            <Link
              href="#cta"
              className="group relative inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-base font-semibold text-white bg-gradient-to-r from-indigo-500 to-violet-500 hover:from-indigo-400 hover:to-violet-400 transition-all duration-300 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40"
            >
              {/* Pulsing glow pseudo-element */}
              <span
                className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-500 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-40"
                style={{ animation: "pulse-glow 2s ease-in-out infinite" }}
              />
              <span className="relative z-10 flex items-center gap-2">
                Book a 30-Minute Call
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </span>
            </Link>

            {/* Secondary CTA */}
            <Link
              href="#how-it-works"
              className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-base font-semibold text-[var(--color-text-primary)] border border-[var(--color-border)] hover:border-[var(--color-text-secondary)] bg-transparent transition-all duration-200"
            >
              See How It Works
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
