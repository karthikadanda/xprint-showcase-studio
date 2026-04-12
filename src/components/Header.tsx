import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Instagram, Facebook, MessageCircle } from "lucide-react";
import logo from "@/assets/xprint-logo.png";

const INSTAGRAM_URL = "https://www.instagram.com/xprintdtf?igsh=MW01dWdxazJkdjExYQ==";
const FACEBOOK_URL = "https://www.facebook.com/share/18FERRWzBB/";
const WHATSAPP_URL = "https://wa.me/917569864565";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="border-b border-foreground/10">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 lg:px-8">
        <div className="flex items-center gap-8">
          <a href="#">
            <img src={logo} alt="XPrint DTF Printing" className="h-12 w-auto" />
          </a>
          <nav className="hidden md:flex gap-6 text-sm font-medium uppercase tracking-widest font-body">
            <a href="#services" className="hover:text-cyan-press transition-colors">Services</a>
            <a href="#portfolio" className="hover:text-magenta-press transition-colors">Portfolio</a>
            <a href="#about" className="hover:text-cyan-press transition-colors">About</a>
            <a href="#contact" className="hover:text-magenta-press transition-colors">Contact</a>
          </nav>
        </div>
        <div className="hidden md:flex items-center gap-4">
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="hover:text-magenta-press transition-colors"><Instagram size={18} /></a>
          <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-press transition-colors"><Facebook size={18} /></a>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-green-500 transition-colors"><MessageCircle size={18} /></a>
        </div>
        <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {mobileOpen && (
        <nav className="md:hidden border-t border-foreground/10 px-6 py-4 flex flex-col gap-3 text-sm font-medium uppercase tracking-widest font-body">
          <a href="#services" onClick={() => setMobileOpen(false)}>Services</a>
          <a href="#portfolio" onClick={() => setMobileOpen(false)}>Portfolio</a>
          <a href="#about" onClick={() => setMobileOpen(false)}>About</a>
          <a href="#contact" onClick={() => setMobileOpen(false)}>Contact</a>
          <div className="flex gap-4 pt-2 border-t border-foreground/10">
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer"><Instagram size={18} /></a>
            <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer"><Facebook size={18} /></a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"><MessageCircle size={18} /></a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
