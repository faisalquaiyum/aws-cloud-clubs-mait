export default function Hero() {
  return (
    <section className="relative py-16 lg:py-24 flex items-center justify-center overflow-hidden px-6">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-32 h-32 opacity-20 bg-primary-container rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 opacity-10 bg-secondary rounded-full blur-3xl"></div>
        {/* Pixel Clouds Pattern Placeholder */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "radial-gradient(#275aa8 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        ></div>
      </div>
      <div className="container max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-8 text-center lg:text-left">
          <div className="inline-block px-4 py-2 bg-secondary-container text-on-secondary-container rounded-full font-label text-xs font-bold tracking-widest uppercase mb-4 opacity-0 animate-fade-in-up">
            LEVEL UP YOUR CLOUD SKILLS
          </div>
          <h1 className="text-6xl md:text-8xl font-headline font-extrabold text-on-surface leading-[0.9] tracking-tighter opacity-0 animate-fade-in-up delay-100">
            JOIN THE <span className="text-primary italic">CLOUD</span> <br /> RAID.
          </h1>
          <p className="text-xl text-on-surface-variant max-w-xl mx-auto lg:mx-0 leading-relaxed opacity-0 animate-fade-in-up delay-200">
            Embark on a pixel-perfect journey into the stratosphere of Amazon Web Services. Build, deploy, and conquer the digital frontier with MAIT's premier developer collective.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4 opacity-0 animate-fade-in-up delay-300">
            <button className="px-10 py-5 bg-primary text-on-primary rounded-full font-headline text-xl font-black pixel-hard-shadow hover:-translate-y-1 transition-transform border-2 border-on-primary-fixed">
              ESTABLISH CONNECTION
            </button>
            <button className="px-10 py-5 bg-surface-container-high text-on-surface rounded-full font-headline text-xl font-bold hover:bg-surface-container-highest transition-colors">
              VIEW MANIFESTO
            </button>
          </div>
        </div>
        <div className="relative flex justify-center items-center">
          <div className="relative w-full aspect-square max-w-md animate-float">
            {/* Main Islet */}
            <div className="absolute inset-0 bg-surface-container-lowest rounded-full shadow-2xl flex items-center justify-center border-8 border-surface-container-low overflow-hidden">
              <img
                className="w-full h-full object-cover scale-110"
                alt="Retro game style character with cloud elements"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCUBtelsMGh-o7CYU6HEhr7ox9Bmb2LHzki8F_BI1cCQbuL7BXZC6Qd7dC1JET92YWwz1Y0vN6hYHZHurxxD4WZ4iUHLl0geUaoJ-JJo1a_G7zEzRgkGBnELz72V4mdusuFl-Jma3AAfbkYAKV3hZccIO_9pRAHDohvrNEQZVHO0bz5fav10A8vOicHwya9hPYCw31F9EN9yX1ZeQAKAMlk7AT6W-2zLO7qzdDNZ1q5-CaICSNF-RQEV1DWQGw6Prp8R1zgoZBeD6um"
              />
            </div>
            {/* Floating Items */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-surface-bright rounded-xl shadow-lg flex items-center justify-center p-4 border-2 border-primary-container animate-float-delayed">
              <span className="material-symbols-outlined text-5xl text-primary">cloud</span>
            </div>
            <div className="absolute -bottom-5 -left-12 w-28 h-28 bg-tertiary-container rounded-full shadow-lg flex items-center justify-center border-4 border-white animate-float-fast">
              <span className="material-symbols-outlined text-4xl text-on-tertiary-container">database</span>
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 -right-16 w-20 h-20 bg-secondary rounded-2xl rotate-12 flex items-center justify-center shadow-xl">
              <span className="material-symbols-outlined text-white text-3xl">terminal</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
