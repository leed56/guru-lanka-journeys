import { Link } from "@tanstack/react-router";
import { Facebook, Mail, MapPin, MessageCircle, Phone } from "lucide-react";

import logo from "@/assets/am-logo.png";
import { BRAND, NAV } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-ocean-teal text-sand-cream">
      <div className="section-x grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1.2fr] md:py-20">
        <div>
          <Link to="/" className="inline-block">
            <img
              src={logo}
              alt={`${BRAND.name} logo`}
              className="h-20 w-auto max-w-[260px] shrink-0 object-contain drop-shadow md:h-24"
            />
          </Link>
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
          </ul>
        </div>

        <div>
          <p className="type-caption opacity-70">Contact Details</p>
          <ul className="mt-4 space-y-2.5 text-sm opacity-90">
            <li className="flex items-start gap-2">
              <MapPin className="size-4 shrink-0 mt-0.5 text-spice-gold" />
              <span>{BRAND.address}</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="size-4 shrink-0 text-spice-gold" />
              <span>{BRAND.phone} / {BRAND.phoneIntl}</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="size-4 shrink-0 text-spice-gold" />
              <span>{BRAND.email}</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="size-4 shrink-0 text-spice-gold" />
              <span>{BRAND.marketingEmail}</span>
            </li>
          </ul>
          <div className="mt-5 flex gap-3">
            <a
              href={BRAND.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="rounded-full border border-sand-cream/30 p-2.5 transition-colors hover:border-spice-gold hover:text-spice-gold"
            >
              <Facebook className="size-4" />
            </a>
            <a
              href={`https://wa.me/${BRAND.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="rounded-full border border-sand-cream/30 p-2.5 transition-colors hover:border-spice-gold hover:text-spice-gold"
            >
              <MessageCircle className="size-4" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-sand-cream/15">
        <p className="section-x py-5 text-xs opacity-70">
          © {new Date().getFullYear()} {BRAND.name}. All rights reserved. • {BRAND.address}
        </p>
      </div>
    </footer>
  );
}
