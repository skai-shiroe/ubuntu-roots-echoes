import { Link } from "react-router-dom";
import { ArrowRight, Map, BookOpen, Sparkles } from "lucide-react";
import heroPortrait from "@/assets/hero-portrait.jpg";

export const Hero = () => (
  <section className="relative min-h-[92vh] overflow-hidden bg-clay text-bone grain">
    {/* Background image */}
    <div className="absolute inset-0">
      <img
        src={heroPortrait}
        alt="Portrait moderne d'une jeune femme africaine au coucher du soleil"
        className="w-full h-full object-cover object-[60%_30%] opacity-70 animate-ken-burns"
        width={1280}
        height={1600}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-clay via-clay/80 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-clay via-transparent to-transparent" />
    </div>

    <div className="relative container-wide pt-32 pb-20 md:pt-40 md:pb-32 grid md:grid-cols-12 gap-8 min-h-[92vh] items-end">
      <div className="md:col-span-8 lg:col-span-7">
        <div className="eyebrow text-ember mb-6 animate-fade-in">Africaviwo</div>
        <h1 className="display-xl text-balance mb-6 animate-slide-up [animation-delay:120ms]">
          Nos racines.<br />
          <span className="italic text-ember">Nos valeurs.</span><br />
          Notre futur.
        </h1>
        <p className="max-w-xl text-lg md:text-xl text-bone/80 leading-relaxed mb-10 animate-slide-up [animation-delay:280ms]">
          Une exploration moderne, sincère et sans clichés des cultures, des sagesses et des élans qui font l'Afrique d'aujourd'hui.
        </p>
        <div className="flex flex-wrap gap-4 animate-slide-up [animation-delay:440ms]">
          <Link
            to="/valeurs"
            className="group inline-flex items-center gap-2 bg-ember text-clay px-6 py-3 rounded-full font-semibold hover:bg-gold transition-colors shadow-warm"
          >
            <Sparkles className="h-4 w-4" />
            Explorer les valeurs
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            to="/carte"
            className="group inline-flex items-center gap-2 bg-bone/10 text-bone border border-bone/30 px-6 py-3 rounded-full font-medium hover:bg-bone/20 transition-colors backdrop-blur-sm"
          >
            <Map className="h-4 w-4" />
            Voir la carte
          </Link>
          <Link
            to="/blog"
            className="group inline-flex items-center gap-2 text-bone px-6 py-3 rounded-full font-medium hover:text-ember transition-colors"
          >
            <BookOpen className="h-4 w-4" />
            Découvrir les histoires
          </Link>
        </div>
      </div>
    </div>

    {/* Bottom marquee */}
    <div className="absolute bottom-0 left-0 right-0 border-t border-bone/10 bg-clay/60 backdrop-blur-sm overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap py-4">
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex items-center gap-12 pr-12 font-serif italic text-bone/60 text-sm md:text-base">
            <span>Teranga</span><span>·</span>
            <span>Ubuntu</span><span>·</span>
            <span>Harambee</span><span>·</span>
            <span>Sankofa</span><span>·</span>
            <span>Ujamaa</span><span>·</span>
            <span>Imani</span><span>·</span>
            <span>Heshima</span><span>·</span>
            <span>Asili</span><span>·</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);
