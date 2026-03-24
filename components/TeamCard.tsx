"use client";

import { useMemo, useState } from "react";
import TeamCard2D from "@/components/TeamCard2D";

type TeamMember = {
  name: string;
  role: string;
  imageSrc?: string;
};

const members: TeamMember[] = [
  { name: "John Doe", role: "Designer", imageSrc: "/placeholders/member-1.png" },
  { name: "Jane Smith", role: "Developer", imageSrc: "/placeholders/member-2.png" },
  { name: "Alice Johnson", role: "Manager", imageSrc: "/placeholders/member-3.png" },
  { name: "Bob Brown", role: "Analyst", imageSrc: "/placeholders/member-4.png" },
];

const CARD_W = 320;
const CARD_H = 420;

// put your card-back art here:
const CARD_BACK_SRC = "public/screen.png";

export default function TeamCardsView() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [anim, setAnim] = useState<"idle" | "toLeft">("idle");

  const leftCount = Math.min(activeIndex, 3);
  const rightCount = Math.min(members.length - activeIndex - 1, 3);

  const active = useMemo(() => members[activeIndex], [activeIndex]);

  const handleClick = () => {
    if (anim !== "idle") return;

    setAnim("toLeft");
    window.setTimeout(() => {
      setAnim("idle");
      setActiveIndex((i) => (i + 1) % members.length);
    }, 420);
  };

  return (
    <div className="grid items-center gap-10 md:grid-cols-3">
      {/* Left deck */}
      <div className="hidden md:flex justify-center">
        <CardStack side="left" count={leftCount} cardBackSrc={CARD_BACK_SRC} />
      </div>

      {/* Center active card */}
      <div className="flex justify-center">
        <div className="relative" style={{ width: CARD_W, height: CARD_H }}>
          <div
            className={[
              "absolute inset-0",
              "transition-transform ease-in-out",
              anim === "toLeft"
                ? "-translate-x-[140%] scale-[0.96]"
                : "translate-x-0 scale-100",
            ].join(" ")}
            style={{ transitionDuration: "420ms" }}
          >
            <TeamCard2D member={active} onClick={handleClick} />
          </div>
        </div>
      </div>

      {/* Right deck */}
      <div className="hidden md:flex justify-center">
        <CardStack side="right" count={rightCount} cardBackSrc={CARD_BACK_SRC} />
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
  count: number; // already capped to 3 by caller
  cardBackSrc: string;
}) {
  // depth: 0 is top card, 1.. are behind
  const depths = Array.from({ length: count }, (_, i) => i);

  return (
    <div className="relative" style={{ width: CARD_W, height: CARD_H }}>
      {depths
        .slice() // draw deepest first, top last
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
                {/* Only top card shows the decorative back image */}
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