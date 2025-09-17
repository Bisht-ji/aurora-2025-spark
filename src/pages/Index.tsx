import Hero from "@/components/Hero";
import EventHighlights from "@/components/EventHighlights";
import CollegeEvents from "@/components/CollegeEvents";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <EventHighlights />
      <CollegeEvents />
      <Footer />
    </div>
  );
};

export default Index;