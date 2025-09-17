import { Card } from "@/components/ui/card";
import { GraduationCap, Star, Users, Zap } from "lucide-react";

const CollegeEvents = () => {
  return (
    <section className="py-20 px-4 bg-muted/20">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            ABES EC <span className="aurora-text">Events</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            At ABES Engineering College, we believe in creating memorable experiences that go beyond academics. 
            Our events are designed to foster creativity, build lasting friendships, and create unforgettable memories.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Card className="p-8 bg-card/50 backdrop-blur-sm border border-primary/20 aurora-border">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Academic Excellence</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Our college hosts various academic competitions, seminars, and workshops that help students 
              stay ahead in their fields. From technical symposiums to research conferences, we provide 
              platforms for intellectual growth.
            </p>
          </Card>
          
          <Card className="p-8 bg-card/50 backdrop-blur-sm border border-secondary/20 aurora-border">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                <Star className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Cultural Festivals</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              From traditional celebrations to modern cultural fests, ABES EC comes alive with vibrant 
              colors, music, and performances. Our annual cultural festival showcases the diverse talents 
              of our student community.
            </p>
          </Card>
          
          <Card className="p-8 bg-card/50 backdrop-blur-sm border border-accent/20 aurora-border">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                <Users className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Community Building</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Our events focus on building a strong sense of community among students, faculty, and staff. 
              Through fresher welcomes, farewell parties, and social gatherings, we create bonds that last 
              a lifetime.
            </p>
          </Card>
          
          <Card className="p-8 bg-card/50 backdrop-blur-sm border border-primary/20 aurora-border">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Innovation & Technology</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We regularly organize hackathons, coding competitions, and tech talks that keep our students 
              at the forefront of technological advancement. These events encourage innovation and creative 
              problem-solving.
            </p>
          </Card>
        </div>
        
        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Aurora 2025 is just the beginning of your incredible journey at ABES EC. Join us as we create 
            memories, forge friendships, and embark on adventures that will define your college experience.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CollegeEvents;