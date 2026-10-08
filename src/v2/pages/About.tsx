import { Screen, Brawler, Chip } from "../ui"
import { about, profile, projects } from "../data"
import { useGithubCommits } from "../useGithubCommits"

// Styled like the in-game player profile: brawler + name tag on the left, stat tiles on the right
function About() {
  const commits = useGithubCommits(profile.githubUser)

  const stats = [
    { icon: "🏆", label: "GitHub commits", value: commits.toLocaleString(), color: "#ffd91a" },
    { icon: "🪙", label: "Projects shipped", value: projects.length, color: "#fff" },
    { icon: "💎", label: "Hackathons", value: 1, color: "#6de4ff" },
    { icon: "⚡", label: "Main", value: profile.main, color: "#ff7ae0" },
    { icon: "🎓", label: "School", value: "UMich", color: "#ffcb05" },
    { icon: "📅", label: "Graduating", value: "2028", color: "#6dff4d" },
  ]

  return (
    <Screen title="PLAYER PROFILE" icon="🙋">
      <div className="grid gap-6 lg:grid-cols-[22rem_1fr]">
        {/* Brawler + name tag */}
        <section className="bs-panel flex flex-col items-center gap-3 px-6 pt-6 pb-5">
          <Brawler heightClass="h-72" />
          <h2 className="bs-text text-4xl">{profile.name.toUpperCase()}</h2>
          <span className="bs-chip px-4 py-1">
            <span className="block text-lg text-[#7584a3]">{about.tag}</span>
          </span>
          <span className="bs-body text-sm text-white/70 text-center">
            B.S. Computer Science, Minor in Mathematics
          </span>
        </section>

        <div className="flex flex-col gap-6">
          {/* Stat tiles */}
          <section className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {stats.map((s) => (
              <div key={s.label} className="bs-panel flex items-center gap-3 px-4 py-3">
                <span className="text-3xl">{s.icon}</span>
                <div className="flex flex-col min-w-0">
                  <span className="bs-text text-2xl leading-none" style={{ color: s.color }}>
                    {s.value}
                  </span>
                  <span className="bs-body text-xs text-white/70 truncate">{s.label}</span>
                </div>
              </div>
            ))}
          </section>

          {/* Bio as a speech bubble */}
          <section className="relative bg-white text-[#0b1020] rounded-2xl border-[3px] border-[#0b1020] px-6 py-5 shadow-[0_5px_0_#0b1020]">
            <h3 className="text-2xl">ABOUT ME</h3>
            <p className="bs-body text-base leading-relaxed mt-2">{about.bio}</p>
          </section>

          <div className="grid gap-6 md:grid-cols-2">
            <section className="bs-panel p-5 flex flex-col gap-3">
              <h3 className="bs-text-sm text-2xl">FAVORITE MODES</h3>
              <div className="flex flex-wrap gap-2">
                {about.interests.map((i) => (
                  <Chip key={i} color="#3a4f9e">
                    {i}
                  </Chip>
                ))}
              </div>
            </section>

            <section className="bs-panel p-5 flex flex-col gap-3">
              <h3 className="bs-text-sm text-2xl">FUN FACTS</h3>
              <ul className="flex flex-col gap-2">
                {about.funFacts.map((f) => (
                  <li
                    key={f.text}
                    className="flex items-center gap-3 px-3 py-2 rounded-lg bg-[#0b1020]/50 border-2 border-[#0b1020]"
                  >
                    <span className="text-2xl">{f.emoji}</span>
                    <span className="bs-body text-[0.95rem] text-white/90">{f.text}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </div>
    </Screen>
  )
}

export default About
