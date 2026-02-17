"use client";

import { useState, useEffect, useRef, useCallback } from "react";

/* ───────────────────────────── Icons ───────────────────────────── */

function IconShield() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
    </svg>
  );
}

function IconCurrency() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M14.121 7.629A3 3 0 0 0 9.017 9.43c-.023.212-.002.425.028.636l.506 3.541a4.5 4.5 0 0 1-4.243 5.159H5.05m0 0h-.354a.5.5 0 0 1-.5-.5v-.25a.5.5 0 0 1 .5-.5h.354m0 1.25h3.046M8 7.5h1.5A1.5 1.5 0 0 0 11 6V5a1.5 1.5 0 0 0-1.5-1.5H8m7.5 0h1.5A1.5 1.5 0 0 1 18.5 5v1a1.5 1.5 0 0 1-1.5 1.5h-1.5" />
    </svg>
  );
}

function IconClock() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
  );
}

function IconHeart() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
    </svg>
  );
}

function IconStar() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

function IconPhone() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
    </svg>
  );
}

function IconWhatsApp() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function IconMail() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
    </svg>
  );
}

function IconPin() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
    </svg>
  );
}

function IconChevronLeft() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
    </svg>
  );
}

function IconChevronRight() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
    </svg>
  );
}

function IconChevronDown({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
    </svg>
  );
}

function IconCheck() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-brand-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
    </svg>
  );
}

function IconSmartphone() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
    </svg>
  );
}

function IconReferral() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
    </svg>
  );
}

function IconMapPin() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
    </svg>
  );
}

function IconArrowRight() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
    </svg>
  );
}

function IconClose() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
    </svg>
  );
}

/* ───────────────────────────── Animate-on-scroll ───────────────────────────── */

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

function FadeIn({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const { ref, visible } = useInView();
  return (
    <div
      ref={ref}
      className={`${className} transition-all duration-700 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

/* ───────────────────────────── Navigation Data ───────────────────────────── */

interface SubItem { label: string; href: string; desc?: string }
interface SubGroup { heading: string; items: SubItem[] }
interface NavItem { label: string; href: string; groups?: SubGroup[]; cta?: boolean }

const navItems: NavItem[] = [
  {
    label: "Treatments",
    href: "#treatments",
    groups: [
      {
        heading: "Clear Aligners",
        items: [
          { label: "Invisalign", href: "#invisalign", desc: "The world's most trusted clear aligner" },
          { label: "Angel Aligners", href: "#angel-aligners", desc: "Premium aesthetics, exceptional comfort" },
          { label: "Spark", href: "#spark", desc: "Crystal-clear, stain-resistant aligners" },
        ],
      },
      {
        heading: "Fixed Braces",
        items: [
          { label: "Metal Braces", href: "#metal-braces", desc: "Reliable, powerful & cost-effective" },
          { label: "Ceramic Braces", href: "#ceramic-braces", desc: "Tooth-coloured for a subtle look" },
          { label: "Lingual Braces", href: "#lingual-braces", desc: "Hidden behind your teeth" },
        ],
      },
      {
        heading: "Kids & Teens",
        items: [
          { label: "Early Orthodontics", href: "#early-orthodontics", desc: "Interceptive treatment from age 7" },
          { label: "Children's Dentistry", href: "#childrens-dentistry", desc: "Gentle care for younger patients" },
          { label: "Braces for Teens", href: "#teen-braces", desc: "Options designed for teen lifestyles" },
        ],
      },
    ],
  },
  {
    label: "Prices",
    href: "#prices",
    groups: [
      {
        heading: "Pricing & Finance",
        items: [
          { label: "Payment Plans", href: "#payment-plans", desc: "Spread the cost from £49/month" },
          { label: "Prices", href: "#prices", desc: "Transparent pricing for all treatments" },
        ],
      },
    ],
  },
  {
    label: "About Us",
    href: "#about",
    groups: [
      {
        heading: "Our Team",
        items: [
          { label: "Meet The Team", href: "#team", desc: "The people behind your smile" },
          { label: "Meet The Drs", href: "#doctors", desc: "Our specialist orthodontists" },
        ],
      },
    ],
  },
  {
    label: "Smile Gallery",
    href: "#gallery",
    groups: [
      {
        heading: "Results",
        items: [
          { label: "Before & Afters", href: "#before-after", desc: "See real transformations" },
          { label: "Patient Stories", href: "#patient-stories", desc: "Hear from our happy patients" },
        ],
      },
    ],
  },
  { label: "Free Consultation", href: "#contact", cta: true },
];

/* ───────────────────────────── Top Utility Bar ───────────────────────────── */

function TopBar({ visible }: { visible: boolean }) {
  return (
    <div className={`bg-brand-dark text-white text-xs transition-all duration-300 overflow-hidden ${visible ? "max-h-10 opacity-100" : "max-h-0 opacity-0"}`}>
      <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">
        <div className="flex items-center gap-5">
          <a href="tel:02071234567" className="flex items-center gap-1.5 hover:text-brand transition-colors">
            <IconPhone />
            <span>020 7123 4567</span>
          </a>
          <a href="https://wa.me/447700900123" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-green-400 hover:text-green-300 transition-colors">
            <IconWhatsApp />
            <span>07700 900 123</span>
          </a>
        </div>
        <div className="hidden sm:flex items-center gap-5">
          <a href="#find-us" className="flex items-center gap-1.5 hover:text-brand transition-colors">
            <IconMapPin />
            <span>Find Us</span>
          </a>
          <a href="#referral" className="flex items-center gap-1.5 hover:text-brand transition-colors">
            <IconReferral />
            <span>Patient Referral</span>
          </a>
        </div>
      </div>
    </div>
  );
}

/* ───────────────────────────── Desktop Mega Dropdown ───────────────────────────── */

function MegaDropdown({ item, onClose }: { item: NavItem; onClose: () => void }) {
  if (!item.groups) return null;

  return (
    <div className="fixed left-0 right-0 z-[60]" style={{ top: "var(--nav-bottom)" }}>
      <div className="bg-white border-t border-brand/10 shadow-2xl">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex gap-12">
            <div className="flex-1 grid gap-10" style={{ gridTemplateColumns: `repeat(${item.groups.length}, 1fr)` }}>
              {item.groups.map((group, gi) => (
                <div key={gi}>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-brand-dark/50 mb-5">{group.heading}</h4>
                  <ul className="space-y-1">
                    {group.items.map((sub, si) => (
                      <li key={si}>
                        <a href={sub.href} onClick={onClose} className="group/link flex items-start gap-3 p-3 rounded-xl hover:bg-brand-light/60 transition-all duration-200">
                          <div className="w-10 h-10 rounded-lg bg-brand-light group-hover/link:bg-brand/20 flex items-center justify-center text-brand-dark shrink-0 transition-colors">
                            <IconArrowRight />
                          </div>
                          <div>
                            <p className="font-semibold text-neutral-text group-hover/link:text-brand-dark transition-colors text-sm">{sub.label}</p>
                            {sub.desc && <p className="text-xs text-neutral-muted mt-0.5">{sub.desc}</p>}
                          </div>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="hidden xl:flex flex-col justify-between w-72 bg-gradient-to-br from-brand-dark to-[#164568] rounded-2xl p-6 text-white shrink-0">
              <div>
                <p className="text-brand font-semibold text-xs uppercase tracking-wider mb-2">Don&apos;t Wait</p>
                <h3 className="text-lg font-bold leading-snug">Book Your Free Consultation Today</h3>
                <p className="text-brand-light/70 text-sm mt-2 leading-relaxed">No waiting lists. No obligations. Start your smile journey now.</p>
              </div>
              <a href="#contact" onClick={onClose} className="mt-6 bg-white text-brand-dark px-5 py-3 rounded-xl font-semibold text-sm text-center hover:bg-brand-light transition-all duration-300 hover:scale-105 shadow-lg">
                Get Started →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ───────────────────────────── Mobile Full-Screen Nav ───────────────────────────── */

function MobileNav({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [expanded, setExpanded] = useState<string | null>(null);
  const [subExpanded, setSubExpanded] = useState<string | null>(null);

  const toggle = (label: string) => {
    setExpanded(expanded === label ? null : label);
    setSubExpanded(null);
  };

  const toggleSub = (heading: string) => {
    setSubExpanded(subExpanded === heading ? null : heading);
  };

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <div className={`fixed inset-0 z-[70] transition-all duration-500 ${open ? "visible" : "invisible"}`}>
      <div className={`absolute inset-0 bg-brand-dark/95 backdrop-blur-lg transition-opacity duration-500 ${open ? "opacity-100" : "opacity-0"}`} onClick={onClose} />
      <div className={`absolute inset-0 flex flex-col transition-transform duration-500 ease-out ${open ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
          <a href="#" className="flex items-center gap-2" onClick={onClose}>
            <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">J</span>
            </div>
            <span className="text-lg font-bold text-white">JXB Orthodontics<span className="text-brand">.</span></span>
          </a>
          <button onClick={onClose} className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors" aria-label="Close menu">
            <IconClose />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto px-6 py-6">
          <nav className="space-y-1">
            {navItems.map((item, i) => {
              if (item.cta) {
                return (
                  <a key={i} href={item.href} onClick={onClose} className="block mt-6 bg-gradient-to-r from-amber-400 to-orange-500 text-brand-dark px-6 py-4 rounded-2xl font-bold text-lg text-center shadow-lg hover:scale-105 transition-transform">
                    {item.label}
                  </a>
                );
              }
              const isExpanded = expanded === item.label;
              return (
                <div key={i} className="border-b border-white/5">
                  <button onClick={() => item.groups ? toggle(item.label) : undefined} className="w-full flex items-center justify-between py-4 text-white text-lg font-semibold">
                    <span>{item.label}</span>
                    {item.groups && (
                      <span className={`transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}>
                        <IconChevronDown className="w-5 h-5" />
                      </span>
                    )}
                  </button>
                  {item.groups && (
                    <div className={`overflow-hidden transition-all duration-400 ease-out ${isExpanded ? "max-h-[600px] opacity-100 mb-4" : "max-h-0 opacity-0"}`}>
                      {item.groups.map((group, gi) => {
                        const isSubOpen = subExpanded === group.heading;
                        return (
                          <div key={gi} className="ml-2">
                            <button onClick={() => toggleSub(group.heading)} className="w-full flex items-center justify-between py-3 text-brand font-medium text-base">
                              <span>{group.heading}</span>
                              <span className={`transition-transform duration-300 ${isSubOpen ? "rotate-180" : ""}`}>
                                <IconChevronDown className="w-4 h-4" />
                              </span>
                            </button>
                            <div className={`overflow-hidden transition-all duration-300 ${isSubOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"}`}>
                              {group.items.map((sub, si) => (
                                <a key={si} href={sub.href} onClick={onClose} className="block ml-4 py-2.5 text-white/70 hover:text-white text-sm transition-colors">
                                  {sub.label}
                                  {sub.desc && <span className="block text-white/40 text-xs mt-0.5">{sub.desc}</span>}
                                </a>
                              ))}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>
        </div>
        <div className="px-6 py-5 border-t border-white/10 space-y-3">
          <div className="flex gap-3">
            <a href="tel:02071234567" className="flex-1 flex items-center justify-center gap-2 bg-white/10 text-white py-3 rounded-xl text-sm font-medium hover:bg-white/20 transition-colors">
              <IconPhone /> Call Us
            </a>
            <a href="https://wa.me/447700900123" target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 bg-green-600 text-white py-3 rounded-xl text-sm font-medium hover:bg-green-500 transition-colors">
              <IconWhatsApp /> WhatsApp
            </a>
          </div>
          <div className="flex gap-3 text-xs text-white/50">
            <a href="#find-us" onClick={onClose} className="flex items-center gap-1 hover:text-white/80 transition-colors"><IconMapPin /> Find Us</a>
            <span>·</span>
            <a href="#referral" onClick={onClose} className="flex items-center gap-1 hover:text-white/80 transition-colors"><IconReferral /> Patient Referral</a>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ───────────────────────────── Navbar ───────────────────────────── */

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const update = () => {
      if (navRef.current) {
        const rect = navRef.current.getBoundingClientRect();
        document.documentElement.style.setProperty("--nav-bottom", `${rect.bottom}px`);
      }
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update, { passive: true });
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const handleMouseEnter = useCallback((label: string) => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    setActiveDropdown(label);
  }, []);

  const handleMouseLeave = useCallback(() => {
    closeTimeoutRef.current = setTimeout(() => setActiveDropdown(null), 150);
  }, []);

  const closeDropdown = useCallback(() => setActiveDropdown(null), []);

  return (
    <>
      <TopBar visible={!scrolled} />
      <nav
        ref={navRef}
        className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-xl shadow-md" : "bg-white/80 backdrop-blur-sm"}`}
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <a href="#" className="flex items-center gap-2 shrink-0">
              <div className="w-9 h-9 bg-brand-dark rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-sm">J</span>
              </div>
              <span className="text-xl font-bold text-neutral-text tracking-tight">JXB Orthodontics<span className="text-brand-dark">.</span></span>
            </a>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item, i) => {
                if (item.cta) return null;
                const hasDropdown = !!item.groups;
                const isActive = activeDropdown === item.label;
                return (
                  <div
                    key={i}
                    className="relative"
                    onMouseEnter={() => hasDropdown && handleMouseEnter(item.label)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <a
                      href={item.href}
                      className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${isActive ? "text-brand-dark bg-brand-light/60" : "text-neutral-muted hover:text-brand-dark hover:bg-brand-light/40"}`}
                      onClick={(e) => { if (hasDropdown) e.preventDefault(); }}
                    >
                      {item.label}
                      {hasDropdown && (
                        <span className={`transition-transform duration-200 ${isActive ? "rotate-180" : ""}`}>
                          <IconChevronDown />
                        </span>
                      )}
                    </a>
                    {isActive && hasDropdown && <MegaDropdown item={item} onClose={closeDropdown} />}
                  </div>
                );
              })}
            </div>

            {/* Desktop CTA only */}
            <div className="hidden lg:flex items-center gap-4">
              <a href="#contact" className="bg-gradient-to-r from-amber-400 to-orange-500 text-brand-dark px-6 py-2.5 rounded-xl text-sm font-bold hover:shadow-lg hover:scale-105 transition-all duration-300 shadow-md focus:ring-4 focus:ring-amber-300 focus:outline-none">
                Free Consultation
              </a>
            </div>

            <button className="lg:hidden flex flex-col gap-1.5 p-2" onClick={() => setMobileOpen(true)} aria-label="Open menu">
              <span className="w-6 h-0.5 bg-neutral-text rounded-full" />
              <span className="w-4 h-0.5 bg-neutral-text rounded-full" />
              <span className="w-6 h-0.5 bg-neutral-text rounded-full" />
            </button>
          </div>
        </div>
      </nav>
      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}

/* ───────────────────────────── Hero ───────────────────────────── */

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-brand-light to-white">
      <div className="absolute top-20 -left-32 w-96 h-96 bg-brand/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-0 w-80 h-80 bg-brand/15 rounded-full blur-3xl" />
      <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-20 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <FadeIn>
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur rounded-full px-4 py-1.5 text-sm font-medium text-brand-dark border border-brand/30 mb-6 shadow-sm">
              <span className="flex gap-0.5">{[...Array(5)].map((_, i) => <IconStar key={i} />)}</span>
              <span>Rated 4.9/5 by 1,200+ patients</span>
            </div>
          </FadeIn>
          <FadeIn delay={100}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-dark leading-tight tracking-tight">
              Your Smile,{" "}
              <span className="bg-gradient-to-r from-brand-dark to-brand bg-clip-text text-transparent">Perfect</span>
            </h1>
          </FadeIn>
          <FadeIn delay={200}>
            <p className="mt-6 text-lg text-neutral-muted leading-relaxed max-w-lg">
              Specialist orthodontists creating bespoke treatment plans for children, teens, and adults. No waiting lists. Flexible finance from £49/month. Real-time progress with Dental Monitoring.
            </p>
          </FadeIn>
          <FadeIn delay={300}>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#contact" className="bg-brand-dark text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-[#164568] transition-all duration-300 shadow-lg hover:scale-105 hover:-translate-y-0.5 focus:ring-4 focus:ring-brand focus:outline-none">
                Book Your Free Consultation
              </a>
              <a href="#treatments" className="flex items-center gap-2 px-6 py-4 rounded-xl font-semibold text-neutral-text hover:text-brand-dark transition-colors">
                View Treatments →
              </a>
            </div>
          </FadeIn>
          <FadeIn delay={400}>
            <div className="mt-10 flex items-center gap-6 text-sm text-neutral-muted">
              <span className="flex items-center gap-1.5"><IconShield /> GDC Registered</span>
              <span className="flex items-center gap-1.5"><IconShield /> BOS Member</span>
              <span className="flex items-center gap-1.5"><IconShield /> CQC Rated</span>
            </div>
          </FadeIn>
        </div>
        <FadeIn delay={200} className="relative hidden lg:block">
          <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden bg-gradient-to-br from-brand-light to-brand/30 shadow-2xl">
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
              <div className="w-32 h-32 bg-brand/30 rounded-full mb-6 flex items-center justify-center">
                <span className="text-5xl">😊</span>
              </div>
              <p className="text-neutral-muted text-sm font-medium">Replace with hero image of smiling patients</p>
              <p className="text-neutral-muted/60 text-xs mt-1">Recommended: 800×1000px</p>
            </div>
          </div>
          <div className="absolute -left-6 bottom-12 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3 border border-brand/20">
            <div className="w-10 h-10 bg-accent-mint rounded-full flex items-center justify-center text-brand-dark font-bold text-sm">✓</div>
            <div>
              <p className="text-sm font-semibold text-neutral-text">2,500+ Smiles Created</p>
              <p className="text-xs text-neutral-muted">Across all age groups</p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

/* ───────────────────────────── Why Choose Us ───────────────────────────── */

const usps = [
  { icon: <IconShield />, title: "Specialist Orthodontists", desc: "Our team are GDC-registered specialists with years of advanced training beyond general dentistry. You're in expert hands." },
  { icon: <IconCurrency />, title: "Flexible Finance", desc: "Spread the cost with interest-free finance from just £49 per month. We believe everyone deserves a confident smile." },
  { icon: <IconClock />, title: "Convenient Appointments", desc: "Early morning, evening, and weekend slots available. We work around your schedule, not the other way round." },
  { icon: <IconHeart />, title: "Family-Friendly Practice", desc: "From age 7 to 70+, we treat the whole family in a warm, welcoming environment designed to put you at ease." },
];

function WhyUs() {
  return (
    <section id="why-us" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-brand-dark font-semibold text-sm uppercase tracking-wider mb-3">Why Choose JXB Orthodontics</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-dark">Orthodontic Care Built Around You</h2>
          </div>
        </FadeIn>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {usps.map((item, i) => (
            <FadeIn key={i} delay={i * 100}>
              <div className="group bg-neutral-bg hover:bg-brand-light rounded-2xl p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border border-transparent hover:border-brand/30">
                <div className="w-14 h-14 bg-brand-light group-hover:bg-brand/30 rounded-xl flex items-center justify-center text-brand-dark transition-colors mb-5">{item.icon}</div>
                <h3 className="text-lg font-bold text-neutral-text mb-2">{item.title}</h3>
                <p className="text-neutral-muted text-sm leading-relaxed">{item.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────── Treatments ───────────────────────────── */

const treatments = [
  { name: "Invisalign", tagline: "Nearly Invisible Aligners", colour: "from-brand-dark to-brand", benefits: ["Virtually invisible — most people won't notice", "Removable for eating, brushing, and flossing", "Fewer appointments with Dental Monitoring"] },
  { name: "Fixed Metal Braces", tagline: "Tried, Tested & Reliable", colour: "from-slate-600 to-slate-800", benefits: ["Highly effective for complex cases", "Suitable for children, teens, and adults", "Modern brackets are smaller and more discreet"] },
  { name: "Clear Ceramic Braces", tagline: "Discreet & Effective", colour: "from-brand to-accent-mint", benefits: ["Tooth-coloured brackets blend with your smile", "Ideal for patients wanting a subtle look", "Same precision as traditional metal braces"] },
];

function Treatments() {
  return (
    <section id="treatments" className="py-24 bg-gradient-to-b from-brand-light to-white">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-brand-dark font-semibold text-sm uppercase tracking-wider mb-3">Our Treatments</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-dark">A Treatment to Suit Every Smile</h2>
            <p className="mt-4 text-neutral-muted">Whether you prefer clear aligners or fixed braces, we'll recommend the best option for your lifestyle and goals.</p>
          </div>
        </FadeIn>
        <div className="grid md:grid-cols-3 gap-8">
          {treatments.map((t, i) => (
            <FadeIn key={i} delay={i * 120}>
              <div className="bg-white rounded-2xl border border-brand/20 overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col">
                <div className={`h-44 bg-gradient-to-br ${t.colour} flex flex-col items-center justify-center text-white p-6`}>
                  <h3 className="text-2xl font-bold">{t.name}</h3>
                  <p className="text-white/80 text-sm mt-1">{t.tagline}</p>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <ul className="space-y-3 flex-1">
                    {t.benefits.map((b, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-neutral-muted">
                        <span className="mt-0.5"><IconCheck /></span>{b}
                      </li>
                    ))}
                  </ul>
                  <a href="#contact" className="mt-6 block text-center bg-brand-dark text-white font-semibold py-3 rounded-xl hover:bg-[#164568] transition-all duration-300 hover:scale-105 text-sm shadow-lg focus:ring-4 focus:ring-brand focus:outline-none">
                    Book a Consultation
                  </a>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────── Testimonials ───────────────────────────── */

const testimonials = [
  { name: "Sophie", age: 28, quote: "I was so nervous about getting braces as an adult, but the team at JXB made me feel completely at ease. My Invisalign journey was seamless and the results are incredible!", rating: 5, initials: "S", colour: "bg-brand-light text-brand-dark" },
  { name: "James", age: 16, quote: "The staff are really friendly and my appointments always run on time. My teeth look amazing now — I actually enjoy smiling for photos!", rating: 5, initials: "J", colour: "bg-accent-mint text-brand-dark" },
  { name: "Priya", age: 34, quote: "Dental Monitoring meant I only needed to visit every 10–12 weeks. Perfect for my busy schedule. The finance plan made it affordable too. Couldn't recommend JXB more highly.", rating: 5, initials: "P", colour: "bg-brand/30 text-brand-dark" },
];

function Testimonials() {
  const [idx, setIdx] = useState(0);
  const prev = () => setIdx((i) => (i === 0 ? testimonials.length - 1 : i - 1));
  const next = () => setIdx((i) => (i === testimonials.length - 1 ? 0 : i + 1));

  return (
    <section id="reviews" className="py-24 bg-neutral-bg">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-brand-dark font-semibold text-sm uppercase tracking-wider mb-3">Patient Reviews</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-dark">Real Patients, Real Smiles</h2>
          </div>
        </FadeIn>
        <FadeIn delay={150}>
          <div className="relative max-w-3xl mx-auto">
            <div className="bg-white rounded-3xl p-8 sm:p-12 text-center border border-brand/20 shadow-md">
              <div className={`w-16 h-16 rounded-full ${testimonials[idx].colour} flex items-center justify-center text-2xl font-bold mx-auto mb-6`}>{testimonials[idx].initials}</div>
              <div className="flex justify-center gap-0.5 mb-4">
                {[...Array(testimonials[idx].rating)].map((_, i) => <IconStar key={i} />)}
              </div>
              <blockquote className="text-lg sm:text-xl text-neutral-text leading-relaxed italic">&ldquo;{testimonials[idx].quote}&rdquo;</blockquote>
              <p className="mt-6 font-semibold text-neutral-text">{testimonials[idx].name}, {testimonials[idx].age}</p>
            </div>
            <div className="flex justify-center gap-3 mt-8">
              <button onClick={prev} className="w-10 h-10 rounded-full bg-white border border-brand/30 flex items-center justify-center hover:bg-brand-light hover:border-brand transition-colors" aria-label="Previous review"><IconChevronLeft /></button>
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => setIdx(i)} className={`w-3 h-3 rounded-full transition-colors ${i === idx ? "bg-brand-dark" : "bg-brand/40"}`} aria-label={`Go to review ${i + 1}`} />
              ))}
              <button onClick={next} className="w-10 h-10 rounded-full bg-white border border-brand/30 flex items-center justify-center hover:bg-brand-light hover:border-brand transition-colors" aria-label="Next review"><IconChevronRight /></button>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

/* ───────────────────────────── Technology ───────────────────────────── */

const techFeatures = [
  { title: "Fewer In-Person Visits", desc: "Monitor your progress from home — typically just one visit every 10–12 weeks." },
  { title: "Real-Time Tracking", desc: "Your orthodontist reviews your scans weekly and adjusts your plan as needed." },
  { title: "AI-Powered Precision", desc: "Advanced algorithms detect subtle tooth movements the human eye might miss." },
  { title: "Instant Communication", desc: "Message your orthodontist directly through the app for quick support." },
];

function Technology() {
  return (
    <section id="technology" className="py-24 bg-brand-dark text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <div>
              <p className="text-brand font-semibold text-sm uppercase tracking-wider mb-3">Advanced Technology</p>
              <h2 className="text-3xl sm:text-4xl font-bold leading-tight">
                Dental Monitoring: <span className="text-brand">Your Orthodontist in Your Pocket</span>
              </h2>
              <p className="mt-6 text-brand-light/80 leading-relaxed">
                We use Dental Monitoring — a cutting-edge app that lets you scan your teeth at home using your smartphone. Your specialist reviews your progress remotely, meaning fewer trips to the practice and faster results.
              </p>
              <a href="#contact" className="inline-flex mt-8 bg-white text-brand-dark px-7 py-3.5 rounded-xl font-semibold hover:bg-brand-light transition-all duration-300 hover:scale-105 shadow-lg focus:ring-4 focus:ring-brand focus:outline-none">
                Learn More
              </a>
            </div>
          </FadeIn>
          <div className="grid sm:grid-cols-2 gap-5">
            {techFeatures.map((f, i) => (
              <FadeIn key={i} delay={i * 100}>
                <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
                  <div className="w-10 h-10 bg-brand/20 rounded-lg flex items-center justify-center text-brand mb-4"><IconSmartphone /></div>
                  <h3 className="font-semibold text-white mb-2">{f.title}</h3>
                  <p className="text-brand-light/60 text-sm leading-relaxed">{f.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────── Contact ───────────────────────────── */

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => setSubmitted(true);

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-brand-light via-white to-neutral-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <div>
              <p className="text-brand-dark font-semibold text-sm uppercase tracking-wider mb-3">Get Started</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-brand-dark leading-tight">Book Your Free Consultation Today</h2>
              <p className="mt-4 text-neutral-muted leading-relaxed">
                Start your bespoke treatment plan — no waiting lists, no obligations. Fill in the form and a member of our team will be in touch within 24 hours.
              </p>
              <div className="mt-8 space-y-4 text-neutral-muted">
                <div className="flex items-center gap-3"><span className="text-brand-dark"><IconPhone /></span><span>020 7123 4567</span></div>
                <div className="flex items-center gap-3"><span className="text-green-600"><IconWhatsApp /></span><span>07700 900 123</span></div>
                <div className="flex items-center gap-3"><span className="text-brand-dark"><IconMail /></span><span>hello@jxborthodontics.co.uk</span></div>
                <div className="flex items-center gap-3"><span className="text-brand-dark"><IconPin /></span><span>42 Harley Street, London, W1G 9PR</span></div>
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={150}>
            {submitted ? (
              <div className="bg-white rounded-3xl shadow-xl border border-brand/20 p-10 text-center">
                <div className="w-16 h-16 bg-accent-mint rounded-full flex items-center justify-center mx-auto mb-4 text-brand-dark text-3xl">✓</div>
                <h3 className="text-xl font-bold text-brand-dark mb-2">Thank You!</h3>
                <p className="text-neutral-muted">We&apos;ve received your details. A member of our team will be in touch within 24 hours.</p>
              </div>
            ) : (
              <div className="bg-white rounded-3xl shadow-xl border border-brand/20 p-8 sm:p-10">
                <div className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-neutral-text mb-1.5">Full Name</label>
                    <input id="name" type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-brand/30 focus:outline-none focus:ring-4 focus:ring-brand focus:border-brand-dark transition-all text-neutral-text" placeholder="e.g. Sarah Thompson" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-neutral-text mb-1.5">Email Address</label>
                    <input id="email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-brand/30 focus:outline-none focus:ring-4 focus:ring-brand focus:border-brand-dark transition-all text-neutral-text" placeholder="sarah@example.co.uk" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-neutral-text mb-1.5">Phone Number</label>
                    <input id="phone" type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-brand/30 focus:outline-none focus:ring-4 focus:ring-brand focus:border-brand-dark transition-all text-neutral-text" placeholder="07700 900 123" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-neutral-text mb-1.5">Message <span className="text-neutral-muted">(optional)</span></label>
                    <textarea id="message" rows={3} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-brand/30 focus:outline-none focus:ring-4 focus:ring-brand focus:border-brand-dark transition-all resize-none text-neutral-text" placeholder="Tell us about what you're looking for..." />
                  </div>
                  <button onClick={handleSubmit} className="w-full bg-brand-dark text-white py-4 rounded-xl font-semibold text-lg hover:bg-[#164568] transition-all duration-300 shadow-lg hover:scale-105 focus:ring-4 focus:ring-brand focus:outline-none">
                    Request My Free Consultation
                  </button>
                  <p className="text-xs text-neutral-muted text-center">By submitting, you agree to our privacy policy. We&apos;ll never share your data.</p>
                </div>
              </div>
            )}
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────── Footer ───────────────────────────── */

function Footer() {
  return (
    <footer className="bg-brand-dark text-brand-light/60 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center"><span className="text-white font-bold text-xs">J</span></div>
              <span className="text-lg font-bold text-white">JXB Orthodontics<span className="text-brand">.</span></span>
            </div>
            <p className="text-sm leading-relaxed">Specialist orthodontic care for the whole family. Creating confident smiles across London since 2012.</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#treatments" className="hover:text-brand transition-colors">Treatments</a></li>
              <li><a href="#why-us" className="hover:text-brand transition-colors">Why Choose Us</a></li>
              <li><a href="#reviews" className="hover:text-brand transition-colors">Patient Reviews</a></li>
              <li><a href="#technology" className="hover:text-brand transition-colors">Technology</a></li>
              <li><a href="#contact" className="hover:text-brand transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2"><IconPin /> 42 Harley Street, London, W1G 9PR</li>
              <li className="flex items-center gap-2"><IconPhone /> 020 7123 4567</li>
              <li className="flex items-center gap-2"><IconWhatsApp /> 07700 900 123</li>
              <li className="flex items-center gap-2"><IconMail /> hello@jxborthodontics.co.uk</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Opening Hours</h4>
            <ul className="space-y-2 text-sm">
              <li>Monday – Friday: 8am – 7pm</li>
              <li>Saturday: 9am – 4pm</li>
              <li>Sunday: Closed</li>
            </ul>
            <div className="flex gap-3 mt-6">
              {["Instagram", "Facebook", "X"].map((s) => (
                <a key={s} href="#" aria-label={s} className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center text-xs font-bold text-white hover:bg-brand transition-colors">{s[0]}</a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
          <p>© {new Date().getFullYear()} JXB Orthodontics. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-brand transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-brand transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ───────────────────────────── JSON-LD Schema ───────────────────────────── */

function SchemaMarkup() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        name: "JXB Orthodontics",
        description: "Specialist orthodontic practice offering Invisalign, fixed braces, and ceramic braces in London.",
        url: "https://www.jxborthodontics.co.uk",
        telephone: "+442071234567",
        email: "hello@jxborthodontics.co.uk",
        address: { "@type": "PostalAddress", streetAddress: "42 Harley Street", addressLocality: "London", postalCode: "W1G 9PR", addressCountry: "GB" },
        openingHoursSpecification: [
          { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "08:00", closes: "19:00" },
          { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "09:00", closes: "16:00" },
        ],
        aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "1200" },
      },
      { "@type": "MedicalOrganization", name: "JXB Orthodontics", medicalSpecialty: "Orthodontics" },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

/* ───────────────────────────── Page ───────────────────────────── */

export default function Home() {
  return (
    <>
      <SchemaMarkup />
      <Navbar />
      <main className="scroll-smooth bg-neutral-bg">
        <Hero />
        <WhyUs />
        <Treatments />
        <Testimonials />
        <Technology />
        <Contact />
      </main>
      <Footer />
    </>
  );
}