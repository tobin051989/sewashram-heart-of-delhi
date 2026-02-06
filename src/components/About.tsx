import { Card } from "@/components/ui/card";
import { Heart, Target, Eye, Award, Users, User } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

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
      name: "Mr. Satyavir Chakrapani", 
      role: "General Secretary, DHS",
      bio: [
        "Mr. Satyavir Chakrapani is a first-generation serial entrepreneur whose journey embodies the power of collective wisdom and purposeful innovation. As CEO of Shikhar Urban & Rural Enterprises (SURE), Managing Director of Shikhar Microfinance Pvt. Ltd., and part of the founding team of the Shikhar Group, he brings extensive experience in microfinance, social enterprise, development finance, and livelihood enhancement initiatives.",
        "Driven by an enduring passion for innovation and growth, Mr. Chakrapani has held leadership roles with OWIF, Opportunity International, and Interserve. His work spans MSME development, livelihoods, animal husbandry, veterinary health, women's empowerment, education, children's nutrition, and youth entrepreneurship and mentoring.",
        "Through Shikhar Microfinance and SURE, he has empowered thousands by promoting financial inclusion and skill development. His ventures including Vets on Call, Powerseed Ventures, and OneThe416 Technologies, reflect his deep belief in \"Business as Mission,\" integrating enterprise with social transformation.",
        "As Chief Functionary of Delhi House Society, Mr. Chakrapani provides strategic leadership to Sewa Ashram in Delhi and also serves as Board Chair of Interserve India."
      ]
    },
    { 
      name: "Mr. Pramod Kumar Singh", 
      role: "Board Chairman, Delhi House Society",
      bio: [
        "Mr. Pramod Kumar Singh, Advocate and Fellow Company Secretary, has over 33 years of experience in corporate and legal practice. He is the Founder of Lux Veritas, a New Delhi based business law firm that applies a business-minded and ethical approach to legal solutions.",
        "As Board Chair of Delhi House Society (DHS), Mr. Singh provides strategic guidance and legal oversight, helping strengthen the organization's mission of compassion, justice, and transformation among Delhi's most vulnerable communities.",
        "He lives in New Delhi with his wife, Pratibha, and they are blessed with two married children."
      ]
    },
    { 
      name: "Ms. Esther Anupama Ghosh", 
      role: "Board Member, DHS",
      bio: [
        "Ms. Esther Anupama Ghosh has over 20 years of experience in the social development sector. She is currently working with StreamAsia Advisors Pvt. Ltd. and has previously held key roles with organizations such as World Vision, Emmanuel Hospital Association, Christian Aid, and EFICOR.",
        "With a long-standing association with Delhi House Society (DHS), Ms. Ghosh has played a key role in its journey over the years. Having earlier served as Board Chair and now continuing as a Board Member, she remains closely engaged in strengthening DHS's mission."
      ]
    },
    { 
      name: "Ms. Ekta Ahuja John", 
      role: "Board Member, DHS",
      bio: [
        "Ms. Ekta Ahuja John is an experienced professional with over twenty years of experience across the corporate, social, and international education sectors.",
        "Passionate about social transformation, Ms. John is actively involved with Delhi House Society (DHS) as a Board member, where she supports its mission of compassion, dignity, and empowerment for the marginalized."
      ]
    },
    { 
      name: "Mr. Sumit K. Chetty", 
      role: "Treasurer, DHS",
      bio: [
        "Mr. Sumit K. Chetty is a finance professional with over a decade of experience across the nonprofit, education, and corporate sectors. He specializes in accounting, taxation, compliance, audit, and financial reporting.",
        "Sumit serves on the Board of Delhi House Society (DHS), where he provides financial oversight, strategic input, and broader organizational support."
      ]
    },
    { 
      name: "N. Christina", 
      role: "Board Member",
      bio: []
    },
    { 
      name: "Mr. Samir Deokuliar", 
      role: "Board Member, DHS",
      bio: [
        "Mr. Samir Deokuliar is a global speaker and coach known for his deep insights into human relationships. He has addressed audiences across continents on themes of leadership, faith, and team-building.",
        "He also serves on the Board of Delhi House Society (Sewa Ashram) and other non-profits, offering strategic guidance and leadership development support."
      ]
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
                    The journey began in the mid-nineties when Ton Snellaert, moved by compassion, began rescuing the sick and abandoned from the streets of Yamuna Bazaar, offering them emergency healthcare and a home filled with love.
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
            
            <Accordion type="single" collapsible className="space-y-2">
              {boardMembers.map((member, index) => (
                <AccordionItem key={index} value={`board-${index}`} className="border rounded-lg bg-muted/30 px-4">
                  <AccordionTrigger className="hover:no-underline py-4">
                    <div className="flex items-start gap-3 text-left">
                      <User className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-foreground">{member.name}</p>
                        <p className="text-sm text-muted-foreground">{member.role}</p>
                      </div>
                    </div>
                  </AccordionTrigger>
                  {member.bio && member.bio.length > 0 && (
                    <AccordionContent className="pb-4 pl-8">
                      <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                        {member.bio.map((paragraph, pIndex) => (
                          <p key={pIndex}>{paragraph}</p>
                        ))}
                      </div>
                    </AccordionContent>
                  )}
                </AccordionItem>
              ))}
            </Accordion>
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
