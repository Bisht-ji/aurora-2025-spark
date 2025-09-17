import Hero from "@/components/Hero";
import EventHighlights from "@/components/EventHighlights";

import RegistrationSection from "@/components/RegistrationSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <EventHighlights />
      
      <RegistrationSection />
      <Footer />
    </div>
  );
};

export default Index;
