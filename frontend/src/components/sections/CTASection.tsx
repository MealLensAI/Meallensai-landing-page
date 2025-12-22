import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  const handleGetStarted = () => {
    window.open('https://app.meallensai.com/signup', '_blank');
  };

  return (
    <section id="cta" className="py-12 sm:py-16 lg:py-24 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 px-2">
            Ready to change how you eat?
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground mb-8 sm:mb-10 max-w-xl mx-auto px-4 sm:px-0">
         The inflammation, chronic pain, fatigue & energy depletion that comes with chronic conditions is overhwhelming, join thousands managing these symptoms & putting an end to cooking burnout through better eating with the assistance of our AI powered Nutrition Assistant
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-6 sm:mb-8 px-4 sm:px-0">
            <Button 
              variant="hero" 
              size="xl" 
              className="group" 
              onClick={() => window.open('https://meallensai.com/kitchenassistant', '_blank')}
            >
              Try Kitchen Assistant
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="heroBlue" 
              size="xl" 
              className="group"
              onClick={() => window.open('https://www.meallensai.com/healthassistant', '_blank')}
            >
              Try Health Assistant
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <p className="text-sm text-muted-foreground">
            No credit card required. Free plan available forever.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
