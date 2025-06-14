import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const AGB = () => {
  return (
    <div className="min-h-screen bg-jimmy-body text-jimmy-gold">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Allgemeine Geschäftsbedingungen</h1>
          <p className="text-jimmy-gold/80">Gültig ab: 01.01.2024</p>
        </div>

        <Card className="bg-jimmy-header border-jimmy-gold/20 max-w-4xl mx-auto">
          <CardContent className="p-8 space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-jimmy-gold mb-4">§ 1 Geltungsbereich</h3>
              <div className="text-jimmy-gold/80 space-y-2">
                <p className="text-sm">
                  (1) Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Leistungen der Jimmy UG 
                  (haftungsbeschränkt), nachfolgend "Jimmy" genannt, die über die Plattform www.jimmy-portal.de 
                  erbracht werden.
                </p>
                <p className="text-sm">
                  (2) Abweichende Bedingungen des Nutzers werden nicht anerkannt, es sei denn, Jimmy stimmt 
                  schriftlich zu.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-jimmy-gold mb-4">§ 2 Leistungen von Jimmy</h3>
              <div className="text-jimmy-gold/80 space-y-2">
                <p className="text-sm">
                  (1) Jimmy betreibt eine Online-Plattform zur Vermittlung zwischen Schülern und Unternehmen 
                  für Ausbildungsplätze.
                </p>
                <p className="text-sm">
                  (2) Für Schüler ist die Nutzung der Plattform kostenlos. Unternehmen zahlen eine jährliche 
                  Gebühr von 600€ für den Zugang zur Plattform.
                </p>
                <p className="text-sm">
                  (3) Jimmy vermittelt lediglich Kontakte und garantiert nicht den Erfolg einer Bewerbung oder 
                  das Zustandekommen eines Ausbildungsvertrages.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-jimmy-gold mb-4">§ 3 Registrierung und Nutzerkonto</h3>
              <div className="text-jimmy-gold/80 space-y-2">
                <p className="text-sm">
                  (1) Die Nutzung der Plattform erfordert eine Registrierung. Der Nutzer verpflichtet sich, 
                  wahrheitsgemäße Angaben zu machen.
                </p>
                <p className="text-sm">
                  (2) Jeder Nutzer darf nur ein Konto erstellen. Das Konto ist nicht übertragbar.
                </p>
                <p className="text-sm">
                  (3) Der Nutzer ist für die Geheimhaltung seiner Zugangsdaten verantwortlich.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-jimmy-gold mb-4">§ 4 Pflichten der Nutzer</h3>
              <div className="text-jimmy-gold/80 space-y-2">
                <p className="text-sm">
                  (1) Nutzer verpflichten sich, keine rechtswidrigen, beleidigenden oder diskriminierenden 
                  Inhalte zu veröffentlichen.
                </p>
                <p className="text-sm">
                  (2) Die Weitergabe von Kontaktdaten außerhalb der Plattform zu Beginn einer Geschäftsbeziehung 
                  ist erlaubt und erwünscht.
                </p>
                <p className="text-sm">
                  (3) Unternehmen verpflichten sich, nur echte Ausbildungsplätze anzubieten und seriös mit 
                  Bewerbern umzugehen.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-jimmy-gold mb-4">§ 5 Zahlungsbedingungen (Unternehmen)</h3>
              <div className="text-jimmy-gold/80 space-y-2">
                <p className="text-sm">
                  (1) Unternehmen zahlen eine jährliche Gebühr von 600€ (inkl. gesetzlicher MwSt.).
                </p>
                <p className="text-sm">
                  (2) Die Zahlung erfolgt im Voraus für ein Jahr. Die Rechnung wird zu Beginn der Laufzeit gestellt.
                </p>
                <p className="text-sm">
                  (3) Bei Zahlungsverzug kann Jimmy den Zugang zur Plattform sperren.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-jimmy-gold mb-4">§ 6 Laufzeit und Kündigung</h3>
              <div className="text-jimmy-gold/80 space-y-2">
                <p className="text-sm">
                  (1) Schüler können ihr Konto jederzeit ohne Frist löschen.
                </p>
                <p className="text-sm">
                  (2) Unternehmensverträge laufen ein Jahr und verlängern sich automatisch, wenn nicht mit 
                  3 Monaten Frist zum Vertragsende gekündigt wird.
                </p>
                <p className="text-sm">
                  (3) Das Recht zur außerordentlichen Kündigung bleibt unberührt.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-jimmy-gold mb-4">§ 7 Haftung</h3>
              <div className="text-jimmy-gold/80 space-y-2">
                <p className="text-sm">
                  (1) Jimmy haftet nur für Schäden, die auf einer vorsätzlichen oder grob fahrlässigen 
                  Pflichtverletzung beruhen.
                </p>
                <p className="text-sm">
                  (2) Die Haftung für mittelbare Schäden und entgangenen Gewinn ist ausgeschlossen.
                </p>
                <p className="text-sm">
                  (3) Jimmy haftet nicht für das Verhalten der Nutzer untereinander.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-jimmy-gold mb-4">§ 8 Datenschutz</h3>
              <div className="text-jimmy-gold/80">
                <p className="text-sm">
                  Die Verarbeitung personenbezogener Daten erfolgt gemäß unserer Datenschutzerklärung, 
                  die Bestandteil dieser AGB ist.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-jimmy-gold mb-4">§ 9 Änderungen der AGB</h3>
              <div className="text-jimmy-gold/80 space-y-2">
                <p className="text-sm">
                  (1) Jimmy behält sich vor, diese AGB zu ändern. Änderungen werden den Nutzern per E-Mail 
                  mitgeteilt.
                </p>
                <p className="text-sm">
                  (2) Widersprüche gegen Änderungen müssen innerhalb von 4 Wochen schriftlich erfolgen. 
                  Andernfalls gelten die Änderungen als angenommen.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-jimmy-gold mb-4">§ 10 Schlussbestimmungen</h3>
              <div className="text-jimmy-gold/80 space-y-2">
                <p className="text-sm">
                  (1) Es gilt deutsches Recht unter Ausschluss des UN-Kaufrechts.
                </p>
                <p className="text-sm">
                  (2) Gerichtsstand ist Augsburg, sofern der Nutzer Kaufmann ist.
                </p>
                <p className="text-sm">
                  (3) Sollten einzelne Bestimmungen unwirksam sein, bleibt die Wirksamkeit der übrigen 
                  Bestimmungen unberührt.
                </p>
              </div>
            </div>

            <div className="bg-jimmy-body p-4 rounded-md">
              <h4 className="font-semibold text-jimmy-gold mb-2">Kontakt</h4>
              <p className="text-sm text-jimmy-gold/80">
                Bei Fragen zu diesen AGB wenden Sie sich bitte an: 
                <a href="mailto:info@jimmy-portal.de" className="text-jimmy-gold hover:text-yellow-300 ml-1">
                  info@jimmy-portal.de
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

export default AGB;