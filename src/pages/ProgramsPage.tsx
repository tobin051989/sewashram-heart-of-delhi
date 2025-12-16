import Navigation from "@/components/Navigation";
import Programs from "@/components/Programs";
import Faith from "@/components/Faith";
import Footer from "@/components/Footer";

const ProgramsPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-20">
        <Programs />
        <Faith />
      </div>
      <Footer />
    </div>
  );
};

export default ProgramsPage;
