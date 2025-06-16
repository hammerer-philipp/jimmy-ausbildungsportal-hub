
import { ModernHeader } from '@/components/modern/ModernHeader';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, Users, Database, Settings, Server, Mail } from 'lucide-react';

const Datenschutz = () => {
  const sections = [
    {
      icon: Eye,
      title: "1. Datenschutz auf einen Blick",
      content: [
        {
          subtitle: "Allgemeine Hinweise",
          text: "Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung."
        },
        {
          subtitle: "Datenerfassung auf dieser Website",
          text: "Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt \"Hinweis zur Verantwortlichen Stelle\" in dieser Datenschutzerklärung entnehmen."
        },
        {
          subtitle: "Wie erfassen wir Ihre Daten?",
          text: "Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben.\n\nAndere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten."
        },
        {
          subtitle: "Wofür nutzen wir Ihre Daten?",
          text: "Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden."
        },
        {
          subtitle: "Welche Rechte haben Sie bezüglich Ihrer Daten?",
          text: "Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.\n\nHierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit an uns wenden."
        }
      ]
    },
    {
      icon: Server,
      title: "2. Hosting",
      content: [
        {
          subtitle: "Strato",
          text: "Anbieter ist die Strato AG, Otto-Ostrowski-Straße 7, 10249 Berlin (nachfolgend \"Strato\"). Wenn Sie unsere Website besuchen, erfasst Strato verschiedene Logfiles inklusive Ihrer IP-Adressen.\n\nWeitere Informationen entnehmen Sie der Datenschutzerklärung von Strato: https://www.strato.de/datenschutz/.\n\nDie Verwendung von Strato erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Wir haben ein berechtigtes Interesse an einer möglichst zuverlässigen Darstellung unserer Website. Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG, soweit die Einwilligung die Speicherung von Cookies oder den Zugriff auf Informationen im Endgerät des Nutzers (z. B. Device-Fingerprinting) im Sinne des TDDDG umfasst. Die Einwilligung ist jederzeit widerrufbar."
        }
      ]
    },
    {
      icon: Users,
      title: "3. Allgemeine Hinweise und Pflichtinformationen",
      content: [
        {
          subtitle: "Datenschutz",
          text: "Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.\n\nWenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können. Die vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht.\n\nWir weisen darauf hin, dass die Datenübertragung im Internet (z. B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich."
        },
        {
          subtitle: "Hinweis zur verantwortlichen Stelle",
          text: "Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:\n\nChristina Hammerer\nAdrian-von-Riedl-Str. 34\n86669 Königsmoos\n\nTelefon: +4915157952359\nE-Mail: ch@jimmy-marken.de\n\nVerantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z. B. Namen, E-Mail-Adressen o. Ä.) entscheidet."
        },
        {
          subtitle: "Speicherdauer",
          text: "Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt. Wenn Sie ein berechtigtes Löschersuchen geltend machen oder eine Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten gelöscht, sofern wir keine anderen rechtlich zulässigen Gründe für die Speicherung Ihrer personenbezogenen Daten haben (z. B. steuer- oder handelsrechtliche Aufbewahrungsfristen); im letztgenannten Fall erfolgt die Löschung nach Fortfall dieser Gründe."
        }
      ]
    },
    {
      icon: Database,
      title: "4. Datenerfassung auf dieser Website",
      content: [
        {
          subtitle: "Kontaktformular",
          text: "Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.\n\nDie Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde; die Einwilligung ist jederzeit widerrufbar."
        },
        {
          subtitle: "Anfrage per E-Mail, Telefon oder Telefax",
          text: "Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre Anfrage inklusive aller daraus hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.\n\nDie Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde; die Einwilligung ist jederzeit widerrufbar."
        }
      ]
    },
    {
      icon: Mail,
      title: "5. Newsletter",
      content: [
        {
          subtitle: "Newsletterdaten",
          text: "Wenn Sie den auf der Website angebotenen Newsletter beziehen möchten, benötigen wir von Ihnen eine E-Mail-Adresse sowie Informationen, welche uns die Überprüfung gestatten, dass Sie der Inhaber der angegebenen E-Mail-Adresse sind und mit dem Empfang des Newsletters einverstanden sind. Weitere Daten werden nicht bzw. nur auf freiwilliger Basis erhoben. Diese Daten verwenden wir ausschließlich für den Versand der angeforderten Informationen und geben diese nicht an Dritte weiter.\n\nDie Verarbeitung der in das Newsletteranmeldeformular eingegebenen Daten erfolgt ausschließlich auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Die erteilte Einwilligung zur Speicherung der Daten, der E-Mail-Adresse sowie deren Nutzung zum Versand des Newsletters können Sie jederzeit widerrufen, etwa über den \"Austragen\"-Link im Newsletter. Die Rechtmäßigkeit der bereits erfolgten Datenverarbeitungsvorgänge bleibt vom Widerruf unberührt."
        }
      ]
    },
    {
      icon: Settings,
      title: "6. Ihre Rechte",
      content: [
        {
          text: "Sie haben folgende Rechte bezüglich Ihrer personenbezogenen Daten:",
          list: [
            "Recht auf Auskunft über Ihre gespeicherten personenbezogenen Daten",
            "Recht auf Berichtigung unrichtiger oder unvollständiger Daten", 
            "Recht auf Löschung Ihrer gespeicherten Daten",
            "Recht auf Einschränkung der Datenverarbeitung",
            "Recht auf Datenübertragbarkeit",
            "Recht auf Widerspruch gegen die Verarbeitung",
            "Recht auf Widerruf erteilter Einwilligungen"
          ]
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

              {/* SSL Verschlüsselung */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
              >
                <Card className="border-border/40">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Lock className="w-6 h-6 text-jimmy-gold mr-3" />
                      SSL- bzw. TLS-Verschlüsselung
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, 
                      wie zum Beispiel Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine 
                      SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die 
                      Adresszeile des Browsers von \"http://\" auf \"https://\" wechselt und an dem Schloss-Symbol in 
                      Ihrer Browserzeile.
                      {'\n\n'}
                      Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die Daten, die Sie an uns übermitteln, nicht von Dritten mitgelesen werden.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Quelle */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
              >
                <Card className="border-border/40 bg-muted/30">
                  <CardContent className="p-6 text-center">
                    <h4 className="font-semibold mb-3">Quelle</h4>
                    <p className="text-sm text-muted-foreground">
                      <a href="https://www.e-recht24.de" className="text-jimmy-gold hover:text-jimmy-gold/80 underline">
                        https://www.e-recht24.de
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
