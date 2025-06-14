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

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative h-96 w-full bg-gradient-to-br from-jimmy-gold/20 to-yellow-400/20 rounded-3xl flex items-center justify-center">
              <div className="text-6xl">🚀</div>
            </div>
            
            {/* Floating cards */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute top-4 right-4 bg-card border border-border/40 backdrop-blur-sm rounded-lg p-3 shadow-lg"
            >
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-xs font-medium">Live Bewerbungen</span>
              </div>
            </motion.div>
            
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2.5, repeat: Infinity }}
              className="absolute bottom-4 left-4 bg-card border border-border/40 backdrop-blur-sm rounded-lg p-3 shadow-lg"
            >
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4 text-jimmy-gold" />
                <span className="text-xs font-medium">30+ Schüler online</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};