import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, Clock, Euro } from 'lucide-react';

const Karriere = () => {
  const jobOffers = [
    {
      id: 1,
      title: "Frontend Developer (React/TypeScript)",
      location: "Königsmoos, Bayern / Remote",
      type: "Vollzeit",
      salary: "45.000 - 65.000 €",
      tags: ["React", "TypeScript", "Tailwind CSS"],
      description: "Verstärke unser Entwicklerteam und hilf dabei, die Zukunft der Ausbildungsplatz-Vermittlung zu gestalten."
    },
    {
      id: 2,
      title: "Marketing Manager (m/w/d)",
      location: "Königsmoos, Bayern",
      type: "Vollzeit",
      salary: "40.000 - 55.000 €",
      tags: ["Digital Marketing", "Content", "Social Media"],
      description: "Entwickle und implementiere Marketing-Strategien, um Jimmy bekannter zu machen."
    },
    {
      id: 3,
      title: "Backend Developer (Node.js)",
      location: "Remote",
      type: "Vollzeit",
      salary: "50.000 - 70.000 €",
      tags: ["Node.js", "PostgreSQL", "APIs"],
      description: "Baue und optimiere unsere Backend-Infrastruktur für skalierbare Lösungen."
    },
    {
      id: 4,
      title: "Praktikant:in Marketing",
      location: "Königsmoos, Bayern",
      type: "Praktikum",
      salary: "800 € / Monat",
      tags: ["Praktikum", "Marketing", "Content Creation"],
      description: "Sammle erste Berufserfahrung in einem innovativen Startup-Umfeld."
    }
  ];

  const benefits = [
    "Flexible Arbeitszeiten und Home-Office-Möglichkeiten",
    "Modernes Arbeitsumfeld mit neuester Technologie",
    "Weiterbildungsbudget von 2.000€ pro Jahr",
    "Teamevents und gemeinsame Mittagessen",
    "Startup-Atmosphäre mit flachen Hierarchien",
    "Faire Bezahlung und attraktive Benefits",
    "Möglichkeit zur Mitgestaltung des Unternehmens",
    "Kostenfreie Getränke und Snacks"
  ];

  return (
    <div className="min-h-screen bg-jimmy-body text-jimmy-gold">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Karriere bei Jimmy</h1>
          <p className="text-xl text-jimmy-gold/80 max-w-3xl mx-auto">
            Werde Teil unseres Teams und hilf dabei, die Zukunft der Ausbildungsplatz-Vermittlung zu revolutionieren. 
            Bei Jimmy erwartet dich ein innovatives Umfeld mit spannenden Herausforderungen.
          </p>
        </div>

        {/* Über uns als Arbeitgeber */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Warum Jimmy?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card className="bg-jimmy-header border-jimmy-gold/20">
              <CardHeader>
                <CardTitle className="text-jimmy-gold">Innovation im Fokus</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-jimmy-gold/80">
                  Als Pionier in der Ausbildungsplatz-Vermittlung entwickeln wir täglich neue Lösungen, 
                  die sowohl Schülern als auch Unternehmen helfen.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-jimmy-header border-jimmy-gold/20">
              <CardHeader>
                <CardTitle className="text-jimmy-gold">Wachstum & Entwicklung</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-jimmy-gold/80">
                  Mit bereits 30 Schülern und wachsender Unternehmensbasis bieten wir dir die Chance, 
                  in einem schnell wachsenden Unternehmen Verantwortung zu übernehmen.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-jimmy-header border-jimmy-gold/20">
            <CardHeader>
              <CardTitle className="text-jimmy-gold">Unsere Benefits</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-jimmy-gold rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-jimmy-gold/80">{benefit}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Stellenausschreibungen */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Offene Stellen</h2>
          
          <div className="space-y-6">
            {jobOffers.map((job) => (
              <Card key={job.id} className="bg-jimmy-header border-jimmy-gold/20 hover:border-jimmy-gold/40 transition-colors">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                    <div className="mb-4 md:mb-0">
                      <CardTitle className="text-jimmy-gold text-xl mb-2">{job.title}</CardTitle>
                      <div className="flex flex-wrap gap-2">
                        {job.tags.map((tag, index) => (
                          <Badge key={index} variant="outline" className="border-jimmy-gold text-jimmy-gold">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <Button className="bg-jimmy-gold text-jimmy-header hover:bg-yellow-400">
                      Jetzt bewerben
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-jimmy-gold/80 mb-4">{job.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div className="flex items-center space-x-2">
                      <MapPin size={16} className="text-jimmy-gold/60" />
                      <span className="text-jimmy-gold/80">{job.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock size={16} className="text-jimmy-gold/60" />
                      <span className="text-jimmy-gold/80">{job.type}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Euro size={16} className="text-jimmy-gold/60" />
                      <span className="text-jimmy-gold/80">{job.salary}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Initiativbewerbung */}
        <section>
          <Card className="bg-jimmy-header border-jimmy-gold/20">
            <CardHeader>
              <CardTitle className="text-jimmy-gold text-2xl text-center">
                Initiativbewerbung
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-jimmy-gold/80 mb-6 max-w-2xl mx-auto">
                Du findest keine passende Stelle, aber möchtest trotzdem Teil unseres Teams werden? 
                Sende uns eine Initiativbewerbung! Wir freuen uns darauf, dich kennenzulernen.
              </p>
              
              <div className="space-y-4">
                <p className="text-jimmy-gold/80">
                  <strong>Bewerbung an:</strong> jobs@jimmy-portal.de
                </p>
                <Button className="bg-jimmy-gold text-jimmy-header hover:bg-yellow-400">
                  Initiativbewerbung senden
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Karriere;