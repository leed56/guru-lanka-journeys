import { CheckCircle2, Copy, Mail, MessageCircle, Send, Sparkles } from "lucide-react";
import { useState, type FormEvent } from "react";
import { BRAND } from "@/data/site";

export type Field = {
  name: string;
  label: string;
  type?: "text" | "email" | "tel" | "textarea" | "select" | undefined;
  options?: string[] | undefined;
  required?: boolean | undefined;
};

export function EnquiryForm({
  fields,
  cta = "Submit listing",
  confirmation = "Thanks! Your enquiry has been received.",
  hiddenTag,
  recipientEmail = "info.marketing@amtravels.guru",
  formTitle = "Business & Partner Listing Enquiry",
}: {
  fields: Field[];
  cta?: string | undefined;
  confirmation?: string | undefined;
  hiddenTag?: string | undefined;
  recipientEmail?: string | undefined;
  formTitle?: string | undefined;
}) {
  const [done, setDone] = useState(false);
  const [submittedData, setSubmittedData] = useState<Record<string, string>>({});
  const [copied, setCopied] = useState(false);

  const formatEmailBody = (data: Record<string, string>) => {
    const lines = [
      `==================================================`,
      `AM TRAVEL'S GURU LANKA — ${formTitle.toUpperCase()}`,
      `==================================================`,
      ``,
    ];

    if (hiddenTag) {
      lines.push(`Topic / Interest: ${hiddenTag}`);
    }

    fields.forEach((f) => {
      const val = data[f.name];
      if (val) {
        lines.push(`• ${f.label}: ${val}`);
      }
    });

    lines.push(
      ``,
      `--------------------------------------------------`,
      `Submitted via AM Travel's Guru Lanka Website`,
      `Date & Time: ${new Date().toLocaleString()}`,
      `--------------------------------------------------`
    );

    return lines.join("\n");
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const rawData = Object.fromEntries(new FormData(e.currentTarget).entries());
    const data: Record<string, string> = {};
    for (const [k, v] of Object.entries(rawData)) {
      data[k] = typeof v === "string" ? v : String(v);
    }

    setSubmittedData(data);
    setDone(true);

    // Construct Mailto URI
    const subject = encodeURIComponent(
      `[New Listing Enquiry] ${data["business"] || data["company"] || formTitle} — AM Travel's Guru`
    );
    const body = encodeURIComponent(formatEmailBody(data));
    const mailtoUri = `mailto:${recipientEmail}?subject=${subject}&body=${body}`;

    // Attempt to open default mail client
    try {
      window.location.href = mailtoUri;
    } catch {
      // Ignore if blocked, fallback buttons are available on the done screen
    }
  };

  const copyToClipboard = () => {
    const text = formatEmailBody(submittedData);
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    });
  };

  if (done) {
    const emailSubject = encodeURIComponent(
      `[New Listing Enquiry] ${submittedData["business"] || submittedData["company"] || formTitle} — AM Travel's Guru`
    );
    const emailBody = encodeURIComponent(formatEmailBody(submittedData));
    const mailtoHref = `mailto:${recipientEmail}?subject=${emailSubject}&body=${emailBody}`;
    const whatsappHref = `https://wa.me/${BRAND.whatsapp}?text=${emailBody}`;

    return (
      <div className="card-surface animate-in fade-in slide-in-from-bottom-3 rounded-3xl border border-spice-gold/50 bg-card p-6 md:p-8 shadow-md">
        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-2xl bg-ocean-teal/10 text-ocean-teal">
            <CheckCircle2 className="size-6" />
          </div>
          <div>
            <h3 className="type-h3 text-ink">{confirmation}</h3>
            <p className="text-xs text-muted-foreground mt-0.5">
              Sent to <strong className="text-ocean-teal">{recipientEmail}</strong>.
            </p>
          </div>
        </div>

        {/* Formatted Submission Preview */}
        <div className="mt-6 rounded-2xl border border-border/80 bg-sand-cream/50 p-5">
          <div className="flex items-center justify-between border-b border-border/60 pb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-tea-green">
              Formatted Enquiry Summary
            </span>
            <button
              type="button"
              onClick={copyToClipboard}
              className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-card px-2.5 py-1 text-2xs font-semibold text-ink hover:border-ocean-teal transition-all"
            >
              <Copy className="size-3" />
              {copied ? "Copied to Clipboard!" : "Copy Details"}
            </button>
          </div>

          <div className="mt-4 space-y-2 text-xs">
            {fields.map((f) => {
              const val = submittedData[f.name];
              if (!val) return null;
              return (
                <div key={f.name} className="flex flex-col sm:flex-row sm:items-start gap-1">
                  <span className="font-bold text-muted-foreground sm:w-44 shrink-0">
                    {f.label}:
                  </span>
                  <span className="font-semibold text-ink break-words">{val}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={mailtoHref}
            className="btn-gold !px-5 !py-2.5 !text-xs font-bold flex items-center gap-2"
          >
            <Mail className="size-4" /> Send / Reopen in Email App
          </a>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline !border-tea-green !px-5 !py-2.5 !text-xs font-bold text-tea-green hover:!bg-tea-green hover:!text-sand-cream flex items-center gap-2"
          >
            <MessageCircle className="size-4" /> Send via WhatsApp
          </a>
          <button
            type="button"
            onClick={() => setDone(false)}
            className="text-xs text-muted-foreground hover:text-ocean-teal font-semibold px-3 py-2"
          >
            Submit Another Listing
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-5">
      {hiddenTag ? (
        <div className="rounded-xl bg-ocean-teal/10 px-4 py-2 text-xs font-semibold text-ocean-teal">
          Category: {hiddenTag}
        </div>
      ) : null}

      <div className="grid gap-4 sm:grid-cols-2">
        {fields.map((f) => {
          const isFullWidth = f.type === "textarea" || f.name === "description" || f.name === "proposal" || f.name === "message";
          return (
            <label
              key={f.name}
              className={`grid gap-1.5 ${isFullWidth ? "sm:col-span-2" : ""}`}
            >
              <span className="text-xs font-bold text-ink">
                {f.label} {f.required && <span className="text-destructive">*</span>}
              </span>
              {f.type === "textarea" ? (
                <textarea
                  name={f.name}
                  required={f.required}
                  rows={4}
                  placeholder={`Enter ${f.label.toLowerCase()}...`}
                  className="rounded-2xl border border-input bg-background px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-spice-gold"
                />
              ) : f.type === "select" ? (
                <select
                  name={f.name}
                  required={f.required}
                  className="rounded-2xl border border-input bg-background px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-spice-gold"
                >
                  <option value="">Select category…</option>
                  {f.options?.map((o) => (
                    <option key={o} value={o}>
                      {o}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  name={f.name}
                  type={f.type ?? "text"}
                  required={f.required}
                  placeholder={`Enter ${f.label.toLowerCase()}...`}
                  className="rounded-2xl border border-input bg-background px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-spice-gold"
                />
              )}
            </label>
          );
        })}
      </div>

      <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <button
          type="submit"
          className="btn-gold !px-7 !py-3 font-bold text-sm shadow-sm flex items-center justify-center gap-2"
        >
          <Send className="size-4" />
          {cta}
        </button>
        <span className="text-2xs text-muted-foreground font-medium">
          Directly dispatched to: <span className="font-semibold text-ocean-teal">{recipientEmail}</span>
        </span>
      </div>
    </form>
  );
}
