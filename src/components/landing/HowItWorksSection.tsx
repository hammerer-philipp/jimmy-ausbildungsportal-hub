
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Users, Building2, ArrowRight } from 'lucide-react';

export const HowItWorksSection = () => (
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
              "Durchlaufe ein 5 Minütiges Chatbot-Interview",
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
);
