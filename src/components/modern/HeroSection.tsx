import { motion } from 'framer-motion';
import { Button } from '../ui/button';
import { ArrowRight, Play, Users, Building2, Trophy } from 'lucide-react';

export const HeroSection = () => {
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

          {/* Mobile Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center"
          >
            {/* Phone Frame */}
            <div className="relative">
              {/* Phone Outline */}
              <div className="w-64 h-[500px] bg-gradient-to-b from-gray-800 to-gray-900 rounded-[3rem] p-2 shadow-2xl">
                {/* Screen */}
                <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                  {/* Status Bar */}
                  <div className="h-8 bg-gradient-to-r from-jimmy-gold to-yellow-400 flex items-center justify-between px-4">
                    <span className="text-xs font-semibold text-jimmy-header">Jimmy</span>
                    <div className="flex items-center space-x-1">
                      <div className="w-1 h-1 bg-jimmy-header rounded-full"></div>
                      <div className="w-1 h-1 bg-jimmy-header rounded-full"></div>
                      <div className="w-1 h-1 bg-jimmy-header rounded-full"></div>
                    </div>
                  </div>
                  
                  {/* Animated Content */}
                  <div className="relative h-full overflow-hidden">
                    {/* Screen 1: Profile Creation */}
                    <motion.div
                      initial={{ opacity: 1 }}
                      animate={{ 
                        opacity: [1, 1, 0, 0, 0, 0, 1],
                        x: [0, 0, -100, -100, -100, -100, 0]
                      }}
                      transition={{ duration: 6, repeat: Infinity }}
                      className="absolute inset-0 p-4 bg-gradient-to-b from-blue-50 to-white"
                    >
                      <div className="text-center">
                        <div className="w-16 h-16 bg-jimmy-gold rounded-full mx-auto mb-3 flex items-center justify-center">
                          <span className="text-white text-xl">👤</span>
                        </div>
                        <h3 className="text-sm font-bold mb-2">Profil erstellen</h3>
                        <div className="space-y-2">
                          <div className="h-3 bg-gray-200 rounded w-3/4 mx-auto"></div>
                          <div className="h-3 bg-gray-200 rounded w-1/2 mx-auto"></div>
                        </div>
                      </div>
                    </motion.div>

                    {/* Screen 2: Company Applications */}
                    <motion.div
                      initial={{ opacity: 0, x: 100 }}
                      animate={{ 
                        opacity: [0, 0, 1, 1, 0, 0, 0],
                        x: [100, 100, 0, 0, -100, -100, 100]
                      }}
                      transition={{ duration: 6, repeat: Infinity }}
                      className="absolute inset-0 p-4 bg-gradient-to-b from-green-50 to-white"
                    >
                      <div>
                        <h3 className="text-sm font-bold mb-3 text-center">Bewerbungen erhalten</h3>
                        <div className="space-y-2">
                          <motion.div 
                            animate={{ scale: [1, 1.02, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="bg-white border border-jimmy-gold/30 rounded-lg p-2"
                          >
                            <div className="flex items-center space-x-2">
                              <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
                              <div>
                                <div className="text-xs font-semibold">BMW Group</div>
                                <div className="text-xs text-gray-500">Mechatroniker</div>
                              </div>
                            </div>
                          </motion.div>
                          <div className="bg-white border border-gray-200 rounded-lg p-2">
                            <div className="flex items-center space-x-2">
                              <div className="w-8 h-8 bg-red-500 rounded-full"></div>
                              <div>
                                <div className="text-xs font-semibold">Siemens AG</div>
                                <div className="text-xs text-gray-500">IT-Spezialist</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>

                    {/* Screen 3: Success */}
                    <motion.div
                      initial={{ opacity: 0, x: 100 }}
                      animate={{ 
                        opacity: [0, 0, 0, 0, 1, 1, 0],
                        x: [100, 100, 100, 100, 0, 0, -100]
                      }}
                      transition={{ duration: 6, repeat: Infinity }}
                      className="absolute inset-0 p-4 bg-gradient-to-b from-jimmy-gold/20 to-white flex items-center justify-center"
                    >
                      <div className="text-center">
                        <motion.div
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ duration: 1, repeat: Infinity }}
                          className="text-4xl mb-3"
                        >
                          🎉
                        </motion.div>
                        <h3 className="text-sm font-bold text-jimmy-gold">Ausbildungsplatz gefunden!</h3>
                        <p className="text-xs text-gray-600 mt-1">Herzlichen Glückwunsch!</p>
                      </div>
                    </motion.div>
                  </div>
                </div>
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
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};