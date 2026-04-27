import { motion } from "framer-motion";
import { AlertTriangle, Lightbulb, Package, PenTool, TrendingUp, Globe } from "lucide-react";

const steps = [
  { icon: AlertTriangle, title: "Problem", desc: "1.5B plastic phone cases discarded yearly, taking 500+ years to decompose.", color: "bg-destructive/10 text-destructive" },
  { icon: Lightbulb, title: "Idea", desc: "Use agricultural waste as raw material for biodegradable phone cases.", color: "bg-accent/20 text-accent-foreground" },
  { icon: Package, title: "Materials", desc: "Rice husk, coconut fiber, sugarcane bagasse with natural binders.", color: "bg-secondary text-secondary-foreground" },
  { icon: PenTool, title: "Design", desc: "Ergonomic form, compression-molded, textured grip, precision fit.", color: "bg-primary/10 text-primary" },
  { icon: TrendingUp, title: "Benefits", desc: "Compostable in 12–18 months, 30% lighter, unique natural look.", color: "bg-accent/20 text-accent-foreground" },
  { icon: Globe, title: "Market Impact", desc: "$30B case market, growing eco-demand, farmer income boost.", color: "bg-primary/10 text-primary" },
];

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

const PitchFlowchart = () => (
  <section id="pitch" className="py-24 bg-gradient-warm">
    <div className="container mx-auto px-4">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.6 }} className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">3-Minute Pitch</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">A structured flowchart of our product pitch — from problem to market impact.</p>
      </motion.div>

      <div className="max-w-4xl mx-auto relative">
        {/* Connector line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2 hidden md:block" />

        <div className="space-y-8">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={fadeUp} transition={{ duration: 0.5, delay: 0.1 * i }}
              className={`flex items-center gap-6 ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}
            >
              <div className={`flex-1 ${i % 2 === 1 ? "md:text-right" : ""}`}>
                <div className={`inline-flex items-center gap-3 rounded-2xl p-5 ${s.color} border border-border shadow-organic w-full`}>
                  <s.icon className="w-8 h-8 shrink-0" />
                  <div className="text-left">
                    <h4 className="font-bold text-foreground">{s.title}</h4>
                    <p className="text-muted-foreground text-sm">{s.desc}</p>
                  </div>
                </div>
              </div>
              {/* Center dot */}
              <div className="hidden md:flex w-5 h-5 rounded-full bg-primary border-4 border-background shrink-0 z-10" />
              <div className="flex-1 hidden md:block" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default PitchFlowchart;
