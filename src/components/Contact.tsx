import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Globe, Facebook, Instagram, ExternalLink } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-muted to-background">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Contact Us</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We'd love to hear from you
          </p>
          <div className="w-24 h-1 bg-primary mx-auto mt-6"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="p-4 sm:p-8 md:p-12 shadow-lg overflow-hidden">
            <div className="text-center mb-8">
              <div className="space-y-4">
                <div>
                  <h3 className="text-2xl font-bold">Satya Chakrapani</h3>
                  <p className="text-muted-foreground">General Secretary</p>
                  <p className="text-lg font-semibold text-primary">Delhi House Society – Sewa Ashram</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Keshav Pandey</h3>
                  <p className="text-muted-foreground">Team Lead</p>
                  <p className="text-lg font-semibold text-primary">Delhi House Society – Sewa Ashram</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg bg-muted/30 min-w-0">
                <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-primary flex-shrink-0 mt-1" />
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-foreground mb-1">Address</p>
                  <p className="text-muted-foreground mb-3">
                    Khasra 47/25 & 48/21, Krishna Nagar,<br />
                    Singhu Border Road, Narela,<br />
                    New Delhi – 110040
                  </p>
                  <a 
                    href="https://maps.app.goo.gl/zuLB8Hh7Xmjc3hvTA" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" size="sm" className="gap-2 hover:bg-primary hover:text-primary-foreground transition-colors">
                      <MapPin className="h-4 w-4" />
                      View on Google Maps
                      <ExternalLink className="h-3 w-3" />
                    </Button>
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg bg-muted/30 min-w-0">
                <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-primary flex-shrink-0 mt-1" />
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-foreground mb-2">Email</p>
                  <div className="space-y-1">
                    <a href="mailto:gen.secy@delhihouse.org" className="block text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors truncate">
                      gen.secy@delhihouse.org
                    </a>
                    <a href="mailto:keshav@delhihouse.org" className="block text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors truncate">
                      keshav@delhihouse.org
                    </a>
                    <a href="mailto:communication@delhihouse.org" className="block text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors truncate">
                      communication@delhihouse.org
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg bg-muted/30 min-w-0">
                <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-foreground mb-2">Phone</p>
                  <div className="space-y-1">
                    <a href="tel:+919311968001" className="block text-muted-foreground hover:text-primary transition-colors">
                      +91 93119 68001
                    </a>
                    <a href="tel:+919990054101" className="block text-muted-foreground hover:text-primary transition-colors">
                      +91 9990054101
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg bg-muted/30 min-w-0">
                <Globe className="h-5 w-5 sm:h-6 sm:w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-foreground mb-2">Website</p>
                  <a href="http://www.delhihouse.org" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                    www.delhihouse.org
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg bg-muted/30 min-w-0">
                <div className="flex gap-2 flex-shrink-0">
                  <Facebook className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                  <Instagram className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-semibold text-foreground mb-2">Social Media</p>
                  <div className="space-y-1">
                    <a href="https://www.facebook.com/delhihouse.org" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors">
                      <Facebook className="h-4 w-4 flex-shrink-0" />
                      <span className="truncate">facebook.com/delhihouse.org</span>
                    </a>
                    <a href="https://www.instagram.com/delhihousesocietys/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors">
                      <Instagram className="h-4 w-4 flex-shrink-0" />
                      <span className="truncate">instagram.com/delhihousesocietys</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
