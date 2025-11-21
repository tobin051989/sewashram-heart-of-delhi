import Navigation from "@/components/Navigation";
import Programs from "@/components/Programs";
import Footer from "@/components/Footer";

const ProgramsPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-20">
        <Programs />
      </div>
      <Footer />
    </div>
  );
};

export default ProgramsPage;
