import { Card } from "@/components/ui/card";
import { BookOpen } from "lucide-react";

const Faith = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 md:p-12 shadow-lg bg-gradient-to-br from-primary/5 via-card to-secondary/5">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 rounded-full bg-primary/10">
                <BookOpen className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Our Faith & Belief</h2>
            </div>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              We believe we are called to serve selflessly, to be a healing balm in a hurting world, 
              and to bless others regardless of religion, caste, colour, creed, or gender.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Faith;
