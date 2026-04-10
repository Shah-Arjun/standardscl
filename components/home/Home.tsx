import { SiteLayout } from "../layout/SiteLayout";
import { AcademicsSection } from "./AcademicsSection";
import { ActivitiesSection } from "./ActivitiesSection";
import { AdmissionCTA } from "./AdmissionCTA";
import { FacilitiesSection } from "./FacilitiesSection";
import { GradesSection } from "./GradesSection";
import { HeroSection } from "./HeroSection";
import { PrincipalMessage } from "./PrincipalMessage";
import TeachersSection from "./TeachersSection";
import { TestimonialsSection } from "./TestimonialsSection";
import WhyChooseUs from "./WhyChooseUs";



const Index = () => {
  return (
    <SiteLayout>
      <HeroSection />
      <GradesSection />
      <AcademicsSection />
      <FacilitiesSection />
      <ActivitiesSection />
      <WhyChooseUs />
      <TestimonialsSection />
      <TeachersSection />
      <PrincipalMessage />
      <AdmissionCTA />
    </SiteLayout>
  );
};

export default Index;
