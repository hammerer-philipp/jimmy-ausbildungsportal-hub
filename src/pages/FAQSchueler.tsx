
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
    answer: "Du absolvierst ein kurzes Chatbot-Interview mit Jimmy. Dieses wird gespeichert und anonymisiert Unternehmen zur Verfügung gestellt. Die Unternehmen melden sich bei dir, wenn dein Profil zu ihrer Ausbildung passt – du musst dich also um nichts kümmern."
  },
  {
    question: "Ist Jimmy wirklich kostenlos für Schüler?",
    answer: "Ja, Jimmy ist für Schüler vollständig kostenlos. Du zahlst nichts für das Interview, den Service oder den Kontakt mit Unternehmen."
  },
  {
    question: "Welche Informationen muss ich in mein Profil eingeben?",
    answer: "Du gibst keine klassischen Profildaten ein. Stattdessen beantwortest du Fragen in einem digitalen Interview – etwa zu deinen Interessen, Stärken und Berufsvorstellungen. Diese Infos nutzt Jimmy, um dich Unternehmen vorzuschlagen."
  },
  {
    question: "Wie schnell erhalte ich Bewerbungen von Unternehmen?",
    answer: "Das hängt davon ab, wie gut dein Interview zu den Anforderungen der Unternehmen passt. Es kann wenige Stunden bis hin zu mehreren Tagen dauern."
  },
  {
    question: "Kann ich auch nach spezifischen Ausbildungsberufen suchen?",
    answer: "Nein – bei Jimmy läuft es andersherum: Du wirst gefunden. Unternehmen sehen, ob dein Interview zu ihrem Ausbildungsangebot passt, und melden sich bei dir. Das macht den Prozess für dich stressfrei und einfach."
  },
  {
    question: "Was passiert, wenn mir eine Bewerbung gefällt?",
    answer: "Wenn dir ein Unternehmen gefällt, kannst du den Kontakt ausbauen, so kannst du mehr über den Beruf erfahren und zu einem Kennenlerngespräch eingeladen werden."
  },
  {
    question: "Kann ich mein Interview später nochmal machen?",
    answer: "Ja, wenn sich etwas an deinen Interessen oder Zielen geändert hat, kannst du ein neues Interview machen. So bleibst du immer aktuell und erhältst bessere Angebote."
  },
  {
    question: "Wie schützt Jimmy meine Daten?",
    answer: "Jimmy schützt deine Daten nach aktuellen DSGVO-Standards."
  },
  {
    question: "Gibt es eine Mindestaltersgrenze?",
    answer: "Ja, du solltest mindestens 14 Jahre alt sein, um das Interview absolvieren zu können. Wenn du unter 18 bist, brauchst du die Zustimmung deiner Eltern."
  },
  {
    question: "Kann ich mehrere Ausbildungsrichtungen angeben?",
    answer: "Ja, im Interview kannst du mehrere Interessenbereiche nennen. So wirst du für unterschiedliche Berufe vorgeschlagen – zum Beispiel im Handwerk, im Büro oder in sozialen Berufen."
  },
  {
    question: "Was ist, wenn ich bereits einen Ausbildungsplatz gefunden habe?",
    answer: "Dann freuen wir uns für dich! Aber beachte: Dein Interview bleibt im System,du musst es selbstständig löschen. "
  },
  {
    question: "Bietet Jimmy auch Hilfe bei der Bewerbung?",
    answer: "Ja! Wir geben dir Tipps, wie du im Gespräch überzeugst, und unterstützen dich bei Bedarf mit Bewerbungshilfen. Schau doch dafür einfach in unserem Blog oder auf unseren Socialmedia-Kanälen vorbei."
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
                <CardContent className="flex justify-center">
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

export default FAQSchueler;
