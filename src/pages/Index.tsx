import HeroSection from "@/components/HeroSection"
import { TextGradientScroll } from "@/components/ui/text-gradient-scroll"
import { StaggerTestimonials } from "@/components/ui/stagger-testimonials"
import { motion } from "framer-motion"
import SmoothScrollHero from "@/components/ui/smooth-scroll-hero"
import CharacterGallery from "@/components/CharacterGallery"
import FactsSection from "@/components/FactsSection"

export default function Index() {
  const aboutText =
    "«Цикады» — это история элитной московской школы, где появление богатого новенького Антона переворачивает привычный мир учеников. Громкие вечеринки, тайные чувства и зависть приводят к страшной развязке: на одном из праздников происходит убийство. Сериал разворачивается как детективное расследование — следователь по крупицам собирает правду из показаний подростков и их родителей. Чем глубже копает следствие, тем больше шокирующих секретов всплывает на поверхность. Восемь серий, в которых никому нельзя верить."

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <HeroSection />

      {/* About Series Section */}
      <section id="mission" className="relative min-h-screen flex items-center justify-center py-20 bg-background">
        <div className="absolute inset-0 bg-grid-subtle opacity-40 pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-black tracking-wider mb-12 text-white">
              О <span className="text-primary">СЕРИАЛЕ</span>
            </h2>
            <TextGradientScroll
              text={aboutText}
              className="text-2xl md:text-3xl lg:text-4xl font-medium leading-relaxed text-gray-300"
              type="word"
              textOpacity="soft"
            />
          </div>
        </div>
      </section>

      {/* Character Gallery Section */}
      <section id="community" className="relative py-20 bg-background">
        <div className="absolute inset-0 bg-grid-subtle opacity-40 pointer-events-none" />

        <div className="relative z-10">
          <div className="container mx-auto px-6 mb-16">
            <div className="text-center">
              <h2 className="text-4xl md:text-6xl font-black tracking-wider mb-6 text-white">
                ГАЛЕРЕЯ <span className="text-primary">ПЕРСОНАЖЕЙ</span>
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
                Познакомься с учениками школы. Часть героев пока скрыта — они появятся в следующих сериях.
              </p>
            </div>
          </div>

          <CharacterGallery />
        </div>
      </section>

      {/* Facts Section */}
      <section className="relative py-20 bg-background">
        <div className="absolute inset-0 bg-grid-subtle opacity-40 pointer-events-none" />
        <FactsSection />
      </section>

      {/* Actor Quotes Section */}
      <section id="testimonials" className="relative py-20 bg-background">
        <div className="absolute inset-0 bg-grid-subtle opacity-40 pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-black tracking-wider text-white mb-6">
              СЛОВО{" "}
              <span className="text-primary">АКТЁРОВ</span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-12">
              Как сами актёры описывают своих героев и работу над сериалом.
            </p>
          </motion.div>

          <StaggerTestimonials />
        </div>
      </section>

      {/* Final CTA with Smooth Scroll Hero */}
      <section id="join" className="relative">
        <SmoothScrollHero
          scrollHeight={2500}
          desktopImage="https://cdn.poehali.dev/projects/87640017-3bee-4b53-a485-85924f43b28f/files/874f136f-d72d-4630-918b-916a8c1b96e0.jpg"
          mobileImage="https://cdn.poehali.dev/projects/87640017-3bee-4b53-a485-85924f43b28f/files/874f136f-d72d-4630-918b-916a8c1b96e0.jpg"
          initialClipPercentage={30}
          finalClipPercentage={70}
        />
      </section>
    </div>
  )
}