import { Screen } from "../ui"
import { experience } from "../data"

function Experience() {
  return (
    <Screen title="EXPERIENCE" icon="💼">
      <div className="flex flex-col gap-6">
        {experience.map((e, i) => (
          <article key={e.role + e.org} className="bs-panel overflow-hidden">
            <div className="flex flex-wrap items-center gap-4 px-5 py-4 bg-[#0b1020]/60 border-b-[3px] border-[#0b1020]">
              <span className="text-5xl">{e.emoji}</span>
              <div className="flex flex-col flex-1 min-w-[12rem]">
                <h2 className="bs-text text-2xl sm:text-3xl leading-tight">{e.role}</h2>
                <span className="text-lg text-[#6dff4d] leading-tight">{e.org}</span>
              </div>
              <div className="flex flex-col items-end">
                <span className="bs-text-sm text-lg">{e.date}</span>
                <span className="bs-body text-sm text-white/70">{e.location}</span>
                {i === 0 && (
                  <span className="mt-1 text-sm px-2 py-0.5 rounded bg-[#6dff4d] text-[#0b1020]">ACTIVE QUEST</span>
                )}
              </div>
            </div>
            <ul className="bs-body text-[0.95rem] leading-relaxed text-white/90 list-disc pl-10 pr-5 py-4 flex flex-col gap-2">
              {e.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Screen>
  )
}

export default Experience
