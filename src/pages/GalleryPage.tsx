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

// Love Delhi Initiative images
import loveDelhi1 from "@/assets/gallery/love-delhi-1.jpg";
import loveDelhi2 from "@/assets/gallery/love-delhi-2.jpg";
import loveDelhi3 from "@/assets/gallery/love-delhi-3.jpg";
import loveDelhi4 from "@/assets/gallery/love-delhi-4.jpg";
import loveDelhi5 from "@/assets/gallery/love-delhi-5.jpg";
import loveDelhi6 from "@/assets/gallery/love-delhi-6.jpg";
import loveDelhi7 from "@/assets/gallery/love-delhi-7.jpg";
import loveDelhi8 from "@/assets/gallery/love-delhi-8.jpg";
import loveDelhi9 from "@/assets/gallery/love-delhi-9.jpg";
import loveDelhi10 from "@/assets/gallery/love-delhi-10.jpg";

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

const loveDelhiImages = [
  { src: loveDelhi1, alt: "Youth football tournament team photo" },
  { src: loveDelhi2, alt: "Community outreach event registration" },
  { src: loveDelhi3, alt: "Youth gathering at football event" },
  { src: loveDelhi4, alt: "Community meeting and discussion" },
  { src: loveDelhi5, alt: "Church gathering and worship" },
  { src: loveDelhi6, alt: "Equipping citizenry workshop" },
  { src: loveDelhi7, alt: "Conference presentation" },
  { src: loveDelhi8, alt: "Football tournament participants" },
  { src: loveDelhi9, alt: "Children learning session" },
  { src: loveDelhi10, alt: "Team group photo" },
];

interface GallerySectionProps {
  title: string;
  description: string;
  images: { src: string; alt: string }[];
  bgColor?: string;
}

const GallerySection = ({ title, description, images, bgColor = "" }: GallerySectionProps) => (
  <section className={`py-16 ${bgColor}`}>
    <div className="container-custom px-4 sm:px-6 lg:px-8">
      <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
        {title}
      </h2>
      <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
        {description}
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image, index) => (
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
);

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

        <GallerySection
          title="Learning Centres"
          description="Our learning centres provide education, creative activities, and a nurturing environment for children from marginalized communities."
          images={learningCentresImages}
        />

        <GallerySection
          title="Love Delhi Initiative"
          description="Building community connections, empowering youth, and fostering unity across Delhi through sports, workshops, and collaborative events."
          images={loveDelhiImages}
          bgColor="bg-muted/30"
        />
      </main>

      <Footer />
    </div>
  );
};

export default GalleryPage;
