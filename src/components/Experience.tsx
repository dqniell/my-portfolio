const experiences = [
  {
    hash: "f3b2a17",
    branch: "HEAD → research",
    company: "University of Michigan, PROTEUS Project",
    role: "Undergraduate Research Assistant",
    date: "May 2026 – Present",
    description: [
      "Engineered an interactive data visualization tool to surface student interaction patterns across 4 STEM textbooks, enabling research mentors to identify engagement trends across thousands of student records.",
      "Built automated Python data pipelines to filter, clean, and process raw Runestone Academy interaction logs, eliminating manual preprocessing and accelerating research workflows.",
    ],
    tags: ["Python", "Data Visualization", "pandas", "NSF-Funded"],
    insertions: 241,
    deletions: 0,
    files: 6,
  },
  {
    hash: "e9a3c55",
    branch: "HEAD → leader",
    company: "Management Leadership for Tomorrow",
    role: "Career Prep Fellow",
    date: "Jan 2026 – Present",
    description: [
      "Accepted into a selective 18-month professional development program accelerating career growth through structured coaching and mentorship.",
      "Engage with partner organizations including LinkedIn, Bloomberg, and Deloitte for industry exposure and tech-talent pathways.",
    ],
    tags: ["Leadership", "Professional Development", "Mentorship"],
    insertions: 98,
    deletions: 0,
    files: 3,
  },
  {
    hash: "c7d1b83",
    branch: "HEAD → analyst",
    company: "Michigan Data Science Team",
    role: "Project Team Member",
    date: "Sep 2024 – Dec 2024",
    description: [
      "Analyzed the COMPAS recidivism risk algorithm using Python, applying logistic regression, survival analysis, and contingency tables to surface racial disparities in algorithmic risk scoring.",
      "Presented findings on the impact of juvenile misdemeanor history on COMPAS predictions at the Winter 2024 MDST Project Expo.",
    ],
    tags: ["Python", "pandas", "NumPy", "scikit-learn", "Logistic Regression"],
    insertions: 187,
    deletions: 12,
    files: 5,
  },
  {
    hash: "a4f2e91",
    branch: "HEAD → engineer",
    company: "Nexus Plumbing & Heating LLC",
    role: "Full-Stack Developer Intern",
    date: "Jun 2024 – Present",
    description: [
      "Streamlined client communication managing 200+ daily interactions with 100% on-time delivery of invoices, job confirmations, and estimates.",
      "Reduced invoice creation time by 75% by building a custom React-based invoice generator using JavaScript, HTML/CSS, and html2pdf.js.",
    ],
    tags: ["React", "JavaScript", "HTML/CSS", "html2pdf.js", "Node.js"],
    insertions: 312,
    deletions: 24,
    files: 8,
  },
]

function Experience() {
  return (
    <div className="bg-white text-black px-8 pt-0 pb-16 flex flex-col items-center gap-10">

      {/* Section Header — styled like a git command */}
      <div className="flex flex-col items-center gap-3 w-full max-w-3xl">
        <div className="self-start font-mono text-lg flex items-center gap-3">
          <span className="text-red-400">⎇</span>
          <span className="text-black">$</span>
          <span className="text-black font-bold">git log --stat --oneline</span>
        </div>
      </div>

      {/* Timeline */}
      <div className="flex flex-col items-center gap-0 w-full max-w-3xl">

        {/* Cards with vertical line — line only spans this container */}
        <div className="relative w-full">
          {/* Vertical line — stops at bottom of this div, not through the commit node */}
          <div className="absolute left-[calc(50%-1px)] top-0 bottom-0 w-px bg-zinc-300 hidden lg:block" />

          <div className="flex flex-col gap-12">
            {experiences.map((exp, i) => {
              const isLeft = i % 2 === 0

              return (
                <div key={exp.hash} className="relative flex flex-col lg:flex-row items-start gap-6">

                  {isLeft ? (
                    <>
                      <div className="flex-1 lg:pr-10">
                        <CommitCard exp={exp} />
                      </div>

                      {/* Center dot + date */}
                      <div className="hidden lg:flex flex-col items-center gap-2 pt-4 shrink-0">
                        <div className="w-4 h-4 rounded-full bg-black border-2 border-zinc-300 z-10 bg-white" />
                        <span className="font-mono text-xs text-zinc-500 whitespace-nowrap bg-white border border-zinc-300 rounded-full px-3 py-1">
                          📅 {exp.date}
                        </span>
                      </div>

                      <div className="flex-1 lg:pl-10 hidden lg:block" />
                    </>
                  ) : (
                    <>
                      <div className="flex-1 lg:pr-10 hidden lg:block" />

                      {/* Center dot + date */}
                      <div className="hidden lg:flex flex-col items-center gap-2 pt-4 shrink-0">
                        <div className="w-4 h-4 rounded-full bg-black border-2 border-zinc-300 z-10" />
                        <span className="font-mono text-xs text-zinc-500 whitespace-nowrap bg-white border border-zinc-300 rounded-full px-3 py-1">
                          📅 {exp.date}
                        </span>
                      </div>

                      <div className="flex-1 lg:pl-10">
                        <CommitCard exp={exp} />
                      </div>
                    </>
                  )}

                  {/* Mobile: date below card */}
                  <div className="lg:hidden font-mono text-xs text-zinc-500 border border-zinc-300 rounded-full px-3 py-1 self-start">
                    📅 {exp.date}
                  </div>

                </div>
              )
            })}
          </div>
        </div>

        {/* Connector from line end to node — a short centered line segment */}
        <div className="hidden lg:flex flex-col items-center gap-0">
          <div className="w-px h-6 bg-zinc-300" />
          {/* Initial commit node — outside the line container so line can't bleed through */}
          <div className="font-mono text-sm text-zinc-500 bg-white border border-zinc-300 rounded-full px-5 py-2 flex items-center gap-2">
            <span>⊸</span>
            <span>Initial Commit (Hello World)</span>
          </div>
        </div>

        {/* Mobile initial commit */}
        <div className="lg:hidden font-mono text-sm text-zinc-500 bg-white border border-zinc-300 rounded-full px-5 py-2 flex items-center gap-2 self-center">
          <span>⊸</span>
          <span>Initial Commit (Hello World)</span>
        </div>

      </div>
    </div>
  )
}

type Exp = typeof experiences[0]

function CommitCard({ exp }: { exp: Exp }) {
  return (
    <div className="bg-white border border-zinc-200 rounded-xl overflow-hidden hover:border-black transition-colors shadow-sm">

      {/* Commit header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-100 flex-wrap gap-2">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs text-yellow-500">{exp.hash}</span>
          <span className="font-mono text-xs bg-blue-50 text-blue-600 border border-blue-200 rounded px-2 py-0.5">
            {exp.branch}
          </span>
        </div>
        <span className="font-mono text-xs text-zinc-400">{exp.company}</span>
      </div>

      {/* Body */}
      <div className="p-5 flex flex-col gap-4">

        {/* Role */}
        <div>
          <span className="font-bold text-black text-base">{exp.role}</span>
          <span className="text-zinc-400 text-sm"> @ {exp.company}</span>
        </div>

        {/* Description */}
        <div className="border-l-2 border-zinc-300 pl-4 flex flex-col gap-2">
          {exp.description.map((line, i) => (
            <p key={i} className="text-zinc-500 text-sm leading-relaxed font-mono">
              {line}
            </p>
          ))}
        </div>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2">
          {exp.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-mono px-2 py-0.5 bg-zinc-100 border border-zinc-200 text-zinc-600 rounded"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Diff stats */}
        <div className="flex items-center gap-4 font-mono text-xs text-zinc-400 border-t border-zinc-100 pt-3">
          <span>📄 {exp.files} files changed</span>
          <span className="text-green-600">+{exp.insertions} insertions</span>
          {exp.deletions > 0 && (
            <span className="text-red-500">-{exp.deletions} deletions</span>
          )}
        </div>
      </div>
    </div>
  )
}

export default Experience
