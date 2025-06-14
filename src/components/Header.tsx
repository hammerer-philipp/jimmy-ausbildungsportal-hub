import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Users, Building } from 'lucide-react';
import { Button } from './ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-jimmy-header text-jimmy-gold sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold">
            Jimmy das Ausbildungsportal
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <div className="relative group">
              <button className="flex items-center space-x-1 hover:text-yellow-300 transition-colors">
                <Users size={16} />
                <span>Für Schüler</span>
              </button>
              <div className="absolute top-full left-0 bg-jimmy-header border border-jimmy-gold/20 rounded-md mt-2 py-2 min-w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <Link to="/faq-schueler" className="block px-4 py-2 hover:bg-jimmy-gold/10">FAQ für Schüler</Link>
                <Link to="/preise" className="block px-4 py-2 hover:bg-jimmy-gold/10">Kostenlos registrieren</Link>
              </div>
            </div>
            
            <div className="relative group">
              <button className="flex items-center space-x-1 hover:text-yellow-300 transition-colors">
                <Building size={16} />
                <span>Für Unternehmen</span>
              </button>
              <div className="absolute top-full left-0 bg-jimmy-header border border-jimmy-gold/20 rounded-md mt-2 py-2 min-w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <Link to="/faq-unternehmen" className="block px-4 py-2 hover:bg-jimmy-gold/10">FAQ für Unternehmen</Link>
                <Link to="/preise" className="block px-4 py-2 hover:bg-jimmy-gold/10">Preise</Link>
              </div>
            </div>
            
            <Link to="/blog" className="hover:text-yellow-300 transition-colors">Blog</Link>
            <Link to="/presse" className="hover:text-yellow-300 transition-colors">Presse</Link>
            <Link to="/karriere" className="hover:text-yellow-300 transition-colors">Karriere</Link>
            
            <Button className="bg-jimmy-gold text-jimmy-header hover:bg-yellow-400">
              Jetzt starten
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 py-4 border-t border-jimmy-gold/20">
            <div className="flex flex-col space-y-4">
              <Link to="/faq-schueler" className="flex items-center space-x-2 hover:text-yellow-300">
                <Users size={16} />
                <span>FAQ für Schüler</span>
              </Link>
              <Link to="/faq-unternehmen" className="flex items-center space-x-2 hover:text-yellow-300">
                <Building size={16} />
                <span>FAQ für Unternehmen</span>
              </Link>
              <Link to="/blog" className="hover:text-yellow-300">Blog</Link>
              <Link to="/presse" className="hover:text-yellow-300">Presse</Link>
              <Link to="/karriere" className="hover:text-yellow-300">Karriere</Link>
              <Link to="/preise" className="hover:text-yellow-300">Preise</Link>
              <Button className="bg-jimmy-gold text-jimmy-header hover:bg-yellow-400 w-fit">
                Jetzt starten
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;