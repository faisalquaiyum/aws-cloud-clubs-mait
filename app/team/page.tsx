"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TeamCardsView from "@/components/TeamCard";
import TeamGridView from "@/components/TeamGridview";

export default function TeamPage() {
  const [view, setView] = useState<"cards" | "grid">("cards");

  return (
    <>
      <Navbar />
      <main className="pt-24">
        <section className="mx-auto max-w-7xl px-6 py-16">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h1 className="font-headline text-4xl font-black text-on-primary-container">
                Meet the Team
              </h1>
              <p className="mt-3 max-w-2xl text-on-surface-variant">
                Switch between the interactive card deck and the full team grid.
              </p>
            </div>

            {/* Switch */}
            <div className="inline-flex rounded-full border border-surface-variant bg-surface-container-lowest p-1 shadow-sm">
              <button
                type="button"
                onClick={() => setView("cards")}
                className={[
                  "px-5 py-2 text-sm font-bold font-headline rounded-full transition-colors",
                  view === "cards"
                    ? "bg-primary-container text-on-primary-container"
                    : "text-on-surface-variant hover:text-primary",
                ].join(" ")}
              >
                Cards
              </button>
              <button
                type="button"
                onClick={() => setView("grid")}
                className={[
                  "px-5 py-2 text-sm font-bold font-headline rounded-full transition-colors",
                  view === "grid"
                    ? "bg-primary-container text-on-primary-container"
                    : "text-on-surface-variant hover:text-primary",
                ].join(" ")}
              >
                Grid
              </button>
            </div>
          </div>

          <div className="mt-10">
            {view === "cards" ? <TeamCardsView /> : <TeamGridView />}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}