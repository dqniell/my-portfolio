import { projects } from "../data/projects"

const allRepos = [
  { name: "TrainSense",        lang: "Python",     visibility: "Public" },
  { name: "Spotlight",         lang: "TypeScript",  visibility: "Public" },
  { name: "Invoice-Generator", lang: "JavaScript", visibility: "Public" },
  { name: "NBALetterbox",      lang: "TypeScript",  visibility: "Public" },
  { name: "COMPAS-Analysis",   lang: "Python",     visibility: "Public" },
  { name: "portfolio",         lang: "TypeScript",  visibility: "Public" },
  { name: "ds-homework",       lang: "Python",     visibility: "Private" },
  { name: "leetcode",          lang: "Java",       visibility: "Private" },
]

const langColors: Record<string, string> = {
  Python:     "bg-blue-500",
  TypeScript: "bg-blue-400",
  JavaScript: "bg-yellow-400",
  Java:       "bg-orange-500",
}

function Projects() {
  return (
    <div className="bg-white text-black px-8 py-16 flex flex-col items-center gap-10">

      {/* Section Header — styled like a terminal command */}
      <div className="w-full max-w-5xl">
        <div className="font-mono text-lg flex items-center gap-3">
          <span className="text-yellow-500">📁</span>
          <span className="text-black">$</span>
          <span className="text-black font-bold">ls -la ~/projects</span>
        </div>
      </div>

      {/* Main layout: sidebar + pinned grid */}
      <div className="flex flex-col lg:flex-row gap-6 w-full max-w-5xl">

        {/* Left sidebar — repository list */}
        <div className="w-full lg:w-56 shrink-0 bg-white border border-zinc-200 rounded-xl overflow-hidden shadow-sm">
          <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-100">
            <span className="font-mono text-xs font-semibold text-black flex items-center gap-2">
              <span>📋</span> Repositories
            </span>
            <span className="font-mono text-xs text-zinc-400">{allRepos.length}</span>
          </div>
          <div className="flex flex-col divide-y divide-zinc-100">
            {allRepos.map((repo) => (
              <div key={repo.name} className="px-4 py-2.5 hover:bg-zinc-50 transition-colors cursor-default">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-blue-600 truncate">{repo.name}</span>
                  <span className="font-mono text-xs text-zinc-400 ml-2 shrink-0">{repo.visibility}</span>
                </div>
                <div className="flex items-center gap-1.5 mt-1">
                  <span className={`w-2 h-2 rounded-full ${langColors[repo.lang] ?? "bg-zinc-400"}`} />
                  <span className="font-mono text-xs text-zinc-400">{repo.lang}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — pinned projects */}
        <div className="flex-1 flex flex-col gap-4">
          <p className="font-mono text-xs text-zinc-400 uppercase tracking-widest">Pinned Projects</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-white border border-zinc-200 rounded-xl p-5 flex flex-col gap-3 hover:border-black transition-colors shadow-sm group"
              >
                {/* Card top row */}
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="text-zinc-400 text-sm">📋</span>
                    <h3 className="font-mono font-semibold text-blue-600 text-sm group-hover:underline">
                      {project.title}
                    </h3>
                  </div>
                  <span className="font-mono text-xs border border-zinc-300 text-zinc-500 rounded-full px-2 py-0.5 shrink-0">
                    Public
                  </span>
                </div>

                {/* Description */}
                <p className="text-zinc-500 text-xs leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono px-2 py-0.5 bg-zinc-100 border border-zinc-200 text-zinc-600 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Bottom row: lang dot + github link */}
                <div className="flex items-center justify-between mt-auto pt-2 border-t border-zinc-100">
                  <div className="flex items-center gap-1.5">
                    <span className={`w-2.5 h-2.5 rounded-full ${langColors[project.tags[0]] ?? "bg-zinc-400"}`} />
                    <span className="font-mono text-xs text-zinc-400">{project.tags[0]}</span>
                  </div>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs text-zinc-400 hover:text-black transition-colors flex items-center gap-1"
                  >
                    View ↗
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* View all link */}
          <div className="flex justify-center pt-2">
            <a
              href="https://github.com/dqniell"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-sm text-zinc-500 hover:text-black transition-colors flex items-center gap-2"
            >
              View all repositories <span>›</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Projects
