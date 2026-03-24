"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { name: "About", href: "/" },
  { name: "Events", href: "/events" },
  { name: "Team", href: "/team" }, // Using valid placeholders for other pages
  { name: "Community", href: "/community" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 w-full z-50 flex justify-between items-center px-6 py-4 max-w-7xl mx-auto left-1/2 -translate-x-1/2 glass-nav backdrop-blur-md shadow-xl shadow-blue-900/5 rounded-b-[2rem]">
      <div className="flex items-center gap-3">
        <Link href="/" className="flex items-center gap-3">
          <img
            className="h-10 w-auto mix-blend-multiply"
            alt="AWS Cloud Clubs MAIT Logo"
            src="/logo/aws-cloud-clubs-logo.jpeg"
          />
          <span className="text-2xl font-black text-on-primary-container font-headline tracking-tight">
            AWSCC MAIT
          </span>
        </Link>
      </div>

      <nav className="hidden md:flex items-center gap-8">
        {NAV_LINKS.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.name}
              className={`relative font-headline font-bold pb-1 transition-colors after:absolute after:bottom-0 after:left-0 after:h-1 after:bg-primary after:transition-all after:duration-300 hover:text-primary ${
                isActive
                  ? "text-primary after:w-full"
                  : "text-on-surface-variant after:w-0 hover:after:w-full"
              }`}
              href={link.href}
            >
              {link.name}
            </Link>
          );
        })}
      </nav>

      <button className="bg-primary text-on-primary px-8 py-3 rounded-full font-headline font-bold hover:scale-105 active:scale-95 transition-all duration-200 pixel-hard-shadow border-2 border-on-primary-fixed">
        Join Us
      </button>
    </header>
  );
}