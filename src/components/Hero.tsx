import { Button } from "@/components/ui/button";
import { Heart, Users } from "lucide-react";
import heroImage from "@/assets/hero-community.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(rgba(20, 15, 10, 0.6), rgba(20, 15, 10, 0.7)), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      <div className="container-custom section-padding relative z-10 text-center text-white">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-balance leading-tight">
            Transforming Lives, Restoring Hope in Delhi and Beyond
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto text-balance">
            Empowering the homeless, children, and marginalized communities through care, education, and livelihoods.
          </p>
          
          <div className="pt-8 space-y-6">
            <p className="text-lg md:text-xl leading-relaxed text-white/95 max-w-3xl mx-auto">
              Since the mid-1990s, Delhi House Society – Sewa Ashram has been a sanctuary of healing and transformation for Delhi's most vulnerable: the homeless, sick, and abandoned.
            </p>
            
            <p className="text-base md:text-lg leading-relaxed text-white/90 max-w-3xl mx-auto">
              What began when our founder, Ton Snellaert, was inspired by the Biblical call to "loose the chains of injustice" and bring hope to the poorest of the poor, has grown into a thriving community of compassion, rehabilitation, and empowerment.
            </p>
            
            <p className="text-base md:text-lg leading-relaxed text-white/90 max-w-3xl mx-auto">
              In recognition of our work as "a modern-day Good Samaritan," Delhi House Society received the <strong>Mother Teresa Memorial Award for Social Justice in 2010</strong>.
            </p>
            
            <p className="text-lg md:text-xl font-medium text-white/95 max-w-2xl mx-auto pt-4">
              Every life touched here tells a story of resilience, faith, and restored dignity.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all"
            >
              <Heart className="mr-2 h-5 w-5" />
              Donate Now – Support a Life Today
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="bg-white/10 hover:bg-white/20 text-white border-white/30 hover:border-white/50 backdrop-blur-sm px-8 py-6 text-lg"
            >
              <Users className="mr-2 h-5 w-5" />
              Volunteer With Us – Be Part of the Change
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
