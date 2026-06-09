function About() {
  return (
    <div className="bg-white text-black px-8 pt-16 pb-16 flex flex-col items-center gap-12">

      {/* Section Header */}
      <div className="w-full max-w-3xl">
        <div className="font-mono text-lg flex items-center gap-3">
          <span className="text-green-500">❯</span>
          <span className="text-black">$</span>
          <span className="text-black font-bold">whoami</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row gap-12 w-full max-w-4xl">

        {/* Left — Terminal Bio (keeps classic dark terminal styling) */}
        <div className="flex flex-col gap-6 flex-1">
          <div className="bg-zinc-900 rounded-xl border border-zinc-700 shadow-xl flex flex-col gap-4">

            {/* Terminal Header */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-zinc-700">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="text-zinc-400 text-sm font-mono ml-2">about.ts</span>
            </div>

            {/* Bio Text */}
            <div className="font-mono text-sm flex flex-col gap-3 p-6">
              <p>
                <span className="text-purple-400">const</span>{" "}
                <span className="text-sky-300">name</span>{" "}
                <span className="text-white">=</span>{" "}
                <span className="text-cyan-300">"Daniel Lee"</span>
                <span className="text-white">;</span>
              </p>
              <p>
                <span className="text-purple-400">const</span>{" "}
                <span className="text-sky-300">school</span>{" "}
                <span className="text-white">=</span>{" "}
                <span className="text-cyan-300">"University of Michigan"</span>
                <span className="text-white">;</span>
              </p>
              <p>
                <span className="text-purple-400">const</span>{" "}
                <span className="text-sky-300">degree</span>{" "}
                <span className="text-white">=</span>{" "}
                <span className="text-cyan-300">"B.S. Computer Science"</span>
                <span className="text-white">;</span>
              </p>
              <p>
                <span className="text-purple-400">const</span>{" "}
                <span className="text-sky-300">minor</span>{" "}
                <span className="text-white">=</span>{" "}
                <span className="text-cyan-300">"Mathematics"</span>
                <span className="text-white">;</span>
              </p>
              <p>
                <span className="text-purple-400">const</span>{" "}
                <span className="text-sky-300">gradYear</span>{" "}
                <span className="text-white">=</span>{" "}
                <span className="text-green-400">2028</span>
                <span className="text-white">;</span>
              </p>
              <p>
                <span className="text-purple-400">const</span>{" "}
                <span className="text-sky-300">interests</span>{" "}
                <span className="text-white">= [</span>
              </p>
              <p className="ml-4 text-cyan-300">"Web Development",</p>
              <p className="ml-4 text-cyan-300">"Backend Engineering",</p>
              <p className="ml-4 text-cyan-300">"Computer Science",</p>
              <p className="ml-4 text-cyan-300">"Building things that solve real problems",</p>
              <p className="text-white">];</p>
            </div>
          </div>
        </div>

        {/* Right — Info Cards (white theme) */}
        <div className="flex flex-col gap-4 flex-1">

          {/* Bio Card */}
          <div className="bg-white border border-zinc-200 rounded-xl p-6 flex flex-col gap-3 hover:border-black transition-colors shadow-sm">
            <span className="text-black font-mono text-xs">▶ bio</span>
            <p className="text-zinc-600 text-sm leading-relaxed">
              Hey! I'm a Computer Science student at UMich passionate about building things.
              I love turning ideas into real projects — from web apps to mobile apps.
            </p>
          </div>

{/* Fun Facts Card */}
          <div className="bg-white border border-zinc-200 rounded-xl p-6 flex flex-col gap-3 hover:border-black transition-colors shadow-sm">
            <span className="text-black font-mono text-xs">▶ fun_facts</span>
            <ul className="text-zinc-600 text-sm flex flex-col gap-2">
              <li className="flex items-center gap-2">
                <span className="text-zinc-400">*</span> I drink too much coffee
              </li>
              <li className="flex items-center gap-2">
                <span className="text-zinc-400">*</span> I love playing basketball
              </li>
              <li className="flex items-center gap-2">
                <span className="text-zinc-400">*</span> I always get pineapple on my pizza
              </li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  )
}

export default About
