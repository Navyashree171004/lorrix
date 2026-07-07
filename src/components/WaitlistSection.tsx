import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Users, Clock, Gift, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  email: z.string().trim().email("Enter a valid email").max(160),
  company: z.string().trim().max(120).optional(),
});

export function WaitlistSection() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit =  async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const parsed = schema.safeParse({
      name: data.get("name"),
      email: data.get("email"),
      company: data.get("company") || undefined,
    });
    if (!parsed.success) {
      toast({
        title: "Check your details",
        description: parsed.error.issues[0]?.message ?? "Invalid input",
        variant: "destructive",
      });
      return;
    }
    setLoading(true);

try {
  const response = await fetch(
    "https://formspree.io/f/mkolgnze",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(parsed.data),
    }
  );

  if (response.ok) {
    try {
  await fetch(
  "https://script.google.com/macros/s/AKfycbxdZ8O323nb80TwvHKmdskcE8BF_mxCGttCKmYKepssSOfdyd6zrryfA1R8FiMFJ-HK/exec",
  {
    method: "POST",
    mode: "no-cors",
    body: JSON.stringify(parsed.data),
  }
);

} catch (err) {
  console.error("Google Sheet save failed", err);
}
    setSubmitted(true);
    toast({
      title: "You're on the list!",
      description:
        "The Zyplogistech team will reach out shortly to schedule your demo.",
    });
  } else {
    throw new Error("Failed");
  }
} catch (error) {
  toast({
    title: "Submission failed",
    description: "Please try again later.",
    variant: "destructive",
  });
} finally {
  setLoading(false);
}
  };

  return (
    <section id="demo" className="relative scroll-mt-24 overflow-hidden bg-secondary pt-10 pb-2 lg:pt-12 lg:pb-4">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 grid-pattern" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-6 max-w-2xl text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-secondary-foreground md:text-4xl">
            Ready to Transform Your{" "}
            <span className="text-gradient">Logistics Operations?</span>
          </h2>
          <p className="text-base leading-7 text-secondary-foreground/70 sm:text-lg">
            Join forward-thinking transporters already saving time and reducing errors with Lorrix.
            Request a demo and get early access today.
          </p>
        </motion.div>

        {/* Contact Info Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mx-auto mb-6 grid max-w-3xl gap-4 sm:grid-cols-3"
        >
          <div className="flex items-center justify-center gap-2 text-secondary-foreground/80">
            <Mail className="w-4 h-4 text-primary" />
            <span className="text-sm">info@zyplogistech.com</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-secondary-foreground/80">
            <Phone className="w-4 h-4 text-primary" />
            <span className="text-sm">+91 93535 94734</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-secondary-foreground/80">
            <MapPin className="w-4 h-4 text-primary" />
            <span className="text-sm">Bangalore, India</span>
          </div>
        </motion.div>

        <div className="mx-auto grid max-w-6xl items-center gap-8 rounded-2xl border border-border bg-card p-6 shadow-elevated sm:p-8 lg:grid-cols-5 lg:gap-10 xl:p-10">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">
              Request a Demo
            </span>
            <h2 className="mt-3 mb-3 text-2xl font-bold leading-tight text-foreground md:text-3xl">
              Get early access to <span className="text-gradient">Lorrix</span>
            </h2>
            <p className="mb-5 text-sm leading-6 text-muted-foreground">
              Get early access, a personalized demo, and onboarding support for your fleet.
            </p>
            <ul className="space-y-3">
              {[
                { icon: Clock, text: "Priority onboarding within 48 hours" },
                { icon: Gift, text: "Free pilot for first 50 LRs" },
                { icon: Users, text: "Dedicated success manager" },
              ].map((p) => (
                <li key={p.text} className="flex items-center gap-3 text-sm text-foreground">
                  <p.icon className="w-4 h-4 text-primary" />
                  {p.text}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-3"
          >
            {submitted ? (
              <div className="text-center py-10 px-6 rounded-xl bg-accent border border-border">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">You're in!</h3>
                <p className="text-muted-foreground text-sm">
                  Thanks for signing up. Our team will reach out within 48 hours to set up your demo.
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Full name</label>
                    <Input name="name" placeholder="Rohan Mehta" required maxLength={80} />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Company</label>
                    <Input name="company" placeholder="Mehta Transports" maxLength={120} />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Work email</label>
                  <Input name="email" type="email" placeholder="rohan@company.com" required maxLength={160} />
                </div>
                <Button type="submit" variant="hero" size="lg" className="w-full" disabled={loading}>
                  {loading ? "Submitting..." : "Request Demo Access"}
                  <ArrowRight className="w-4 h-4" />
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  No spam. We respect your inbox.
                </p>
              </form>
            )}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
