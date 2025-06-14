import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card } from '@/components/ui/card';

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
    <div className="min-h-screen bg-jimmy-body text-jimmy-gold">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">FAQ für Unternehmen</h1>
          <p className="text-xl text-jimmy-gold/80 max-w-2xl mx-auto">
            Häufig gestellte Fragen und Antworten für Unternehmen, die talentierte Auszubildende suchen
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
              Noch Fragen? Wir beraten Sie gerne!
            </h2>
            <p className="text-jimmy-gold/80 mb-6">
              Unser Team steht Ihnen für eine kostenlose Beratung zur Verfügung. 
              Gerne erklären wir Ihnen in einem persönlichen Gespräch, wie Jimmy 
              Ihnen bei der Suche nach den besten Auszubildenden helfen kann.
            </p>
            <div className="space-y-2">
              <p className="text-jimmy-gold">
                <strong>E-Mail:</strong> unternehmen@jimmy-portal.de
              </p>
              <p className="text-jimmy-gold">
                <strong>Telefon:</strong> +49 (0) 123 456789
              </p>
              <p className="text-jimmy-gold/60 text-sm">
                Montag bis Freitag: 8:00 - 18:00 Uhr
              </p>
            </div>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default FAQUnternehmen;