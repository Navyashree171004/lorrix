import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

import { Button } from "@/components/ui/button";

const highlights = [
  "Automatic E-Way Bill Extension",
  "Multi-Branch Operations on One Platform",
  "Manual & Automated Trip Management",
];

const metrics = [
  { value: "10x", label: "Faster LR creation" },
  { value: "24/7", label: "Trip monitoring" },
];

export function HeroSection() {
  return (
    <section id="hero" className="relative overflow-hidden bg-background pt-[5.25rem]">
      <div className="absolute inset-0 grid-pattern opacity-40" />
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-primary/10 to-transparent" />

      <div className="container relative z-10 mx-auto px-6">
        <div className="grid min-h-[calc(100svh-5rem)] items-start gap-10 pb-8 pt-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14 lg:pt-10">
          <div className="flex flex-col lg:min-h-[calc(52vh+9rem)]">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-2xl text-4xl font-bold leading-[1.24] text-foreground md:text-5xl xl:text-6xl"
            >
              One platform for every logistics operation
            </motion.h1>

            <div className="mt-10 flex flex-col lg:mt-auto lg:pt-8">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="max-w-xl text-base leading-9 text-muted-foreground xl:text-lg xl:leading-10"
              >
                Automate documentation, streamline dispatch planning, and gain complete
                visibility into your logistics operations through one intelligent platform.
              </motion.p>

              <motion.ul
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mt-8 grid gap-5 text-sm leading-7 text-foreground"
              >
                {highlights.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 flex-none text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </motion.ul>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-8 flex flex-col gap-3 sm:flex-row"
              >
                <Button asChild size="xl" variant="hero">
                  <a href="#demo">
                    Request Demo
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                <Button asChild size="xl" variant="outline">
                  <a href="#features">Explore Features</a>
                </Button>
              </motion.div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.35 }}
            className="relative flex flex-col gap-5"
          >
            <div className="relative overflow-hidden rounded-xl border bg-white shadow-[0_22px_60px_-34px_hsl(218_24%_12%/0.55)] ring-1 ring-border/60 transition-all duration-500 ease-out hover:-translate-y-3 hover:scale-[1.025] hover:shadow-[0_34px_90px_-34px_hsl(218_24%_12%/0.65),0_18px_42px_-28px_hsl(220_85%_57%/0.5)]">
              <div className="flex items-center justify-between border-b px-4 py-3">
                <div>
                  <p className="text-sm font-semibold text-foreground">Operations Dashboard</p>
                  <p className="text-xs text-muted-foreground">Lorrix command center</p>
                </div>
                <div className="flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  Live
                </div>
              </div>
              <img
                src="/images/dashboard.png"
                alt="Lorrix logistics operations dashboard showing trips, documents, and fleet activity"
                className="max-h-[52vh] w-full object-contain object-top"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              {metrics.map((metric, index) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.45 + index * 0.08 }}
                  className="rounded-xl border border-border bg-card p-4 text-center shadow-card transition-all duration-300 hover:shadow-elevated xl:p-5"
                >
                  <p className="text-3xl font-bold text-primary xl:text-4xl">{metric.value}</p>
                  <p className="mt-1.5 text-xs font-medium leading-5 text-muted-foreground xl:text-sm">
                    {metric.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
