import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, MessageCircle } from "lucide-react";

import logo from "@/assets/am-logo.jpg.asset.json";
import { BRAND, NAV } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-ocean-teal text-sand-cream">
      <div className="section-x grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr] md:py-20">
        <div>
          <div className="inline-block rounded-lg bg-background p-3">
            <img src={logo.url} alt={`${BRAND.name} logo`} className="h-12 w-auto" />
          </div>
          <p className="type-h3 mt-5">{BRAND.tagline}</p>
          <p className="mt-2 max-w-sm text-sm opacity-80">{BRAND.brandLine}</p>
          <p className="mt-4 max-w-sm text-sm opacity-80">{BRAND.positioning}</p>
        </div>

        <div>
          <p className="type-caption opacity-70">Quick links</p>
          <ul className="mt-4 space-y-2">
            {NAV.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="text-sm opacity-90 transition-opacity hover:opacity-100 hover:underline">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/style-guide" className="text-sm opacity-60 hover:underline">
                Style guide (dev)
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="type-caption opacity-70">Talk to us</p>
          <ul className="mt-4 space-y-2 text-sm opacity-90">
            <li>{BRAND.phone}</li>
            <li>{BRAND.email}</li>
          </ul>
          <div className="mt-5 flex gap-3">
            <a href="https://facebook.com" aria-label="Facebook" className="rounded-full border border-sand-cream/30 p-2.5 transition-colors hover:border-spice-gold hover:text-spice-gold">
              <Facebook className="size-4" />
            </a>
            <a href="https://instagram.com" aria-label="Instagram" className="rounded-full border border-sand-cream/30 p-2.5 transition-colors hover:border-spice-gold hover:text-spice-gold">
              <Instagram className="size-4" />
            </a>
            <a href={`https://wa.me/${BRAND.whatsapp}`} aria-label="WhatsApp" className="rounded-full border border-sand-cream/30 p-2.5 transition-colors hover:border-spice-gold hover:text-spice-gold">
              <MessageCircle className="size-4" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-sand-cream/15">
        <p className="section-x py-5 text-xs opacity-70">
          © {new Date().getFullYear()} {BRAND.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
