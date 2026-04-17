import { Layout } from "@/components/Layout";
import { posts } from "@/lib/content";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const Blog = () => (
  <Layout>
    <section className="container-wide pt-24 pb-16">
      <div className="max-w-3xl">
        <div className="eyebrow mb-6">Histoires</div>
        <h1 className="display-xl text-balance mb-8">
          Récits d'une Afrique<br />
          <span className="italic text-primary">qui s'écrit au présent.</span>
        </h1>
        <p className="text-lg md:text-xl text-foreground/75 leading-relaxed">
          Analyses, portraits, réflexions. Une bibliothèque vivante pour penser le continent autrement.
        </p>
      </div>
    </section>

    <section className="container-wide pb-32">
      <div className="grid gap-8">
        {posts.map((p, i) => (
          <Link
            key={p.slug}
            to={`/blog/${p.slug}`}
            className="group grid md:grid-cols-12 gap-8 items-start py-10 border-t border-border/60 hover:border-primary/40 transition-colors"
          >
            <div className="md:col-span-2 text-sm">
              <time className="text-foreground/50 uppercase tracking-wider text-xs">
                {new Date(p.date).toLocaleDateString("fr-FR", { day: "numeric", month: "short", year: "numeric" })}
              </time>
              <div className="text-foreground/40 text-xs mt-1">{p.readingTime} min</div>
            </div>
            <div className="md:col-span-8">
              <h2 className="font-serif text-3xl md:text-4xl text-balance group-hover:text-primary transition-colors mb-3">
                {p.title}
              </h2>
              <p className="text-foreground/70 leading-relaxed text-lg mb-4">{p.excerpt}</p>
              <div className="flex items-center gap-3 text-sm text-foreground/60">
                <span>{p.author}</span>
                <span>·</span>
                <div className="flex gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="text-xs px-2 py-0.5 rounded-full bg-accent/40 text-accent-foreground">{t}</span>
                  ))}
                </div>
              </div>
            </div>
            <div className="md:col-span-2 flex md:justify-end">
              <ArrowUpRight className="h-6 w-6 text-foreground/40 group-hover:text-primary group-hover:-translate-y-1 group-hover:translate-x-1 transition-all" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  </Layout>
);

export default Blog;
