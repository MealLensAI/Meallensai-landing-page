import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  const handleGetStarted = () => {
    window.open('https://app.meallensai.com/signup', '_blank');
  };

  return (
    <section className="relative min-h-screen bg-[#0a0a0f] overflow-hidden">
      {/* Gradient orbs for depth */}
      <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px] bg-primary/20 rounded-full blur-[80px] sm:blur-[100px] lg:blur-[120px] -translate-x-1/2" />
      <div className="absolute top-1/3 right-1/4 w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] lg:w-[400px] lg:h-[400px] bg-blue/15 rounded-full blur-[60px] sm:blur-[80px] lg:blur-[100px] translate-x-1/2" />
      <div className="absolute bottom-1/4 left-1/2 w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] lg:w-[300px] lg:h-[300px] bg-blue/10 rounded-full blur-[50px] sm:blur-[60px] lg:blur-[80px]" />
      
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 lg:pt-32 pb-12 sm:pb-16 lg:pb-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center min-h-[calc(100vh-180px)] sm:min-h-[calc(100vh-200px)] flex flex-col justify-center">
          
          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] mb-4 sm:mb-6 lg:mb-8 text-white tracking-tight px-2">
            AI-powered food tech
            <br />
            <span className="text-gradient">solving health through food.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-base sm:text-lg lg:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed mb-8 sm:mb-10 lg:mb-12 px-4 sm:px-0">
            Tired of cooking the same meals? Managing a chronic health condition? 
            We use AI to transform your food into medicine that maintains or reverses your chronic health condition, 
            turn ingredients into personalized recipes and meal plans — instantly. 
            Food tech that solves real problems in your kitchen and your health.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-12 sm:mb-14 lg:mb-16 px-4 sm:px-0">
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

      {/* Bottom gradient fade - smooth transition to white */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-64 sm:h-80 lg:h-96 pointer-events-none"
        style={{
          background: 'linear-gradient(to top, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0.98) 5%, rgba(250, 250, 250, 0.95) 10%, rgba(240, 240, 240, 0.9) 15%, rgba(220, 220, 220, 0.8) 20%, rgba(200, 200, 200, 0.7) 25%, rgba(170, 170, 170, 0.6) 30%, rgba(140, 140, 140, 0.5) 35%, rgba(110, 110, 110, 0.4) 40%, rgba(80, 80, 80, 0.3) 45%, rgba(60, 60, 60, 0.25) 50%, rgba(45, 45, 45, 0.2) 55%, rgba(30, 30, 30, 0.15) 60%, rgba(20, 20, 20, 0.1) 65%, rgba(15, 15, 15, 0.05) 70%, rgba(10, 10, 15, 0) 100%)'
        }}
      />
    </section>
  );
};

export default HeroSection;
