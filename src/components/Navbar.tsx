import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import zypLogo from "@/assets/zyp-logo.png.asset.json";

const navLinks = [
  { name: "Features", href: "#features" },
  { name: "How It Works", href: "#how-it-works" },
  { name: "Roadmap", href: "#roadmap" },
  { name: "Contact", href: "#demo" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border"
    >
      <div className="container mx-auto px-4 py-4 sm:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-4">
            <img
              src={zypLogo.url}
              alt="ZYP Logistech logo"
              className="h-14 w-14 object-contain"
            />
            <div className="flex flex-col leading-tight">
              <span className="text-2xl font-extrabold text-foreground">Lorrix</span>
              <span className="hidden text-[11px] font-bold uppercase tracking-wider text-muted-foreground sm:block">
                by ZYP Logistech
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button asChild variant="default" size="default">
              <a href="#demo">Request Demo</a>
            </Button>
          </div>


          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden rounded-md p-2 text-foreground transition hover:bg-accent"
            type="button"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden mt-4 pb-4 border-t border-border"
            >
              <div className="flex flex-col gap-4 pt-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm font-medium"
                  >
                    {link.name}
                  </a>
                ))}
                <Button asChild variant="default" size="default" className="mt-2">
                  <a href="#demo" onClick={() => setIsOpen(false)}>Request Demo</a>
                </Button>

              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
