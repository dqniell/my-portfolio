import { posts } from "../data/blog"

function Blog() {
  return (
    <div className="bg-white text-black px-8 py-16 flex flex-col items-center gap-12">

      {/* Section Header */}
      <div className="flex flex-col items-center gap-3">
        <span className="font-mono text-zinc-400 text-sm">// my thoughts</span>
        <h2 className="text-4xl font-bold text-black">Blog</h2>
        <p className="text-zinc-500 text-center max-w-md">
          Things I've learned, built, and figured out along the way.
        </p>
      </div>

      {/* Posts */}
      <div className="flex flex-col gap-6 w-full max-w-2xl">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-white border border-zinc-200 rounded-xl p-6 flex flex-col gap-4 hover:border-black transition-colors cursor-pointer group shadow-sm"
          >
            {/* Meta */}
            <div className="flex items-center gap-4">
              <span className="text-zinc-400 font-mono text-xs">{post.date}</span>
              <span className="text-zinc-300">·</span>
              <span className="text-zinc-400 font-mono text-xs">{post.readTime}</span>
            </div>

            {/* Title */}
            <h3 className="text-black font-semibold text-xl group-hover:text-zinc-600 transition-colors">
              {post.title}
            </h3>

            {/* Description */}
            <p className="text-zinc-500 text-sm leading-relaxed">{post.description}</p>

            {/* Tags & Read More */}
            <div className="flex items-center justify-between mt-2">
              <div className="flex gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-mono px-2 py-1 bg-zinc-100 border border-zinc-200 text-zinc-500 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <span className="text-black font-mono text-xs group-hover:translate-x-1 transition-transform">
                Read more →
              </span>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Blog
