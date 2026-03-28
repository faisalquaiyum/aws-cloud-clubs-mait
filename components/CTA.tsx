import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-24 px-6">
      <div className="container max-w-5xl mx-auto text-center bg-surface-container-lowest p-16 rounded-full shadow-2xl relative overflow-hidden border-8 border-surface-container-low">
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, #275aa8 0, #275aa8 1px, transparent 0, transparent 50%)",
            backgroundSize: "10px 10px",
          }}
        ></div>
        <h2 className="text-5xl md:text-7xl font-headline font-extrabold mb-8 tracking-tighter">
          THE CLOUD IS <br /> CALLING.
        </h2>
        <p className="text-xl text-on-surface-variant mb-12 max-w-xl mx-auto border-2 border-transparent">
          Explore our recent events and initiatives.
        </p>
        <button className="bg-primary text-on-primary px-16 py-8 rounded-full font-headline text-2xl font-black pixel-hard-shadow hover:scale-105 active:scale-95 transition-all border-2 border-on-primary-fixed">
          <Link href="https://www.meetup.com/aws-cloud-club-at-maharaja-agrasen-inst-of-technology/" target="_blank">JOIN THE CLUB</Link>
        </button>
      </div>
    </section>
  );
}
