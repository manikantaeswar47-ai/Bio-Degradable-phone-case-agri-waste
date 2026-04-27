import { motion } from "framer-motion";
import { Shield, Recycle, Feather, Palette } from "lucide-react";
import heroImg from "@/assets/hero-phone-case.jpg";

const features = [
  { icon: Shield, title: "Durable Protection", desc: "Compression-molded agri-fiber composite absorbs impact and resists daily wear." },
  { icon: Recycle, title: "100% Compostable", desc: "Breaks down naturally within 12–18 months in home compost conditions." },
  { icon: Feather, title: "Ultra Lightweight", desc: "30% lighter than conventional plastic cases while maintaining structural integrity." },
  { icon: Palette, title: "Natural Aesthetic", desc: "Unique organic textures and warm tones — every case is one-of-a-kind." },
];

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

const ProductSection = () => (
  <section id="product" className="py-24 bg-background">
    <div className="container mx-auto px-4">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.6 }} className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">Product Design</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">A phone case that protects your device and the environment.</p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="grid grid-cols-2 gap-5">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={fadeUp} transition={{ duration: 0.5, delay: 0.1 * i }}
              className="bg-card rounded-2xl p-5 border border-border hover:shadow-organic transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                <f.icon className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-bold text-foreground mb-1 text-sm">{f.title}</h4>
              <p className="text-muted-foreground text-xs leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.6, delay: 0.2 }}>
          <img src={heroImg} alt="Biodegradable phone case product" className="rounded-2xl shadow-organic w-full" loading="lazy" width={1280} height={720} />
        </motion.div>
      </div>
    </div>
  </section>
);

export default ProductSection;
