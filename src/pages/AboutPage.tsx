import Navigation from "@/components/Navigation";
import About from "@/components/About";
import Faith from "@/components/Faith";
import Footer from "@/components/Footer";

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-20">
        <About />
        <Faith />
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
