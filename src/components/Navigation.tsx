import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Our Work", href: "/programs" },
    { name: "Stories", href: "/stories" },
    { name: "Team", href: "/team" },
    { name: "Get Involved", href: "/get-involved" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm shadow-sm z-50 border-b border-border">
      <div className="container-custom">
        <div className="flex items-center justify-between h-20 px-4 sm:px-6 lg:px-8">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Delhi House Society Logo" className="h-14 w-auto mr-3" />
            <div>
              <h2 className="text-xl font-bold text-foreground">Delhi House Society</h2>
              <p className="text-xs text-muted-foreground">Sewa Ashram</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                {item.name}
              </Link>
            ))}
            <Button className="bg-primary hover:bg-primary/90">
              Donate
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-foreground hover:text-primary transition-colors"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-border">
            <div className="px-4 pt-2 pb-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block py-2 text-foreground hover:text-primary transition-colors font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button className="w-full mt-4 bg-primary hover:bg-primary/90">
                Donate
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
