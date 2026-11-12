import { useState } from "react";
import Icon from "./Icon";
import { site } from "../config/site";
import { trackEvent } from "./Analytics";

/** Floating quick-contact button (Messenger / Viber / Call / Email). */
export default function FloatingContact() {
  const [open, setOpen] = useState(false);
  const links = [
    { label: "Messenger", href: site.social.messenger, icon: "chat" },
    { label: "Viber", href: site.social.viber, icon: "phone" },
    { label: "Call us", href: site.contact.phoneHref, icon: "phone" },
    { label: "Email", href: `mailto:${site.contact.email}`, icon: "mail" },
  ];
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      {open && (
        <div className="flex flex-col gap-2 rounded-2xl border border-white/10 bg-ink-800/95 backdrop-blur p-2 shadow-2xl">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              onClick={() => trackEvent("contact_click", { method: l.label })}
              className="flex items-center gap-3 rounded-xl px-4 py-2.5 text-sm text-slate-200 hover:bg-white/5"
            >
              <Icon name={l.icon} size={18} className="text-flux-cyan" /> {l.label}
            </a>
          ))}
        </div>
      )}
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Close contact options" : "Open contact options"}
        className="grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-flux-cyan to-flux-teal text-ink-950 shadow-[0_10px_40px_-5px_rgba(34,228,242,.6)] transition-transform hover:scale-105"
      >
        <Icon name={open ? "close" : "chat"} size={24} strokeWidth={2} />
      </button>
    </div>
  );
}
