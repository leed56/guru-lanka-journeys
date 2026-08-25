import { Link } from "@tanstack/react-router";
import { MessageCircle, Phone, Send } from "lucide-react";

import { BRAND } from "@/data/site";

/** Slim mobile-only bar for content pages (trips, packages, destinations). */
export function StickyContactBar({ tag }: { tag?: string }) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t border-border bg-background/95 backdrop-blur md:hidden">
      <a href={`tel:${BRAND.phone.replace(/\s/g, "")}`} className="flex items-center justify-center gap-2 py-3 text-sm text-ocean-teal">
        <Phone className="size-4" /> Call
      </a>
      <a href={`https://wa.me/${BRAND.whatsapp}`} className="flex items-center justify-center gap-2 border-x border-border py-3 text-sm text-tea-green">
        <MessageCircle className="size-4" /> WhatsApp
      </a>
      <Link
        to="/contact"
        search={tag ? { tag } : undefined}
        className="flex items-center justify-center gap-2 bg-spice-gold py-3 text-sm font-medium text-ink"
      >
        <Send className="size-4" /> Enquire
      </Link>
    </div>
  );
}
