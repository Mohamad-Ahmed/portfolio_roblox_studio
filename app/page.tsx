import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { Showcase } from "@/components/showcase"
import { CodeSection } from "@/components/code-section"
import { ContactFooter } from "@/components/contact-footer"
import { ScrollReveal } from "@/components/scroll-reveal"

export default function Page() {
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <SiteHeader />
      <ScrollReveal>
        <Hero />
      </ScrollReveal>
      <ScrollReveal delay={80}>
        <Showcase />
      </ScrollReveal>
      <ScrollReveal delay={120}>
        <CodeSection />
      </ScrollReveal>
      <ScrollReveal delay={160}>
        <ContactFooter />
      </ScrollReveal>
    </main>
  )
}
