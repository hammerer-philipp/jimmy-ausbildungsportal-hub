
import { motion } from 'framer-motion';

const customers = [
  {
    href: "https://verbund.edeka/s%C3%BCdbayern/",
    src: "/lovable-uploads/63fe33d0-1052-4714-90aa-958eff0ef9a4.png",
    alt: "EDEKA Südbayern",
  },
  {
    href: "https://www.backstube-wuensche.de/",
    src: "/lovable-uploads/f2cccf4d-e8d4-47ff-ba83-31d34341aaf7.png",
    alt: "Backstube Wünsche",
  },
  {
    href: "https://www.suedbayerische-fleischwaren.de/",
    src: "/lovable-uploads/e36d7e0c-57ba-4d6e-af35-4ef31acf2edc.png",
    alt: "Südbayerische Fleischwaren",
  },
  {
    href: "https://www.goldmilch.de/",
    src: "/lovable-uploads/067ea29c-252c-4eb3-85dc-ad0c53f16893.png",
    alt: "Goldmilch",
  },
];

export const ReferenceCustomersSection = () => (
  <section className="py-16 bg-muted/20">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Vertrauen von <span className="text-jimmy-gold">führenden Unternehmen</span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Diese Unternehmen nutzen bereits Jimmy für ihre Azubi-Suche
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center max-w-5xl mx-auto"
      >
        {customers.map((customer, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="flex items-center justify-center p-8 bg-background rounded-xl shadow-sm border border-border/40 hover:border-jimmy-gold/40 transition-all duration-300 h-32"
          >
            <a 
              href={customer.href}
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full h-full flex items-center justify-center"
            >
              <img 
                src={customer.src}
                alt={customer.alt}
                className="max-w-full max-h-full object-contain"
              />
            </a>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);
