export default function Navbar() {
  return (
    <header className="fixed top-0 w-full z-50 flex justify-between items-center px-6 py-4 max-w-7xl mx-auto left-1/2 -translate-x-1/2 glass-nav backdrop-blur-md shadow-xl shadow-blue-900/5 rounded-b-[2rem]">
      <div className="flex items-center gap-3">
        <img
          className="h-10 w-auto mix-blend-multiply"
          alt="AWS Cloud Clubs MAIT Logo"
          src="/logo/aws-cloud-clubs-logo.jpeg"
        />
        <span className="text-2xl font-black text-on-primary-container font-headline tracking-tight">
          AWSCC MAIT
        </span>
      </div>
      <nav className="hidden md:flex items-center gap-8">
        <a className="relative text-primary font-headline font-bold pb-1 after:absolute after:bottom-0 after:left-0 after:h-1 after:w-full after:bg-primary" href="#">
          About
        </a>
        <a className="relative text-on-surface-variant hover:text-primary font-headline font-bold pb-1 transition-colors after:absolute after:bottom-0 after:left-0 after:h-1 after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full" href="#">
          Events
        </a>
        <a className="relative text-on-surface-variant hover:text-primary font-headline font-bold pb-1 transition-colors after:absolute after:bottom-0 after:left-0 after:h-1 after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full" href="#">
          Team
        </a>
        <a className="relative text-on-surface-variant hover:text-primary font-headline font-bold pb-1 transition-colors after:absolute after:bottom-0 after:left-0 after:h-1 after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full" href="#">
          Community
        </a>
      </nav>
      <button className="bg-primary text-on-primary px-8 py-3 rounded-full font-headline font-bold hover:scale-105 active:scale-95 transition-all duration-200 pixel-hard-shadow border-2 border-on-primary-fixed">
        Join Us
      </button>
    </header>
  );
}
