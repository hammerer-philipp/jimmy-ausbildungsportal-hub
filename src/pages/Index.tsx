import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, Building, CheckCircle, Star, ArrowRight, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  const features = [
    {
      icon: <Users className="h-8 w-8 text-jimmy-gold" />,
      title: "Für Schüler kostenlos",
      description: "Erstelle dein Profil vollkommen kostenlos und lass dich von Unternehmen finden."
    },
    {
      icon: <Building className="h-8 w-8 text-jimmy-gold" />,
      title: "Unternehmen bewerben sich",
      description: "Der Spieß wird umgedreht - Unternehmen bewerben sich bei talentierten Schülern."
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-jimmy-gold" />,
      title: "Passende Matches",
      description: "Intelligente Algorithmen sorgen für perfekte Matches zwischen Schülern und Unternehmen."
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-jimmy-gold" />,
      title: "Höhere Erfolgsrate",
      description: "Deutlich höhere Vermittlungsquote als bei herkömmlichen Bewerbungsverfahren."
    }
  ];

  const testimonials = [
    {
      name: "Anna Schmidt",
      role: "Schülerin",
      text: "Durch Jimmy habe ich meinen Traumausbildungsplatz gefunden, ohne mich bei 20 Unternehmen bewerben zu müssen!",
      rating: 5
    },
    {
      name: "Thomas Weber",
      role: "HR-Manager, TechCorp GmbH",
      text: "Jimmy hat revolutioniert, wie wir Auszubildende finden. Wir erreichen jetzt auch passive Kandidaten.",
      rating: 5
    },
    {
      name: "Lisa Müller",
      role: "Schülerin",
      text: "Endlich eine Plattform, die versteht, dass gute Schüler nicht betteln müssen. Hier werde ich wertgeschätzt!",
      rating: 5
    }
  ];

  const stats = [
    { number: "30+", label: "Registrierte Schüler" },
    { number: "15+", label: "Partner-Unternehmen" },
    { number: "85%", label: "Erfolgsrate" },
    { number: "2023", label: "Gegründet" }
  ];

  return (
    <div className="min-h-screen bg-jimmy-body text-jimmy-gold">
      <Header />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <Badge className="bg-jimmy-gold text-jimmy-header mb-6">
            Revolutionäre Ausbildungsplatz-Vermittlung
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Der Bewerbungsprozess, <span className="text-yellow-300">neu gedacht</span>
          </h1>
          <p className="text-xl text-jimmy-gold/80 mb-8 max-w-2xl mx-auto">
            Bei Jimmy bewerben sich Unternehmen bei talentierten Schülern. 
            Keine endlosen Bewerbungen mehr - lass dich finden!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-jimmy-gold text-jimmy-header hover:bg-yellow-400 text-lg px-8 py-3">
              Als Schüler kostenlos registrieren
            </Button>
            <Button variant="outline" className="border-jimmy-gold text-jimmy-gold hover:bg-jimmy-gold hover:text-jimmy-header text-lg px-8 py-3">
              Für Unternehmen
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Warum Jimmy?</h2>
          <p className="text-jimmy-gold/80 max-w-2xl mx-auto">
            Jimmy revolutioniert die Art, wie Schüler und Unternehmen zueinander finden
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-jimmy-header border-jimmy-gold/20 text-center hover:border-jimmy-gold/40 transition-colors">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <CardTitle className="text-jimmy-gold">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-jimmy-gold/80">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-jimmy-header py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-4xl font-bold text-jimmy-gold mb-2">{stat.number}</div>
                <div className="text-jimmy-gold/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">So funktioniert's</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-jimmy-header border-jimmy-gold/20 text-center">
            <CardHeader>
              <div className="w-12 h-12 bg-jimmy-gold text-jimmy-header rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                1
              </div>
              <CardTitle className="text-jimmy-gold">Profil erstellen</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-jimmy-gold/80">
                Schüler erstellen ein aussagekräftiges Profil mit ihren Stärken und Interessen
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-jimmy-header border-jimmy-gold/20 text-center">
            <CardHeader>
              <div className="w-12 h-12 bg-jimmy-gold text-jimmy-header rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                2
              </div>
              <CardTitle className="text-jimmy-gold">Gefunden werden</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-jimmy-gold/80">
                Unternehmen durchsuchen unsere Datenbank und bewerben sich bei passenden Schülern
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-jimmy-header border-jimmy-gold/20 text-center">
            <CardHeader>
              <div className="w-12 h-12 bg-jimmy-gold text-jimmy-header rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                3
              </div>
              <CardTitle className="text-jimmy-gold">Auswählen</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-jimmy-gold/80">
                Schüler wählen aus den Bewerbungen die interessantesten aus und nehmen Kontakt auf
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-jimmy-header py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-jimmy-gold mb-4">Das sagen unsere Nutzer</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-jimmy-body border-jimmy-gold/20">
                <CardHeader>
                  <div className="flex items-center space-x-1 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-jimmy-gold text-jimmy-gold" />
                    ))}
                  </div>
                  <CardTitle className="text-jimmy-gold text-lg">{testimonial.name}</CardTitle>
                  <p className="text-jimmy-gold/60 text-sm">{testimonial.role}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-jimmy-gold/80 italic">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">
            Bereit für die Zukunft der Ausbildungsplatz-Suche?
          </h2>
          <p className="text-xl text-jimmy-gold/80 mb-8">
            Schließe dich bereits 30+ Schülern und 15+ Unternehmen an, die Jimmy vertrauen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-jimmy-gold text-jimmy-header hover:bg-yellow-400 text-lg px-8 py-3">
              Jetzt kostenlos starten
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Link to="/preise">
              <Button variant="outline" className="border-jimmy-gold text-jimmy-gold hover:bg-jimmy-gold hover:text-jimmy-header text-lg px-8 py-3">
                Preise ansehen
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
