
import { ModernHeader } from '@/components/modern/ModernHeader';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { FileText, MapPin, Mail, Phone, Building } from 'lucide-react';

const Impressum = () => {
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
              <FileText className="w-16 h-16 text-jimmy-gold mx-auto mb-6" />
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-jimmy-gold">Impressum</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Rechtliche Informationen gemäß § 5 TMG
              </p>
            </motion.div>
          </div>
        </section>

        {/* Impressum Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-8">
              
              {/* Firmenanschrift */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <Card className="border-border/40">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Building className="w-6 h-6 text-jimmy-gold mr-2" />
                      Firmenanschrift
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <p className="font-medium">Jimmy UG (haftungsbeschränkt)</p>
                      <div className="flex items-start space-x-2">
                        <MapPin className="w-4 h-4 text-jimmy-gold mt-1 flex-shrink-0" />
                        <div>
                          <p>Adrian-von-Riedel-str. 34</p>
                          <p>86669 Königsmoos</p>
                          <p>Deutschland</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Kontakt */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <Card className="border-border/40">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Phone className="w-6 h-6 text-jimmy-gold mr-2" />
                      Kontakt
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="flex items-center space-x-2">
                        <Phone className="w-4 h-4 text-jimmy-gold" />
                        <span>+4915157952359</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Mail className="w-4 h-4 text-jimmy-gold" />
                        <span>kontakt@jimmy-ausbildung.de</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Registereintrag & Geschäftsführung */}
              <div className="grid md:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <Card className="border-border/40 h-full">
                    <CardHeader>
                      <CardTitle>Registereintrag</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <p><strong>Handelsregister:</strong> HRB 11954</p>
                        <p><strong>Registergericht:</strong> Amtsgericht Ingolstadt - Registergericht</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <Card className="border-border/40 h-full">
                    <CardHeader>
                      <CardTitle>Vertreten durch</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <p>Christina Hammerer</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>

              {/* Redaktionell verantwortlich */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <Card className="border-border/40">
                  <CardHeader>
                    <CardTitle>Redaktionell verantwortlich</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <p>Christina Hammerer</p>
                      <p>Adrian-von-Riedl-Str. 34</p>
                      <p>86669 Königsmoos</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* EU-Streitschlichtung */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <Card className="border-border/40">
                  <CardHeader>
                    <CardTitle>EU-Streitschlichtung</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-2">
                      Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
                      <a href="https://ec.europa.eu/consumers/odr/" className="text-jimmy-gold hover:text-jimmy-gold/80 ml-1 underline">
                        https://ec.europa.eu/consumers/odr/
                      </a>
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Unsere E-Mail-Adresse finden Sie oben im Impressum.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Verbraucherstreitbeilegung */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
              >
                <Card className="border-border/40 bg-muted/30">
                  <CardContent className="p-6">
                    <h4 className="font-semibold mb-3">Verbraucherstreitbeilegung/Universalschlichtungsstelle</h4>
                    <p className="text-sm text-muted-foreground">
                      Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer 
                      Verbraucherschlichtungsstelle teilzunehmen.
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">
                      <strong>Quelle:</strong> 
                      <a href="https://www.e-recht24.de/impressum-generator.html" className="text-jimmy-gold hover:text-jimmy-gold/80 ml-1 underline">
                        https://www.e-recht24.de/impressum-generator.html
                      </a>
                    </p>
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

export default Impressum;
