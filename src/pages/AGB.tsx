import { ModernHeader } from '@/components/modern/ModernHeader';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { FileText, Users, Building2, CreditCard, Calendar, Shield, AlertTriangle, Scale } from 'lucide-react';

const AGB = () => {
  const sections = [
    {
      icon: FileText,
      title: "§ 1 Geltungsbereich",
      content: [
        "(1) Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Leistungen der Jimmy UG (haftungsbeschränkt), nachfolgend \"Jimmy\" genannt, die über die Plattform www.jimmy-portal.de erbracht werden.",
        "(2) Abweichende Bedingungen des Nutzers werden nicht anerkannt, es sei denn, Jimmy stimmt schriftlich zu."
      ]
    },
    {
      icon: Users,
      title: "§ 2 Leistungen von Jimmy",
      content: [
        "(1) Jimmy betreibt eine Online-Plattform zur Vermittlung zwischen Schülern und Unternehmen für Ausbildungsplätze.",
        "(2) Für Schüler ist die Nutzung der Plattform kostenlos. Unternehmen zahlen eine jährliche Gebühr von 600€ für den Zugang zur Plattform.",
        "(3) Jimmy vermittelt lediglich Kontakte und garantiert nicht den Erfolg einer Bewerbung oder das Zustandekommen eines Ausbildungsvertrages."
      ]
    },
    {
      icon: Building2,
      title: "§ 3 Registrierung und Nutzerkonto",
      content: [
        "(1) Die Nutzung der Plattform erfordert eine Registrierung. Der Nutzer verpflichtet sich, wahrheitsgemäße Angaben zu machen.",
        "(2) Jeder Nutzer darf nur ein Konto erstellen. Das Konto ist nicht übertragbar.",
        "(3) Der Nutzer ist für die Geheimhaltung seiner Zugangsdaten verantwortlich."
      ]
    },
    {
      icon: Shield,
      title: "§ 4 Pflichten der Nutzer",
      content: [
        "(1) Nutzer verpflichten sich, keine rechtswidrigen, beleidigenden oder diskriminierenden Inhalte zu veröffentlichen.",
        "(2) Die Weitergabe von Kontaktdaten außerhalb der Plattform zu Beginn einer Geschäftsbeziehung ist erlaubt und erwünscht.",
        "(3) Unternehmen verpflichten sich, nur echte Ausbildungsplätze anzubieten und seriös mit Bewerbern umzugehen."
      ]
    },
    {
      icon: CreditCard,
      title: "§ 5 Zahlungsbedingungen (Unternehmen)",
      content: [
        "(1) Unternehmen zahlen eine jährliche Gebühr von 600€ (inkl. gesetzlicher MwSt.).",
        "(2) Die Zahlung erfolgt im Voraus für ein Jahr. Die Rechnung wird zu Beginn der Laufzeit gestellt.",
        "(3) Bei Zahlungsverzug kann Jimmy den Zugang zur Plattform sperren."
      ]
    },
    {
      icon: Calendar,
      title: "§ 6 Laufzeit und Kündigung",
      content: [
        "(1) Schüler können ihr Konto jederzeit ohne Frist löschen.",
        "(2) Unternehmensverträge laufen ein Jahr und verlängern sich automatisch, wenn nicht mit 3 Monaten Frist zum Vertragsende gekündigt wird.",
        "(3) Das Recht zur außerordentlichen Kündigung bleibt unberührt."
      ]
    },
    {
      icon: AlertTriangle,
      title: "§ 7 Haftung",
      content: [
        "(1) Jimmy haftet nur für Schäden, die auf einer vorsätzlichen oder grob fahrlässigen Pflichtverletzung beruhen.",
        "(2) Die Haftung für mittelbare Schäden und entgangenen Gewinn ist ausgeschlossen.",
        "(3) Jimmy haftet nicht für das Verhalten der Nutzer untereinander."
      ]
    },
    {
      icon: Scale,
      title: "§ 8 Schlussbestimmungen",
      content: [
        "(1) Es gilt deutsches Recht unter Ausschluss des UN-Kaufrechts.",
        "(2) Gerichtsstand ist Augsburg, sofern der Nutzer Kaufmann ist.",
        "(3) Sollten einzelne Bestimmungen unwirksam sein, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt."
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
                Gültig ab: 01.01.2024
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

              {/* Datenschutz Verweis */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.9 }}
              >
                <Card className="border-border/40">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Shield className="w-6 h-6 text-jimmy-gold mr-3" />
                      § 8 Datenschutz
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Die Verarbeitung personenbezogener Daten erfolgt gemäß unserer Datenschutzerklärung, 
                      die Bestandteil dieser AGB ist.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Änderungen */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1.0 }}
              >
                <Card className="border-border/40">
                  <CardHeader>
                    <CardTitle>§ 9 Änderungen der AGB</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <p className="text-sm text-muted-foreground">
                        (1) Jimmy behält sich vor, diese AGB zu ändern. Änderungen werden den Nutzern per E-Mail mitgeteilt.
                      </p>
                      <p className="text-sm text-muted-foreground">
                        (2) Widersprüche gegen Änderungen müssen innerhalb von 4 Wochen schriftlich erfolgen. 
                        Andernfalls gelten die Änderungen als angenommen.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Kontakt */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1.1 }}
              >
                <Card className="border-border/40 bg-muted/30">
                  <CardContent className="p-6 text-center">
                    <h4 className="font-semibold mb-3">Kontakt</h4>
                    <p className="text-sm text-muted-foreground">
                      Bei Fragen zu diesen AGB wenden Sie sich bitte an: 
                      <a href="mailto:info@jimmy-portal.de" className="text-jimmy-gold hover:text-jimmy-gold/80 ml-1 underline">
                        info@jimmy-portal.de
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