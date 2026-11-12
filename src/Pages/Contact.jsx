import Icon from "../Components/Icon";
import Reveal from "../Components/Reveal";
import PageHero from "../Components/PageHero";
import LeadForm from "../Components/LeadForm";
import Faq from "../Components/Faq";
import useSeo from "../hooks/useSeo";
import { site } from "../config/site";

export default function Contact() {
  useSeo({
    title: "Contact Us – Get a Free Quote",
    description: "Request a free quotation for software development, IT infrastructure, networking, hardware supply or managed IT support from FluXenovia.",
    path: "/contact",
  });
  const channels = [
    { icon: "mail", label: "General inquiries", value: site.contact.email, href: `mailto:${site.contact.email}` },
    { icon: "tag", label: "Sales & quotations", value: site.contact.salesEmail, href: `mailto:${site.contact.salesEmail}` },
    { icon: "headset", label: "Technical support", value: site.contact.supportEmail, href: `mailto:${site.contact.supportEmail}` },
    { icon: "phone", label: "Call / Viber", value: site.contact.phone, href: site.contact.phoneHref },
  ];
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's talk about"
        highlight="your project."
        subtitle="Free consultation and itemized quotation. Tell us what you need and we'll get back within one business day."
      />
      <section className="container-x grid gap-10 pb-16 lg:grid-cols-12">
        <Reveal className="lg:col-span-7"><LeadForm /></Reveal>
        <Reveal delay={120} className="lg:col-span-5 space-y-4">
          {channels.map((c) => (
            <a key={c.label} href={c.href} className="card card-hover flex items-center gap-5 p-5">
              <div className="icon-tile shrink-0"><Icon name={c.icon} /></div>
              <div className="min-w-0">
                <p className="text-xs uppercase tracking-wider text-slate-500">{c.label}</p>
                <p className="truncate font-medium text-white">{c.value}</p>
              </div>
            </a>
          ))}
          <div className="card p-6">
            <div className="flex gap-4"><Icon name="pin" className="shrink-0 text-flux-cyan" /><div><p className="font-medium text-white">Office</p><p className="text-sm text-slate-400">{site.contact.address}</p></div></div>
            <div className="mt-5 flex gap-4"><Icon name="clock" className="shrink-0 text-flux-cyan" /><div><p className="font-medium text-white">Business hours</p><p className="text-sm text-slate-400">{site.contact.hours}</p><p className="text-sm text-slate-500">{site.contact.supportHours}</p></div></div>
          </div>
          <a href={site.social.messenger} target="_blank" rel="noreferrer" className="btn-ghost w-full"><Icon name="chat" size={18} /> Message us on Messenger</a>
        </Reveal>
      </section>
      <Faq />
    </>
  );
}
