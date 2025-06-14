import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../ui/button';
import { ArrowRight, Play, Users, Building2, Trophy } from 'lucide-react';
import { useState, useEffect } from 'react';

export const HeroSection = () => {
  const [currentScreen, setCurrentScreen] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentScreen((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/50 to-jimmy-gold/5" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-jimmy-gold/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-400/10 rounded-full blur-3xl animate-pulse"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-jimmy-gold/10 border border-jimmy-gold/20 rounded-full px-4 py-2"
            >
              <Trophy className="w-4 h-4 text-jimmy-gold" />
              <span className="text-sm font-medium text-jimmy-gold">Der umgekehrte Bewerbungsprozess</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-6xl font-bold leading-tight"
            >
              Unternehmen bewerben sich bei{' '}
              <span className="bg-gradient-to-r from-jimmy-gold to-yellow-400 bg-clip-text text-transparent">
                dir
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-muted-foreground leading-relaxed max-w-lg"
            >
              Das innovative Ausbildungsportal, das den Bewerbungsprozess revolutioniert. 
              Erstelle dein Profil und lass Unternehmen auf dich zukommen.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex items-center space-x-8"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-jimmy-gold">30+</div>
                <div className="text-sm text-muted-foreground">Schüler</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-jimmy-gold">5+</div>
                <div className="text-sm text-muted-foreground">Unternehmen</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-jimmy-gold">&lt; 2 Tage</div>
                <div className="text-sm text-muted-foreground">Ø Antwortzeit</div>
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-jimmy-gold to-yellow-400 text-jimmy-header hover:from-yellow-400 hover:to-jimmy-gold group text-lg px-8 py-6"
              >
                <Users className="mr-2 h-5 w-5" />
                Als Schüler starten
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-jimmy-gold/30 text-foreground hover:bg-jimmy-gold/10 group text-lg px-8 py-6"
              >
                <Building2 className="mr-2 h-5 w-5" />
                Für Unternehmen
              </Button>
            </motion.div>

            {/* Video CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex items-center space-x-3 text-muted-foreground"
            >
              <Button variant="ghost" size="sm" className="p-0 h-auto">
                <Play className="w-4 h-4 mr-2" />
                <span className="text-sm">Wie funktioniert Jimmy?</span>
              </Button>
              <span className="text-sm">2 Min Video</span>
            </motion.div>
          </motion.div>

          {/* Mobile Mockup with Real App Screens */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center"
          >
            {/* iPhone Frame */}
            <div className="relative bg-gray-900 rounded-[3rem] p-2 shadow-2xl">
              {/* Screen */}
              <div className="bg-gray-900 rounded-[2.5rem] overflow-hidden relative h-[600px] w-[300px]">
                {/* Status Bar */}
                <div className="flex justify-between items-center px-6 py-2 text-white text-sm bg-gray-900">
                  <span>9:41</span>
                  <div className="flex space-x-1">
                    <div className="w-4 h-2 bg-white rounded-sm opacity-80"></div>
                    <div className="w-6 h-2 bg-white rounded-sm opacity-60"></div>
                    <div className="w-6 h-2 bg-white rounded-sm"></div>
                  </div>
                </div>
                
                {/* Dynamic Island */}
                <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-full"></div>
                
                {/* App Content */}
                <div className="h-full bg-gray-900 relative">
                  <AnimatePresence mode="wait">
                    {currentScreen === 0 && (
                      <motion.div
                        key="login"
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        className="px-8 py-12 h-full"
                      >
                        {/* Jimmy Logo */}
                        <div className="flex justify-center mb-12">
                          <div className="w-16 h-16 rounded-full border-2 border-white flex items-center justify-center">
                            <div className="w-8 h-8 bg-white rounded-full"></div>
                          </div>
                        </div>
                        
                        <h2 className="text-white text-2xl font-bold text-center mb-12">Login</h2>
                        
                        <div className="space-y-4">
                          <input
                            type="email"
                            placeholder="E-Mail-Adresse"
                            className="w-full bg-white rounded-lg px-4 py-3 text-gray-900"
                          />
                          <input
                            type="password"
                            placeholder="Passwort"
                            className="w-full bg-white rounded-lg px-4 py-3 text-gray-900"
                          />
                          
                          <div className="flex items-center space-x-2 py-2">
                            <input type="checkbox" className="w-4 h-4" />
                            <span className="text-white text-sm">Angemeldet bleiben</span>
                          </div>
                          
                          <p className="text-white text-sm">
                            Noch kein Account? <span className="underline">Hier geht's zur Registrierung.</span>
                          </p>
                          
                          <button className="w-full bg-jimmy-gold text-gray-900 font-bold py-3 rounded-lg mt-6">
                            Einloggen
                          </button>
                          
                          <div className="flex justify-center space-x-4 text-white text-sm mt-6">
                            <span className="underline">Impressum</span>
                            <span className="underline">Datenschutz</span>
                            <span className="underline">AGB</span>
                          </div>
                        </div>
                      </motion.div>
                    )}
                    
                    {currentScreen === 1 && (
                      <motion.div
                        key="interview"
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        className="h-full"
                      >
                        {/* Menu Bar */}
                        <div className="bg-jimmy-gold px-4 py-3 flex items-center">
                          <div className="flex items-center space-x-2">
                            <div className="w-6 h-4 bg-gray-900 rounded flex items-center justify-center">
                              <span className="text-jimmy-gold text-xs">≡</span>
                            </div>
                            <span className="text-gray-900 font-bold text-sm">Menü</span>
                          </div>
                        </div>
                        
                        <div className="px-6 py-4">
                          <h3 className="text-white text-lg font-bold mb-6">Jimmy Jobinterview</h3>
                          
                          <div className="bg-jimmy-gold rounded-lg p-4 mb-6">
                            <p className="text-gray-900 text-sm leading-relaxed">
                              Hallo, ich bin Jimmy, dein Begleiter für deine Bewerbung! 
                              Wir führen ein kurzes Interview durch, danach kannst du von 
                              Unternehmen angeschrieben werden, bist du bereit? Wenn 
                              ja, schreibe 'Ja' oder 'Lass uns anfangen' um zu starten.
                            </p>
                          </div>
                          
                          <div className="absolute bottom-0 left-0 right-0 p-4">
                            <div className="flex space-x-3">
                              <input
                                type="text"
                                placeholder="Nachricht schreiben"
                                className="flex-1 bg-gray-700 text-white px-4 py-3 rounded-lg"
                              />
                              <button className="bg-jimmy-gold w-12 h-12 rounded-lg flex items-center justify-center">
                                <span className="text-gray-900">▶</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                    
                    {currentScreen === 2 && (
                      <motion.div
                        key="chat"
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        className="h-full"
                      >
                        {/* Menu Bar */}
                        <div className="bg-jimmy-gold px-4 py-3 flex items-center">
                          <div className="flex items-center space-x-2">
                            <div className="w-6 h-4 bg-gray-900 rounded flex items-center justify-center">
                              <span className="text-jimmy-gold text-xs">≡</span>
                            </div>
                            <span className="text-gray-900 font-bold text-sm">Menü</span>
                          </div>
                        </div>
                        
                        <div className="px-6 py-4">
                          <h3 className="text-white text-lg font-bold mb-6">Bewerbungs-Chat</h3>
                          
                          <div className="space-y-4 mb-20">
                            <div className="bg-jimmy-gold rounded-lg p-4">
                              <p className="text-gray-900 text-sm">
                                Hallo wir sind die Jimmy UG und sind auf 
                                dich aufmerksam geworden. Hättest du 
                                Interesse an einer Ausbildung in unserem 
                                Betrieb?
                              </p>
                            </div>
                            
                            <div className="bg-white rounded-lg p-3 ml-8">
                              <p className="text-gray-900 text-sm">
                                Hallo, ja das hört sich interessant an :)
                              </p>
                            </div>
                            
                            <div className="bg-jimmy-gold rounded-lg p-4">
                              <p className="text-gray-900 text-sm">
                                Super wir könnten dir verschiedene 
                                Ausbildungen anbieten:
                              </p>
                            </div>
                          </div>
                          
                          <div className="absolute bottom-0 left-0 right-0 p-4">
                            <div className="flex space-x-3">
                              <input
                                type="text"
                                placeholder="Nachricht schreiben"
                                className="flex-1 bg-gray-700 text-white px-4 py-3 rounded-lg"
                              />
                              <button className="bg-jimmy-gold w-12 h-12 rounded-lg flex items-center justify-center">
                                <span className="text-gray-900">▶</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                    
                    {currentScreen === 3 && (
                      <motion.div
                        key="menu"
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        className="h-full bg-jimmy-gold relative"
                      >
                        <div className="px-6 py-8">
                          <div className="flex items-center space-x-2 mb-8">
                            <div className="w-6 h-4 bg-gray-900 rounded flex items-center justify-center">
                              <span className="text-jimmy-gold text-xs">≡</span>
                            </div>
                            <span className="text-gray-900 font-bold text-sm">Menü</span>
                          </div>
                          
                          <div className="space-y-4">
                            <div className="flex items-center space-x-3 py-3 border-b border-gray-700">
                              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                                <span className="text-gray-900 text-xs">👤</span>
                              </div>
                              <span className="text-gray-900 font-semibold">Jimmy Ausbildung</span>
                            </div>
                            
                            <div className="flex items-center space-x-3 py-3">
                              <div className="w-6 h-6 bg-white rounded flex items-center justify-center">
                                <span className="text-gray-900 text-xs">🎯</span>
                              </div>
                              <span className="text-gray-900">Jimmy Interview</span>
                            </div>
                            
                            <div className="flex items-center space-x-3 py-3">
                              <div className="w-6 h-6 bg-white rounded flex items-center justify-center">
                                <span className="text-gray-900 text-xs">✉</span>
                              </div>
                              <span className="text-gray-900">Jimmy UG</span>
                            </div>
                          </div>
                          
                          <div className="absolute bottom-8 left-6 right-6 space-y-3">
                            <div className="flex items-center space-x-3 py-3">
                              <div className="w-6 h-6 bg-white rounded flex items-center justify-center">
                                <span className="text-gray-900 text-xs">👤</span>
                              </div>
                              <span className="text-gray-900">Account, Rechtliches & Support</span>
                            </div>
                            
                            <button className="w-full bg-red-600 text-white py-3 rounded-lg font-bold">
                              Abmelden
                            </button>
                            
                            <button className="w-full bg-red-600 text-white py-3 rounded-lg font-bold">
                              Bewerbung löschen
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
              
              {/* Home Indicator */}
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-white rounded-full opacity-50"></div>
            </div>

            {/* Floating Notification */}
            <motion.div
              animate={{ 
                y: [0, -5, 0],
                opacity: [0.8, 1, 0.8]
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-2 -right-4 bg-green-500 text-white text-xs px-2 py-1 rounded-full shadow-lg"
            >
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                <span>Live Bewerbungen</span>
              </div>
            </motion.div>

            {/* Online Users Indicator */}
            <motion.div
              animate={{ 
                scale: [1, 1.05, 1],
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute -bottom-4 -left-4 bg-jimmy-gold text-jimmy-header text-xs px-3 py-2 rounded-full shadow-lg"
            >
              <div className="flex items-center space-x-1">
                <Users className="w-3 h-3" />
                <span>30+ Schüler online</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};