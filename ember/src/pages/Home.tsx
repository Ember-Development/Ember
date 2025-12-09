import SplineHero from "../components/SplineHero";
import HeroFX from "../components/decor/HeroFX";
import LogoCloud from "../components/sections/LogoCloud";
import ServicesSection from "../components/sections/ServiceSection";
import ProcessSteps from "../components/sections/ProcessSteps";
import CaseStudies from "../components/sections/CaseStudies";
import PricingSection from "../components/sections/PricingSection";
import CTABand from "../components/sections/CTASection";
import Footer from "../components/Footer";
import Reveal from "../components/Reveal";

export default function Home() {
  return (
    <>
      <div className="relative">
        <HeroFX />
        <SplineHero>
          {/* your hero title/desc/buttons remain here */}
        </SplineHero>
      </div>
      <Reveal>
        <LogoCloud />
      </Reveal>

      <ServicesSection />
      <ProcessSteps />
      <CaseStudies />
      <PricingSection />
      <CTABand />
      <Footer />
    </>
  );
}
