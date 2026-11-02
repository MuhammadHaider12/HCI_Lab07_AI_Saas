import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowUpRight,
  ChevronDown,
  Menu,
  MoveUpRight,
  Play,
  Sparkles,
  X,
  Zap
} from "lucide-react";
import "./styles.css";

const features = [
  {
    number: "01",
    title: "AI-powered workflows",
    text: "Automate repetitive work and focus on what matters most.",
    icon: Zap,
    tone: "bg-[#eeeaff]"
  },
  {
    number: "02",
    title: "AI-powered workflows",
    text: "Automate repetitive work and focus on what matters most.",
    icon: Sparkles,
    tone: "bg-[#eeeaff]"
  },
  {
    number: "03",
    title: "AI-powered workflows",
    text: "Automate repetitive work and focus on what matters most.",
    icon: MoveUpRight,
    tone: "bg-[#eeeaff]"
  }
];

function Logo() {
  return (
    <a href="#top" className="flex items-center gap-1.5 font-display text-sm font-bold tracking-tight" aria-label="Nova home">
      <span className="text-lg text-[#5540d8]">✦</span>
      nova.ai
    </a>
  );
}

function Button({ children, variant = "dark", href = "#start", onClick }) {
  return (
    <a href={href} onClick={onClick} className={`button ${variant === "light" ? "button-light" : variant === "lime" ? "button-lime" : "button-dark"}`}>
      {children}
      <ArrowUpRight size={17} strokeWidth={2.2} />
    </a>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);
  const links = ["Product", "Solutions", "Resources", "Pricing"];
  return (
    <header className="relative z-20 bg-white">
      <div className="site-container flex h-16 items-center justify-between">
        <Logo />
        <nav className="hidden items-center gap-7 text-[11px] font-medium text-ink/60 md:flex" aria-label="Primary navigation">
          {links.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} className="nav-link">
              {link} {link !== "Pricing" && <ChevronDown size={14} />}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-5 md:flex">
          <a href="#login" className="rounded-full border border-ink/10 px-4 py-2 text-[11px] font-semibold transition hover:border-ink/30">Log in</a>
          <Button>Start free</Button>
        </div>
        <button className="rounded-full border border-ink/15 p-2 text-ink md:hidden" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-navigation">
          {open ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>
      {open && (
        <div id="mobile-navigation" className="mx-5 rounded-2xl border border-ink/10 bg-white p-5 shadow-2xl md:hidden">
          <nav className="grid gap-4 text-sm text-ink/75" aria-label="Mobile navigation">
            {links.map((link) => <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setOpen(false)}>{link}</a>)}
            <a href="#login" onClick={() => setOpen(false)}>Log in</a>
            <Button>Get started</Button>
          </nav>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="hero-section overflow-hidden">
      <div className="site-container relative z-10 grid min-h-[430px] items-center gap-10 py-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
        <div className="max-w-2xl">
          <p className="eyebrow"><span className="rounded-full bg-[#ddd6ff] px-2 py-1 text-[8px] text-[#5540d8]" /> AI + WORKSPACE · PUBLIC BETA</p>
          <h1 className="mt-5 max-w-lg font-display text-4xl font-semibold leading-[1.05] tracking-[-.045em] text-ink sm:text-5xl">
            Your team’s ideas,<br />amplified by AI.
          </h1>
          <p className="mt-4 max-w-md text-xs leading-5 text-ink/55 sm:text-sm">
            Turn scattered workflows into meaningful progress. Nova brings your team, tools, and thinking together.
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-2">
            <Button>Start building for free</Button>
            <a href="#demo" className="group flex items-center gap-2 rounded-full border border-ink/10 bg-white px-4 py-3 text-[11px] font-semibold">
              Watch product tour <Play size={12} fill="currentColor" />
            </a>
          </div>
          <p className="mt-5 text-[9px] text-ink/40">Trusted by 12,000+ teams · No credit card required</p>
        </div>
        <div className="relative mt-14 lg:mt-0">
          <div className="orb orb-one" />
          <div className="orb orb-two" />
          <div className="dashboard-card">
            <div className="flex items-center justify-between border-b border-ink/10 pb-4">
              <div className="text-xs font-bold">Workspace overview</div>
              <span className="text-[10px] text-ink/40">TODAY</span>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-2">
              {[["Projects", "24", "+12%"], ["Tasks done", "1,284", "+8.4%"], ["Weekly", "92%", "+6.2%"]].map(([label, value, delta]) => <div key={label} className="rounded-lg bg-[#f0effb] p-3"><p className="text-[9px] text-ink/45">{label}</p><p className="mt-2 text-lg font-bold">{value}</p><p className="text-[8px] text-emerald-500">{delta}</p></div>)}
            </div>
            <div className="mt-3 rounded-lg bg-[#fafafa] p-3"><div className="flex items-center justify-between"><span className="text-[10px] font-semibold">Team activity</span><span className="text-[9px] text-ink/45">This week</span></div><div className="mt-3 flex h-12 items-end gap-2">{[40, 65, 52, 83, 68, 100, 79].map((h, i) => <span key={i} className={`chart-bar ${i === 5 ? "bg-[#5540d8]" : "bg-[#b9adf5]"}`} style={{ height: `${h}%` }} />)}</div></div>
          </div>
        </div>
      </div>
      <div className="hero-grid" />
    </section>
  );
}

function Features() {
  return (
    <section id="product" className="bg-paper py-24 text-ink sm:py-32">
      <div className="site-container">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div><p className="eyebrow-dark">Why Nova</p><h2 className="mt-5 max-w-xl font-display text-4xl font-medium leading-tight tracking-[-.04em] sm:text-6xl">Everything you need to do<br /><span className="text-ink/40">your best work.</span></h2></div>
          <p className="max-w-xs text-sm leading-6 text-ink/55">The tools you need to do your most thoughtful, high-impact work.</p>
        </div>
        <div className="mt-16 grid gap-4 md:grid-cols-3">
          {features.map(({ number, title, text, icon: Icon, tone }) => (
            <article key={number} className="feature-card group">
              <div className="flex items-start justify-between"><span className="text-xs font-bold text-ink/35">{number}</span><span className={`grid h-12 w-12 place-items-center rounded-full ${tone} transition group-hover:rotate-12`}><Icon size={21} /></span></div>
              <div className="mt-20"><h3 className="font-display text-2xl font-semibold">{title}</h3><p className="mt-3 text-sm leading-6 text-ink/55">{text}</p></div>
              <a href="#learn" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold">Learn more <ArrowUpRight size={16} /></a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Cta() {
  return <section id="start" className="cta-section py-16 text-white sm:py-20"><div className="site-container flex flex-col items-center justify-between gap-7 text-center"><h2 className="max-w-2xl font-display text-3xl font-semibold leading-tight sm:text-4xl">Ready to make work feel effortless?</h2><p className="text-sm text-white/65">Join thousands of teams building better things with Nova.</p><Button variant="lime">Get started — it’s free</Button></div></section>;
}

function Footer() {
  return <footer className="bg-white py-7 text-ink"><div className="site-container flex flex-col justify-between gap-6 text-xs sm:flex-row sm:items-center"><Logo /><div className="flex flex-wrap gap-5 text-ink/45"><a href="#privacy" className="hover:text-ink">Privacy</a><a href="#terms" className="hover:text-ink">Terms</a><a href="#contact" className="hover:text-ink">Contact</a><span>© 2024 Nova AI. Made for teams who think big.</span></div></div></footer>;
}

function App() {
  return <><Navbar /><main><Hero /><Features /><Cta /></main><Footer /></>;
}

createRoot(document.getElementById("root")).render(<App />);
