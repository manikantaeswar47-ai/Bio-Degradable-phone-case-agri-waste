import { motion } from "framer-motion";
import { Sprout, Recycle, Wheat } from "lucide-react";
import agriImg from "@/assets/agri-materials.jpg";

const materials = [
  { icon: Wheat, name: "Rice Husk", desc: "Silica-rich byproduct providing structural strength and heat resistance." },
  { icon: Sprout, name: "Coconut Fiber", desc: "Natural fiber offering excellent shock absorption and durability." },
  { icon: Recycle, name: "Sugarcane Bagasse", desc: "Fibrous residue that's moldable, lightweight, and fully compostable." },
];

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

const AboutSection = () => (
  <section id="about" className="py-24 bg-gradient-warm">
    <div className="container mx-auto px-4">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.6 }} className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">About the Concept</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">Understanding agri-waste and its potential to replace plastic in everyday products.</p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.6, delay: 0.1 }}>
          <img src={agriImg} alt="Agricultural materials" className="rounded-2xl shadow-organic w-full" loading="lazy" width={800} height={600} />
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.6, delay: 0.2 }}>
          <h3 className="text-2xl font-bold text-foreground mb-4">What is Agri-Waste?</h3>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            Agricultural waste refers to the residues produced from growing and processing raw agricultural products — husks, fibers, stalks, and bagasse. Instead of burning or discarding these materials, we can transform them into sustainable, biodegradable products.
          </p>
          <h3 className="text-2xl font-bold text-foreground mb-4">Why Biodegradable?</h3>
          <p className="text-muted-foreground leading-relaxed">
            Conventional phone cases are made from plastics that take 500+ years to decompose. Biodegradable alternatives break down within 1–2 years, returning nutrients to the soil and eliminating microplastic pollution.
          </p>
        </motion.div>
      </div>

      <div className="grid sm:grid-cols-3 gap-6">
        {materials.map((m, i) => (
          <motion.div
            key={m.name}
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={fadeUp} transition={{ duration: 0.5, delay: 0.1 * i }}
            className="bg-card rounded-2xl p-6 shadow-organic hover:shadow-lg transition-shadow border border-border"
          >
            <m.icon className="w-10 h-10 text-primary mb-4" />
            <h4 className="font-bold text-lg text-foreground mb-2">{m.name}</h4>
            <p className="text-muted-foreground text-sm">{m.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
