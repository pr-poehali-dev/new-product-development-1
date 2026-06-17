import type React from "react"
import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

const SQRT_5000 = Math.sqrt(5000)

// Actor quotes about the "Cicadas" series
const testimonials = [
  {
    tempId: 0,
    testimonial:
      "Мой герой кажется простым новеньким, но за его уверенностью прячется человек, который очень хочет, чтобы его наконец заметили и приняли.",
    by: "Григорий Верник, играет Антона",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=Anton&backgroundColor=991b1b&textColor=ffffff",
  },
  {
    tempId: 1,
    testimonial:
      "Алина почти всё время молчит, и это было самым сложным — играть так, чтобы зритель чувствовал бурю эмоций без единого слова.",
    by: "Софья Аржаных, играет Алину",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=Alina&backgroundColor=6d28d9&textColor=ffffff",
  },
  {
    tempId: 2,
    testimonial:
      "Снимать сцены вечеринок было весело и страшно одновременно — ты понимаешь, что именно здесь всё пойдёт не так.",
    by: "Илья Виногорский, играет Марка",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=Mark&backgroundColor=3f3f46&textColor=ffffff",
  },
  {
    tempId: 3,
    testimonial:
      "Мне близка тема разных миров — когда у одних есть всё, а другие добиваются места под солнцем сами. В сериале это чувствуется в каждой сцене.",
    by: "Кирилл Буханцев, играет Алекса",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=Alex&backgroundColor=065f46&textColor=ffffff",
  },
  {
    tempId: 4,
    testimonial:
      "Сеня — самая тихая роль и самая громкая тайна. Когда я прочитал сценарий до финала, у меня мурашки пошли по коже.",
    by: "Савелий Наумов, играет Сеню",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=Senya&backgroundColor=171717&textColor=ffffff",
  },
  {
    tempId: 5,
    testimonial:
      "Играть отца Антона и одновременно быть режиссёром — двойная ответственность. Я хотел, чтобы каждый герой был живым человеком, а не маской.",
    by: "Евгений Стычкин, режиссёр и актёр",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=Director&backgroundColor=7f1d1d&textColor=ffffff",
  },
  {
    tempId: 6,
    testimonial:
      "Это история про то, как взрослые своими решениями ломают мир детей. Мне было важно показать цену таких ошибок.",
    by: "Елизавета Боярская, взрослый каст",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=Boyarskaya&backgroundColor=be185d&textColor=ffffff",
  },
  {
    tempId: 7,
    testimonial:
      "Формат допроса держит в напряжении даже нас, актёров. До последнего не верится, чем всё закончится.",
    by: "Артём Быстров, взрослый каст",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=Bystrov&backgroundColor=0f766e&textColor=ffffff",
  },
]

interface TestimonialCardProps {
  position: number
  testimonial: (typeof testimonials)[0]
  handleMove: (steps: number) => void
  cardSize: number
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ position, testimonial, handleMove, cardSize }) => {
  const isCenter = position === 0
  return (
    <div
      onClick={() => handleMove(position)}
      className={cn(
        "absolute left-1/2 top-1/2 cursor-pointer border-2 p-8 transition-all duration-500 ease-in-out",
        isCenter
          ? "z-10 bg-primary text-white border-primary"
          : "z-0 bg-card text-white border-white/15 hover:border-primary/60",
      )}
      style={{
        width: cardSize,
        height: cardSize,
        clipPath: `polygon(50px 0%, calc(100% - 50px) 0%, 100% 50px, 100% 100%, calc(100% - 50px) 100%, 50px 100%, 0 100%, 0 0)`,
        transform: `
          translate(-50%, -50%)
          translateX(${(cardSize / 1.5) * position}px)
          translateY(${isCenter ? -65 : position % 2 ? 15 : -15}px)
          rotate(${isCenter ? 0 : position % 2 ? 2.5 : -2.5}deg)
        `,
        boxShadow: isCenter ? "0px 8px 0px 4px hsl(var(--border))" : "0px 0px 0px 0px transparent",
      }}
    >
      <span
        className="absolute block origin-top-right rotate-45 bg-gray-300"
        style={{
          right: -2,
          top: 48,
          width: SQRT_5000,
          height: 2,
        }}
      />
      <img
        src={testimonial.imgSrc || "/placeholder.svg"}
        alt={`${testimonial.by.split(",")[0]}`}
        className="mb-4 h-14 w-12 bg-gray-100 object-cover object-top"
        style={{
          boxShadow: "3px 3px 0px hsl(var(--background))",
        }}
      />
      <h3 className={cn("text-base sm:text-xl font-medium", isCenter ? "text-white" : "text-white")}>
        "{testimonial.testimonial}"
      </h3>
      <p
        className={cn(
          "absolute bottom-8 left-8 right-8 mt-2 text-sm italic",
          isCenter ? "text-white/80" : "text-primary",
        )}
      >
        - {testimonial.by}
      </p>
    </div>
  )
}

export const StaggerTestimonials: React.FC = () => {
  const [cardSize, setCardSize] = useState(365)
  const [testimonialsList, setTestimonialsList] = useState(testimonials)

  const handleMove = (steps: number) => {
    const newList = [...testimonialsList]
    if (steps > 0) {
      for (let i = steps; i > 0; i--) {
        const item = newList.shift()
        if (!item) return
        newList.push({ ...item, tempId: Math.random() })
      }
    } else {
      for (let i = steps; i < 0; i++) {
        const item = newList.pop()
        if (!item) return
        newList.unshift({ ...item, tempId: Math.random() })
      }
    }
    setTestimonialsList(newList)
  }

  useEffect(() => {
    const updateSize = () => {
      const { matches } = window.matchMedia("(min-width: 640px)")
      setCardSize(matches ? 365 : 290)
    }
    updateSize()
    window.addEventListener("resize", updateSize)
    return () => window.removeEventListener("resize", updateSize)
  }, [])

  return (
    <div className="relative w-full overflow-hidden" style={{ height: 600 }}>
      {testimonialsList.map((testimonial, index) => {
        const position =
          testimonialsList.length % 2 ? index - (testimonialsList.length + 1) / 2 : index - testimonialsList.length / 2
        return (
          <TestimonialCard
            key={testimonial.tempId}
            testimonial={testimonial}
            handleMove={handleMove}
            position={position}
            cardSize={cardSize}
          />
        )
      })}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        <button
          onClick={() => handleMove(-1)}
          className={cn(
            "flex h-14 w-14 items-center justify-center text-2xl transition-colors",
            "bg-card text-white border-2 border-white/20 hover:bg-primary hover:text-white",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
          )}
          aria-label="Предыдущий отзыв"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={() => handleMove(1)}
          className={cn(
            "flex h-14 w-14 items-center justify-center text-2xl transition-colors",
            "bg-card text-white border-2 border-white/20 hover:bg-primary hover:text-white",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
          )}
          aria-label="Следующий отзыв"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  )
}