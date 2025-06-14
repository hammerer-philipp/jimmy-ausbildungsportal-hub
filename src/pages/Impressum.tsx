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
                          <p>Musterstraße 123</p>
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
                        <span>+49 (0) 123 456789</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Mail className="w-4 h-4 text-jimmy-gold" />
                        <span>info@jimmy-portal.de</span>
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
                        <p><strong>Registergericht:</strong> Amtsgericht Augsburg</p>
                        <p><strong>Registernummer:</strong> HRB 12345</p>
                        <p><strong>Umsatzsteuer-ID:</strong> DE123456789</p>
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
                      <CardTitle>Geschäftsführung</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <p>Max Mustermann</p>
                        <p>Anna Beispiel</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>

              {/* Haftungsausschluss */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <Card className="border-border/40">
                  <CardHeader>
                    <CardTitle>Haftungsausschluss</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-2">Haftung für Inhalte</h4>
                      <p className="text-sm text-muted-foreground">
                        Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den 
                        allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht 
                        unter der Verpflichtung, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach 
                        Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">Haftung für Links</h4>
                      <p className="text-sm text-muted-foreground">
                        Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. 
                        Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten 
                        Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">Urheberrecht</h4>
                      <p className="text-sm text-muted-foreground">
                        Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen 
                        Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der 
                        Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Online-Streitbeilegung */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <Card className="border-border/40 bg-muted/30">
                  <CardContent className="p-6">
                    <h4 className="font-semibold mb-3">Online-Streitbeilegung (OS)</h4>
                    <p className="text-sm text-muted-foreground">
                      Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
                      <a href="https://ec.europa.eu/consumers/odr/" className="text-jimmy-gold hover:text-jimmy-gold/80 ml-1 underline">
                        https://ec.europa.eu/consumers/odr/
                      </a>
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">
                      Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer 
                      Verbraucherschlichtungsstelle teilzunehmen.
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