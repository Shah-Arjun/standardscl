import { Layout } from "../layout/SiteLayout";
import { AcademicsSection } from "./AcademicsSection";
import { FacilitiesSection } from "./FacilitiesSection";
import { GradesSection } from "./GradesSection";
import { HeroSection } from "./HeroSection";
import { TestimonialsSection } from "./TestimonialsSection";
// import { PrincipalMessage } from "@/components/home/PrincipalMessage";
// import { ActivitiesSection } from "@/components/home/ActivitiesSection";
// import { AdmissionCTA } from "@/components/home/AdmissionCTA";
// import { TeachersSection } from "@/components/home/TeachersSection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <GradesSection />
      <AcademicsSection />
      <FacilitiesSection />
      <TestimonialsSection />
      {/*
      <ActivitiesSection />
      <TeachersSection />
      <PrincipalMessage />
      <AdmissionCTA /> */}
    </Layout>
  );
};

export default Index;
