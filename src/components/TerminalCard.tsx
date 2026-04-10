interface TerminalCardProps {
  name: string
  role: string
}

function TerminalCard({ name, role }: TerminalCardProps) {
  return (
    <div className="bg-zinc-800 rounded-xl border border-zinc-700 w-full max-w-lg">
      
      {/* Terminal Top Bar */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-zinc-700">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
        <span className="text-zinc-400 text-sm ml-2">portfolio.tsx</span>
      </div>

      {/* Terminal Body */}
      <div className="p-6 font-mono text-sm">
        <p className="text-zinc-500">// Welcome to my workspace</p>
        <p className="text-white mt-2">
          <span className="text-purple-400">const</span>{" "}
          <span className="text-blue-400">name</span>{" "}
          = <span className="text-orange-400">"{name}"</span>;
        </p>
        <p className="text-white mt-1">
          <span className="text-purple-400">const</span>{" "}
          <span className="text-blue-400">role</span>{" "}
          = <span className="text-orange-400">"{role}"</span>;
        </p>
      </div>

    </div>
  )
}

export default TerminalCard