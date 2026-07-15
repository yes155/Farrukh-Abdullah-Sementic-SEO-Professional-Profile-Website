import { EXPERTISE_TAGS } from "../data";

export default function Marquee() {
  // Duplicate the list to ensure infinite continuous flow without visual gaps
  const doubledTags = [...EXPERTISE_TAGS, ...EXPERTISE_TAGS, ...EXPERTISE_TAGS];

  return (
    <div className="w-full bg-black border-y border-neutral-900 py-3 md:py-4 overflow-hidden relative select-none">
      {/* Side Vignettes for Fade Effect */}
      <div className="absolute top-0 left-0 w-16 md:w-32 h-full bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 right-0 w-16 md:w-32 h-full bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

      {/* Ticker Flex */}
      <div className="flex w-max animate-marquee">
        {doubledTags.map((tag, idx) => (
          <div
            key={`${tag}-${idx}`}
            className="flex items-center gap-4 px-6 text-xs md:text-sm font-mono tracking-widest text-neutral-300 uppercase whitespace-nowrap font-semibold"
          >
            <span>{tag}</span>
            <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full inline-block" />
          </div>
        ))}
      </div>
    </div>
  );
}
