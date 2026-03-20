import { useState } from "react"
import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"

interface FAQ {
  question: string
  answer: string
}

const Index = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [email, setEmail] = useState("")

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const faqs: FAQ[] = [
    {
      question: "Кто может зарегистрироваться на платформе?",
      answer:
        "АгроФорум открыт для всех специалистов агропромышленного комплекса: агрономов, зоотехников, руководителей хозяйств, агрономов-консультантов, представителей поставщиков техники и удобрений, а также научных сотрудников в области сельского хозяйства.",
    },
    {
      question: "Как работают разделы форума?",
      answer:
        "Форум разделён по тематикам: растениеводство, животноводство, техника и оборудование, агрохимия, законодательство и субсидии, маркетинг продукции. В каждом разделе можно создавать темы, задавать вопросы, делиться опытом и получать ответы от коллег.",
    },
    {
      question: "Что такое каналы блогеров?",
      answer:
        "Это персональные страницы ведущих экспертов-аграриев, где они публикуют статьи, видеообзоры, результаты испытаний новых сортов и технологий. Вы можете подписаться на интересных авторов и получать их публикации в ленте.",
    },
    {
      question: "Как устроены чаты?",
      answer:
        "На платформе есть тематические групповые чаты по регионам и направлениям, а также возможность личной переписки с другими участниками. Чаты помогают оперативно решать вопросы и находить партнёров поблизости.",
    },
  ]

  const forumCategories: { icon: string; title: string; topics: number; color: string }[] = [
    { icon: "Sprout", title: "Растениеводство", topics: 1240, color: "from-green-700/40 to-green-900/20" },
    { icon: "Cow", title: "Животноводство", topics: 876, color: "from-emerald-700/40 to-emerald-900/20" },
    { icon: "Tractor", title: "Техника и оборудование", topics: 654, color: "from-lime-700/40 to-lime-900/20" },
    { icon: "FlaskConical", title: "Агрохимия и почвы", topics: 432, color: "from-green-600/40 to-green-800/20" },
    { icon: "FileText", title: "Субсидии и законы", topics: 318, color: "from-teal-700/40 to-teal-900/20" },
    { icon: "TrendingUp", title: "Сбыт и маркетинг", topics: 290, color: "from-emerald-600/40 to-emerald-800/20" },
  ]

  const bloggers = [
    { name: "Иван Петров", role: "Агроном, 20 лет опыта", followers: "12.4K", posts: 87, avatar: "🌾" },
    { name: "Мария Сидорова", role: "Эксперт по животноводству", followers: "8.7K", posts: 64, avatar: "🐄" },
    { name: "Алексей Громов", role: "Фермер, Краснодарский край", followers: "15.2K", posts: 112, avatar: "🚜" },
  ]

  const steps = [
    { num: "01", title: "Зарегистрируйтесь", desc: "Создайте профиль специалиста — укажите регион, направление и опыт работы" },
    { num: "02", title: "Выберите разделы", desc: "Подпишитесь на интересующие темы форума и каналы экспертов" },
    { num: "03", title: "Общайтесь", desc: "Задавайте вопросы, делитесь опытом и находите партнёров" },
    { num: "04", title: "Развивайтесь", desc: "Получайте актуальные знания и применяйте их в своём хозяйстве" },
  ]

  return (
    <div className="min-h-screen text-white" style={{ backgroundColor: "#0D1F0F" }}>
      {/* Hero Section */}
      <div className="relative min-h-screen">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1600&q=80)",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-green-950/70 to-[#0D1F0F]/95" />
        </div>

        {/* Navigation */}
        <nav className="relative z-10 flex items-center justify-between p-6">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full" style={{ background: "rgba(21,128,61,0.25)", border: "1px solid rgba(74,222,128,0.25)", backdropFilter: "blur(12px)" }}>
            <Icon name="Sprout" size={20} className="text-green-400" />
            <span className="font-semibold text-white">АгроФорум</span>
          </div>

          <div className="hidden md:flex items-center gap-1">
            {["Форум", "Чаты", "Блогеры", "Вопросы", "Контакты"].map((item) => (
              <a
                key={item}
                href="#"
                className="px-4 py-2 rounded-full hover:bg-green-900/40 transition-colors text-white/90"
                style={{ background: "rgba(0,0,0,0.3)", border: "1px solid rgba(74,222,128,0.15)", backdropFilter: "blur(12px)" }}
              >
                {item}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#"
              className="px-4 py-2 rounded-full text-white/90 hover:bg-green-900/40 transition-colors"
              style={{ background: "rgba(0,0,0,0.3)", border: "1px solid rgba(74,222,128,0.15)", backdropFilter: "blur(12px)" }}
            >
              Войти
            </a>
            <Button className="rounded-full px-6 font-semibold" style={{ background: "#16a34a", color: "white" }}>
              Присоединиться
            </Button>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-120px)] px-6 text-center">
          <div className="mb-6 px-4 py-2 rounded-full" style={{ background: "rgba(21,128,61,0.3)", border: "1px solid rgba(74,222,128,0.3)", backdropFilter: "blur(12px)" }}>
            <span className="text-sm font-medium text-green-300">Сообщество специалистов АПК России</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-balance leading-tight">
            Форум аграриев.<br />
            <span style={{ color: "#4ade80" }}>Знания. Опыт. Рост.</span>
          </h1>

          <p className="text-xl md:text-2xl text-white/80 max-w-4xl mb-12 leading-relaxed text-pretty">
            Объединяем агрономов, зоотехников и руководителей хозяйств. Обсуждайте технологии, делитесь опытом и находите партнёров по всей стране.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Button size="lg" className="rounded-full px-8 py-4 text-lg font-semibold" style={{ background: "#16a34a", color: "white" }}>
              Начать общение
            </Button>
            <Button
              size="lg"
              className="rounded-full px-8 py-4 text-lg border-0 text-white"
              style={{ background: "rgba(0,0,0,0.35)", border: "1px solid rgba(74,222,128,0.25)", backdropFilter: "blur(12px)" }}
            >
              Смотреть форум
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-white/70">
            <div className="flex items-center gap-2">
              <Icon name="Users" size={16} className="text-green-400" />
              <span>15 000+ участников</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="MessageSquare" size={16} className="text-green-400" />
              <span>50 000+ сообщений</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="MapPin" size={16} className="text-green-400" />
              <span>85 регионов России</span>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: "#4ade80" }}>Всё для работы аграрного сообщества</h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">Три ключевых инструмента на одной платформе</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="rounded-2xl p-8 text-center" style={{ background: "rgba(21,128,61,0.12)", border: "1px solid rgba(74,222,128,0.2)", backdropFilter: "blur(12px)" }}>
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl mb-6" style={{ background: "rgba(21,128,61,0.3)", border: "1px solid rgba(74,222,128,0.3)" }}>
                <Icon name="MessagesSquare" size={28} className="text-green-400" />
              </div>
              <h3 className="text-xl font-bold mb-4">Форум</h3>
              <p className="text-white/70 leading-relaxed">Тематические разделы по всем направлениям АПК. Задавайте вопросы, получайте ответы экспертов и делитесь опытом.</p>
            </div>

            <div className="rounded-2xl p-8 text-center" style={{ background: "rgba(21,128,61,0.12)", border: "1px solid rgba(74,222,128,0.2)", backdropFilter: "blur(12px)" }}>
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl mb-6" style={{ background: "rgba(21,128,61,0.3)", border: "1px solid rgba(74,222,128,0.3)" }}>
                <Icon name="MessageCircle" size={28} className="text-green-400" />
              </div>
              <h3 className="text-xl font-bold mb-4">Чаты</h3>
              <p className="text-white/70 leading-relaxed">Групповые чаты по регионам и направлениям, личные переписки. Оперативно решайте вопросы и находите партнёров рядом.</p>
            </div>

            <div className="rounded-2xl p-8 text-center" style={{ background: "rgba(21,128,61,0.12)", border: "1px solid rgba(74,222,128,0.2)", backdropFilter: "blur(12px)" }}>
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl mb-6" style={{ background: "rgba(21,128,61,0.3)", border: "1px solid rgba(74,222,128,0.3)" }}>
                <Icon name="Rss" size={28} className="text-green-400" />
              </div>
              <h3 className="text-xl font-bold mb-4">Каналы блогеров</h3>
              <p className="text-white/70 leading-relaxed">Экспертные публикации ведущих аграриев страны. Подпишитесь на авторов и получайте свежие материалы в ленте.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Forum Categories */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl p-12" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(74,222,128,0.1)", backdropFilter: "blur(12px)" }}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Разделы форума</h2>
              <p className="text-white/60 text-lg">Найдите свою тему и вступайте в обсуждение</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {forumCategories.map((cat) => (
                <div
                  key={cat.title}
                  className={`rounded-2xl p-6 cursor-pointer hover:scale-[1.02] transition-transform bg-gradient-to-br ${cat.color}`}
                  style={{ border: "1px solid rgba(74,222,128,0.15)" }}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: "rgba(21,128,61,0.4)" }}>
                      <Icon name={cat.icon} size={24} className="text-green-300" fallback="Folder" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">{cat.title}</h3>
                      <p className="text-white/50 text-sm">{cat.topics.toLocaleString()} тем</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Button className="rounded-full px-8 font-semibold" style={{ background: "#16a34a", color: "white" }}>
                Смотреть все разделы
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Bloggers Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Популярные блогеры</h2>
            <p className="text-white/60 text-lg">Эксперты, чьи знания уже помогли тысячам аграриев</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {bloggers.map((b) => (
              <div
                key={b.name}
                className="rounded-2xl p-8"
                style={{ background: "rgba(21,128,61,0.1)", border: "1px solid rgba(74,222,128,0.2)", backdropFilter: "blur(12px)" }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center text-3xl" style={{ background: "rgba(21,128,61,0.3)" }}>
                    {b.avatar}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{b.name}</h3>
                    <p className="text-white/60 text-sm">{b.role}</p>
                  </div>
                </div>
                <div className="flex justify-between text-sm mb-6">
                  <div className="text-center">
                    <p className="font-bold text-green-400 text-xl">{b.followers}</p>
                    <p className="text-white/50">подписчиков</p>
                  </div>
                  <div className="text-center">
                    <p className="font-bold text-green-400 text-xl">{b.posts}</p>
                    <p className="text-white/50">публикаций</p>
                  </div>
                </div>
                <Button variant="outline" className="w-full rounded-full border-green-700 text-green-300 hover:bg-green-900/30">
                  Подписаться
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl p-12" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(74,222,128,0.1)" }}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Как начать</h2>
              <p className="text-white/60 text-lg">Четыре простых шага до профессионального сообщества</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step) => (
                <div key={step.num} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 text-2xl font-bold" style={{ background: "rgba(21,128,61,0.3)", border: "1px solid rgba(74,222,128,0.3)", color: "#4ade80" }}>
                    {step.num}
                  </div>
                  <h3 className="font-bold text-xl mb-3">{step.title}</h3>
                  <p className="text-white/60 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Частые вопросы</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="rounded-2xl overflow-hidden"
                style={{ background: "rgba(21,128,61,0.1)", border: "1px solid rgba(74,222,128,0.2)" }}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-green-900/20 transition-colors"
                >
                  <span className="font-semibold text-lg pr-4">{faq.question}</span>
                  <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center" style={{ background: "rgba(21,128,61,0.4)" }}>
                    <Icon name={openFaq === index ? "Minus" : "Plus"} size={16} className="text-green-400" />
                  </div>
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6 text-white/70 leading-relaxed">{faq.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Newsletter */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="rounded-3xl p-12" style={{ background: "rgba(21,128,61,0.15)", border: "1px solid rgba(74,222,128,0.25)", backdropFilter: "blur(20px)" }}>
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-8" style={{ background: "rgba(21,128,61,0.4)" }}>
              <Icon name="Mail" size={32} className="text-green-400" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Подпишитесь на новости</h2>
            <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
              Получайте дайджест лучших материалов форума, советы экспертов и новости агропрома каждую неделю.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-4">
              <input
                type="email"
                placeholder="Ваш email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-3 rounded-full text-white placeholder:text-white/40 outline-none focus:ring-2 focus:ring-green-500"
                style={{ background: "rgba(0,0,0,0.4)", border: "1px solid rgba(74,222,128,0.25)" }}
              />
              <Button className="rounded-full px-6 font-semibold flex-shrink-0" style={{ background: "#16a34a", color: "white" }}>
                Подписаться
              </Button>
            </div>
            <p className="text-white/40 text-sm">Без спама. Отписаться можно в любой момент.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-12 px-6" style={{ borderTop: "1px solid rgba(74,222,128,0.1)" }}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Icon name="Sprout" size={20} className="text-green-400" />
            <span className="font-bold text-white">АгроФорум</span>
          </div>
          <div className="flex flex-wrap gap-6 text-white/50 text-sm">
            <a href="#" className="hover:text-white transition-colors">Форум</a>
            <a href="#" className="hover:text-white transition-colors">Чаты</a>
            <a href="#" className="hover:text-white transition-colors">Блогеры</a>
            <a href="#" className="hover:text-white transition-colors">Контакты</a>
            <a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a>
          </div>
          <p className="text-white/30 text-sm">© 2024 АгроФорум</p>
        </div>
      </footer>
    </div>
  )
}

export default Index