"use client";

import { useMemo, useState } from "react";

type Member = {
  id: number;
  name: string;
  role: string;
  img?: string;
  group?: string;
  socials?: { linkedin?: string; instagram?: string };
};

const sampleTeam: Member[] = [
  { id: 1, name: "Pari Goel", role: "PR", group: "PR" },
  { id: 2, name: "Md Faisal Quaiyum", role: "Technical", group: "Technical" },
  { id: 3, name: "Sukriti Chauhan", role: "Social Media", group: "Social Media" },
  { id: 4, name: "Gaurang Dhall", role: "Event Management", group: "Event Management" },
];

const categories = [
  "All",
  "Technical",
  "PR",
  "Content",
  "Event Management",
  "Social Media",
] as const;

export default function TeamGridView() {
  const [filter, setFilter] = useState<(typeof categories)[number]>("All");

  const filtered = useMemo(() => {
    if (filter === "All") return sampleTeam;
    return sampleTeam.filter((m) => m.group === filter);
  }, [filter]);

  return (
    <div>
      {/* Filter pills */}
      <div className="flex flex-wrap items-center justify-center gap-3">
        {categories.map((c) => (
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

      {/* Grid */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filtered.map((m) => (
          <article
            key={m.id}
            className="rounded-[24px] bg-surface-container-lowest border border-surface-variant shadow-lg shadow-blue-900/5 overflow-hidden hover:-translate-y-1 transition-transform"
          >
            <div className="h-44 bg-surface-container flex items-center justify-center">
              <span className="material-symbols-outlined text-primary text-5xl">
                person
              </span>
            </div>
            <div className="p-5">
              <h3 className="font-headline font-black text-lg text-on-primary-container">
                {m.name}
              </h3>
              <p className="text-sm text-primary font-semibold mt-1">{m.role}</p>
              <p className="text-xs text-on-surface-variant mt-3">{m.group}</p>
            </div>
          </article>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-16">
          <p className="text-on-surface-variant text-lg">
            No team members found in this category.
          </p>
        </div>
      )}
    </div>
  );
}