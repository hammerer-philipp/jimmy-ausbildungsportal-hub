import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, ExternalLink, Calendar } from 'lucide-react';

const Presse = () => {
  const presseMitteilungen = [
    {
      id: 1,
      title: "Jimmy revolutioniert den Ausbildungsmarkt in Bayern",
      date: "2024-01-20",
      excerpt: "Das Königsmooser Startup Jimmy UG verzeichnet bereits 30 registrierte Schüler und mehrere Partnerunternehmen.",
      downloadUrl: "#"
    },
    {
      id: 2,
      title: "Erfolgreiche Seed-Finanzierung für Jimmy das Ausbildungsportal",
      date: "2023-12-15",
      excerpt: "Das innovative Startup aus Bayern sichert sich Investitionen für die Weiterentwicklung der Plattform.",
      downloadUrl: "#"
    },
    {
      id: 3,
      title: "Partnerschaft mit regionalen Unternehmen gestartet",
      date: "2023-11-30",
      excerpt: "Jimmy kooperiert mit führenden Unternehmen in Bayern für eine moderne Ausbildungsplatz-Vermittlung.",
      downloadUrl: "#"
    }
  ];

  const presseKit = [
    { name: "Jimmy Logo (PNG)", url: "#", size: "2.3 MB" },
    { name: "Jimmy Logo (SVG)", url: "#", size: "145 KB" },
    { name: "Produktscreenshots", url: "#", size: "8.7 MB" },
    { name: "Unternehmensbroschüre", url: "#", size: "4.2 MB" }
  ];

  return (
    <div className="min-h-screen bg-jimmy-body text-jimmy-gold">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Presse</h1>
          <p className="text-xl text-jimmy-gold/80 max-w-2xl mx-auto">
            Aktuelle Pressemitteilungen und Medieninformationen über Jimmy das Ausbildungsportal
          </p>
        </div>

        {/* Pressemitteilungen */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Pressemitteilungen</h2>
          
          <div className="space-y-6">
            {presseMitteilungen.map((mitteilung) => (
              <Card key={mitteilung.id} className="bg-jimmy-header border-jimmy-gold/20">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <CardTitle className="text-jimmy-gold text-xl mb-2 md:mb-0">
                      {mitteilung.title}
                    </CardTitle>
                    <div className="flex items-center space-x-2 text-jimmy-gold/60">
                      <Calendar size={16} />
                      <span className="text-sm">
                        {new Date(mitteilung.date).toLocaleDateString('de-DE')}
                      </span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-jimmy-gold/80 mb-4">{mitteilung.excerpt}</p>
                  <div className="flex space-x-4">
                    <Button 
                      className="bg-jimmy-gold text-jimmy-header hover:bg-yellow-400"
                      onClick={() => window.open(mitteilung.downloadUrl, '_blank')}
                    >
                      <Download size={16} className="mr-2" />
                      PDF herunterladen
                    </Button>
                    <Button 
                      variant="outline" 
                      className="border-jimmy-gold text-jimmy-gold hover:bg-jimmy-gold hover:text-jimmy-header"
                    >
                      <ExternalLink size={16} className="mr-2" />
                      Online lesen
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Presse-Kit */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Presse-Kit</h2>
          
          <Card className="bg-jimmy-header border-jimmy-gold/20">
            <CardContent className="p-6">
              <p className="text-jimmy-gold/80 mb-6">
                Laden Sie unser vollständiges Presse-Kit mit Logos, Screenshots und 
                Unternehmensinfomationen herunter.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {presseKit.map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-jimmy-body rounded-md">
                    <div>
                      <p className="font-medium text-jimmy-gold">{item.name}</p>
                      <p className="text-sm text-jimmy-gold/60">{item.size}</p>
                    </div>
                    <Button 
                      size="sm" 
                      className="bg-jimmy-gold text-jimmy-header hover:bg-yellow-400"
                      onClick={() => window.open(item.url, '_blank')}
                    >
                      <Download size={14} />
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Kontakt */}
        <section>
          <h2 className="text-3xl font-bold mb-8">Pressekontakt</h2>
          
          <Card className="bg-jimmy-header border-jimmy-gold/20">
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-jimmy-gold mb-4">Für Presseanfragen</h3>
                  <div className="space-y-2">
                    <p className="text-jimmy-gold/80">
                      <strong>E-Mail:</strong> presse@jimmy-portal.de
                    </p>
                    <p className="text-jimmy-gold/80">
                      <strong>Telefon:</strong> +49 (0) 123 456789
                    </p>
                    <p className="text-jimmy-gold/80">
                      <strong>Ansprechpartner:</strong> Marketing Team
                    </p>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-jimmy-gold mb-4">Unternehmensdaten</h3>
                  <div className="space-y-2">
                    <p className="text-jimmy-gold/80">
                      <strong>Firma:</strong> Jimmy UG (haftungsbeschränkt)
                    </p>
                    <p className="text-jimmy-gold/80">
                      <strong>Sitz:</strong> Königsmoos, Bayern
                    </p>
                    <p className="text-jimmy-gold/80">
                      <strong>Gegründet:</strong> 2023
                    </p>
                    <p className="text-jimmy-gold/80">
                      <strong>Branche:</strong> EdTech / HR-Tech
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Presse;