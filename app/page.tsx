import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { Showcase } from "@/components/showcase"
import { CodeSection } from "@/components/code-section"
import { ContactFooter } from "@/components/contact-footer"

export default function Page() {
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <SiteHeader />
      <Hero />
      <Showcase />
      <CodeSection />
      <ContactFooter />
    </main>
  )
}
