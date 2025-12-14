import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  const handleGetStarted = () => {
    window.open('https://app.meallensai.com/signup', '_blank');
  };

  return (
    <section className="relative min-h-screen bg-[#0a0a0f] overflow-hidden">
      {/* Gradient orbs for depth */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -translate-x-1/2" />
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-blue/15 rounded-full blur-[100px] translate-x-1/2" />
      <div className="absolute bottom-1/4 left-1/2 w-[300px] h-[300px] bg-blue/10 rounded-full blur-[80px]" />
      
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="container mx-auto px-4 lg:px-8 pt-32 pb-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center min-h-[calc(100vh-200px)] flex flex-col justify-center">
          
          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.1] mb-8 text-white tracking-tight">
            Better health starts
            <br />
            <span className="text-gradient">with what you eat.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg lg:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed mb-12">
            Tired of cooking the same meals? Managing a health condition through diet? 
            MealLensAI turns your ingredients into personalized recipes — instantly.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              variant="hero" 
              size="lg" 
              className="group shadow-glow-orange" 
              onClick={() => window.open('https://meallensai.com/kitchenassistant', '_blank')}
            >
              Try Kitchen Assistant
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="heroBlue" 
              size="lg" 
              className="group shadow-glow-blue" 
              onClick={() => window.open('https://www.meallensai.com/healthassistant', '_blank')}
            >
              Try Health Assistant
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
