import { Heart } from "lucide-react";

const Footer = () => (
  <footer className="py-8 border-t border-border bg-background">
    <div className="max-w-6xl mx-auto px-6 text-center">
      <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
        Made with <Heart size={14} className="text-primary" /> By <a  href="http://linkedin.com/in/ramzimalik" target="_blank" className="text-primary hover:underline">Ramzi Malik</a> © {new Date().getFullYear()}
      </p>
    </div>
  </footer>
);

export default Footer;
