import { Card } from "@/components/ui/card";
import { Heart, Target, Eye, Award, Users, Linkedin } from "lucide-react";

// Board member images
import pramodSingh from "@/assets/board/pramod-singh.jfif";
import satyavirChakrapani from "@/assets/board/satyavir-chakrapani.jpg";
import sumitChetty from "@/assets/board/sumit-chetty.jpeg";
import estherGhosh from "@/assets/board/esther-ghosh.jpg";
import samirDeokuliar from "@/assets/board/samir-deokuliar.jpg";
import ektaJohn from "@/assets/board/ekta-john.jpeg";

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

  const boardMembers = [
    {
      name: "Mr. Pramod Kumar Singh",
      role: "Board Chairman",
      image: pramodSingh,
      linkedin: "https://www.linkedin.com/in/pramod-singh-1b1b1b1b/",
    },
    {
      name: "Mr. Satyavir Chakrapani",
      role: "General Secretary",
      image: satyavirChakrapani,
      linkedin: "https://www.linkedin.com/in/satyavir-chakrapani/",
    },
    {
      name: "Mr. Sumit K. Chetty",
      role: "Treasurer",
      image: sumitChetty,
      linkedin: null,
    },
    {
      name: "Ms. Esther Anupama Ghosh",
      role: "Member",
      image: estherGhosh,
      linkedin: "https://www.linkedin.com/in/esther-anupama-ghosh/",
    },
    {
      name: "Mr. Samir Deokuliar",
      role: "Member",
      image: samirDeokuliar,
      linkedin: "https://www.linkedin.com/in/samir-deokuliar/",
    },
    {
      name: "Ms. Ekta Ahuja John",
      role: "Member",
      image: ektaJohn,
      linkedin: "https://www.linkedin.com/in/ekta-ahuja-john/",
    },
    {
      name: "Ms. N. Christina",
      role: "Member",
      image: null,
      linkedin: null,
    },
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
                    Now under the leadership of Mr. Satyavir Chakrapani, Mr. Keshav Dutt Pandey and guided by a dedicated board, DHS continues to operate with integrity and compassion as a nonprofit registered under the Societies Registration Act of 1860.
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
                    Today, Sewa Ashram stands as a center of hope, serving over thousands of individuals, guided by its core philosophy of <strong className="text-foreground">Caring, Connecting, Equipping, and Empowering</strong>.
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
                    To see lives transformed - economically, physically, emotionally, socially, and spiritually, walking in the fullness of life as purposed by God.
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

          {/* Our Governance */}
          <Card className="p-8 shadow-lg">
            <div className="flex items-start gap-4 mb-6">
              <Users className="h-8 w-8 text-primary flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-bold mb-4">Our Governance</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Delhi House Society (DHS) is governed by a distinguished and socially responsible Board appointed by the DHS Society members. The Board provides strategic direction and ensures transparency, accountability, and the effective functioning of the organization. The following are the Board Members of DHS:
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6">
              {boardMembers.map((member, index) => (
                <div key={index} className="text-center">
                  <div className="w-28 h-28 mx-auto mb-3 rounded-full overflow-hidden bg-muted border-2 border-primary/20">
                    {member.image ? (
                      <img
                        src={member.image}
                        alt={member.name}
                        className={`w-full h-full object-cover ${
                          ["Mr. Samir Deokuliar", "Mr. Satyavir Chakrapani", "Ms. Esther Anupama Ghosh"].includes(member.name)
                            ? "scale-150 object-[center_25%]" 
                            : "object-top"
                        }`}
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-primary/10">
                        <Users className="h-10 w-10 text-primary/50" />
                      </div>
                    )}
                  </div>
                  <h4 className="font-semibold text-sm text-foreground">{member.name}</h4>
                  <p className="text-xs text-muted-foreground mb-1">{member.role}</p>
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center text-primary hover:text-primary/80 transition-colors"
                      aria-label={`${member.name}'s LinkedIn profile`}
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                  )}
                </div>
              ))}
            </div>
          </Card>

          {/* Our Inspiration */}
          <Card className="p-8 shadow-lg bg-gradient-to-br from-primary/5 to-accent/5">
            <h3 className="text-2xl font-bold mb-4">Our Inspiration</h3>
            <p className="text-muted-foreground leading-relaxed italic">
              Rooted in the values of compassion, justice, and freedom, we are called to "loose the chains of injustice and set the oppressed free." This conviction shapes every aspect of our work, from healthcare and education to rehabilitation and empowerment.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
