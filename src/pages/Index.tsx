import { ModernHeader } from '@/components/modern/ModernHeader';
import { HeroSection } from '@/components/modern/HeroSection';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Users, 
  Building2, 
  ArrowRight, 
  CheckCircle, 
  TrendingUp,
  Zap,
  Shield,
  Globe
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  const features = [
    {
      icon: Zap,
      title: "Blitzschnell",
      description: "Nur 5 Minuten Interview mit unserem Chatbot - dann entspannt zurücklehnen und auf Bewerbungen warten."
    },
    {
      icon: Shield,
      title: "100% Kostenlos",
      description: "Für Schüler komplett kostenfrei. Keine versteckten Gebühren, nie."
    },
    {
      icon: Globe,
      title: "Bayernweit",
      description: "Unternehmen aus ganz Bayern suchen nach Talenten wie dir."
    }
  ];

  const stats = [
    { value: "30+", label: "Aktive Schüler" },
    { value: "5+", label: "Aktive Unternehmen" },
    { value: "< 2 Tage", label: "Ø Antwortzeit" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <ModernHeader />
      
      {/* Hero Section */}
      <HeroSection />

      {/* Features Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Warum <span className="text-jimmy-gold">Jimmy</span> anders ist
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Vergiss traditionelle Bewerbungen. Bei uns dreht sich alles um dich.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <Card className="border-border/40 hover:border-jimmy-gold/40 transition-all duration-300 hover:shadow-lg h-full">
                  <CardContent className="p-6 text-center">
                    <div className="mb-4 inline-flex items-center justify-center w-12 h-12 bg-jimmy-gold/10 rounded-lg">
                      <feature.icon className="w-6 h-6 text-jimmy-gold" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              So einfach funktioniert's
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-16 items-center max-w-4xl mx-auto">
            {/* For Students */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-6">
                <Users className="w-8 h-8 text-jimmy-gold mr-3" />
                <h3 className="text-2xl font-bold">Für Schüler</h3>
              </div>
              
              <div className="space-y-4">
                {[
                  "Profil in 5 Minuten erstellen",
                  "Unternehmen bewerben sich bei dir",
                  "Du wählst den besten Ausbildungsplatz"
                ].map((step, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-jimmy-gold text-jimmy-header rounded-full flex items-center justify-center font-bold text-sm">
                      {index + 1}
                    </div>
                    <span className="text-lg">{step}</span>
                  </div>
                ))}
              </div>

              <Button className="mt-6 bg-gradient-to-r from-jimmy-gold to-yellow-400 text-jimmy-header group" asChild>
                <a href="https://jimmyausbildung.de" target="_blank" rel="noopener noreferrer">
                  Jetzt kostenlos starten
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </motion.div>

            {/* For Companies */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-6">
                <Building2 className="w-8 h-8 text-jimmy-gold mr-3" />
                <h3 className="text-2xl font-bold">Für Unternehmen</h3>
              </div>
              
              <div className="space-y-4">
                {[
                  "Zugang zur Schüler-Datenbank",
                  "Direkte Bewerbung an passende Talente",
                  "Schneller zum perfekten Azubi"
                ].map((step, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-jimmy-gold text-jimmy-header rounded-full flex items-center justify-center font-bold text-sm">
                      {index + 1}
                    </div>
                    <span className="text-lg">{step}</span>
                  </div>
                ))}
              </div>

              <Button variant="outline" className="mt-6 border-jimmy-gold text-jimmy-gold hover:bg-jimmy-gold hover:text-jimmy-header" asChild>
                <a href="https://jimmyausbildung.de" target="_blank" rel="noopener noreferrer">
                  Jetzt starten
                </a>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Reference Customers Section */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Vertrauen von <span className="text-jimmy-gold">führenden Unternehmen</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Diese Unternehmen nutzen bereits Jimmy für ihre Azubi-Suche
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center max-w-5xl mx-auto"
          >
            {/* Edeka Südbayern */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center justify-center p-8 bg-background rounded-xl shadow-sm border border-border/40 hover:border-jimmy-gold/40 transition-all duration-300 h-32"
            >
              <div className="text-center w-full">
                <div className="text-lg font-bold text-blue-600 mb-1">EDEKA</div>
                <div className="text-sm text-muted-foreground">Südbayern</div>
              </div>
            </motion.div>

            {/* Backstube Wünsche */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center justify-center p-8 bg-background rounded-xl shadow-sm border border-border/40 hover:border-jimmy-gold/40 transition-all duration-300 h-32"
            >
              <div className="text-center w-full">
                <div className="text-lg font-bold text-amber-600 mb-1">Backstube</div>
                <div className="text-sm text-muted-foreground">Wünsche</div>
              </div>
            </motion.div>

            {/* Südbayerische Fleischwaren */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center justify-center p-8 bg-background rounded-xl shadow-sm border border-border/40 hover:border-jimmy-gold/40 transition-all duration-300 h-32"
            >
              <div className="text-center w-full">
                <div className="text-lg font-bold text-red-600 mb-1">Südbayerische</div>
                <div className="text-sm text-muted-foreground">Fleischwaren</div>
              </div>
            </motion.div>

            {/* Goldmilch */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center justify-center p-8 bg-background rounded-xl shadow-sm border border-border/40 hover:border-jimmy-gold/40 transition-all duration-300 h-32"
            >
              <div className="text-center w-full">
                <div className="text-lg font-bold text-jimmy-gold mb-1">Goldmilch</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Zahlen, die überzeugen
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-jimmy-gold mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="preise" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Einfache <span className="text-jimmy-gold">Preise</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Transparent und fair für alle Beteiligten
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Student Pricing */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <Card className="border-border/40 hover:border-jimmy-gold/40 transition-all duration-300 hover:shadow-lg h-full">
                <CardContent className="p-8 text-center">
                  <div className="mb-6">
                    <Users className="w-12 h-12 text-jimmy-gold mx-auto mb-4" />
                    <h3 className="text-2xl font-bold mb-2">Für Schüler</h3>
                    <div className="text-5xl font-bold text-jimmy-gold mb-2">Kostenlos</div>
                    <p className="text-muted-foreground">Für immer kostenfrei</p>
                  </div>
                  
                  <div className="mb-6 text-left">
                    <h4 className="font-semibold mb-3">Alles inklusive:</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-jimmy-gold mr-2" />
                        Kostenloses Profil erstellen
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-jimmy-gold mr-2" />
                        Bewerbungen von Unternehmen erhalten
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-jimmy-gold mr-2" />
                        Unbegrenzte Kontaktaufnahmen
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-jimmy-gold mr-2" />
                        Persönliche Beratung
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-jimmy-gold mr-2" />
                        Mobile App verfügbar
                      </li>
                    </ul>
                  </div>
                  
                  <Button className="w-full bg-gradient-to-r from-jimmy-gold to-yellow-400 text-jimmy-header group" asChild>
                    <a href="https://jimmyausbildung.de" target="_blank" rel="noopener noreferrer">
                      Jetzt registrieren
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Company Pricing */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <Card className="border-border/40 hover:border-jimmy-gold/40 transition-all duration-300 hover:shadow-lg h-full">
                <CardContent className="p-8 text-center">
                  <div className="mb-6">
                    <Building2 className="w-12 h-12 text-jimmy-gold mx-auto mb-4" />
                    <h3 className="text-2xl font-bold mb-2">Für Unternehmen</h3>
                    <div className="text-5xl font-bold text-jimmy-gold mb-2">600€</div>
                    <p className="text-muted-foreground">pro Jahr (exkl. MwSt.)</p>
                  </div>
                  
                  <div className="mb-6 text-left">
                    <h4 className="font-semibold mb-3">Vollzugang beinhaltet:</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-jimmy-gold mr-2" />
                        Zugang zur gesamten Schülerdatenbank
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-jimmy-gold mr-2" />
                        Unbegrenzte Bewerbungen senden
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-jimmy-gold mr-2" />
                        Detaillierte Schülerprofile
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-jimmy-gold mr-2" />
                        Erweiterte Suchfilter
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-jimmy-gold mr-2" />
                        Analytics und Statistiken
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-jimmy-gold mr-2" />
                        Prioritäts-Support
                      </li>
                    </ul>
                  </div>
                  
                  <Button variant="outline" className="w-full border-jimmy-gold text-jimmy-gold hover:bg-jimmy-gold hover:text-jimmy-header" asChild>
                    <a href="https://jimmyausbildung.de" target="_blank" rel="noopener noreferrer">
                      14 Tage kostenlos testen
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* FAQ Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          >
            <Card className="border-border/40 hover:border-jimmy-gold/40 transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-6 text-center">
                <Users className="w-8 h-8 text-jimmy-gold mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">FAQ für Schüler</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Häufige Fragen rund um die kostenlose Nutzung für Schüler
                </p>
                <Button variant="outline" className="border-jimmy-gold text-jimmy-gold hover:bg-jimmy-gold hover:text-jimmy-header" asChild>
                  <Link to="/faq-schueler">
                    Schüler-FAQ ansehen
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-border/40 hover:border-jimmy-gold/40 transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-6 text-center">
                <Building2 className="w-8 h-8 text-jimmy-gold mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">FAQ für Unternehmen</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Antworten zu Preisen, Leistungen und Vertragskonditionen
                </p>
                <Button variant="outline" className="border-jimmy-gold text-jimmy-gold hover:bg-jimmy-gold hover:text-jimmy-header" asChild>
                  <Link to="/faq-unternehmen">
                    Unternehmen-FAQ ansehen
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-jimmy-gold/10 to-yellow-400/10">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Bereit für den nächsten Schritt?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Werde Teil der Ausbildungs-Revolution und starte noch heute deine Zukunft.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-jimmy-gold to-yellow-400 text-jimmy-header hover:from-yellow-400 hover:to-jimmy-gold group"
                asChild
              >
                <a href="https://jimmyausbildung.de" target="_blank" rel="noopener noreferrer">
                  Kostenlos als Schüler starten
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-jimmy-gold/30 hover:bg-jimmy-gold/10"
                asChild
              >
                <a href="https://jimmyausbildung.de" target="_blank" rel="noopener noreferrer">
                  Für Unternehmen starten
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
