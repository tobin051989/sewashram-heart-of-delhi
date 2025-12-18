import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center mb-4">
              <img src={logo} alt="Delhi House Society Logo" className="h-12 w-auto mr-2" />
              <div>
                <h3 className="font-bold text-lg">Delhi House Society</h3>
                <p className="text-sm text-background/80">Sewa Ashram</p>
              </div>
            </div>
            <p className="text-sm text-background/70 leading-relaxed">
              Transforming lives and restoring hope since the mid-nineties. 
              Serving Delhi's most vulnerable with compassion, dignity, and love.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li><a href="/about" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="/programs" className="hover:text-primary transition-colors">Our Work</a></li>
              <li><a href="/stories" className="hover:text-primary transition-colors">Stories</a></li>
              <li><a href="/gallery" className="hover:text-primary transition-colors">Gallery</a></li>
              <li><a href="/team" className="hover:text-primary transition-colors">Team</a></li>
              <li><a href="/get-involved" className="hover:text-primary transition-colors">Get Involved</a></li>
              <li><a href="/contact" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <div className="space-y-2 text-sm text-background/70">
              <p>Narela, New Delhi – 110040</p>
              <p>Phone: +91 93119 68001</p>
              <p>Email: office@delhihouse.org</p>
              <p>Web: www.delhihouse.org</p>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center">
          <p className="text-sm text-background/70">
            © {new Date().getFullYear()} Delhi House Society – Sewa Ashram. All rights reserved.
          </p>
          <p className="text-xs text-background/60 mt-2">
            Registered under the Societies Registration Act of 1860
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
