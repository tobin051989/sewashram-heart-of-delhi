import { Card } from "@/components/ui/card";
import { Heart, Target, Eye, Award } from "lucide-react";

const About = () => {
  const values = [
    "People First: People are our highest priority.",
    "Compassion & Dignity: Serving with empathy and respect.",
    "Integrity: We do what we say.",
    "Servant Leadership: We listen, learn, and serve.",
    "Collaboration: One team, one dream.",
    "Pioneering Spirit: Unafraid to do what hasn't been done before.",
    "Justice: Standing for the oppressed and voiceless.",
  ];

  return (
    <section id="about" className="section-padding bg-gradient-to-b from-background to-muted">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">About Us</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid gap-12 max-w-5xl mx-auto">
          {/* Who We Are */}
          <Card className="p-8 shadow-lg">
            <div className="flex items-start gap-4 mb-4">
              <Heart className="h-8 w-8 text-primary flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-bold mb-4">Who We Are</h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Delhi House Society (DHS) is a humanitarian development organization founded by Mr. Ton Snellaert with the mission to uplift the lives of the poor and marginalized in Delhi.
                  </p>
                  <p>
                    We serve the poorest of the poor by addressing critical needs in health, education, clean water, and sanitation.
                  </p>
                  <p>
                    At the heart of our work is <strong className="text-foreground">Sewa Ashram</strong>, formally registered in 1999 and located in Narela, North Delhi—a sanctuary for the destitute offering healthcare, rehabilitation, education, and social reintegration. Our holistic approach addresses physical, emotional, intellectual, financial, social, and spiritual well-being.
                  </p>
                  <p>
                    Now under the leadership of Mr. Satyavir Chakrapani and guided by a dedicated board, DHS continues to operate with integrity and compassion as a nonprofit registered under the Societies Registration Act of 1860.
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* Our History */}
          <Card className="p-8 shadow-lg">
            <div className="flex items-start gap-4 mb-4">
              <Award className="h-8 w-8 text-primary flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-bold mb-4">Our History</h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    The journey began in the mid-1990s when Ton Snellaert, moved by compassion, began rescuing the sick and abandoned from the streets of Yamuna Bazaar, offering them emergency healthcare and a home filled with love.
                  </p>
                  <p>
                    In 1999, the Ashram shifted to Narela, where it started humbly with mud and thatched huts. Over time, the community grew stronger, expanding its services to house up to 150 residents, with a medical clinic for regular and emergency care and safe living spaces.
                  </p>
                  <p>
                    Today, Sewa Ashram stands as a center of hope, serving over 3,000 individuals, guided by its core philosophy of <strong className="text-foreground">Caring, Connecting, Equipping, and Empowering</strong>.
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* Mission, Vision, Values */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 shadow-lg">
              <div className="flex items-start gap-4 mb-4">
                <Target className="h-8 w-8 text-primary flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To love, serve, and empower the poorest of the poor, restoring dignity, building capacity, and creating places of blessing where broken lives and communities are rebuilt.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 shadow-lg">
              <div className="flex items-start gap-4 mb-4">
                <Eye className="h-8 w-8 text-primary flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To see lives transformed—economically, physically, emotionally, socially, and spiritually—walking in the fullness of life as purposed by God.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Core Values */}
          <Card className="p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-6">Our Core Values</h3>
            <ul className="grid md:grid-cols-2 gap-4">
              {values.map((value, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">{value}</span>
                </li>
              ))}
            </ul>
          </Card>

          {/* Our Inspiration */}
          <Card className="p-8 shadow-lg bg-gradient-to-br from-primary/5 to-accent/5">
            <h3 className="text-2xl font-bold mb-4">Our Inspiration</h3>
            <p className="text-muted-foreground leading-relaxed italic">
              Rooted in biblical values of compassion, justice, and freedom, we are called to "loose the chains of injustice and set the oppressed free." This conviction shapes every aspect of our work, from healthcare and education to rehabilitation and empowerment.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
