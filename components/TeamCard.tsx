"use client";

import { useMemo, useState } from "react";
import TeamCard2D from "@/components/TeamCard2D";
import { teamMembers } from "@/components/teamdata";

const CARD_W = 320;
const CARD_H = 420;

// Put your back image in: public/team/screen2.png (or change this)
const CARD_BACK_SRC = "/screen2.png";

type Anim = "idle" | "toLeft" | "toRight";

export default function TeamCard() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [anim, setAnim] = useState<Anim>("idle");

  const active = useMemo(() => teamMembers[activeIndex], [activeIndex]);

  const leftRemaining = activeIndex; // how many are behind us on the left
  const rightRemaining = teamMembers.length - activeIndex - 1;

  const leftCount = Math.min(leftRemaining, 3);
  const rightCount = Math.min(rightRemaining, 3);

  const goNext = () => {
    if (anim !== "idle") return;
    setAnim("toLeft");

    window.setTimeout(() => {
      setAnim("idle");
      setActiveIndex((i) => (i + 1) % teamMembers.length);
    }, 420);
  };

  const goPrev = () => {
    if (anim !== "idle") return;
    setAnim("toRight");

    window.setTimeout(() => {
      setAnim("idle");
      setActiveIndex((i) => (i - 1 + teamMembers.length) % teamMembers.length);
    }, 420);
  };

  return (
    <div className="grid items-center gap-10 md:grid-cols-3">
      {/* Left deck (click to go previous) */}
      <div className="hidden md:flex justify-center">
        <button
          type="button"
          onClick={goPrev}
          disabled={anim !== "idle"}
          className="relative"
          aria-label="Previous member"
        >
          <CardStack side="left" count={leftCount} cardBackSrc={CARD_BACK_SRC} />
          {/* optional hint */}
          {leftRemaining > 0 && (
            <span className="pointer-events-none absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs font-bold text-on-surface-variant">
              Prev
            </span>
          )}
        </button>
      </div>

      {/* Center card */}
      <div className="flex justify-center">
        <div className="relative" style={{ width: CARD_W, height: CARD_H }}>
          <div
            className={[
              "absolute inset-0",
              "transition-transform ease-in-out",
              anim === "toLeft"
                ? "-translate-x-[140%] scale-[0.96]"
                : anim === "toRight"
                  ? "translate-x-[140%] scale-[0.96]"
                  : "translate-x-0 scale-100",
            ].join(" ")}
            style={{ transitionDuration: "420ms" }}
          >
            {/* Click on the card = next (you can change to open modal etc.) */}
            <TeamCard2D member={active} />
          </div>

          {/* Mobile controls (since side decks hidden on small screens) */}
          <div className="mt-4 flex items-center justify-between md:hidden">
            <button
              type="button"
              onClick={goPrev}
              disabled={anim !== "idle"}
              className="px-5 py-2 rounded-full border border-surface-variant bg-surface-container-lowest font-headline font-bold text-on-surface-variant hover:text-primary transition-colors"
            >
              Prev
            </button>
            <button
              type="button"
              onClick={goNext}
              disabled={anim !== "idle"}
              className="px-5 py-2 rounded-full border border-surface-variant bg-surface-container-lowest font-headline font-bold text-on-surface-variant hover:text-primary transition-colors"
            >
              Next
            </button>
          </div>
        </div>
      </div>

      {/* Right deck (click to go next) */}
      <div className="hidden md:flex justify-center">
        <button
          type="button"
          onClick={goNext}
          disabled={anim !== "idle"}
          className="relative"
          aria-label="Next member"
        >
          <CardStack side="right" count={rightCount} cardBackSrc={CARD_BACK_SRC} />
          {/* optional hint */}
          {rightRemaining > 0 && (
            <span className="pointer-events-none absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs font-bold text-on-surface-variant">
              Next
            </span>
          )}
        </button>
      </div>
    </div>
  );
}

function CardStack({
  side,
  count,
  cardBackSrc,
}: {
  side: "left" | "right";
  count: number; // capped to 3 by caller
  cardBackSrc: string;
}) {
  const depths = Array.from({ length: count }, (_, i) => i);

  return (
    <div className="relative" style={{ width: CARD_W, height: CARD_H }}>
      {depths
        .slice()
        .reverse()
        .map((depth) => {
          const offsetX = (side === "left" ? -12 : 12) * depth;
          const offsetY = 10 * depth;
          const isTop = depth === 0;

          return (
            <div
              key={`${side}-${depth}`}
              className="absolute inset-0 pointer-events-none"
              style={{
                transform: `translate(${offsetX}px, ${offsetY}px)`,
                opacity: 1 - depth * 0.12,
              }}
            >
              <div className="h-full w-full rounded-[28px] bg-surface-container-lowest border border-surface-variant shadow-lg overflow-hidden">
                {isTop ? (
                  <img
                    src={cardBackSrc}
                    alt="Card back"
                    className="h-full w-full object-cover"
                    draggable={false}
                  />
                ) : null}
              </div>
            </div>
          );
        })}
    </div>
  );
}