import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Heart, Award, Users } from "lucide-react";

const Introduction = () => {
  const cards = [
    {
      icon: Calendar,
      text: "Since the mid-1990s, Delhi House Society – Sewa Ashram has been a sanctuary of healing and transformation for Delhi's most vulnerable: the homeless, sick, and abandoned.",
      color: "text-primary"
    },
    {
      icon: Heart,
      text: "What began as quiet whispers in the heart of our founder, Dutch monk Ton Snellaert, calling him to break the chains of injustice, stand with the poorest of the poor, and restore dignity to broken lives, has grown into a thriving community of compassion, rehabilitation, and empowerment.",
      color: "text-accent"
    },
    {
      icon: Award,
      text: "In recognition of our work as \"a modern-day Good Samaritan,\" Delhi House Society received the Mother Teresa Memorial Award for Social Justice in 2010.",
      color: "text-primary"
    },
    {
      icon: Users,
      text: "Every life touched here tells a story of resilience, faith, and restored dignity.",
      color: "text-accent"
    }
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">
          Delhi House Society – Sewa Ashram
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {cards.map((card, index) => (
            <Card 
              key={index}
              className="border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 flex gap-4">
                <div className="flex-shrink-0 pt-1">
                  <card.icon className={`h-8 w-8 ${card.color}`} />
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {card.text}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Introduction;