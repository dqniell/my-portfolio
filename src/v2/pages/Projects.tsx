import { Screen, Chip, LinkButton } from "../ui"
import { projects, rarityColors } from "../data"

// Projects shown as brawler cards, with rarity standing in for how proud I am of them
function Projects() {
  return (
    <Screen title="PROJECTS" icon="🎮">
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p) => {
          const color = rarityColors[p.rarity]
          return (
            <article key={p.title} className="bs-panel overflow-hidden flex flex-col">
              <div
                className="flex items-center gap-4 px-5 py-4 border-b-[3px] border-[#0b1020]"
                style={{ background: `linear-gradient(135deg, ${color}, ${color}99)` }}
              >
                <span className="text-5xl drop-shadow-[0_3px_0_rgba(0,0,0,0.5)]">{p.emoji}</span>
                <div className="flex flex-col">
                  <span className="bs-text-sm text-xs tracking-widest">{p.rarity}</span>
                  <h2 className="bs-text text-3xl leading-tight">{p.title}</h2>
                  <span className="bs-text-sm text-sm">
                    {p.date}
                    {p.note && ` · ${p.note}`}
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-4 p-5 flex-1">
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <Chip key={t}>{t}</Chip>
                  ))}
                </div>
                <ul className="bs-body text-[0.95rem] leading-relaxed text-white/90 list-disc pl-5 flex flex-col gap-2 flex-1">
                  {p.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
                {(p.github || p.demo) && (
                  <div className="flex gap-3 pt-1">
                    {p.github && <LinkButton href={p.github}>GITHUB</LinkButton>}
                    {p.demo && <LinkButton href={p.demo} yellow>PLAY DEMO</LinkButton>}
                  </div>
                )}
              </div>
            </article>
          )
        })}
      </div>
    </Screen>
  )
}

export default Projects
