import Navigation from "@/components/Navigation";
import GetInvolved from "@/components/GetInvolved";
import Transparency from "@/components/Transparency";
import Footer from "@/components/Footer";

const GetInvolvedPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-20">
        <GetInvolved />
        <Transparency />
      </div>
      <Footer />
    </div>
  );
};

export default GetInvolvedPage;
