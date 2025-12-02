import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { HeartPulse, GraduationCap, Users2, Lightbulb, HandHeart } from "lucide-react";
import healthcareImage from "@/assets/healthcare.jpg";
import educationImage from "@/assets/education.jpg";
import womenImage from "@/assets/women-empowerment.jpg";

const Programs = () => {
  const programs = [
    {
      title: "Healthcare & Rehabilitation",
      icon: HeartPulse,
      image: healthcareImage,
      description: "For over 25 years, Sewa Ashram has been the beating heart of Delhi House Society's mission—a place of healing, hope, and transformation for Delhi's most vulnerable.",
      details: [
        "Emergency Healthcare: Rescue and treatment for destitute individuals with life-threatening illnesses such as HIV, TB, and cancer.",
        "Holistic Rehabilitation: Medical care, nutritious meals, counseling, physiotherapy, and life-skills training to restore strength and dignity.",
        "Social Reintegration: Supporting recovered individuals in reconnecting with families and society to live independent, meaningful lives.",
        "Community Building: Through Sewa Life Groups, we nurture belonging and leadership within local communities.",
      ],
      ctas: ["Support Medical Care", "Sponsor Meals & Nutrition"],
    },
    {
      title: "Education – Learning Centers",
      icon: GraduationCap,
      image: educationImage,
      description: "Our Learning Centers in Narela, Bawana, and other parts of Delhi provide quality education and hope for more than 200 children each year.",
      details: [
        "Preschool and daycare for early childhood development",
        "Non-formal education for out-of-school children",
        "Bridge and remedial classes for continued learning",
        "Creative sessions in art, storytelling, music, and sports",
        "Parent engagement and community awareness activities",
      ],
      ctas: ["Support Education", "Sponsor School Essentials"],
    },
    {
      title: "Women's Empowerment & Livelihoods",
      icon: Users2,
      image: womenImage,
      description: "We empower women, especially single and abandoned mothers, to rebuild their lives with dignity and independence.",
      details: [
        "Vocational training in tailoring, literacy, and financial management",
        "Employment linkages with local factories and livelihood guidance",
        "Childcare and educational support for children aged 5–18",
        "Access to healthcare, nutrition, and emotional counseling",
        "Self-Help Groups and peer networks for savings and mutual support",
      ],
      highlight: "Currently, over 30 women and their children are part of this growing program.",
      ctas: ["Empower Women Today"],
    },
    {
      title: "Love Delhi Initiative (LDI)",
      icon: Lightbulb,
      description: "Our youth and civic engagement program is dedicated to building a culture of compassion, collaboration, and social responsibility across Delhi-NCR.",
      details: [
        "Leadership workshops and mentorship programs",
        "Community consultations and engagement activities",
        "Annual youth conferences",
        "Empowering young people to become agents of positive change",
      ],
      ctas: ["Engage with LDI Programs"],
    },
    {
      title: "Community Engagement",
      icon: HandHeart,
      description: "Through home visits and community meetings, we connect with families, support school enrollments, and link communities with welfare schemes, healthcare, and livelihood programs.",
      ctas: ["Join Our Community"],
    },
  ];

  return (
    <section id="programs" className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Our Work</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive programs addressing the holistic needs of Delhi's most vulnerable communities
          </p>
          <div className="w-24 h-1 bg-primary mx-auto mt-6"></div>
        </div>

        <div className="space-y-16">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <Card 
                key={index} 
                className={`overflow-hidden shadow-lg ${
                  index % 2 === 0 ? 'md:grid md:grid-cols-2' : 'md:grid md:grid-cols-2'
                }`}
              >
                {program.image && (
                  <div 
                    className={`relative min-h-64 md:min-h-80 ${
                      index % 2 === 0 ? 'md:order-1' : 'md:order-2'
                    }`}
                  >
                    <img 
                      src={program.image} 
                      alt={program.title}
                      className="w-full h-full object-cover object-center absolute inset-0"
                    />
                  </div>
                )}
                
                <div className={`p-8 ${program.image ? (index % 2 === 0 ? 'md:order-2' : 'md:order-1') : ''}`}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 rounded-full bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold">{program.title}</h3>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {program.description}
                  </p>
                  
                  {program.details && (
                    <ul className="space-y-3 mb-6">
                      {program.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="h-2 w-2 rounded-full bg-secondary mt-2 flex-shrink-0" />
                          <span className="text-muted-foreground text-sm">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  
                  {program.highlight && (
                    <p className="text-foreground font-medium mb-6 p-4 bg-accent/10 rounded-md">
                      {program.highlight}
                    </p>
                  )}
                  
                  <div className="flex flex-wrap gap-3">
                    {program.ctas.map((cta, idx) => (
                      <Button 
                        key={idx}
                        variant={idx === 0 ? "default" : "outline"}
                        className={idx === 0 ? "bg-primary hover:bg-primary/90" : ""}
                      >
                        {cta}
                      </Button>
                    ))}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Programs;
