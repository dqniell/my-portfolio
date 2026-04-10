import { useState } from "react"

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
}

function Hero() {
  const [booted, setBooted] = useState(false)

  return (
    <div className="min-h-screen bg-white text-black flex flex-col lg:flex-row items-center justify-center gap-16 px-8">

      {/* Left Side — Text */}
      <div className="flex flex-col gap-4 max-w-lg">

        <span className="text-black font-mono text-sm border border-zinc-300 w-fit px-3 py-1 rounded-full">
          ● SYSTEM.KERNEL :: v1.0.0 ONLINE
        </span>

        <h1 className="text-6xl font-bold text-black">
          Hello, I'm
        </h1>

        <h2 className="text-6xl font-bold text-black">
          Daniel Lee
        </h2>

        <p className="text-zinc-500 text-lg leading-relaxed">
          Data Science Student at UMich &amp; Aspiring Software Engineer
        </p>

        {/* Buttons */}
        <div className="flex gap-4 mt-2">
          <button
            onClick={() => { setBooted(true); scrollTo("about") }}
            className="flex items-center gap-2 px-6 py-3 bg-black hover:bg-zinc-800 text-white font-semibold rounded-lg transition-colors"
          >
            {booted ? "✓ Booted" : "▶ Initialize"}
          </button>

          <button
            onClick={() => scrollTo("projects")}
            className="flex items-center gap-2 px-6 py-3 border border-zinc-300 hover:border-black text-black font-semibold rounded-lg transition-colors"
          >
            View Projects
          </button>
        </div>

        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-2 mt-4">
          {["React", "TypeScript", "Python", "Java", "Flask", "Node.js"].map((tech) => (
            <span
              key={tech}
              className="text-xs font-mono px-3 py-1 border border-zinc-300 text-zinc-500 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

      </div>

      {/* Right Side — Terminal Card */}
      <div className="bg-zinc-900 rounded-xl border border-zinc-700 w-full max-w-md shadow-xl">

        {/* Top Bar */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-zinc-700">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
          <span className="text-zinc-400 text-sm ml-2 font-mono">portfolio.tsx</span>
        </div>

        {/* Code Body — no orange, using cyan for strings */}
        <div className="p-6 font-mono text-sm flex flex-col gap-1">
          <p className="text-zinc-500">// Welcome to my workspace</p>
          <p>
            <span className="text-purple-400">import</span>{" "}
            <span className="text-white">{"{ Developer }"}</span>{" "}
            <span className="text-purple-400">from</span>{" "}
            <span className="text-cyan-300">'./UMich'</span>;
          </p>
          <p className="mt-2">
            <span className="text-purple-400">const</span>{" "}
            <span className="text-sky-300">Portfolio</span>{" "}
            <span className="text-white">= () =&gt;</span>{" "}
            <span className="text-white">{"{"}</span>
          </p>
          <p className="ml-4">
            <span className="text-purple-400">return</span>{" "}
            <span className="text-white">(</span>
          </p>
          <p className="ml-8">
            <span className="text-white">&lt;</span>
            <span className="text-green-400">Developer</span>
          </p>
          <p className="ml-10">
            <span className="text-sky-300">name</span>
            <span className="text-white">=</span>
            <span className="text-cyan-300">"Daniel Lee"</span>
          </p>
          <p className="ml-10">
            <span className="text-sky-300">role</span>
            <span className="text-white">=</span>
            <span className="text-cyan-300">"Data Science @ UMich"</span>
          </p>
          <p className="ml-10">
            <span className="text-sky-300">passion</span>
            <span className="text-white">=</span>
            <span className="text-cyan-300">"Building Cool Things"</span>
          </p>
          <p className="ml-8 text-white">/&gt;</p>
          <p className="ml-4 text-white">)</p>
          <p className="text-white">{"}"}</p>
        </div>

        {/* Bottom Buttons */}
        <div className="flex gap-3 px-6 pb-6">
          <button
            onClick={() => { setBooted(true); scrollTo("about") }}
            className="px-4 py-2 bg-white hover:bg-zinc-200 text-black text-sm font-mono rounded-lg transition-colors"
          >
            {booted ? "✓ Running" : "▶ Run Profile"}
          </button>
          <button
            onClick={() => scrollTo("projects")}
            className="px-4 py-2 border border-zinc-600 hover:border-zinc-400 text-zinc-300 text-sm font-mono rounded-lg transition-colors"
          >
            ⊡ View Projects
          </button>
        </div>

      </div>
    </div>
  )
}

export default Hero
