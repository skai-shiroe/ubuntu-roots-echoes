import { Layout } from "@/components/Layout";
import { Play } from "lucide-react";

const voices = [
  {
    name: "Amina Diop",
    role: "Designer · Dakar",
    quote: "On ne demande plus à l'Occident la permission de créer. On crée, et le monde regarde.",
    accent: "from-ember to-brick",
  },
  {
    name: "Kwame Mensah",
    role: "Entrepreneur · Accra",
    quote: "Mon grand-père cultivait le cacao. Moi je code des paiements mobiles. Même geste : nourrir la famille.",
    accent: "from-brick to-clay",
  },
  {
    name: "Naledi Khumalo",
    role: "Chercheuse · Johannesburg",
    quote: "L'Ubuntu n'est pas un slogan. C'est une méthode. On l'enseigne, on le pratique, on le défend.",
    accent: "from-gold to-ember",
  },
  {
    name: "Yacine Kebir",
    role: "Cinéaste · Alger",
    quote: "Filmer le Maghreb sans filtre exotique : voilà mon combat quotidien.",
    accent: "from-clay to-brick",
  },
  {
    name: "Aminata Traoré",
    role: "Écrivaine · Bamako",
    quote: "Les mots qu'on écrit aujourd'hui seront les proverbes que nos petits-enfants citeront demain.",
    accent: "from-ember to-gold",
  },
  {
    name: "Tendai Moyo",
    role: "Musicien · Harare",
    quote: "L'Afrique chante depuis toujours. Aujourd'hui, le monde entier danse.",
    accent: "from-brick to-ember",
  },
];

const Voices = () => (
  <Layout>
    <section className="container-wide pt-24 pb-12">
      <div className="max-w-3xl">
        <div className="eyebrow mb-6">Voix d'Afrique</div>
        <h1 className="display-xl text-balance mb-8">
          Six visages,<br />
          <span className="italic text-primary">une polyphonie.</span>
        </h1>
        <p className="text-lg md:text-xl text-foreground/75 leading-relaxed">
          Témoignages d'artistes, entrepreneurs, penseurs. Chaque voix est un fragment de l'Afrique vivante d'aujourd'hui.
        </p>
      </div>
    </section>

    <section className="container-wide pb-32">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {voices.map((v, i) => (
          <article
            key={v.name}
            className="group relative aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer animate-fade-in"
            style={{ animationDelay: `${i * 80}ms` }}
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${v.accent} grain`} />
            <div className="absolute inset-0 bg-gradient-to-t from-clay/90 via-clay/30 to-transparent" />
            <div className="absolute top-4 right-4 h-12 w-12 rounded-full bg-bone/20 backdrop-blur-md flex items-center justify-center text-bone group-hover:bg-bone group-hover:text-clay transition-all">
              <Play className="h-4 w-4 ml-0.5" fill="currentColor" />
            </div>
            <div className="absolute inset-x-0 bottom-0 p-6 text-bone">
              <blockquote className="font-serif italic text-lg leading-snug mb-4 text-balance">
                « {v.quote} »
              </blockquote>
              <div className="border-t border-bone/20 pt-3">
                <div className="font-semibold">{v.name}</div>
                <div className="text-xs text-bone/70">{v.role}</div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  </Layout>
);

export default Voices;
