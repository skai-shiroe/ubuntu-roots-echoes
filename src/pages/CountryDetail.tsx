import { useParams, Navigate } from "react-router-dom";
import { useEffect } from "react";
import { Layout } from "@/components/Layout";
import { ArticleLayout } from "@/components/ArticleLayout";
import { MDX } from "@/components/MDX";
import { getCountry } from "@/lib/content";

const CountryDetail = () => {
  const { slug } = useParams();
  const country = slug ? getCountry(slug) : undefined;

  useEffect(() => {
    if (country) document.title = `${country.name} — Ubuntu Roots`;
  }, [country]);

  if (!country) return <Navigate to="/carte" replace />;
  const Body = country.Component;

  return (
    <Layout>
      <ArticleLayout
        eyebrow={country.region}
        title={`${country.emoji} ${country.name}`}
        backTo={{ href: "/carte", label: "Retour à la carte" }}
        meta={
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <span><strong className="text-foreground/80">Capitale :</strong> {country.capital}</span>
            <span><strong className="text-foreground/80">Langue :</strong> {country.language}</span>
          </div>
        }
      >
        <div className="not-prose mb-10 grid sm:grid-cols-3 gap-3">
          {country.mainValues.map((v) => (
            <div key={v} className="rounded-xl border border-border p-4 bg-card">
              <div className="text-xs uppercase tracking-wider text-foreground/50 mb-1">Valeur</div>
              <div className="font-serif text-xl text-clay">{v}</div>
            </div>
          ))}
        </div>
        <blockquote className="not-prose font-serif text-2xl italic text-clay border-l-2 border-primary pl-6 mb-12">
          « {country.proverb} »
        </blockquote>
        <MDX>
          <Body />
        </MDX>
      </ArticleLayout>
    </Layout>
  );
};

export default CountryDetail;
