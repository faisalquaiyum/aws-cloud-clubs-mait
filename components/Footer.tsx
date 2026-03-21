export default function Footer() {
  return (
    <footer className="w-full bg-surface-container-low rounded-t-[3rem] mt-20">
      <div className="w-full py-12 px-8 flex flex-col md:flex-row justify-between items-center gap-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-4">
          <img
            className="h-8 w-auto opacity-80 mix-blend-multiply"
            alt="AWS Cloud Clubs MAIT Logo Small"
            src="/logo/aws-cloud-clubs-logo.jpeg"
          />
          <span className="text-lg font-bold text-on-surface font-headline">AWS Cloud Clubs MAIT</span>
        </div>
        <div className="flex gap-8 font-body text-sm">
          <a className="text-on-surface-variant hover:text-primary transition-colors" href="#">
            Twitter
          </a>
          <a className="text-on-surface-variant hover:text-primary transition-colors" href="#">
            LinkedIn
          </a>
          <a className="text-on-surface-variant hover:text-primary transition-colors" href="#">
            GitHub
          </a>
          <a className="text-on-surface-variant hover:text-primary transition-colors" href="#">
            Discord
          </a>
        </div>
        <div className="text-on-surface-variant font-body text-sm">
          © 2024 AWS Cloud Clubs MAIT. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
