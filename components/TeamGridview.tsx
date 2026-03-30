"use client";

import { useMemo, useState } from "react";
import {
  teamMembers,
  teamCategories,
  IconInstagram,
  IconLinkedIn,
} from "@/components/teamdata";

export default function TeamGridView() {
  const [filter, setFilter] = useState<(typeof teamCategories)[number]>("All");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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
            onClick={() => m.imageSrc && setSelectedImage(m.imageSrc)}
            className="rounded-[24px] bg-surface-container-lowest border border-surface-variant shadow-lg shadow-blue-900/5 overflow-hidden hover:-translate-y-1 transition-transform cursor-pointer group"
          >
            {/* Thumbnail: Yahan 'object-contain' use kiya hai taaki grid mein bhi poori photo dikhe */}
            <div className="h-56 bg-surface-container flex items-center justify-center overflow-hidden p-2">
              {m.imageSrc ? (
                <img 
                  src={m.imageSrc} 
                  alt={m.name} 
                  className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105" 
                />
              ) : (
                <span className="material-symbols-outlined text-primary text-5xl">person</span>
              )}
            </div>

            <div className="p-5">
              <h3 className="font-headline font-black text-lg text-on-primary-container">{m.name}</h3>
              <p className="text-sm text-primary font-semibold mt-1">{m.role}</p>
              
              <div className="mt-4 flex gap-3">
                {m.socials?.linkedin && (
                  <a href={m.socials.linkedin} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="w-9 h-9 rounded-full border border-surface-variant bg-surface-container hover:bg-primary-container flex items-center justify-center transition-colors">
                    <IconLinkedIn />
                  </a>
                )}
                {m.socials?.instagram && (
                  <a href={m.socials.instagram} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="w-9 h-9 rounded-full border border-surface-variant bg-surface-container hover:bg-primary-container flex items-center justify-center transition-colors">
                    <IconInstagram />
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>

      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 sm:p-8"
          onClick={() => setSelectedImage(null)}
        >
          <button className="absolute top-5 right-5 text-white/50 hover:text-white transition-colors z-[110]">
            <span className="material-symbols-outlined text-4xl">close</span>
          </button>

          <div className="relative w-full h-full flex items-center justify-center">
            <img 
              src={selectedImage} 
              alt="Full Preview" 
              className="max-w-full max-h-full w-auto h-auto object-contain shadow-2xl animate-in zoom-in-95 duration-300"
              onClick={(e) => e.stopPropagation()} 
            />
          </div>
        </div>
      )}
    </div>
  );
}