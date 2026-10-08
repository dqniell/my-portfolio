export const profile = {
  name: "Daniel Lee",
  githubUser: "dqniell",
  main: "Python",
  mainIcon: "/v2/python-logo.svg",
  email: "joonleee@umich.edu",
  github: "https://github.com/dqniell",
  linkedin: "https://linkedin.com/in/danieljoonlee",
  resume: "/v2/daniel-lee-resume.pdf",
  // Degree progress bar runs from first day of classes to graduation
  degreeStart: "2024-08-26",
  degreeEnd: "2028-05-01",
}

export type Rarity = "RARE" | "SUPER RARE" | "EPIC" | "MYTHIC" | "LEGENDARY"

export const rarityColors: Record<Rarity, string> = {
  RARE: "#2ecc40",
  "SUPER RARE": "#1e90ff",
  EPIC: "#b53cff",
  MYTHIC: "#ff3b3b",
  LEGENDARY: "#ffc400",
}

export const projects: {
  title: string
  date: string
  rarity: Rarity
  emoji: string
  tags: string[]
  bullets: string[]
  github?: string
  demo?: string
  note?: string
}[] = [
  {
    title: "Limit Order Book",
    date: "June 2026",
    rarity: "LEGENDARY",
    emoji: "📈",
    tags: ["C++", "CMake"],
    bullets: [
      "Price-time priority limit order book using sorted std::map price levels for bids/asks and a hash index for O(1) lookup",
      "Replayed a real Nasdaq ITCH market-by-order feed of 4.88M events at a median 12.8M events/sec (~78 ns/event), maintaining live book state and bid-ask spread",
    ],
    github: "https://github.com/dqniell/limit-order-book",
  },
  {
    title: "LeetQuest",
    date: "Oct. 2025",
    rarity: "EPIC",
    emoji: "⚔️",
    note: "DivHacks",
    tags: ["React", "TypeScript", "Flask", "Python", "OpenAI API"],
    bullets: [
      "Built the Flask backend for a coding practice web app (team of 3), serving REST endpoints that filter 500+ LeetCode problems by topic and difficulty",
      "Integrated the OpenAI API to power an AI tutor that gives hints, code explanations, and debugging help without revealing full solutions",
    ],
  },
  {
    title: "TrainSense",
    date: "June 2025",
    rarity: "SUPER RARE",
    emoji: "🚇",
    tags: ["React Native", "Flask", "Python", "pandas"],
    bullets: [
      "Full-stack subway trip planner with a React Native client and a Flask REST backend",
      "Modeled the subway network as a graph from GTFS data and implemented BFS pathfinding for station-to-station routes",
    ],
    github: "https://github.com/dqniell/trainsense-web",
    demo: "https://trainsense-web.vercel.app",
  },
  {
    title: "Spotlight",
    date: "May 2025",
    rarity: "MYTHIC",
    emoji: "🎟️",
    tags: ["React", "Vite", "Tailwind", "Mapbox GL JS", "Supabase", "Node.js"],
    bullets: [
      "Event-discovery app aggregating live listings from the Ticketmaster and SeatGeek APIs into a Supabase/PostgreSQL backend",
      "De-duplicated cross-source listings using token-overlap name matching and venue distance",
      "Map clustering, photo markers, and fuzzy search with Mapbox GL JS",
    ],
    github: "https://github.com/dqniell/spotlight_v2",
    demo: "https://spotlight-v2-chi.vercel.app",
  },
]

export const experience = [
  {
    role: "Undergraduate Research Assistant",
    org: "University of Michigan · PROTEUS Project (NSF-Funded)",
    date: "May 2026 – Present",
    location: "Ann Arbor, MI",
    emoji: "🔬",
    bullets: [
      "Built a React/TypeScript dashboard (Vite, Tailwind) used by 7 researchers to explore 80K+ student submissions, replacing manual spreadsheet analysis",
      "Engineered a Python/pandas ETL pipeline that ingests, validates, and normalizes 960K+ log events into 80K+ submissions across 10 course sections and 2 textbooks",
      "Diagnosed a silent data-loss bug where 512-character field truncation dropped ~30% of long submissions; rerouted parsing to the untruncated field, correcting a key accuracy metric from 16.3% to 7.1%",
    ],
  },
  {
    role: "Project Team Member",
    org: "Michigan Data Science Team",
    date: "Sep. 2024 – Dec. 2024",
    location: "Ann Arbor, MI",
    emoji: "📊",
    bullets: [
      "Built Python/pandas pipelines to clean and analyze 7,000+ criminal records from the COMPAS recidivism dataset",
      "Identified significant racial disparities in COMPAS risk scores using logistic regression and survival analysis; presented findings to 100+ attendees at the MDST Project Expo",
    ],
  },
]

export const education = {
  school: "University of Michigan",
  degree: "B.S. in Computer Science, Minor in Mathematics",
  date: "Expected May 2028",
  location: "Ann Arbor, MI",
  coursework: [
    { name: "Web Systems", inProgress: true },
    { name: "Data Structures and Algorithms" },
    { name: "Computer Organization" },
    { name: "Discrete Mathematics" },
    { name: "Linear Algebra" },
    { name: "Introduction to Data Science" },
  ],
}

// Brawl Stars loadout naming: attacks, gadgets, gears
export const skills = [
  {
    group: "Attacks",
    subtitle: "Languages",
    color: "#ff3b3b",
    items: ["C++", "Python", "Java", "JavaScript", "TypeScript", "SQL", "Swift", "HTML/CSS"],
  },
  {
    group: "Gadgets",
    subtitle: "Frameworks",
    color: "#2ecc40",
    items: ["React", "React Native", "Node.js", "Express", "Flask", "Spring Boot", "SwiftUI"],
  },
  {
    group: "Gears",
    subtitle: "Tools & Data",
    color: "#b53cff",
    items: ["Git", "Linux", "CMake", "PostgreSQL", "Supabase", "OpenAI API", "pandas", "NumPy"],
  },
]

export const clubs = [
  {
    name: "Management Leadership for Tomorrow",
    role: "Career Prep Fellow",
    date: "Jan. 2026 – Present",
    emoji: "🛡️",
    description:
      "Selected for an 18-month career development program providing coaching and mentorship to high-potential students.",
  },
  {
    name: "Michigan Data Science Team",
    role: "Project Team Member",
    date: "Sep. 2024 – Dec. 2024",
    emoji: "📊",
    description:
      "Worked on the COMPAS recidivism project and presented findings at the MDST Project Expo to 100+ attendees.",
  },
]

export const about = {
  tag: "#DQNIELL",
  bio: "Hey! I'm a Computer Science student at UMich passionate about building things. I love turning ideas into real projects, from web apps to mobile apps.",
  interests: ["Web Development", "Backend Engineering", "Computer Science", "Building things that solve real problems"],
  funFacts: [
    { emoji: "☕", text: "I drink too much coffee" },
    { emoji: "🏀", text: "I love playing basketball" },
    { emoji: "🍍", text: "I always get pineapple on my pizza" },
  ],
}
