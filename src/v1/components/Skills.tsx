import { useState } from "react"

const skillGroups = [
  {
    category: "Languages",
    skills: [
      { name: "Java",       version: "21.0.0", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
      { name: "Python",     version: "3.12.0", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "C++",        version: "17.0.0", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
      { name: "JavaScript", version: "ES2024",  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "TypeScript", version: "5.4.0",  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      { name: "SQL",        version: "2023",   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
      { name: "HTML5",      version: "5.0.0",  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS3",       version: "3.0.0",  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    ],
  },
  {
    category: "Frameworks & Technologies",
    skills: [
      { name: "React",        version: "19.0.0", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "React Native", version: "0.74.0", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Flask",        version: "3.0.0",  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" },
      { name: "Spring Boot",  version: "3.3.0",  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
      { name: "Node.js",      version: "22.0.0", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Express",      version: "4.19.0", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
    ],
  },
  {
    category: "Developer Tools",
    skills: [
      { name: "Git",     version: "2.45.0", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "VS Code", version: "1.90.0", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
      { name: "PyCharm", version: "2024.1", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pycharm/pycharm-original.svg" },
      { name: "IntelliJ",version: "2024.1", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg" },
      { name: "Jupyter", version: "7.2.0",  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg" },
      { name: "Figma",   version: "2024",   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
      { name: "Linux",   version: "6.9.0",  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
    ],
  },
  {
    category: "Libraries",
    skills: [
      { name: "pandas",      version: "2.2.0", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
      { name: "NumPy",       version: "1.26.0",icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
      { name: "Matplotlib",  version: "3.9.0", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg" },
      { name: "Scikit-Learn",version: "1.5.0", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg" },
    ],
  },
]

// All skills flattened for ticker
const allSkills = skillGroups.flatMap((g) => g.skills)

type View = "terminal" | "ticker" | "icons"

function Skills() {
  const [view, setView] = useState<View>("terminal")

  return (
    <div className="bg-white text-black px-8 py-16 flex flex-col items-center gap-10">

      {/* Section Header */}
      <div className="w-full max-w-4xl flex flex-col gap-4">
        <div className="font-mono text-lg flex items-center gap-3">
          <span className="text-blue-500">⬡</span>
          <span className="text-black">$</span>
          <span className="text-black font-bold">cat skills.json</span>
        </div>
        {/* View switcher tabs */}
        <div className="flex items-center gap-1 bg-zinc-100 rounded-lg p-1 font-mono text-xs w-fit">
          {(["terminal", "ticker", "icons"] as View[]).map((v) => (
            <button
              key={v}
              onClick={() => setView(v)}
              className={`px-3 py-1.5 rounded-md transition-colors ${
                view === v ? "bg-white shadow-sm text-black font-semibold" : "text-zinc-400 hover:text-black"
              }`}
            >
              {v === "terminal" ? "$ install" : v === "ticker" ? "▶ marquee" : "⊞ icons"}
            </button>
          ))}
        </div>
      </div>

      {/* ── TERMINAL VIEW ── */}
      {view === "terminal" && (
        <div className="w-full max-w-3xl bg-zinc-900 rounded-xl border border-zinc-700 shadow-xl overflow-hidden">
          {/* Window bar */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-zinc-700">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-400" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
            <span className="font-mono text-zinc-400 text-sm ml-2">skills.sh</span>
          </div>

          {/* Terminal body */}
          <div className="p-6 font-mono text-sm flex flex-col gap-6">
            {skillGroups.map((group) => (
              <div key={group.category}>
                {/* Category as a pip/npm install command */}
                <p className="text-zinc-500 mb-3">
                  <span className="text-green-400">daniel@portfolio</span>
                  <span className="text-white">:</span>
                  <span className="text-blue-400">~</span>
                  <span className="text-white">$ </span>
                  <span className="text-white">pip install </span>
                  <span className="text-cyan-300">{group.category.toLowerCase().replace(/\s+/g, "-")}</span>
                </p>

                {/* Each skill as an install line */}
                <div className="flex flex-col gap-1 pl-2">
                  {group.skills.map((skill, i) => (
                    <div key={skill.name} className="flex items-center gap-3">
                      <img src={skill.icon} alt={skill.name} className="w-4 h-4 object-contain shrink-0" loading="lazy" />
                      <span className="text-green-400">✓</span>
                      <span className="text-white">Successfully installed</span>
                      <span className="text-cyan-300">{skill.name}</span>
                      <span className="text-zinc-500">-{skill.version}</span>
                      {i === group.skills.length - 1 && (
                        <span className="ml-auto text-zinc-600 text-xs">[{group.skills.length} packages]</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* Final line */}
            <p className="text-green-400">
              ✓ All packages installed successfully.{" "}
              <span className="text-zinc-500">
                ({allSkills.length} skills total)
              </span>
            </p>
            <p className="flex items-center gap-1 text-white">
              <span className="text-green-400">daniel@portfolio</span>
              <span>:</span>
              <span className="text-blue-400">~</span>
              <span>$</span>
              <span className="w-2 h-4 bg-zinc-400 animate-pulse ml-1 inline-block" />
            </p>
          </div>
        </div>
      )}

      {/* ── TICKER VIEW ── */}
      {view === "ticker" && (
        <div className="w-full max-w-4xl flex flex-col gap-6 overflow-hidden">
          {skillGroups.map((group) => (
            <div key={group.category}>
              <p className="font-mono text-xs text-zinc-400 mb-3">▶ {group.category}</p>
              <div className="relative overflow-hidden">
                {/* Fade edges */}
                <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

                <div className="flex gap-4 animate-marquee whitespace-nowrap">
                  {/* Duplicate for seamless loop */}
                  {[...group.skills, ...group.skills].map((skill, i) => (
                    <div
                      key={`${skill.name}-${i}`}
                      className="inline-flex items-center gap-2 bg-white border border-zinc-200 rounded-full px-4 py-2 shadow-sm shrink-0"
                    >
                      <img src={skill.icon} alt={skill.name} className="w-5 h-5 object-contain" loading="lazy" />
                      <span className="font-mono text-sm text-black">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ── ICONS VIEW ── */}
      {view === "icons" && (
        <div className="flex flex-col gap-10 w-full max-w-4xl">
          {skillGroups.map((group) => (
            <div key={group.category}>
              <div className="flex items-center gap-3 mb-5">
                <span className="font-mono text-xs text-zinc-400">▶</span>
                <h3 className="font-semibold text-black">{group.category}</h3>
                <div className="flex-1 h-px bg-zinc-200" />
              </div>
              <div className="flex flex-wrap gap-4">
                {group.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="group relative flex flex-col items-center justify-center w-20 h-20 rounded-xl border border-zinc-200 bg-white shadow-sm hover:border-black hover:shadow-md transition-all duration-200 cursor-default"
                  >
                    <img src={skill.icon} alt={skill.name} className="w-10 h-10 object-contain" loading="lazy" />
                    <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs font-mono text-black bg-white border border-zinc-200 rounded px-2 py-0.5 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

    </div>
  )
}

export default Skills
