import { Link } from "react-router-dom";

export const Footer = () => (
  <footer className="border-t border-border/50 mt-32">
    <div className="container-wide py-16 grid md:grid-cols-4 gap-12">
      <div className="md:col-span-2">
        <div className="flex items-center gap-2 mb-4">
          <span className="h-8 w-8 rounded-full bg-gradient-sahel grain" />
          <span className="font-serif text-xl">Africaviwo</span>
        </div>
        <p className="text-foreground/70 max-w-md leading-relaxed">
          Un espace pour célébrer les valeurs, les voix et les futurs de l'Afrique. Sans clichés, sans condescendance — juste la vérité d'un continent en mouvement.
        </p>
      </div>
      <div>
        <h4 className="font-serif text-lg mb-4">Explorer</h4>
        <ul className="space-y-2 text-sm text-foreground/70">
          <li><Link to="/valeurs" className="link-underline">Valeurs</Link></li>
          <li><Link to="/carte" className="link-underline">Carte</Link></li>
          <li><Link to="/blog" className="link-underline">Histoires</Link></li>
          <li><Link to="/voix" className="link-underline">Voix d'Afrique</Link></li>
        </ul>
      </div>
      <div>
        <h4 className="font-serif text-lg mb-4">Participer</h4>
        <ul className="space-y-2 text-sm text-foreground/70">
          <li><Link to="/mythes" className="link-underline">Mythes & Réalité</Link></li>
          <li><Link to="/contact" className="link-underline">Contribuer</Link></li>
        </ul>
      </div>
    </div>
    <div className="border-t border-border/50">
      <div className="container-wide py-6 flex flex-col md:flex-row justify-between gap-3 text-xs text-foreground/60">
        <span>© {new Date().getFullYear()} Africaviwo. Toutes les voix comptent.</span>
        <span className="font-serif italic">Nos racines. Nos valeurs. Notre futur.</span>
      </div>
    </div>
  </footer>
);
