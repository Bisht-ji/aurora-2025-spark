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
            Join <span className="aurora-text">Aurora</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't miss out on the most spectacular fresher's event of 2025.
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <div className="space-y-8">
          </div>
          
          {/* Registration Form */}
          <Card className="p-8 bg-card/70 backdrop-blur-sm border border-primary/20 aurora-border">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2 text-foreground">
                Register Now
              </h3>
              <p className="text-muted-foreground">
                Secure your spot at Aurora 2025
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
                Register for Aurora 2025
              </Button>
              
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default RegistrationSection;