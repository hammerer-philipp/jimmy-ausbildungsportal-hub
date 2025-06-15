
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Zap, Shield, Globe } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: "Blitzschnell",
    description: "Schreibe 5 Minuten mit dem Chatbot Jimmy und warte danach entspannt auf Bewerbungen von Unternehmen."
  },
  {
    icon: Shield,
    title: "100% Kostenlos",
    description: "Für Schüler komplett kostenfrei. Keine versteckten Gebühren, nie."
  },
  {
    icon: Globe,
    title: "Bayernweit",
    description: "Unternehmen aus ganz Bayern suchen nach Talenten wie dir."
  }
];

export const FeaturesSection = () => (
  <section className="py-24 relative">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Warum <span className="text-jimmy-gold">Jimmy</span> anders ist
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Vergiss traditionelle Bewerbungen. Bei uns dreht sich alles um dich.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
          >
            <Card className="border-border/40 hover:border-jimmy-gold/40 transition-all duration-300 hover:shadow-lg h-full">
              <CardContent className="p-6 text-center">
                <div className="mb-4 inline-flex items-center justify-center w-12 h-12 bg-jimmy-gold/10 rounded-lg">
                  <feature.icon className="w-6 h-6 text-jimmy-gold" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
