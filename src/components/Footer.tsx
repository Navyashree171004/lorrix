import { motion } from "framer-motion";

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="border-t border-secondary bg-secondary py-6"
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-secondary-foreground/70">
            <a href="#features" className="hover:text-secondary-foreground transition-colors">Features</a>
            <a href="#how-it-works" className="hover:text-secondary-foreground transition-colors">How It Works</a>
            <a href="#roadmap" className="hover:text-secondary-foreground transition-colors">Roadmap</a>
            <a href="#demo" className="hover:text-secondary-foreground transition-colors">Contact</a>
          </div>

          <p className="text-sm text-secondary-foreground/60">
            © 2026 ZYP Logistech. All rights reserved.
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
