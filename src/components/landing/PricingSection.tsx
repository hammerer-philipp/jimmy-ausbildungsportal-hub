
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, Building2, ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export const PricingSection = () => (
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
                    unbegrenzte Azubi-Anfragen
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-jimmy-gold mr-2" />
                    unbegrenzte Praktikanten-Anfragen
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-jimmy-gold mr-2" />
                    Jährliche Abrechnung
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-jimmy-gold mr-2" />
                    Email-Support
                  </li>
                </ul>
              </div>
              
              <Button variant="outline" className="w-full border-jimmy-gold text-jimmy-gold hover:bg-jimmy-gold hover:text-jimmy-header" asChild>
                <a href="https://jimmyausbildung.de" target="_blank" rel="noopener noreferrer">
                  Jetzt starten
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
);
