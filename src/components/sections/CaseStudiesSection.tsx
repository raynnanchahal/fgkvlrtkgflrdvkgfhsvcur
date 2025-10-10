import { NeuralButton } from "@/components/ui/neural-button";
import neuralWorldBg from "@/assets/neural-world-bg.png";
import businessIcons from "@/assets/business-icons.jpg";

const CaseStudiesSection = () => {
  return (
    <section className="relative w-full min-h-[600px] md:min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${neuralWorldBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/70 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-flow text-center px-4 py-16 md:py-24">
        <h2 className="headline-flow text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-12 md:mb-16 transition-all duration-500 hover:scale-105 hover:text-glow">
          We've done this — hundreds of times,
          <span className="block mt-2 text-flow">predictably.</span>
        </h2>

        {/* Blurred Brand Logos */}
        <div className="mb-12 md:mb-16 flex justify-center items-center gap-6 md:gap-8">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-lg overflow-hidden opacity-40 hover:opacity-60 transition-opacity duration-300"
              style={{
                backgroundImage: `url(${businessIcons})`,
                backgroundSize: "cover",
                backgroundPosition: `${i * 25}% 50%`,
                filter: "blur(8px) grayscale(100%)",
              }}
            />
          ))}
        </div>

        {/* CTA Button */}
        <NeuralButton
          variant="hero"
          size="lg"
          className="group"
          onClick={() => window.open("https://preview--neuroads-casecraft.lovable.app/", "_blank")}
        >
          Check Case Studies
          <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">→</span>
        </NeuralButton>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
