import Navbar from "@/components/ui/navbar";
import HeroSection from "@/components/pages/home/HeroSection";
import ProblemSection from "@/components/pages/home/ProblemSection";
import AlternativesSection from "@/components/pages/home/AlternativesSection";
import FeaturesSection from "@/components/pages/home/FeaturesSection";
import HowItWorksSection from "@/components/pages/home/HowItWorksSection";
import BeforeAfterSection from "@/components/pages/home/BeforeAfterSection";
import ProofSection from "@/components/pages/home/ProofSection";
import FAQSection from "@/components/pages/home/FAQSection";
import FinalCTA from "@/components/pages/home/FinalCTA";
import FooterSection from "@/components/pages/home/FooterSection";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <AlternativesSection />
      <FeaturesSection />
      <HowItWorksSection />
      <BeforeAfterSection />
      <ProofSection />
      <FAQSection />
      <FinalCTA />
      <FooterSection />
    </>
  );
}
