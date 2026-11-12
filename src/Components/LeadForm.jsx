import { useState } from "react";
import Icon from "./Icon";
import { site } from "../config/site";
import { trackEvent } from "./Analytics";

const interests = ["Software Development", "IT Infrastructure / Networking", "Hardware Purchase", "Managed IT Support", "Not sure yet"];
const budgets = ["Below ₱50,000", "₱50,000 – ₱200,000", "₱200,000 – ₱1M", "Above ₱1M", "Prefer to discuss"];

export default function LeadForm({ defaultInterest = "" }) {
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [interest, setInterest] = useState(defaultInterest);

  async function onSubmit(e) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    // capture campaign source for marketing attribution
    const params = new URLSearchParams(window.location.search);
    ["utm_source", "utm_medium", "utm_campaign"].forEach((k) => params.get(k) && (data[k] = params.get(k)));

    trackEvent("generate_lead", { interest: data.interest });

    if (!site.formEndpoint) {
      const body = Object.entries(data).map(([k, v]) => `${k}: ${v}`).join("\n");
      window.location.href = `mailto:${site.contact.email}?subject=${encodeURIComponent(
        `Quote request – ${data.interest || "General"} – ${data.company || data.name}`
      )}&body=${encodeURIComponent(body)}`;
      setStatus("sent");
      return;
    }
    try {
      setStatus("sending");
      const res = await fetch(site.formEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(data),
      });
      setStatus(res.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="card p-10 text-center">
        <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-flux-cyan/15 text-flux-cyan"><Icon name="check" size={28} /></div>
        <h3 className="mt-6 font-display text-2xl font-bold text-white">Thanks — we got it.</h3>
        <p className="mt-3 text-slate-400">Our team will reply within one business day. For urgent concerns, call {site.contact.phone}.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="card p-6 sm:p-8 grid gap-5 sm:grid-cols-2">
      <Field label="Full name" name="name" required />
      <Field label="Company" name="company" />
      <Field label="Email" name="email" type="email" required />
      <Field label="Mobile / Viber" name="phone" type="tel" />
      <label className="sm:col-span-2">
        <span className="field-label">What do you need?</span>
        <div className="mt-2 flex flex-wrap gap-2">
          {interests.map((i) => (
            <button
              type="button"
              key={i}
              onClick={() => setInterest(i)}
              className={`rounded-full border px-4 py-2 text-sm transition ${
                interest === i ? "border-flux-cyan bg-flux-cyan/10 text-flux-cyan" : "border-white/10 text-slate-300 hover:border-white/30"
              }`}
            >
              {i}
            </button>
          ))}
        </div>
        <input type="hidden" name="interest" value={interest} />
      </label>
      <label className="sm:col-span-2">
        <span className="field-label">Estimated budget</span>
        <select name="budget" className="field mt-2" defaultValue="">
          <option value="" disabled>Select a range</option>
          {budgets.map((b) => <option key={b}>{b}</option>)}
        </select>
      </label>
      <label className="sm:col-span-2">
        <span className="field-label">Project details</span>
        <textarea name="message" rows={5} required className="field mt-2" placeholder="Tell us about your project, the equipment you need, or the problem you're solving…" />
      </label>
      <div className="sm:col-span-2 flex flex-col sm:flex-row sm:items-center gap-4 justify-between">
        <p className="text-xs text-slate-500">We reply within 1 business day. Your details are kept confidential.</p>
        <button type="submit" disabled={status === "sending"} className="btn-primary justify-center">
          {status === "sending" ? "Sending…" : "Send request"} <Icon name="arrow" size={18} />
        </button>
      </div>
      {status === "error" && <p className="sm:col-span-2 text-sm text-flux-red">Something went wrong. Please email {site.contact.email} directly.</p>}
    </form>
  );
}

function Field({ label, name, type = "text", required }) {
  return (
    <label>
      <span className="field-label">{label}{required && <span className="text-flux-red"> *</span>}</span>
      <input name={name} type={type} required={required} className="field mt-2" />
    </label>
  );
}
