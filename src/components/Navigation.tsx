import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "@/assets/logo.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  const aboutSubItems = [
    { name: "About Us", href: "/about" },
    { name: "Governance", href: "/governance" },
    { name: "Team", href: "/team" },
    { name: "Policies", href: "/policies" },
  ];

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Our Work", href: "/programs" },
    { name: "Learning Centres", href: "/learning-centres" },
    { name: "Stories", href: "/stories" },
    { name: "Newsletters", href: "/newsletters" },
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

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center space-x-1.5 2xl:space-x-3 flex-shrink-0">
            <Link to="/" className="text-foreground hover:text-primary transition-colors font-medium text-sm whitespace-nowrap">
              Home
            </Link>

            {/* About Us dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 text-foreground hover:text-primary transition-colors font-medium text-sm whitespace-nowrap py-2">
                About Us
                <ChevronDown className="h-3 w-3 transition-transform group-hover:rotate-180" />
              </button>
              <div className="absolute top-full left-0 pt-1 hidden group-hover:block">
                <div className="bg-background border border-border rounded-md shadow-lg py-1 min-w-[160px]">
                  {aboutSubItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="block px-4 py-2 text-sm text-foreground hover:text-primary hover:bg-muted/50 transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {navItems.slice(1).map((item) => (
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
              <Link to="/" className="block py-3 text-foreground hover:text-primary hover:bg-muted/50 transition-colors font-medium rounded-md px-2" onClick={() => setIsOpen(false)}>
                Home
              </Link>

              {/* About Us accordion for mobile */}
              <div>
                <button
                  onClick={() => setAboutOpen(!aboutOpen)}
                  className="flex items-center justify-between w-full py-3 text-foreground hover:text-primary hover:bg-muted/50 transition-colors font-medium rounded-md px-2"
                >
                  About Us
                  <ChevronDown className={`h-4 w-4 transition-transform ${aboutOpen ? "rotate-180" : ""}`} />
                </button>
                {aboutOpen && (
                  <div className="pl-4">
                    {aboutSubItems.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="block py-2.5 text-foreground hover:text-primary hover:bg-muted/50 transition-colors font-medium rounded-md px-2 text-sm"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {navItems.slice(1).map((item) => (
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
