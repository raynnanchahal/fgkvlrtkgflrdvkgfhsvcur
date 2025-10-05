import neuralLogo from "@/assets/neural-logo.png";

const Footer = () => {
  return (
    <footer className="glass-effect border-t border-border/50 py-12">
      <div className="container-flow">
        <div className="flex flex-col items-center justify-center space-y-6">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src={neuralLogo} alt="Neural Ads" className="h-10 w-10" />
            <span className="text-2xl font-bold uppercase tracking-wider">Neural Ads</span>
          </div>
          
          {/* Tagline */}
          <p className="text-foreground/70 text-center max-w-md uppercase tracking-wider text-sm">
            Brain-targeting growth engine for ambitious brands
          </p>
          
          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">
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
            <span className="text-foreground/70 uppercase tracking-wider">
              Privacy Policy (Coming Soon)
            </span>
          </div>
          
          {/* Copyright */}
          <div className="border-t border-border/50 pt-6 text-center">
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