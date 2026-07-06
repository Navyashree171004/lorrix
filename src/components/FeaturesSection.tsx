import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FileText, Route, Zap, Shield, BarChart3, Cpu } from "lucide-react";

const features = [
  {
    icon: FileText,
    title: "E-Way Bill Management",
    description: "Store, search, and select E-Way Bills for seamless operations. Import from GST portal or add manually.",
    iconBg: "bg-primary/10",
    iconColor: "text-primary",
  },
  {
    icon: Route,
    title: "Loading Receipt Generation",
    description: "Create single or multi-bill LRs instantly with automated data population and validation.",
    iconBg: "bg-emerald-500/10",
    iconColor: "text-emerald-600",
  },
  {
    icon: Zap,
    title: "Real-Time Updates",
    description: "Live backend progress and status via server-sent events. Never miss a status change.",
    iconBg: "bg-amber-500/10",
    iconColor: "text-amber-600",
  },
  {
    icon: Shield,
    title: "Operational Safety",
    description: "Prevent duplicate bills and invalid assignments with intelligent validation rules.",
    iconBg: "bg-rose-500/10",
    iconColor: "text-rose-600",
  },
  {
    icon: BarChart3,
    title: "Trip Management",
    description: "Create trips, assign multiple LRs, and manage unassigned receipts from a unified dashboard.",
    iconBg: "bg-violet-500/10",
    iconColor: "text-violet-600",
  },
  {
    icon: Cpu,
    title: "AI-Ready Architecture",
    description: "Built for intelligence. Ready for automated anomaly detection and smart workflow optimization.",
    iconBg: "bg-cyan-500/10",
    iconColor: "text-cyan-600",
  },
];

export function FeaturesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeFeature = features[activeIndex];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % features.length);
    }, 3200);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section id="features" className="relative scroll-mt-14 bg-background pb-10 pt-10 lg:pb-12 lg:pt-10">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-5 max-w-2xl text-center"
        >
          <span className="text-xs font-semibold uppercase tracking-wider text-primary">Features</span>
          <h2 className="mt-2 text-3xl font-bold text-foreground md:text-4xl">
            Everything You Need for Modern Logistics
          </h2>
        </motion.div>

        <div className="mx-auto grid max-w-6xl gap-5 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="grid gap-2">
            {features.map((feature, index) => {
              const isActive = index === activeIndex;

              return (
                <button
                  key={feature.title}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`group flex items-center gap-3 rounded-lg border p-3 text-left transition-all duration-300 ${
                    isActive
                      ? "border-primary/30 bg-primary/5 shadow-card"
                      : "border-border bg-card/70 hover:border-primary/20 hover:bg-card"
                  }`}
                >
                  <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${feature.iconBg}`}>
                    <feature.icon className={`h-4 w-4 ${feature.iconColor}`} />
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-foreground">
                      {feature.title}
                    </span>
                    <span className="mt-0.5 block text-xs leading-5 text-muted-foreground">
                      {feature.description}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>

          <div className="relative min-h-[330px] overflow-hidden rounded-xl border bg-card shadow-elevated">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFeature.title}
                initial={{ opacity: 0, x: 80, scale: 0.96 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -80, scale: 0.96 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="absolute inset-0 grid grid-rows-[1fr_auto]"
              >
                <div className="relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-primary/5 to-accent p-8">
                  <div className="absolute inset-0 grid-pattern opacity-30" />
                  <div className="relative flex h-full min-h-48 w-full items-center justify-center rounded-lg border border-dashed border-primary/25 bg-white/70">
                    <div className={`flex h-20 w-20 items-center justify-center rounded-2xl ${activeFeature.iconBg}`}>
                      <activeFeature.icon className={`h-10 w-10 ${activeFeature.iconColor}`} />
                    </div>
                  </div>
                </div>

                <div className="border-t bg-card p-6">
                  <div className="flex items-start gap-4">
                    <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-lg ${activeFeature.iconBg}`}>
                      <activeFeature.icon className={`h-6 w-6 ${activeFeature.iconColor}`} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">
                        {activeFeature.title}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-muted-foreground">
                        {activeFeature.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="absolute bottom-4 right-5 z-10 flex gap-2">
              {features.map((feature, index) => (
                <button
                  key={feature.title}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Show ${feature.title}`}
                  className={`h-2 rounded-full transition-all ${
                    index === activeIndex ? "w-7 bg-primary" : "w-2 bg-primary/25"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
