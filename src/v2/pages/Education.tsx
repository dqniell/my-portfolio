import { Screen, Chip } from "../ui"
import { education } from "../data"

function Education() {
  return (
    <Screen title="EDUCATION" icon="🎓">
      <article className="bs-panel overflow-hidden">
        <div className="flex flex-wrap items-center gap-5 px-6 py-6 bg-gradient-to-r from-[#00274c] to-[#1b3a6b] border-b-[3px] border-[#0b1020]">
          <span className="w-24 h-20 flex items-center justify-center drop-shadow-[0_3px_0_rgba(0,0,0,0.5)]">
            <img src="/v2/umich-block-m.svg" alt="University of Michigan block M" className="w-full h-full object-contain" />
          </span>
          <div className="flex flex-col flex-1 min-w-[12rem]">
            <h2 className="bs-text text-3xl sm:text-4xl leading-tight">{education.school}</h2>
            <span className="text-lg text-[#ffcb05]">{education.degree}</span>
          </div>
          <div className="flex flex-col items-end">
            <span className="bs-text-sm text-lg">{education.date}</span>
            <span className="bs-body text-sm text-white/70">{education.location}</span>
          </div>
        </div>
        <div className="p-6 flex flex-col gap-4">
          <h3 className="bs-text-sm text-2xl">UNLOCKED COURSES</h3>
          <div className="flex flex-wrap gap-3">
            {education.coursework.map((c) => (
              <Chip key={c.name} color={c.inProgress ? "#ff7a00" : "#1b2440"}>
                {c.inProgress ? "⏳ " : "✅ "}
                {c.name}
                {c.inProgress && " (in progress)"}
              </Chip>
            ))}
          </div>
        </div>
      </article>
    </Screen>
  )
}

export default Education
