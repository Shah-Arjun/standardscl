"use client"

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export const SectionHeader = ({ title, subtitle, centered = true, light = false }: SectionHeaderProps) => {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""}`}>
      <h2
        className={`font-heading font-bold text-3xl md:text-4xl lg:text-5xl mb-4 ${
          light ? "text-background" : "text-foreground"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-md md:text-lg lg:text-lg max-w-2xl ${centered ? "mx-auto" : ""} ${
            light ? "text-background/80" : "text-muted-foreground"
          }`}
        >
          {subtitle}
        </p>
      )}
      <div
        className={`w-24 h-1.5 bg-gradient-hero rounded-full mt-6 ${
          centered ? "mx-auto" : ""
        }`}
      />
    </div>
  );
};
