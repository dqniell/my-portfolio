import { Screen } from "../ui"
import { skills } from "../data"

function Skills() {
  return (
    <Screen title="SKILLS" icon="⚡">
      <div className="grid gap-6 md:grid-cols-3">
        {skills.map((s) => (
          <section key={s.group} className="bs-panel overflow-hidden">
            <div className="px-5 py-3 border-b-[3px] border-[#0b1020]" style={{ background: s.color }}>
              <h2 className="bs-text text-3xl">{s.group.toUpperCase()}</h2>
              <span className="bs-text-sm text-sm">{s.subtitle}</span>
            </div>
            <ul className="p-4 flex flex-col gap-2">
              {s.items.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 px-3 py-2 rounded-lg bg-[#0b1020]/50 border-2 border-[#0b1020]"
                >
                  <span className="w-3 h-3 rotate-45 border-2 border-[#0b1020]" style={{ background: s.color }} />
                  <span className="bs-text-sm text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </Screen>
  )
}

export default Skills
