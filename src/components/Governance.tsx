import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Users, Linkedin, X } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

// Board member images
import pramodSingh from "@/assets/board/pramod-singh.jfif";
import satyavirChakrapani from "@/assets/board/satyavir-chakrapani-new.png";
import sumitChetty from "@/assets/board/sumit-chetty.jpeg";
import estherGhosh from "@/assets/board/esther-ghosh.jpg";
import samirDeokuliar from "@/assets/board/samir-deokuliar.jpg";
import ektaJohn from "@/assets/board/ekta-john.jpeg";

interface BoardMember {
  name: string;
  role: string;
  image: string | null;
  linkedin: string | null;
  imageStyle: string;
  bio: string[];
}

const Governance = () => {
  const [selectedMember, setSelectedMember] = useState<BoardMember | null>(null);

  const boardMembers: BoardMember[] = [
    { 
      name: "Mr. Satyavir Chakrapani", 
      role: "General Secretary, DHS",
      image: satyavirChakrapani,
      linkedin: "https://www.linkedin.com/in/satyavir-chakrapani/",
      imageStyle: "scale-[1.0] object-[center_15%]",
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
      image: pramodSingh,
      linkedin: "https://www.linkedin.com/in/pramod-singh-1b1b1b1b/",
      imageStyle: "scale-[1.2] object-[center_25%]",
      bio: [
        "Mr. Pramod Kumar Singh, Advocate and Fellow Company Secretary, has over 33 years of experience in corporate and legal practice. He is the Founder of Lux Veritas, a New Delhi based business law firm that applies a business-minded and ethical approach to legal solutions. Under his leadership, the firm has advised clients across sectors in India and abroad, representing them before various courts and tribunals, including the NCLT, SEBI, and several High Courts. Lux Veritas is recognized for its focus on integrity, client trust, and value-driven representation in corporate, banking, and cross-border matters.",
        "Alongside his legal career, Mr. Singh serves on several boards and advisory bodies in the fields of justice, education, and social development, contributing his expertise to organizational governance and leadership.",
        "As Board Chair of Delhi House Society (DHS), Mr. Singh provides strategic guidance and legal oversight, helping strengthen the organization's mission of compassion, justice, and transformation among Delhi's most vulnerable communities.",
        "He lives in New Delhi with his wife, Pratibha, and they are blessed with two married children."
      ]
    },
    { 
      name: "Ms. Esther Anupama Ghosh", 
      role: "Board Member, DHS",
      image: estherGhosh,
      linkedin: "https://www.linkedin.com/in/esther-anupama-ghosh/",
      imageStyle: "scale-[1.25] object-[center_20%]",
      bio: [
        "Ms. Esther Anupama Ghosh has over 20 years of experience in the social development sector. She is currently working with StreamAsia Advisors Pvt. Ltd. and has previously held key roles with organizations such as World Vision, Emmanuel Hospital Association, Christian Aid, and EFICOR, along with experience as a freelance consultant.",
        "Her track record includes securing and managing large grants from major institutional donors and foundations. She has led program design and implementation across diverse sectors, including child protection, public health, disaster management, livelihoods, and environmental protection. She also conducts training on project design and management.",
        "As a consultant, Ms. Ghosh has supported NGOs across South Asia, including India, Sri Lanka, Bangladesh, and the Solomon Islands. After spending much of her career in Delhi, she is now based in Mumbai.",
        "With a long-standing association with Delhi House Society (DHS), Ms. Ghosh has played a key role in its journey over the years. Having earlier served as Board Chair and now continuing as a Board Member, she remains closely engaged in strengthening DHS's mission to bring compassion, dignity, and transformation to the communities it serves."
      ]
    },
    { 
      name: "Ms. Ekta Ahuja John", 
      role: "Board Member, DHS",
      image: ektaJohn,
      linkedin: "https://www.linkedin.com/in/ekta-ahuja-john/",
      imageStyle: "scale-[1.2] object-[center_18%]",
      bio: [
        "Ms. Ekta Ahuja John is an experienced professional with over twenty years of experience across the corporate, social, and international education sectors. She is currently the Admissions Marketing Coordinator at Woodstock School, where she brings together her skills in customer service, client relationship management, marketing, and business development.",
        "Over the past two decades, Ms. John has worked in the corporate world, the social sector, and now in international education, giving her a unique perspective and the ability to view challenges through multiple lenses. Her diverse experience has shaped her understanding of people, systems, and impact. She has also worked extensively in training, quality management, and operations, leading teams across various functions to improve efficiency and strengthen organizational culture.",
        "Passionate about social transformation, Ms. John is actively involved with Delhi House Society (DHS) as a Board member, where she supports its mission of compassion, dignity, and empowerment for the marginalized. She believes in the power of empathy and collaboration to create lasting change and brings this philosophy into every role she undertakes."
      ]
    },
    { 
      name: "Mr. Sumit K. Chetty", 
      role: "Treasurer, DHS",
      image: sumitChetty,
      linkedin: null,
      imageStyle: "scale-[1.2] object-[center_22%]",
      bio: [
        "Mr. Sumit K. Chetty is a finance professional with over a decade of experience across the nonprofit, education, and corporate sectors. He specializes in accounting, taxation, compliance, audit, and financial reporting, ensuring full alignment with statutory requirements and organizational policies. His work reflects a strong commitment to financial integrity, transparency, and sustainable stewardship.",
        "Over the years, Sumit has supported various organizations by overseeing their financial systems, strengthening reporting frameworks, and establishing internal control practices. His expertise also includes budgeting, strategic finance, and digital transformation, areas through which he consistently contributes to long-term institutional health and impact.",
        "Alongside his professional work, Sumit serves on the Board of Delhi House Society (DHS), where he provides financial oversight, strategic input, and broader organizational support. His guidance helps advance the organization's mission of compassion, justice, and holistic community development among Delhi's most vulnerable communities.",
        "Sumit has recently completed the CFO Program at IIM Kozhikode and the Executive Program in Business Finance from IIM Ahmedabad.",
        "He lives in Greater Noida with his wife and two sons."
      ]
    },
    { 
      name: "Mr. Samir Deokuliar", 
      role: "Board Member, DHS",
      image: samirDeokuliar,
      linkedin: "https://www.linkedin.com/in/samir-deokuliar/",
      imageStyle: "scale-[1.35] object-[center_22%]",
      bio: [
        "Mr. Samir Deokuliar is a global speaker and coach known for his deep insights into human relationships. He has addressed audiences across continents on themes of leadership, faith, and team-building, and hosted a daily motivational show on Indian national television that reached over 15 million viewers.",
        "Founder of Humane and author of the Ten Nuggets series, Mr. Deokuliar has coached leaders from organizations such as PwC, WHO, the World Bank, St. Stephen's College, and EFICOR. He also serves on the Board of Delhi House Society (Sewa Ashram) and other non-profits, offering strategic guidance and leadership development support.",
        "Deeply committed to nurturing communities and personal transformation, he provides spiritual counsel to Dwaar in Delhi. As someone who values work–family harmony, Samir is a devoted husband to his wife and a loving father to two adult children."
      ]
    },
    { 
      name: "N. Christina", 
      role: "Board Member",
      image: null,
      linkedin: null,
      imageStyle: "",
      bio: []
    },
  ];

  return (
    <section id="governance" className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Our Governance</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Delhi House Society (DHS) is governed by a distinguished and socially responsible Board appointed by the DHS Society members. The Board provides strategic direction and ensures transparency, accountability, and the effective functioning of the organization.
          </p>
          <div className="w-24 h-1 bg-primary mx-auto mt-6"></div>
        </div>

        <div className="max-w-5xl mx-auto">
          <Card className="p-8 shadow-lg">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-full bg-primary/10">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Board of Directors</h3>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6 items-start">
              {boardMembers.map((member, index) => (
                <button
                  key={index}
                  className="flex flex-col items-center text-center group cursor-pointer bg-transparent border-none p-0"
                  onClick={() => member.bio.length > 0 && setSelectedMember(member)}
                  aria-label={`View ${member.name}'s profile`}
                >
                  <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden bg-muted border-2 border-primary/20 group-hover:border-primary/60 group-hover:shadow-lg transition-all duration-300 flex-shrink-0">
                    {member.image ? (
                      <img
                        src={member.image}
                        alt={member.name}
                        className={`w-full h-full object-cover ${member.imageStyle} group-hover:scale-110 transition-transform duration-300`}
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-primary/10">
                        <Users className="h-10 w-10 text-primary/50" />
                      </div>
                    )}
                  </div>
                  <h4 className="font-semibold text-sm text-foreground mt-3">{member.name}</h4>
                  <p className="text-xs text-muted-foreground mb-1">{member.role}</p>
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center text-primary hover:text-primary/80 transition-colors"
                      aria-label={`${member.name}'s LinkedIn profile`}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                  )}
                </button>
              ))}
            </div>
          </Card>
        </div>
      </div>

      {/* Bio Popup Dialog */}
      <Dialog open={!!selectedMember} onOpenChange={(open) => !open && setSelectedMember(null)}>
        <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto">
          {selectedMember && (
            <>
              <DialogTitle className="sr-only">{selectedMember.name}</DialogTitle>
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-6">
                <div className="w-32 h-32 rounded-full overflow-hidden bg-muted border-2 border-primary/20 flex-shrink-0">
                  {selectedMember.image ? (
                    <img
                      src={selectedMember.image}
                      alt={selectedMember.name}
                      className={`w-full h-full object-cover ${selectedMember.imageStyle}`}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-primary/10">
                      <Users className="h-12 w-12 text-primary/50" />
                    </div>
                  )}
                </div>
                <div className="text-center sm:text-left">
                  <div className="flex items-center gap-2 justify-center sm:justify-start">
                    <h3 className="text-2xl font-bold text-foreground">{selectedMember.name}</h3>
                    {selectedMember.linkedin && (
                      <a
                        href={selectedMember.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center text-primary hover:text-primary/80 transition-colors"
                        aria-label={`${selectedMember.name}'s LinkedIn profile`}
                      >
                        <Linkedin className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                  <p className="text-muted-foreground mt-1">{selectedMember.role}</p>
                </div>
              </div>
              <div className="w-full h-px bg-border mb-6"></div>
              <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
                {selectedMember.bio.map((paragraph, pIndex) => (
                  <p key={pIndex}>{paragraph}</p>
                ))}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Governance;
