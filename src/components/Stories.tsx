import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Quote } from "lucide-react";

const Stories = () => {
  return (
    <section id="stories" className="section-padding bg-gradient-to-b from-muted to-background">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Stories of Transformation
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real People. Real Change.
          </p>
          <div className="w-24 h-1 bg-primary mx-auto mt-6"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="p-8 md:p-12 shadow-lg bg-gradient-to-br from-card to-card/50">
            <Quote className="h-12 w-12 text-primary mb-6" />
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
              From men once rescued from the streets who now mentor others, to mothers rebuilding their families through new skills, every story reflects the power of love, care, and community.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8 italic">
              Each life touched at Delhi House Society tells a unique story of resilience, faith, and restored dignity. These stories are the heart of our mission and the proof that transformation is possible when compassion meets action.
            </p>
            <div className="text-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Read More Life Stories
              </Button>
            </div>
          </Card>

          <p className="text-center text-sm text-muted-foreground mt-8 italic">
            More inspiring transformation stories will be added soon
          </p>
        </div>
      </div>
    </section>
  );
};

export default Stories;
