import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, CheckCircle, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [subscribed, setSubscribed] = useState(false);
  const { toast } = useToast();

  const handleSubscribe = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    console.log("handleSubscribe called, email:", email);
    const trimmed = email.trim();
    if (!trimmed || !trimmed.includes("@")) {
      toast({ title: "Please enter a valid email address", variant: "destructive" });
      return;
    }

    setLoading(true);
    
    let lastError: any = null;
    for (let attempt = 0; attempt < 3; attempt++) {
      const { error } = await supabase
        .from("contacts")
        .upsert({ email: trimmed, subscribed: true }, { onConflict: "email" });
      
      if (!error) {
        lastError = null;
        break;
      }
      lastError = error;
      // Wait briefly before retry
      await new Promise((r) => setTimeout(r, 500));
    }

    setLoading(false);

    if (lastError) {
      toast({ title: "Something went wrong", description: lastError.message, variant: "destructive" });
    } else {
      setSubscribed(true);
      setEmail("");
      toast({ title: "You're subscribed!", description: "Thank you for subscribing to our newsletter." });
    }
  };

  return (
    <section className="section-padding bg-gradient-to-b from-background to-muted">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <Card className="p-8 md:p-12 shadow-lg text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-full bg-primary/10">
                {subscribed ? (
                  <CheckCircle className="h-10 w-10 text-primary" />
                ) : (
                  <Mail className="h-10 w-10 text-primary" />
                )}
              </div>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {subscribed ? "Thank You for Subscribing!" : "Stay Updated with Our Work"}
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8">
              {subscribed
                ? "You'll receive our latest stories, updates, and insights in your inbox."
                : "Our newsletters share stories, updates, and insights from the field. Subscribe to stay connected."}
            </p>
            
            {!subscribed && (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-1"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={loading}
                  required
                />
                <Button type="submit" className="bg-primary hover:bg-primary/90" disabled={loading}>
                  {loading ? <Loader2 className="h-4 w-4 animate-spin mr-2" /> : null}
                  Subscribe Now
                </Button>
              </form>
            )}
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
