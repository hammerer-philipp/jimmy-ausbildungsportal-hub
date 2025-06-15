
import { motion } from 'framer-motion';

const stats = [
  { value: "30+", label: "Aktive Schüler" },
  { value: "5+", label: "Aktive Unternehmen" },
  { value: "< 2 Tage", label: "Ø Antwortzeit" }
];

export const StatsSection = () => (
  <section className="py-24">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Zahlen, die überzeugen
        </h2>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="text-center"
          >
            <div className="text-4xl md:text-5xl font-bold text-jimmy-gold mb-2">
              {stat.value}
            </div>
            <div className="text-muted-foreground">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
