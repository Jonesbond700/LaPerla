import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/impressum")({
  head: () => ({
    meta: [
      { title: "Impressum – La Perla Hair Styling & Kosmetik" },
      { name: "description", content: "Impressum von La Perla Hair Styling & Kosmetik, Hüttenstraße 23, 56170 Bendorf-Mülhofen." },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: "Impressum – La Perla Hair Styling & Kosmetik" },
      { property: "og:description", content: "Rechtliche Informationen gemäß § 5 DDG." },
    ],
  }),
  component: Impressum,
});

function Impressum() {
  return (
    <div className="min-h-screen bg-pearl text-charcoal">
      <header className="border-b border-charcoal/10">
        <div className="max-w-3xl mx-auto px-6 py-8 flex items-center justify-between">
          <Link to="/" className="font-display text-2xl tracking-wide">La Perla</Link>
          <Link to="/" className="text-sm uppercase tracking-[0.2em] text-charcoal/70 hover:text-primary">
            ← Zurück
          </Link>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="font-display text-4xl md:text-5xl mb-10">Impressum</h1>

        <section className="space-y-3 mb-10">
          <h2 className="font-display text-2xl">Angaben gemäß § 5 DDG</h2>
          <p>
            La Perla Hair Styling & Kosmetik<br />
            Inhaberin: Frau Dös<br />
            Hüttenstraße 23<br />
            56170 Bendorf-Mülhofen<br />
            Deutschland
          </p>
        </section>

        <section className="space-y-3 mb-10">
          <h2 className="font-display text-2xl">Kontakt</h2>
          <p>
            Telefon: <a href="tel:+492622902546" className="text-primary hover:underline">02622 902546</a><br />
            E-Mail: kontakt@laperla-bendorf.de
          </p>
        </section>

        <section className="space-y-3 mb-10">
          <h2 className="font-display text-2xl">Umsatzsteuer</h2>
          <p>
            Kleinunternehmerin gemäß § 19 UStG – es wird keine Umsatzsteuer ausgewiesen.
          </p>
        </section>

        <section className="space-y-3 mb-10">
          <h2 className="font-display text-2xl">Berufsbezeichnung & berufsrechtliche Regelungen</h2>
          <p>
            Berufsbezeichnung: Friseurmeisterin (verliehen in Deutschland)<br />
            Zuständige Kammer: Handwerkskammer Koblenz<br />
            Es gelten die Vorschriften der Handwerksordnung (HwO), einzusehen unter{" "}
            <a className="text-primary hover:underline" href="https://www.gesetze-im-internet.de/hwo/" target="_blank" rel="noreferrer">
              www.gesetze-im-internet.de/hwo
            </a>.
          </p>
        </section>

        <section className="space-y-3 mb-10">
          <h2 className="font-display text-2xl">Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
          <p>
            Frau Dös<br />
            Hüttenstraße 23, 56170 Bendorf-Mülhofen
          </p>
        </section>

        <section className="space-y-3 mb-10">
          <h2 className="font-display text-2xl">EU-Streitschlichtung</h2>
          <p>
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
            <a className="text-primary hover:underline" href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noreferrer">
              https://ec.europa.eu/consumers/odr/
            </a>. Unsere E-Mail-Adresse finden Sie oben im Impressum.
          </p>
          <p>
            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucher­schlichtungsstelle teilzunehmen.
          </p>
        </section>

        <section className="space-y-3 mb-10">
          <h2 className="font-display text-2xl">Haftung für Inhalte</h2>
          <p>
            Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.
            Nach §§ 8 bis 10 DDG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen
            oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
          </p>
        </section>

        <section className="space-y-3 mb-10">
          <h2 className="font-display text-2xl">Haftung für Links</h2>
          <p>
            Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben.
            Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter
            oder Betreiber der Seiten verantwortlich.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-2xl">Urheberrecht</h2>
          <p>
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht.
            Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung
            des jeweiligen Autors bzw. Erstellers.
          </p>
        </section>
      </main>
    </div>
  );
}
