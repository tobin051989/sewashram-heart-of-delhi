import Navigation from "@/components/Navigation";
import Governance from "@/components/Governance";
import Footer from "@/components/Footer";

const GovernancePage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-20">
        <Governance />
      </div>
      <Footer />
    </div>
  );
};

export default GovernancePage;
