import { useEffect, useRef, useState, type JSX } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

type LinkItem = { label: string; to: string; isAnchor?: boolean };

export default function Navbar({
  brand = "Ember",
  links = [],
  contactLink = "/contact",
}: {
  brand?: string | JSX.Element;
  links?: LinkItem[];
  contactLink?: string;
}) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const ticking = useRef(false);

  useEffect(() => {
    const onScroll = () => {
      if (ticking.current) return;
      ticking.current = true;
      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 8); // small threshold feels snappier
        ticking.current = false;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // While mobile menu is open, keep the bar glassy (readable).
  const glassOn = scrolled || open;

  return (
    <>
      {/* Top bar */}
      <nav
        className={[
          "sticky top-0 z-50 w-full transition-all duration-300",
          // When not scrolled: truly transparent, no border/shadow.
          glassOn
            ? "border-[var(--color-surface-border)] bg-black/40 backdrop-blur-md"
            : "bg-transparent",
        ].join(" ")}
      >
        <div className="max-w-8xl mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Brand */}
          <div className="text-2xl font-semibold tracking-tight">
            {typeof brand === "string" ? (
              <NavLink
                to="/"
                className="text-gold-gradient transition-opacity hover:opacity-90"
              >
                {brand}
              </NavLink>
            ) : (
              brand
            )}
          </div>

          {/* Desktop links */}
          <div className="hidden items-center gap-7 md:flex">
            {links.map((l) => (
              <NavItem key={l.to} to={l.to} isAnchor={l.isAnchor}>
                {l.label}
              </NavItem>
            ))}
            {contactLink.startsWith("#") ? (
              <button
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.querySelector(contactLink);
                  if (el) {
                    el.scrollIntoView({ behavior: "smooth", block: "start" });
                  }
                }}
                className="btn-gold text-sm"
              >
                Get a quote
              </button>
            ) : (
              <a href={contactLink} className="btn-gold text-sm">
                Get a quote
              </a>
            )}
          </div>

          {/* Mobile toggle */}
          <button
            aria-label="Toggle navigation"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className={[
              "grid h-10 w-10 place-items-center rounded-lg border shadow-sm transition md:hidden",
              glassOn
                ? "border-[var(--color-surface-border)] bg-[var(--color-surface)] text-white backdrop-blur hover:bg-[var(--color-surface-hover)]"
                : "border-[var(--color-primary)]/30 bg-black/40 text-white hover:bg-black/60",
            ].join(" ")}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer + scrim */}
      <div
        className={`fixed inset-0 z-40 md:hidden ${
          open ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        {/* scrim */}
        <div
          className={`absolute inset-0 bg-black/60 transition-opacity ${
            open ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setOpen(false)}
        />
        {/* panel */}
        <aside
          className={`absolute top-0 left-0 h-full w-72 border-r border-[var(--color-surface-border)] bg-black/80 p-6 shadow-xl backdrop-blur-xl transition-transform duration-300 ${
            open ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="text-gold-gradient mb-6 text-lg font-semibold">
            Menu
          </div>
          <nav className="flex flex-col gap-4">
            {links.map((l) => (
              <NavItem
                key={l.to}
                to={l.to}
                isAnchor={l.isAnchor}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </NavItem>
            ))}
            {contactLink.startsWith("#") ? (
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setOpen(false);
                  const el = document.querySelector(contactLink);
                  if (el) {
                    el.scrollIntoView({ behavior: "smooth", block: "start" });
                  }
                }}
                className="btn-gold mt-2 text-center text-sm"
              >
                Get a quote
              </button>
            ) : (
              <a
                href={contactLink}
                onClick={() => setOpen(false)}
                className="btn-gold mt-2 text-center text-sm"
              >
                Get a quote
              </a>
            )}
          </nav>
        </aside>
      </div>
    </>
  );
}

/* — Helpers — */

function NavItem({
  to,
  isAnchor = false,
  children,
  onClick,
}: {
  to: string;
  isAnchor?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}) {
  const [activeAnchor, setActiveAnchor] = useState("");

  useEffect(() => {
    if (!isAnchor) return;

    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      let current = "";

      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop <= 100 && sectionTop >= -section.clientHeight) {
          current = `#${section.id}`;
        }
      });

      setActiveAnchor(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isAnchor]);

  // Check if it's an external URL
  const isExternal = to.startsWith("http://") || to.startsWith("https://");

  if (isExternal) {
    return (
      <a
        href={to}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClick}
        className={[
          "relative text-sm font-medium transition",
          "text-[var(--color-text-secondary)] hover:text-[var(--color-primary)]",
        ]
          .filter(Boolean)
          .join(" ")}
      >
        {children}
      </a>
    );
  }

  if (isAnchor) {
    const isActive = activeAnchor === to;

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      const element = document.querySelector(to);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      onClick?.();
    };

    return (
      <a
        href={to}
        onClick={handleClick}
        className={[
          "relative text-sm font-medium transition",
          "text-[var(--color-text-secondary)] hover:text-[var(--color-primary)]",
          isActive && "text-[var(--color-primary)]",
        ]
          .filter(Boolean)
          .join(" ")}
      >
        {children}
        <span
          className={[
            "absolute -bottom-2 left-0 h-[2px] w-full rounded bg-gradient-to-r from-[var(--color-gold-400)] to-[var(--color-gold-600)] transition",
            isActive ? "opacity-100" : "opacity-0",
          ].join(" ")}
        />
      </a>
    );
  }

  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) =>
        [
          "relative text-sm font-medium transition",
          "text-[var(--color-text-secondary)] hover:text-[var(--color-primary)]",
          isActive && "text-[var(--color-primary)]",
        ]
          .filter(Boolean)
          .join(" ")
      }
    >
      {({ isActive }) => (
        <>
          {children}
          <span
            className={[
              "absolute -bottom-2 left-0 h-[2px] w-full rounded bg-gradient-to-r from-[var(--color-gold-400)] to-[var(--color-gold-600)] transition",
              isActive ? "opacity-100" : "opacity-0",
            ].join(" ")}
          />
        </>
      )}
    </NavLink>
  );
}
