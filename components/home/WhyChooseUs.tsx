import { CheckCircle } from "lucide-react";

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
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-body font-bold text-sunshine text-sm uppercase tracking-widest mb-3">
            Why Us
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Why Choose Us?
          </h2>
          <p className="font-body text-primary-foreground/80 text-lg mb-12">
            A Safe & Supportive Environment for Growth
          </p>
          <div className="grid sm:grid-cols-2 gap-5 text-left">
            {reasons.map((r) => (
              <div key={r} className="flex items-start gap-3">
                <CheckCircle className="text-mint shrink-0 mt-0.5" size={22} />
                <p className="font-body text-primary-foreground/90 font-medium">{r}</p>
              </div>
            ))}
          </div>
          <a
            href="#contact"
            className="inline-block mt-12 bg-coral text-coral-foreground px-8 py-3.5 rounded-full font-body font-bold text-lg hover:opacity-90 transition-opacity"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
