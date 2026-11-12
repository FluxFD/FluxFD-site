import { useEffect } from "react";
import { site } from "../config/site";

/** Sets per-page <title>, meta description, canonical and OG tags. */
export default function useSeo({ title, description, path = "/" }) {
  useEffect(() => {
    const fullTitle = title ? `${title} | ${site.name}` : `${site.legalName}`;
    document.title = fullTitle;
    const set = (selector, attr, value) => {
      let el = document.head.querySelector(selector);
      if (!el) {
        el = document.createElement(selector.startsWith("link") ? "link" : "meta");
        const m = selector.match(/\[(\w+(?::\w+)?)="([^"]+)"\]/);
        if (m) el.setAttribute(m[1], m[2]);
        document.head.appendChild(el);
      }
      el.setAttribute(attr, value);
    };
    if (description) {
      set('meta[name="description"]', "content", description);
      set('meta[property="og:description"]', "content", description);
      set('meta[name="twitter:description"]', "content", description);
    }
    set('meta[property="og:title"]', "content", fullTitle);
    set('meta[name="twitter:title"]', "content", fullTitle);
    set('meta[property="og:url"]', "content", site.url + path);
    set('link[rel="canonical"]', "href", site.url + path);
  }, [title, description, path]);
}
