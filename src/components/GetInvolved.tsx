import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Users, Handshake, GraduationCap, Home, Utensils, Gift, Building2, TrendingUp, Package, Calendar, Building, Globe } from "lucide-react";

const GetInvolved = () => {
  const ways = [
    { icon: Heart, title: "Donate", description: "Support healthcare, education, and livelihood programs." },
    { icon: Users, title: "Volunteer", description: "Contribute your time and skills." },
    { icon: Handshake, title: "Partner", description: "Collaborate through CSR or funding initiatives." },
    { icon: GraduationCap, title: "Sponsor a Child", description: "Support a child's education monthly." },
    { icon: Home, title: "Sponsor a Bed", description: "Provide daily care and medication for a patient." },
    { icon: Utensils, title: "Sponsor a Meal", description: "Offer nutritious meals for residents." },
    { icon: Heart, title: "Provide Medical Support", description: "Contribute towards medicines and rehabilitation." },
    { icon: Building2, title: "Adopt a Project", description: "Support Learning Centres or Women's Empowerment." },
    { icon: TrendingUp, title: "Sponsor Skill Development", description: "Train women and youth in employable skills." },
    { icon: Package, title: "Give In-Kind", description: "Donate clothes, medical supplies, or educational materials." },
    { icon: Calendar, title: "Celebrate with Purpose", description: "Mark special occasions by sponsoring a meal or child." },
    { icon: Building, title: "Corporate Partnership", description: "Employee giving drives, health camps, or volunteering days." },
  ];

  return (
    <section id="help" className="section-padding bg-gradient-to-b from-muted to-background">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            How You Can Help
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Make a Lasting Impact
          </p>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto mt-4">
            Your support enables us to continue this journey of transformation, restoring lives, 
            empowering individuals, and building stronger communities.
          </p>
          <div className="w-24 h-1 bg-primary mx-auto mt-6"></div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {ways.map((way, index) => {
            const Icon = way.icon;
            return (
              <Card key={index} className="p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10 flex-shrink-0">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">{way.title}</h3>
                    <p className="text-sm text-muted-foreground">{way.description}</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        <Card className="p-8 md:p-12 shadow-lg bg-gradient-to-br from-primary/5 to-accent/5 mb-12">
          <h3 className="text-2xl font-bold mb-6 text-center">Additional Ways to Support</h3>
          <div className="grid md:grid-cols-2 gap-6 text-muted-foreground">
            <div>
              <h4 className="font-semibold text-foreground mb-2">Fundraise for DHS</h4>
              <p className="text-sm">Start your own campaign to raise awareness and support for our work.</p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">Legacy Giving</h4>
              <p className="text-sm">Leave a lasting impact by including DHS in your will or estate plan.</p>
            </div>
          </div>
        </Card>

        <Card className="p-8 md:p-12 shadow-lg bg-gradient-to-br from-accent/5 to-primary/5 mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Globe className="h-8 w-8 text-primary" />
            <h3 className="text-2xl font-bold text-center">Friends of Delhi House Society – Sewa Ashram</h3>
          </div>
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <p className="text-muted-foreground">
              Friends of DHS – Sewa Ashram are part of a compassionate global community spanning countries such as Germany, New Zealand, the USA, and many others. Their solidarity and support help strengthen our mission to serve the most vulnerable and sustain our work with dignity and care.
            </p>
            <p className="text-muted-foreground">
              Join the Friends of Sewa Ashram and become part of this worldwide network of supporters who partner with us to bring hope, healing, and transformation to those in need.
            </p>
          </div>
        </Card>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90 px-8">
            <Heart className="mr-2 h-5 w-5" />
            Donate Today
          </Button>
          <Button size="lg" variant="outline" className="px-8">
            <Users className="mr-2 h-5 w-5" />
            Volunteer With Us
          </Button>
          <Button size="lg" variant="outline" className="px-8">
            <Handshake className="mr-2 h-5 w-5" />
            Partner With Us
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GetInvolved;
