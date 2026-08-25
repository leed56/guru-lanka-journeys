import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";

import logo from "@/assets/am-logo.png";
import { BRAND, NAV } from "@/data/site";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/90 backdrop-blur">
      <div className="section-x grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 py-3 md:flex md:justify-between">
        <Link to="/" className="flex min-w-0 items-center gap-3" onClick={() => setOpen(false)}>
          <img
            src={logo}
            alt={`${BRAND.name} logo`}
            className="h-16 w-auto max-w-[220px] shrink-0 object-contain drop-shadow-sm md:h-20"
          />
          <span className="sr-only">{BRAND.name}</span>
        </Link>


        <nav className="hidden items-center gap-1 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="rounded-md px-3 py-2 text-sm text-ink-soft transition-colors hover:text-ocean-teal"
              activeProps={{ className: "text-ocean-teal font-medium" }}
            >
              {item.label}
            </Link>
          ))}
          <Link to="/journey" className="btn-gold ml-2 !py-2 !text-sm">
            Start My Journey
          </Link>
        </nav>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="shrink-0 rounded-md border border-border p-2 text-ink md:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open ? (
        <nav className="border-t border-border bg-background px-5 pb-5 pt-2 md:hidden">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className="block border-b border-border/60 py-3 text-ink"
              activeProps={{ className: "text-ocean-teal font-medium" }}
            >
              {item.label}
            </Link>
          ))}
          <Link to="/journey" onClick={() => setOpen(false)} className="btn-gold mt-4 w-full">
            Start My Journey
          </Link>
        </nav>
      ) : null}
    </header>
  );
}
