import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Layout } from "@/components/Layout";
import { ArrowLeft, Compass } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 — Route introuvable :", location.pathname);
  }, [location.pathname]);

  return (
    <Layout>
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background grain */}
        <div className="absolute inset-0 bg-gradient-warm grain" />

        <div className="relative container-wide text-center py-24 animate-fade-in">
          <div className="max-w-lg mx-auto">
            {/* Large 404 */}
            <h1 className="display-xl text-clay/20 select-none mb-2">
              404
            </h1>

            {/* Icon */}
            <div className="flex justify-center mb-6">
              <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                <Compass className="h-7 w-7" />
              </div>
            </div>

            {/* Title */}
            <h2 className="font-serif text-3xl md:text-4xl text-clay mb-4 text-balance">
              Le chemin que tu cherches<br />
              <span className="italic text-primary">n'existe pas...</span>
            </h2>

            {/* Subtitle */}
            <p className="text-foreground/70 text-lg leading-relaxed mb-10 max-w-md mx-auto">
              Mais les racines, elles, sont bien là. Parfois, perdre son chemin est la meilleure façon d'en trouver un nouveau.
            </p>

            {/* CTA */}
            <Link
              to="/"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-full font-semibold hover:bg-clay transition-colors shadow-warm group"
            >
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Retour à l'accueil
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;