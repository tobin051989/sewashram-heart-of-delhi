import Navigation from "@/components/Navigation";
import LearningCentres from "@/components/LearningCentres";
import Footer from "@/components/Footer";

const LearningCentresPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-20">
        <LearningCentres />
      </div>
      <Footer />
    </div>
  );
};

export default LearningCentresPage;
