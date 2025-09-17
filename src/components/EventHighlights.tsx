import { Card } from "@/components/ui/card";
import { Music, Gamepad2, Trophy, Camera, Heart, Zap } from "lucide-react";

const EventHighlights = () => {
  const highlights = [
    {
      icon: Music,
      title: "Live Performances",
      description: "Electrifying musical acts, dance performances, and celebrity appearances",
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      icon: Trophy,
      title: "Awards & Prizes",
      description: "Amazing prizes for winners, certificates, and surprise giveaways",
      color: "text-accent",
      bgColor: "bg-accent/10"
    },
    {
      icon: Heart,
      title: "Networking",
      description: "Meet your seniors, make new friends, and build lasting connections",
      color: "text-secondary",
      bgColor: "bg-secondary/10"
    },
    {
      icon: Zap,
      title: "Surprise Events",
      description: "Special activities, flash mobs, and unforgettable moments",
      color: "text-accent",
      bgColor: "bg-accent/10"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Event <span className="aurora-text">Highlights</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get ready for an unforgettable experience filled with excitement, entertainment, and endless memories
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => {
            const IconComponent = highlight.icon;
            return (
              <Card 
                key={index}
                className="p-8 bg-card/50 backdrop-blur-sm border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:scale-105 aurora-border group"
              >
                <div className={`w-16 h-16 rounded-full ${highlight.bgColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className={`w-8 h-8 ${highlight.color}`} />
                </div>
                
                <h3 className="text-xl font-bold mb-4 text-foreground">
                  {highlight.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {highlight.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EventHighlights;