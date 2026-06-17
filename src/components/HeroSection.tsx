import { LiquidButton } from "@/components/ui/liquid-glass-button"
import Icon from "@/components/ui/icon"
import { useState } from "react"

export default function HeroSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const heroImage =
    "https://cdn.poehali.dev/projects/87640017-3bee-4b53-a485-85924f43b28f/files/217c7a59-b7bc-4515-ae87-e94efab15ce3.jpg"

  const navItems = [
    { name: "Главная", href: "#hero" },
    { name: "О сериале", href: "#mission" },
    { name: "Персонажи", href: "#community" },
    { name: "Актёры", href: "#testimonials" },
    { name: "Смотреть", href: "#join" },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <div id="hero" className="relative h-screen w-full overflow-hidden bg-black">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${heroImage}')`,
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black" />
      </div>

      {/* Navigation */}
      <nav className="relative z-20 flex items-center justify-between p-6 md:p-8">
        {/* Logo/Brand */}
        <div className="flex items-center gap-2 text-white font-black text-2xl tracking-[0.3em]">
          <Icon name="Bug" size={26} className="text-primary" />
          ЦИКАДЫ
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className="relative text-white/90 hover:text-primary transition-colors duration-300 font-medium tracking-wide pb-1 group"
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 ease-out group-hover:w-full"></span>
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white hover:text-primary transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Icon name={isMenuOpen ? "X" : "Menu"} size={24} />
          <span className="sr-only">Меню</span>
        </button>
      </nav>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="absolute top-0 left-0 w-full h-full bg-black/95 z-30 md:hidden">
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-white text-2xl font-bold tracking-wider hover:text-primary transition-colors duration-300"
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Hero Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-6 -mt-16">
        <div className="text-center text-white max-w-4xl">
          <p className="text-primary font-semibold tracking-[0.4em] mb-6 text-sm md:text-base uppercase">
            Сериал · 2023 · 8 серий
          </p>

          {/* Main Title */}
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-wider mb-6 leading-none drop-shadow-2xl">
            ЦИКАДЫ
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-2xl font-light tracking-wide mb-10 text-gray-300 max-w-2xl mx-auto">
            Элитная московская школа. Громкая вечеринка. Убийство, которое
            изменит всё. Сколько тайн ты готов раскрыть?
          </p>

          {/* CTA Button */}
          <LiquidButton
            size="xxl"
            className="font-semibold text-lg tracking-wide"
            onClick={() => scrollToSection("#community")}
          >
            Раскрыть тайны
          </LiquidButton>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-white/60 animate-bounce">
        <span className="text-xs tracking-widest uppercase">Листай вниз</span>
        <Icon name="ChevronDown" size={22} />
      </div>
    </div>
  )
}
