import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, FileText } from "lucide-react";

const Transparency = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 md:p-12 shadow-lg bg-gradient-to-br from-card to-secondary/5">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 rounded-full bg-secondary/10">
                <Shield className="h-8 w-8 text-secondary" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Transparency & Trust
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  We are committed to stewardship, transparency, and accountability. 
                  Every rupee donated directly supports programs that heal, educate, and empower.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Transparency;
