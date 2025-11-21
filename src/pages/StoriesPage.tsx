import Navigation from "@/components/Navigation";
import Stories from "@/components/Stories";
import Footer from "@/components/Footer";

const StoriesPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-20">
        <Stories />
      </div>
      <Footer />
    </div>
  );
};

export default StoriesPage;
