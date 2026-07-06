import { motion } from "framer-motion";
import { MessageCircle, Camera, Search, ShieldCheck, Sparkles } from "lucide-react";

const capabilities = [
  {
    icon: Camera,
    title: "Upload POD via WhatsApp",
    description:
      "Drivers and field staff send Proof of Delivery photos directly on WhatsApp. Lorrix auto-attaches them to the correct LR.",
  },
  {
    icon: Search,
    title: "Instant LR Lookup",
    description:
      "Send an LR number from an authorized WhatsApp account and get live trip status, consignee details, and POD instantly.",
  },
  {
    icon: ShieldCheck,
    title: "Authorized Access Only",
    description:
      "Number-level whitelisting ensures only verified users can fetch sensitive freight data. Every request is logged.",
  },
];

export function WhatsAppSection() {
  return (
    <section id="whatsapp" className="py-24 bg-accent relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-100 border border-green-200 text-green-700 text-xs font-semibold uppercase tracking-wider mb-5">
              <Sparkles className="w-3.5 h-3.5" />
              New · WhatsApp Integration
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-5 text-foreground leading-tight">
              Operate Your Fleet,{" "}
              <span className="text-gradient">Right from WhatsApp</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              No new app to install. Your drivers and operations team can upload PODs and
              fetch LR details with a simple WhatsApp message — securely tied to Lorrix.
            </p>

            <div className="space-y-5">
              {capabilities.map((c) => (
                <div key={c.title} className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center flex-shrink-0 shadow-card">
                    <c.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{c.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{c.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Chat Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="relative"
          >
            <div className="absolute -inset-6 bg-primary/5 rounded-3xl blur-2xl" />
            <div className="relative bg-card rounded-2xl shadow-elevated border border-border overflow-hidden max-w-md mx-auto">
              {/* Header */}
              <div className="bg-[#075E54] px-5 py-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">Lorrix Assistant</p>
                  <p className="text-white/70 text-xs">online · verified business</p>
                </div>
              </div>

              {/* Messages */}
              <div className="p-5 space-y-3 bg-[#ECE5DD] min-h-[380px]">
                <div className="flex justify-end">
                  <div className="bg-[#DCF8C6] rounded-lg rounded-tr-sm px-3 py-2 max-w-[80%] shadow-sm">
                    <p className="text-sm text-foreground">LR #LR-2026-04821</p>
                    <p className="text-[10px] text-muted-foreground text-right mt-1">10:24 AM</p>
                  </div>
                </div>

                <div className="flex justify-start">
                  <div className="bg-white rounded-lg rounded-tl-sm px-3 py-2 max-w-[85%] shadow-sm">
                    <p className="text-xs font-semibold text-primary mb-1">Trip · TR-1208</p>
                    <p className="text-sm text-foreground">
                      <strong>Status:</strong> In Transit<br />
                      <strong>Consignee:</strong> Reliance Logistics<br />
                      <strong>Vehicle:</strong> MH-12-AB-4521<br />
                      <strong>ETA:</strong> Tomorrow, 6:30 PM
                    </p>
                    <p className="text-[10px] text-muted-foreground text-right mt-1">10:24 AM ✓✓</p>
                  </div>
                </div>

                <div className="flex justify-end">
                  <div className="bg-[#DCF8C6] rounded-lg rounded-tr-sm p-2 max-w-[70%] shadow-sm">
                    <div className="w-full h-32 rounded bg-gradient-to-br from-muted to-accent flex items-center justify-center">
                      <Camera className="w-8 h-8 text-muted-foreground" />
                    </div>
                    <p className="text-xs text-foreground mt-2">POD for LR-2026-04821</p>
                    <p className="text-[10px] text-muted-foreground text-right">10:26 AM</p>
                  </div>
                </div>

                <div className="flex justify-start">
                  <div className="bg-white rounded-lg rounded-tl-sm px-3 py-2 max-w-[85%] shadow-sm">
                    <p className="text-sm text-foreground">
                      ✅ POD received and attached to <strong>LR-2026-04821</strong>. Trip marked as delivered.
                    </p>
                    <p className="text-[10px] text-muted-foreground text-right mt-1">10:26 AM</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
