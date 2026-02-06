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
    { name: "Learning Centres", href: "/learning-centres" },
    { name: "Stories", href: "/stories" },
    { name: "Governance", href: "/governance" },
    { name: "Team", href: "/team" },
    { name: "Policies", href: "/policies" },
    { name: "Get Involved", href: "/get-involved" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm shadow-sm z-50 border-b border-border">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 sm:h-20 px-3 sm:px-4 lg:px-8">
          <Link to="/" className="flex items-center min-w-0 flex-shrink-0 mr-4">
            <img src={logo} alt="Delhi House Society Logo" className="h-10 sm:h-14 w-auto mr-2 sm:mr-3 flex-shrink-0" />
            <div className="min-w-0">
              <h2 className="text-base sm:text-xl font-bold text-foreground truncate">Delhi House Society</h2>
              <p className="text-xs text-muted-foreground hidden sm:block">Sewa Ashram</p>
            </div>
          </Link>

          {/* Desktop Navigation - only show on xl screens due to many items */}
          <div className="hidden xl:flex items-center space-x-1.5 2xl:space-x-3 flex-shrink-0">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-foreground hover:text-primary transition-colors font-medium text-sm whitespace-nowrap"
              >
                {item.name}
              </Link>
            ))}
            <Button className="bg-primary hover:bg-primary/90 text-sm" asChild>
              <Link to="/donate">Donate</Link>
            </Button>
          </div>

          {/* Mobile/Tablet menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="xl:hidden p-2 rounded-md text-foreground hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile/Tablet Navigation */}
        {isOpen && (
          <div className="xl:hidden border-t border-border bg-background">
            <div className="px-4 pt-2 pb-4 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block py-3 text-foreground hover:text-primary hover:bg-muted/50 transition-colors font-medium rounded-md px-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button className="w-full mt-4 bg-primary hover:bg-primary/90" asChild>
                <Link to="/donate" onClick={() => setIsOpen(false)}>Donate</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
