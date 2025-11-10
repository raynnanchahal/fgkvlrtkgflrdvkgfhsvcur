import neuralLogo from "@/assets/neural-logo.png";
import { Linkedin, Mail, MessageCircle, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="glass-effect border-t border-border/50 py-12">
      <div className="container-flow">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Logo & Tagline */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img src={neuralLogo} alt="Neural Ads" className="h-10 w-10" />
              <span className="text-2xl font-bold uppercase tracking-wider">Neural Ads</span>
            </div>
            <p className="text-foreground/70 text-sm uppercase tracking-wider">
              Brain-targeting growth engine for ambitious brands
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold uppercase tracking-wider">Quick Links</h3>
            <div className="flex flex-col space-y-3 text-sm">
              <a 
                href="https://creative-win-machine.lovable.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-flow-cyan transition-colors uppercase tracking-wider"
              >
                High-Converting Creatives
              </a>
              <a 
                href="https://preview--neuroads-casecraft.lovable.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-flow-cyan transition-colors uppercase tracking-wider"
              >
                Case Studies
              </a>
              <span className="text-foreground/70 uppercase tracking-wider cursor-not-allowed">
                We are Hiring (Coming Soon)
              </span>
            </div>
          </div>
          
          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold uppercase tracking-wider">Contact</h3>
            <div className="flex flex-col space-y-3 text-sm">
              <a 
                href="mailto:founder@neuroads.agency"
                className="flex items-center gap-2 text-foreground/70 hover:text-flow-cyan transition-colors"
              >
                <Mail className="w-4 h-4" />
                founder@neuroads.agency
              </a>
              <a 
                href="https://wa.me/919878944263"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-foreground/70 hover:text-flow-cyan transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                Chat with an expert
              </a>
              <div className="flex items-center gap-2 text-foreground/70">
                <MapPin className="w-4 h-4" />
                Sushant Lok, Phase 1, Gurugram
              </div>
            </div>
          </div>
          
          {/* Social & Legal */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold uppercase tracking-wider">Connect</h3>
            <div className="flex flex-col space-y-3 text-sm">
              <a 
                href="https://www.linkedin.com/company/neuro-ads"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-foreground/70 hover:text-flow-cyan transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
        
        {/* Legal & Disclaimers */}
        <div className="border-t border-border/50 pt-8 space-y-6">
          <div className="flex flex-wrap justify-center gap-4 text-xs">
            <span className="text-foreground/60 uppercase tracking-wider cursor-not-allowed">Privacy Policy</span>
            <span className="text-foreground/60">•</span>
            <span className="text-foreground/60 uppercase tracking-wider cursor-not-allowed">Terms and Conditions</span>
            <span className="text-foreground/60">•</span>
            <span className="text-foreground/60 uppercase tracking-wider cursor-not-allowed">GDPR</span>
            <span className="text-foreground/60">•</span>
            <span className="text-foreground/60 uppercase tracking-wider cursor-not-allowed">Earning Disclaimer</span>
            <span className="text-foreground/60">•</span>
            <span className="text-foreground/60 uppercase tracking-wider cursor-not-allowed">Refunds and Cancellation Policy</span>
          </div>
          
          <div className="text-center">
            <p className="text-foreground/50 text-xs leading-relaxed max-w-4xl mx-auto">
              This site is not a part of the Facebook website or Facebook Inc. Additionally, this site is NOT endorsed by Facebook in any way. 
              FACEBOOK is a trademark of FACEBOOK, Inc.
            </p>
          </div>
          
          {/* Copyright */}
          <div className="text-center">
            <p className="text-foreground/60 text-sm uppercase tracking-wider">
              © 2025 Neural Ads. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
