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
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-jimmy-gold to-yellow-300 bg-clip-text text-transparent">
            Preise & Pakete
          </h1>
          <p className="text-xl text-jimmy-gold/90 max-w-3xl mx-auto leading-relaxed">
            Transparente Preise für Schüler und Unternehmen. Keine versteckten Kosten, keine Überraschungen.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Schüler Preismodell */}
          <Card className="bg-gradient-to-br from-jimmy-header to-jimmy-header/80 border-jimmy-gold/30 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-jimmy-gold/10 rounded-full -translate-y-16 translate-x-16"></div>
            <CardHeader className="text-center pb-8 relative z-10">
              <div className="flex justify-center items-center mb-6 relative">
                <div className="bg-jimmy-gold/20 rounded-full p-4">
                  <Users size={56} className="text-jimmy-gold" />
                </div>
              </div>
              <CardTitle className="text-jimmy-gold text-4xl mb-4 font-bold">Für Schüler</CardTitle>
              <div className="text-center mb-4">
                <span className="text-6xl font-bold bg-gradient-to-r from-jimmy-gold to-yellow-300 bg-clip-text text-transparent">
                  Kostenlos
                </span>
                <p className="text-jimmy-gold/70 mt-3 text-lg">Für immer kostenlos</p>
              </div>
              <Badge className="bg-gradient-to-r from-jimmy-gold to-yellow-400 text-jimmy-header font-bold px-4 py-2 rounded-full mx-auto shadow-lg">
                ⭐ Beliebt bei Schülern
              </Badge>
            </CardHeader>
            <CardContent className="relative z-10">
              <ul className="space-y-5 mb-10">
                {schuelerFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-4 group">
                    <div className="bg-jimmy-gold/20 rounded-full p-1 group-hover:bg-jimmy-gold/30 transition-colors">
                      <Check size={18} className="text-jimmy-gold" />
                    </div>
                    <span className="text-jimmy-gold/90 group-hover:text-jimmy-gold transition-colors">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button className="w-full bg-gradient-to-r from-jimmy-gold to-yellow-400 text-jimmy-header hover:from-yellow-400 hover:to-jimmy-gold font-bold py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                🚀 Kostenlos registrieren
              </Button>
              
              <p className="text-center text-sm text-jimmy-gold/60 mt-4 font-medium">
                ✅ Keine Kreditkarte erforderlich
              </p>
            </CardContent>
          </Card>

          {/* Unternehmen Preismodell */}
          <Card className="bg-gradient-to-br from-jimmy-header to-jimmy-header/80 border-jimmy-gold/30 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-32 h-32 bg-jimmy-gold/10 rounded-full -translate-y-16 -translate-x-16"></div>
            <CardHeader className="text-center pb-8 relative z-10">
              <div className="flex justify-center items-center mb-6 relative">
                <div className="bg-jimmy-gold/20 rounded-full p-4">
                  <Building size={56} className="text-jimmy-gold" />
                </div>
              </div>
              <CardTitle className="text-jimmy-gold text-4xl mb-4 font-bold">Für Unternehmen</CardTitle>
              <div className="text-center mb-4">
                <span className="text-6xl font-bold bg-gradient-to-r from-jimmy-gold to-yellow-300 bg-clip-text text-transparent">
                  600€
                </span>
                <p className="text-jimmy-gold/70 mt-3 text-lg">pro Jahr</p>
              </div>
              <Badge className="bg-gradient-to-r from-jimmy-gold to-yellow-400 text-jimmy-header font-bold px-4 py-2 rounded-full mx-auto shadow-lg">
                💼 Professionell
              </Badge>
            </CardHeader>
            <CardContent className="relative z-10">
              <ul className="space-y-5 mb-10">
                {unternehmenFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-4 group">
                    <div className="bg-jimmy-gold/20 rounded-full p-1 group-hover:bg-jimmy-gold/30 transition-colors">
                      <Check size={18} className="text-jimmy-gold" />
                    </div>
                    <span className="text-jimmy-gold/90 group-hover:text-jimmy-gold transition-colors">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button className="w-full bg-gradient-to-r from-jimmy-gold to-yellow-400 text-jimmy-header hover:from-yellow-400 hover:to-jimmy-gold font-bold py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                🚀 Jetzt starten
              </Button>
              
              <p className="text-center text-sm text-jimmy-gold/60 mt-4 font-medium">
                🎯 14 Tage kostenlos testen
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