import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Logo from "./Logo";
import Icon from "./Icon";

const serviceLinks = [
  { name: "Software Development", to: "/services#software", icon: "code", desc: "Web, mobile, enterprise & AI" },
  { name: "BIR Compliance", to: "/services#bir", icon: "receipt", desc: "CAS & EIS e-invoicing" },
  { name: "IT Infrastructure", to: "/services#infrastructure", icon: "network", desc: "Network, servers, security" },
  { name: "Hardware & Support", to: "/services#hardware", icon: "box", desc: "Supply, install, maintain" },
  { name: "Managed Support Plans", to: "/services#support", icon: "headset", desc: "Monthly IT support" },
];

const menuItems = [
  { name: "Home", to: "/" },
  { name: "Services", to: "/services", children: serviceLinks },
  { name: "Products", to: "/products" },
  { name: "Projects", to: "/projects" },
  { name: "About", to: "/about" },
  { name: "Contact", to: "/contact" },
];

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname, hash } = useLocation();

  useEffect(() => setIsOpen(false), [pathname, hash]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkCls = ({ isActive }) =>
    `relative px-3 py-2 text-[15px] font-medium transition-colors ${
      isActive ? "text-white" : "text-slate-400 hover:text-white"
    }`;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled || isOpen ? "bg-ink-950/80 backdrop-blur-xl border-b border-white/5" : "bg-transparent"
      }`}
    >
      <nav className="container-x flex h-20 items-center justify-between">
        <Logo />
        <div className="hidden lg:flex items-center gap-1">
          {menuItems.map((item) => (
            <div key={item.to} className="group relative">
              <NavLink to={item.to} end={item.to === "/"} className={linkCls}>
                {({ isActive }) => (
                  <span className="inline-flex items-center gap-1">
                    {item.name}
                    {item.children && <Icon name="chevronDown" size={14} className="transition-transform group-hover:rotate-180" />}
                    <span className={`absolute left-3 right-3 -bottom-0.5 h-px bg-gradient-to-r from-flux-cyan to-flux-red transition-opacity ${isActive ? "opacity-100" : "opacity-0"}`} />
                  </span>
                )}
              </NavLink>
              {item.children && (
                <div className="invisible absolute left-1/2 top-full z-50 w-80 -translate-x-1/2 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                  <div className="rounded-2xl border border-white/10 bg-ink-900/95 p-2 shadow-2xl backdrop-blur-xl">
                    {item.children.map((c) => (
                      <Link key={c.to} to={c.to} className="flex items-center gap-3 rounded-xl p-3 hover:bg-white/5">
                        <span className="icon-tile !h-10 !w-10 shrink-0"><Icon name={c.icon} size={18} /></span>
                        <span>
                          <span className="block text-sm font-medium text-white">{c.name}</span>
                          <span className="block text-xs text-slate-500">{c.desc}</span>
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="hidden lg:block">
          <Link to="/contact" className="btn-primary !py-2.5 !px-5 text-sm">
            Get a Quote <Icon name="arrow" size={16} />
          </Link>
        </div>
        <button
          onClick={() => setIsOpen((o) => !o)}
          className="lg:hidden grid h-11 w-11 place-items-center rounded-xl border border-white/10 text-white"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <Icon name={isOpen ? "close" : "menu"} />
        </button>
      </nav>

      {isOpen && (
        <div className="lg:hidden border-t border-white/5 bg-ink-950/95 backdrop-blur-xl">
          <div className="container-x py-4 flex flex-col">
            {menuItems.map((item) => (
              <div key={item.to} className="border-b border-white/5">
                <NavLink
                  to={item.to}
                  end={item.to === "/"}
                  className={({ isActive }) => `block py-3 text-lg ${isActive ? "text-flux-cyan" : "text-slate-300"}`}
                >
                  {item.name}
                </NavLink>
                {item.children && (
                  <div className="grid grid-cols-2 gap-1 pb-3">
                    {item.children.map((c) => (
                      <Link key={c.to} to={c.to} className="flex items-center gap-2 rounded-lg px-2 py-2 text-sm text-slate-400 hover:bg-white/5">
                        <Icon name={c.icon} size={16} className="text-flux-cyan" />{c.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link to="/contact" className="btn-primary mt-5 justify-center">Get a Free Quote</Link>
          </div>
        </div>
      )}
    </header>
  );
}
