import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';
import { motion } from 'framer-motion';
import { ThemeToggle } from '../ThemeToggle';

export const ModernHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-border/40 dark:bg-[#333]/80"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2"
          >
            <img src="/icon/jimmyHead.svg" alt="Jimmy Ausbildung Logo" className="w-8 h-8 rounded-lg" />
            <Link to="/" className="text-xl font-bold bg-gradient-to-r from-jimmy-gold to-yellow-400 bg-clip-text text-transparent">
              Jimmy Ausbildung
            </Link>
          </motion.div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/blog" className="text-foreground/80 hover:text-jimmy-gold transition-colors">
              Blog
            </Link>
            <Link to="/presse" className="text-foreground/80 hover:text-jimmy-gold transition-colors">
              Presse
            </Link>
            
            <ThemeToggle />
            
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                asChild
                className="bg-gradient-to-r from-jimmy-gold to-yellow-400 text-jimmy-header hover:from-yellow-400 hover:to-jimmy-gold group"
              >
                <a href="https://jimmyausbildung.de" target="_blank" rel="noopener noreferrer">
                  Jetzt starten
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </motion.div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="md:hidden mt-4 py-4 border-t border-border/40"
          >
            <div className="flex flex-col space-y-4">
              <Link to="/blog" className="text-foreground/80 hover:text-jimmy-gold transition-colors">
                Blog
              </Link>
              <Link to="/presse" className="text-foreground/80 hover:text-jimmy-gold transition-colors">
                Presse
              </Link>
              <Button 
                asChild
                className="bg-gradient-to-r from-jimmy-gold to-yellow-400 text-jimmy-header w-fit"
              >
                <a href="https://jimmyausbildung.de" target="_blank" rel="noopener noreferrer">
                  Jetzt starten
                </a>
              </Button>
            </div>
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
};