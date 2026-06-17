import { motion } from "framer-motion"
import Icon from "@/components/ui/icon"

interface Character {
  name: string
  actor: string
  role: string
  description: string
  gradient: string
  initial: string
  locked?: boolean
  appearsFrom?: string
}

const characters: Character[] = [
  {
    name: "Антон",
    actor: "Григорий Верник",
    role: "Богатый новенький",
    description:
      "Сын влиятельного бизнесмена. Закатывает вечеринки и привык получать всё, что хочет. Вокруг него закручивается главный конфликт.",
    gradient: "from-red-900 via-rose-800 to-black",
    initial: "А",
  },
  {
    name: "Алина",
    actor: "Софья Аржаных",
    role: "Тихая и замкнутая",
    description:
      "Загадочная девушка, которая неожиданно привлекает внимание Антона. За её молчанием скрывается куда больше, чем кажется.",
    gradient: "from-purple-900 via-indigo-800 to-black",
    initial: "А",
  },
  {
    name: "Марк",
    actor: "Илья Виногорский",
    role: "Наблюдатель",
    description:
      "Часть одной из центральных пар. Внимательно следит за происходящим вокруг — и знает больше остальных.",
    gradient: "from-slate-800 via-zinc-700 to-black",
    initial: "М",
  },
  {
    name: "Соня",
    actor: "Екатерина Воронина",
    role: "Девушка Марка",
    description:
      "Вторая половина центральной пары. Её отношения с Марком окажутся не такими простыми, как выглядят со стороны.",
    gradient: "from-rose-900 via-pink-800 to-black",
    initial: "С",
    locked: true,
    appearsFrom: "2 серии",
  },
  {
    name: "Алекс",
    actor: "Кирилл Буханцев",
    role: "Из небогатой семьи",
    description:
      "Парень, которому всё даётся трудом. Контраст с миром Антона создаёт напряжение, ведущее к развязке.",
    gradient: "from-emerald-900 via-teal-800 to-black",
    initial: "А",
    locked: true,
    appearsFrom: "2 серии",
  },
  {
    name: "Катя",
    actor: "Ирина Паутова",
    role: "Девушка Алекса",
    description:
      "Вместе с Алексом — пара из небогатых семей. Их история — про деньги, гордость и сложный выбор.",
    gradient: "from-amber-900 via-orange-800 to-black",
    initial: "К",
    locked: true,
    appearsFrom: "3 серии",
  },
  {
    name: "Сеня",
    actor: "Савелий Наумов",
    role: "Тихий «пухлик»",
    description:
      "Незаметный одноклассник, которого никто не воспринимает всерьёз. В финале именно он окажется убийцей.",
    gradient: "from-zinc-900 via-neutral-800 to-black",
    initial: "С",
    locked: true,
    appearsFrom: "финала",
  },
  {
    name: "Отец Антона",
    actor: "Евгений Стычкин",
    role: "Бизнесмен · режиссёр",
    description:
      "Влиятельный отец, чьи деньги решают многое. Сыграл сам режиссёр сериала Евгений Стычкин.",
    gradient: "from-red-950 via-red-900 to-black",
    initial: "О",
    locked: true,
    appearsFrom: "4 серии",
  },
]

export default function CharacterGallery() {
  return (
    <div className="container mx-auto px-6 relative z-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {characters.map((char, index) => (
          <motion.div
            key={char.name + index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-card"
          >
            {/* Portrait */}
            <div
              className={`relative aspect-[3/4] bg-gradient-to-br ${char.gradient} flex items-center justify-center`}
            >
              <span
                className={`text-8xl font-black text-white/20 ${
                  char.locked ? "blur-sm" : ""
                }`}
              >
                {char.initial}
              </span>

              {char.locked && (
                <div className="absolute inset-0 backdrop-blur-md bg-black/50 flex flex-col items-center justify-center gap-3 px-4 text-center">
                  <Icon name="Lock" size={32} className="text-primary" />
                  <p className="text-white font-semibold text-sm">
                    Появляется
                    <br />
                    <span className="text-primary">с {char.appearsFrom}</span>
                  </p>
                </div>
              )}
            </div>

            {/* Info */}
            <div className="p-5">
              <h3
                className={`text-xl font-bold text-white mb-1 ${
                  char.locked ? "blur-[3px] select-none" : ""
                }`}
              >
                {char.name}
              </h3>
              <p className="text-primary text-sm font-medium mb-3">{char.role}</p>
              <p
                className={`text-muted-foreground text-sm leading-relaxed mb-4 ${
                  char.locked ? "blur-[3px] select-none" : ""
                }`}
              >
                {char.description}
              </p>
              <div className="flex items-center gap-2 text-xs text-white/70 border-t border-white/10 pt-3">
                <Icon name="Clapperboard" size={14} className="text-primary" />
                <span>{char.actor}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
