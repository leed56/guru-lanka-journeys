import { CheckCircle2 } from "lucide-react";
import { useState, type FormEvent } from "react";

export type Field = {
  name: string;
  label: string;
  type?: "text" | "email" | "tel" | "textarea" | "select" | undefined;
  options?: string[] | undefined;
  required?: boolean | undefined;
};

/**
 * Stage 1 form: posts nowhere yet. Swap `submitTo` for a real endpoint
 * (email service / webhook) when the backend lands.
 */
const SUBMIT_ENDPOINT_PLACEHOLDER = "https://example.com/webhook-placeholder";

export function EnquiryForm({
  fields,
  cta = "Send",
  confirmation = "Thanks, our team will reach out.",
  hiddenTag,
}: {
  fields: Field[];
  cta?: string | undefined;
  confirmation?: string | undefined;
  hiddenTag?: string | undefined;
}) {
  const [done, setDone] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    // Placeholder submit handler — replace with a real POST to SUBMIT_ENDPOINT_PLACEHOLDER.
    console.info("Enquiry submitted", { endpoint: SUBMIT_ENDPOINT_PLACEHOLDER, tag: hiddenTag, data });
    setDone(true);
  };

  if (done) {
    return (
      <div className="card-surface flex items-start gap-4 p-8">
        <CheckCircle2 className="size-6 shrink-0 text-tea-green" />
        <div>
          <h3 className="type-h3">{confirmation}</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            We usually reply within one working day.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="card-surface grid gap-5 p-6 md:p-8">
      {hiddenTag ? (
        <p className="type-caption text-tea-green">Enquiry about: {hiddenTag}</p>
      ) : null}
      {fields.map((f) => (
        <label key={f.name} className="grid gap-2">
          <span className="text-sm font-medium">{f.label}</span>
          {f.type === "textarea" ? (
            <textarea
              name={f.name}
              required={f.required}
              rows={4}
              className="rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-spice-gold"
            />
          ) : f.type === "select" ? (
            <select
              name={f.name}
              required={f.required}
              className="rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-spice-gold"
            >
              <option value="">Select…</option>
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
              className="rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-spice-gold"
            />
          )}
        </label>
      ))}
      <button type="submit" className="btn-gold justify-self-start">
        {cta}
      </button>
    </form>
  );
}
