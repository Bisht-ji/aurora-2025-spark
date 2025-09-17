import { Card } from "@/components/ui/card";
import { Clock, Users, Music, Trophy, Camera, Sparkles } from "lucide-react";

const EventTimeline = () => {
  const timelineEvents = [
    {
      time: "10:00 AM",
      title: "Registration & Welcome",
      description: "Check-in, welcome kit distribution, and networking breakfast",
      icon: Users,
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      time: "11:30 AM",
      title: "Opening Ceremony",
      description: "Welcome address by the Dean and senior students",
      icon: Sparkles,
      color: "text-secondary",
      bgColor: "bg-secondary/10"
    },
    {
      time: "12:30 PM",
      title: "Cultural Performances",
      description: "Dance, music, and talent showcase by senior students",
      icon: Music,
      color: "text-accent",
      bgColor: "bg-accent/10"
    },
    {
      time: "2:00 PM",
      title: "Interactive Games",
      description: "Team building activities and fun challenges",
      icon: Trophy,
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      time: "4:00 PM",
      title: "Photo Session",
      description: "Group photos, individual portraits, and memory making",
      icon: Camera,
      color: "text-secondary",
      bgColor: "bg-secondary/10"
    },
    {
      time: "6:00 PM",
      title: "Closing & Networking",
      description: "Awards ceremony, dinner, and informal networking",
      icon: Clock,
      color: "text-accent",
      bgColor: "bg-accent/10"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Event <span className="aurora-text">Timeline</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A carefully crafted schedule designed to give you the perfect fresher's experience
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-secondary to-accent opacity-30 transform md:-translate-x-1/2" />
          
          {timelineEvents.map((event, index) => {
            const IconComponent = event.icon;
            const isEven = index % 2 === 0;
            
            return (
              <div key={index} className={`relative flex items-center mb-12 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Timeline Dot */}
                <div className="absolute left-6 md:left-1/2 w-6 h-6 bg-card border-4 border-primary rounded-full transform md:-translate-x-1/2 z-10 aurora-glow" />
                
                {/* Content Card */}
                <div className={`ml-16 md:ml-0 ${isEven ? 'md:mr-8 md:text-right' : 'md:ml-8'} md:w-5/12`}>
                  <Card className="p-6 bg-card/50 backdrop-blur-sm border border-primary/20 hover:border-primary/40 transition-all duration-300 aurora-border">
                    <div className={`flex items-center gap-4 mb-4 ${isEven ? 'md:justify-end' : ''}`}>
                      <div className={`w-12 h-12 rounded-full ${event.bgColor} flex items-center justify-center ${isEven ? 'md:order-2' : ''}`}>
                        <IconComponent className={`w-6 h-6 ${event.color}`} />
                      </div>
                      <div className={isEven ? 'md:text-right' : ''}>
                        <p className="text-sm font-medium text-muted-foreground">
                          {event.time}
                        </p>
                        <h3 className="text-xl font-bold text-foreground">
                          {event.title}
                        </h3>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {event.description}
                    </p>
                  </Card>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EventTimeline;