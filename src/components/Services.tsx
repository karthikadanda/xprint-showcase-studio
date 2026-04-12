import { Shirt, Sticker, Leaf } from "lucide-react";

const services = [
  {
    num: "01",
    label: "APPAREL",
    title: "T-Shirt Printing",
    icon: Shirt,
    hoverColor: "hover:bg-cyan-press/5",
    items: [
      "Screen Printing",
      "DTG Printing",
      "Heat Transfer",
      "Embroidery",
      "Custom Designs",
    ],
  },
  {
    num: "02",
    label: "SIGNAGE",
    title: "Vinyl Printing",
    icon: Sticker,
    hoverColor: "hover:bg-magenta-press/5",
    items: [
      "Sticker & Decals",
      "Banner Printing",
      "Vehicle Wraps",
      "Window Graphics",
      "Floor Graphics",
    ],
  },
  {
    num: "03",
    label: "LARGE FORMAT",
    title: "Eco-Solvent Printing",
    icon: Leaf,
    hoverColor: "hover:bg-yellow-press/5",
    items: [
      "Large Format Prints",
      "Outdoor Banners",
      "Canvas Prints",
      "Backlit Displays",
      "Eco-Friendly Inks",
      "Jute Bags",
      "Corporate Orders",
      "Commercial & Retail Bulk",
    ],
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
      <div className="grid grid-cols-1 md:grid-cols-3 border-t border-foreground/10">
        {services.map((s) => (
          <div
            key={s.num}
            className={`p-8 lg:p-10 border-b md:border-r border-foreground/10 last:border-r-0 flex flex-col justify-between min-h-[420px] group transition-colors ${s.hoverColor}`}
          >
            <div>
              <span className="text-xs font-body font-bold text-muted-foreground">
                {s.num} // {s.label}
              </span>
              <h3 className="text-2xl lg:text-3xl font-display mt-4">{s.title}</h3>
              <s.icon
                className="mt-4 text-muted-foreground group-hover:text-foreground transition-colors"
                size={28}
              />
              <ul className="mt-6 space-y-2">
                {s.items.map((item) => (
                  <li
                    key={item}
                    className="text-sm font-body text-muted-foreground flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-muted-foreground/50 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
