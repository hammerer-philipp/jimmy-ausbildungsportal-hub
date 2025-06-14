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
              {/* Phone Outline with realistic styling */}
              <div className="w-72 h-[580px] bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 rounded-[3.5rem] p-3 shadow-2xl border-2 border-gray-700 dark:border-gray-600">
                {/* Screen with realistic bezel */}
                <div className="w-full h-full bg-black rounded-[3rem] p-1">
                  <div className="w-full h-full bg-white dark:bg-gray-900 rounded-[2.8rem] overflow-hidden relative">
                    {/* Status Bar - realistic iPhone style */}
                    <div className="h-12 bg-white dark:bg-gray-900 flex items-center justify-between px-6 pt-2">
                      <div className="flex items-center space-x-1">
                        <div className="text-xs font-medium text-black dark:text-white">9:41</div>
                      </div>
                      <div className="flex items-center space-x-1">
                        <div className="w-4 h-2 border border-black dark:border-white rounded-sm">
                          <div className="w-3 h-1 bg-green-500 rounded-sm mt-0.5 ml-0.5"></div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Dynamic Island / Notch */}
                    <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-24 h-6 bg-black rounded-full"></div>
                    
                    {/* Animated Content - realistic app screens */}
                    <div className="relative h-full overflow-hidden pt-8">
                      {/* Screen 1: Login/Welcome Screen */}
                      <motion.div
                        initial={{ opacity: 1 }}
                        animate={{ 
                          opacity: [1, 1, 1, 0, 0, 0, 0, 1],
                          x: [0, 0, 0, -100, -100, -100, -100, 0]
                        }}
                        transition={{ duration: 8, repeat: Infinity }}
                        className="absolute inset-0 px-6 py-4 bg-white dark:bg-gray-900"
                      >
                        <div className="text-center mt-8">
                          {/* App Header */}
                          <div className="flex items-center justify-center mb-8">
                            <div className="w-12 h-12 bg-gradient-to-r from-jimmy-gold to-yellow-400 rounded-xl flex items-center justify-center shadow-lg">
                              <span className="text-jimmy-header font-bold text-lg">J</span>
                            </div>
                            <h1 className="ml-3 text-xl font-bold bg-gradient-to-r from-jimmy-gold to-yellow-400 bg-clip-text text-transparent">Jimmy</h1>
                          </div>
                          
                          <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Willkommen zurück!</h2>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mb-8">Finde deinen Traumjob</p>
                          
                          {/* Mock Login Form */}
                          <div className="space-y-3">
                            <div className="h-12 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center px-4">
                              <div className="w-3 h-3 bg-gray-400 rounded-full mr-3"></div>
                              <div className="text-sm text-gray-500">E-Mail eingeben</div>
                            </div>
                            <div className="h-12 bg-gradient-to-r from-jimmy-gold to-yellow-400 rounded-lg flex items-center justify-center">
                              <span className="text-jimmy-header font-semibold">Anmelden</span>
                            </div>
                          </div>
                        </div>
                      </motion.div>

                      {/* Screen 2: Dashboard with job offers */}
                      <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ 
                          opacity: [0, 0, 0, 1, 1, 1, 0, 0],
                          x: [100, 100, 100, 0, 0, 0, -100, -100]
                        }}
                        transition={{ duration: 8, repeat: Infinity }}
                        className="absolute inset-0 px-6 py-4 bg-gray-50 dark:bg-gray-800"
                      >
                        <div>
                          {/* Header with notifications */}
                          <div className="flex items-center justify-between mb-6">
                            <div>
                              <h2 className="text-lg font-bold text-gray-900 dark:text-white">Dashboard</h2>
                              <p className="text-sm text-gray-600 dark:text-gray-400">3 neue Bewerbungen</p>
                            </div>
                            <div className="relative">
                              <div className="w-8 h-8 bg-jimmy-gold rounded-full"></div>
                              <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                                <span className="text-white text-xs">3</span>
                              </div>
                            </div>
                          </div>
                          
                          {/* Job Cards */}
                          <div className="space-y-3">
                            <motion.div 
                              animate={{ scale: [1, 1.02, 1] }}
                              transition={{ duration: 2, repeat: Infinity }}
                              className="bg-white dark:bg-gray-700 border border-jimmy-gold/30 rounded-xl p-4 shadow-sm"
                            >
                              <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-3">
                                  <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                                    <span className="text-white font-bold text-sm">BMW</span>
                                  </div>
                                  <div>
                                    <div className="text-sm font-semibold text-gray-900 dark:text-white">BMW Group</div>
                                    <div className="text-xs text-gray-500 dark:text-gray-400">Mechatroniker (m/w/d)</div>
                                  </div>
                                </div>
                                <div className="text-right">
                                  <div className="text-xs text-jimmy-gold font-semibold">NEU</div>
                                  <div className="text-xs text-gray-400">vor 2h</div>
                                </div>
                              </div>
                            </motion.div>
                            
                            <div className="bg-white dark:bg-gray-700 rounded-xl p-4 shadow-sm">
                              <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-3">
                                  <div className="w-10 h-10 bg-red-500 rounded-lg flex items-center justify-center">
                                    <span className="text-white font-bold text-xs">SIE</span>
                                  </div>
                                  <div>
                                    <div className="text-sm font-semibold text-gray-900 dark:text-white">Siemens AG</div>
                                    <div className="text-xs text-gray-500 dark:text-gray-400">IT-Spezialist (m/w/d)</div>
                                  </div>
                                </div>
                                <div className="text-xs text-gray-400">vor 1d</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>

                      {/* Screen 3: Success/Match Screen */}
                      <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ 
                          opacity: [0, 0, 0, 0, 0, 0, 1, 1],
                          x: [100, 100, 100, 100, 100, 100, 0, 0]
                        }}
                        transition={{ duration: 8, repeat: Infinity }}
                        className="absolute inset-0 px-6 py-4 bg-gradient-to-b from-jimmy-gold/10 to-green-50 dark:from-jimmy-gold/20 dark:to-green-900/20 flex items-center justify-center"
                      >
                        <div className="text-center">
                          <motion.div
                            animate={{ 
                              scale: [1, 1.2, 1],
                              rotate: [0, 5, -5, 0]
                            }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="text-6xl mb-4"
                          >
                            🎉
                          </motion.div>
                          <h3 className="text-xl font-bold text-jimmy-gold mb-2">Perfect Match!</h3>
                          <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">BMW möchte dich kennenlernen</p>
                          <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg">
                            <div className="flex items-center space-x-3 mb-3">
                              <div className="w-8 h-8 bg-blue-500 rounded-lg"></div>
                              <div className="text-left">
                                <div className="text-sm font-semibold text-gray-900 dark:text-white">BMW Group</div>
                                <div className="text-xs text-gray-500">München</div>
                              </div>
                            </div>
                            <div className="text-xs text-green-600 dark:text-green-400 font-semibold">✓ Bewerbung akzeptiert</div>
                          </div>
                        </div>
                      </motion.div>
                    </div>
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