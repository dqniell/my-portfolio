import { useEffect, useState } from "react"

const FALLBACK = 128
const CACHE_KEY = "v2-github-commits"
const CACHE_MS = 60 * 60 * 1000

// Total public commits authored by the user, via GitHub's commit search API.
// Cached for an hour since the unauthenticated search limit is low.
export function useGithubCommits(user: string) {
  const [count, setCount] = useState<number>(() => {
    try {
      const cached = JSON.parse(localStorage.getItem(CACHE_KEY) ?? "null")
      if (cached) return cached.count
    } catch {
      // ignore storage errors
    }
    return FALLBACK
  })

  useEffect(() => {
    try {
      const cached = JSON.parse(localStorage.getItem(CACHE_KEY) ?? "null")
      if (cached && Date.now() - cached.at < CACHE_MS) return
    } catch {
      // ignore storage errors
    }

    fetch(`https://api.github.com/search/commits?q=author:${user}&per_page=1`)
      .then((res) => (res.ok ? res.json() : Promise.reject(res.status)))
      .then((data) => {
        if (typeof data.total_count !== "number") return
        setCount(data.total_count)
        try {
          localStorage.setItem(CACHE_KEY, JSON.stringify({ count: data.total_count, at: Date.now() }))
        } catch {
          // ignore storage errors
        }
      })
      .catch(() => {})
  }, [user])

  return count
}
