import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Heart, Users } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import donateQR from "@/assets/donate-qr.jpeg";

// Import hero slideshow images
import hero01 from "@/assets/hero/hero-01.jpg";
import hero02 from "@/assets/hero/hero-02.jfif";
import hero03 from "@/assets/hero/hero-03.png";
import hero04 from "@/assets/hero/hero-04.jpg";
import hero05 from "@/assets/hero/hero-05.jpg";
import hero06 from "@/assets/hero/hero-06.jpg";
import hero07 from "@/assets/hero/hero-07.jpg";
import hero08 from "@/assets/hero/hero-08.jpg";
import hero09 from "@/assets/hero/hero-09.jpeg";
import hero10 from "@/assets/hero/hero-10.jpg";
import hero11 from "@/assets/hero/hero-11.jpg";
import hero12 from "@/assets/hero/hero-12.jpeg";
import hero13 from "@/assets/hero/hero-13.jpg";
import hero14 from "@/assets/hero/hero-14.jpg";
import hero15 from "@/assets/hero/hero-15.jpg";
import hero16 from "@/assets/hero/hero-16.jpeg";

const heroImages = [
  hero01,
  hero02,
  hero03,
  hero04,
  hero05,
  hero06,
  hero07,
  hero08,
  hero09,
  hero10,
  hero11,
  hero12,
  hero13,
  hero14,
  hero15,
  hero16,
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[70vh] md:min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Slideshow background */}
      {heroImages.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 z-0 transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className={`absolute inset-0 ${
              index === currentIndex ? "animate-ken-burns" : ""
            }`}
            style={{
              backgroundImage: `url(${img})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center top',
            }}
          />
        </div>
      ))}
      
      {/* Slide indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex 
                ? "bg-white w-6" 
                : "bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      
      <div className="container-custom section-padding relative z-10 text-center text-white">
        <div className="max-w-4xl mx-auto space-y-6 md:space-y-8 animate-fade-in bg-black/40 rounded-2xl p-6 md:p-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
            Transforming Lives, Restoring Hope in Delhi and Beyond
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto px-2">
            Empowering the homeless, children, and marginalized communities through care, education, and livelihoods.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center pt-4 md:pt-8 px-4">
            <Dialog>
              <DialogTrigger asChild>
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 md:px-8 py-5 md:py-6 text-base md:text-lg shadow-lg hover:shadow-xl transition-all"
                >
                  <Heart className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                  Donate Now – Support a Life Today
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle className="text-center text-2xl">Donate to Support Us</DialogTitle>
                </DialogHeader>
                <div className="flex flex-col items-center gap-4 py-4">
                  <img 
                    src={donateQR} 
                    alt="Donation QR Code" 
                    className="w-64 h-auto rounded-lg"
                  />
                  <p className="text-sm text-muted-foreground text-center">
                    Scan the QR code to donate and support a life today
                  </p>
                </div>
              </DialogContent>
            </Dialog>
            <Button 
              size="lg" 
              variant="outline"
              className="bg-white/10 hover:bg-white/20 text-white border-white/30 hover:border-white/50 backdrop-blur-sm px-6 md:px-8 py-5 md:py-6 text-base md:text-lg"
              asChild
            >
              <Link to="/contact">
                <Users className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                Volunteer With Us – Be Part of the Change
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
