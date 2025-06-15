
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export const CtaSection = () => (
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
);
