import { Phone, MapPin, Mail } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="grid grid-cols-1 md:grid-cols-2 min-h-[500px]">
      <div className="bg-secondary p-12 lg:p-16 flex flex-col justify-between text-secondary-foreground">
        <div>
          <h2 className="text-5xl lg:text-7xl font-display leading-[0.85] tracking-tight mb-8">
            Start Your<br />Project
          </h2>
          <p className="font-body text-sm max-w-sm opacity-80 mb-8">
            Send us your designs or let us create something from scratch. Fast turnaround, competitive pricing, exceptional quality.
          </p>
        </div>
        <div className="space-y-3 font-body text-sm">
          <a href="mailto:xprintdtf@gmail.com" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <Mail size={16} />
            <span>xprintdtf@gmail.com</span>
          </a>
          <a href="tel:+917569864565" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <Phone size={16} />
            <span>+91 7569864565</span>
          </a>
        </div>
      </div>
      <div className="bg-magenta-press p-12 lg:p-16 flex flex-col justify-between text-background">
        <p className="text-xl lg:text-2xl font-body font-bold uppercase max-w-[18ch]">
          Visit our workshop and see the magic happen.
        </p>
        <div className="mt-8">
          <div className="flex items-start gap-3 mb-4">
            <MapPin size={16} className="mt-1 shrink-0" />
            <div className="font-body">
              <p className="text-sm font-bold">XPrint Workshop</p>
              <p className="text-sm opacity-80">
                210, 2nd Floor, Rahmat Complex,<br />
                X Road, Ameerpet, Hyderabad,<br />
                Telangana 500038
              </p>
            </div>
          </div>
          <p className="font-body text-xs uppercase tracking-widest opacity-70">
            Open 7 Days / 10:00 AM – 9:00 PM
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
