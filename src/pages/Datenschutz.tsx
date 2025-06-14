import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Datenschutz = () => {
  return (
    <div className="min-h-screen bg-jimmy-body text-jimmy-gold">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Datenschutzerklärung</h1>
        </div>

        <Card className="bg-jimmy-header border-jimmy-gold/20 max-w-4xl mx-auto">
          <CardContent className="p-8 space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-jimmy-gold mb-4">1. Datenschutz auf einen Blick</h3>
              <div className="space-y-4 text-jimmy-gold/80">
                <div>
                  <h4 className="font-semibold text-jimmy-gold mb-2">Allgemeine Hinweise</h4>
                  <p className="text-sm">
                    Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten 
                    passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie 
                    persönlich identifiziert werden können.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-jimmy-gold mb-2">Datenerfassung auf dieser Website</h4>
                  <p className="text-sm">
                    Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten 
                    können Sie dem Impressum dieser Website entnehmen.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-jimmy-gold mb-4">2. Verantwortliche Stelle</h3>
              <div className="text-jimmy-gold/80 space-y-1">
                <p>Jimmy UG (haftungsbeschränkt)</p>
                <p>Musterstraße 123</p>
                <p>86669 Königsmoos</p>
                <p>Deutschland</p>
                <p><strong>E-Mail:</strong> datenschutz@jimmy-portal.de</p>
                <p><strong>Telefon:</strong> +49 (0) 123 456789</p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-jimmy-gold mb-4">3. Datenerfassung und -verwendung</h3>
              <div className="space-y-4 text-jimmy-gold/80">
                <div>
                  <h4 className="font-semibold text-jimmy-gold mb-2">Registrierung und Profilerstellung</h4>
                  <p className="text-sm">
                    Bei der Registrierung auf Jimmy erfassen wir folgende Daten: Name, E-Mail-Adresse, Alter, 
                    Schulabschluss, Interessen und weitere freiwillige Angaben. Diese Daten werden zur Bereitstellung 
                    unserer Dienstleistung und zur Vermittlung zwischen Schülern und Unternehmen verwendet.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-jimmy-gold mb-2">Kontaktaufnahme</h4>
                  <p className="text-sm">
                    Wenn Sie uns per E-Mail oder Kontaktformular kontaktieren, werden Ihre Daten zur Bearbeitung 
                    Ihrer Anfrage gespeichert. Diese Daten werden nicht ohne Ihre Einwilligung weitergegeben.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-jimmy-gold mb-2">Newsletter</h4>
                  <p className="text-sm">
                    Für den Newsletter-Versand verwenden wir das Double-Opt-In-Verfahren. Sie erhalten eine 
                    Bestätigungs-E-Mail, in der Sie Ihre Anmeldung bestätigen müssen. Der Newsletter kann 
                    jederzeit abbestellt werden.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-jimmy-gold mb-4">4. Rechtsgrundlage der Verarbeitung</h3>
              <div className="text-jimmy-gold/80">
                <p className="text-sm">
                  Die Verarbeitung Ihrer personenbezogenen Daten erfolgt auf Grundlage der DSGVO, insbesondere:
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1 text-sm">
                  <li>Art. 6 Abs. 1 lit. a DSGVO (Einwilligung)</li>
                  <li>Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung)</li>
                  <li>Art. 6 Abs. 1 lit. f DSGVO (berechtigte Interessen)</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-jimmy-gold mb-4">5. Ihre Rechte</h3>
              <div className="text-jimmy-gold/80">
                <p className="text-sm mb-2">Sie haben folgende Rechte bezüglich Ihrer personenbezogenen Daten:</p>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
                  <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
                  <li>Recht auf Löschung (Art. 17 DSGVO)</li>
                  <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
                  <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
                  <li>Recht auf Widerspruch (Art. 21 DSGVO)</li>
                  <li>Recht auf Widerruf der Einwilligung (Art. 7 Abs. 3 DSGVO)</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-jimmy-gold mb-4">6. Datensicherheit</h3>
              <div className="text-jimmy-gold/80">
                <p className="text-sm">
                  Wir verwenden moderne Verschlüsselungstechnologien und Sicherheitsmaßnahmen, um Ihre Daten zu schützen. 
                  Die Übertragung erfolgt über SSL/TLS-Verschlüsselung. Unsere Server befinden sich in Deutschland und 
                  unterliegen strengen Datenschutzbestimmungen.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-jimmy-gold mb-4">7. Cookies und Tracking</h3>
              <div className="text-jimmy-gold/80">
                <p className="text-sm">
                  Unsere Website verwendet technisch notwendige Cookies zur Funktionalität. Wir setzen keine 
                  Tracking-Cookies oder Analysedienste ohne Ihre ausdrückliche Einwilligung ein.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-jimmy-gold mb-4">8. Datenlöschung und Speicherdauer</h3>
              <div className="text-jimmy-gold/80">
                <p className="text-sm">
                  Ihre Daten werden nur so lange gespeichert, wie es für die Zweckerfüllung erforderlich ist oder 
                  gesetzliche Aufbewahrungsfristen bestehen. Schülerprofile werden nach 2 Jahren Inaktivität gelöscht, 
                  Unternehmensdaten nach Vertragsende.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-jimmy-gold mb-4">9. Änderungen der Datenschutzerklärung</h3>
              <div className="text-jimmy-gold/80">
                <p className="text-sm">
                  Wir behalten uns vor, diese Datenschutzerklärung zu aktualisieren. Die aktuelle Version finden Sie 
                  stets auf unserer Website. Bei wesentlichen Änderungen informieren wir Sie per E-Mail.
                </p>
              </div>
            </div>

            <div className="bg-jimmy-body p-4 rounded-md">
              <h4 className="font-semibold text-jimmy-gold mb-2">Kontakt bei Datenschutzfragen</h4>
              <p className="text-sm text-jimmy-gold/80">
                Bei Fragen zum Datenschutz wenden Sie sich bitte an: 
                <a href="mailto:datenschutz@jimmy-portal.de" className="text-jimmy-gold hover:text-yellow-300 ml-1">
                  datenschutz@jimmy-portal.de
                </a>
              </p>
            </div>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  );
};

export default Datenschutz;