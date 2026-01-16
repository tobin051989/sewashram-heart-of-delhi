import Navigation from "@/components/Navigation";
import Policies from "@/components/Policies";
import Footer from "@/components/Footer";

const PoliciesPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-16 sm:pt-20">
        <Policies />
      </div>
      <Footer />
    </div>
  );
};

export default PoliciesPage;
