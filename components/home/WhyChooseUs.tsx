import { CheckCircle } from "lucide-react";
import { SectionHeader } from "../shared/SectionHeader";



const reasons = [
  "Qualified and experienced educators passionate about teaching",
  "Small class sizes for personalized attention and care",
  "Secure, child-friendly boarding and day facilities",
  "A balanced mix of academics, sports, and creative arts",
  "Modern science labs, library, and computer facilities",
  "Regular parent-teacher communication and involvement",
];



const WhyChooseUs = () => {
  return (
    
    <section className="section-padding bg-gradient-hero relative overflow-hidden">

    <div className="container-school relative z-10">
          <SectionHeader
            title="Why Choose Us?"
            subtitle="A safe & supportive environment for all round development"
            light
          />
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="grid sm:grid-cols-2 gap-5 text-left">
            {reasons.map((r) => (
              <div key={r} className="flex items-start gap-3">
                <CheckCircle className="text-mint shrink-0 mt-0.5" size={22} />
                <p className="font-body text-primary-foreground/90 font-medium">{r}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
</div>
</section>
  );
};

export default WhyChooseUs;


