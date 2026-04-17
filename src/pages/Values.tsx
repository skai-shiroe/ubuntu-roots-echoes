import { Layout } from "@/components/Layout";
import { ValueCard } from "@/components/ValueCard";
import { values } from "@/lib/content";

const Values = () => (
  <Layout>
    <section className="container-wide pt-24 pb-16">
      <div className="max-w-3xl">
        <div className="eyebrow mb-6">Les valeurs</div>
        <h1 className="display-xl text-balance mb-8">
          Quatre piliers,<br />
          <span className="italic text-primary">un même socle.</span>
        </h1>
        <p className="text-lg md:text-xl text-foreground/75 leading-relaxed">
          De la savane aux mégalopoles, ces principes structurent la manière dont les peuples d'Afrique se relient les uns aux autres. Explorez-les, ils vous parleront.
        </p>
      </div>
    </section>
    <section className="container-wide pb-32">
      <div className="grid sm:grid-cols-2 gap-8">
        {values.map((v, i) => (
          <ValueCard key={v.slug} value={v} index={i} />
        ))}
      </div>
    </section>
  </Layout>
);

export default Values;
