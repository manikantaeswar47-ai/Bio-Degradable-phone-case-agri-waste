import { motion } from "framer-motion";
import { GraduationCap, Smartphone, Leaf } from "lucide-react";

const personas = [
  {
    icon: GraduationCap,
    name: "Priya — Eco-Conscious Student",
    age: "21, College Student",
    needs: "Affordable, sustainable products that align with her values.",
    problem: "Can't find phone cases that are both stylish and truly eco-friendly.",
    solution: "Our case is compostable, affordable, and has a natural aesthetic she loves.",
    color: "bg-primary/10 border-primary/20",
  },
  {
    icon: Smartphone,
    name: "Arjun — Tech-Savvy Professional",
    age: "29, Software Engineer",
    needs: "Durable protection with minimal environmental footprint.",
    problem: "Tired of plastic cases that crack and end up in landfills.",
    solution: "Impact-resistant agri-waste composite that protects the phone and the planet.",
    color: "bg-accent/20 border-accent/30",
  },
  {
    icon: Leaf,
    name: "Meera — Sustainability Advocate",
    age: "35, NGO Worker",
    needs: "Products that demonstrate circular economy principles.",
    problem: "Wants to recommend truly sustainable alternatives to her community.",
    solution: "Fully compostable, locally sourced materials with transparent supply chain.",
    color: "bg-secondary border-secondary-foreground/10",
  },
];

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

const PersonasSection = () => (
  <section id="personas" className="py-24 bg-gradient-warm">
    <div className="container mx-auto px-4">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.6 }} className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">Ideation with Personas</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">Understanding our users to design the perfect sustainable phone case.</p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {personas.map((p, i) => (
          <motion.div
            key={p.name}
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={fadeUp} transition={{ duration: 0.5, delay: 0.15 * i }}
            className={`rounded-2xl p-6 border ${p.color} shadow-organic`}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <p.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-bold text-foreground text-sm">{p.name}</h4>
                <span className="text-muted-foreground text-xs">{p.age}</span>
              </div>
            </div>
            <div className="space-y-3 text-sm">
              <div><span className="font-semibold text-foreground">Needs:</span> <span className="text-muted-foreground">{p.needs}</span></div>
              <div><span className="font-semibold text-foreground">Problem:</span> <span className="text-muted-foreground">{p.problem}</span></div>
              <div><span className="font-semibold text-primary">Solution:</span> <span className="text-muted-foreground">{p.solution}</span></div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PersonasSection;
