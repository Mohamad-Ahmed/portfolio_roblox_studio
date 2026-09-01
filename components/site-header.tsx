"use client"

const NAV = [
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
]

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
      <nav className="glass flex w-full max-w-5xl items-center justify-between rounded-full px-3 py-2">
        <a
          href="#top"
          className="pl-3 text-sm font-semibold tracking-tight text-foreground"
        >
          Python<span className="text-muted-foreground"></span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {NAV.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="rounded-full px-4 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="glass glass-sheen glass-interactive rounded-full px-5 py-2 text-sm font-medium text-foreground"
        >
          Hire Me!
        </a>
      </nav>
    </header>
  )
}
