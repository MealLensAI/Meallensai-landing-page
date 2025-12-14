const Footer = () => {
  const footerLinks = {
    Product: [
      { name: "Features", href: "#features" },
      { name: "For Organizations", href: "#organizations" },
    ],
    Company: [
      { name: "About", href: "#about" },
      { name: "Blog", href: "#" },
      { name: "Careers", href: "#" },
    ],
    Legal: [
      { name: "Privacy", href: "#" },
      { name: "Terms", href: "#" },
    ],
  };

  return (
    <footer className="bg-foreground text-primary-foreground py-10 sm:py-12 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 lg:gap-12 mb-8 sm:mb-10 lg:mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-2">
            <p className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">
              Meal<span className="text-primary">Lens</span>AI
            </p>
            <p className="text-primary-foreground/70 max-w-sm mb-4 sm:mb-6 text-sm sm:text-base">
              Better health through food. End cooking burnout.
            </p>
            <div className="space-y-1 sm:space-y-2">
              <p className="text-xs sm:text-sm text-primary-foreground/50">
                meallensai@gmail.com
              </p>
              <p className="text-xs sm:text-sm text-primary-foreground/50">
                +274748703778
              </p>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold mb-4 text-sm">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-primary-foreground/60 hover:text-primary-foreground transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-primary-foreground/10">
          <p className="text-sm text-primary-foreground/40">
            © {new Date().getFullYear()} MealLensAI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
