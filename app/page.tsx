"use client";

import { useState, useEffect, useRef } from "react";

/* ───────────────────────────── Icons (inline SVGs) ───────────────────────────── */

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

function IconCheck() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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

/* ───────────────────────────── Animate-on-scroll hook ───────────────────────────── */

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

/* ───────────────────────────── Navbar ───────────────────────────── */

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#treatments", label: "Treatments" },
    { href: "#why-us", label: "Why Us" },
    { href: "#reviews", label: "Reviews" },
    { href: "#technology", label: "Technology" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="w-9 h-9 bg-gradient-to-br from-violet-500 to-indigo-600 rounded-xl flex items-center justify-center">
            <span className="text-white font-bold text-sm">C</span>
          </div>
          <span className="text-xl font-bold text-slate-900 tracking-tight">
            Callum's Ortho<span className="text-violet-600">.</span>
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-violet-600 transition-colors">
              {l.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden md:inline-flex bg-violet-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-violet-700 transition-colors shadow-lg shadow-violet-200"
        >
          Book Free Consultation
        </a>

        {/* Mobile toggle */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className={`w-6 h-0.5 bg-slate-700 transition-transform ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`w-6 h-0.5 bg-slate-700 transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`w-6 h-0.5 bg-slate-700 transition-transform ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-slate-100 px-6 py-6 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-slate-700 font-medium hover:text-violet-600"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="mt-2 bg-violet-600 text-white text-center px-5 py-3 rounded-full font-semibold"
            onClick={() => setOpen(false)}
          >
            Book Free Consultation
          </a>
        </div>
      )}
    </nav>
  );
}

/* ───────────────────────────── Hero ───────────────────────────── */

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-50 via-violet-50/40 to-indigo-50/30">
      {/* Decorative blobs */}
      <div className="absolute top-20 -left-32 w-96 h-96 bg-violet-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-0 w-80 h-80 bg-indigo-200/30 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-20 grid lg:grid-cols-2 gap-12 items-center">
        {/* Copy */}
        <div>
          <FadeIn>
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur rounded-full px-4 py-1.5 text-sm font-medium text-violet-700 border border-violet-100 mb-6 shadow-sm">
              <span className="flex gap-0.5">{[...Array(5)].map((_, i) => <IconStar key={i} />)}</span>
              <span>Rated 4.9/5 by 1,200+ patients</span>
            </div>
          </FadeIn>

          <FadeIn delay={100}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight tracking-tight">
              Your Smile,{" "}
              <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
                Perfect
              </span>
            </h1>
          </FadeIn>

          <FadeIn delay={200}>
            <p className="mt-6 text-lg text-slate-600 leading-relaxed max-w-lg">
              Specialist orthodontists creating bespoke treatment plans for children, teens, and adults.
              No waiting lists. Flexible finance from £49/month. Real-time progress with Dental Monitoring.
            </p>
          </FadeIn>

          <FadeIn delay={300}>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="bg-violet-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-violet-700 transition-all shadow-xl shadow-violet-200 hover:shadow-violet-300 hover:-translate-y-0.5"
              >
                Book Your Free Consultation
              </a>
              <a
                href="#treatments"
                className="flex items-center gap-2 px-6 py-4 rounded-full font-semibold text-slate-700 hover:text-violet-600 transition-colors"
              >
                View Treatments →
              </a>
            </div>
          </FadeIn>

          <FadeIn delay={400}>
            <div className="mt-10 flex items-center gap-6 text-sm text-slate-500">
              <span className="flex items-center gap-1.5">
                <IconShield />
                GDC Registered
              </span>
              <span className="flex items-center gap-1.5">
                <IconShield />
                BOS Member
              </span>
              <span className="flex items-center gap-1.5">
                <IconShield />
                CQC Rated
              </span>
            </div>
          </FadeIn>
        </div>

        {/* Hero visual placeholder */}
        <FadeIn delay={200} className="relative hidden lg:block">
          <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden bg-gradient-to-br from-violet-100 to-indigo-100 shadow-2xl">
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
              <div className="w-32 h-32 bg-violet-200 rounded-full mb-6 flex items-center justify-center">
                <span className="text-5xl">😊</span>
              </div>
              <p className="text-slate-500 text-sm font-medium">
                Replace with hero image of smiling patients
              </p>
              <p className="text-slate-400 text-xs mt-1">Recommended: 800×1000px</p>
            </div>
          </div>
          {/* Floating card */}
          <div className="absolute -left-6 bottom-12 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3 border border-slate-100">
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold text-sm">
              ✓
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-900">2,500+ Smiles Created</p>
              <p className="text-xs text-slate-500">Across all age groups</p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

/* ───────────────────────────── Why Choose Us ───────────────────────────── */

const usps = [
  {
    icon: <IconShield />,
    title: "Specialist Orthodontists",
    desc: "Our team are GDC-registered specialists with years of advanced training beyond general dentistry. You're in expert hands.",
  },
  {
    icon: <IconCurrency />,
    title: "Flexible Finance",
    desc: "Spread the cost with interest-free finance from just £49 per month. We believe everyone deserves a confident smile.",
  },
  {
    icon: <IconClock />,
    title: "Convenient Appointments",
    desc: "Early morning, evening, and weekend slots available. We work around your schedule, not the other way round.",
  },
  {
    icon: <IconHeart />,
    title: "Family-Friendly Practice",
    desc: "From age 7 to 70+, we treat the whole family in a warm, welcoming environment designed to put you at ease.",
  },
];

function WhyUs() {
  return (
    <section id="why-us" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-violet-600 font-semibold text-sm uppercase tracking-wider mb-3">Why Choose Callum's Ortho</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Orthodontic Care Built Around You
            </h2>
          </div>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {usps.map((item, i) => (
            <FadeIn key={i} delay={i * 100}>
              <div className="group bg-slate-50 hover:bg-violet-50 rounded-2xl p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border border-transparent hover:border-violet-100">
                <div className="w-14 h-14 bg-violet-100 group-hover:bg-violet-200 rounded-xl flex items-center justify-center text-violet-600 transition-colors mb-5">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
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
  {
    name: "Invisalign",
    tagline: "Nearly Invisible Aligners",
    colour: "from-violet-500 to-indigo-500",
    benefits: [
      "Virtually invisible — most people won't notice",
      "Removable for eating, brushing, and flossing",
      "Fewer appointments with Dental Monitoring",
    ],
  },
  {
    name: "Fixed Metal Braces",
    tagline: "Tried, Tested & Reliable",
    colour: "from-slate-600 to-slate-800",
    benefits: [
      "Highly effective for complex cases",
      "Suitable for children, teens, and adults",
      "Modern brackets are smaller and more discreet",
    ],
  },
  {
    name: "Clear Ceramic Braces",
    tagline: "Discreet & Effective",
    colour: "from-amber-400 to-orange-500",
    benefits: [
      "Tooth-coloured brackets blend with your smile",
      "Ideal for patients wanting a subtle look",
      "Same precision as traditional metal braces",
    ],
  },
];

function Treatments() {
  return (
    <section id="treatments" className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-violet-600 font-semibold text-sm uppercase tracking-wider mb-3">Our Treatments</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              A Treatment to Suit Every Smile
            </h2>
            <p className="mt-4 text-slate-600">
              Whether you prefer clear aligners or fixed braces, we'll recommend the best option for your lifestyle and goals.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-8">
          {treatments.map((t, i) => (
            <FadeIn key={i} delay={i * 120}>
              <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col">
                {/* Colour bar header */}
                <div className={`h-44 bg-gradient-to-br ${t.colour} flex flex-col items-center justify-center text-white p-6`}>
                  <h3 className="text-2xl font-bold">{t.name}</h3>
                  <p className="text-white/80 text-sm mt-1">{t.tagline}</p>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <ul className="space-y-3 flex-1">
                    {t.benefits.map((b, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-slate-600">
                        <span className="mt-0.5"><IconCheck /></span>
                        {b}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#contact"
                    className="mt-6 block text-center bg-violet-50 text-violet-700 font-semibold py-3 rounded-xl hover:bg-violet-100 transition-colors text-sm"
                  >
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
  {
    name: "Sophie",
    age: 28,
    quote: "I was so nervous about getting braces as an adult, but the team at Align made me feel completely at ease. My Invisalign journey was seamless and the results are incredible!",
    rating: 5,
    initials: "S",
    colour: "bg-pink-100 text-pink-600",
  },
  {
    name: "James",
    age: 16,
    quote: "The staff are really friendly and my appointments always run on time. My teeth look amazing now — I actually enjoy smiling for photos!",
    rating: 5,
    initials: "J",
    colour: "bg-blue-100 text-blue-600",
  },
  {
    name: "Priya",
    age: 34,
    quote: "Dental Monitoring meant I only needed to visit every 10–12 weeks. Perfect for my busy schedule. The finance plan made it affordable too. Couldn't recommend Align more highly.",
    rating: 5,
    initials: "P",
    colour: "bg-amber-100 text-amber-600",
  },
];

function Testimonials() {
  const [idx, setIdx] = useState(0);
  const prev = () => setIdx((i) => (i === 0 ? testimonials.length - 1 : i - 1));
  const next = () => setIdx((i) => (i === testimonials.length - 1 ? 0 : i + 1));

  return (
    <section id="reviews" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-violet-600 font-semibold text-sm uppercase tracking-wider mb-3">Patient Reviews</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Real Patients, Real Smiles
            </h2>
          </div>
        </FadeIn>

        <FadeIn delay={150}>
          <div className="relative max-w-3xl mx-auto">
            <div className="bg-slate-50 rounded-3xl p-8 sm:p-12 text-center border border-slate-100">
              <div className={`w-16 h-16 rounded-full ${testimonials[idx].colour} flex items-center justify-center text-2xl font-bold mx-auto mb-6`}>
                {testimonials[idx].initials}
              </div>
              <div className="flex justify-center gap-0.5 mb-4">
                {[...Array(testimonials[idx].rating)].map((_, i) => (
                  <IconStar key={i} />
                ))}
              </div>
              <blockquote className="text-lg sm:text-xl text-slate-700 leading-relaxed italic">
                &ldquo;{testimonials[idx].quote}&rdquo;
              </blockquote>
              <p className="mt-6 font-semibold text-slate-900">
                {testimonials[idx].name}, {testimonials[idx].age}
              </p>
            </div>

            {/* Controls */}
            <div className="flex justify-center gap-3 mt-8">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center hover:bg-violet-50 hover:border-violet-200 transition-colors"
                aria-label="Previous review"
              >
                <IconChevronLeft />
              </button>
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIdx(i)}
                  className={`w-3 h-3 rounded-full transition-colors ${i === idx ? "bg-violet-600" : "bg-slate-300"}`}
                  aria-label={`Go to review ${i + 1}`}
                />
              ))}
              <button
                onClick={next}
                className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center hover:bg-violet-50 hover:border-violet-200 transition-colors"
                aria-label="Next review"
              >
                <IconChevronRight />
              </button>
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
    <section id="technology" className="py-24 bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <div>
              <p className="text-violet-400 font-semibold text-sm uppercase tracking-wider mb-3">Advanced Technology</p>
              <h2 className="text-3xl sm:text-4xl font-bold leading-tight">
                Dental Monitoring:{" "}
                <span className="text-violet-400">Your Orthodontist in Your Pocket</span>
              </h2>
              <p className="mt-6 text-slate-300 leading-relaxed">
                We use Dental Monitoring — a cutting-edge app that lets you scan your teeth at home using your smartphone.
                Your specialist reviews your progress remotely, meaning fewer trips to the practice and faster results.
              </p>
              <a
                href="#contact"
                className="inline-flex mt-8 bg-violet-600 text-white px-7 py-3.5 rounded-full font-semibold hover:bg-violet-500 transition-colors shadow-lg"
              >
                Learn More
              </a>
            </div>
          </FadeIn>

          <div className="grid sm:grid-cols-2 gap-5">
            {techFeatures.map((f, i) => (
              <FadeIn key={i} delay={i * 100}>
                <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
                  <div className="w-10 h-10 bg-violet-500/20 rounded-lg flex items-center justify-center text-violet-400 mb-4">
                    <IconSmartphone />
                  </div>
                  <h3 className="font-semibold text-white mb-2">{f.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{f.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────── CTA / Contact Form ───────────────────────────── */

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-violet-50 via-white to-indigo-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <div>
              <p className="text-violet-600 font-semibold text-sm uppercase tracking-wider mb-3">Get Started</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">
                Book Your Free Consultation Today
              </h2>
              <p className="mt-4 text-slate-600 leading-relaxed">
                Start your bespoke treatment plan — no waiting lists, no obligations. Fill in the form and
                a member of our team will be in touch within 24 hours.
              </p>

              <div className="mt-8 space-y-4 text-slate-600">
                <div className="flex items-center gap-3">
                  <span className="text-violet-600"><IconPhone /></span>
                  <span>020 7123 4567</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-violet-600"><IconMail /></span>
                  <span>hello@alignortho.co.uk</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-violet-600"><IconPin /></span>
                  <span>42 Harley Street, London, W1G 9PR</span>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={150}>
            {submitted ? (
              <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-10 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600 text-3xl">
                  ✓
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Thank You!</h3>
                <p className="text-slate-600">We&apos;ve received your details. A member of our team will be in touch within 24 hours.</p>
              </div>
            ) : (
              <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-8 sm:p-10">
                <div className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1.5">
                      Full Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all text-slate-900"
                      placeholder="e.g. Sarah Thompson"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1.5">
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all text-slate-900"
                      placeholder="sarah@example.co.uk"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1.5">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all text-slate-900"
                      placeholder="07700 900 123"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1.5">
                      Message <span className="text-slate-400">(optional)</span>
                    </label>
                    <textarea
                      id="message"
                      rows={3}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all resize-none text-slate-900"
                      placeholder="Tell us about what you're looking for..."
                    />
                  </div>
                  <button
                    onClick={handleSubmit}
                    className="w-full bg-violet-600 text-white py-4 rounded-xl font-semibold text-lg hover:bg-violet-700 transition-all shadow-lg shadow-violet-200 hover:shadow-violet-300"
                  >
                    Request My Free Consultation
                  </button>
                  <p className="text-xs text-slate-400 text-center">
                    By submitting, you agree to our privacy policy. We&apos;ll never share your data.
                  </p>
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
    <footer className="bg-slate-900 text-slate-400 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-violet-500 to-indigo-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xs">C</span>
              </div>
              <span className="text-lg font-bold text-white">
                Callum's Ortho<span className="text-violet-400">.</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed">
              Specialist orthodontic care for the whole family. Creating confident smiles across London since 2012.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#treatments" className="hover:text-violet-400 transition-colors">Treatments</a></li>
              <li><a href="#why-us" className="hover:text-violet-400 transition-colors">Why Choose Us</a></li>
              <li><a href="#reviews" className="hover:text-violet-400 transition-colors">Patient Reviews</a></li>
              <li><a href="#technology" className="hover:text-violet-400 transition-colors">Technology</a></li>
              <li><a href="#contact" className="hover:text-violet-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2"><IconPin /> 42 Harley Street, London, W1G 9PR</li>
              <li className="flex items-center gap-2"><IconPhone /> 020 7123 4567</li>
              <li className="flex items-center gap-2"><IconMail /> hello@alignortho.co.uk</li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-white font-semibold mb-4">Opening Hours</h4>
            <ul className="space-y-2 text-sm">
              <li>Monday – Friday: 8am – 7pm</li>
              <li>Saturday: 9am – 4pm</li>
              <li>Sunday: Closed</li>
            </ul>
            <div className="flex gap-3 mt-6">
              {["Instagram", "Facebook", "X"].map((s) => (
                <a
                  key={s}
                  href="#"
                  aria-label={s}
                  className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center text-xs font-bold text-white hover:bg-violet-600 transition-colors"
                >
                  {s[0]}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
          <p>© {new Date().getFullYear()} Callum's Ortho. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-violet-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-violet-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-violet-400 transition-colors">Cookie Policy</a>
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
        name: "Callum's Ortho",
        description: "Specialist orthodontic practice offering Invisalign, fixed braces, and ceramic braces in London.",
        url: "https://www.alignortho.co.uk",
        telephone: "+442071234567",
        email: "hello@alignortho.co.uk",
        address: {
          "@type": "PostalAddress",
          streetAddress: "42 Harley Street",
          addressLocality: "London",
          postalCode: "W1G 9PR",
          addressCountry: "GB",
        },
        openingHoursSpecification: [
          { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "08:00", closes: "19:00" },
          { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "09:00", closes: "16:00" },
        ],
        aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "1200" },
      },
      {
        "@type": "MedicalOrganization",
        name: "Callum's Ortho",
        medicalSpecialty: "Orthodontics",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/* ───────────────────────────── Page ───────────────────────────── */

export default function Home() {
  return (
    <>
      <SchemaMarkup />
      <Navbar />
      <main className="scroll-smooth">
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