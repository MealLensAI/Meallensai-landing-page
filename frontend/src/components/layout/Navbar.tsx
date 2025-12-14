import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import Logo from "../Logo";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleGetStarted = () => {
    const ctaSection = document.getElementById('cta');
    if (ctaSection) {
      ctaSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: "Features", href: "#features" },
    { name: "Organizations", href: "#organizations" },
    { name: "About", href: "#about" },
    { name: "Pricing", href: "#pricing" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0a0a0f]/95 backdrop-blur-md border-b border-white/5 py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <Logo size="sm" variant="light" />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {/* Products Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="text-white/60 hover:text-white text-sm font-medium transition-colors flex items-center gap-1 outline-none">
                Products
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="bg-[#0a0a0f] border-white/10">
                <DropdownMenuItem
                  className="text-white/90 hover:text-white hover:bg-white/10 cursor-pointer"
                  onClick={() => window.open('https://www.meallensai.com/healthassistant', '_blank')}
                >
                  Health Assistant
                </DropdownMenuItem>
                <DropdownMenuItem
                  className="text-white/90 hover:text-white hover:bg-white/10 cursor-pointer"
                  onClick={() => window.open('https://meallensai.com/kitchenassistant', '_blank')}
                >
                  Kitchen Assistant
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white/60 hover:text-white text-sm font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Button variant="default" size="sm" onClick={handleGetStarted}>
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 py-4 border-t border-white/10">
            <div className="flex flex-col gap-4">
              {/* Products in Mobile */}
              <div className="flex flex-col">
                <span className="text-white/60 font-medium py-2">Products</span>
                <div className="flex flex-col pl-4 gap-2">
                  <a
                    href="#"
                    className="text-white/60 hover:text-white text-sm py-1 transition-colors"
                    onClick={(e) => {
                      e.preventDefault();
                      window.open('https://www.meallensai.com/healthassistant', '_blank');
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    Health Assistant
                  </a>
                  <a
                    href="#"
                    className="text-white/60 hover:text-white text-sm py-1 transition-colors"
                    onClick={(e) => {
                      e.preventDefault();
                      window.open('https://meallensai.com/kitchenassistant', '_blank');
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    Kitchen Assistant
                  </a>
                </div>
              </div>
              
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-white/60 hover:text-white font-medium py-2 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="flex flex-col gap-3 pt-4 border-t border-white/10">
                <Button variant="default" className="w-full" onClick={handleGetStarted}>
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
