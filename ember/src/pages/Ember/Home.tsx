import SplineHero from "../../components/SplineHero";
import HeroFX from "../../components/decor/HeroFX";
import LogoCloud from "../../components/sections/LogoCloud";
import AboutSection from "../../components/sections/AboutSection";
import ServicesSection from "../../components/sections/ServiceSection";
import ProcessSteps from "../../components/sections/ProcessSteps";
import CaseStudies from "../../components/sections/CaseStudies";
import PricingSection from "../../components/sections/PricingSection";
import CTABand from "../../components/sections/CTASection";
import Footer from "../../components/Footer";

export default function EmberHome() {
  return (
    <>
      <div className="relative">
        <HeroFX />
        <SplineHero>
          {/* your hero title/desc/buttons remain here */}
        </SplineHero>
      </div>

      <LogoCloud />
      <AboutSection />
      <ServicesSection />
      <ProcessSteps />
      <CaseStudies />
      <PricingSection />
      <CTABand />
      <Footer basePath="/ember" />
    </>
  );
}
