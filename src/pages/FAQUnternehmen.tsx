import { ModernHeader } from '@/components/modern/ModernHeader';
import Footer from '@/components/Footer';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Mail, Phone, Building2 } from 'lucide-react';

const FAQUnternehmen = () => {
  const faqItems = [
  {
    question: "Wie funktioniert Jimmy für Unternehmen?",
    answer: "Unternehmen erstellen ein Profil und legen ihre Ausbildungs- und/oder Praktikumsplätze an. Anschließend durchsuchen sie die Schülerdatenbank und senden gezielte Anfragen an passende Kandidaten. Die Schüler entscheiden, ob sie Interesse haben – es handelt sich also um einen umgedrehten Bewerbungsprozess."
  },
  {
    question: "Was kostet Jimmy für Unternehmen?",
    answer: "Jimmy funktioniert über ein Abonnement-Modell. Das Jahresabo kostet 600 € und erlaubt unbegrenzten Zugriff auf die Plattform, inklusive aller Funktionen und Kontaktanfragen an Schüler."
  },
  {
    question: "Wie unterscheidet sich Jimmy vom traditionellen Bewerbungsprozess?",
    answer: "Bei Jimmy bewerben sich nicht die Schüler, sondern Sie als Unternehmen. So können Sie aktiv passende Kandidaten ansprechen – auch solche, die sich sonst nicht bewerben würden."
  },
  {
    question: "Welche Informationen erhalte ich über die Schüler?",
    answer: "Sie sehen anonymisierte Profile mit Informationen zu Schulform, Interessen, Stärken, Berufswünschen und ggf. Praktikumserfahrungen. Die Kontaktaufnahme erfolgt über das Portal selbst."
  },
  {
    question: "Gibt es eine Mindestvertragslaufzeit?",
    answer: "Ja, das Jahresabo läuft für 12 Monate. Die Kündigungsfrist beträgt 3 Monate vor Ablauf der Laufzeit."
  },
  {
    question: "Wie viele Bewerbungen kann ich pro Jahr senden?",
    answer: "Unbegrenzt. Im Abo sind alle Kontaktaufnahmen enthalten – es gibt kein Limit für Anfragen an Schüler."
  },
  {
    question: "Kann ich mehrere Ausbildungsberufe gleichzeitig anbieten?",
    answer: "Ja, Sie können beliebig viele Ausbildungs- und Praktikumsangebote gleichzeitig hinterlegen und individuell passende Schüler dafür anfragen."
  },
  {
    question: "Gibt es Unterstützung bei der Nutzung der Plattform?",
    answer: "Ja, wir bieten eine persönliche Einführung, eine Support-Datenbank und direkten Support per E-Mail. Unser Ziel ist, dass Sie schnell und erfolgreich starten."
  },
  {
    question: "Kann ich mein Unternehmensprofil selbst verwalten?",
    answer: "Ja, Sie können Ihr Profil jederzeit selbst verwalten."
  },
  {
    question: "Wie schnell kann ich mit der Nutzung beginnen?",
    answer: "Sobald Sie sich registriert und das Abo abgeschlossen haben, können Sie direkt starten."
  },
  {
    question: "Gibt es eine Erfolgsgarantie?",
    answer: "Eine Garantie können wir leider nicht geben."
  },
  {
    question: "Kann ich auch Praktikumsplätze über Jimmy anbieten?",
    answer: "Ja Sie können in Ihrem Profil Praktikumsangebote anlegen und gezielt Schüler dafür kontaktieren."
  }
];

  return (
    <div className="min-h-screen bg-background">
      <ModernHeader />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-background to-muted/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center max-w-3xl mx-auto"
            >
              <Building2 className="w-16 h-16 text-jimmy-gold mx-auto mb-6" />
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                FAQ für <span className="text-jimmy-gold">Unternehmen</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Häufig gestellte Fragen und Antworten für Unternehmen, die talentierte Auszubildende suchen
              </p>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Card className="border-border/40 max-w-4xl mx-auto">
                <CardContent className="p-8">
                  <Accordion type="single" collapsible className="w-full">
                    {faqItems.map((item, index) => (
                      <AccordionItem key={index} value={`item-${index}`} className="border-border/40">
                        <AccordionTrigger className="text-foreground hover:text-jimmy-gold text-left">
                          {item.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                          {item.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <Card className="border-border/40">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl font-bold mb-4">
                    Noch Fragen? Wir beraten Sie gerne!
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Unser Team steht Ihnen für eine kostenlose Beratung zur Verfügung. 
                    Gerne erklären wir Ihnen, wie Jimmy 
                    Ihnen bei der Suche nach den besten Auszubildenden helfen kann.
                  </p>
                </CardHeader>
                <CardContent className="flex justify-center">
                  <div className="text-center">
                    <Mail className="w-8 h-8 text-jimmy-gold mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">E-Mail Support</h3>
                    <p className="text-muted-foreground mb-4">kontakt@jimmy-ausbildung.de</p>
                    <a href="mailto:kontakt@jimmy-ausbildung.de">
                    <Button variant="outline" className="border-jimmy-gold text-jimmy-gold hover:bg-jimmy-gold hover:text-jimmy-header">
                      E-Mail schreiben
                    </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default FAQUnternehmen;
