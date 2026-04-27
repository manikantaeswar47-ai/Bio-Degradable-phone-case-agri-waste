import { motion } from "framer-motion";
import { TreePine, Droplets, RefreshCw } from "lucide-react";

const stats = [
  { icon: TreePine, value: "1.5B", label: "Plastic cases replaced yearly potential" },
  { icon: Droplets, value: "70%", label: "Less carbon footprint vs plastic" },
  { icon: RefreshCw, value: "12–18", label: "Months to fully compost" },
];

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

const SustainabilitySection = () => (
  <section id="impact" className="py-24 bg-gradient-hero text-primary-foreground">
    <div className="container mx-auto px-4">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.6 }} className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Sustainability Impact</h2>
        <p className="text-primary-foreground/70 max-w-2xl mx-auto text-lg">Building a circular economy — one phone case at a time.</p>
      </motion.div>

      <div className="grid sm:grid-cols-3 gap-8 mb-16">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={fadeUp} transition={{ duration: 0.5, delay: 0.15 * i }}
            className="text-center"
          >
            <s.icon className="w-10 h-10 mx-auto mb-4 text-accent" />
            <div className="text-4xl md:text-5xl font-bold mb-2">{s.value}</div>
            <p className="text-primary-foreground/70 text-sm">{s.label}</p>
          </motion.div>
        ))}
      </div>

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.6, delay: 0.3 }} className="grid md:grid-cols-3 gap-8">
        <div className="bg-primary-foreground/5 rounded-2xl p-6 border border-primary-foreground/10">
          <h4 className="font-bold text-lg mb-3">Environmental Benefits</h4>
          <p className="text-primary-foreground/70 text-sm leading-relaxed">Zero microplastic pollution. Uses renewable agricultural byproducts. Reduces farm waste burning and associated air pollution.</p>
        </div>
        <div className="bg-primary-foreground/5 rounded-2xl p-6 border border-primary-foreground/10">
          <h4 className="font-bold text-lg mb-3">Waste Reduction</h4>
          <p className="text-primary-foreground/70 text-sm leading-relaxed">Diverts millions of tons of agri-waste from landfills. Each case replaces one plastic case that would persist for centuries.</p>
        </div>
        <div className="bg-primary-foreground/5 rounded-2xl p-6 border border-primary-foreground/10">
          <h4 className="font-bold text-lg mb-3">Circular Economy</h4>
          <p className="text-primary-foreground/70 text-sm leading-relaxed">From farm → factory → consumer → compost → farm. A complete closed-loop lifecycle with zero waste at end of life.</p>
        </div>
      </motion.div>
    </div>
  </section>
);

export default SustainabilitySection;
