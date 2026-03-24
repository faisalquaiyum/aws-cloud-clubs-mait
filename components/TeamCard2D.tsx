export type TeamMember = {
  name: string;
  role: string;
  imageSrc?: string;
};

export default function TeamCard2D({
  member,
  onClick,
}: {
  member: TeamMember;
  onClick?: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="
        group w-[280px] sm:w-[320px] h-[420px]
        rounded-[28px]
        bg-surface-container-lowest
        border border-surface-variant
        shadow-xl shadow-blue-900/10
        px-8 py-10
        text-left
        transition-transform duration-200
        hover:-translate-y-1
        active:translate-y-0
        focus:outline-none focus-visible:ring-4 focus-visible:ring-primary-container/60
      "
      aria-label={`View ${member.name}`}
    >
      <div className="flex flex-col items-center text-center h-full">
        <div
          className="
            h-28 w-28 rounded-full
            bg-surface-container
            border border-surface-variant
            overflow-hidden
            flex items-center justify-center
          "
        >
          {member.imageSrc ? (
            <img
              src={member.imageSrc}
              alt={member.name}
              className="h-full w-full object-cover"
            />
          ) : (
            <span className="material-symbols-outlined text-primary text-5xl">
              person
            </span>
          )}
        </div>

        <p className="mt-8 font-headline text-sm font-extrabold tracking-[0.25em] text-primary-container">
          AWS CLOUD CLUBS
        </p>

        <h3 className="mt-3 font-headline text-2xl font-black text-on-primary-container">
          {member.name}
        </h3>

        <p className="mt-2 text-sm font-semibold text-primary">{member.role}</p>

        <div className="mt-auto pt-8 text-xs font-bold text-on-surface-variant">
          Click to cycle →
        </div>
      </div>
    </button>
  );
}