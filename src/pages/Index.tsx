
import { ModernHeader } from '@/components/modern/ModernHeader';
import { HeroSection } from '@/components/modern/HeroSection';
import Footer from '@/components/Footer';
import { FeaturesSection } from '@/components/landing/FeaturesSection';
import { HowItWorksSection } from '@/components/landing/HowItWorksSection';
import { ReferenceCustomersSection } from '@/components/landing/ReferenceCustomersSection';
import { StatsSection } from '@/components/landing/StatsSection';
import { PricingSection } from '@/components/landing/PricingSection';
import { CtaSection } from '@/components/landing/CtaSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <ModernHeader />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <ReferenceCustomersSection />
      <StatsSection />
      <PricingSection />
      <CtaSection />
      <Footer />
    </div>
  );
};

export default Index;
