import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

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
import loveDelhi11 from "@/assets/gallery/love-delhi-11.jpg";
import loveDelhi12 from "@/assets/gallery/love-delhi-12.jpg";
import loveDelhi13 from "@/assets/gallery/love-delhi-13.jpg";
import loveDelhi14 from "@/assets/gallery/love-delhi-14.jpg";
import loveDelhi15 from "@/assets/gallery/love-delhi-15.jpg";
import loveDelhi16 from "@/assets/gallery/love-delhi-16.jpg";
import loveDelhi17 from "@/assets/gallery/love-delhi-17.jpg";
import loveDelhi18 from "@/assets/gallery/love-delhi-18.jfif";
import loveDelhi19 from "@/assets/gallery/love-delhi-19.jpeg";
import loveDelhi20 from "@/assets/gallery/love-delhi-20.jpeg";
import loveDelhi21 from "@/assets/gallery/love-delhi-21.jpeg";
import loveDelhi22 from "@/assets/gallery/love-delhi-22.jpeg";
import loveDelhi23 from "@/assets/gallery/love-delhi-23.jpeg";
import loveDelhi24 from "@/assets/gallery/love-delhi-24.jpeg";
import loveDelhi25 from "@/assets/gallery/love-delhi-25.jpeg";
import loveDelhi26 from "@/assets/gallery/love-delhi-26.jpeg";
import loveDelhi27 from "@/assets/gallery/love-delhi-27.jpeg";
import loveDelhi28 from "@/assets/gallery/love-delhi-28.jpeg";
import loveDelhi29 from "@/assets/gallery/love-delhi-29.jpg";

// Sewa Ashram Residents images
import sewaAshram1 from "@/assets/gallery/sewa-ashram-1.jpg";
import sewaAshram2 from "@/assets/gallery/sewa-ashram-2.jpg";
import sewaAshram3 from "@/assets/gallery/sewa-ashram-3.jpeg";
import sewaAshram4 from "@/assets/gallery/sewa-ashram-4.jpg";
import sewaAshram5 from "@/assets/gallery/sewa-ashram-5.jpg";
import sewaAshram6 from "@/assets/gallery/sewa-ashram-6.jpg";
import sewaAshram7 from "@/assets/gallery/sewa-ashram-7.jpg";
import sewaAshram8 from "@/assets/gallery/sewa-ashram-8.jpg";

interface Album {
  id: string;
  title: string;
  description: string;
  coverImage: string;
  images: { src: string; alt: string }[];
}

const albums: Album[] = [
  {
    id: "learning-centres",
    title: "Learning Centres",
    description: "Our learning centres provide education, creative activities, and a nurturing environment for children from marginalized communities.",
    coverImage: learningCentre1,
    images: [
      { src: learningCentre1, alt: "Student with medal achievement" },
      { src: learningCentre2, alt: "Child engaged in learning" },
      { src: learningCentre3, alt: "Children at celebration event" },
      { src: learningCentre4, alt: "Christmas celebration with children" },
      { src: learningCentre5, alt: "Children showing artwork in classroom" },
      { src: learningCentre6, alt: "Young girl smiling" },
      { src: learningCentre7, alt: "Learning centre activities" },
      { src: learningCentre8, alt: "Children with gifts at Delhi House Society" },
      { src: learningCentre9, alt: "Children displaying craft projects" },
    ],
  },
  {
    id: "love-delhi-initiative",
    title: "Love Delhi Initiative",
    description: "Building community connections, empowering youth, and fostering unity across Delhi through sports, workshops, and collaborative events.",
    coverImage: loveDelhi1,
    images: [
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
      { src: loveDelhi11, alt: "Training session with participants" },
      { src: loveDelhi12, alt: "Children studying together" },
      { src: loveDelhi13, alt: "Child reading storybook" },
      { src: loveDelhi14, alt: "Boys learning from textbook" },
      { src: loveDelhi15, alt: "Children doing craft activities" },
      { src: loveDelhi16, alt: "Classroom learning session" },
      { src: loveDelhi17, alt: "Group of students with peace sign" },
      { src: loveDelhi18, alt: "Love Delhi Initiative activity" },
      { src: loveDelhi19, alt: "Child doing art and craft" },
      { src: loveDelhi20, alt: "Child drawing with sketch pens" },
      { src: loveDelhi21, alt: "Child coloring environmental drawing" },
      { src: loveDelhi22, alt: "Boys drawing together" },
      { src: loveDelhi23, alt: "Boy sketching globe artwork" },
      { src: loveDelhi24, alt: "Children's environmental drawings" },
      { src: loveDelhi25, alt: "Girls drawing together" },
      { src: loveDelhi26, alt: "Girls in drawing session" },
      { src: loveDelhi27, alt: "Collection of children's artwork" },
      { src: loveDelhi28, alt: "Child with craft mask" },
      { src: loveDelhi29, alt: "Youth football champions with trophy" },
    ],
  },
  {
    id: "sewa-ashram-residents",
    title: "Sewa Ashram Residents",
    description: "Moments from our Sewa Ashram, where residents receive care, rehabilitation, and a supportive community environment.",
    coverImage: sewaAshram4,
    images: [
      { src: sewaAshram1, alt: "Medical checkup at Sewa Ashram" },
      { src: sewaAshram2, alt: "Nurse providing wound care" },
      { src: sewaAshram3, alt: "Tree plantation activity" },
      { src: sewaAshram4, alt: "Community gathering session" },
      { src: sewaAshram5, alt: "Group photo of residents" },
      { src: sewaAshram6, alt: "Resident playing tabla drums" },
      { src: sewaAshram7, alt: "Children at the ashram" },
      { src: sewaAshram8, alt: "Counseling session" },
    ],
  },
];

const AlbumCard = ({ album, onClick }: { album: Album; onClick: () => void }) => (
  <div
    onClick={onClick}
    className="group cursor-pointer overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 bg-card"
  >
    <div className="relative aspect-[4/3] overflow-hidden">
      <img
        src={album.coverImage}
        alt={album.title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <h3 className="font-heading text-2xl font-bold text-white mb-1">
          {album.title}
        </h3>
        <p className="text-white/80 text-sm">
          {album.images.length} photos
        </p>
      </div>
    </div>
  </div>
);

const AlbumView = ({ album, onBack }: { album: Album; onBack: () => void }) => (
  <section className="py-8">
    <div className="container-custom px-4 sm:px-6 lg:px-8">
      <Button
        variant="ghost"
        onClick={onBack}
        className="mb-6 hover:bg-primary/10"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Albums
      </Button>
      
      <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
        {album.title}
      </h2>
      <p className="text-muted-foreground max-w-2xl mb-8">
        {album.description}
      </p>
      <p className="text-sm text-muted-foreground mb-8">
        {album.images.length} photos
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {album.images.map((image, index) => (
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
  const [selectedAlbum, setSelectedAlbum] = useState<Album | null>(null);

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
              {selectedAlbum 
                ? "Browse through our collection of memorable moments"
                : "A glimpse into the lives transformed and moments of joy at Delhi House Society"
              }
            </p>
          </div>
        </section>

        {selectedAlbum ? (
          <AlbumView 
            album={selectedAlbum} 
            onBack={() => setSelectedAlbum(null)} 
          />
        ) : (
          <section className="py-16">
            <div className="container-custom px-4 sm:px-6 lg:px-8">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground text-center mb-12">
                Our Photo Albums
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {albums.map((album) => (
                  <AlbumCard
                    key={album.id}
                    album={album}
                    onClick={() => setSelectedAlbum(album)}
                  />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default GalleryPage;
