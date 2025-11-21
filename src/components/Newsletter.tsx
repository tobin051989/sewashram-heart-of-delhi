import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";

const Newsletter = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-background to-muted">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <Card className="p-8 md:p-12 shadow-lg text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-full bg-primary/10">
                <Mail className="h-10 w-10 text-primary" />
              </div>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Stay Updated with Our Work
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8">
              Our newsletters share stories, updates, and insights from the field. Subscribe to stay connected.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1"
              />
              <Button className="bg-primary hover:bg-primary/90">
                Subscribe Now
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
