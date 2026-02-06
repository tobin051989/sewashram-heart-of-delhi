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
  const images = [sewaAshram1, sewaAshram2, sewaAshram3, sewaAshram4, sewaAshram5, sewaAshram6];

  return (
    <section id="programs" className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Our Work</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive, holistic programs serving Delhi's most vulnerable communities
          </p>
          <div className="w-24 h-1 bg-primary mx-auto mt-6"></div>
        </div>

        <Card className="overflow-hidden shadow-lg md:grid md:grid-cols-2 mb-12">
          <div className="p-4">
            <ImageSlideshow images={images} title="Sewa Ashram" />
          </div>
          
          <div className="p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-full bg-primary/10">
                <HeartPulse className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold">Sewa Ashram: A Place of Care, Healing, and Transformation</h3>
            </div>
            
            <p className="text-muted-foreground leading-relaxed mb-4">
              Sewa Ashram, the flagship initiative of Delhi House Society (DHS), is dedicated to the care, rehabilitation, and restoration of destitute and marginalized individuals. Established in 1999 in Narela, Sewa Ashram has become a beacon of hope for those abandoned by society, offering a safe, dignified home and a pathway to healing and reintegration.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-4">
              More than a shelter, Sewa Ashram is a sanctuary for individuals suffering from TB, HIV, malnutrition, mental illness, pulmonary diseases, and other chronic conditions often accompanied by deep social stigma. Many arrive physically weak, emotionally broken, and without family support. Through a holistic, person-centered approach, the Ashram addresses not only medical needs but also psychological, social, and spiritual well-being.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Community health and healthcare services form the core and primary focus of DHS's work through Sewa Ashram. Our healthcare and rehabilitation services include medical treatment, TB and HIV testing, medications, nutritious meals, counseling, physiotherapy, and life-skills training. Care is provided in an inclusive environment that upholds dignity, compassion, and hope, irrespective of race, religion, or caste. A dedicated team of medical staff, including a visiting doctor, a nurse, and a physiotherapist, works closely with each resident throughout their recovery journey that often spans several months.
            </p>
          </div>
        </Card>

        <div className="max-w-4xl mx-auto space-y-10">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Healing That Restores Dignity and Independence</h3>
            <p className="text-muted-foreground leading-relaxed">
              Healing at Sewa Ashram often takes time, but it leads to renewed strength, confidence, and purpose. Recovered individuals are supported in reconnecting with their families and society, enabling them to lead independent and meaningful lives. Many residents choose to stay on and serve others, continuing the cycle of care and compassion that defines the Ashram community.
            </p>
          </div>

          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Facilities and Services</h3>
            <p className="text-muted-foreground leading-relaxed">
              Sewa Ashram accommodates up to 150 residents, with boarding facilities, medical infrastructure, and outdoor activity spaces. Alongside healthcare and rehabilitation, the Ashram fosters a strong sense of community through Sewa Life Groups, nurturing belonging, leadership, and mutual support within and beyond the Ashram.
            </p>
          </div>

          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">A Sanctuary of Hope</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              For over 25 years, Sewa Ashram has been the beating heart of DHS's mission— a place where those with nowhere else to turn find care, dignity, and renewed hope. Guided by the values of holistic care and inclusivity, it continues to transform lives and create lasting impact across communities.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Beyond rehabilitation, Sewa Ashram supports long-term transformation through Learning Centers in Narela and Bawana, where children from underserved communities receive education, meals, and social support. Empowerment programs for single and abandoned mothers provide vocational training and literacy, helping women regain confidence and financial independence.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Together, these efforts rebuild lives, strengthen families, and create pathways to independence and belonging.
            </p>
          </div>

          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Expanding Impact Through Education and Empowerment</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Recognizing that lasting transformation requires long-term investment, DHS has expanded its work beyond rehabilitation. Learning Centers in Narela and Bawana and other parts of Delhi provide children from impoverished backgrounds with education, meals, daycare, and social support, preparing them for formal schooling and brighter futures.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              In addition, empowerment programs for single and abandoned mothers offer vocational training in sewing and literacy, helping women regain confidence, skills, and financial independence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;
