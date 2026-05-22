import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Section, SectionHeader } from "@/components/Section";
import {
  ArrowRight, Building2,
  Laptop, Printer, Server, HardDrive, Network, Tv, Projector, Monitor,
  Award, ShieldCheck, Truck, Handshake, BarChart3,
} from "lucide-react";
import hpLogo from "@/assets/brands/hp.png";
import hpeLogo from "@/assets/brands/hpe.png";
import canonLogo from "@/assets/brands/canon.png";
import epsonLogo from "@/assets/brands/epson.png";
import samsungLogo from "@/assets/brands/samsung.png";
import lgLogo from "@/assets/brands/lg.png";
import wdLogo from "@/assets/brands/wd.png";
import numericLogo from "@/assets/brands/numeric.png";
import laptopDesktopImg from "@/assets/products/laptop_desktop.png";
import printerImg from "@/assets/products/printer.jpg";
import serverImg from "@/assets/products/server.jpg";
import storageImg from "@/assets/products/storage.jpg";
import appliancesImg from "@/assets/products/appliances.jpg";
import projectorsImg from "@/assets/products/projectors.jpg";
import workstationsImg from "@/assets/products/workstations.jpg";
import networkingImg from "@/assets/products/networking.jpg";




const brandPartners = [
  { name: "HP", src: hpLogo },
  { name: "Hewlett Packard Enterprise", src: hpeLogo },
  { name: "Canon", src: canonLogo },
  { name: "Epson", src: epsonLogo },
  { name: "Samsung", src: samsungLogo },
  { name: "LG", src: lgLogo },
  { name: "Western Digital", src: wdLogo },
  { name: "Numeric (Legrand)", src: numericLogo },
];

export const Route = createFileRoute("/")({
  component: HomePage,
});

const trustOrgs = [
  "Ministry of External Affairs",
  "Ministry of Education",
  "Department of Telecommunications",
  "Ministry of Agriculture",
  "Ministry of Railways",
  "Ministry of Defence",
];

const CARD_BG = "#FFFFFF";


const categories = [
  { icon: Laptop, title: "Laptops & Desktops" },
  { icon: Printer, title: "Printers & Imaging Solutions" },
  { icon: Server, title: "Servers & Enterprise Hardware" },
  { icon: HardDrive, title: "Storage Devices" },
  { icon: Network, title: "Networking Equipment" },
  { icon: Tv, title: "Appliances" },
  { icon: Projector, title: "Projectors & Peripherals" },
  { icon: Monitor, title: "Workstations" },
];

const why = [
  { icon: Award, title: "Tier-1 Distribution Standards" },
  { icon: Truck, title: "Fast Logistics & SLA-driven Delivery" },
  { icon: Handshake, title: "Trusted OEM Partnerships" },
  { icon: BarChart3, title: "Consistent Supply Performance" },
];

function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-white border-b border-border/50">
        <div className="pointer-events-none absolute inset-0 bg-pattern-grid opacity-[0.03] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16 text-center">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded border border-primary/10 bg-primary/5 px-3 py-1 text-xs font-medium text-primary uppercase tracking-widest">
              <ShieldCheck className="h-3.5 w-3.5" /> Trusted by Government Organisations & Enterprises Since 1989
            </span>
            <h1 className="mt-5 text-4xl sm:text-5xl font-semibold tracking-tight leading-[1.1] text-primary max-w-4xl mx-auto">
              Powering Organizations with Scalable Technology & Appliances
            </h1>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow hover:shadow-md px-8 font-medium">
                <Link to="/contact">Request a Quote <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-white text-primary border-primary/20 hover:bg-primary/5 hover:border-primary/30 px-8 font-medium">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted by */}
      <section className="border-y border-border/40 bg-slate-50/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-8 gap-y-10">
            {trustOrgs.map((org) => (
              <div
                key={org}
                className="flex items-center justify-center gap-2.5 px-2 text-center group"
              >
                <div className="h-8 w-8 rounded-full bg-white shadow-sm flex items-center justify-center border border-border/50 group-hover:border-primary/20 transition-premium">
                  <Building2 className="h-3.5 w-3.5 text-primary/60 group-hover:text-primary transition-premium" />
                </div>
                <span className="text-[0.7rem] font-bold text-foreground/80 leading-tight tracking-wide">{org}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Partners */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">



            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-primary leading-[1.1]">
              Authorized Partnership with Global Brands
            </h2>
          </div>
          <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {brandPartners.map((b) => (
              <div
                key={b.name}
                className="group flex h-24 items-center justify-center rounded-xl bg-white p-6 shadow-card border border-border/40 transition-premium hover:-translate-y-0.5 hover:shadow-md hover:border-primary/10"
              >
                <img
                  src={b.src}
                  alt={`${b.name} logo`}
                  className="max-h-10 max-w-full w-auto object-contain transition-premium"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product categories */}
      <Section muted>
        <SectionHeader
          eyebrow="Solutions"
          title="Product Range"
          className="mb-16"
        />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 px-2 sm:px-4">
          {categories.map((c) => {
            const cardImages: Record<string, string> = {
              "Laptops & Desktops": laptopDesktopImg,
              "Printers & Imaging Solutions": printerImg,
              "Servers & Enterprise Hardware": serverImg,
              "Storage Devices": storageImg,
              "Appliances": appliancesImg,
              "Projectors & Peripherals": projectorsImg,
              "Workstations": workstationsImg,
              "Networking Equipment": networkingImg,
            };

            const imgSrc = cardImages[c.title];

            if (imgSrc) {
              return (
                <div
                  key={c.title}
                  className="group relative aspect-[16/11] overflow-hidden rounded-xl shadow-card transition-premium hover:-translate-y-0.5 hover:shadow-md"
                >
                  <img
                    src={imgSrc}
                    alt={c.title}
                    className="absolute inset-0 h-full w-full object-cover transition-premium group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent opacity-65 transition-premium group-hover:opacity-85" />
                  <div className="absolute inset-0 flex flex-col justify-end p-5">
                    <h3 className="text-base font-medium text-white tracking-tight transition-premium">
                      {c.title}
                    </h3>
                    <div className="h-[1px] w-0 bg-primary mt-2 transition-premium group-hover:w-8" />
                  </div>
                </div>
              );
            }
            return null;
          })}
        </div>
      </Section>

      {/* Why choose us */}
      <Section>
        <div className="grid gap-16 lg:grid-cols-5 lg:items-center">
          <div className="lg:col-span-2">
            <SectionHeader
              eyebrow="Why Heemo India"
              title={<>A Trusted Partner,<br />Since 1989</>}
              align="left"
            />
          </div>
          <div className="lg:col-span-3 grid gap-6 sm:grid-cols-2">
            {why.map((w) => {
              const IconMap: Record<string, React.ReactNode> = {
                "Tier-1 Distribution Standards": (
                  <div className="relative">
                    <div className="absolute -inset-2 bg-primary/10 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-premium" />
                    <Award className="h-6 w-6 text-primary relative z-10" />
                  </div>
                ),
                "Fast Logistics & SLA-driven Delivery": (
                  <div className="relative">
                    <div className="absolute -inset-2 bg-primary/10 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-premium" />
                    <Truck className="h-6 w-6 text-primary relative z-10" />
                  </div>
                ),
                "Trusted OEM Partnerships": (
                  <div className="relative">
                    <div className="absolute -inset-2 bg-primary/10 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-premium" />
                    <Handshake className="h-6 w-6 text-primary relative z-10" />
                  </div>
                ),
                "Consistent Supply Performance": (
                  <div className="relative">
                    <div className="absolute -inset-2 bg-primary/10 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-premium" />
                    <BarChart3 className="h-6 w-6 text-primary relative z-10" />
                  </div>
                ),
              };

              return (
                <div key={w.title} className="group relative flex flex-col items-start gap-4 rounded-xl p-5 sm:p-6 bg-white border border-border/50 shadow-card transition-premium hover:shadow-md hover:border-primary/5 overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-primary/0 group-hover:bg-primary transition-premium" />
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-50 text-primary transition-premium group-hover:bg-primary/5 group-hover:scale-[1.03]">
                    {IconMap[w.title]}
                  </div>
                  <h3 className="font-medium text-base text-foreground group-hover:text-primary transition-premium leading-snug">{w.title}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </Section>

    </>
  );
}
