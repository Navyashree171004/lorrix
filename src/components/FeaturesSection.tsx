import ewayBillsImg from "@/assets/features/eway-bills.png";
import lrGenerationImg from "@/assets/features/lr-generation.png";
import realtimeImg from "@/assets/features/realtime-updates.png";
import safetyImg from "@/assets/features/operational-safety.png";
import tripImg from "@/assets/features/trip-management.png";
import aiImg from "@/assets/features/ai-architecture.png";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FileText, Route, Zap, Shield, BarChart3, Cpu } from "lucide-react";

const features = [
  {
    icon: FileText,
    title: "E-Way Bill Management",
    description: "Store, search, and select E-Way Bills for seamless operations. Import from GST portal or add manually.",
    image: ewayBillsImg,
    iconBg: "bg-primary/10",
    iconColor: "text-primary",
  },
  {
    icon: Route,
    title: "Loading Receipt Generation",
    description: "Create single or multi-bill LRs instantly with automated data population and validation.",
    image: lrGenerationImg,
    iconBg: "bg-emerald-500/10",
    iconColor: "text-emerald-600",
  },
  {
    icon: Zap,
    title: "Real-Time Updates",
    description: "Live backend progress and status via server-sent events. Never miss a status change.",
    image: realtimeImg,
    iconBg: "bg-amber-500/10",
    iconColor: "text-amber-600",
  },
  {
    icon: Shield,
    title: "Operational Safety",
    description: "Prevent duplicate bills and invalid assignments with intelligent validation rules.",
    image: safetyImg,
    iconBg: "bg-rose-500/10",
    iconColor: "text-rose-600",
  },
  {
    icon: BarChart3,
    title: "Trip Management",
    description: "Create trips, assign multiple LRs, and manage unassigned receipts from a unified dashboard.",
    image: tripImg,
    iconBg: "bg-violet-500/10",
    iconColor: "text-violet-600",
  },
  {
    icon: Cpu,
    title: "AI-Ready Architecture",
    description: "Built for intelligence. Ready for automated anomaly detection and smart workflow optimization.",
    image: aiImg,
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
    <section
  id="features"
  className="relative flex min-h-[88vh] scroll-mt-24 items-start overflow-hidden bg-background pt-2 pb-6 lg:pt-4 lg:pb-8"
>

  <div className="container relative z-10 mx-auto px-4 sm:px-6">
    <div className="mx-auto grid max-w-[1550px] items-start gap-20 lg:grid-cols-[1.1fr_1.3fr]">
      <div className="mt-8 grid w-full gap-3 lg:pl-8">
            {features.map((feature, index) => {
              const isActive = index === activeIndex;

              return (
                <button
                  key={feature.title}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`group flex items-center gap-3 rounded-lg border p-2 text-left transition-all duration-300 ${
                    isActive
                      ? "border-primary bg-primary/10 shadow-xl scale-[1.02]"
                      : "border-border bg-card/70 hover:border-primary/20 hover:bg-card"
                  }`}
                >
                  <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${feature.iconBg}`}>
                    <feature.icon className={`h-4 w-4 ${feature.iconColor}`} />
                  </span>
                  <span>
                    <span className="block text-base font-semibold text-foreground">
                      {feature.title}
                    </span>
                    <span className="mt-1 hidden text-sm leading-6 text-muted-foreground md:block lg:hidden xl:block">
                      {feature.description}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
          <div className="flex flex-col items-center lg:ml-10">
  <h2 className="mb-8 text-center text-6xl font-extrabold tracking-tight bg-gradient-to-r from-slate-900 via-primary to-slate-700 bg-clip-text text-transparent lg:text-7xl">Features</h2>

  <div className="relative h-[520px] w-full max-w-[820px] overflow-hidden rounded-2xl border bg-card shadow-elevated">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFeature.title}
                initial={{ opacity: 0, x: 80, scale: 0.96 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -80, scale: 0.96 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="absolute inset-0 grid grid-rows-[1fr_auto]"
              >
                <div className="relative flex items-center justify-center overflow-hidden rounded-t-2xl bg-gradient-to-br from-blue-50 via-blue-100 to-slate-100 p-4 sm:p-5">
                  <div className="absolute inset-0 grid-pattern opacity-30" />
                  <div className="relative h-full w-full overflow-hidden rounded-2xl border border-primary/10 bg-white">
                     <img
                       src={activeFeature.image}
                        alt={activeFeature.title}
                        className="h-full w-[104%] max-w-none object-contain object-left"
                    />
                    </div>
                    </div>

                <div className="border-t bg-card p-4 sm:p-6">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-lg ${activeFeature.iconBg}`}>
                      <activeFeature.icon className={`h-6 w-6 ${activeFeature.iconColor}`} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-foreground">
                        {activeFeature.title}
                      </h3>
                      <p className="mt-2 text-base leading-7 text-muted-foreground">
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
    </div>
    </section>
  );
}
