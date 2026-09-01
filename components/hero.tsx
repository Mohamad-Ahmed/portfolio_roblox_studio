export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Silk mesh background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/silk-mesh-bg.png"
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover object-[30%_60%] opacity-100"
        />
        {/* Vignette + top/bottom fade into pure black */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,rgba(0,0,0,0.4)_100%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-transparent to-background" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-6 text-center">
        <h1 className="text-balance text-4xl font-semibold leading-[0.98] tracking-tight text-foreground sm:text-5xl md:text-7xl">
          Full Stack Roblox Developer
          <span className="block font-light text-muted-foreground/90">
            with 4+ years of experience
          </span>
        </h1>

        <p className="mt-8 text-pretty text-base font-medium text-muted-foreground sm:text-lg">
          Scripter, Builder, and UI/UX Designer
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#contact"
            className="glass glass-sheen glass-interactive rounded-full px-8 py-3.5 text-sm font-medium text-foreground"
          >
            Contact
          </a>
          <a
            href="#work"
            className="glass glass-sheen glass-interactive rounded-full px-8 py-3.5 text-sm font-medium text-muted-foreground hover:text-foreground"
          >
            View Work
          </a>
        </div>
      </div>
    </section>
  )
}
