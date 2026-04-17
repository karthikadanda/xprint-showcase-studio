import { Shirt, Sticker, Leaf } from "lucide-react";
import serviceTshirt from "@/assets/service-tshirt.jpg";
import serviceVinyl from "@/assets/service-vinyl.jpg";
import serviceEcosolvent from "@/assets/service-ecosolvent.jpg";
import { buildWhatsAppUrl, WA_MESSAGES } from "@/lib/whatsapp";
import { WhatsAppIcon } from "./SocialIcons";

const services = [
  {
    num: "01",
    label: "DTF TRANSFERS",
    title: "DTF Printing",
    icon: Shirt,
    hoverColor: "hover:bg-cyan-press/5",
    image: serviceTshirt,
    items: [
      "Direct-to-Film Transfers",
      "Custom T-Shirts & Apparel",
      "Sports Jerseys & Team Uniforms",
      "Brand Promotion Merchandise",
      "Jute Bags & Tote Bags",
      "Bulk & Corporate Orders",
      "Wash-Resistant Vivid Prints",
    ],
  },
  {
    num: "02",
    label: "SIGNAGE",
    title: "Vinyl Printing",
    icon: Sticker,
    hoverColor: "hover:bg-magenta-press/5",
    image: serviceVinyl,
    items: [
      "Sticker & Decals",
      "Vinyl Banners for Outdoor Advertising",
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
    image: serviceEcosolvent,
    items: [
      "Large Format Displays",
      "Outdoor Banners",
      "Canvas Art for Wall Decorations",
      "Backlit Displays",
      "Eco-Friendly Inks",
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
            className={`border-b md:border-r border-foreground/10 last:border-r-0 group transition-colors ${s.hoverColor}`}
          >
            <div className="overflow-hidden">
              <img
                src={s.image}
                alt={s.title}
                loading="lazy"
                width={800}
                height={600}
                className="w-full h-48 lg:h-56 object-cover transition-all duration-500"
              />
            </div>
            <div className="p-8 lg:p-10 flex flex-col justify-between min-h-[320px]">
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
              <a
                href={buildWhatsAppUrl(WA_MESSAGES.service(s.title))}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 text-xs font-body font-bold uppercase tracking-widest border-b border-foreground pb-1 self-start hover:text-[#25D366] hover:border-[#25D366] transition-colors"
              >
                <WhatsAppIcon size={14} />
                Enquire on WhatsApp
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
