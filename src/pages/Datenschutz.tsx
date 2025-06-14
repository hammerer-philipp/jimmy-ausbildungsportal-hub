import { ModernHeader } from '@/components/modern/ModernHeader';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, Users, Database, Settings } from 'lucide-react';

const Datenschutz = () => {
  const sections = [
    {
      icon: Eye,
      title: "1. Datenschutz auf einen Blick",
      content: [
        {
          subtitle: "Allgemeine Hinweise",
          text: "Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können."
        },
        {
          subtitle: "Datenerfassung auf dieser Website",
          text: "Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen."
        }
      ]
    },
    {
      icon: Users,
      title: "2. Verantwortliche Stelle",
      content: [
        {
          text: "Jimmy UG (haftungsbeschränkt)\nMusterstraße 123\n86669 Königsmoos\nDeutschland\n\nE-Mail: datenschutz@jimmy-portal.de\nTelefon: +49 (0) 123 456789"
        }
      ]
    },
    {
      icon: Database,
      title: "3. Datenerfassung und -verwendung",
      content: [
        {
          subtitle: "Registrierung und Profilerstellung",
          text: "Bei der Registrierung auf Jimmy erfassen wir folgende Daten: Name, E-Mail-Adresse, Alter, Schulabschluss, Interessen und weitere freiwillige Angaben. Diese Daten werden zur Bereitstellung unserer Dienstleistung und zur Vermittlung zwischen Schülern und Unternehmen verwendet."
        },
        {
          subtitle: "Kontaktaufnahme",
          text: "Wenn Sie uns per E-Mail oder Kontaktformular kontaktieren, werden Ihre Daten zur Bearbeitung Ihrer Anfrage gespeichert. Diese Daten werden nicht ohne Ihre Einwilligung weitergegeben."
        },
        {
          subtitle: "Newsletter",
          text: "Für den Newsletter-Versand verwenden wir das Double-Opt-In-Verfahren. Sie erhalten eine Bestätigungs-E-Mail, in der Sie Ihre Anmeldung bestätigen müssen. Der Newsletter kann jederzeit abbestellt werden."
        }
      ]
    },
    {
      icon: Settings,
      title: "4. Ihre Rechte",
      content: [
        {
          text: "Sie haben folgende Rechte bezüglich Ihrer personenbezogenen Daten:",
          list: [
            "Recht auf Auskunft (Art. 15 DSGVO)",
            "Recht auf Berichtigung (Art. 16 DSGVO)",
            "Recht auf Löschung (Art. 17 DSGVO)",
            "Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)",
            "Recht auf Datenübertragbarkeit (Art. 20 DSGVO)",
            "Recht auf Widerspruch (Art. 21 DSGVO)",
            "Recht auf Widerruf der Einwilligung (Art. 7 Abs. 3 DSGVO)"
          ]
        }
      ]
    },
    {
      icon: Lock,
      title: "5. Datensicherheit",
      content: [
        {
          text: "Wir verwenden moderne Verschlüsselungstechnologien und Sicherheitsmaßnahmen, um Ihre Daten zu schützen. Die Übertragung erfolgt über SSL/TLS-Verschlüsselung. Unsere Server befinden sich in Deutschland und unterliegen strengen Datenschutzbestimmungen."
        }
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
              <Shield className="w-16 h-16 text-jimmy-gold mx-auto mb-6" />
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-jimmy-gold">Datenschutz</span>erklärung
              </h1>
              <p className="text-xl text-muted-foreground">
                Transparenz und Schutz Ihrer persönlichen Daten haben für uns höchste Priorität
              </p>
            </motion.div>
          </div>
        </section>

        {/* Datenschutz Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-8">
              
              {sections.map((section, sectionIndex) => (
                <motion.div
                  key={sectionIndex}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: sectionIndex * 0.1 }}
                >
                  <Card className="border-border/40">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <section.icon className="w-6 h-6 text-jimmy-gold mr-3" />
                        {section.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {section.content.map((item, itemIndex) => (
                        <div key={itemIndex}>
                          {item.subtitle && (
                            <h4 className="font-semibold mb-2">{item.subtitle}</h4>
                          )}
                          <p className="text-sm text-muted-foreground whitespace-pre-line">
                            {item.text}
                          </p>
                          {item.list && (
                            <ul className="list-disc list-inside mt-2 space-y-1 text-sm text-muted-foreground">
                              {item.list.map((listItem, listIndex) => (
                                <li key={listIndex}>{listItem}</li>
                              ))}
                            </ul>
                          )}
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}

              {/* Additional Sections */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
              >
                <Card className="border-border/40">
                  <CardHeader>
                    <CardTitle>6. Cookies und Tracking</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Unsere Website verwendet technisch notwendige Cookies zur Funktionalität. Wir setzen keine 
                      Tracking-Cookies oder Analysedienste ohne Ihre ausdrückliche Einwilligung ein.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
              >
                <Card className="border-border/40">
                  <CardHeader>
                    <CardTitle>7. Datenlöschung und Speicherdauer</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Ihre Daten werden nur so lange gespeichert, wie es für die Zweckerfüllung erforderlich ist oder 
                      gesetzliche Aufbewahrungsfristen bestehen. Schülerprofile werden nach 2 Jahren Inaktivität gelöscht, 
                      Unternehmensdaten nach Vertragsende.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Kontakt */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
              >
                <Card className="border-border/40 bg-muted/30">
                  <CardContent className="p-6 text-center">
                    <h4 className="font-semibold mb-3">Kontakt bei Datenschutzfragen</h4>
                    <p className="text-sm text-muted-foreground">
                      Bei Fragen zum Datenschutz wenden Sie sich bitte an: 
                      <a href="mailto:datenschutz@jimmy-portal.de" className="text-jimmy-gold hover:text-jimmy-gold/80 ml-1 underline">
                        datenschutz@jimmy-portal.de
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

export default Datenschutz;