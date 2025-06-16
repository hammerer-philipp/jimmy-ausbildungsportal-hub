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
      answer: "Als Unternehmen erstellen Sie ein Profil und definieren Ihre Ausbildungsplätze. Sie können dann in unserer Schülerdatenbank nach passenden Kandidaten suchen und sich bei ihnen bewerben. Die Schüler entscheiden, ob sie Interesse an Ihrem Angebot haben."
    },
    {
      question: "Was kostet Jimmy für Unternehmen?",
      answer: "Jimmy kostet für Unternehmen 600€ pro Jahr. Dafür erhalten Sie Zugang zu unserer gesamten Schülerdatenbank und können unbegrenzt Bewerbungen an passende Kandidaten senden."
    },
    {
      question: "Wie unterscheidet sich Jimmy vom traditionellen Bewerbungsprozess?",
      answer: "Bei Jimmy dreht sich der Bewerbungsprozess um: Anstatt dass sich Schüler bei Ihnen bewerben, bewerben Sie sich bei den Schülern. Das macht Sie als Arbeitgeber proaktiver und hilft Ihnen, auch passive Kandidaten zu erreichen."
    },
    {
      question: "Welche Informationen erhalte ich über die Schüler?",
      answer: "Sie sehen detaillierte Profile mit Informationen über Schulabschluss, Interessen, Stärken, absolvierte Praktika und Berufswünsche. Nach einer erfolgreichen Kontaktaufnahme erhalten Sie auch die Kontaktdaten."
    },
    {
      question: "Gibt es eine Mindestvertragslaufzeit?",
      answer: "Unser Standardvertrag läuft ein Jahr. Eine Kündigung ist mit einer Frist von 3 Monaten zum Vertragsende möglich. So haben Sie ausreichend Zeit, die Plattform vollständig zu nutzen."
    },
    {
      question: "Wie viele Bewerbungen kann ich pro Jahr senden?",
      answer: "Es gibt keine Begrenzung bei der Anzahl der Bewerbungen, die Sie senden können. Sie zahlen einen festen Jahresbeitrag und können unbegrenzt mit passenden Schülern in Kontakt treten."
    },
    {
      question: "Kann ich mehrere Ausbildungsberufe gleichzeitig anbieten?",
      answer: "Ja, Sie können beliebig viele verschiedene Ausbildungsberufe in Ihrem Unternehmensprofil hinterlegen und entsprechend nach Schülern mit passenden Interessen suchen."
    },
    {
      question: "Wie erfolgreich ist Jimmy bei der Vermittlung?",
      answer: "Unsere bisherigen Partnernunternehmen berichten von einer deutlich höheren Erfolgsquote als bei herkömmlichen Bewerbungsverfahren, da sie gezielt auf interessierte und passende Kandidaten zugehen können."
    },
    {
      question: "Gibt es Unterstützung bei der Nutzung der Plattform?",
      answer: "Ja, wir bieten eine ausführliche Einführung in die Plattform sowie fortlaufenden Support. Unser Team steht Ihnen bei Fragen zur Verfügung und hilft bei der Optimierung Ihrer Suche."
    },
    {
      question: "Kann ich mein Unternehmensprofil selbst verwalten?",
      answer: "Selbstverständlich! Sie haben vollen Zugriff auf Ihr Profil und können jederzeit Informationen zu Ihrem Unternehmen, verfügbaren Ausbildungsplätzen oder Anforderungen aktualisieren."
    },
    {
      question: "Wie schnell kann ich mit der Nutzung beginnen?",
      answer: "Nach der Registrierung und Zahlung können Sie sofort mit der Nutzung beginnen. Die Einrichtung Ihres Unternehmensprofils dauert etwa 30 Minuten."
    },
    {
      question: "Gibt es eine Erfolgsgarantie?",
      answer: "Während wir keine Erfolgsgarantie geben können, bieten wir Ihnen nach den ersten 3 Monaten ein ausführliches Beratungsgespräch an, um Ihre Strategie zu optimieren und den Erfolg zu steigern."
    },
    {
      question: "Kann ich auch Praktikumsplätze über Jimmy anbieten?",
      answer: "Ja, Sie können auch Praktikumsplätze über Jimmy anbieten. Viele Schüler suchen gezielt nach Praktikumsmöglichkeiten, um verschiedene Berufe kennenzulernen."
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
                <CardContent className="grid md:grid-cols-2 gap-8">
                  <div className="text-center">
                    <Mail className="w-8 h-8 text-jimmy-gold mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">E-Mail Support</h3>
                    <p className="text-muted-foreground mb-4">kontakt@jimmy-ausbildung.de</p>
                    <Button variant="outline" className="border-jimmy-gold text-jimmy-gold hover:bg-jimmy-gold hover:text-jimmy-header">
                      E-Mail schreiben
                    </Button>
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