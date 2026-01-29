import { Layout } from "../layout/SiteLayout";
import { GradesSection } from "./GradesSection";
import { HeroSection } from "./HeroSection";
// import { FacilitiesSection } from "@/components/home/FacilitiesSection";
// import { AcademicsSection } from "@/components/home/AcademicsSection";
// import { TestimonialsSection } from "@/components/home/TestimonialsSection";
// import { PrincipalMessage } from "@/components/home/PrincipalMessage";
// import { ActivitiesSection } from "@/components/home/ActivitiesSection";
// import { AdmissionCTA } from "@/components/home/AdmissionCTA";
// import { TeachersSection } from "@/components/home/TeachersSection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <GradesSection />
      {/*<AcademicsSection />
      <FacilitiesSection />
      <TestimonialsSection />
      <ActivitiesSection />
      <TeachersSection />
      <PrincipalMessage />
      <AdmissionCTA /> */}
    </Layout>
  );
};

export default Index;
