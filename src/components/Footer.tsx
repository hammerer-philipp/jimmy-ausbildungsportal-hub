import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import Newsletter from './Newsletter';

const Footer = () => {
  return (
    <footer className="bg-jimmy-footer text-jimmy-gold">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Jimmy das Ausbildungsportal</h3>
            <p className="text-sm mb-4">
              Das innovative Portal, das den Bewerbungsprozess umdreht. 
              Unternehmen bewerben sich bei talentierten Schülern.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <MapPin size={14} />
                <span>Königsmoos, Bayern</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={14} />
                <span>info@jimmy-portal.de</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={14} />
                <span>+49 (0) 123 456789</span>
              </div>
            </div>
          </div>

          {/* For Students */}
          <div>
            <h4 className="font-semibold mb-4">Für Schüler</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/faq-schueler" className="hover:text-yellow-300">FAQ</Link></li>
              <li><Link to="/preise" className="hover:text-yellow-300">Kostenlose Registrierung</Link></li>
              <li><Link to="#" className="hover:text-yellow-300">Profil erstellen</Link></li>
              <li><Link to="#" className="hover:text-yellow-300">Bewerbungen verwalten</Link></li>
            </ul>
          </div>

          {/* For Companies */}
          <div>
            <h4 className="font-semibold mb-4">Für Unternehmen</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/faq-unternehmen" className="hover:text-yellow-300">FAQ</Link></li>
              <li><Link to="/preise" className="hover:text-yellow-300">Preise</Link></li>
              <li><Link to="#" className="hover:text-yellow-300">Talente finden</Link></li>
              <li><Link to="#" className="hover:text-yellow-300">Unternehmensprofil</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold mb-4">Newsletter</h4>
            <p className="text-sm mb-4">
              Bleiben Sie auf dem Laufenden über Neuigkeiten und Updates.
            </p>
            <Newsletter />
          </div>
        </div>

        <hr className="border-jimmy-gold/20 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm">
              © 2024 Jimmy UG (haftungsbeschränkt). Alle Rechte vorbehalten.
            </p>
          </div>
          <div className="flex space-x-6 text-sm">
            <Link to="/impressum" className="hover:text-yellow-300">Impressum</Link>
            <Link to="/datenschutz" className="hover:text-yellow-300">Datenschutz</Link>
            <Link to="/agb" className="hover:text-yellow-300">AGB</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;