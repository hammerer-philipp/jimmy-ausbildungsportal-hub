import { ModernHeader } from '@/components/modern/ModernHeader';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Download, ExternalLink, Calendar, Newspaper, FileText, Image, Users } from 'lucide-react';

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
    { name: "Jimmy Logo (PNG)", url: "#", size: "2.3 MB", icon: Image },
    { name: "Jimmy Logo (SVG)", url: "#", size: "145 KB", icon: Image },
    { name: "Produktscreenshots", url: "#", size: "8.7 MB", icon: Image },
    { name: "Unternehmensbroschüre", url: "#", size: "4.2 MB", icon: FileText }
  ];

  return (
    <div className="min-h-screen bg-background">
      <ModernHeader />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-background to-muted/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center max-w-3xl mx-auto"
            >
              <Newspaper className="w-16 h-16 text-jimmy-gold mx-auto mb-6" />
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Jimmy <span className="text-jimmy-gold">Presse</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Aktuelle Pressemitteilungen und Medieninformationen über Jimmy das Ausbildungsportal
              </p>
            </motion.div>
          </div>
        </section>

        {/* Pressemitteilungen */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Pressemitteilungen</h2>
              <p className="text-xl text-muted-foreground text-center max-w-2xl mx-auto">
                Die neuesten Nachrichten und Entwicklungen rund um Jimmy
              </p>
            </motion.div>
            
            <div className="space-y-6 max-w-4xl mx-auto">
              {presseMitteilungen.map((mitteilung, index) => (
                <motion.div
                  key={mitteilung.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="border-border/40 hover:border-jimmy-gold/40 transition-all duration-300 hover:shadow-lg">
                    <CardHeader>
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <CardTitle className="text-xl mb-2 md:mb-0">
                          {mitteilung.title}
                        </CardTitle>
                        <div className="flex items-center space-x-2 text-muted-foreground">
                          <Calendar size={16} />
                          <span className="text-sm">
                            {new Date(mitteilung.date).toLocaleDateString('de-DE')}
                          </span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">{mitteilung.excerpt}</p>
                      <div className="flex flex-col sm:flex-row gap-3">
                        <Button 
                          className="bg-gradient-to-r from-jimmy-gold to-yellow-400 text-jimmy-header group"
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
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Presse-Kit */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Presse-Kit</h2>
              <p className="text-xl text-muted-foreground text-center max-w-2xl mx-auto">
                Alle wichtigen Materialien für Ihre Berichterstattung
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Card className="border-border/40 max-w-4xl mx-auto">
                <CardContent className="p-8">
                  <p className="text-muted-foreground mb-6 text-center">
                    Laden Sie unser vollständiges Presse-Kit mit Logos, Screenshots und 
                    Unternehmensinformationen herunter.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {presseKit.map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center justify-between p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors"
                      >
                        <div className="flex items-center space-x-3">
                          <item.icon className="w-8 h-8 text-jimmy-gold" />
                          <div>
                            <p className="font-medium">{item.name}</p>
                            <p className="text-sm text-muted-foreground">{item.size}</p>
                          </div>
                        </div>
                        <Button 
                          size="sm" 
                          className="bg-gradient-to-r from-jimmy-gold to-yellow-400 text-jimmy-header hover:from-yellow-400 hover:to-jimmy-gold"
                          onClick={() => window.open(item.url, '_blank')}
                        >
                          <Download size={14} />
                        </Button>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Kontakt & Unternehmensdaten */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Pressekontakt</h2>
            </motion.div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <Card className="border-border/40 h-full">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Users className="w-6 h-6 text-jimmy-gold mr-2" />
                      Für Presseanfragen
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <p><strong>E-Mail:</strong> kontakt@jimmy-ausbildung.de</p>
                      <p><strong>Telefon:</strong> +49 151 57952359</p>
                      <p><strong>Ansprechpartner:</strong> Philipp Hammerer</p>
                    </div>
                    <a href="mailto:kontakt@jimmy-ausbildung.de">
  <button className="w-full mt-6 bg-gradient-to-r from-jimmy-gold to-yellow-400 text-jimmy-header">
    Presseanfrage stellen
  </button>
</a>
                  </CardContent>
                </Card>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <Card className="border-border/40 h-full">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <FileText className="w-6 h-6 text-jimmy-gold mr-2" />
                      Unternehmensdaten
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <p><strong>Firma:</strong> Jimmy UG (haftungsbeschränkt)</p>
                      <p><strong>Sitz:</strong> Königsmoos, Bayern</p>
                      <p><strong>Gegründet:</strong> 2023</p>
                      <p><strong>Branche:</strong> EdTech / HR-Tech</p>
                      <p><strong>Mitarbeiter:</strong> 5-10</p>
                    </div>
                    <Button variant="outline" className="w-full mt-6 border-jimmy-gold text-jimmy-gold hover:bg-jimmy-gold hover:text-jimmy-header">
                      Weitere Infos anfordern
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Presse;