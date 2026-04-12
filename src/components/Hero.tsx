import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-print.jpg";

const Hero = () => {
  return (
    <section className="border-b border-foreground/10">
      <div className="container mx-auto px-6 lg:px-8 pt-16 pb-20 lg:pt-20 lg:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-7">
            <span className="block text-xs uppercase tracking-[0.3em] mb-6 text-muted-foreground font-semibold font-body">
              Your Vision — Our Ink
            </span>
            <h1 className="text-6xl sm:text-7xl lg:text-[9rem] leading-[0.85] font-display italic tracking-tighter">
              Print It<br />
              <span className="ml-8 lg:ml-20">Bold.</span>
            </h1>
          </div>
          <div className="lg:col-span-5 lg:pb-6">
            <p className="text-base lg:text-lg max-w-[32ch] mb-8 leading-relaxed font-body">
              From banners that dominate skylines to pamphlets that tell your story — XPrint brings your brand to life on every surface.
            </p>
            <Button variant="press" size="lg" asChild>
              <a href="#contact">Get a Free Quote</a>
            </Button>
          </div>
        </div>
      </div>
      <div className="border-t border-foreground/10">
        <img
          src={heroImg}
          alt="XPrint printing workshop with large format printer"
          className="w-full h-64 sm:h-80 lg:h-[420px] object-cover"
          width={1280}
          height={800}
        />
      </div>
    </section>
  );
};

export default Hero;
