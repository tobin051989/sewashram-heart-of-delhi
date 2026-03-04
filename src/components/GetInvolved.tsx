import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Users, Handshake, GraduationCap, Home, Utensils, Building2, TrendingUp, Package, Calendar, Building, Globe, Stethoscope } from "lucide-react";
import { Link } from "react-router-dom";

const GetInvolved = () => {
  const waysWithDonation = [
    { 
      icon: GraduationCap, 
      title: "Sponsor a Child", 
      description: "Support a child's education through monthly sponsorship.",
      cost: "Monthly cost per child: Rs 1501/-",
      hasLink: true
    },
    { 
      icon: Home, 
      title: "Sponsor a Bed", 
      description: "Provide daily care, medication, and support for a patient.",
      cost: "Monthly cost per patient: Rs 1801/-",
      hasLink: true
    },
    { 
      icon: Utensils, 
      title: "Sponsor a Meal", 
      description: "Offer nutritious meals for residents.",
      cost: "Cost of providing one day's meals (Breakfast, Lunch & Dinner): Rs 10001/-",
      hasLink: true
    },
    { 
      icon: Stethoscope, 
      title: "Provide Medical Support", 
      description: "Contribute towards medicines, treatment, and rehabilitation for patients.",
      cost: "Provide Medical Support Rs. 2501/- per person per month",
      note: "(Support may be given through financial contributions or in-kind medicines)",
      hasLink: false
    },
    { 
      icon: Building2, 
      title: "Adopt a Project", 
      description: "Support ongoing initiatives such as Learning Centres or Women's Empowerment programmes.",
      hasLink: true
    },
    { 
      icon: TrendingUp, 
      title: "Sponsor Skill Development", 
      description: "Enable women and youth to gain employable skills through vocational training and capacity-building programmes.",
      hasLink: true
    },
  ];

  const otherWays = [
    { 
      icon: Package, 
      title: "Give In-Kind", 
      description: "Donate clothes, medical supplies, educational materials, or essential items."
    },
    { 
      icon: Calendar, 
      title: "Celebrate with Purpose", 
      description: "Mark birthdays, anniversaries, or special occasions by sponsoring a meal or supporting a child."
    },
    { 
      icon: Building, 
      title: "Corporate Partnership", 
      description: "Partner with us through employee giving drives, health camps, skill programmes, or volunteering initiatives."
    },
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

        {/* Ways with donation links */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {waysWithDonation.map((way, index) => {
            const Icon = way.icon;
            return (
              <Card key={index} className="p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10 flex-shrink-0">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-2">{way.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{way.description}</p>
                    {way.cost && (
                      <p className="text-sm font-semibold text-primary bg-primary/10 px-3 py-2 rounded-md mb-2">
                        {way.cost}
                      </p>
                    )}
                    {way.note && (
                      <p className="text-xs text-muted-foreground italic">{way.note}</p>
                    )}
                    {way.hasLink && (
                      <Link to="/donate" className="inline-block mt-2">
                        <span className="text-sm text-primary hover:underline font-medium">
                          Donate Now →
                        </span>
                      </Link>
                    )}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Other ways to help */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {otherWays.map((way, index) => {
            const Icon = way.icon;
            return (
              <Card key={index} className="p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-accent/10 flex-shrink-0">
                    <Icon className="h-6 w-6 text-accent-foreground" />
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

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-stretch sm:items-center">
          <Link to="/donate" className="w-full sm:w-auto">
            <Button size="lg" className="bg-primary hover:bg-primary/90 px-8 w-full sm:w-auto">
              <Heart className="mr-2 h-5 w-5" />
              Donate Today
            </Button>
          </Link>
          <Link to="/contact" className="w-full sm:w-auto">
            <Button size="lg" variant="outline" className="px-8 w-full sm:w-auto">
              <Users className="mr-2 h-5 w-5" />
              Volunteer With Us
            </Button>
          </Link>
          <Link to="/contact" className="w-full sm:w-auto">
            <Button size="lg" variant="outline" className="px-8 w-full sm:w-auto">
              <Handshake className="mr-2 h-5 w-5" />
              Partner With Us
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GetInvolved;
