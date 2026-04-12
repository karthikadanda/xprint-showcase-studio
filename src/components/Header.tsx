import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="border-b border-foreground/10">
      <div className="container mx-auto flex justify-between items-center py-6 px-6 lg:px-8">
        <div className="flex items-center gap-8">
          <div className="text-2xl font-black tracking-tighter uppercase font-body">
            X<span className="text-magenta-press">Print</span>
          </div>
          <nav className="hidden md:flex gap-6 text-sm font-medium uppercase tracking-widest font-body">
            <a href="#services" className="hover:text-cyan-press transition-colors">Services</a>
            <a href="#portfolio" className="hover:text-magenta-press transition-colors">Portfolio</a>
            <a href="#about" className="hover:text-cyan-press transition-colors">About</a>
            <a href="#contact" className="hover:text-magenta-press transition-colors">Contact</a>
          </nav>
        </div>
        <div className="hidden md:flex items-center gap-3">
          <div className="size-3 rounded-full bg-cyan-press" />
          <div className="size-3 rounded-full bg-magenta-press" />
          <div className="size-3 rounded-full bg-yellow-press" />
          <div className="size-3 rounded-full bg-foreground" />
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
        </nav>
      )}
    </header>
  );
};

export default Header;
