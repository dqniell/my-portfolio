const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Blog", href: "#blog" },
]

function scrollTo(id: string) {
  document.getElementById(id.replace("#", ""))?.scrollIntoView({ behavior: "smooth" })
}

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 bg-white border-b border-zinc-200">

      {/* Logo */}
      <button
        onClick={() => scrollTo("#home")}
        className="font-mono font-bold text-black text-lg hover:text-zinc-600 transition-colors"
      >
        &gt; daniel.dev
      </button>

      {/* Links */}
      <div className="flex items-center gap-6">
        {links.map((link) => (
          <button
            key={link.href}
            onClick={() => scrollTo(link.href)}
            className="text-sm font-medium text-zinc-400 hover:text-black transition-colors"
          >
            {link.label}
          </button>
        ))}
      </div>

    </nav>
  )
}

export default Navbar
