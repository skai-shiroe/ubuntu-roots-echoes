import { Layout } from "@/components/Layout";
import { CountryCard } from "@/components/CountryCard";
import { countries } from "@/lib/content";
import africaMap from "@/assets/africa-map.jpg";

const Map = () => (
  <Layout>
    <section className="container-wide pt-24 pb-12">
      <div className="grid md:grid-cols-12 gap-12 items-end">
        <div className="md:col-span-7">
          <div className="eyebrow mb-6">L'Afrique en cartes</div>
          <h1 className="display-xl text-balance">
            Un continent,<br />
            <span className="italic text-primary">cinquante-quatre récits.</span>
          </h1>
        </div>
        <div className="md:col-span-5">
          <p className="text-lg text-foreground/75 leading-relaxed">
            Chaque pays porte ses propres valeurs, ses proverbes, ses élans culturels. Cliquez pour découvrir un fragment de cette mosaïque vivante.
          </p>
        </div>
      </div>
    </section>

    <section className="container-wide pb-12">
      <div className="rounded-3xl bg-gradient-warm grain p-8 md:p-12 flex justify-center">
        <img
          src={africaMap}
          alt="Carte stylisée de l'Afrique"
          loading="lazy"
          width={1200}
          height={1200}
          className="max-w-md w-full h-auto"
        />
      </div>
    </section>

    <section className="container-wide pb-32">
      <h2 className="font-serif text-3xl mb-8">Pays à explorer</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {countries.map((c) => (
          <CountryCard key={c.slug} country={c} />
        ))}
      </div>
    </section>
  </Layout>
);

export default Map;
