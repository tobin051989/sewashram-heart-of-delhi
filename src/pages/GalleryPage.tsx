import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

// Learning Centres images
import learningCentre1 from "@/assets/gallery/learning-centre-1.jpeg";
import learningCentre2 from "@/assets/gallery/learning-centre-2.jpg";
import learningCentre3 from "@/assets/gallery/learning-centre-3.jpg";
import learningCentre4 from "@/assets/gallery/learning-centre-4.jpg";
import learningCentre5 from "@/assets/gallery/learning-centre-5.jpg";
import learningCentre6 from "@/assets/gallery/learning-centre-6.jpg";
import learningCentre7 from "@/assets/gallery/learning-centre-7.jfif";
import learningCentre8 from "@/assets/gallery/learning-centre-8.jpeg";
import learningCentre9 from "@/assets/gallery/learning-centre-9.jpeg";

const learningCentresImages = [
  { src: learningCentre1, alt: "Student with medal achievement" },
  { src: learningCentre2, alt: "Child engaged in learning" },
  { src: learningCentre3, alt: "Children at celebration event" },
  { src: learningCentre4, alt: "Christmas celebration with children" },
  { src: learningCentre5, alt: "Children showing artwork in classroom" },
  { src: learningCentre6, alt: "Young girl smiling" },
  { src: learningCentre7, alt: "Learning centre activities" },
  { src: learningCentre8, alt: "Children with gifts at Delhi House Society" },
  { src: learningCentre9, alt: "Children displaying craft projects" },
];

const GalleryPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-primary/10 py-16">
          <div className="container-custom px-4 sm:px-6 lg:px-8">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground text-center mb-4">
              Photo Gallery
            </h1>
            <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto">
              A glimpse into the lives transformed and moments of joy at Delhi House Society
            </p>
          </div>
        </section>

        {/* Learning Centres Section */}
        <section className="py-16">
          <div className="container-custom px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
              Learning Centres
            </h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
              Our learning centres provide education, creative activities, and a nurturing environment for children from marginalized communities.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {learningCentresImages.map((image, index) => (
                <Dialog key={index}>
                  <DialogTrigger asChild>
                    <div className="relative overflow-hidden rounded-lg shadow-md cursor-pointer group aspect-[4/3]">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-300" />
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl p-2 bg-background">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
                    />
                  </DialogContent>
                </Dialog>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default GalleryPage;
