export default function Modules() {
  return (
    <section className="py-24 bg-surface-container-low">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-headline font-extrabold mb-4">EXPAND YOUR ARSENAL</h2>
            <p className="text-lg text-on-surface-variant">
              The tools, the community, and the knowledge you need to master the AWS infrastructure.
            </p>
          </div>
          <div className="flex gap-4">
            <button className="w-12 h-12 rounded-full border-2 border-outline-variant flex items-center justify-center hover:bg-primary-container hover:text-white transition-all">
              <span className="material-symbols-outlined">arrow_back</span>
            </button>
            <button className="w-12 h-12 rounded-full border-2 border-outline-variant flex items-center justify-center hover:bg-primary-container hover:text-white transition-all">
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-surface-container-lowest p-8 rounded-[2rem] shadow-sm hover:shadow-xl transition-shadow group relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary-container/10 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
            <div className="mb-8 w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center">
              <span className="material-symbols-outlined text-4xl text-primary">groups</span>
            </div>
            <h3 className="text-2xl font-headline font-bold mb-4">Student Community Day</h3>
            <p className="text-on-surface-variant leading-relaxed mb-6">
              Connect with fellow cloud enthusiasts and industry leaders in our massive annual gathering.
            </p>
            <a className="inline-flex items-center text-primary font-bold gap-2 group-hover:gap-4 transition-all" href="#">
              Learn More <span className="material-symbols-outlined">trending_flat</span>
            </a>
          </div>
          {/* Card 2 */}
          <div className="bg-surface-container-lowest p-8 rounded-[2rem] shadow-sm hover:shadow-xl transition-shadow group relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-secondary-container/10 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
            <div className="mb-8 w-20 h-20 bg-sky-100 rounded-2xl flex items-center justify-center">
              <span className="material-symbols-outlined text-4xl text-secondary">school</span>
            </div>
            <h3 className="text-2xl font-headline font-bold mb-4">Cloud Workshops</h3>
            <p className="text-on-surface-variant leading-relaxed mb-6">
              Hands-on sessions where we dive deep into S3, EC2, and the vast AWS ecosystem.
            </p>
            <a className="inline-flex items-center text-primary font-bold gap-2 group-hover:gap-4 transition-all" href="#">
              See Curriculum <span className="material-symbols-outlined">trending_flat</span>
            </a>
          </div>
          {/* Card 3 */}
          <div className="bg-surface-container-lowest p-8 rounded-[2rem] shadow-sm hover:shadow-xl transition-shadow group relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-tertiary-container/10 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
            <div className="mb-8 w-20 h-20 bg-yellow-50 rounded-2xl flex items-center justify-center">
              <span className="material-symbols-outlined text-4xl text-tertiary">podcasts</span>
            </div>
            <h3 className="text-2xl font-headline font-bold mb-4">Tech Talks</h3>
            <p className="text-on-surface-variant leading-relaxed mb-6">
              Insightful conversations with architects building the next generation of web apps.
            </p>
            <a className="inline-flex items-center text-primary font-bold gap-2 group-hover:gap-4 transition-all" href="#">
              Watch Sessions <span className="material-symbols-outlined">trending_flat</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
