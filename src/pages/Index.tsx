import Hero from "@/components/Hero";
import EventHighlights from "@/components/EventHighlights";
import EventTimeline from "@/components/EventTimeline";
import RegistrationSection from "@/components/RegistrationSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <EventHighlights />
      <EventTimeline />
      <RegistrationSection />
      <Footer />
    </div>
  );
};

export default Index;
