import { Printer, BookOpen, Shirt, Coffee } from "lucide-react";

const services = [
  {
    num: "01",
    label: "LARGE FORMAT",
    title: "Banners & Vinyl",
    desc: "UV-resistant inks on heavy-duty vinyl. Perfect for outdoor signage, trade shows, and storefront displays.",
    icon: Printer,
    hoverColor: "hover:bg-cyan-press/5",
  },
  {
    num: "02",
    label: "PRINT MEDIA",
    title: "Pamphlets & Flyers",
    desc: "High-quality offset and digital printing on premium paper stock. Brochures, menus, catalogs, and more.",
    icon: BookOpen,
    hoverColor: "hover:bg-magenta-press/5",
  },
  {
    num: "03",
    label: "APPAREL",
    title: "T-Shirt Printing",
    desc: "Screen printing and DTG on premium cotton. Custom designs for events, teams, and brand merchandise.",
    icon: Shirt,
    hoverColor: "hover:bg-yellow-press/5",
  },
  {
    num: "04",
    label: "MERCHANDISE",
    title: "Mug & Gifts",
    desc: "Sublimation printing on ceramics, tumblers, and promotional items. Durable, vibrant, and dishwasher-safe.",
    icon: Coffee,
    hoverColor: "hover:bg-foreground/5",
  },
];

const Services = () => {
  return (
    <section id="services" className="border-b border-foreground/10">
      <div className="container mx-auto px-6 lg:px-8 py-16">
        <div className="flex items-end justify-between mb-12">
          <h2 className="text-4xl lg:text-5xl font-display">What We Print</h2>
          <span className="hidden sm:block text-xs font-body text-muted-foreground uppercase tracking-widest">
            Our Services
          </span>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-foreground/10">
        {services.map((s) => (
          <div
            key={s.num}
            className={`p-8 border-b sm:border-r border-foreground/10 last:border-r-0 flex flex-col justify-between min-h-[320px] lg:min-h-[380px] group transition-colors ${s.hoverColor}`}
          >
            <div>
              <span className="text-xs font-body font-bold text-muted-foreground">
                {s.num} // {s.label}
              </span>
              <h3 className="text-2xl lg:text-3xl font-display mt-4">{s.title}</h3>
              <s.icon className="mt-4 text-muted-foreground group-hover:text-foreground transition-colors" size={28} />
            </div>
            <p className="text-sm text-muted-foreground font-body mt-6">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
