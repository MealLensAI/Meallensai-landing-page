import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  const handleGetStarted = () => {
    window.open('https://app.meallensai.com/signup', '_blank');
  };

  return (
    <section id="cta" className="py-24 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Ready to change how you eat?
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
            Join thousands who've ended cooking burnout and improved their health
            through smarter eating.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
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
