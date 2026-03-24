"use client";

import { facultyMembers, IconLinkedIn } from "@/components/teamdata";

export default function FacultySection() {
  return (
    <section className="mx-auto max-w-7xl px-6 pt-6 pb-12">
      <h2 className="text-2xl md:text-3xl font-black font-headline text-on-primary-container text-center mb-8">
        Faculty Coordinators
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {facultyMembers.map((f) => (
          <article
            key={f.id}
            className="
              rounded-[24px]
              bg-surface-container-lowest
              border border-surface-variant
              shadow-lg shadow-blue-900/5
              p-6
              transition-transform duration-200
              hover:-translate-y-1
            "
          >
            <div className="flex flex-col items-center text-center gap-4">
              <div className="h-28 w-28 rounded-full overflow-hidden border border-surface-variant bg-surface-container flex items-center justify-center">
                {f.imageSrc ? (
                  <img
                    src={f.imageSrc}
                    alt={f.name}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <span className="material-symbols-outlined text-primary text-5xl">
                    person
                  </span>
                )}
              </div>

              <div>
                <h3 className="font-headline font-black text-lg text-on-primary-container">
                  {f.name}
                </h3>
                <p className="mt-1 text-xs font-extrabold tracking-[0.25em] text-primary uppercase">
                  {f.roleLabel ?? "FACULTY"}
                </p>
              </div>

              <p className="text-sm text-on-surface-variant leading-relaxed">
                {f.desc}
              </p>

              {f.socials?.linkedin && (
                <a
                  href={f.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="
                    mt-2 w-10 h-10
                    rounded-full
                    border border-surface-variant
                    bg-surface-container
                    hover:bg-primary-container
                    text-on-surface-variant
                    hover:text-on-primary-container
                    transition-colors
                    flex items-center justify-center
                  "
                >
                  <IconLinkedIn />
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}