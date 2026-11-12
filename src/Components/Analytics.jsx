import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { site } from "../config/site";

/** Loads GA4 and Meta Pixel only when IDs are set in config/site.js, and tracks page views on route change. */
let loaded = false;
function load() {
  if (loaded || typeof window === "undefined") return;
  loaded = true;
  const { gaMeasurementId, metaPixelId } = site.analytics;
  if (gaMeasurementId) {
    const s = document.createElement("script");
    s.async = true;
    s.src = `https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`;
    document.head.appendChild(s);
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    window.gtag("js", new Date());
    window.gtag("config", gaMeasurementId, { send_page_view: false });
  }
  if (metaPixelId) {
    !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
    window.fbq("init", metaPixelId);
  }
}

/** Call from anywhere: trackEvent("generate_lead", { form: "contact" }) */
export function trackEvent(name, params = {}) {
  if (window.gtag) window.gtag("event", name, params);
  if (window.fbq) window.fbq("track", name === "generate_lead" ? "Lead" : "Contact", params);
}

export default function Analytics() {
  const { pathname } = useLocation();
  useEffect(() => { load(); }, []);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    if (window.gtag) window.gtag("event", "page_view", { page_path: pathname });
    if (window.fbq) window.fbq("track", "PageView");
  }, [pathname]);
  return null;
}
