import { useEffect, useState, type ReactNode } from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import clsx from "clsx"

// Side menu button: icon pops out above the top edge, outlined label below (SHOP / BRAWLERS / NEWS)
export function MenuButton({
  to,
  icon,
  label,
  badge,
  tag,
  yellow,
  external,
  compact,
}: {
  to: string
  icon: string
  label: string
  badge?: string | number
  tag?: string
  yellow?: boolean
  external?: boolean
  compact?: boolean
}) {
  const className = clsx(
    "bs-btn relative flex flex-col items-center justify-end pb-1.5 mt-4",
    compact ? "w-[6.5rem] h-14" : "w-32 h-16",
    yellow && "bs-btn-yellow",
  )
  const content = (
    <>
      <span className="absolute -top-4 text-[2.5rem] leading-none drop-shadow-[0_3px_0_rgba(0,0,0,0.7)]">{icon}</span>
      <span className={clsx("bs-text-sm leading-none", compact ? "text-base" : "text-lg")}>{label}</span>
      {badge !== undefined && (
        <span className="absolute -top-4 -right-3 w-8 h-8 rounded-full bg-[#ff2d2d] border-[3px] border-[#0b1020] flex items-center justify-center bs-text-sm text-sm">
          {badge}
        </span>
      )}
      {tag && (
        <span className="absolute -top-3 -right-6 px-2 py-0.5 bg-[#2ecc40] border-[3px] border-[#0b1020] -skew-x-12 bs-text-sm text-xs">
          {tag}
        </span>
      )}
    </>
  )
  return external ? (
    <a href={to} target="_blank" rel="noreferrer" className={className}>
      {content}
    </a>
  ) : (
    <Link to={to} className={className}>
      {content}
    </Link>
  )
}

// Shows public/v2/brawler.png if it exists, otherwise a placeholder silhouette.
// The height goes on the image itself (not a % of a flex parent) so Safari
// sizes the box to the image width and everything stays centered on it.
export function Brawler({ heightClass, height }: { heightClass?: string; height?: number }) {
  const [missing, setMissing] = useState(false)

  return (
    <div className="relative flex flex-col items-center">
      <div className="absolute bottom-0 w-[150%] max-w-[28rem] h-14 rounded-[50%] bg-[radial-gradient(ellipse_at_center,rgba(255,170,235,0.5),rgba(200,140,255,0.12)_60%,transparent_72%)]" />
      <div className="bs-idle relative z-10">
        {missing ? (
          <PlaceholderBrawler className={heightClass} height={height} />
        ) : (
          <img
            src="/v2/brawler.png"
            alt="Daniel's brawler"
            className={clsx("block w-auto max-w-none drop-shadow-[0_8px_0_rgba(0,0,0,0.25)]", heightClass)}
            style={height ? { height } : undefined}
            onError={() => setMissing(true)}
          />
        )}
      </div>
      <div className="bs-idle-shadow relative -mt-4 mb-2 w-40 h-7 rounded-[50%] bg-[#0d0726]" />
    </div>
  )
}

function PlaceholderBrawler({ className, height }: { className?: string; height?: number }) {
  return (
    <svg viewBox="0 0 200 300" className={clsx("w-auto", className)} style={height ? { height } : undefined} aria-label="Brawler placeholder">
      <g fill="#0b3d75" fillOpacity="0.55" stroke="#ffffff" strokeOpacity="0.7" strokeWidth="4" strokeDasharray="10 8">
        <circle cx="100" cy="70" r="52" />
        <path d="M52 140 Q100 118 148 140 L160 215 Q100 230 40 215 Z" />
        <path d="M62 215 L58 285 L92 285 L96 222 Z" />
        <path d="M138 215 L142 285 L108 285 L104 222 Z" />
        <path d="M52 145 L22 205 L44 214 L66 168 Z" />
        <path d="M148 145 L178 205 L156 214 L134 168 Z" />
      </g>
      <text x="100" y="88" textAnchor="middle" fontSize="54" fill="#fff" fontFamily="Lilita One, sans-serif">?</text>
      <text x="100" y="185" textAnchor="middle" fontSize="15" fill="#fff" fontFamily="Lilita One, sans-serif">
        BRAWLER
      </text>
      <text x="100" y="203" textAnchor="middle" fontSize="15" fill="#fff" fontFamily="Lilita One, sans-serif">
        COMING SOON
      </text>
    </svg>
  )
}

// Full-page wrapper for the sub-screens: back button, title bar, content
// Sub-pages are sized in rem, so raising the root font size on big windows
// scales all their content up together. Base design is ~1280x800 at 16px.
function useScaledRootFont() {
  useEffect(() => {
    const root = document.documentElement
    const update = () => {
      const s = Math.min(window.innerWidth / 1280, window.innerHeight / 800)
      root.style.fontSize = `${Math.round(16 * Math.min(1.6, Math.max(1, s)) * 10) / 10}px`
    }
    update()
    window.addEventListener("resize", update)
    return () => {
      window.removeEventListener("resize", update)
      root.style.fontSize = ""
    }
  }, [])
}

export function Screen({ title, icon, children }: { title: string; icon: string; children: ReactNode }) {
  useScaledRootFont()

  return (
    <div className="bs-root bs-bg min-h-[100dvh] px-4 sm:px-8 pb-12">
      <header className="sticky top-0 z-20 flex items-center gap-4 py-4">
        <Link to=".." relative="path" className="bs-btn flex items-center justify-center w-14 h-12 shrink-0" aria-label="Back to menu">
          <span className="bs-text-sm text-2xl">◀</span>
        </Link>
        <h1 className="bs-text text-3xl sm:text-5xl flex items-center gap-3">
          <span className="text-3xl sm:text-4xl">{icon}</span>
          {title}
        </h1>
      </header>
      <motion.main
        initial={{ opacity: 0, y: 24, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 24 }}
        className="max-w-6xl mx-auto mt-4"
      >
        {children}
      </motion.main>
    </div>
  )
}

export function Chip({ children, color = "#1b2440" }: { children: ReactNode; color?: string }) {
  return (
    <span
      className="bs-text-sm text-sm px-3 py-1 rounded-lg border-2 border-[#0b1020]"
      style={{ background: color }}
    >
      {children}
    </span>
  )
}

export function LinkButton({ href, children, yellow }: { href: string; children: ReactNode; yellow?: boolean }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={clsx("bs-btn inline-flex items-center gap-2 px-4 py-2", yellow && "bs-btn-yellow")}
    >
      <span className={yellow ? "text-[#1a1a1a] text-lg" : "bs-text-sm text-lg"}>{children}</span>
    </a>
  )
}
