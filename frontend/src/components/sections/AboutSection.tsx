const AboutSection = () => {
  return (
    <section id="about" className="py-12 sm:py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start">
          {/* Left: Vision & Mission */}
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 sm:mb-10 lg:mb-12">
              Why we built this
            </h2>
            
            <div className="space-y-8 sm:space-y-10">
              <div>
                <h3 className="font-semibold text-base sm:text-lg mb-2 sm:mb-3">Our vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To become the world's most trusted AI food and health assistant — 
                  helping every person and organization transform health outcomes
                  through better eating, without stress or confusion.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-base sm:text-lg mb-2 sm:mb-3">Our mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Make cooking simple. Make healthy eating effortless. Use AI to
                  personalize food choices that improve lives and empower communities
                  through better nutrition.
                </p>
              </div>

              <blockquote className="border-l-4 border-primary pl-4 sm:pl-6 py-2">
                <p className="text-lg sm:text-xl font-semibold">
                End Cooking Burnout & Get Better Health Through Your Food 
                </p>
                <cite className="text-xs sm:text-sm text-muted-foreground mt-2 block">— Our motto</cite>
              </blockquote>
            </div>
          </div>

          {/* Right: Who we serve */}
          <div className="bg-card rounded-2xl p-6 sm:p-8 lg:p-10">
            <h3 className="text-lg sm:text-xl font-bold mb-6 sm:mb-8">Who we serve</h3>
            
            <div className="space-y-6 sm:space-y-8">
              <div>
                <h4 className="font-semibold text-primary mb-4">Individuals</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>People tired of cooking the same meals</li>
                  <li>Those managing chronic health conditions</li>
                  <li>Anyone with weight goals</li>
                  <li>Busy professionals who need quick solutions</li>
                  <li>Beginners learning to cook</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-success mb-4">Organizations</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>Hospitals and clinics</li>
                  <li>Nutritionists and dietitians</li>
                  <li>Pharmacies</li>
                  <li>Insurance companies and HMOs</li>
                  <li>Gyms and wellness centers</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
