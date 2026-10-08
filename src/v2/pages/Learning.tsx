import { Screen } from "../ui"
import { learning } from "../data"

// Styled like the in-game news feed: what I'm leveling up right now
function Learning() {
  return (
    <Screen title="NOW LEARNING" icon="📚">
      <p className="bs-text-sm text-lg max-w-4xl mx-auto mb-4">What I'm leveling up right now</p>
      <div className="max-w-4xl mx-auto grid gap-5 md:grid-cols-2">
        {learning.map((l) => (
          <article key={l.title} className="bs-panel overflow-hidden flex flex-col">
            <div className="flex items-center gap-4 px-5 py-4 bg-gradient-to-r from-[#1b4fd6] to-[#3a2c78] border-b-[3px] border-[#0b1020]">
              <span className="text-5xl drop-shadow-[0_3px_0_rgba(0,0,0,0.5)]">{l.emoji}</span>
              <div className="flex flex-col">
                <h2 className="bs-text text-2xl leading-tight">{l.title}</h2>
                <span className="self-start mt-1 text-xs px-2 py-0.5 rounded bg-[#2ecc40] border-2 border-[#0b1020] bs-text-sm">
                  {l.status.toUpperCase()}
                </span>
              </div>
            </div>
            <p className="bs-body text-[0.95rem] leading-relaxed text-white/90 px-5 py-4">{l.detail}</p>
          </article>
        ))}
      </div>
    </Screen>
  )
}

export default Learning
