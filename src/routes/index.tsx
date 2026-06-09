import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  Scissors, Palette, Sparkles, Heart, Crown, Eye,
  Star, Phone, MapPin, Clock, Menu, X,
} from "lucide-react";
import heroImg from "@/assets/hero-salon.jpg";
import aboutImg from "@/assets/about-salon.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "La Perla – Hair Styling & Kosmetik in Bendorf-Mülhofen" },
      { name: "description", content: "Eleganter Friseursalon & Kosmetikstudio in Bendorf-Mülhofen. Haarschnitt, Coloration, Kosmetik, Wimpern & mehr. Termin: 02622 902546." },
    ],
  }),
  component: Index,
});

const PHONE = "02622 902546";
const PHONE_LINK = "tel:+4926229025460".replace(/0$/, "");

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("animate-fade-up");
            (e.target as HTMLElement).style.opacity = "1";
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    els.forEach((el) => {
      el.style.opacity = "0";
      io.observe(el);
    });
    return () => io.disconnect();
  }, []);
}

function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    h();
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);
  const links = [
    { href: "#ueber", label: "Über uns" },
    { href: "#leistungen", label: "Leistungen" },
    { href: "#bewertungen", label: "Bewertungen" },
    { href: "#kontakt", label: "Kontakt" },
  ];
  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/90 backdrop-blur-lg shadow-elegant" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        <a href="#hero" className="flex flex-col leading-none">
          <span className="font-script text-3xl text-gradient-gold">La Perla</span>
          <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground -mt-1">
            Hair & Kosmetik
          </span>
        </a>
        <ul className="hidden md:flex items-center gap-9 text-sm">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-foreground/80 hover:text-primary transition-colors tracking-wide"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={PHONE_LINK}
              className="bg-gradient-gold text-charcoal px-5 py-2.5 rounded-full text-sm font-medium tracking-wide shadow-gold hover:scale-105 transition-transform inline-flex items-center gap-2"
            >
              <Phone className="w-4 h-4" /> Termin buchen
            </a>
          </li>
        </ul>
        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Menü"
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      {open && (
        <div className="md:hidden bg-background/95 backdrop-blur-lg border-t border-border">
          <ul className="px-6 py-6 space-y-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 text-foreground/80 hover:text-primary"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={PHONE_LINK}
                className="block text-center bg-gradient-gold text-charcoal px-5 py-3 rounded-full font-medium"
              >
                Termin buchen
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="La Perla Salon Interior"
          className="w-full h-full object-cover"
          width={1920}
          height={1280}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/80 via-charcoal/50 to-charcoal/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-32 pb-20 w-full">
        <div className="max-w-2xl animate-fade-in">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-12 bg-primary" />
            <span className="text-primary text-xs tracking-[0.4em] uppercase">
              Bendorf-Mülhofen
            </span>
          </div>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-pearl leading-[1.05] mb-8">
            Schönheit ist <em className="font-script text-gradient-gold not-italic block text-6xl md:text-8xl lg:text-9xl my-2">kein Zufall</em>
            <span className="block text-3xl md:text-5xl lg:text-6xl mt-4 text-pearl/90">sie entsteht bei uns.</span>
          </h1>
          <p className="text-pearl/80 text-lg md:text-xl mb-10 max-w-lg font-light">
            Ihr Friseursalon & Kosmetikstudio – wo italienisches Flair auf
            handwerkliche Perfektion trifft.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href={PHONE_LINK}
              className="bg-gradient-gold text-charcoal px-8 py-4 rounded-full font-medium tracking-wide shadow-gold hover:scale-105 transition-transform inline-flex items-center gap-3"
            >
              <Phone className="w-5 h-5" /> Jetzt Termin vereinbaren
            </a>
            <a
              href="#leistungen"
              className="border border-pearl/40 text-pearl px-8 py-4 rounded-full font-medium tracking-wide hover:bg-pearl/10 transition-colors"
            >
              Unsere Leistungen
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-pearl/60 text-xs tracking-[0.3em] uppercase animate-pulse">
        Scroll
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="ueber" className="py-28 md:py-40 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
        <div data-reveal className="relative">
          <div className="absolute -top-6 -left-6 w-24 h-24 border border-primary/40 rounded-full" />
          <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-gradient-gold opacity-20 rounded-full blur-3xl" />
          <img
            src={aboutImg}
            alt="Eleganter Look aus dem Salon La Perla"
            loading="lazy"
            width={1280}
            height={1280}
            className="relative rounded-sm shadow-elegant w-full h-[500px] object-cover"
          />
          <div className="absolute -bottom-6 -left-6 bg-background px-6 py-4 rounded-sm shadow-elegant flex items-center gap-3">
            <Scissors className="w-8 h-8 text-primary" />
            <div>
              <div className="font-display text-2xl">20+</div>
              <div className="text-xs text-muted-foreground tracking-wider uppercase">Jahre Erfahrung</div>
            </div>
          </div>
        </div>
        <div data-reveal>
          <span className="text-primary text-xs tracking-[0.4em] uppercase mb-4 block">
            Über La Perla
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mb-8 leading-tight">
            Ein Ort, an dem Sie
            <span className="text-gradient-gold font-script block text-5xl md:text-7xl my-2">aufblühen.</span>
          </h2>
          <div className="space-y-5 text-foreground/75 text-lg leading-relaxed font-light">
            <p>
              Im Herzen von Bendorf-Mülhofen empfängt Sie Frau Dös mit ihrem
              Team in einer Atmosphäre, die Wohlfühlen und Eleganz vereint.
              Mit Leidenschaft, Präzision und einem aufrichtigen Lächeln
              verwandeln wir jeden Besuch in ein kleines Ritual.
            </p>
            <p>
              Ob klassischer Haarschnitt, individuelle Coloration oder
              entspannende Kosmetikbehandlung – bei uns stehen Sie im
              Mittelpunkt. Professionelle Beratung, herzlicher Service und
              ein Preis-Leistungs-Verhältnis, das seinesgleichen sucht.
            </p>
          </div>
          <div className="mt-10 flex items-center gap-8">
            <div className="flex items-center gap-3">
              <Sparkles className="w-5 h-5 text-primary" />
              <span className="text-sm tracking-wider">Wohlfühlatmosphäre</span>
            </div>
            <div className="flex items-center gap-3">
              <Heart className="w-5 h-5 text-primary" />
              <span className="text-sm tracking-wider">Persönliche Beratung</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const services = [
  { icon: Scissors, title: "Haarschnitt", desc: "Damen, Herren & Kinder – präzise Schnitte, die Ihre Persönlichkeit unterstreichen." },
  { icon: Palette, title: "Coloration & Highlights", desc: "Von dezenten Nuancen bis zu mutigen Farbstatements – mit hochwertigen Produkten." },
  { icon: Sparkles, title: "Haarpflege & Treatments", desc: "Intensivpflege für seidigen Glanz, Geschmeidigkeit und Vitalität Ihres Haares." },
  { icon: Heart, title: "Kosmetik & Gesichtspflege", desc: "Maßgeschneiderte Behandlungen für strahlende, gepflegte und entspannte Haut." },
  { icon: Crown, title: "Styling & Festfrisuren", desc: "Hochsteckfrisuren und Stylings für Hochzeiten, Galas und besondere Momente." },
  { icon: Eye, title: "Wimpern & Augenbrauen", desc: "Färben, Formen und Verlängern – für einen ausdrucksstarken Blick." },
];

function Services() {
  return (
    <section id="leistungen" className="py-28 md:py-40 bg-gradient-pearl relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto mb-20" data-reveal>
          <span className="text-primary text-xs tracking-[0.4em] uppercase mb-4 block">
            Leistungen
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mb-6">
            Handwerk trifft <span className="font-script text-gradient-gold">Hingabe</span>
          </h2>
          <p className="text-muted-foreground text-lg font-light">
            Vom ersten Schnitt bis zum letzten Pinselstrich – jedes Detail
            durchdacht, jedes Resultat unvergesslich.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div
              key={s.title}
              data-reveal
              style={{ animationDelay: `${i * 80}ms` }}
              className="group bg-card border border-border rounded-sm p-10 hover:shadow-elegant transition-all duration-500 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-full bg-gradient-gold flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <s.icon className="w-6 h-6 text-charcoal" />
              </div>
              <h3 className="font-display text-2xl mb-3">{s.title}</h3>
              <p className="text-muted-foreground leading-relaxed font-light">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const reviews = [
  {
    text: "Der Friseursalon von Frau Dös ist einfach fantastisch! Das Personal war äußerst professionell und freundlich – ich fühle mich rundum gut aufgehoben.",
    name: "Yaser Kus",
    source: "Google",
  },
  {
    text: "Absolut liebes und herzliches Team. Ich fühle mich dort immer sehr wohl und gehe mit einem Lächeln nach Hause.",
    name: "Mine",
    source: "Google",
  },
  {
    text: "Super freundlich und kompetent. Zudem ein Preis-Leistungs-Verhältnis, das seinesgleichen sucht.",
    name: "Gast",
    source: "golocal",
  },
];

function Reviews() {
  return (
    <section id="bewertungen" className="py-28 md:py-40">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-20" data-reveal>
          <span className="text-primary text-xs tracking-[0.4em] uppercase mb-4 block">
            Kundenstimmen
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mb-8">
            Was unsere Gäste <span className="font-script text-gradient-gold">sagen</span>
          </h2>
          <div className="inline-flex items-center gap-4 bg-card border border-border rounded-full px-8 py-4 shadow-elegant">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-primary text-primary" />
              ))}
            </div>
            <div className="text-left">
              <div className="font-display text-2xl leading-none">4,9 / 5</div>
              <div className="text-xs text-muted-foreground tracking-wider">aus 66 Google-Bewertungen</div>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <div
              key={i}
              data-reveal
              style={{ animationDelay: `${i * 100}ms` }}
              className="bg-card border border-border rounded-sm p-10 relative hover:shadow-elegant transition-shadow"
            >
              <div className="absolute -top-4 left-8 font-display text-6xl text-primary leading-none">"</div>
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground/80 leading-relaxed font-light mb-6 italic">
                {r.text}
              </p>
              <div className="pt-5 border-t border-border">
                <div className="font-display text-lg">{r.name}</div>
                <div className="text-xs text-muted-foreground tracking-wider uppercase">via {r.source}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const hours = [
  { d: "Montag", h: "Geschlossen", closed: true },
  { d: "Dienstag", h: "Geschlossen", closed: true },
  { d: "Mittwoch", h: "08:00 – 18:00" },
  { d: "Donnerstag", h: "08:00 – 18:00" },
  { d: "Freitag", h: "08:00 – 18:00" },
  { d: "Samstag", h: "08:00 – 14:00" },
  { d: "Sonntag", h: "Geschlossen", closed: true },
];

function Contact() {
  return (
    <section id="kontakt" className="py-28 md:py-40 bg-charcoal text-pearl relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-gold opacity-10 rounded-full blur-3xl" />
      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative">
        <div className="text-center mb-16" data-reveal>
          <span className="text-primary text-xs tracking-[0.4em] uppercase mb-4 block">
            Besuchen Sie uns
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl">
            Öffnungszeiten & <span className="font-script text-gradient-gold">Kontakt</span>
          </h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <div data-reveal>
            <div className="flex items-center gap-3 mb-8">
              <Clock className="w-5 h-5 text-primary" />
              <h3 className="font-display text-2xl">Öffnungszeiten</h3>
            </div>
            <ul className="space-y-1">
              {hours.map((row) => (
                <li
                  key={row.d}
                  className="flex justify-between items-center py-4 border-b border-pearl/15"
                >
                  <span className="tracking-wide">{row.d}</span>
                  <span className={row.closed ? "text-pearl/50 font-light" : "text-primary"}>
                    {row.h}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div data-reveal className="space-y-10">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-5 h-5 text-primary" />
                <h3 className="font-display text-2xl">Adresse</h3>
              </div>
              <p className="text-pearl/80 text-lg font-light leading-relaxed">
                La Perla Hair Styling & Kosmetik<br />
                Hüttenstraße 23<br />
                56170 Bendorf-Mülhofen
              </p>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Phone className="w-5 h-5 text-primary" />
                <h3 className="font-display text-2xl">Telefon</h3>
              </div>
              <a href={PHONE_LINK} className="text-pearl/80 text-lg hover:text-primary transition-colors">
                {PHONE}
              </a>
            </div>
            <a
              href={PHONE_LINK}
              className="inline-flex items-center gap-3 bg-gradient-gold text-charcoal px-8 py-4 rounded-full font-medium tracking-wide shadow-gold hover:scale-105 transition-transform"
            >
              <Phone className="w-5 h-5" /> Jetzt anrufen
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Map() {
  return (
    <section className="relative">
      <div className="h-[500px] w-full">
        <iframe
          title="Standort La Perla Bendorf-Mülhofen"
          src="https://www.google.com/maps?q=H%C3%BCttenstra%C3%9Fe+23,+56170+Bendorf-M%C3%BClhofen&output=embed"
          className="w-full h-full border-0 grayscale-[30%]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-charcoal text-pearl/70 pt-20 pb-10 border-t border-pearl/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-12">
          <div className="font-script text-5xl text-gradient-gold mb-2">La Perla</div>
          <div className="text-[10px] tracking-[0.4em] uppercase text-pearl/60 mb-6">
            Hair Styling & Kosmetik
          </div>
          <p className="font-display text-xl italic text-pearl/80 max-w-xl mx-auto">
            „Ihr Wohlfühlsalon in Bendorf – weil Sie es verdienen."
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-10 border-t border-pearl/10 text-sm">
          <div className="flex gap-8">
            <Link to="/impressum" className="hover:text-primary transition-colors">Impressum</Link>
            <Link to="/datenschutz" className="hover:text-primary transition-colors">Datenschutz</Link>
          </div>
          <div className="text-pearl/50">
            © {new Date().getFullYear()} La Perla Hair Styling & Kosmetik
          </div>
        </div>
      </div>
    </footer>
  );
}

function Index() {
  useReveal();
  return (
    <main className="min-h-screen bg-background">
      <Nav />
      <Hero />
      <About />
      <Services />
      <Reviews />
      <Contact />
      <Map />
      <Footer />
    </main>
  );
}
