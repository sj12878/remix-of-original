import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { Section } from "@/components/Section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import { Phone, Mail, MapPin, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
});

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  organization: z.string().trim().max(150).optional().or(z.literal("")),
  email: z.string().trim().email("Invalid email").max(255),
  phone: z.string().trim().max(20).optional().or(z.literal("")),
  requirement: z.string().trim().max(200).optional().or(z.literal("")),
  message: z.string().trim().min(1, "Message is required").max(1500),
});

function ContactPage() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const data = {
      name: String(form.get("name") || ""),
      organization: String(form.get("organization") || ""),
      email: String(form.get("email") || ""),
      phone: String(form.get("phone") || ""),
      requirement: String(form.get("requirement") || ""),
      message: String(form.get("message") || ""),
    };
    const result = schema.safeParse(data);
    if (!result.success) {
      toast.error(result.error.issues[0]?.message ?? "Please check the form");
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      (e.target as HTMLFormElement).reset();
      toast.success("Thank you! Our team will get back to you shortly.");
    }, 600);
  };

  return (
    <>
      <Toaster />
      <section className="relative overflow-hidden bg-white border-b border-border/50">
        <div className="pointer-events-none absolute inset-0 bg-pattern-grid opacity-[0.03] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-28">
          <p className="text-[0.65rem] font-bold uppercase tracking-[0.3em] text-primary/60 mb-6">Contact Us</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-primary max-w-4xl leading-[1.1] animate-fade-up">
            Let's Build a Reliable<br />Supply Partnership
          </h1>
          <p className="mt-8 text-lg sm:text-xl max-w-3xl leading-relaxed text-muted-foreground animate-fade-up animate-delay-100">
            Share your requirement and our team will respond with a
            tailored proposal focused on your institutional needs.
          </p>
        </div>
      </section>

      <Section muted>
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2 space-y-8 animate-fade-up">
            <div className="rounded-2xl border border-border/50 bg-white p-8 sm:p-10 shadow-card">
              <h3 className="text-2xl font-bold text-foreground">Get in Touch</h3>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                Reach us through any of the following channels for inquiries, quotes, or procurement coordination.
              </p>
              <ul className="mt-10 space-y-8">
                <li className="group flex items-start gap-4 transition-premium">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-50 text-primary group-hover:bg-primary group-hover:text-white transition-premium">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1">Phone</div>
                    <div className="text-base font-semibold text-foreground">+91 9719107400</div>
                  </div>
                </li>
                <li className="group flex items-start gap-4 transition-premium">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-50 text-primary group-hover:bg-primary group-hover:text-white transition-premium">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1">Email</div>
                    <div className="text-base font-semibold text-foreground">info@heemoindia.in</div>
                  </div>
                </li>
                <li className="group flex items-start gap-4 transition-premium">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-50 text-primary group-hover:bg-primary group-hover:text-white transition-premium">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1">Location</div>
                    <div className="text-base font-semibold text-foreground">Meerut, Uttar Pradesh, India</div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="overflow-hidden rounded-2xl border border-border/50 shadow-card bg-white p-2">
              <iframe
                title="Heemo India location — Meerut"
                src="https://www.google.com/maps?q=Heemo+India,28.9896085,77.6984116&z=17&output=embed"
                width="100%"
                height="300"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block w-full rounded-xl grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-premium"
              />
            </div>
          </div>

          <div className="lg:col-span-3 animate-fade-up animate-delay-100">
            <form onSubmit={handleSubmit} className="rounded-2xl border border-border/50 bg-white p-8 sm:p-12 shadow-card space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-xs font-bold uppercase tracking-wider">Full Name *</Label>
                  <Input id="name" name="name" placeholder="Enter your full name" required className="h-12 rounded-xl border-border/60 focus:ring-primary/20" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="organization" className="text-xs font-bold uppercase tracking-wider">Organization</Label>
                  <Input id="organization" name="organization" placeholder="Organisation / Dept Name" className="h-12 rounded-xl border-border/60 focus:ring-primary/20" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-xs font-bold uppercase tracking-wider">Email *</Label>
                  <Input id="email" name="email" type="email" placeholder="Official email address" required className="h-12 rounded-xl border-border/60 focus:ring-primary/20" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-xs font-bold uppercase tracking-wider">Phone</Label>
                  <Input id="phone" name="phone" placeholder="+91" className="h-12 rounded-xl border-border/60 focus:ring-primary/20" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="requirement" className="text-xs font-bold uppercase tracking-wider">Requirement</Label>
                <Input id="requirement" name="requirement" placeholder="Mention your requirement (Products, Quantity, Tender, etc.)" className="h-12 rounded-xl border-border/60 focus:ring-primary/20" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message" className="text-xs font-bold uppercase tracking-wider">Message *</Label>
                <Textarea id="message" name="message" placeholder="Share your specifications, timelines, or procurement details" rows={6} required className="rounded-xl border-border/60 focus:ring-primary/20 resize-none" />
              </div>
              <Button type="submit" size="lg" disabled={submitting} className="w-full sm:w-auto h-12 px-10 rounded-full font-bold shadow-lg shadow-primary/10 transition-premium">
                {submitting ? "Sending..." : "Send Enquiry"}
              </Button>

              {submitted && (
                <div className="flex items-start gap-3 rounded-xl bg-slate-50 p-5 text-sm text-foreground border border-primary/10 animate-fade-in">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                  <p className="font-medium">Thank you for reaching out. Our team will respond shortly.</p>
                </div>
              )}
            </form>
          </div>
        </div>
      </Section>
    </>
  );
}
