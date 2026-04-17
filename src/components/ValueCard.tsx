import { Link } from "react-router-dom";
import * as Icons from "lucide-react";
import type { ValueEntry } from "@/lib/content";

export const ValueCard = ({ value, index = 0 }: { value: ValueEntry; index?: number }) => {
  const Icon = (Icons as any)[value.icon] ?? Icons.Sparkles;
  return (
    <Link
      to={`/valeurs/${value.slug}`}
      className="group relative block bg-card border border-border/60 rounded-2xl p-8 hover:border-primary/40 hover:shadow-warm transition-all duration-500 overflow-hidden"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <div className="absolute inset-0 bg-gradient-sahel opacity-0 group-hover:opacity-[0.04] transition-opacity duration-500" />
      <div className="relative">
        <div className="flex items-start justify-between mb-6">
          <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
            <Icon className="h-5 w-5" />
          </div>
          <span className="text-xs font-mono text-foreground/40">0{value.order}</span>
        </div>
        <h3 className="font-serif text-2xl md:text-3xl mb-3">{value.title}</h3>
        <p className="text-foreground/70 leading-relaxed mb-6">{value.summary}</p>
        <blockquote className="border-l-2 border-ember/60 pl-4 italic text-sm text-foreground/80">
          « {value.proverb} »
          <footer className="not-italic mt-1 text-xs text-foreground/50">— {value.proverbOrigin}</footer>
        </blockquote>
        <div className="mt-6 flex items-center gap-2 text-primary font-medium text-sm">
          <span className="link-underline">Découvrir</span>
          <Icons.ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </div>
      </div>
    </Link>
  );
};
