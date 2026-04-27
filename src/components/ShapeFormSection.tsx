import { motion } from "framer-motion";
import { Box, Maximize, Hand, Layers } from "lucide-react";
import blueprintImg from "@/assets/design-blueprint.jpg";

const concepts = [
  { icon: Box, title: "Form", desc: "The 3D shape of the case — contoured to fit the phone perfectly with smooth organic curves." },
  { icon: Maximize, title: "Structure", desc: "Internal ribbing and layered composite for impact resistance while keeping weight minimal." },
  { icon: Hand, title: "Ergonomics", desc: "Textured grip surface, rounded edges, and button accessibility for comfortable daily use." },
  { icon: Layers, title: "Material Shaping", desc: "Compression molding of agri-waste fibers with natural binders at controlled temperature." },
];

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

const ShapeFormSection = () => (
  <section id="design" className="py-24 bg-background">
    <div className="container mx-auto px-4">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.6 }} className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">Shape & Form Basics</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">How design thinking shapes a phone case from raw agricultural waste.</p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.6 }}>
          <img src={blueprintImg} alt="Phone case design blueprint" className="rounded-2xl shadow-organic w-full" loading="lazy" width={800} height={600} />
        </motion.div>
        <div className="grid sm:grid-cols-2 gap-6">
          {concepts.map((c, i) => (
            <motion.div
              key={c.title}
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={fadeUp} transition={{ duration: 0.5, delay: 0.1 * i }}
              className="bg-gradient-leaf rounded-2xl p-6 border border-border hover:shadow-organic transition-shadow"
            >
              <c.icon className="w-8 h-8 text-primary mb-3" />
              <h4 className="font-bold text-foreground mb-2">{c.title}</h4>
              <p className="text-muted-foreground text-sm">{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ShapeFormSection;
