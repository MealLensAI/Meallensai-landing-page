import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Crown } from "lucide-react";
import { APP_CONFIG, getPlanPrice, getPlanDisplayName, getPlanDurationText, getPlanFeatures } from "@/lib/config";

const PricingSection = () => {
  const handleGetStarted = () => {
    window.open('https://app.meallensai.com/signup', '_blank');
  };

  return (
    <section id="pricing" className="py-12 sm:py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <Badge className="mb-3 sm:mb-4 bg-primary/10 text-primary border-primary/20 text-xs sm:text-sm">
            <Crown className="h-3 w-3 mr-2" />
            Simple Pricing
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 px-2">
            Choose Your Perfect
            <span className="block text-gradient mt-2">Plan</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto px-4 sm:px-0">
            Start with a 2-day free trial, then choose the plan that works best for you. All plans include both Cooking and Health Assistant features.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6 max-w-7xl mx-auto mb-10 sm:mb-12 overflow-x-auto pb-4">
          {APP_CONFIG.subscriptionPlans.map((plan: any) => (
            <Card key={plan.id} className={`relative border-2 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 ${
              plan.id === 'monthly' ? 'border-primary shadow-lg' : 'border-border'
            }`}>
              {plan.id === 'monthly' && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                  <Badge className="bg-primary text-primary-foreground px-3 py-1 text-xs font-semibold shadow-lg">
                    Most Popular
                  </Badge>
                </div>
              )}
              {plan.id === 'yearly' && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                  <Badge className="bg-success text-primary-foreground px-3 py-1 text-xs font-semibold shadow-lg">
                    Best Value
                  </Badge>
                </div>
              )}
              <CardHeader className="text-center pb-4 pt-6 px-4">
                <CardTitle className="text-base sm:text-lg font-bold mb-2">
                  {getPlanDisplayName(plan.id)}
                </CardTitle>
                <div className="mt-4">
                  <div className="flex items-baseline justify-center">
                    <span className="text-2xl sm:text-3xl font-bold text-primary">
                      ${getPlanPrice(plan.id, plan.billing_cycle).toFixed(2)}
                    </span>
                  </div>
                  <span className="text-xs sm:text-sm text-muted-foreground mt-1 block">
                    {getPlanDurationText(plan.billing_cycle)}
                  </span>
                  {plan.id === 'yearly' && (
                    <div className="mt-2">
                      <span className="text-xs text-success font-semibold bg-success/10 px-2 py-1 rounded-full">
                        Save $20/year
                      </span>
                    </div>
                  )}
                </div>
              </CardHeader>
              <CardContent className="space-y-4 px-4 pb-6">
                <ul className="space-y-2">
                  {getPlanFeatures(plan.id).map((feature: string, index: number) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-xs text-muted-foreground leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  onClick={handleGetStarted}
                  className={`w-full mt-4 text-sm font-semibold py-2 ${
                    plan.id === 'monthly'
                      ? 'bg-primary hover:bg-primary/90 text-primary-foreground'
                      : 'bg-accent hover:bg-primary hover:text-primary-foreground text-foreground transition-all duration-300'
                  }`}
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center px-4 sm:px-0">
          <div className="bg-card rounded-lg p-4 sm:p-6 shadow-lg max-w-2xl mx-auto border border-border">
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">All Plans Include:</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 text-xs sm:text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span>2-day free trial</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-blue" />
                <span>Both Cooking & Health Assistants</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span>Cancel anytime</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-blue" />
                <span>No hidden fees</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
