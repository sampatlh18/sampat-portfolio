import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useActiveSection } from "../hooks/useActiveSection";

const links = [
  ["home", "Home"],
  ["about", "About"],
  ["skills", "Skills"],
  ["experience", "Experience"],
  ["projects", "Projects"],
  ["education", "Education"],
  ["certifications", "Certifications"],
  ["contact", "Contact"]
];

export default function Navbar() {
  const active = useActiveSection(links.map(([id]) => id));
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="site-header">
      <nav className="nav-shell" aria-label="Main navigation">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="Sampat home">
          <span className="brand-mark">SH<span>.</span></span>
          <span className="brand-copy">SAMPAT<span> / PORTFOLIO</span></span>
        </a>

        <div className="desktop-nav">
          {links.map(([id, label]) => (
            <a
              key={id}
              href={`#${id}`}
              className={active === id ? "nav-link active" : "nav-link"}
            >
              {label}
            </a>
          ))}
        </div>

        <a className="nav-cta" href="#contact">
          Let&apos;s talk <ArrowUpRight size={15} />
        </a>

        <button
          className="mobile-menu-toggle"
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
        >
          {open ? <X size={21} /> : <Menu size={21} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-nav"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
          >
            {links.map(([id, label]) => (
              <a
                key={id}
                href={`#${id}`}
                className={active === id ? "mobile-nav-link active" : "mobile-nav-link"}
                onClick={closeMenu}
              >
                {label}<span>↗</span>
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
