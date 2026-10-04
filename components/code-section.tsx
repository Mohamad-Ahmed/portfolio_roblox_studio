const SPECIALITIES = [
  "Luau Scripting",
  "OOP & Frameworks",
  "DataStores",
  "Networking / Remotes",
  "UI / UX Design",
  "World Building",
  "Optimization",
]

const EXCLUDED = ["3D Art", "Modeling", "VFX"]

// A small hand-rolled Luau highlighter for display purposes.
const CODE_LINES: Array<Array<{ t: string; c: string }>> = [
  [{ t: "-- Server-side leaderboard handler", c: "text-muted-foreground" }],
  [
    { t: "local", c: "text-sky-400" },
    { t: " DataStoreService = ", c: "text-foreground" },
    { t: "game", c: "text-emerald-400" },
    { t: ":GetService(", c: "text-foreground" },
    { t: '"DataStoreService"', c: "text-amber-300" },
    { t: ")", c: "text-foreground" },
  ],
  [
    { t: "local", c: "text-sky-400" },
    { t: " store = DataStoreService:GetDataStore(", c: "text-foreground" },
    { t: '"Points"', c: "text-amber-300" },
    { t: ")", c: "text-foreground" },
  ],
  [{ t: "", c: "" }],
  [
    { t: "local function", c: "text-sky-400" },
    { t: " award(player, amount)", c: "text-foreground" },
  ],
  [
    { t: "  local", c: "text-sky-400" },
    { t: " key = ", c: "text-foreground" },
    { t: '"user_"', c: "text-amber-300" },
    { t: " .. player.UserId", c: "text-foreground" },
  ],
  [
    { t: "  local", c: "text-sky-400" },
    { t: " ok, total = pcall(", c: "text-foreground" },
    { t: "function", c: "text-sky-400" },
    { t: "()", c: "text-foreground" },
  ],
  [
    { t: "    return", c: "text-sky-400" },
    { t: " store:IncrementAsync(key, amount)", c: "text-foreground" },
  ],
  [{ t: "  end)", c: "text-foreground" }],
  [
    { t: "  if", c: "text-sky-400" },
    { t: " ok ", c: "text-foreground" },
    { t: "then", c: "text-sky-400" },
    { t: " print(", c: "text-foreground" },
    { t: '"Awarded"', c: "text-amber-300" },
    { t: ", total) ", c: "text-foreground" },
    { t: "end", c: "text-sky-400" },
  ],
  [{ t: "end", c: "text-sky-400" }],
]

export function CodeSection() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-6 py-28">
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
        <div>
          <p className="text-sm font-medium text-muted-foreground">Clean, production code</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Systems that scale
          </h2>
          <p className="mt-4 max-w-md text-pretty leading-relaxed text-muted-foreground">
            Every script is modular, documented and built with performance in mind — from
            DataStores to networking and anti-exploit patterns.
          </p>

          <div className="mt-8">
            <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Specialities
            </p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {SPECIALITIES.map((s) => (
                <li
                  key={s}
                  className="glass glass-sheen glass-interactive rounded-full px-3.5 py-1.5 text-sm text-muted-foreground hover:text-foreground"
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6">
            <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Excluded
            </p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {EXCLUDED.map((s) => (
                <li
                  key={s}
                  className="glass rounded-full px-3.5 py-1.5 text-sm text-muted-foreground/60 line-through decoration-white/30"
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="glass glass-interactive overflow-hidden rounded-2xl">
          <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
            <span className="h-3 w-3 rounded-full bg-white/15" />
            <span className="h-3 w-3 rounded-full bg-white/15" />
            <span className="h-3 w-3 rounded-full bg-white/15" />
            <span className="ml-2 font-mono text-xs text-muted-foreground">
              leaderboard.server.luau
            </span>
          </div>
          <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-relaxed">
            <code>
              {CODE_LINES.map((line, i) => (
                <div key={i} className="whitespace-pre">
                  <span className="mr-4 select-none text-white/20">
                    {String(i + 1).padStart(2, " ")}
                  </span>
                  {line.map((tok, j) => (
                    <span key={j} className={tok.c}>
                      {tok.t}
                    </span>
                  ))}
                </div>
              ))}
            </code>
          </pre>
        </div>
      </div>
    </section>
  )
}
