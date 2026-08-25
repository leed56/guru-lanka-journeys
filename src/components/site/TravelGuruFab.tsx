import { Link } from "@tanstack/react-router";
import { HelpCircle, MessageCircle, Phone, Sparkles, X } from "lucide-react";
import { useState } from "react";

import { BRAND } from "@/data/site";

export function TravelGuruFab() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-20 right-4 z-50 flex flex-col items-end gap-3 md:bottom-6 md:right-6">
      {open ? (
        <div className="card-surface w-56 border border-border p-2">
          <a href={`tel:${BRAND.phone.replace(/\s/g, "")}`} className="flex items-center gap-3 rounded-md px-3 py-2.5 text-sm transition-colors hover:bg-muted">
            <Phone className="size-4 text-ocean-teal" /> Call us
          </a>
          <a href={`https://wa.me/${BRAND.whatsapp}`} className="flex items-center gap-3 rounded-md px-3 py-2.5 text-sm transition-colors hover:bg-muted">
            <MessageCircle className="size-4 text-tea-green" /> WhatsApp
          </a>
          <Link to="/contact" onClick={() => setOpen(false)} className="flex items-center gap-3 rounded-md px-3 py-2.5 text-sm transition-colors hover:bg-muted">
            <HelpCircle className="size-4 text-spice-gold" /> Ask a Question
          </Link>
        </div>
      ) : null}

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="btn-gold soft-pulse rounded-full !px-5 shadow-lg"
      >
        {open ? <X className="size-4" /> : <Sparkles className="size-4" />}
        <span className="text-sm font-medium">Talk to a Travel Guru</span>
      </button>
    </div>
  );
}
