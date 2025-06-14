import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check, Users, Building } from 'lucide-react';

const Preise = () => {
  const schuelerFeatures = [
    "Kostenloses Profil erstellen",
    "Bewerbungen von Unternehmen erhalten",
    "Unbegrenzte Kontaktaufnahmen",
    "Persönliche Beratung",
    "Zugang zu allen Ausbildungsplätzen",
    "Mobile App verfügbar",
    "E-Mail-Support",
    "Bewerbungstipps und Ressourcen"
  ];

  const unternehmenFeatures = [
    "Zugang zur gesamten Schülerdatenbank",
    "Unbegrenzte Bewerbungen senden",
    "Detaillierte Schülerprofile",
    "Erweiterte Suchfilter",
    "Unternehmensprofil erstellen",
    "Analytics und Statistiken",
    "Prioritäts-Support",
    "Account Manager",
    "Monatliche Erfolgsberichte",
    "Integration mit HR-Systemen"
  ];

  return (
    <div className="min-h-screen bg-jimmy-body text-jimmy-gold">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Preise & Pakete</h1>
          <p className="text-xl text-jimmy-gold/80 max-w-2xl mx-auto">
            Transparente Preise für Schüler und Unternehmen. Keine versteckten Kosten, keine Überraschungen.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Schüler Preismodell */}
          <Card className="bg-jimmy-header border-jimmy-gold/20 relative">
            <CardHeader className="text-center pb-8">
              <div className="flex justify-center items-center mb-4">
                <Users size={48} className="text-jimmy-gold" />
              </div>
              <CardTitle className="text-jimmy-gold text-3xl mb-2">Für Schüler</CardTitle>
              <div className="text-center">
                <span className="text-5xl font-bold text-jimmy-gold">Kostenlos</span>
                <p className="text-jimmy-gold/60 mt-2">Für immer kostenlos</p>
              </div>
              <Badge className="bg-jimmy-gold text-jimmy-header font-semibold mx-auto">
                Beliebt bei Schülern
              </Badge>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4 mb-8">
                {schuelerFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <Check size={20} className="text-jimmy-gold mt-0.5 flex-shrink-0" />
                    <span className="text-jimmy-gold/80">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button className="w-full bg-jimmy-gold text-jimmy-header hover:bg-yellow-400 font-semibold py-3">
                Kostenlos registrieren
              </Button>
              
              <p className="text-center text-sm text-jimmy-gold/60 mt-4">
                Keine Kreditkarte erforderlich
              </p>
            </CardContent>
          </Card>

          {/* Unternehmen Preismodell */}
          <Card className="bg-jimmy-header border-jimmy-gold/20 relative">
            <CardHeader className="text-center pb-8">
              <div className="flex justify-center items-center mb-4">
                <Building size={48} className="text-jimmy-gold" />
              </div>
              <CardTitle className="text-jimmy-gold text-3xl mb-2">Für Unternehmen</CardTitle>
              <div className="text-center">
                <span className="text-5xl font-bold text-jimmy-gold">600€</span>
                <p className="text-jimmy-gold/60 mt-2">pro Jahr</p>
              </div>
              <Badge className="bg-jimmy-gold text-jimmy-header font-semibold mx-auto">
                Professionell
              </Badge>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4 mb-8">
                {unternehmenFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <Check size={20} className="text-jimmy-gold mt-0.5 flex-shrink-0" />
                    <span className="text-jimmy-gold/80">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button className="w-full bg-jimmy-gold text-jimmy-header hover:bg-yellow-400 font-semibold py-3">
                Jetzt starten
              </Button>
              
              <p className="text-center text-sm text-jimmy-gold/60 mt-4">
                14 Tage kostenlos testen
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Zusätzliche Informationen */}
        <div className="mt-16 space-y-8">
          {/* Warum diese Preisstruktur */}
          <Card className="bg-jimmy-header border-jimmy-gold/20">
            <CardHeader>
              <CardTitle className="text-jimmy-gold text-2xl text-center">
                Warum ist Jimmy für Schüler kostenlos?
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-jimmy-gold/80 max-w-3xl mx-auto">
                Wir glauben, dass jeder Schüler die gleichen Chancen auf eine gute Ausbildung haben sollte, 
                unabhängig von der finanziellen Situation. Deshalb ist Jimmy für Schüler komplett kostenlos. 
                Unternehmen investieren in die Plattform, um Zugang zu den besten Talenten zu erhalten.
              </p>
            </CardContent>
          </Card>

          {/* FAQs zu Preisen */}
          <Card className="bg-jimmy-header border-jimmy-gold/20">
            <CardHeader>
              <CardTitle className="text-jimmy-gold text-2xl text-center">
                Häufige Fragen zu den Preisen
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-jimmy-gold mb-3">Gibt es versteckte Kosten?</h4>
                  <p className="text-jimmy-gold/80 text-sm">
                    Nein, es gibt keine versteckten Kosten. Schüler zahlen nichts, 
                    Unternehmen zahlen 600€ pro Jahr - das war's.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-jimmy-gold mb-3">Kann ich kündigen?</h4>
                  <p className="text-jimmy-gold/80 text-sm">
                    Unternehmen können mit einer Frist von 3 Monaten kündigen. 
                    Schüler können ihr Profil jederzeit löschen.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-jimmy-gold mb-3">Gibt es Rabatte?</h4>
                  <p className="text-jimmy-gold/80 text-sm">
                    Wir bieten Rabatte für gemeinnützige Organisationen und 
                    Startups. Kontaktieren Sie uns für mehr Informationen.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-jimmy-gold mb-3">Rechnungsstellung?</h4>
                  <p className="text-jimmy-gold/80 text-sm">
                    Unternehmen erhalten eine jährliche Rechnung. 
                    Zahlung per Überweisung oder Lastschrift möglich.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Call to Action */}
          <Card className="bg-jimmy-header border-jimmy-gold/20">
            <CardContent className="text-center py-12">
              <h3 className="text-2xl font-bold text-jimmy-gold mb-4">
                Bereit, Jimmy auszuprobieren?
              </h3>
              <p className="text-jimmy-gold/80 mb-8 max-w-2xl mx-auto">
                Starten Sie noch heute und erleben Sie, wie einfach die moderne 
                Ausbildungsplatz-Vermittlung funktioniert.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-jimmy-gold text-jimmy-header hover:bg-yellow-400">
                  Als Schüler registrieren
                </Button>
                <Button variant="outline" className="border-jimmy-gold text-jimmy-gold hover:bg-jimmy-gold hover:text-jimmy-header">
                  Unternehmen: Kostenlos testen
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Preise;