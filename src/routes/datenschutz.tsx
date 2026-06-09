import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/datenschutz")({
  head: () => ({
    meta: [
      { title: "Datenschutzerklärung – La Perla Hair Styling & Kosmetik" },
      { name: "description", content: "Datenschutzerklärung von La Perla Hair Styling & Kosmetik gemäß DSGVO." },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: "Datenschutzerklärung – La Perla" },
      { property: "og:description", content: "Informationen zur Verarbeitung Ihrer personenbezogenen Daten gemäß DSGVO." },
    ],
  }),
  component: Datenschutz,
});

function Datenschutz() {
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

      <main className="max-w-3xl mx-auto px-6 py-16 space-y-10">
        <h1 className="font-display text-4xl md:text-5xl">Datenschutzerklärung</h1>

        <section className="space-y-3">
          <h2 className="font-display text-2xl">1. Verantwortliche Stelle</h2>
          <p>
            Verantwortlich für die Datenverarbeitung auf dieser Website im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:
          </p>
          <p>
            La Perla Hair Styling & Kosmetik<br />
            Inhaberin: Frau Dös<br />
            Hüttenstraße 23, 56170 Bendorf-Mülhofen<br />
            Telefon: 02622 902546<br />
            E-Mail: kontakt@laperla-bendorf.de
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-2xl">2. Allgemeine Hinweise</h2>
          <p>
            Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich
            und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
            Die Nutzung unserer Website ist in der Regel ohne Angabe personenbezogener Daten möglich.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-2xl">3. Server-Logfiles</h2>
          <p>
            Beim Besuch unserer Website erhebt unser Hosting-Anbieter automatisch Informationen, die Ihr Browser übermittelt
            (sog. Server-Logfiles). Dies sind:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Browsertyp und Browserversion</li>
            <li>verwendetes Betriebssystem</li>
            <li>Referrer URL</li>
            <li>Hostname des zugreifenden Rechners</li>
            <li>Uhrzeit der Serveranfrage</li>
            <li>IP-Adresse (anonymisiert)</li>
          </ul>
          <p>
            Diese Daten werden nicht mit anderen Datenquellen zusammengeführt. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO,
            der die Verarbeitung zur Erfüllung des berechtigten Interesses an einer technisch fehlerfreien Darstellung erlaubt.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-2xl">4. Kontaktaufnahme per Telefon oder E-Mail</h2>
          <p>
            Wenn Sie uns telefonisch oder per E-Mail kontaktieren, werden Ihre Angaben zur Bearbeitung der Anfrage und für den Fall
            von Anschlussfragen gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
            Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung) bzw. Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Beantwortung).
            Die Daten werden gelöscht, sobald sie für den Zweck der Verarbeitung nicht mehr erforderlich sind und keine gesetzlichen Aufbewahrungspflichten entgegenstehen.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-2xl">5. Kundendaten im Salon</h2>
          <p>
            Im Rahmen der Terminvereinbarung und Behandlung erheben wir Name, Telefonnummer und ggf. behandlungs­relevante Informationen.
            Diese Daten werden ausschließlich zur Durchführung der Dienstleistung verwendet (Art. 6 Abs. 1 lit. b DSGVO)
            und gemäß den gesetzlichen Aufbewahrungsfristen gespeichert.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-2xl">6. Cookies</h2>
          <p>
            Unsere Website verwendet keine Tracking- oder Marketing-Cookies. Es können ausschließlich technisch notwendige Cookies eingesetzt werden,
            die für den Betrieb der Seite erforderlich sind (Art. 6 Abs. 1 lit. f DSGVO).
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-2xl">7. Eingebundene Dienste</h2>
          <p>
            <strong>Google Fonts:</strong> Diese Website nutzt Schriftarten von Google Fonts. Beim Aufruf einer Seite lädt Ihr Browser die
            benötigten Schriften, wobei Ihre IP-Adresse an Google übertragen werden kann. Anbieter: Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland.
            Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (einheitliche Darstellung).
          </p>
          <p>
            <strong>Google Maps:</strong> Zur Darstellung unseres Standortes binden wir eine Karte von Google Maps ein. Anbieter siehe oben.
            Beim Aufruf der Karte werden Daten an Google übermittelt. Weitere Informationen:{" "}
            <a className="text-primary hover:underline" href="https://policies.google.com/privacy" target="_blank" rel="noreferrer">
              policies.google.com/privacy
            </a>.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-2xl">8. Ihre Rechte</h2>
          <p>Sie haben jederzeit das Recht auf:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Auskunft über Ihre gespeicherten personenbezogenen Daten (Art. 15 DSGVO)</li>
            <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO)</li>
            <li>Löschung Ihrer Daten (Art. 17 DSGVO)</li>
            <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
            <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
            <li>Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
            <li>Beschwerde bei einer Aufsichtsbehörde (Art. 77 DSGVO)</li>
          </ul>
          <p>
            Zuständige Aufsichtsbehörde: Der Landesbeauftragte für den Datenschutz und die Informationsfreiheit Rheinland-Pfalz,
            Hintere Bleiche 34, 55116 Mainz.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-2xl">9. SSL-/TLS-Verschlüsselung</h2>
          <p>
            Diese Seite nutzt aus Sicherheitsgründen eine SSL-/TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie am
            „https://" in der Adresszeile Ihres Browsers.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-2xl">10. Aktualität</h2>
          <p>
            Stand dieser Datenschutzerklärung: {new Date().toLocaleDateString("de-DE", { month: "long", year: "numeric" })}.
            Durch die Weiterentwicklung unserer Website können Änderungen dieser Datenschutzerklärung erforderlich werden.
          </p>
        </section>
      </main>
    </div>
  );
}
