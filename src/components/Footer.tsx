const Footer = () => {
  return (
    <footer className="border-t border-foreground/10 px-6 lg:px-8 py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
        <div className="space-y-3">
          <div className="text-xl font-black uppercase font-body">
            X<span className="text-magenta-press">Print</span>
          </div>
          <p className="text-[10px] leading-tight text-muted-foreground uppercase tracking-wider font-body">
            © 2024 XPrint — Premium Printing Services<br />
            All Rights Reserved
          </p>
        </div>
        <div className="flex gap-12 font-body">
          <div className="space-y-2">
            <span className="text-[10px] font-bold text-muted-foreground uppercase">Follow Us</span>
            <ul className="text-xs font-bold space-y-1 uppercase">
              <li><a href="#" className="hover:text-cyan-press transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-magenta-press transition-colors">Facebook</a></li>
              <li><a href="#" className="hover:text-cyan-press transition-colors">WhatsApp</a></li>
            </ul>
          </div>
          <div className="space-y-2">
            <span className="text-[10px] font-bold text-muted-foreground uppercase">Quick Links</span>
            <ul className="text-xs font-bold space-y-1 uppercase">
              <li><a href="#services" className="hover:text-cyan-press transition-colors">Services</a></li>
              <li><a href="#portfolio" className="hover:text-magenta-press transition-colors">Portfolio</a></li>
              <li><a href="#contact" className="hover:text-cyan-press transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
