import { createFileRoute, Link } from "@tanstack/react-router";
import { Section, SectionHeader } from "@/components/Section";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import hpLogo from "@/assets/brands/hp.png";
import hpeLogo from "@/assets/brands/hpe.png";
import canonLogo from "@/assets/brands/canon.png";
import epsonLogo from "@/assets/brands/epson.png";
import lgLogo from "@/assets/brands/lg.png";
import samsungLogo from "@/assets/brands/samsung.png";
import wdLogo from "@/assets/brands/wd.png";
import numericLogo from "@/assets/brands/numeric.png";

export const Route = createFileRoute("/brand-partners")({
  component: BrandPartnersPage,
});

const partners = [
  { name: "HP", logo: hpLogo, desc: "Workstation, Desktops, Scanning & Printing Solutions" },
  { name: "HPE", logo: hpeLogo, desc: "Enterprise Servers & Storage" },
  { name: "Canon", logo: canonLogo, desc: "Scanning & Printing Solutions" },
  { name: "Epson", logo: epsonLogo, desc: "Projectors, Scanning & Printing Solutions" },
  { name: "LG", logo: lgLogo, desc: "Displays & Appliances" },
  { name: "Samsung", logo: samsungLogo, desc: "Displays & Appliances" },
  { name: "Western Digital", logo: wdLogo, desc: "Storage Devices" },
  { name: "Numeric", logo: numericLogo, desc: "Power & UPS Solutions" },
];

function BrandPartnersPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-white border-b border-border/50">
        <div className="pointer-events-none absolute inset-0 bg-pattern-grid opacity-[0.03] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-28">
          <p className="text-[0.65rem] font-bold uppercase tracking-[0.3em] text-primary/60 mb-6">Our Ecosystem</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-primary max-w-4xl leading-[1.1] animate-fade-up">
            Trusted OEM Partners for<br />Institutional Supply
          </h1>
          <p className="mt-8 text-lg sm:text-xl max-w-2xl leading-relaxed text-muted-foreground animate-fade-up animate-delay-100">
            We source exclusively through authorized channels to ensure product authenticity and full warranty support for our institutional clients.
          </p>
        </div>
      </section>

      <Section muted>
        <SectionHeader
          eyebrow="Authorized Partnerships"
          title="Global Brand Portfolio"
          className="mb-16"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {partners.map((p) => (
            <div
              key={p.name}
              className="group relative flex flex-col items-center rounded-2xl border border-border/50 bg-white p-8 text-center shadow-card transition-premium hover:-translate-y-1.5 hover:shadow-elegant hover:border-primary/20"
            >
              <div className="flex h-20 w-32 items-center justify-center transition-premium group-hover:scale-110">
                <img
                  src={p.logo}
                  alt={`${p.name} logo`}
                  className="max-h-12 max-w-full w-auto object-contain transition-premium"
                  loading="lazy"
                />
              </div>
              <h3 className="mt-6 text-lg font-bold text-foreground group-hover:text-primary transition-premium">{p.name}</h3>
              <p className="mt-2 text-xs font-medium text-muted-foreground leading-relaxed px-4">{p.desc}</p>
              <div className="h-0.5 w-0 bg-primary mt-4 transition-premium group-hover:w-8" />
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="max-w-4xl mx-auto rounded-3xl bg-primary p-8 sm:p-12 text-center text-primary-foreground shadow-glow animate-fade-up">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Looking for a specific OEM solution?</h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Our network extends beyond our primary partners. Contact us to discuss your specific technological or appliance requirements.
          </p>
          <Button asChild size="lg" variant="secondary" className="rounded-full px-8 shadow-elegant">
            <Link to="/contact">Get in Touch <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
      </Section>
    </>
  );
}
