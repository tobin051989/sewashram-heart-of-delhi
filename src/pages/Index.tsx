import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Introduction from "@/components/Introduction";
import About from "@/components/About";
import Programs from "@/components/Programs";
import Stories from "@/components/Stories";
import Faith from "@/components/Faith";
import Newsletter from "@/components/Newsletter";
import Team from "@/components/Team";
import GetInvolved from "@/components/GetInvolved";
import Transparency from "@/components/Transparency";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Introduction />
      <About />
      <Programs />
      <Stories />
      <Faith />
      <Newsletter />
      <Team />
      <GetInvolved />
      <Transparency />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
