import Navbar from "@/components/ui/navbar";
import HeroSection from "@/components/pages/home/HeroSection";
import ManifestoCallout from "@/components/pages/home/ManifestoCallout";
import BeforeAfterSection from "@/components/pages/home/BeforeAfterSection";
import HowItWorksSection from "@/components/pages/home/HowItWorksSection";
import SkillsSection from "@/components/pages/home/SkillsSection";
import PricingSection from "@/components/pages/home/PricingSection";
import SecuritySection from "@/components/pages/home/SecuritySection";
import FAQSection from "@/components/pages/home/FAQSection";
import FinalCTA from "@/components/pages/home/FinalCTA";
import FooterSection from "@/components/pages/home/FooterSection";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ManifestoCallout />
      <BeforeAfterSection />
      <HowItWorksSection />
      <SkillsSection />
      <PricingSection />
      <SecuritySection />
      <FAQSection />
      <FinalCTA />
      <FooterSection />
    </>
  );
}
