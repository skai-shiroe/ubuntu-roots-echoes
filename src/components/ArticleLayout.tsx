import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

type Props = {
  title: string;
  eyebrow?: string;
  meta?: ReactNode;
  backTo?: { href: string; label: string };
  children: ReactNode;
  hero?: ReactNode;
};

export const ArticleLayout = ({ title, eyebrow, meta, backTo, children, hero }: Props) => (
  <article className="pt-12 pb-24 animate-fade-in">
    <div className="container-prose">
      {backTo && (
        <Link to={backTo.href} className="inline-flex items-center gap-2 text-sm text-foreground/60 hover:text-primary mb-8 transition-colors">
          <ArrowLeft className="h-4 w-4" /> {backTo.label}
        </Link>
      )}
      {eyebrow && <div className="eyebrow mb-6">{eyebrow}</div>}
      <h1 className="display-lg text-balance mb-6">{title}</h1>
      {meta && <div className="text-sm text-foreground/60 mb-8">{meta}</div>}
    </div>
    {hero && <div className="my-12">{hero}</div>}
    <div className="container-prose prose-article">{children}</div>
  </article>
);
