import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import heroImg from "@/assets/hero-phone-case.jpg";

const HeroSection = () => (
  <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
    <div className="absolute inset-0 bg-gradient-hero opacity-90" />
    <div className="absolute inset-0">
      <img src={heroImg} alt="Biodegradable phone case" className="w-full h-full object-cover opacity-20" width={1280} height={720} />
    </div>
    <div className="container mx-auto px-4 relative z-10 py-32">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl"
      >
        <span className="inline-block px-4 py-1.5 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground text-sm font-medium mb-6">
          Unit I & II — Design Thinking Project
        </span>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6">
          Bio-Degradable Phone Case from{" "}
          <span className="text-accent">Agri-Waste</span>
        </h1>
        <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-2xl">
          Sustainable Tech for a Greener Future — Transforming agricultural waste into protective, compostable phone cases through innovative design thinking.
        </p>
        <a
          href="#about"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-accent text-accent-foreground font-semibold text-lg hover:brightness-110 transition-all shadow-organic"
        >
          Explore Idea
          <ArrowDown className="w-5 h-5 animate-bounce" />
        </a>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
