import { Layout } from "@/components/Layout";
import { useState } from "react";
import { Send, CheckCircle2, Mail } from "lucide-react";

const Contact = () => {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <Layout>
      <section className="container-wide pt-24 pb-32">
        <div className="grid md:grid-cols-12 gap-16">
          <div className="md:col-span-5">
            <div className="eyebrow mb-6">Contribuer</div>
            <h1 className="display-lg text-balance mb-6">
              Une voix,<br />
              <span className="italic text-primary">une histoire,<br />une racine.</span>
            </h1>
            <p className="text-foreground/75 text-lg leading-relaxed mb-8">
              Africaviwo se nourrit de récits réels. Partagez le vôtre — proverbe de famille, portrait, idée d'article. Nous lisons tout.
            </p>
            <a href="mailto:hello@ubunturoots.org" className="inline-flex items-center gap-2 text-primary font-semibold link-underline">
              <Mail className="h-4 w-4" />
              hello@ubunturoots.org
            </a>
          </div>

          <div className="md:col-span-7">
            <div className="rounded-2xl bg-card border border-border/60 p-8 md:p-10 shadow-soft">
              {sent ? (
                <div className="text-center py-12 animate-fade-in">
                  <CheckCircle2 className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-serif text-2xl mb-2">Message reçu, merci.</h3>
                  <p className="text-foreground/70">Nous reviendrons vers vous très bientôt.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <label className="block">
                      <span className="text-xs uppercase tracking-wider text-foreground/60 font-semibold">Nom</span>
                      <input required type="text" className="mt-2 w-full bg-background border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors" />
                    </label>
                    <label className="block">
                      <span className="text-xs uppercase tracking-wider text-foreground/60 font-semibold">E-mail</span>
                      <input required type="email" className="mt-2 w-full bg-background border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors" />
                    </label>
                  </div>
                  <label className="block">
                    <span className="text-xs uppercase tracking-wider text-foreground/60 font-semibold">Sujet</span>
                    <input required type="text" placeholder="Un proverbe, une idée, un témoignage…" className="mt-2 w-full bg-background border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors" />
                  </label>
                  <label className="block">
                    <span className="text-xs uppercase tracking-wider text-foreground/60 font-semibold">Votre message</span>
                    <textarea required rows={6} className="mt-2 w-full bg-background border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors resize-none" />
                  </label>
                  <button type="submit" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold hover:bg-clay transition-colors">
                    Envoyer <Send className="h-4 w-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
