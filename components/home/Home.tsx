import { Layout } from "../layout/SiteLayout";
import { AcademicsSection } from "./AcademicsSection";
import { ActivitiesSection } from "./ActivitiesSection";
import { AdmissionCTA } from "./AdmissionCTA";
import { FacilitiesSection } from "./FacilitiesSection";
import { GradesSection } from "./GradesSection";
import { HeroSection } from "./HeroSection";
import { PrincipalMessage } from "./PrincipalMessage";
import TeachersSection from "./TeachersSection";
import { TestimonialsSection } from "./TestimonialsSection";



const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <GradesSection />
      <AcademicsSection />
      <FacilitiesSection />
      <TestimonialsSection />
      <ActivitiesSection />
      <TeachersSection />
      <PrincipalMessage />
      <AdmissionCTA />
    </Layout>
  );
};

export default Index;
