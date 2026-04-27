import { Leaf } from "lucide-react";

const Footer = () => (
  <footer className="py-8 bg-card border-t border-border">
    <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
      <div className="flex items-center gap-2 text-primary font-display font-bold">
        <Leaf className="w-5 h-5" />
        EcoCase
      </div>
      <p>© 2026 Bio-Degradable Phone Case Project — Unit I & II</p>
    </div>
  </footer>
);

export default Footer;
