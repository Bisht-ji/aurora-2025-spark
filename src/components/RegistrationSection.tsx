import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle, Mail, User, Phone, GraduationCap } from "lucide-react";

const RegistrationSection = () => {
  return (
    <section className="py-20 px-4 bg-muted/20">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Reserve Your <span className="aurora-text">Spot</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't miss out on the most spectacular fresher's event of 2025. Registration opens soon!
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          {/* Registration Benefits */}
          <div className="space-y-8">
            <Card className="p-8 bg-card/50 backdrop-blur-sm border border-primary/20 aurora-border">
              <h3 className="text-2xl font-bold mb-6 text-foreground">
                What's Included?
              </h3>
              
              <div className="space-y-4">
                {[
                  "Welcome kit with exclusive Aurora 2025 merchandise",
                  "All meals and refreshments throughout the day",
                  "Professional photography and videography",
                  "Certificates and participation awards",
                  "Access to all performances and activities",
                  "Networking opportunities with seniors and faculty",
                  "Surprise gifts and giveaways"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-muted-foreground">{benefit}</p>
                  </div>
                ))}
              </div>
            </Card>
            
            {/* Early Bird Badge */}
            <Card className="p-6 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border border-primary/30 aurora-glow text-center">
              <h4 className="text-xl font-bold mb-2 text-foreground">Early Bird Special</h4>
              <p className="text-muted-foreground mb-4">
                First 100 registrants get exclusive Aurora 2025 merchandise
              </p>
              <div className="text-3xl font-bold aurora-text">FREE</div>
            </Card>
          </div>
          
          {/* Registration Form */}
          <Card className="p-8 bg-card/70 backdrop-blur-sm border border-primary/20 aurora-border">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2 text-foreground">
                Get Notified
              </h3>
              <p className="text-muted-foreground">
                Be the first to know when registration opens
              </p>
            </div>
            
            <form className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="fullName" className="text-foreground">
                  <User className="w-4 h-4 inline mr-2" />
                  Full Name
                </Label>
                <Input 
                  id="fullName"
                  placeholder="Enter your full name"
                  className="bg-background/50 border border-primary/20 focus:border-primary"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground">
                  <Mail className="w-4 h-4 inline mr-2" />
                  Email Address
                </Label>
                <Input 
                  id="email"
                  type="email"
                  placeholder="your.email@student.abes.ac.in"
                  className="bg-background/50 border border-primary/20 focus:border-primary"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-foreground">
                  <Phone className="w-4 h-4 inline mr-2" />
                  Phone Number
                </Label>
                <Input 
                  id="phone"
                  type="tel"
                  placeholder="+91 XXXXX XXXXX"
                  className="bg-background/50 border border-primary/20 focus:border-primary"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="course" className="text-foreground">
                  <GraduationCap className="w-4 h-4 inline mr-2" />
                  Course & Year
                </Label>
                <Input 
                  id="course"
                  placeholder="e.g., B.Tech CSE - 1st Year"
                  className="bg-background/50 border border-primary/20 focus:border-primary"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="expectations" className="text-foreground">
                  What are you most excited about?
                </Label>
                <Textarea 
                  id="expectations"
                  placeholder="Tell us what you're looking forward to..."
                  className="bg-background/50 border border-primary/20 focus:border-primary min-h-[100px]"
                />
              </div>
              
              <Button 
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6 aurora-glow"
              >
                Notify Me When Registration Opens
              </Button>
              
              <p className="text-xs text-muted-foreground text-center">
                Registration opens in early September. Limited spots available!
              </p>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default RegistrationSection;