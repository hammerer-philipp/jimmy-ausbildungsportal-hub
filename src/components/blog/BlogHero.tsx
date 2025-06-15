
import { motion } from 'framer-motion';

export const BlogHero = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-background to-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Jimmy <span className="text-jimmy-gold">Blog</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Insights, Tipps und Neuigkeiten rund um das Thema Ausbildung und Karriere
          </p>
        </motion.div>
      </div>
    </section>
  );
};
