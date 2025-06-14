import { ModernHeader } from '@/components/modern/ModernHeader';
import Footer from '@/components/Footer';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Mail, Phone, HelpCircle } from 'lucide-react';

const FAQSchueler = () => {
  const faqItems = [
    {
      question: "Wie funktioniert Jimmy für Schüler?",
      answer: "Bei Jimmy erstellst du ein Profil mit deinen Stärken, Interessen und Qualifikationen. Unternehmen durchsuchen dann unsere Datenbank und bewerben sich bei dir für ihre Ausbildungsplätze. Du wählst aus den eingegangenen Bewerbungen die interessantesten aus."
    },
    {
      question: "Ist Jimmy wirklich kostenlos für Schüler?",
      answer: "Ja, absolut! Für Schüler ist Jimmy komplett kostenlos. Du kannst dein Profil erstellen, Bewerbungen von Unternehmen erhalten und den gesamten Service nutzen, ohne einen Cent zu bezahlen."
    },
    {
      question: "Welche Informationen muss ich in mein Profil eingeben?",
      answer: "Du gibst grundlegende Informationen wie Name, Alter, Schulabschluss, Interessen und Stärken ein. Optional kannst du auch Hobbys, besondere Fähigkeiten oder bereits absolvierte Praktika hinzufügen. Je vollständiger dein Profil, desto bessere Matches erhältst du."
    },
    {
      question: "Wie schnell erhalte ich Bewerbungen von Unternehmen?",
      answer: "Das hängt von deinem Profil und den aktuell verfügbaren Ausbildungsplätzen ab. Erfahrungsgemäß erhalten aktive Profile innerhalb der ersten Woche erste Bewerbungen von Unternehmen."
    },
    {
      question: "Kann ich auch nach spezifischen Ausbildungsberufen suchen?",
      answer: "Ja! Du kannst in deinem Profil angeben, welche Ausbildungsberufe dich interessieren. Unternehmen, die genau diese Ausbildungsplätze anbieten, werden dann gezielt auf dich aufmerksam."
    },
    {
      question: "Was passiert, wenn mir eine Bewerbung gefällt?",
      answer: "Wenn dir eine Unternehmensbewerbung gefällt, kannst du den Kontakt annehmen. Danach erhältst du alle Kontaktdaten und kannst direkt mit dem Unternehmen in Verbindung treten, um weitere Details zu besprechen oder ein Vorstellungsgespräch zu vereinbaren."
    },
    {
      question: "Kann ich mein Profil jederzeit ändern?",
      answer: "Selbstverständlich! Du kannst dein Profil jederzeit aktualisieren, neue Qualifikationen hinzufügen oder deine Interessen anpassen. Je aktueller dein Profil ist, desto besser sind die Matches."
    },
    {
      question: "Wie schützt Jimmy meine Daten?",
      answer: "Datenschutz ist uns sehr wichtig. Deine Daten werden nach den neuesten DSGVO-Standards gesichert und nur an Unternehmen weitergegeben, denen du explizit zugestimmt hast. Du behältst jederzeit die Kontrolle über deine Informationen."
    },
    {
      question: "Gibt es eine Mindestaltersgrenze?",
      answer: "Du musst mindestens 15 Jahre alt sein, um dich bei Jimmy zu registrieren. Wenn du unter 18 bist, benötigst du die Zustimmung deiner Erziehungsberechtigten."
    },
    {
      question: "Kann ich auch mehrere Ausbildungsrichtungen angeben?",
      answer: "Ja, du kannst durchaus mehrere Ausbildungsbereiche angeben, die dich interessieren. Das erhöht deine Chancen auf passende Bewerbungen von verschiedenen Unternehmen."
    },
    {
      question: "Was ist, wenn ich bereits einen Ausbildungsplatz gefunden habe?",
      answer: "Glückwunsch! Du kannst dein Profil einfach auf 'inaktiv' setzen oder löschen. So erhältst du keine weiteren Bewerbungen von Unternehmen."
    },
    {
      question: "Bietet Jimmy auch Hilfe bei der Bewerbung?",
      answer: "Ja, wir bieten dir Tipps für ein überzeugendes Profil und Unterstützung beim Bewerbungsprozess. Zusätzlich findest du in unserem Blog hilfreiche Artikel rund um das Thema Ausbildung."
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
              <HelpCircle className="w-16 h-16 text-jimmy-gold mx-auto mb-6" />
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                FAQ für <span className="text-jimmy-gold">Schüler</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Häufig gestellte Fragen und Antworten für Schüler auf der Suche nach dem perfekten Ausbildungsplatz
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
                    Weitere Fragen?
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Wenn du weitere Fragen hast, die hier nicht beantwortet wurden, 
                    zögere nicht, uns zu kontaktieren. Unser Support-Team hilft dir gerne weiter!
                  </p>
                </CardHeader>
                <CardContent className="grid md:grid-cols-2 gap-8">
                  <div className="text-center">
                    <Mail className="w-8 h-8 text-jimmy-gold mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">E-Mail Support</h3>
                    <p className="text-muted-foreground mb-4">support@jimmy-portal.de</p>
                    <Button variant="outline" className="border-jimmy-gold text-jimmy-gold hover:bg-jimmy-gold hover:text-jimmy-header">
                      E-Mail schreiben
                    </Button>
                  </div>
                  <div className="text-center">
                    <Phone className="w-8 h-8 text-jimmy-gold mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">Telefon Support</h3>
                    <p className="text-muted-foreground mb-2">+49 (0) 123 456789</p>
                    <p className="text-sm text-muted-foreground mb-4">Mo-Fr: 9:00 - 17:00 Uhr</p>
                    <Button variant="outline" className="border-jimmy-gold text-jimmy-gold hover:bg-jimmy-gold hover:text-jimmy-header">
                      Anrufen
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

export default FAQSchueler;