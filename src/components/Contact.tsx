import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, Globe } from "lucide-react";

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
          <Card className="p-8 md:p-12 shadow-lg">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">Satya Chakrapani</h3>
              <p className="text-muted-foreground">General Secretary</p>
              <p className="text-lg font-semibold text-primary mt-2">Delhi House Society – Sewa Ashram</p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4 p-4 rounded-lg bg-muted/30">
                <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-foreground mb-1">Address</p>
                  <p className="text-muted-foreground">
                    Khasra 47/25 & 48/21, Krishna Nagar,<br />
                    Singhu Border Road, Narela,<br />
                    New Delhi – 110040
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-lg bg-muted/30">
                <Mail className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <p className="font-semibold text-foreground mb-2">Email</p>
                  <div className="space-y-1">
                    <a href="mailto:gen.secy@delhihouse.org" className="block text-muted-foreground hover:text-primary transition-colors">
                      gen.secy@delhihouse.org
                    </a>
                    <a href="mailto:office@delhihouse.org" className="block text-muted-foreground hover:text-primary transition-colors">
                      office@delhihouse.org
                    </a>
                    <a href="mailto:communication@delhihouse.org" className="block text-muted-foreground hover:text-primary transition-colors">
                      communication@delhihouse.org
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-lg bg-muted/30">
                <Phone className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
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

              <div className="flex items-start gap-4 p-4 rounded-lg bg-muted/30">
                <Globe className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-foreground mb-2">Website</p>
                  <a href="http://www.delhihouse.org" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                    www.delhihouse.org
                  </a>
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
