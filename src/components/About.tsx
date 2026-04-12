const stats = [
  { value: "10+", label: "Years Experience" },
  { value: "5K+", label: "Projects Delivered" },
  { value: "99%", label: "Client Satisfaction" },
  { value: "24h", label: "Turnaround Available" },
];

const About = () => {
  return (
    <section id="about" className="bg-foreground text-background py-24 lg:py-32 px-6 lg:px-8 relative overflow-hidden">
      {/* CMYK accent bars */}
      <div className="absolute top-0 left-0 w-full h-1 bg-cyan-press" />
      <div className="absolute top-1 left-0 w-full h-1 bg-magenta-press" />
      <div className="absolute top-2 left-0 w-full h-1 bg-yellow-press" />

      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <h2 className="text-5xl lg:text-6xl font-display leading-none mb-8">
            Why XPrint?
          </h2>
          <p className="text-background/60 text-sm leading-relaxed font-body max-w-md">
            We're not just a print shop — we're your creative production partner. With state-of-the-art equipment and a team of experienced designers, we deliver print products that make an impact. From concept to delivery, we handle every detail.
          </p>
        </div>
        <div className="lg:col-span-7">
          <div className="grid grid-cols-2 gap-px bg-background/20 border border-background/20">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-foreground p-8 lg:p-10">
                <span className="text-cyan-press font-display text-4xl lg:text-5xl block mb-3">
                  {stat.value}
                </span>
                <p className="text-xs text-background/60 font-body uppercase tracking-widest">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
