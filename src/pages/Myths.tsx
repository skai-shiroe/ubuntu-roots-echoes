import { Layout } from "@/components/Layout";
import { X, Check } from "lucide-react";

const items = [
  {
    myth: "L'Afrique, c'est un seul pays.",
    reality: "54 États, plus de 2 000 langues, des cultures aussi distinctes que celles de la Norvège et du Japon.",
  },
  {
    myth: "L'Afrique est en retard technologique.",
    reality: "Le mobile money y est né. Le Kenya, le Nigeria et le Ghana mènent l'innovation fintech mondiale.",
  },
  {
    myth: "L'Afrique a besoin qu'on la sauve.",
    reality: "L'Afrique invente ses propres modèles. Elle attend des partenaires, pas des sauveurs.",
  },
  {
    myth: "L'Afrique vit dans le passé.",
    reality: "Médiane d'âge : 19 ans. C'est le continent le plus jeune et le plus tourné vers l'avenir.",
  },
  {
    myth: "La culture africaine se résume à des masques et des tambours.",
    reality: "Afrobeats domine les charts mondiaux. Nollywood produit plus de films que Hollywood. La création est explosive.",
  },
  {
    myth: "Tout le monde y vit dans la pauvreté.",
    reality: "Une classe moyenne de plusieurs centaines de millions de personnes émerge dans les grandes métropoles.",
  },
];

const Myths = () => (
  <Layout>
    <section className="container-wide pt-24 pb-12">
      <div className="max-w-3xl">
        <div className="eyebrow mb-6">Mythes & Réalité</div>
        <h1 className="display-xl text-balance mb-8">
          Démêler le vrai<br />
          <span className="italic text-primary">du déjà-vu.</span>
        </h1>
        <p className="text-lg md:text-xl text-foreground/75 leading-relaxed">
          Six idées reçues, six réalités. Pour reconstruire un regard juste sur le continent.
        </p>
      </div>
    </section>

    <section className="container-wide pb-32">
      <div className="space-y-6">
        {items.map((item, i) => (
          <div
            key={i}
            className="grid md:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-border/60 animate-fade-in"
            style={{ animationDelay: `${i * 60}ms` }}
          >
            <div className="bg-muted/50 p-8 md:p-10 border-b md:border-b-0 md:border-r border-border/60 relative">
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-foreground/50 mb-4">
                <X className="h-4 w-4 text-destructive" />
                Idée reçue
              </div>
              <p className="font-serif text-2xl text-foreground/80 italic line-through decoration-destructive/40 decoration-1 underline-offset-4">
                {item.myth}
              </p>
            </div>
            <div className="bg-card p-8 md:p-10 relative">
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-primary mb-4">
                <Check className="h-4 w-4" />
                Réalité
              </div>
              <p className="font-serif text-2xl text-clay leading-snug">
                {item.reality}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  </Layout>
);

export default Myths;
