import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Impressum = () => {
  return (
    <div className="min-h-screen bg-jimmy-body text-jimmy-gold">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Impressum</h1>
        </div>

        <Card className="bg-jimmy-header border-jimmy-gold/20 max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-jimmy-gold">Angaben gemäß § 5 TMG</CardTitle>
          </CardHeader>
          <CardContent className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-jimmy-gold mb-4">Firmenanschrift</h3>
              <div className="text-jimmy-gold/80 space-y-1">
                <p>Jimmy UG (haftungsbeschränkt)</p>
                <p>Musterstraße 123</p>
                <p>86669 Königsmoos</p>
                <p>Deutschland</p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-jimmy-gold mb-4">Kontakt</h3>
              <div className="text-jimmy-gold/80 space-y-1">
                <p><strong>Telefon:</strong> +49 (0) 123 456789</p>
                <p><strong>E-Mail:</strong> info@jimmy-portal.de</p>
                <p><strong>Website:</strong> www.jimmy-portal.de</p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-jimmy-gold mb-4">Registereintrag</h3>
              <div className="text-jimmy-gold/80 space-y-1">
                <p><strong>Registergericht:</strong> Amtsgericht Augsburg</p>
                <p><strong>Registernummer:</strong> HRB 12345</p>
                <p><strong>Umsatzsteuer-ID:</strong> DE123456789</p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-jimmy-gold mb-4">Vertretungsberechtigte Geschäftsführer</h3>
              <div className="text-jimmy-gold/80">
                <p>Max Mustermann</p>
                <p>Anna Beispiel</p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-jimmy-gold mb-4">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h3>
              <div className="text-jimmy-gold/80 space-y-1">
                <p>Max Mustermann</p>
                <p>Musterstraße 123</p>
                <p>86669 Königsmoos</p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-jimmy-gold mb-4">Haftungsausschluss</h3>
              
              <div className="space-y-4 text-jimmy-gold/80">
                <div>
                  <h4 className="font-semibold text-jimmy-gold mb-2">Haftung für Inhalte</h4>
                  <p className="text-sm">
                    Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den 
                    allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht 
                    unter der Verpflichtung, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach 
                    Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-jimmy-gold mb-2">Haftung für Links</h4>
                  <p className="text-sm">
                    Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. 
                    Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten 
                    Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-jimmy-gold mb-2">Urheberrecht</h4>
                  <p className="text-sm">
                    Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen 
                    Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der 
                    Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-jimmy-gold mb-4">Online-Streitbeilegung (OS)</h3>
              <div className="text-jimmy-gold/80">
                <p className="text-sm">
                  Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
                  <a href="https://ec.europa.eu/consumers/odr/" className="text-jimmy-gold hover:text-yellow-300 ml-1">
                    https://ec.europa.eu/consumers/odr/
                  </a>
                </p>
                <p className="text-sm mt-2">
                  Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer 
                  Verbraucherschlichtungsstelle teilzunehmen.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  );
};

export default Impressum;