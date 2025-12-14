import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Two powerful products
            <br />
            <span className="text-muted-foreground font-medium">that solve real problems.</span>
          </h2>
        </div>

        {/* Product 1: Kitchen Assistant */}
        <div className="grid lg:grid-cols-2 gap-16 items-stretch mb-24">
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider mb-4 block">
              Product One
            </span>
            <h3 className="text-2xl lg:text-3xl font-bold mb-6">
              Kitchen Assistant
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              Solves cooking burnout. You buy ingredients, but end up cooking the same 2 meals over and over.
              The food gets boring. Decision fatigue kicks in. You feel like you have
              "nothing to eat" — even when your kitchen is full.
            </p>
            <p className="text-muted-foreground text-sm mb-8 italic">
              Our Kitchen Assistant changes that.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex gap-4">
                <div className="w-1 bg-primary rounded-full flex-shrink-0" />
                <div>
                  <p className="font-semibold mb-1">Snap your ingredients</p>
                  <p className="text-muted-foreground text-sm">Take a photo or type what you have. Get 10+ recipe ideas with steps.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-1 bg-primary rounded-full flex-shrink-0" />
                <div>
                  <p className="font-semibold mb-1">Weekly meal plans</p>
                  <p className="text-muted-foreground text-sm">Based on your ingredients, budget, and location.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-1 bg-primary rounded-full flex-shrink-0" />
                <div>
                  <p className="font-semibold mb-1">See a dish, learn to cook it</p>
                  <p className="text-muted-foreground text-sm">Snap any food and our AI will teach you how to make it.</p>
                </div>
              </div>
            </div>
            <Button 
              variant="hero" 
              size="lg" 
              className="group mt-auto"
              onClick={() => window.open('https://meallensai.com/kitchenassistant', '_blank')}
            >
              Try Kitchen Assistant
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg flex items-center">
            <img 
              src="/assets/images/kitchen-assistant-preview.png" 
              alt="Kitchen Assistant - Upload fridge photo to detect ingredients and get recipe suggestions"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Product 2: Health Assistant - Blue for Health */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="lg:order-2">
            <span className="text-sm font-semibold text-blue uppercase tracking-wider mb-4 block">
              Product Two
            </span>
            <h3 className="text-2xl lg:text-3xl font-bold mb-6">
              Health Assistant
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              Solves health management through food. Most people with diabetes, hypertension, or PCOS don't know which foods help.
              Or they're told "eat yam and beans forever" — with no variety, no joy.
            </p>
            <p className="text-muted-foreground text-sm mb-8 italic">
              Our Health Assistant changes that.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex gap-4">
                <div className="w-1 bg-blue rounded-full flex-shrink-0" />
                <div>
                  <p className="font-semibold mb-1">Condition-based recommendations</p>
                  <p className="text-muted-foreground text-sm">Enter your health conditions. Get foods that actually help.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-1 bg-blue rounded-full flex-shrink-0" />
                <div>
                  <p className="font-semibold mb-1">Turn restrictions into variety</p>
                  <p className="text-muted-foreground text-sm">Give us your allowed ingredients. We'll generate 10+ meals from them.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-1 bg-blue rounded-full flex-shrink-0" />
                <div>
                  <p className="font-semibold mb-1">Track your progress</p>
                  <p className="text-muted-foreground text-sm">See how your diet choices improve your health over time.</p>
                </div>
              </div>
            </div>
            <Button 
              variant="heroBlue" 
              size="lg" 
              className="group"
              onClick={() => window.open('https://www.meallensai.com/healthassistant', '_blank')}
            >
              Try Health Assistant
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg lg:order-1">
            <img 
              src="/assets/images/health-assistant-preview.png" 
              alt="Health Assistant - Diet Planner showing weekly meal plans with nutritional information"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
