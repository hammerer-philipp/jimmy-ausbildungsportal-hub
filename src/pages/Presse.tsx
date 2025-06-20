
import { ModernHeader } from '@/components/modern/ModernHeader';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Download, Calendar, Newspaper, FileText, Image, Loader2 } from 'lucide-react';
import { usePresseData } from '@/hooks/usePresseData';
import { downloadFile } from '@/utils/downloadHelper';

const Presse = () => {
  const { presseMitteilungen, presseKit, loading, error } = usePresseData();

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <ModernHeader />
        <main className="pt-20">
          <div className="container mx-auto px-4 py-16">
            <div className="flex items-center justify-center">
              <Loader2 className="w-8 h-8 animate-spin text-jimmy-gold" />
              <span className="ml-2 text-lg">Lade Pressedaten...</span>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-background">
        <ModernHeader />
        <main className="pt-20">
          <div className="container mx-auto px-4 py-16">
            <div className="text-center">
              <p className="text-red-600">{error}</p>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

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
              <p className="text-xl text-muted-foreground mb-8">
                Aktuelle Pressemitteilungen und Medieninformationen über Jimmy das Ausbildungsportal
              </p>
              
              {/* Kurz-Info Übersicht */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                <div className="bg-muted/50 rounded-lg p-6">
                  <Newspaper className="w-8 h-8 text-jimmy-gold mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Pressemitteilungen</h3>
                  <p className="text-sm text-muted-foreground">
                    {presseMitteilungen.length} aktuelle Mitteilungen verfügbar
                  </p>
                </div>
                <div className="bg-muted/50 rounded-lg p-6">
                  <Image className="w-8 h-8 text-jimmy-gold mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Presse-Kit</h3>
                  <p className="text-sm text-muted-foreground">
                    {presseKit.length} Dateien zum Download
                  </p>
                </div>
                <div className="bg-muted/50 rounded-lg p-6">
                  <FileText className="w-8 h-8 text-jimmy-gold mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Materialien</h3>
                  <p className="text-sm text-muted-foreground">
                    Logos, Flyer und weitere Materialien
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Pressemitteilungen */}
        {presseMitteilungen.length > 0 && (
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
                              {new Date(mitteilung.created_at).toLocaleDateString('de-DE')}
                            </span>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <Button 
                          className="bg-gradient-to-r from-jimmy-gold to-yellow-400 text-jimmy-header group"
                          onClick={() => downloadFile(mitteilung.pdf_url, `${mitteilung.title}.pdf`)}
                        >
                          <Download size={16} className="mr-2" />
                          PDF herunterladen
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Presse-Kit */}
        {presseKit.length > 0 && (
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
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {presseKit.map((item, index) => (
                        <motion.div
                          key={item.id}
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-center justify-between p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors"
                        >
                          <div className="flex items-center space-x-3">
                            {item.file_type === 'image' ? (
                              <Image className="w-8 h-8 text-jimmy-gold" />
                            ) : (
                              <FileText className="w-8 h-8 text-jimmy-gold" />
                            )}
                            <div>
                              <p className="font-medium">{item.name}</p>
                              <p className="text-sm text-muted-foreground">{item.file_size}</p>
                            </div>
                          </div>
                          <Button 
                            size="sm" 
                            className="bg-gradient-to-r from-jimmy-gold to-yellow-400 text-jimmy-header hover:from-yellow-400 hover:to-jimmy-gold"
                            onClick={() => downloadFile(item.file_url, item.name)}
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
        )}

        {/* Kontakt */}
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
            
            <div className="max-w-2xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <Card className="border-border/40">
                  <CardHeader>
                    <CardTitle className="text-center">Für Presseanfragen</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center space-y-4">
                    <p><strong>E-Mail:</strong> kontakt@jimmy-ausbildung.de</p>
                    <p><strong>Telefon:</strong> +49 151 57952359</p>
                    <p><strong>Ansprechpartner:</strong> Philipp Hammerer</p>
                    <a href="mailto:kontakt@jimmy-ausbildung.de">
                      <Button className="mt-6 bg-gradient-to-r from-jimmy-gold to-yellow-400 text-jimmy-header">
                        Presseanfrage stellen
                      </Button>
                    </a>
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
