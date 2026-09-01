const PROJECTS = [
  {
    title: "Backrooms",
    tag: "Gameplay · Building · VFX",
    img: "/backrooms_studio_screenshot.jfif",
    span: "md:col-span-2",
    desc: "ultra-realistic backrooms, made by me (100% real and in Roblox, not copied from anyone.) ",
  },
  {
    title: "Projects in total.",
    tag: "",
    img: "/seventeen.jfif",
    span: "",
    desc: "Pure hard work with a dedicated mind; that is how you do it, my boy.",
  },
  {
    title: "",
    tag: "VFX · Building",
    img: "/blox_fruits.jfif",
    span: "",
    desc: "Made a solo Blox Fruits project. No toolbar. With scripts. Pure effort..",
  },
  {
    title: "The Empyrean Dynasty",
    tag: "VFX · Building",
    img: "/realistic_showcase_screenshot_studio_2.png",
    span: "md:col-span-2",
    desc: "One of my most complex projects so far; designed with pure effort and a consistent mind. Crafted entirely out of my skilful hands btw lol.",
  },
]

export function Showcase() {
  return (
    <section id="work" className="mx-auto max-w-5xl px-6 py-28">
      <div className="mb-12 flex items-end justify-between gap-6">
        <div>
          <p className="text-sm font-medium text-muted-foreground">Selected Work</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Things I&apos;ve built
          </h2>
        </div>
        <a
          href="#contact"
          className="hidden shrink-0 text-sm text-muted-foreground transition-colors hover:text-foreground sm:block"
        >
          Request a demo &rarr;
        </a>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {PROJECTS.map((p) => (
          <article
            key={p.title}
            className={`glass glass-interactive group relative overflow-hidden rounded-3xl ${p.span}`}
          >
            <div className="aspect-[16/10] w-full overflow-hidden">
              <img
                src={p.img || "/placeholder.svg"}
                alt={`${p.title} — ${p.tag}`}
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-5">
              <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                {p.tag}
              </p>
              <h3 className="mt-1 text-lg font-semibold text-foreground">{p.title}</h3>
              <p className="mt-1 max-w-md text-sm text-muted-foreground opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                {p.desc}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
