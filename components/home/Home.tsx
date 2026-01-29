import { Layout } from "../layout/SiteLayout";
import { AcademicsSection } from "./AcademicsSection";
import { ActivitiesSection } from "./ActivitiesSection";
import { FacilitiesSection } from "./FacilitiesSection";
import { GradesSection } from "./GradesSection";
import { HeroSection } from "./HeroSection";
import TeachersSection from "./TeachersSection";
import { TestimonialsSection } from "./TestimonialsSection";
// import { PrincipalMessage } from "@/components/home/PrincipalMessage";
// import { AdmissionCTA } from "@/components/home/AdmissionCTA";



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
      {/*
      <PrincipalMessage />
      <AdmissionCTA /> */}
    </Layout>
  );
};

export default Index;
