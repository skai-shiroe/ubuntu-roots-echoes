import { Layout } from "@/components/Layout";
import { Hero } from "@/components/Hero";
import { ValueCard } from "@/components/ValueCard";
import { values, posts } from "@/lib/content";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import community from "@/assets/community.jpg";

const Index = () => {
  const recentPosts = posts.slice(0, 3);

  return (
    <Layout>
      <Hero />

      {/* Values preview */}
      <section className="container-wide py-24 md:py-32">
        <div className="grid md:grid-cols-12 gap-12 mb-16">
          <div className="md:col-span-5">
            <div className="eyebrow mb-6">Quatre piliers</div>
            <h2 className="display-lg text-balance">
              Des valeurs qui<br />
              <span className="italic text-primary">traversent les siècles.</span>
            </h2>
          </div>
          <div className="md:col-span-6 md:col-start-7 flex items-end">
            <p className="text-lg text-foreground/70 leading-relaxed">
              Solidarité, respect, communauté, sagesse. Quatre mots, mille variations selon les peuples, une seule colonne vertébrale partagée à travers le continent.
            </p>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <ValueCard key={v.slug} value={v} index={i} />
          ))}
        </div>
      </section>

      {/* Community split */}
      <section className="bg-clay text-bone grain">
        <div className="container-wide py-24 md:py-32 grid md:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-warm">
            <img
              src={community}
              alt="Communauté africaine intergénérationnelle"
              loading="lazy"
              width={1280}
              height={900}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <div className="eyebrow text-ember mb-6">Voix d'Afrique</div>
            <h2 className="display-lg mb-6 text-balance">
              Le continent ne se raconte pas. <span className="italic text-ember">Il se laisse écouter.</span>
            </h2>
            <p className="text-bone/80 text-lg leading-relaxed mb-8">
              Témoignages, portraits, réflexions. Des voix réelles d'entrepreneurs, artistes, anciens et jeunes — qui dessinent une Afrique loin des résumés faciles.
            </p>
            <Link
              to="/voix"
              className="inline-flex items-center gap-2 text-ember font-semibold link-underline"
            >
              Écouter les voix <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Recent stories */}
      <section className="container-wide py-24 md:py-32">
        <div className="flex flex-wrap items-end justify-between mb-16 gap-6">
          <div>
            <div className="eyebrow mb-6">Histoires récentes</div>
            <h2 className="display-lg text-balance max-w-2xl">
              Récits, analyses,<br />
              <span className="italic text-primary">portraits.</span>
            </h2>
          </div>
          <Link to="/blog" className="inline-flex items-center gap-2 font-semibold link-underline text-primary">
            Toutes les histoires <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {recentPosts.map((p) => (
            <Link
              key={p.slug}
              to={`/blog/${p.slug}`}
              className="group block"
            >
              <div className="aspect-[4/3] rounded-xl bg-gradient-sahel grain mb-5 overflow-hidden relative">
                <div className="absolute inset-0 flex items-end p-5">
                  <div className="flex gap-2">
                    {p.tags.slice(0, 2).map((t) => (
                      <span key={t} className="text-xs px-2 py-1 rounded-full bg-bone/20 text-bone backdrop-blur-sm">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <time className="text-xs uppercase tracking-wider text-foreground/50">
                {new Date(p.date).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })}
              </time>
              <h3 className="font-serif text-2xl mt-2 mb-3 group-hover:text-primary transition-colors text-balance">
                {p.title}
              </h3>
              <p className="text-foreground/70 leading-relaxed">{p.excerpt}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container-wide pb-24">
        <div className="rounded-3xl bg-gradient-sahel grain text-bone p-12 md:p-20 text-center shadow-warm">
          <h2 className="display-lg text-balance mb-6 max-w-3xl mx-auto">
            Une histoire à partager ? <span className="italic">Une voix à porter ?</span>
          </h2>
          <p className="text-bone/85 text-lg max-w-xl mx-auto mb-8">
            Ubuntu Roots se construit avec ses lecteurs. Contribuez à la fresque collective.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-bone text-clay px-8 py-3.5 rounded-full font-semibold hover:bg-gold transition-colors"
          >
            Contribuer
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
