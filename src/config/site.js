/**
 * ─────────────────────────────────────────────────────────────
 *  FluXenovia — single place to edit company info.
 *  Everything marked TODO is a placeholder: replace with real data
 *  before going live (also update the JSON-LD block in index.html).
 * ─────────────────────────────────────────────────────────────
 */
export const site = {
  name: "FluXenovia",
  legalName: "FluXenovia Software Development Services",
  formerName: "FluxFusion Devs",
  tagline: "Software. Infrastructure. Hardware. One partner.",
  url: "https://www.fluxenovia.com", // TODO: real domain
  founded: 2021,

  contact: {
    email: "hello@fluxenovia.com", // TODO
    salesEmail: "sales@fluxenovia.com", // TODO
    supportEmail: "support@fluxenovia.com", // TODO
    phone: "+63 900 000 0000", // TODO
    phoneHref: "tel:+639000000000", // TODO
    address: "Metro Manila, Philippines", // TODO: full business address
    hours: "Mon – Sat, 8:00 AM – 6:00 PM (PHT)",
    supportHours: "24/7 for managed-support clients",
  },

  social: {
    facebook: "https://www.facebook.com/fluxenovia", // TODO
    messenger: "https://m.me/fluxenovia", // TODO
    linkedin: "https://www.linkedin.com/company/fluxenovia", // TODO
    viber: "viber://chat?number=%2B639000000000", // TODO
  },

  /**
   * Lead form. Create a free form at https://formspree.io (or similar),
   * paste the endpoint here, and submissions land in your inbox.
   * Leave empty to fall back to opening the visitor's email app.
   */
  formEndpoint: "",

  /** Marketing / tracking IDs. Leave blank to disable. */
  analytics: {
    gaMeasurementId: "", // e.g. "G-XXXXXXXXXX"  (Google Analytics 4)
    metaPixelId: "", // e.g. "123456789012345" (Facebook / Meta Pixel)
  },
};
