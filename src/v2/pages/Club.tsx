import { Screen } from "../ui"
import { clubs } from "../data"

function Club() {
  return (
    <Screen title="CLUB" icon="🛡️">
      <div className="grid gap-6 md:grid-cols-2">
        {clubs.map((c) => (
          <article key={c.name} className="bs-panel p-6 flex flex-col gap-3">
            <div className="flex items-center gap-4">
              <span className="w-16 h-16 shrink-0 rounded-xl bg-gradient-to-b from-[#ff4d4d] to-[#b30000] border-[3px] border-[#0b1020] flex items-center justify-center text-4xl">
                {c.emoji}
              </span>
              <div className="flex flex-col">
                <h2 className="bs-text text-2xl leading-tight">{c.name}</h2>
                <span className="text-lg text-[#6dff4d]">{c.role}</span>
              </div>
            </div>
            <span className="bs-text-sm">{c.date}</span>
            <p className="bs-body text-[0.95rem] leading-relaxed text-white/90">{c.description}</p>
          </article>
        ))}
      </div>
    </Screen>
  )
}

export default Club
