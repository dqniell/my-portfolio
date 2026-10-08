import { useEffect, useState, type ReactNode } from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { Brawler, MenuButton } from "../ui"
import { profile, projects, rarityColors } from "../data"
import { useGithubCommits } from "../useGithubCommits"
import { HalloweenScene, HalloweenAtmosphere, Doorway } from "../Halloween"

// The menu is laid out once in fixed "stage" pixels and scaled to fit the
// window, like a game UI. Landscape stages are 900px tall and stretch between
// these widths; anything narrower than PORTRAIT_BELOW aspect uses the portrait stage.
const LANDSCAPE = { h: 900, minW: 1320, maxW: 2000 }
const PORTRAIT = { w: 450, minH: 860, maxH: 1000 }
const PORTRAIT_BELOW = 1.1

function useWindowSize() {
  const [size, setSize] = useState({ w: window.innerWidth, h: window.innerHeight })
  useEffect(() => {
    const onResize = () => setSize({ w: window.innerWidth, h: window.innerHeight })
    window.addEventListener("resize", onResize)
    return () => window.removeEventListener("resize", onResize)
  }, [])
  return size
}

function degreeProgress() {
  const start = new Date(profile.degreeStart).getTime()
  const end = new Date(profile.degreeEnd).getTime()
  return Math.min(1, Math.max(0, (Date.now() - start) / (end - start)))
}

function classYear() {
  const years = Math.floor((Date.now() - new Date(profile.degreeStart).getTime()) / (365.25 * 24 * 3600 * 1000))
  return Math.min(4, years + 1)
}

/* ───────────── Pieces shared by both layouts ───────────── */

function ProfileCard() {
  return (
    <Link to="about" title="Player profile" className="bs-btn relative flex flex-col items-center px-3 pt-2 pb-1">
      <span className="absolute -top-1 -left-4 w-9 h-10 flex items-center justify-center bg-gradient-to-b from-[#4d7dff] to-[#1b3fc4] border-[3px] border-[#0b1020] [clip-path:polygon(50%_0,100%_18%,100%_70%,50%_100%,0_70%,0_18%)] bs-text-sm text-lg">
        {classYear()}
      </span>
      <img
        src={`https://github.com/${profile.githubUser}.png`}
        alt=""
        className="w-14 h-12 rounded-md border-[3px] border-[#0b1020] bg-[#1e90ff] object-cover"
      />
      <span className="bs-text-sm text-lg leading-tight">{profile.name.split(" ")[0].toLowerCase()}</span>
    </Link>
  )
}

function TrophyCard() {
  const commits = useGithubCommits(profile.githubUser)
  const progress = degreeProgress()
  return (
    <a
      href={profile.github}
      target="_blank"
      rel="noreferrer"
      className="bs-btn flex items-center gap-3 px-3 py-2 w-60"
      title="Public GitHub commits"
    >
      <span className="w-12 h-12 shrink-0 rounded-full bg-gradient-to-b from-[#7dd3a0] to-[#2b8a57] border-[3px] border-[#0b1020] flex items-center justify-center text-2xl">
        🐙
      </span>
      <div className="flex flex-col gap-1 flex-1">
        <div className="flex items-center gap-1">
          <span className="text-2xl">🏆</span>
          <span className="bs-text text-3xl leading-none" style={{ color: "#ffd91a" }}>
            {commits.toLocaleString()}
          </span>
          <span className="bs-body text-[11px] text-white/70 ml-1 leading-tight">
            GitHub
            <br />
            commits
          </span>
        </div>
        <div className="relative h-4 rounded-sm bg-[#202739] overflow-hidden border-2 border-[#000]">
          <div className="bs-two-tone h-full bg-[#ff9d1a]" style={{ width: `${progress * 100}%` }} />
          <span className="absolute inset-0 flex items-center justify-center bs-text-sm text-[11px]">
            CLASS OF 2028 · {Math.round(progress * 100)}%
          </span>
        </div>
      </div>
    </a>
  )
}

function Currencies() {
  return (
    <div className="flex items-center gap-6 pl-4">
      <span className="bs-chip relative flex items-center h-9 w-24 pl-8 pr-3" title="Projects shipped">
        <span className="absolute -left-4 text-3xl">🪙</span>
        <span className="bs-text-sm text-2xl ml-auto">{projects.length}</span>
      </span>
      <span className="bs-chip relative flex items-center h-9 w-24 pl-8 pr-3" title="Hackathons">
        <span className="absolute -left-4 text-3xl">💎</span>
        <span className="bs-text-sm text-2xl ml-auto">1</span>
      </span>
    </div>
  )
}

function MainMenu() {
  const [open, setOpen] = useState(false)
  return (
    <div className="relative">
      <button
        onClick={() => setOpen((o) => !o)}
        className="bs-btn w-16 h-12 flex flex-col items-center justify-center gap-1"
        aria-label="Menu"
        aria-expanded={open}
      >
        <span className="block w-8 h-1 bg-white rounded" />
        <span className="block w-8 h-1 bg-white rounded" />
        <span className="block w-8 h-1 bg-white rounded" />
      </button>
      {open && (
        <div className="bs-panel absolute right-0 top-14 z-30 flex flex-col p-2 w-56">
          <a href="/" className="bs-text-sm text-lg px-3 py-2 rounded hover:bg-white/10">🕹️ Classic site (v1)</a>
          <a href={profile.github} target="_blank" rel="noreferrer" className="bs-text-sm text-lg px-3 py-2 rounded hover:bg-white/10">🐙 GitHub</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="bs-text-sm text-lg px-3 py-2 rounded hover:bg-white/10">💼 LinkedIn</a>
        </div>
      )}
    </div>
  )
}

const leftButtons = (compact?: boolean) => (
  <>
    <MenuButton to="projects" icon="🎮" label="PROJECTS" badge={projects.length} yellow compact={compact} />
    <MenuButton to="skills" icon="⚡" label="SKILLS" tag="NEW" compact={compact} />
    <MenuButton to="education" icon="🎓" label="EDUCATION" compact={compact} />
  </>
)

const rightButtons = (compact?: boolean) => (
  <>
    <MenuButton to="about" icon="🙋" label="ABOUT ME" compact={compact} />
    <MenuButton to="contact" icon="💬" label="CONTACT" compact={compact} />
    <MenuButton to="club" icon="🛡️" label="CLUB" compact={compact} />
  </>
)

function RankBadge() {
  return (
    <div className="flex items-center whitespace-nowrap">
      {/* Gold hexagon drawn as SVG so the outline follows every edge */}
      <div className="relative z-10 w-14 h-14 flex items-center justify-center drop-shadow-[0_0_6px_rgba(255,210,60,0.6)]">
        <svg viewBox="0 0 56 56" className="absolute inset-0 w-full h-full" aria-hidden>
          <defs>
            <linearGradient id="rank-gold" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#fff3a6" />
              <stop offset="0.5" stopColor="#ffcb05" />
              <stop offset="1" stopColor="#c48a00" />
            </linearGradient>
          </defs>
          <polygon
            points="28,2 52,15 52,41 28,54 4,41 4,15"
            fill="url(#rank-gold)"
            stroke="#0b1020"
            strokeWidth="3"
            strokeLinejoin="round"
          />
        </svg>
        <span className="relative text-2xl">🎓</span>
      </div>
      <div className="bs-two-tone -ml-2 flex items-center h-10 pl-4 pr-5 bg-[#610035] border-y-[3px] border-r-[3px] border-[#0b1020]">
        <span className="relative bs-text-sm text-lg">CS @ UMICH</span>
      </div>
      <div
        title={`Main language: ${profile.main}`}
        className="-ml-1 relative z-10 w-14 h-14 rounded-full flex items-center justify-center bg-gradient-to-b from-[#3a4566] to-[#1b2440] border-[3px] border-[#0b1020]"
      >
        <img src={profile.mainIcon} alt={profile.main} className="w-9 h-9 drop-shadow-[0_2px_0_rgba(0,0,0,0.5)]" />
      </div>
    </div>
  )
}

// Translucent "+" team slot beside the brawler, like the invite-a-friend slots in game
function TeamSlot({ className }: { className?: string }) {
  return (
    <Link
      to="contact"
      title="Recruit me to your team"
      className={`absolute flex items-center justify-center w-20 h-20 rounded-lg bg-white/25 border-[3px] border-white/70 hover:bg-white/40 transition-colors ${className}`}
    >
      <span className="bs-text text-5xl leading-none">+</span>
    </Link>
  )
}

function SpeechBubble({ className }: { className?: string }) {
  return (
    <div className={`absolute z-20 w-52 bg-white rounded-2xl border-[3px] border-[#0b1020] px-4 py-3 shadow-[0_4px_0_#0b1020] ${className}`}>
      <p className="text-[#0b1020] text-base leading-snug">Hey, I'm Daniel! CS @ UMich. Hit PLAY to check out my projects!</p>
      <span className="absolute -left-3 top-8 w-5 h-5 bg-white border-l-[3px] border-b-[3px] border-[#0b1020] rotate-45" />
    </div>
  )
}

function ResumePass({ className }: { className?: string }) {
  return (
    <a
      href={profile.resume}
      target="_blank"
      rel="noreferrer"
      className={`bs-btn bs-btn-yellow relative flex flex-col items-center justify-end pb-2 ${className}`}
    >
      <span className="bs-shine absolute inset-0 overflow-hidden rounded-[5px]" />
      <span className="absolute -top-5 text-6xl -rotate-12 drop-shadow-[0_3px_0_rgba(0,0,0,0.6)]">🎟️</span>
      <span className="bs-text text-2xl leading-none">RESUME PASS</span>
    </a>
  )
}

function QuestsCard({ className }: { className?: string }) {
  return (
    <Link to="experience" className={`bs-btn bs-btn-yellow relative flex flex-col items-center justify-end pb-2 ${className}`}>
      <span className="absolute -top-5 text-5xl drop-shadow-[0_3px_0_rgba(0,0,0,0.6)]">📋</span>
      <span className="bs-text text-xl leading-none">QUESTS</span>
      <span className="absolute -top-3 -right-3 px-2 py-0.5 bg-[#ff3b3b] border-[3px] border-[#0b1020] bs-text-sm text-xs">NEW</span>
    </Link>
  )
}

function EventBox({ className, compact }: { className?: string; compact?: boolean }) {
  return (
    <Link to="experience" className={`block hover:brightness-110 ${className}`}>
      <div className="flex justify-end">
        <span className="bs-chip px-4 py-0.5 -mb-0.5 mr-2">
          <span className="block text-sm text-[#7584a3]">Active since May 2026</span>
        </span>
      </div>
      <div className="bs-panel flex items-stretch overflow-hidden">
        <div className="flex items-center gap-3 px-4 py-2 flex-1 min-w-0">
          <span className="text-4xl">🔬</span>
          <div className="flex flex-col min-w-0">
            <span className={`bs-text-sm leading-tight whitespace-nowrap ${compact ? "text-xl" : "text-2xl"}`}>RESEARCH ASSISTANT</span>
            <span className={`text-[#9ab1fa] leading-tight ${compact ? "text-base" : "text-lg"}`}>PROTEUS Project · NSF</span>
          </div>
        </div>
        <span className="flex items-center px-3 bg-[#3a4566] border-l-[3px] border-[#0b1020] bs-text-sm text-lg">NOW!</span>
      </div>
    </Link>
  )
}

function RewardStrip({ compact }: { compact?: boolean }) {
  return (
    <Link to="projects" className="flex flex-col">
      <span className="bs-text-sm text-base text-[#6dff4d] pl-2">Projects unlocked</span>
      <div className="flex items-center gap-1.5 p-1.5 bg-[#1b4fd6] border-[3px] border-[#0b1020] rounded-lg">
        {projects.map((p) => (
          <span
            key={p.title}
            title={p.title}
            className={`flex-1 ${compact ? "h-8" : "h-10"} flex items-center justify-center rounded-md border-2 border-[#0b1020] text-xl`}
            style={{ background: rarityColors[p.rarity] }}
          >
            {p.emoji}
          </span>
        ))}
        <span className={`flex-1 ${compact ? "h-8" : "h-10"} flex items-center justify-center rounded-md border-2 border-dashed border-white/60 bs-text-sm text-lg`}>
          ?
        </span>
      </div>
    </Link>
  )
}

function PlayButton({ className, compact }: { className?: string; compact?: boolean }) {
  return (
    <motion.div whileHover={{ scale: 1.03 }} className={className}>
      <Link to="projects" className={`bs-btn bs-btn-yellow flex items-center justify-center w-full ${compact ? "h-16" : "h-20"}`}>
        <span className={`text-[#1a1a1a] [text-shadow:0_3px_0_rgba(255,255,255,0.5)] ${compact ? "text-4xl" : "text-5xl"}`}>PLAY</span>
      </Link>
    </motion.div>
  )
}

/* ───────────── Layouts (in stage pixels) ───────────── */

function LandscapeMenu() {
  return (
    <>
      <HalloweenScene />

      <div className="absolute top-3 left-8 flex items-start gap-3 z-20">
        <ProfileCard />
        <TrophyCard />
      </div>
      <div className="absolute top-2 right-6 flex items-start gap-3 z-20">
        <Currencies />
        <MainMenu />
      </div>

      <nav className="absolute top-[110px] left-10 flex flex-col gap-5 z-10">{leftButtons()}</nav>
      <nav className="absolute top-[110px] right-10 flex flex-col gap-5 z-10">{rightButtons()}</nav>

      {/* Brawler in the doorway, centered on the stage */}
      <div className="absolute left-1/2 -translate-x-1/2 top-[120px] flex flex-col items-center z-10">
        <div className="z-20 mb-1">
          <RankBadge />
        </div>
        <div className="relative flex justify-center">
          <Doorway className="absolute left-1/2 -translate-x-1/2 bottom-6 h-[112%] w-auto" />
          <TeamSlot className="-left-32 bottom-20" />
          <Brawler height={500} />
          <TeamSlot className="-right-32 bottom-20" />
          <SpeechBubble className="left-[calc(100%-1.5rem)] top-[20%]" />
        </div>
      </div>

      <div className="absolute bottom-4 left-6 flex items-end gap-3 z-10">
        <ResumePass className="w-56 h-24" />
        <QuestsCard className="w-32 h-24" />
      </div>
      <EventBox className="absolute bottom-4 right-[360px] w-[520px] z-10" />
      <div className="absolute bottom-4 right-6 w-80 flex flex-col gap-2 z-10">
        <RewardStrip />
        <PlayButton />
      </div>
    </>
  )
}

// Portrait: the brawler and side buttons are centered in the space between the
// top bar and the bottom action stack, and the brawler grows into extra height.
const PORTRAIT_TOP = 140
const PORTRAIT_BOTTOM_STACK = 350

function PortraitMenu({ stageH }: { stageH: number }) {
  const free = stageH - PORTRAIT_TOP - PORTRAIT_BOTTOM_STACK
  const brawlerH = Math.round(Math.min(380, Math.max(260, free - 80)))
  const blockTop = PORTRAIT_TOP + Math.max(0, (free - (brawlerH + 44)) / 2)
  const navTop = blockTop + 40

  return (
    <>
      <HalloweenScene portrait />

      <div className="absolute top-3 left-5 right-3 flex items-start gap-3 z-20">
        <ProfileCard />
        <TrophyCard />
        <div className="ml-auto">
          <MainMenu />
        </div>
      </div>
      <div className="absolute top-[100px] right-3 z-20">
        <Currencies />
      </div>

      <nav className="absolute left-2 flex flex-col gap-2 z-20" style={{ top: navTop }}>{leftButtons(true)}</nav>
      <nav className="absolute right-2 flex flex-col gap-2 z-20" style={{ top: navTop }}>{rightButtons(true)}</nav>

      <div className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center z-10" style={{ top: blockTop }}>
        <div className="z-20 -mb-2 scale-[0.8]">
          <RankBadge />
        </div>
        <div className="relative flex justify-center">
          <Doorway className="absolute left-1/2 -translate-x-1/2 bottom-5 h-[110%] w-auto" />
          <Brawler height={brawlerH} />
        </div>
      </div>

      <div className="absolute bottom-3 left-3 right-3 flex flex-col gap-2.5 z-10">
        <div className="flex items-end gap-3">
          <ResumePass className="flex-1 h-20" />
          <QuestsCard className="w-32 h-20" />
        </div>
        <EventBox compact />
        <RewardStrip compact />
        <PlayButton compact />
      </div>
    </>
  )
}

function Stage({ width, height, scale, children }: { width: number; height: number; scale: number; children: ReactNode }) {
  return (
    <div
      className="absolute left-1/2 top-1/2"
      style={{ width, height, transform: `translate(-50%, -50%) scale(${scale})` }}
    >
      {children}
    </div>
  )
}

function Home() {
  const { w, h } = useWindowSize()
  const portrait = w / h < PORTRAIT_BELOW

  let stageW: number, stageH: number
  if (portrait) {
    stageW = PORTRAIT.w
    stageH = Math.min(PORTRAIT.maxH, Math.max(PORTRAIT.minH, (PORTRAIT.w * h) / w))
  } else {
    stageH = LANDSCAPE.h
    stageW = Math.min(LANDSCAPE.maxW, Math.max(LANDSCAPE.minW, (LANDSCAPE.h * w) / h))
  }
  const scale = Math.min(w / stageW, h / stageH)

  return (
    <div className="bs-root bs-bg relative w-full h-[100dvh] overflow-hidden">
      <HalloweenAtmosphere />
      <Stage width={stageW} height={stageH} scale={scale}>
        {portrait ? <PortraitMenu stageH={stageH} /> : <LandscapeMenu />}
      </Stage>
    </div>
  )
}

export default Home
