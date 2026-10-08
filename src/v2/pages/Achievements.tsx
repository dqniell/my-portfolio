import { Screen } from "../ui"
import { achievements } from "../data"

// A trophy road: an orange track with a gold node for each unlocked milestone
function Achievements() {
  return (
    <Screen title="TROPHY ROAD" icon="🏅">
      <ol className="relative max-w-3xl mx-auto flex flex-col gap-5 pl-20">
        <span className="absolute left-[2.1rem] top-4 bottom-4 w-3 rounded-full bg-gradient-to-b from-[#ffcb05] to-[#ff7a00] border-2 border-[#0b1020]" />

        {achievements.map((a) => (
          <li key={a.title} className="relative">
            <span className="absolute -left-[4.25rem] top-1/2 -translate-y-1/2 w-14 h-14 flex items-center justify-center drop-shadow-[0_0_8px_rgba(255,210,60,0.6)]">
              <svg viewBox="0 0 56 56" className="absolute inset-0 w-full h-full" aria-hidden>
                <defs>
                  <linearGradient id="road-gold" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor="#fff3a6" />
                    <stop offset="0.5" stopColor="#ffcb05" />
                    <stop offset="1" stopColor="#c48a00" />
                  </linearGradient>
                </defs>
                <polygon points="28,2 52,15 52,41 28,54 4,41 4,15" fill="url(#road-gold)" stroke="#0b1020" strokeWidth="3" strokeLinejoin="round" />
              </svg>
              <span className="relative text-2xl">{a.emoji}</span>
            </span>
            <div className="bs-panel px-5 py-4">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                <h2 className="bs-text-sm text-xl sm:text-2xl leading-tight">{a.title}</h2>
                <span className="text-base text-[#ffcb05]">{a.date}</span>
              </div>
              <p className="bs-body text-[0.95rem] leading-relaxed text-white/85 mt-1">{a.detail}</p>
              <span className="inline-block mt-2 text-xs px-2 py-0.5 rounded bg-[#6dff4d] text-[#0b1020]">UNLOCKED</span>
            </div>
          </li>
        ))}

        <li className="relative">
          <span className="absolute -left-[4.25rem] top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-[#1b2440] border-[3px] border-dashed border-white/50 flex items-center justify-center bs-text-sm text-2xl">
            🔒
          </span>
          <div className="bs-panel px-5 py-4 opacity-70">
            <h2 className="bs-text-sm text-xl sm:text-2xl">Next achievement</h2>
            <p className="bs-body text-[0.95rem] text-white/70 mt-1">Loading…</p>
          </div>
        </li>
      </ol>
    </Screen>
  )
}

export default Achievements
