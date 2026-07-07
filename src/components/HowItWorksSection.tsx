import { motion } from "framer-motion";
import { Upload, FileCheck, Truck, BarChart } from "lucide-react";

const steps = [
  {
    icon: Upload,
    step: "01",
    title: "Import E-Way Bills",
    description: "Upload your E-Way Bills from the GST portal or add them manually. Our system validates and stores them securely.",
  },
  {
    icon: FileCheck,
    step: "02",
    title: "Generate Loading Receipts",
    description: "Select one or multiple E-Way Bills to create Loading Receipts instantly with all data auto-populated.",
  },
  {
    icon: Truck,
    step: "03",
    title: "Create & Manage Trips",
    description: "Assign LRs to trips, track vehicle movements, and manage your entire fleet from one dashboard.",
  },
  {
    icon: BarChart,
    step: "04",
    title: "Monitor & Optimize",
    description: "Get real-time visibility into operations. AI-powered insights help you identify and resolve bottlenecks.",
  },
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="relative flex min-h-screen scroll-mt-24 items-center overflow-hidden bg-[hsl(226,88%,8%)] py-16 lg:scroll-mt-20 lg:py-20">
      <div className="absolute inset-0 grid-pattern opacity-10" />
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white/10 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[hsl(226,90%,5%)] to-transparent" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="-mt-10 mx-auto mb-8 max-w-4xl text-center"
        >
          <span className="text-lg font-bold uppercase tracking-[0.2em] text-primary">How It Works</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-5 text-white">
            Simple Process, Powerful Results
          </h2>
          <p className="text-base leading-7 text-blue-100/80 sm:text-lg">
            Get started in minutes. Transform your logistics operations in days.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-[60px] left-[calc(12.5%+24px)] right-[calc(12.5%+24px)] h-0.5 bg-white/20">
            <div className="absolute inset-0 bg-gradient-to-r from-white via-cyan-200 to-transparent" style={{ width: '58%' }} />
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4 xl:gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative"
              >
                <div className="h-full rounded-lg border border-white/15 bg-white/10 p-5 text-center shadow-[0_18px_50px_-30px_hsl(220_90%_10%/0.7)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/15 xl:p-6">
                  {/* Icon Circle */}
                  <div className="relative inline-flex mb-6">
                    <div className="w-12 h-12 rounded-xl bg-white text-primary border border-white/30 shadow-card flex items-center justify-center">
                      <step.icon className="w-6 h-6 text-primary" />
                    </div>
                    {/* Step Number Badge */}
                    <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-cyan-300 text-blue-950 text-xs font-bold flex items-center justify-center">
                      {index + 1}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-semibold mb-2 text-white">
                    {step.title}
                  </h3>
                  <p className="text-blue-100/80 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
