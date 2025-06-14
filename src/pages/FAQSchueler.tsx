import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card } from '@/components/ui/card';

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
    <div className="min-h-screen bg-jimmy-body text-jimmy-gold">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">FAQ für Schüler</h1>
          <p className="text-xl text-jimmy-gold/80 max-w-2xl mx-auto">
            Häufig gestellte Fragen und Antworten für Schüler auf der Suche nach dem perfekten Ausbildungsplatz
          </p>
        </div>

        <Card className="bg-jimmy-header border-jimmy-gold/20 p-6">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-jimmy-gold/20">
                <AccordionTrigger className="text-jimmy-gold hover:text-yellow-300 text-left">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-jimmy-gold/80">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Card>

        <div className="text-center mt-12">
          <Card className="bg-jimmy-header border-jimmy-gold/20 p-8">
            <h2 className="text-2xl font-bold text-jimmy-gold mb-4">
              Weitere Fragen?
            </h2>
            <p className="text-jimmy-gold/80 mb-6">
              Wenn du weitere Fragen hast, die hier nicht beantwortet wurden, 
              zögere nicht, uns zu kontaktieren. Unser Support-Team hilft dir gerne weiter!
            </p>
            <div className="space-y-2">
              <p className="text-jimmy-gold">
                <strong>E-Mail:</strong> support@jimmy-portal.de
              </p>
              <p className="text-jimmy-gold">
                <strong>Telefon:</strong> +49 (0) 123 456789
              </p>
              <p className="text-jimmy-gold/60 text-sm">
                Montag bis Freitag: 9:00 - 17:00 Uhr
              </p>
            </div>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default FAQSchueler;