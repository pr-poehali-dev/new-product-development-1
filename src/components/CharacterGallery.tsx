import { motion } from "framer-motion"
import Icon from "@/components/ui/icon"

interface Character {
  name: string
  actor: string
  role: string
  description: string
  photo: string
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
    photo: "https://cdn.poehali.dev/projects/87640017-3bee-4b53-a485-85924f43b28f/files/87d3f0ae-e6bf-4d3a-bb5e-aa25b99fb6be.jpg",
  },
  {
    name: "Алина",
    actor: "Софья Аржаных",
    role: "Тихая и замкнутая",
    description:
      "Загадочная девушка, которая неожиданно привлекает внимание Антона. За её молчанием скрывается куда больше, чем кажется.",
    photo: "https://cdn.poehali.dev/projects/87640017-3bee-4b53-a485-85924f43b28f/files/91e08344-fec5-4862-b785-3d04b80dfe26.jpg",
  },
  {
    name: "Марк",
    actor: "Илья Виногорский",
    role: "Наблюдатель",
    description:
      "Часть одной из центральных пар. Внимательно следит за происходящим вокруг — и знает больше остальных.",
    photo: "https://cdn.poehali.dev/projects/87640017-3bee-4b53-a485-85924f43b28f/files/9568af8c-b6dc-4e37-a036-137922d1b640.jpg",
  },
  {
    name: "Соня",
    actor: "Екатерина Воронина",
    role: "Девушка Марка",
    description:
      "Вторая половина центральной пары. Её отношения с Марком окажутся не такими простыми, как выглядят со стороны.",
    photo: "https://cdn.poehali.dev/projects/87640017-3bee-4b53-a485-85924f43b28f/files/7f9e6cfd-8349-4fce-bbce-af9ba099471d.jpg",
    locked: true,
    appearsFrom: "2 серии",
  },
  {
    name: "Алекс",
    actor: "Кирилл Буханцев",
    role: "Из небогатой семьи",
    description:
      "Парень, которому всё даётся трудом. Контраст с миром Антона создаёт напряжение, ведущее к развязке.",
    photo: "https://cdn.poehali.dev/projects/87640017-3bee-4b53-a485-85924f43b28f/files/f4beccc9-5ab2-43a2-823f-a7a68d37b900.jpg",
    locked: true,
    appearsFrom: "2 серии",
  },
  {
    name: "Катя",
    actor: "Ирина Паутова",
    role: "Девушка Алекса",
    description:
      "Вместе с Алексом — пара из небогатых семей. Их история — про деньги, гордость и сложный выбор.",
    photo: "https://cdn.poehali.dev/projects/87640017-3bee-4b53-a485-85924f43b28f/files/ad049000-5702-46a9-95c3-114848e30baf.jpg",
    locked: true,
    appearsFrom: "3 серии",
  },
  {
    name: "Сеня",
    actor: "Савелий Наумов",
    role: "Тихий «пухлик»",
    description:
      "Незаметный одноклассник, которого никто не воспринимает всерьёз. В финале именно он окажется убийцей.",
    photo: "https://cdn.poehali.dev/projects/87640017-3bee-4b53-a485-85924f43b28f/files/e5f970d3-b18c-48b2-9d2e-3ade38d756dd.jpg",
    locked: true,
    appearsFrom: "финала",
  },
  {
    name: "Отец Антона",
    actor: "Евгений Стычкин",
    role: "Бизнесмен · режиссёр",
    description:
      "Влиятельный отец, чьи деньги решают многое. Сыграл сам режиссёр сериала Евгений Стычкин.",
    photo: "https://cdn.poehali.dev/projects/87640017-3bee-4b53-a485-85924f43b28f/files/34f02342-b996-45dc-a8f1-7ada48131dca.jpg",
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
            <div className="relative aspect-[3/4] overflow-hidden bg-black">
              <img
                src={char.photo}
                alt={char.name}
                className={`w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105 ${
                  char.locked ? "blur-md scale-105" : ""
                }`}
              />

              {/* Gradient overlay at bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {char.locked && (
                <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center gap-3 px-4 text-center">
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
