import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import type { CountryEntry } from "@/lib/content";

export const CountryCard = ({ country }: { country: CountryEntry }) => (
  <Link
    to={`/carte/${country.slug}`}
    className="group block bg-card border border-border/60 rounded-2xl p-6 hover:border-primary/40 hover:-translate-y-1 hover:shadow-warm transition-all duration-500"
  >
    <div className="flex items-start justify-between mb-4">
      <span className="text-4xl">{country.emoji}</span>
      <ArrowUpRight className="h-5 w-5 text-foreground/40 group-hover:text-primary transition-colors" />
    </div>
    <h3 className="font-serif text-xl mb-1">{country.name}</h3>
    <p className="text-xs uppercase tracking-wider text-foreground/50 mb-4">{country.region}</p>
    <div className="flex flex-wrap gap-1.5">
      {country.mainValues.slice(0, 3).map((v) => (
        <span key={v} className="text-xs px-2 py-0.5 rounded-full bg-accent/40 text-accent-foreground">
          {v}
        </span>
      ))}
    </div>
  </Link>
);
