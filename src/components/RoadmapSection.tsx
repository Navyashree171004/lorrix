import { motion } from "framer-motion";
import { CheckCircle2, Circle, Sparkles } from "lucide-react";

const roadmapItems = [
  {
    phase: "Phase 1",
    title: "Core Platform",
    status: "completed",
    items: [
      "E-Way Bill management",
      "Loading Receipt generation",
      "Trip management",
      "Real-time status updates",
    ],
  },
  {
    phase: "Phase 2",
    title: "AI Integration",
    status: "current",
    items: [
      "AI-assisted explanations",
      "Anomaly detection",
      "Smart workflow suggestions",
      "Predictive analytics",
    ],
  },
  {
    phase: "Phase 3",
    title: "Finance Automation",
    status: "upcoming",
    items: [
      "Bank reconciliation",
      "Purchase automation",
      "Sales processing",
      "Invoice matching",
    ],
  },
  {
    phase: "Phase 4",
    title: "Enterprise Suite",
    status: "upcoming",
    items: [
      "Multi-org support",
      "Advanced reporting",
      "API marketplace",
      "Custom integrations",
    ],
  },
];

export function RoadmapSection() {
  return (
    <section id="roadmap" className="relative flex min-h-screen scroll-mt-24 items-center overflow-hidden bg-gradient-to-r from-blue-50 via-sky-50 to-white py-16 lg:scroll-mt-20 lg:py-20">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-12 max-w-2xl text-center"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">Roadmap</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-5 text-foreground">
            What's Coming Next
          </h2>
          <p className="text-base leading-7 text-muted-foreground sm:text-lg">
            We're building the future of intelligent logistics. Here's our journey ahead.
          </p>
        </motion.div>

        {/* Roadmap Timeline */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4 xl:gap-6">
          {roadmapItems.map((item, index) => (
            <motion.div
              key={item.phase}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="relative [perspective:1000px]"
            >
              <div className={`relative h-full rounded-xl border p-5 shadow-[0_18px_45px_-28px_hsl(218_24%_12%/0.5)] ring-1 ring-white/70 transition-all duration-500 ease-out hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[0_32px_80px_-34px_hsl(218_24%_12%/0.65)] xl:p-6 ${
                item.status === "completed" 
                  ? "bg-white/90 border-green-200" 
                  : item.status === "current"
                  ? "bg-white border-primary/40"
                  : "bg-white/75 border-border"
              }`}>
                <div className="pointer-events-none absolute inset-x-4 -bottom-3 h-4 rounded-full bg-primary/10 blur-md" />
                {/* Phase Badge */}
                <div className="relative flex items-center gap-2 mb-4">
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                    item.status === "completed"
                      ? "bg-green-100 text-green-700"
                      : item.status === "current"
                      ? "bg-primary/10 text-primary"
                      : "bg-muted text-muted-foreground"
                  }`}>
                    {item.phase}
                  </span>
                  {item.status === "current" && (
                    <Sparkles className="w-4 h-4 text-primary" />
                  )}
                </div>

                <h3 className="relative text-lg font-semibold mb-4 text-foreground">
                  {item.title}
                </h3>

                <ul className="relative space-y-3">
                  {item.items.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-2 text-sm">
                      {item.status === "completed" ? (
                        <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      ) : (
                        <Circle className="w-4 h-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                      )}
                      <span className={item.status === "completed" ? "text-muted-foreground" : "text-foreground/80"}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
