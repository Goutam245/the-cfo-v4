import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, ChevronDown } from "lucide-react";

type DropdownItem = { to: string; label: string };
type NavItem = { to: string; label: string; dropdown?: DropdownItem[] };

const resourcesDropdown: DropdownItem[] = [
  { to: "/resources/blog", label: "Blog / Insights" },
  { to: "/resources/guides", label: "Guides & Templates" },
  { to: "/resources/faq", label: "FAQ" },
];

const navItems: NavItem[] = [
  { to: "/services", label: "Services" },
  { to: "/software", label: "Software" },
  { to: "/resources", label: "Resources", dropdown: resourcesDropdown },
  { to: "/about", label: "About Us" },
  { to: "/careers", label: "Careers" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const location = useLocation();
  const isDarkHeroPage = location.pathname === "/careers";
  const onDark = isDarkHeroPage && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    setScrolled(false);
    setOpen(false);
    setOpenDropdown(null);
  }, [location.pathname, location.hash]);

  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenDropdown(null), 120);
  };
  const cancelClose = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-[#E1DDD6] shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container-page flex items-center justify-between h-[72px]">
        <Link to="/" className="flex items-center gap-2 group">
          <span className={`font-extrabold text-lg tracking-tight ${onDark ? "text-white" : "text-[hsl(var(--navy))]"}`}>
            TheCFO<span className="text-[hsl(var(--amber))]">.</span>Site
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => {
            const hasDropdown = !!item.dropdown;
            const isOpen = openDropdown === item.label;
            return (
              <div
                key={item.to}
                className="relative"
                onMouseEnter={() => {
                  if (hasDropdown) {
                    cancelClose();
                    setOpenDropdown(item.label);
                  }
                }}
                onMouseLeave={() => {
                  if (hasDropdown) scheduleClose();
                }}
              >
                <NavLink
                  to={item.to}
                  onClick={(e) => {
                    if (hasDropdown) {
                      e.preventDefault();
                      setOpenDropdown(isOpen ? null : item.label);
                    }
                  }}
                  className={({ isActive }) =>
                    `relative px-3 py-2 text-sm font-semibold transition-colors inline-flex items-center gap-1 ${
                      isActive
                        ? "text-[hsl(var(--amber))]"
                        : `${onDark ? "text-white" : "text-[hsl(var(--navy))]"} hover:text-[hsl(var(--amber))]`
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span className="inline-flex items-center gap-1">
                        {item.label}
                        {hasDropdown && (
                          <ChevronDown
                            className={`w-3.5 h-3.5 opacity-60 transition-transform ${
                              isOpen ? "rotate-180" : ""
                            }`}
                          />
                        )}
                      </span>
                      {isActive && (
                        <motion.span
                          layoutId="nav-underline"
                          className="absolute left-3 right-3 -bottom-0.5 h-0.5 bg-[hsl(var(--amber))]"
                          transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
                        />
                      )}
                    </>
                  )}
                </NavLink>

                <AnimatePresence>
                  {hasDropdown && isOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.18, ease: [0.25, 0.46, 0.45, 0.94] }}
                      className="absolute left-0 top-full pt-3 min-w-[260px] z-50"
                    >
                      <div
                        className="bg-white rounded-xl shadow-lg py-2"
                        style={{ border: "1px solid #E1DDD6" }}
                      >
                        {item.dropdown!.map((d) => (
                          <Link
                            key={d.to}
                            to={d.to}
                            onClick={() => setOpenDropdown(null)}
                            className="block px-4 py-2.5 text-[14px] text-[#5D524A] hover:text-[#B9832B] hover:bg-[hsl(var(--canvas))] transition-colors"
                          >
                            {d.label}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="tel:+16476992997"
            className={`hidden xl:inline-flex items-center gap-2 text-sm font-semibold hover:text-[hsl(var(--amber))] transition-colors ${onDark ? "text-white" : "text-[hsl(var(--navy))]"}`}
          >
            <Phone className="w-4 h-4" />
            +1-647-699-2997
          </a>
          <Link
            to="/contact"
            className={`hidden md:inline-flex items-center gap-2 rounded-lg !py-2.5 !px-5 text-sm font-semibold transition-all ${
              onDark
                ? "border border-white text-white hover:bg-white hover:text-[hsl(var(--navy))]"
                : "bg-[hsl(var(--navy))] text-white hover:opacity-90"
            }`}
          >
            Book a Call
          </Link>
          <button
            onClick={() => setOpen((v) => !v)}
            className={`lg:hidden w-10 h-10 inline-flex items-center justify-center rounded-lg ${onDark ? "text-white" : "text-[hsl(var(--navy))]"}`}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="lg:hidden overflow-hidden bg-white border-t border-[hsl(var(--border-warm))]"
          >
            <div className="container-page py-4 flex flex-col gap-1">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `px-3 py-3 rounded-lg text-base font-semibold ${
                      isActive
                        ? "text-[hsl(var(--amber))] bg-[hsl(var(--amber)/0.08)]"
                        : "text-[hsl(var(--navy))]"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              <Link to="/contact" className="btn-primary w-full mt-2">
                Book a Free Consultation
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
