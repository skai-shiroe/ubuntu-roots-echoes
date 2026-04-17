import { Quote as QuoteIcon } from "lucide-react";

export const Quote = ({ children, author, origin }: { children: React.ReactNode; author?: string; origin?: string }) => (
  <figure className="my-12 relative">
    <QuoteIcon className="absolute -top-2 -left-2 h-10 w-10 text-ember/30" />
    <blockquote className="font-serif text-2xl md:text-3xl leading-snug text-clay pl-8 italic text-balance">
      {children}
    </blockquote>
    {(author || origin) && (
      <figcaption className="mt-4 pl-8 text-sm text-foreground/60">
        {author && <span className="font-medium text-foreground/80">{author}</span>}
        {author && origin && <span> · </span>}
        {origin && <span className="italic">{origin}</span>}
      </figcaption>
    )}
  </figure>
);
