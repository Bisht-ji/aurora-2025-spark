import { Card } from "@/components/ui/card";
import { MapPin, Phone, Mail, Calendar, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative py-20 px-4 bg-card/30 backdrop-blur-sm border-t border-primary/20">
      {/* Background Pattern */}
      <div className="absolute inset-0 particle-bg opacity-20" />
      
      <div className="relative container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Event Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6">
              <span className="aurora-text">Aurora 2025</span>
            </h3>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              ABES EC College's most spectacular fresher's event. Where new beginnings meet endless possibilities.
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="w-4 h-4 text-primary" />
              <span>Mid September 2025</span>
            </div>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-foreground">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-muted-foreground">ABES Engineering College</p>
                  <p className="text-sm text-muted-foreground">Ghaziabad, Uttar Pradesh</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-secondary flex-shrink-0" />
                <p className="text-sm text-muted-foreground">+91 XXXXX XXXXX</p>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-accent flex-shrink-0" />
                <p className="text-sm text-muted-foreground">bisht-ji@outlook.com</p>
              </div>
            </div>
          </div>
          
          
          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-foreground">Follow Us</h4>
            <div className="flex gap-4 mb-4">
              <a 
                href="#"
                className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center hover:bg-primary/20 transition-colors aurora-glow"
              >
                <Instagram className="w-4 h-4 text-primary" />
              </a>
            </div>
            
            <p className="text-xs text-muted-foreground">
              Stay updated with the latest announcements and behind-the-scenes content!
            </p>
          </div>
        </div>
        
        {/* Bottom Section */}
        <Card className="p-6 bg-card/50 backdrop-blur-sm border border-primary/20 aurora-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <p className="text-sm text-muted-foreground">
                © 2025 Aurora Event, ABES Engineering College. All rights reserved.
              </p>
            </div>
            
            <div className="flex items-center gap-6 text-xs text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-primary transition-colors">Code of Conduct</a>
            </div>
          </div>
        </Card>
      </div>
    </footer>
  );
};

export default Footer;