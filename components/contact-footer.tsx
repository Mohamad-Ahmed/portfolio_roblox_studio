"use client"

import { useState } from "react"

const LINKS = [
  { label: "Discord", value: "ahmed.thedev", copy: true, href: undefined },
  { label: "Twitter / X", value: "@PythonTheDev", copy: false, href: "https://x.com/PythonTheDev" },
  { label: "Roblox Talent Hub", value: "View profile", copy: false, href: "https://create.roblox.com/talent/creators/7054807862" },
]

export function ContactFooter() {
  const [copied, setCopied] = useState<string | null>(null)

  async function handleCopy(value: string) {
    try {
      await navigator.clipboard.writeText(value)
      setCopied(value)
      setTimeout(() => setCopied(null), 1800)
    } catch {
      // clipboard may be unavailable; ignore
    }
  }

  return (
    <footer id="contact" className="relative overflow-hidden px-6 py-28">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          Let&apos;s build something
        </h2>
        <p className="mx-auto mt-4 max-w-md text-pretty leading-relaxed text-muted-foreground">
          Have a project in mind? Reach out on any platform below — I usually reply
          within a few hours.
        </p>

        <div className="mx-auto mt-10 flex max-w-xl flex-col gap-3">
          {LINKS.map((link) =>
            link.copy ? (
              <button
                key={link.label}
                type="button"
                onClick={() => handleCopy(link.value)}
                className="glass glass-sheen glass-interactive group flex items-center justify-between rounded-2xl px-6 py-4 text-left"
              >
                <span className="text-sm font-medium text-muted-foreground">{link.label}</span>
                <span className="flex items-center gap-2 text-sm text-foreground">
                  {link.value}
                  <span className="text-xs text-muted-foreground">
                    {copied === link.value ? "Copied!" : "Copy"}
                  </span>
                </span>
              </button>
            ) : (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="glass glass-sheen glass-interactive group flex items-center justify-between rounded-2xl px-6 py-4 text-left"
              >
                <span className="text-sm font-medium text-muted-foreground">{link.label}</span>
                <span className="text-sm text-foreground">
                  {link.value} <span className="text-muted-foreground">&rarr;</span>
                </span>
              </a>
            ),
          )}
        </div>

        <p className="mt-16 text-xs text-muted-foreground">
          © {new Date().getFullYear()} Pyhon - Roblox Developer
        </p>
      </div>
    </footer>
  )
}
