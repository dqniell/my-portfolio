// Halloween menu scenery, drawn in SVG: glowing doorway behind the brawler,
// pumpkins and tombstones in the corners, bats, a ghost and low fog.

function Pumpkin({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 100" className={className} aria-hidden>
      <defs>
        <radialGradient id="pk-glow">
          <stop offset="0" stopColor="#ffe08a" />
          <stop offset="1" stopColor="#ff7a1a" />
        </radialGradient>
      </defs>
      <path d="M57 20 q0-14 12-17 l3 6 q-8 3-8 11z" fill="#2b1d3d" />
      <ellipse cx="36" cy="60" rx="30" ry="36" fill="#4b2f80" stroke="#1a1040" strokeWidth="3" />
      <ellipse cx="84" cy="60" rx="30" ry="36" fill="#4b2f80" stroke="#1a1040" strokeWidth="3" />
      <ellipse cx="60" cy="60" rx="28" ry="39" fill="#5e3d9e" stroke="#1a1040" strokeWidth="3" />
      <path d="M33 50 l13-14 l7 18z" fill="url(#pk-glow)" />
      <path d="M87 50 l-13-14 l-7 18z" fill="url(#pk-glow)" />
      <path d="M28 66 q32 30 64 0 l-9 3 -6-6 -8 8 -8-8 -8 8 -8-8 -6 6z" fill="url(#pk-glow)" />
    </svg>
  )
}

function Tombstone({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 100" className={className} aria-hidden>
      <path d="M8 100 V42 a32 32 0 0 1 64 0 V100z" fill="#2e2468" stroke="#140c38" strokeWidth="4" />
      <path d="M36 28h8v12h10v8h-10v24h-8v-24h-10v-8h10z" fill="#140c38" opacity="0.6" />
    </svg>
  )
}

function Bat({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 16" className={className} aria-hidden>
      <path
        d="M0 8 q5-8 11-2 q2-6 5-6 q2 3 4 3 q2 0 4-3 q3 0 5 6 q6-6 11 2 q-7-2-9 5 q-4-4-7 0 q-2-3-4-3 q-2 0-4 3 q-3-4-7 0 q-2-7-9-5z"
        fill="#140c38"
      />
    </svg>
  )
}

// Scenery for the scaled menu stage, positioned in stage pixels
export function HalloweenScene({ portrait }: { portrait?: boolean }) {
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden>
      {portrait ? (
        <>
          <Tombstone className="absolute bottom-[350px] left-[8px] w-10 opacity-90" />
          <Pumpkin className="absolute bottom-[338px] left-[38px] w-14 drop-shadow-[0_0_20px_rgba(255,140,40,0.45)]" />
          <Tombstone className="absolute bottom-[352px] right-[10px] w-9 opacity-90" />
          <Pumpkin className="absolute bottom-[338px] right-[36px] w-12 drop-shadow-[0_0_20px_rgba(255,140,40,0.45)]" />
          <Bat className="bs-float absolute top-[118px] left-[60px] w-10 opacity-80" />
          <Bat className="bs-float absolute top-[150px] right-[70px] w-8 opacity-70 [animation-delay:-1.2s]" />
        </>
      ) : (
        <>
          <Tombstone className="absolute bottom-[170px] left-[11%] w-24 opacity-90" />
          <Pumpkin className="absolute bottom-[150px] left-[17%] w-32 drop-shadow-[0_0_24px_rgba(255,140,40,0.45)]" />
          <Tombstone className="absolute bottom-[200px] right-[18%] w-20 opacity-90" />
          <Pumpkin className="absolute bottom-[180px] right-[11%] w-28 drop-shadow-[0_0_24px_rgba(255,140,40,0.45)]" />
          <Bat className="bs-float absolute top-[120px] left-[30%] w-14 opacity-80" />
          <Bat className="bs-float absolute top-[70px] left-[62%] w-10 opacity-70 [animation-delay:-1.2s]" />
          <Bat className="bs-float absolute top-[190px] right-[24%] w-12 opacity-60 [animation-delay:-2.1s]" />
          <span className="bs-idle absolute top-[170px] right-[22%] text-7xl opacity-90 drop-shadow-[0_0_20px_rgba(220,200,255,0.6)]">
            👻
          </span>
        </>
      )}
    </div>
  )
}

// Floor glow and fog, laid over the whole window so there is no edge at the stage border
export function HalloweenAtmosphere() {
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden>
      <div className="absolute inset-x-0 bottom-0 h-[45%] bg-[radial-gradient(ellipse_at_50%_100%,rgba(122,80,210,0.55),transparent_70%)]" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#c9b8ff]/25 to-transparent" />
    </div>
  )
}

// Glowing coffin-shaped doorway that frames the brawler
export function Doorway({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 300 420" preserveAspectRatio="xMidYMax meet" className={className} aria-hidden>
      <defs>
        <radialGradient id="door-halo" cx="0.5" cy="0.45" r="0.5">
          <stop offset="0" stopColor="#ff9be6" stopOpacity="0.55" />
          <stop offset="1" stopColor="#ff9be6" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="door-light" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffe3f6" />
          <stop offset="0.45" stopColor="#e894dc" />
          <stop offset="1" stopColor="#7c4bc0" stopOpacity="0.35" />
        </linearGradient>
      </defs>
      <ellipse cx="150" cy="200" rx="150" ry="220" fill="url(#door-halo)" />
      <path d="M88 8 H212 L284 108 V420 H16 V108 Z" fill="#3a2c78" stroke="#140c38" strokeWidth="6" />
      <path d="M104 36 H196 L252 118 V420 H48 V118 Z" fill="url(#door-light)" />
    </svg>
  )
}
