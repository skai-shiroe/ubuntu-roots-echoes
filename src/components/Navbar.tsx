import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/valeurs", label: "Valeurs" },
  { to: "/carte", label: "Carte" },
  { to: "/blog", label: "Histoires" },
  { to: "/voix", label: "Voix" },
  { to: "/mythes", label: "Mythes & Réalité" },
  { to: "/contact", label: "Contribuer" },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container-wide flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="h-8 w-8 rounded-full bg-gradient-sahel grain shadow-warm transition-transform group-hover:scale-110" />
          <span className="font-serif text-xl tracking-tight">Ubuntu Roots</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `text-sm font-medium link-underline transition-colors ${isActive ? "text-primary" : "text-foreground/70 hover:text-foreground"}`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
        <button
          className="md:hidden p-2"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border/50 bg-background animate-fade-in">
          <nav className="container-wide py-4 flex flex-col gap-3">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `text-base py-2 ${isActive ? "text-primary font-semibold" : "text-foreground/80"}`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};
