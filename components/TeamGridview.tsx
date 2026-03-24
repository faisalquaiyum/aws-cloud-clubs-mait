"use client";

import { useMemo, useState } from "react";
import {
  teamMembers,
  teamCategories,
  IconInstagram,
  IconLinkedIn,
} from "@/components/teamdata";

export default function TeamGridView() {
  const [filter, setFilter] =
    useState<(typeof teamCategories)[number]>("All");

  const filtered = useMemo(() => {
    if (filter === "All") return teamMembers;
    return teamMembers.filter((m) => m.group === filter);
  }, [filter]);

  return (
    <div>
      <div className="flex flex-wrap items-center justify-center gap-3">
        {teamCategories.map((c) => (
          <button
            key={c}
            onClick={() => setFilter(c)}
            className={[
              "px-5 py-2.5 rounded-full text-sm font-bold font-headline transition-all duration-200 border",
              filter === c
                ? "bg-primary-container text-on-primary-container border-primary-container shadow-lg shadow-blue-900/10"
                : "bg-surface-container-lowest text-on-surface-variant border-surface-variant hover:text-primary hover:border-primary/40",
            ].join(" ")}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filtered.map((m) => (
          <article
            key={m.id}
            className="rounded-[24px] bg-surface-container-lowest border border-surface-variant shadow-lg shadow-blue-900/5 overflow-hidden hover:-translate-y-1 transition-transform"
          >
            <div className="h-44 bg-surface-container flex items-center justify-center overflow-hidden">
              {m.imageSrc ? (
                <img src={m.imageSrc} alt={m.name} className="h-full w-full object-cover" />
              ) : (
                <span className="material-symbols-outlined text-primary text-5xl">
                  person
                </span>
              )}
            </div>

            <div className="p-5">
              <h3 className="font-headline font-black text-lg text-on-primary-container">
                {m.name}
              </h3>
              <p className="text-sm text-primary font-semibold mt-1">{m.role}</p>

              <div className="mt-4 flex gap-3">
                {m.socials?.linkedin && (
                  <a
                    href={m.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="w-9 h-9 rounded-full border border-surface-variant bg-surface-container hover:bg-primary-container text-on-surface-variant hover:text-on-primary-container transition-colors flex items-center justify-center"
                  >
                    <IconLinkedIn />
                  </a>
                )}
                {m.socials?.instagram && (
                  <a
                    href={m.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="w-9 h-9 rounded-full border border-surface-variant bg-surface-container hover:bg-primary-container text-on-surface-variant hover:text-on-primary-container transition-colors flex items-center justify-center"
                  >
                    <IconInstagram />
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}