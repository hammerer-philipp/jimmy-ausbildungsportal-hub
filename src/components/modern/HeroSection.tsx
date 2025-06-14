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

          {/* 3D Phone Animation mit echten App-Screenshots */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center"
          >
            <div className="relative perspective-1000">
              {/* 3D iPhone mit realistischem Design */}
              <motion.div 
                className="relative preserve-3d"
                animate={{
                  rotateY: [0, 5, -5, 0],
                  rotateX: [0, 2, -2, 0]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                {/* iPhone Frame mit 3D Schatten */}
                <div className="relative bg-gradient-to-b from-gray-800 via-gray-900 to-black rounded-[3rem] p-2 shadow-2xl transform-gpu">
                  {/* Highlight am Rand für 3D Effekt */}
                  <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                  
                  {/* Screen mit realistischen App-Screenshots */}
                  <div className="bg-black rounded-[2.5rem] overflow-hidden relative h-[600px] w-[300px] shadow-inner">
                    {/* Status Bar - exakt wie im Screenshot */}
                    <div className="flex justify-between items-center px-6 py-2 text-white text-sm bg-gray-900 relative z-10">
                      <span className="font-medium">9:41</span>
                      <div className="flex space-x-1 items-center">
                        <div className="flex space-x-0.5">
                          <div className="w-1 h-1 bg-white rounded-full"></div>
                          <div className="w-1 h-1 bg-white rounded-full"></div>
                          <div className="w-1 h-1 bg-white rounded-full"></div>
                          <div className="w-1 h-1 bg-white/50 rounded-full"></div>
                        </div>
                        <svg className="w-6 h-3 ml-1" viewBox="0 0 24 12">
                          <rect x="0" y="3" width="20" height="6" rx="2" fill="white" opacity="0.3"/>
                          <rect x="1" y="4" width="18" height="4" rx="1" fill="#00ff00"/>
                          <rect x="21" y="4.5" width="2" height="3" rx="0.5" fill="white" opacity="0.6"/>
                        </svg>
                      </div>
                    </div>
                    
                    {/* Dynamic Island */}
                    <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-full z-20"></div>
                    
                    {/* App Content - animiert durch die Screenshots */}
                    <div className="h-full bg-gray-900 relative overflow-hidden">
                      <AnimatePresence mode="wait">
                        {/* Screenshot 1: Login Screen */}
                        {currentScreen === 0 && (
                          <motion.div
                            key="login-screen"
                            initial={{ opacity: 0, scale: 1.1 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.5 }}
                            className="absolute inset-0 px-8 py-16"
                          >
                            {/* Exaktes Login Design wie im Screenshot */}
                            <div className="flex justify-center mb-16">
                              <motion.div 
                                className="w-16 h-16 rounded-full border-2 border-white flex items-center justify-center"
                                animate={{ rotate: 360 }}
                                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                              >
                                <div className="w-8 h-8 bg-white rounded-full"></div>
                              </motion.div>
                            </div>
                            
                            <h2 className="text-white text-2xl font-bold text-center mb-16">Login</h2>
                            
                            <div className="space-y-4">
                              <motion.input
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                placeholder="E-Mail-Adresse"
                                className="w-full bg-white rounded-lg px-4 py-3 text-gray-900 placeholder-gray-500"
                              />
                              <motion.input
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.3 }}
                                placeholder="Passwort"
                                type="password"
                                className="w-full bg-white rounded-lg px-4 py-3 text-gray-900 placeholder-gray-500"
                              />
                              
                              <motion.div 
                                className="flex items-center space-x-2 py-2"
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.4 }}
                              >
                                <input type="checkbox" className="w-4 h-4 accent-jimmy-gold" />
                                <span className="text-white text-sm">Angemeldet bleiben</span>
                              </motion.div>
                              
                              <motion.p 
                                className="text-white text-sm"
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.5 }}
                              >
                                Noch kein Account? <span className="underline">Hier geht's zur Registrierung.</span>
                              </motion.p>
                              
                              <motion.button 
                                className="w-full bg-jimmy-gold text-gray-900 font-bold py-3 rounded-lg mt-6 shadow-lg"
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.6 }}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                              >
                                Einloggen
                              </motion.button>
                              
                              <motion.div 
                                className="flex justify-center space-x-4 text-white text-sm mt-6"
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.7 }}
                              >
                                <span className="underline cursor-pointer hover:text-jimmy-gold transition-colors">Impressum</span>
                                <span className="underline cursor-pointer hover:text-jimmy-gold transition-colors">Datenschutz</span>
                                <span className="underline cursor-pointer hover:text-jimmy-gold transition-colors">AGB</span>
                              </motion.div>
                            </div>
                          </motion.div>
                        )}
                        
                        {/* Screenshot 2: Jimmy Interview */}
                        {currentScreen === 1 && (
                          <motion.div
                            key="interview-screen"
                            initial={{ opacity: 0, x: 300 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -300 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                            className="absolute inset-0"
                          >
                            {/* Menu Bar exakt wie im Screenshot */}
                            <motion.div 
                              className="bg-jimmy-gold px-4 py-3 flex items-center"
                              initial={{ y: -50 }}
                              animate={{ y: 0 }}
                              transition={{ delay: 0.2 }}
                            >
                              <div className="flex items-center space-x-2">
                                <div className="w-6 h-4 bg-gray-900 rounded flex items-center justify-center">
                                  <span className="text-jimmy-gold text-xs font-bold">≡</span>
                                </div>
                                <span className="text-gray-900 font-bold text-sm">Menü</span>
                              </div>
                            </motion.div>
                            
                            <div className="px-6 py-6">
                              <motion.h3 
                                className="text-white text-xl font-bold mb-8"
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.3 }}
                              >
                                Jimmy Jobinterview
                              </motion.h3>
                              
                              <motion.div 
                                className="bg-jimmy-gold rounded-lg p-4 mb-8 shadow-lg"
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ delay: 0.4, type: "spring" }}
                              >
                                <p className="text-gray-900 text-sm leading-relaxed">
                                  Hallo, ich bin Jimmy, dein Begleiter für deine Bewerbung! 
                                  Wir führen ein kurzes Interview durch, danach kannst du von 
                                  Unternehmen angeschrieben werden, bist du bereit? Wenn 
                                  ja, schreibe 'Ja' oder 'Lass uns anfangen' um zu starten.
                                </p>
                              </motion.div>
                              
                              <motion.div 
                                className="absolute bottom-0 left-0 right-0 p-4"
                                initial={{ y: 50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.5 }}
                              >
                                <div className="flex space-x-3">
                                  <input
                                    placeholder="Nachricht schreiben"
                                    className="flex-1 bg-gray-700 text-white px-4 py-3 rounded-lg placeholder-gray-400"
                                  />
                                  <motion.button 
                                    className="bg-jimmy-gold w-12 h-12 rounded-lg flex items-center justify-center shadow-lg"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                  >
                                    <span className="text-gray-900 text-lg">▶</span>
                                  </motion.button>
                                </div>
                              </motion.div>
                            </div>
                          </motion.div>
                        )}
                        
                        {/* Screenshot 3: Bewerbungs-Chat */}
                        {currentScreen === 2 && (
                          <motion.div
                            key="chat-screen"
                            initial={{ opacity: 0, x: 300 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -300 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                            className="absolute inset-0"
                          >
                            {/* Menu Bar */}
                            <motion.div 
                              className="bg-jimmy-gold px-4 py-3 flex items-center"
                              initial={{ y: -50 }}
                              animate={{ y: 0 }}
                              transition={{ delay: 0.2 }}
                            >
                              <div className="flex items-center space-x-2">
                                <div className="w-6 h-4 bg-gray-900 rounded flex items-center justify-center">
                                  <span className="text-jimmy-gold text-xs font-bold">≡</span>
                                </div>
                                <span className="text-gray-900 font-bold text-sm">Menü</span>
                              </div>
                            </motion.div>
                            
                            <div className="px-6 py-6">
                              <motion.h3 
                                className="text-white text-xl font-bold mb-8"
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.3 }}
                              >
                                Bewerbungs-Chat
                              </motion.h3>
                              
                              <div className="space-y-4 mb-20">
                                <motion.div 
                                  className="bg-jimmy-gold rounded-lg p-4 shadow-lg"
                                  initial={{ x: -50, opacity: 0 }}
                                  animate={{ x: 0, opacity: 1 }}
                                  transition={{ delay: 0.4 }}
                                >
                                  <p className="text-gray-900 text-sm">
                                    Hallo wir sind die Jimmy UG und sind auf 
                                    dich aufmerksam geworden. Hättest du 
                                    Interesse an einer Ausbildung in unserem 
                                    Betrieb?
                                  </p>
                                </motion.div>
                                
                                <motion.div 
                                  className="bg-white rounded-lg p-3 ml-8 shadow-lg"
                                  initial={{ x: 50, opacity: 0 }}
                                  animate={{ x: 0, opacity: 1 }}
                                  transition={{ delay: 0.6 }}
                                >
                                  <p className="text-gray-900 text-sm">
                                    Hallo, ja das hört sich interessant an :)
                                  </p>
                                </motion.div>
                                
                                <motion.div 
                                  className="bg-jimmy-gold rounded-lg p-4 shadow-lg"
                                  initial={{ x: -50, opacity: 0 }}
                                  animate={{ x: 0, opacity: 1 }}
                                  transition={{ delay: 0.8 }}
                                >
                                  <p className="text-gray-900 text-sm">
                                    Super wir könnten dir verschiedene 
                                    Ausbildungen anbieten:
                                  </p>
                                </motion.div>
                              </div>
                              
                              <motion.div 
                                className="absolute bottom-0 left-0 right-0 p-4"
                                initial={{ y: 50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 1.0 }}
                              >
                                <div className="flex space-x-3">
                                  <input
                                    placeholder="Nachricht schreiben"
                                    className="flex-1 bg-gray-700 text-white px-4 py-3 rounded-lg placeholder-gray-400"
                                  />
                                  <motion.button 
                                    className="bg-jimmy-gold w-12 h-12 rounded-lg flex items-center justify-center shadow-lg"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                  >
                                    <span className="text-gray-900 text-lg">▶</span>
                                  </motion.button>
                                </div>
                              </motion.div>
                            </div>
                          </motion.div>
                        )}
                        
                        {/* Screenshot 4: Menü */}
                        {currentScreen === 3 && (
                          <motion.div
                            key="menu-screen"
                            initial={{ opacity: 0, x: 300 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -300 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                            className="absolute inset-0 bg-jimmy-gold"
                          >
                            <div className="px-6 py-8">
                              <motion.div 
                                className="flex items-center space-x-2 mb-8"
                                initial={{ y: -30, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.2 }}
                              >
                                <div className="w-6 h-4 bg-gray-900 rounded flex items-center justify-center">
                                  <span className="text-jimmy-gold text-xs font-bold">≡</span>
                                </div>
                                <span className="text-gray-900 font-bold text-sm">Menü</span>
                              </motion.div>
                              
                              <div className="space-y-4">
                                <motion.div 
                                  className="flex items-center space-x-3 py-3 border-b border-gray-700"
                                  initial={{ x: -30, opacity: 0 }}
                                  animate={{ x: 0, opacity: 1 }}
                                  transition={{ delay: 0.3 }}
                                >
                                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
                                    <span className="text-gray-900 text-xs">👤</span>
                                  </div>
                                  <span className="text-gray-900 font-semibold">Jimmy Ausbildung</span>
                                </motion.div>
                                
                                <motion.div 
                                  className="flex items-center space-x-3 py-3"
                                  initial={{ x: -30, opacity: 0 }}
                                  animate={{ x: 0, opacity: 1 }}
                                  transition={{ delay: 0.4 }}
                                >
                                  <div className="w-6 h-6 bg-white rounded flex items-center justify-center shadow-lg">
                                    <span className="text-gray-900 text-xs">🎯</span>
                                  </div>
                                  <span className="text-gray-900">Jimmy Interview</span>
                                </motion.div>
                                
                                <motion.div 
                                  className="flex items-center space-x-3 py-3"
                                  initial={{ x: -30, opacity: 0 }}
                                  animate={{ x: 0, opacity: 1 }}
                                  transition={{ delay: 0.5 }}
                                >
                                  <div className="w-6 h-6 bg-white rounded flex items-center justify-center shadow-lg">
                                    <span className="text-gray-900 text-xs">✉</span>
                                  </div>
                                  <span className="text-gray-900">Jimmy UG</span>
                                </motion.div>
                              </div>
                              
                              <motion.div 
                                className="absolute bottom-8 left-6 right-6 space-y-3"
                                initial={{ y: 50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.6 }}
                              >
                                <div className="flex items-center space-x-3 py-3">
                                  <div className="w-6 h-6 bg-white rounded flex items-center justify-center shadow-lg">
                                    <span className="text-gray-900 text-xs">👤</span>
                                  </div>
                                  <span className="text-gray-900">Account, Rechtliches & Support</span>
                                </div>
                                
                                <motion.button 
                                  className="w-full bg-red-600 text-white py-3 rounded-lg font-bold shadow-lg"
                                  whileHover={{ scale: 1.02, backgroundColor: "#dc2626" }}
                                  whileTap={{ scale: 0.98 }}
                                >
                                  Abmelden
                                </motion.button>
                                
                                <motion.button 
                                  className="w-full bg-red-600 text-white py-3 rounded-lg font-bold shadow-lg"
                                  whileHover={{ scale: 1.02, backgroundColor: "#dc2626" }}
                                  whileTap={{ scale: 0.98 }}
                                >
                                  Bewerbung löschen
                                </motion.button>
                              </motion.div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                  
                  {/* Home Indicator */}
                  <motion.div 
                    className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-white rounded-full opacity-50"
                    animate={{ opacity: [0.3, 0.7, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div>
              </motion.div>

              {/* 3D Floating Elements */}
              <motion.div
                animate={{ 
                  y: [0, -10, 0],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-6 bg-green-500 text-white text-xs px-3 py-2 rounded-full shadow-lg z-10"
              >
                <div className="flex items-center space-x-1">
                  <motion.div 
                    className="w-2 h-2 bg-white rounded-full"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  />
                  <span>Live Bewerbungen</span>
                </div>
              </motion.div>

              <motion.div
                animate={{ 
                  scale: [1, 1.05, 1],
                  y: [0, -5, 0]
                }}
                transition={{ duration: 2.5, repeat: Infinity }}
                className="absolute -bottom-6 -left-6 bg-jimmy-gold text-jimmy-header text-xs px-4 py-2 rounded-full shadow-lg z-10"
              >
                <div className="flex items-center space-x-1">
                  <Users className="w-3 h-3" />
                  <span>30+ Schüler online</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};