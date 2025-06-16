
import { ModernHeader } from '@/components/modern/ModernHeader';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { FileText, Users, Building2, CreditCard, Calendar, Shield, AlertTriangle, Scale } from 'lucide-react';

const AGB = () => {
  const sections = [
    {
      icon: FileText,
      title: "1. Geltungsbereich und Vertragsgegenstand",
      content: [
        "Die Jimmy UG (haftungsbeschränkt) bietet unter der Webseite jimmyausbildung.de (im Folgenden: Jimmy – Das Ausbildungsportal) eine webbasierte Software für die Ausbildungs- und Praktika Vermittlung (im Folgenden: Software) an.",
        "Die folgenden Allgemeinen Geschäftsbedingungen gelten für alle Verträge, die zwischen der Jimmy UG (haftungsbeschränkt) und Kunden (z. B. Unternehmen und Privatpersonen) Zustandekommen."
      ]
    },
    {
      icon: Users,
      title: "2. Vertragsschluss",
      content: [
        "(2.1) Testphase: Auf Anfrage stellt die Jimmy UG den Unternehmen einen Testzugang zur Verfügung. Sobald der Zugriff eingerichtet wurde, beginnt die kostenlose Testphase. Während der Testphase kann die Software uneingeschränkt genutzt werden.",
        "Es besteht kein Anspruch des Unternehmens auf eine kostenlose Testphase. Die Jimmy UG (haftungsbeschränkt) kann diese ohne Begründung verweigern. Insbesondere ist nach Abschluss der Testphase eine zweite Testphase ausgeschlossen.",
        "(2.2) Übergang zur kostenpflichtigen Nutzung: Der Testzugang geht nicht automatisch in einen kostenpflichtigen Zugang über. Ein Vertrag über die weitere Nutzung kommt zustande, indem der Kunde in der Weboberfläche oder auf einem anderen Kanal eine Buchung durchführt."
      ]
    },
    {
      icon: CreditCard,
      title: "3. Abrechnung",
      content: [
        "(3.1) Die Jimmy UG (haftungsbeschränkt) berechnet die Nutzung ihrer Software pro Anfrage. Die aktuellen Preise sind auf der Webseite von Jimmy – Das Ausbildungsportal zu finden. Jede Anfrage wird direkt nach deren Bestätigung abgerechnet und der entsprechende Betrag sofort vom hinterlegten Zahlungsmittel eingezogen.",
        "(3.2) Vertragslaufzeit: Der Vertrag im Rahmen des Pauschalmodells hat eine Mindestlaufzeit von 12 Monaten und verlängert sich nach Ablauf dieser Laufzeit automatisch um ein weiteres Jahr, wenn er nicht mit einer Frist von einem Monat zum Ende der Abrechnungsperiode gekündigt wird.",
        "(3.3) Kündigung: Das Vertragsverhältnis im Pauschalmodell kann vom Kunden nach Ablauf der 12-monatigen Mindestlaufzeit mit einer Frist von einem Monat zum Ende der jeweiligen Abrechnungsperiode gekündigt werden."
      ]
    },
    {
      icon: Building2,
      title: "4. Rechte und Pflichten des Kunden",
      content: [
        "(4.1) Nutzungsrecht: Die Jimmy UG (haftungsbeschränkt) räumt dem Kunden das einfache und nicht übertragbare sowie zeitlich begrenzte Recht zur Nutzung der gebuchten Pakete ein.",
        "(4.2) Sorgfaltspflichten: Der Kunde verpflichtet sich, die Software ausschließlich vertragsgemäß zu nutzen und Dritten nicht zur Nutzung zur Verfügung zu stellen. Er ist dafür verantwortlich, dass keine unbefugten Personen Zugriff auf die Software erhalten."
      ]
    },
    {
      icon: Shield,
      title: "5. Gewährleistung",
      content: [
        "Bei Sach- und Rechtsmängeln gelten die gesetzlichen Vorschriften, soweit nachfolgend nicht anderes bestimmt ist. Gewährleistungsansprüche verjähren ein Jahr nach Entstehung. Ansprüche des Kunden auf Schadensersatz bzw. Ersatz vergeblicher Aufwendungen bestehen auch bei Mängeln nur nach Maßgabe von Ziffer 6 und sind im Übrigen ausgeschlossen."
      ]
    },
    {
      icon: AlertTriangle,
      title: "6. Haftung",
      content: [
        "Die Jimmy UG (haftungsbeschränkt) haftet nur im Falle von Vorsatz oder grober Fahrlässigkeit. Für einfache Fahrlässigkeit haftet die Jimmy UG (haftungsbeschränkt) nur bei Verletzung einer Pflicht, deren Erfüllung die ordnungsgemäße Durchführung des Vertrags überhaupt erst ermöglicht und auf deren Einhaltung der Kunde regelmäßig vertrauen darf (sogenannte Kardinalpflicht).",
        "Sofern die Jimmy UG (haftungsbeschränkt) für einfache Fahrlässigkeit haftet, ist die Haftung auf den Schaden begrenzt, mit dessen Entstehen nach den bei Vertragsschluss bekannten Umständen typischerweise gerechnet werden musste."
      ]
    },
    {
      icon: Scale,
      title: "7. Schlussbestimmungen",
      content: [
        "(7.1) Änderungen der AGB: Die Jimmy UG (haftungsbeschränkt) hat das Recht, die Allgemeinen Geschäftsbedingungen abzuändern, wenn dies durch Gesetzesänderungen, Änderungen der Rechtsprechung, veränderte Marktgegebenheiten oder Änderungen am Produkt bzw. Service notwendig wird.",
        "(7.2) Textformerfordernis: Nebenabreden, Ergänzungen oder Änderungen dieser Allgemeinen Geschäftsbedingungen bedürfen der Textform.",
        "(7.3) Rechtsgrundlage: Das zwischen den Parteien bestehende Vertragsverhältnis unterliegt ausschließlich dem Recht der Bundesrepublik Deutschland unter ausdrücklichem Ausschluss des UN-Kaufrechts."
      ]
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
              <FileText className="w-16 h-16 text-jimmy-gold mx-auto mb-6" />
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Allgemeine <span className="text-jimmy-gold">Geschäftsbedingungen</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Jimmy UG (haftungsbeschränkt)
              </p>
            </motion.div>
          </div>
        </section>

        {/* AGB Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-8">
              
              {sections.map((section, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="border-border/40">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <section.icon className="w-6 h-6 text-jimmy-gold mr-3" />
                        {section.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {section.content.map((paragraph, pIndex) => (
                          <p key={pIndex} className="text-sm text-muted-foreground">
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}

              {/* Kontaktadresse */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
              >
                <Card className="border-border/40">
                  <CardHeader>
                    <CardTitle>7.4 Kontaktadresse</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Der Kunde teilt der Jimmy UG (haftungsbeschränkt) bei der Bestellung bzw. Anmeldung für einen 
                      Testzugang initial eine Kontakt-E-Mail-Adresse mit. Die Jimmy UG (haftungsbeschränkt) wird ihn, 
                      insbesondere wenn es diese Allgemeinen Geschäftsbedingungen erfordern, unter dieser E-Mail-Adresse 
                      kontaktieren.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Kontakt */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.9 }}
              >
                <Card className="border-border/40 bg-muted/30">
                  <CardContent className="p-6 text-center">
                    <h4 className="font-semibold mb-3">Kontakt</h4>
                    <p className="text-sm text-muted-foreground">
                      Bei Fragen zu diesen AGB wenden Sie sich bitte an: 
                      <a href="mailto:kontakt@jimmy-ausbildung.de" className="text-jimmy-gold hover:text-jimmy-gold/80 ml-1 underline">
                        kontakt@jimmy-ausbildung.de
                      </a>
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AGB;
