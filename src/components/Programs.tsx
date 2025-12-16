import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { HeartPulse, GraduationCap, Users2, Lightbulb, HandHeart, ChevronLeft, ChevronRight } from "lucide-react";

// Sewa Ashram / Healthcare images
import sewaAshram1 from "@/assets/gallery/sewa-ashram-1.jpg";
import sewaAshram2 from "@/assets/gallery/sewa-ashram-2.jpg";
import sewaAshram3 from "@/assets/gallery/sewa-ashram-3.jpeg";
import sewaAshram4 from "@/assets/gallery/sewa-ashram-4.jpg";
import sewaAshram5 from "@/assets/gallery/sewa-ashram-5.jpg";
import sewaAshram6 from "@/assets/gallery/sewa-ashram-6.jpg";

// Learning Centre images
import learningCentre1 from "@/assets/gallery/learning-centre-new-1.jpg";
import learningCentre2 from "@/assets/gallery/learning-centre-new-2.jpg";
import learningCentre3 from "@/assets/gallery/learning-centre-new-3.jpeg";
import learningCentre4 from "@/assets/gallery/learning-centre-new-4.jpg";
import learningCentre5 from "@/assets/gallery/learning-centre-new-5.jfif";
import learningCentre6 from "@/assets/gallery/learning-centre-new-6.jpg";
import learningCentre7 from "@/assets/gallery/learning-centre-new-7.jpg";
import learningCentre8 from "@/assets/gallery/learning-centre-new-8.jpg";
import learningCentre9 from "@/assets/gallery/learning-centre-new-9.jpg";
import learningCentre10 from "@/assets/gallery/learning-centre-new-10.jpg";

// Women Empowerment images
import womenEmpowerment1 from "@/assets/gallery/women-empowerment-1.jpeg";
import womenEmpowerment2 from "@/assets/gallery/women-empowerment-2.jpeg";
import womenEmpowerment3 from "@/assets/gallery/women-empowerment-3.jpg";
import womenEmpowerment4 from "@/assets/gallery/women-empowerment-4.jpg";
import womenEmpowerment5 from "@/assets/gallery/women-empowerment-5.jpeg";
import womenEmpowerment6 from "@/assets/gallery/women-empowerment-6.jpeg";

// Love Delhi Initiative images
import loveDelhi1 from "@/assets/gallery/love-delhi-1.jpg";
import loveDelhi2 from "@/assets/gallery/love-delhi-2.jpg";
import loveDelhi3 from "@/assets/gallery/love-delhi-3.jpg";
import loveDelhi4 from "@/assets/gallery/love-delhi-4.jpg";
import loveDelhi5 from "@/assets/gallery/love-delhi-5.jpg";
import loveDelhi6 from "@/assets/gallery/love-delhi-6.jpg";

// Community Engagement (using sewa ashram images for community)
import sewaAshram7 from "@/assets/gallery/sewa-ashram-7.jpg";
import sewaAshram8 from "@/assets/gallery/sewa-ashram-8.jpg";
import sewaAshram9 from "@/assets/gallery/sewa-ashram-9.jpg";

interface ImageSlideshowProps {
  images: string[];
  title: string;
}

const ImageSlideshow = ({ images, title }: ImageSlideshowProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images.length]);

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="relative w-full h-64 md:h-80 overflow-hidden rounded-lg bg-muted/30">
      {images.map((image, idx) => (
        <img
          key={idx}
          src={image}
          alt={`${title} - Image ${idx + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            idx === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      
      {/* Navigation Arrows */}
      <button
        onClick={goToPrev}
        className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 hover:bg-background transition-colors"
        aria-label="Previous image"
      >
        <ChevronLeft className="h-5 w-5 text-foreground" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 hover:bg-background transition-colors"
        aria-label="Next image"
      >
        <ChevronRight className="h-5 w-5 text-foreground" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-2 h-2 rounded-full transition-colors ${
              idx === currentIndex ? "bg-primary" : "bg-background/60"
            }`}
            aria-label={`Go to image ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

const Programs = () => {
  const programs = [
    {
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
    },
    {
      title: "Education – Learning Centres",
      icon: GraduationCap,
      images: [learningCentre1, learningCentre2, learningCentre3, learningCentre4, learningCentre5, learningCentre6, learningCentre7, learningCentre8, learningCentre9, learningCentre10],
      description: "Our Learning Centers in Narela, Bawana, and other parts of Delhi provide quality education and hope for more than 200 children each year. These centers support children from low-income and marginalized families, helping them build strong educational foundations and confidence for the future.",
      details: [
        "Preschool and daycare for early childhood development",
        "Non-formal education for out-of-school children",
        "Bridge and remedial classes for continued learning",
        "Creative sessions in art, storytelling, music, and sports",
        "Parent engagement and community awareness activities",
      ],
      closingText: "Through these initiatives, our Learning Centers nurture curiosity, creativity, and character empowering children and families to move toward lasting transformation.",
      ctas: ["Support Education", "Sponsor School Essentials"],
    },
    {
      title: "Women's Empowerment & Livelihoods",
      icon: Users2,
      images: [womenEmpowerment1, womenEmpowerment2, womenEmpowerment3, womenEmpowerment4, womenEmpowerment5, womenEmpowerment6],
      description: "We empower women, especially single and abandoned mothers to rebuild their lives with dignity and independence. Through skill training, counseling, and community support, women gain the confidence and resources to create brighter futures for themselves and their children.",
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
      images: [loveDelhi1, loveDelhi2, loveDelhi3, loveDelhi4, loveDelhi5, loveDelhi6],
      tagline: "Empowering Youth • Strengthening Communities • Building a Better Delhi-NCR",
      description: "The Love Delhi Initiative (LDI) brings together youth, community leaders, and civic organizations to spark positive change and build a compassionate, collaborative, and socially responsible Delhi-NCR. Through diverse programs, livelihood support and strategic partnerships, LDI equips young people, strengthens communities, and promotes collective action to create a more vibrant, empowered, and inclusive city.",
      detailsHeader: "What We Do",
      details: [
        "Celebrate Changemakers: Honour senior social workers, highlight grassroots contributions, and build partnerships for citywide social impact.",
        "Youth Leadership & Skilling: Organize youth conferences, leadership workshops, and career-skilling programs to inspire young people to become agents of change.",
        "Entrepreneurship & Mentorship: Support young entrepreneurs through business workshops, one-on-one mentoring, and networking with industry experts.",
        "Civic Engagement & Cleanliness Drives: Conduct civic-awareness trainings and lead Swachh Dilli clean-up drives in collaboration with MCD and community volunteers.",
        "Community Development & Relief: Facilitate consultations with NGOs and local leaders to design strategies that strengthen communities across NCR. Provide coordinated relief and rehabilitation support during crises, emergencies, and vulnerable situations.",
        "Education & Learning Centres: Support and expand Learning Centres in underserved areas, offering NFE (non-formal education), remedial classes, and teacher training.",
        "Sports, Arts & Community Events: Use sports tournaments, arts programs, cultural events and citywide gatherings to build unity, collaboration, and positive youth engagement.",
      ],
      ctas: ["Engage with LDI Programs"],
    },
    {
      title: "Community Engagement",
      icon: HandHeart,
      images: [sewaAshram7, sewaAshram8, sewaAshram9],
      description: "Through home visits and community meetings, we connect with families, support school enrolments, and link communities with welfare schemes, healthcare, and livelihood programs.",
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
                className="overflow-hidden shadow-lg md:grid md:grid-cols-2"
              >
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

                  {program.tagline && (
                    <p className="text-primary font-semibold mb-4 italic">
                      {program.tagline}
                    </p>
                  )}
                  
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {program.description}
                  </p>

                  {program.additionalText && (
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {program.additionalText}
                    </p>
                  )}

                  {program.detailsHeader && (
                    <h4 className="font-semibold text-foreground mb-3">{program.detailsHeader}</h4>
                  )}

                  {!program.detailsHeader && program.details && (
                    <h4 className="font-semibold text-foreground mb-3">Key Areas of Impact:</h4>
                  )}
                  
                  {program.details && (
                    <ul className="space-y-2 mb-4">
                      {program.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="h-2 w-2 rounded-full bg-secondary mt-2 flex-shrink-0" />
                          <span className="text-muted-foreground text-sm">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {program.closingText && (
                    <p className="text-muted-foreground leading-relaxed mb-4 text-sm">
                      {program.closingText}
                    </p>
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
