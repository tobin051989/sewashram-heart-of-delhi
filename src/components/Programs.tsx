import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { HeartPulse } from "lucide-react";
import ImageSlideshow from "@/components/ImageSlideshow";

// Sewa Ashram / Healthcare images
import sewaAshram1 from "@/assets/gallery/sewa-ashram-1.jpg";
import sewaAshram2 from "@/assets/gallery/sewa-ashram-2.jpg";
import sewaAshram3 from "@/assets/gallery/sewa-ashram-3.jpeg";
import sewaAshram4 from "@/assets/gallery/sewa-ashram-4.jpg";
import sewaAshram5 from "@/assets/gallery/sewa-ashram-5.jpg";
import sewaAshram6 from "@/assets/gallery/sewa-ashram-6.jpg";

const Programs = () => {
  const program = {
    title: "Healthcare & Rehabilitation",
    icon: HeartPulse,
    images: [sewaAshram1, sewaAshram2, sewaAshram3, sewaAshram4, sewaAshram5, sewaAshram6],
    description: "For over 25 years, Sewa Ashram has been the beating heart of Delhi House Society's mission, a place of healing, hope, and transformation for Delhi's most vulnerable. Established formally in 1999, the Ashram serves destitute and homeless individuals suffering from TB, HIV, malnutrition, mental illness, pulmonary diseases, and other chronic conditions.",
    additionalText: "Many who arrive are not only physically unwell but also emotionally and spiritually broken. Our Healthcare & Rehabilitation Program provides comprehensive, person-centered care that goes beyond medicine.",
    details: [
      "Emergency Healthcare: Rescue and treatment for destitute individuals with life-threatening illnesses such as HIV, TB, and cancer.",
      "Holistic Rehabilitation: Medical care, nutritious meals, counseling, physiotherapy, and life-skills training to restore strength and dignity.",
      "Social Reintegration: Supporting recovered individuals in reconnecting with families and society to live independent, meaningful lives.",
      "Community Building: Through Sewa Life Groups, we nurture belonging and leadership within local communities.",
    ],
    closingText: "Our medical staff, visiting doctor, and physiotherapist work closely with each resident throughout recovery. Healing often takes months, but it results in renewed strength, confidence, and community. Many choose to stay on, serving others as they were once served - continuing the cycle of care and compassion.",
    ctas: ["Support Medical Care", "Sponsor Meals & Nutrition"],
  };

  const Icon = program.icon;

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

        <Card className="overflow-hidden shadow-lg md:grid md:grid-cols-2">
          <div className="p-4">
            <ImageSlideshow images={program.images} title={program.title} />
          </div>
          
          <div className="p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold">{program.title}</h3>
            </div>
            
            <p className="text-muted-foreground leading-relaxed mb-4">
              {program.description}
            </p>

            <p className="text-muted-foreground leading-relaxed mb-4">
              {program.additionalText}
            </p>

            <h4 className="font-semibold text-foreground mb-3">Key Areas of Impact:</h4>
            
            <ul className="space-y-2 mb-4">
              {program.details.map((detail, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="h-2 w-2 rounded-full bg-secondary mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground text-sm">{detail}</span>
                </li>
              ))}
            </ul>

            <p className="text-muted-foreground leading-relaxed mb-4 text-sm">
              {program.closingText}
            </p>
            
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
      </div>
    </section>
  );
};

export default Programs;
