import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Heart } from "lucide-react";
import logo from "@/assets/logo.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const location = useLocation();

  const aboutSubItems = [
    { name: "About Us", href: "/about" },
    { name: "Governance", href: "/governance" },
    { name: "Team", href: "/team" },
    { name: "Policies", href: "/policies" },
  ];

  const aboutPaths = aboutSubItems.map((i) => i.href);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Our Work", href: "/programs" },
    { name: "Learning Centres", href: "/learning-centres" },
    { name: "Stories", href: "/stories" },
    { name: "Newsletters", href: "/newsletters" },
    { name: "Get Involved", href: "/get-involved" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => location.pathname === href;
  const isAboutActive = aboutPaths.includes(location.pathname);

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b border-border/50 shadow-[0_1px_12px_hsl(var(--foreground)/0.04)]">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 sm:h-[72px] px-3 sm:px-4 lg:px-8">
          {/* Logo */}
          <Link to="/" className="flex items-center min-w-0 flex-shrink-0 mr-6 group">
            <img
              src={logo}
              alt="Delhi House Society Logo"
              className="h-10 sm:h-12 w-auto mr-2.5 flex-shrink-0 transition-transform duration-300 group-hover:scale-105"
            />
            <div className="min-w-0">
              <h2 className="text-base sm:text-lg font-bold text-foreground tracking-tight truncate" style={{ fontFamily: "'Crimson Text', serif" }}>
                Delhi House Society
              </h2>
              <p className="text-[11px] text-muted-foreground hidden sm:block tracking-widest uppercase">
                Sewa Ashram
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center gap-1 flex-shrink-0">
            {/* Home */}
            <Link
              to="/"
              className={`relative px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                isActive("/")
                  ? "text-primary bg-primary/8"
                  : "text-foreground/75 hover:text-foreground hover:bg-muted/60"
              }`}
            >
              Home
            </Link>

            {/* About Us dropdown */}
            <div className="relative group">
              <button
                className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                  isAboutActive
                    ? "text-primary bg-primary/8"
                    : "text-foreground/75 hover:text-foreground hover:bg-muted/60"
                }`}
              >
                About Us
                <ChevronDown className="h-3 w-3 transition-transform duration-300 group-hover:rotate-180 opacity-60" />
              </button>
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="bg-background/95 backdrop-blur-md border border-border/60 rounded-xl shadow-[0_8px_30px_hsl(var(--foreground)/0.08)] py-2 min-w-[180px] overflow-hidden">
                  {aboutSubItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`block px-4 py-2.5 text-sm transition-all duration-150 ${
                        isActive(item.href)
                          ? "text-primary bg-primary/8 font-medium"
                          : "text-foreground/75 hover:text-primary hover:bg-muted/50 hover:pl-5"
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Other nav items */}
            {navItems.slice(1).map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`relative px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                  isActive(item.href)
                    ? "text-primary bg-primary/8"
                    : "text-foreground/75 hover:text-foreground hover:bg-muted/60"
                }`}
              >
                {item.name}
              </Link>
            ))}

            {/* Donate CTA */}
            <Button
              className="ml-2 bg-gradient-to-r from-primary to-accent text-primary-foreground hover:shadow-[var(--shadow-warm)] hover:scale-[1.03] transition-all duration-300 rounded-full px-5 font-semibold text-sm"
              asChild
            >
              <Link to="/donate" className="flex items-center gap-1.5">
                <Heart className="h-3.5 w-3.5" />
                Donate
              </Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="xl:hidden p-2.5 rounded-xl text-foreground hover:bg-muted/60 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="xl:hidden border-t border-border/50 bg-background/95 backdrop-blur-md animate-in slide-in-from-top-2 duration-200">
            <div className="px-4 pt-3 pb-5 space-y-0.5">
              <Link
                to="/"
                className={`block py-3 rounded-lg px-3 font-medium transition-all ${
                  isActive("/") ? "text-primary bg-primary/8" : "text-foreground/80 hover:text-foreground hover:bg-muted/50"
                }`}
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>

              {/* About Us accordion */}
              <div>
                <button
                  onClick={() => setAboutOpen(!aboutOpen)}
                  className={`flex items-center justify-between w-full py-3 rounded-lg px-3 font-medium transition-all ${
                    isAboutActive ? "text-primary bg-primary/8" : "text-foreground/80 hover:text-foreground hover:bg-muted/50"
                  }`}
                >
                  About Us
                  <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${aboutOpen ? "rotate-180" : ""}`} />
                </button>
                {aboutOpen && (
                  <div className="ml-3 pl-3 border-l-2 border-primary/20 space-y-0.5 mt-1 mb-1">
                    {aboutSubItems.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={`block py-2.5 rounded-lg px-3 text-sm font-medium transition-all ${
                          isActive(item.href) ? "text-primary bg-primary/8" : "text-foreground/70 hover:text-foreground hover:bg-muted/50"
                        }`}
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
                  className={`block py-3 rounded-lg px-3 font-medium transition-all ${
                    isActive(item.href) ? "text-primary bg-primary/8" : "text-foreground/80 hover:text-foreground hover:bg-muted/50"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              <div className="pt-3">
                <Button
                  className="w-full bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-full font-semibold"
                  asChild
                >
                  <Link to="/donate" onClick={() => setIsOpen(false)} className="flex items-center justify-center gap-2">
                    <Heart className="h-4 w-4" />
                    Donate
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
