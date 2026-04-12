import bannersImg from "@/assets/portfolio-banners.jpg";
import tshirtImg from "@/assets/portfolio-tshirts.jpg";
import apparelImg from "@/assets/portfolio-apparel.jpg";
import vinylImg from "@/assets/portfolio-vinyl.jpg";
import ecoImg from "@/assets/portfolio-eco.jpg";
import jerseysImg from "@/assets/portfolio-jerseys.jpg";
import canvasImg from "@/assets/portfolio-canvas.jpg";
import largeformatImg from "@/assets/portfolio-largeformat.jpg";

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 lg:py-28 px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-end mb-16">
          <h2 className="text-4xl lg:text-5xl font-display">Recent Work</h2>
          <span className="text-xs font-body font-bold tracking-widest border-b border-foreground pb-1 uppercase cursor-pointer hover:text-magenta-press hover:border-magenta-press transition-colors">
            View All
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main image - Vinyl Banners */}
          <div className="lg:col-span-7 space-y-4">
            <div className="overflow-hidden border border-foreground/10">
              <img
                src={bannersImg}
                alt="Vinyl banners for outdoor advertising"
                className="w-full aspect-[16/10] object-cover transition-all duration-700"
                loading="lazy"
                width={1280}
                height={960}
              />
            </div>
            <div className="flex justify-between items-start font-body">
              <div>
                <h4 className="font-bold uppercase text-sm">Outdoor Advertising</h4>
                <p className="text-xs text-muted-foreground">Vinyl Banners & Signage</p>
              </div>
              <span className="text-xs">2024</span>
            </div>
          </div>

          {/* Side column - Sports Jerseys */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <div className="space-y-4">
              <div className="overflow-hidden border border-foreground/10">
                <img
                  src={jerseysImg}
                  alt="Custom sports jerseys and team uniforms"
                  className="w-full aspect-square object-cover transition-all duration-700"
                  loading="lazy"
                  width={1024}
                  height={1024}
                />
              </div>
              <div className="font-body">
                <h4 className="font-bold uppercase text-sm">Sports Jerseys & Team Uniforms</h4>
                <p className="text-xs text-muted-foreground">Custom Sublimation & Screen Print</p>
              </div>
            </div>
          </div>
        </div>

        {/* Second row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div className="space-y-4">
            <div className="overflow-hidden border border-foreground/10">
              <img
                src={tshirtImg}
                alt="Custom printed t-shirts collection"
                className="w-full aspect-[4/3] object-cover transition-all duration-700"
                loading="lazy"
                width={1024}
                height={1024}
              />
            </div>
            <div className="font-body">
              <h4 className="font-bold uppercase text-sm">T-Shirt Collection</h4>
              <p className="text-xs text-muted-foreground">Screen Print, DTG & Heat Transfer</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="overflow-hidden border border-foreground/10">
              <img
                src={vinylImg}
                alt="Vinyl stickers, decals and floor graphics"
                className="w-full aspect-[4/3] object-cover transition-all duration-700"
                loading="lazy"
                width={1024}
                height={1024}
              />
            </div>
            <div className="font-body">
              <h4 className="font-bold uppercase text-sm">Vinyl & Signage</h4>
              <p className="text-xs text-muted-foreground">Stickers, Decals & Window Graphics</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="overflow-hidden border border-foreground/10">
              <img
                src={apparelImg}
                alt="Custom embroidered apparel and brand merchandise"
                className="w-full aspect-[4/3] object-cover transition-all duration-700"
                loading="lazy"
                width={1024}
                height={1024}
              />
            </div>
            <div className="font-body">
              <h4 className="font-bold uppercase text-sm">Brand Promotion Apparel</h4>
              <p className="text-xs text-muted-foreground">Embroidery, Caps & Corporate Wear</p>
            </div>
          </div>
        </div>

        {/* Third row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div className="space-y-4">
            <div className="overflow-hidden border border-foreground/10">
              <img
                src={largeformatImg}
                alt="Eco-solvent large format display prints"
                className="w-full aspect-[16/10] object-cover transition-all duration-700"
                loading="lazy"
                width={1024}
                height={1024}
              />
            </div>
            <div className="font-body">
              <h4 className="font-bold uppercase text-sm">Large Format Displays</h4>
              <p className="text-xs text-muted-foreground">Eco-Solvent Prints & Backlit Displays</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="overflow-hidden border border-foreground/10">
              <img
                src={canvasImg}
                alt="Canvas art prints for wall decoration"
                className="w-full aspect-[16/10] object-cover transition-all duration-700"
                loading="lazy"
                width={1024}
                height={1024}
              />
            </div>
            <div className="font-body">
              <h4 className="font-bold uppercase text-sm">Canvas Art</h4>
              <p className="text-xs text-muted-foreground">Wall Decorations & Custom Art Prints</p>
            </div>
          </div>
        </div>

        {/* Eco row */}
        <div className="grid grid-cols-1 gap-8 mt-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-5 space-y-4">
              <div className="overflow-hidden border border-foreground/10">
                <img
                  src={ecoImg}
                  alt="Eco-friendly printed jute bags and corporate gifts"
                  className="w-full aspect-[4/3] object-cover transition-all duration-700"
                  loading="lazy"
                  width={1024}
                  height={1024}
                />
              </div>
              <div className="font-body">
                <h4 className="font-bold uppercase text-sm">Eco-Friendly Collection</h4>
                <p className="text-xs text-muted-foreground">Jute Bags & Corporate Orders</p>
              </div>
            </div>

            <div className="md:col-span-7 bg-foreground text-background p-10 lg:p-12 flex flex-col justify-center items-center text-center space-y-5">
              <div className="size-12 border-2 border-background/20 flex items-center justify-center rounded-full">
                <div className="size-1.5 bg-background rounded-full" />
              </div>
              <h3 className="text-xl lg:text-2xl font-display italic">
                Every project is custom crafted for your brand.
              </h3>
              <p className="text-xs uppercase tracking-widest opacity-60 font-body">
                Let's discuss your next project
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
