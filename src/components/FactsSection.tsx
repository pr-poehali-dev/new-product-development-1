import { motion } from "framer-motion"
import Icon from "@/components/ui/icon"

interface Fact {
  icon: string
  title: string
  text: string
}

const facts: Fact[] = [
  {
    icon: "Drama",
    title: "Звёздный взрослый каст",
    text: "Родителей и взрослых героев играют Елизавета Боярская, Ольга Сутулова и Артём Быстров — настоящее созвездие.",
  },
  {
    icon: "Megaphone",
    title: "Режиссёр в кадре",
    text: "Отца Антона сыграл сам режиссёр сериала Евгений Стычкин — редкий случай, когда постановщик выходит на сцену.",
  },
  {
    icon: "Search",
    title: "Детектив наизнанку",
    text: "История разворачивается как допрос: следователь по кусочкам собирает правду, а зритель разгадывает её вместе с ним.",
  },
  {
    icon: "Users",
    title: "Молодые звёзды",
    text: "Подростков играет смесь дебютантов и уже знакомых лиц — за каждым героем стоит своя актёрская история.",
  },
  {
    icon: "Eye",
    title: "Никому не верь",
    text: "Любовные треугольники, деньги, воровство и тёмные секреты — у каждого ученика есть мотив что-то скрывать.",
  },
  {
    icon: "Flame",
    title: "Финал, который шокирует",
    text: "Тот, на кого вы подумаете в последнюю очередь, окажется в центре трагедии. 8 серий держат до самого конца.",
  },
]

export default function FactsSection() {
  return (
    <div className="container mx-auto px-6 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-6xl font-black tracking-wider text-white mb-6">
          ЗАКУЛИСЬЕ{" "}
          <span className="text-primary">СЕРИАЛА</span>
        </h2>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
          Детали, которые делают «Цикады» ещё интереснее.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {facts.map((fact, index) => (
          <motion.div
            key={fact.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="group relative p-7 rounded-2xl border border-white/10 bg-card hover:border-primary/50 transition-colors duration-300"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center mb-5 group-hover:bg-primary/25 transition-colors">
              <Icon name={fact.icon} size={24} className="text-primary" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">{fact.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{fact.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
