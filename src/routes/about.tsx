import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionHeader } from "@/components/Section";
import { Truck, Handshake, Building2, Target, Eye, Zap } from "lucide-react";
import handshakeIcon from "@/assets/icons/handshake.png";
import institutionalIcon from "@/assets/icons/institutional.png";
import logisticsIcon from "@/assets/icons/logistics.png";
import seamlessIcon from "@/assets/icons/seamless.png";

export const Route = createFileRoute("/about")({
  component: AboutPage,
});

const pillars = [
  { iconSrc: handshakeIcon, title: "Long-Term Partnerships", desc: "We invest in dependable client and OEM relationships built on consistency and accountability." },
  { iconSrc: institutionalIcon, title: "Institutional Supply Expertise", desc: "Trusted experience in supporting government and enterprise procurement requirements." },
  { iconSrc: logisticsIcon, title: "Logistics Strength", desc: "A pan-India delivery network with SLA-driven dispatch, tracking and last-mile coordination." },
  { iconSrc: seamlessIcon, title: "Seamless Execution", desc: "Handled with clear coordination and reliable execution — without constant follow-ups." },
];

function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-white border-b border-border/50">
        <div className="pointer-events-none absolute inset-0 bg-pattern-grid opacity-[0.03] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-28">
          <p className="text-xs font-medium uppercase tracking-widest text-primary/60 mb-6">About Heemo India</p>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-primary max-w-4xl leading-[1.1] animate-fade-up">
            A Trusted Supply Partner,<br />Since 1989
          </h1>
        </div>
      </section>

      <Section muted>
        <SectionHeader
          eyebrow="What Defines Us"
          title="Our Core Pillars"
          className="mb-16"
        />
        <div className="grid gap-8 sm:grid-cols-2">
          {pillars.map((p, i) => (
            <div key={p.title} className="group relative rounded-xl border border-border/50 bg-white p-6 sm:p-8 shadow-card transition-premium hover:-translate-y-0.5 hover:shadow-md hover:border-primary/10">
              <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-slate-50 p-4 transition-premium group-hover:bg-primary/5 group-hover:scale-[1.03]">
                <img src={p.iconSrc} alt={p.title} className="h-full w-full object-contain" />
              </div>
              <h3 className="mt-6 text-lg font-semibold text-foreground group-hover:text-primary transition-premium">{p.title}</h3>
            </div>
          ))}
        </div>
      </Section>

      {/* Mission & Vision */}
      <Section>
        <SectionHeader
          eyebrow="Our Purpose"
          title="Mission & Vision"
          className="mb-16"
        />
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="group relative rounded-xl border border-border/50 bg-white p-8 shadow-card transition-premium hover:shadow-md overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[2px] bg-primary/10 group-hover:bg-primary transition-premium" />
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-50 text-primary transition-premium group-hover:bg-primary group-hover:text-white">
              <Target className="h-6 w-6" />
            </div>
            <h3 className="mt-6 text-xl font-semibold tracking-tight text-foreground">Mission</h3>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              To provide dependable supply of IT Products and Appliances with consistent execution and clear processes.
            </p>
          </div>
          <div className="group relative rounded-xl border border-border/50 bg-white p-8 shadow-card transition-premium hover:shadow-md overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[2px] bg-primary/10 group-hover:bg-primary transition-premium" />
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-50 text-primary transition-premium group-hover:bg-primary group-hover:text-white">
              <Eye className="h-6 w-6" />
            </div>
            <h3 className="mt-6 text-xl font-semibold tracking-tight text-foreground">Vision</h3>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              To build long-term partnerships as a trusted supply partner for government organisations and enterprises
            </p>
          </div>
        </div>
      </Section>

    </>
  );
}
