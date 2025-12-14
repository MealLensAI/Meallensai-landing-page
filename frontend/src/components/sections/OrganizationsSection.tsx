import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const OrganizationsSection = () => {
  const handleGetStarted = () => {
    window.open('https://app.meallensai.com/signup', '_blank');
  };

  return (
    <section id="organizations" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 text-center mx-auto">
          <span className="text-sm font-semibold text-blue uppercase tracking-wider mb-4 block">
            For Organizations
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Scale nutrition guidance without scaling your staff
          </h2>
          <p className="text-lg text-muted-foreground">
            Help thousands of patients improve their health through food — efficiently, affordably, and at scale.
          </p>
        </div>

        {/* Organization types */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
          <div className="border border-border rounded-xl p-6 bg-card">
            <h3 className="text-lg font-bold mb-3">Hospitals & Clinics</h3>
            <p className="text-muted-foreground text-sm">
              Provide instant AI-powered diet plans to patients. Handle 10x more cases without additional staff.
            </p>
          </div>

          <div className="border border-border rounded-xl p-6 bg-card">
            <h3 className="text-lg font-bold mb-3">Pharmacies</h3>
            <p className="text-muted-foreground text-sm">
              Offer food-based solutions when patients test positive for chronic conditions — alongside medication.
            </p>
          </div>

          <div className="border border-border rounded-xl p-6 bg-card">
            <h3 className="text-lg font-bold mb-3">Nutritionists</h3>
            <p className="text-muted-foreground text-sm">
              Replace manual calculations with AI. Serve more patients with personalized nutrition plans.
            </p>
          </div>

          <div className="border border-border rounded-xl p-6 bg-card">
            <h3 className="text-lg font-bold mb-3">Insurance & HMOs</h3>
            <p className="text-muted-foreground text-sm">
              Reduce healthcare claims by helping clients with chronic conditions improve their health naturally.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            variant="hero" 
            size="lg" 
            className="group" 
            onClick={() => window.location.href = 'mailto:meallensai@gmail.com'}
          >
            Partner With Us
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button 
            variant="heroOutline" 
            size="lg"
            onClick={() => window.open('https://healthassistant.meallensai.com/signup', '_blank')}
          >
            Try it out
          </Button>
        </div>
      </div>
    </section>
  );
};

export default OrganizationsSection;
