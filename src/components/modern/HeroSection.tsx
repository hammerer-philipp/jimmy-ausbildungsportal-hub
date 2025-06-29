
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../ui/button';
import { ArrowRight, Play, Users, Building2, Trophy } from 'lucide-react';
import { useState, useEffect } from 'react';

export const HeroSection = () => {
  const [currentScreen, setCurrentScreen] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentScreen((prev) => (prev + 1) % 3); // Nur 3 Screens jetzt
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
              <span className="text-sm font-medium text-jimmy-gold">So einfach war bewerben noch nie</span>
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
              Mit Jimmy wird der Bewerbungsprozess revolutioniert. 
              Schreibe kurz mit unserem Chatbot und warte danach bis sich Unternehmen bei dir melden.
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
                asChild
              >
                <a href="https://jimmyausbildung.de" target="_blank" rel="noopener noreferrer">
                  <Users className="mr-2 h-5 w-5" />
                  Als Schüler starten
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-jimmy-gold/30 text-foreground hover:bg-jimmy-gold/10 group text-lg px-8 py-6"
                asChild
              >
                <a href="https://jimmyausbildung.de" target="_blank" rel="noopener noreferrer">
                  <Building2 className="mr-2 h-5 w-5" />
                  Als Unternehmen starten
                </a>
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
            className="relative flex justify-center pb-16 lg:pb-0"
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
                  
                    {/* Screen mit realistischen App-Screenshots - iPhone SE Format */}
                    <div className="bg-black rounded-[2rem] overflow-hidden relative h-[568px] w-[320px] shadow-inner">
                      
                      {/* App Content - animiert durch die Screenshots */}
                      <div className="h-full bg-gray-900 relative overflow-hidden rounded-[2rem]">
                        <AnimatePresence mode="wait">
                          {/* Screenshot 1: Login Screen - iPhone SE angepasst */}
                          {currentScreen === 0 && (
                            <motion.div
                              key="login-screen"
                              initial={{ opacity: 0, scale: 1.1 }}
                              animate={{ opacity: 1, scale: 1 }}
                              exit={{ opacity: 0, scale: 0.9 }}
                              transition={{ duration: 0.5 }}
                              className="absolute inset-0 rounded-[2rem] overflow-hidden"
                            >
                              <img 
                                src="/icon/login.png" 
                                alt="Jimmy Login Screen"
                                className="w-full h-full object-cover"
                              />
                            </motion.div>
                          )}
                          
                          {/* Screenshot 2: Jimmy Interview - iPhone SE angepasst */}
                          {currentScreen === 1 && (
                            <motion.div
                              key="interview-screen"
                              initial={{ opacity: 0, x: 300 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: -300 }}
                              transition={{ duration: 0.5, ease: "easeInOut" }}
                              className="absolute inset-0 rounded-[2rem] overflow-hidden"
                            >
                              <img 
                                src="/icon/interview.png" 
                                alt="Jimmy Jobinterview Screen"
                                className="w-full h-full object-cover"
                              />
                            </motion.div>
                          )}
                          
                          {/* Screenshot 3: Bewerbungs-Chat - iPhone SE angepasst */}
                          {currentScreen === 2 && (
                            <motion.div
                              key="chat-screen"
                              initial={{ opacity: 0, x: 300 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: -300 }}
                              transition={{ duration: 0.5, ease: "easeInOut" }}
                              className="absolute inset-0 rounded-[2rem] overflow-hidden"
                            >
                              <img 
                                src="/icon/chat.png" 
                                alt="Bewerbungs-Chat Screen"
                                className="w-full h-full object-cover"
                              />
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


              <motion.div
                animate={{ 
                  scale: [1, 1.05, 1],
                  y: [0, -5, 0]
                }}
                transition={{ duration: 2.5, repeat: Infinity }}
                className="absolute -bottom-2 -left-2 md:-bottom-6 md:-left-6 bg-jimmy-gold text-jimmy-header text-xs px-2 py-1 md:px-4 md:py-2 rounded-full shadow-lg z-10"
              >
                <div className="flex items-center space-x-1">
                  <Users className="w-3 h-3" />
                  <span className="hidden sm:inline">30+ Schüler</span>
                  <span className="sm:hidden">30+</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
