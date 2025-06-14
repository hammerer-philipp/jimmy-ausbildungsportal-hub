import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Newsletter from './Newsletter';
import { Button } from './ui/button';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-muted/50 to-background border-t border-border/40 dark:bg-[#333]">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-jimmy-gold to-yellow-400 rounded-lg flex items-center justify-center">
                <span className="text-jimmy-header font-bold text-lg">J</span>
              </div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-jimmy-gold to-yellow-400 bg-clip-text text-transparent">
                Jimmy
              </h3>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Das innovative Portal, das den Bewerbungsprozess umdreht. 
              Unternehmen bewerben sich bei talentierten Schülern.
            </p>
            <div className="text-sm">
              <div className="flex flex-col xl:flex-row xl:items-center xl:space-x-8 space-y-2 xl:space-y-0 text-foreground">
                <div className="flex items-center space-x-2 whitespace-nowrap">
                  <MapPin size={16} className="text-jimmy-gold flex-shrink-0" />
                  <span>Königsmoos, Bayern</span>
                </div>
                <div className="flex items-center space-x-2 whitespace-nowrap">
                  <Mail size={16} className="text-jimmy-gold flex-shrink-0" />
                  <span>info@jimmy-portal.de</span>
                </div>
                <div className="flex items-center space-x-2 whitespace-nowrap">
                  <Phone size={16} className="text-jimmy-gold flex-shrink-0" />
                  <span>+49 (0) 123 456789</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* For Students */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-semibold mb-4 text-foreground">Für Schüler</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/faq-schueler" className="text-muted-foreground hover:text-jimmy-gold transition-colors flex items-center group">
                  FAQ
                  <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </li>
              <li>
                <a href="https://jimmyausbildung.de" className="text-muted-foreground hover:text-jimmy-gold transition-colors flex items-center group" target="_blank" rel="noopener noreferrer">
                  Kostenlose Registrierung
                  <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                </a>
              </li>
            </ul>
          </motion.div>

          {/* For Companies */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-semibold mb-4 text-foreground">Für Unternehmen</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/faq-unternehmen" className="text-muted-foreground hover:text-jimmy-gold transition-colors flex items-center group">
                  FAQ
                  <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </li>
              <li>
                <a href="/#preise" className="text-muted-foreground hover:text-jimmy-gold transition-colors flex items-center group">
                  Preise
                  <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="font-semibold mb-4 text-foreground">Newsletter</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Bleiben Sie auf dem Laufenden über Neuigkeiten und Updates.
            </p>
            <Newsletter />
          </motion.div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border/40 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-muted-foreground">
              © 2024 Jimmy UG (haftungsbeschränkt). Alle Rechte vorbehalten.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link to="/impressum" className="text-muted-foreground hover:text-jimmy-gold transition-colors">
                Impressum
              </Link>
              <Link to="/datenschutz" className="text-muted-foreground hover:text-jimmy-gold transition-colors">
                Datenschutz
              </Link>
              <Link to="/agb" className="text-muted-foreground hover:text-jimmy-gold transition-colors">
                AGB
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;