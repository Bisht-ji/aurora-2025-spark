import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar, MapPin, Users, Sparkles } from "lucide-react";
import auroraHero from "@/assets/aurora-hero.jpg";
import fresherInvitation from "@/assets/fresher-invitation.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${auroraHero})` }}
      />
      <div className="absolute inset-0 z-10 bg-background/60" />
      
      {/* Particle Background */}
      <div className="absolute inset-0 z-10 particle-bg opacity-40" />
      
      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 text-center">
        <div className="animate-fade-in-up">
          {/* Event Badge */}
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-primary/20 bg-card/50 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">ABES EC College Presents</span>
          </div>
          
          {/* Main Title */}
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6 aurora-text leading-none">
            AURORA
          </h1>
          
          {/* Year Badge */}
          <div className="inline-block mb-8 px-6 py-3 rounded-full bg-primary/10 border border-primary/30 aurora-glow">
            <span className="text-2xl md:text-3xl font-bold text-primary">2025</span>
          </div>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            The most spectacular fresher's event of the year. Where new beginnings meet endless possibilities.
          </p>
          
          {/* Event Details Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10 max-w-4xl mx-auto">
            <Card className="p-4 bg-card/50 backdrop-blur-sm border border-primary/20 aurora-border">
              <div className="flex items-center justify-center gap-3">
                <Calendar className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">When</p>
                  <p className="font-semibold">21 Sept - 24 Sept</p>
                </div>
              </div>
            </Card>
            
            <Card className="p-4 bg-card/50 backdrop-blur-sm border border-secondary/20 aurora-border">
              <div className="flex items-center justify-center gap-3">
                <MapPin className="w-5 h-5 text-secondary" />
                <div>
                  <p className="text-sm text-muted-foreground">Where</p>
                  <p className="font-semibold">ABES EC Campus</p>
                </div>
              </div>
            </Card>
            
            <Card className="p-4 bg-card/50 backdrop-blur-sm border border-accent/20 aurora-border">
              <div className="flex items-center justify-center gap-3">
                <Users className="w-5 h-5 text-accent" />
                <div>
                  <p className="text-sm text-muted-foreground">For</p>
                  <p className="font-semibold">All Freshers</p>
                </div>
              </div>
            </Card>
          </div>
          
          {/* Aurora Invitation */}
          <div className="flex justify-center">
            <img 
              src={fresherInvitation} 
              alt="ABES invites you to Aurora - Fresher's Party" 
              className="max-w-md w-full h-auto rounded-lg shadow-2xl aurora-glow hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-primary rounded-full animate-aurora-pulse opacity-60" />
      <div className="absolute top-40 right-20 w-6 h-6 bg-secondary rounded-full animate-aurora-pulse opacity-40" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-40 left-1/4 w-3 h-3 bg-accent rounded-full animate-aurora-pulse opacity-50" style={{ animationDelay: '2s' }} />
    </section>
  );
};

export default Hero;