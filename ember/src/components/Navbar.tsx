import { useState, type JSX } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

type LinkItem = { label: string; to: string };

export default function Navbar({
  brand = "Ember",
  links = [],
}: {
  brand?: string | JSX.Element;
  links?: LinkItem[];
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Glassy top bar */}
      <nav className="sticky top-0 z-50 w-full border-b border-black/5 bg-white/70 shadow-[0_1px_0_0_rgba(0,0,0,0.03)] backdrop-blur-md dark:bg-neutral-900/60">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Brand */}
          <div className="text-2xl font-semibold tracking-tight">
            {typeof brand === "string" ? (
              <NavLink to="/" className="hover:opacity-90">
                {brand}
              </NavLink>
            ) : (
              brand
            )}
          </div>

          {/* Desktop links */}
          <div className="hidden items-center gap-7 md:flex">
            {links.map((l) => (
              <NavItem key={l.to} to={l.to}>
                {l.label}
              </NavItem>
            ))}
            {/* optional CTA to mirror your core navbar */}
            <a
              href="/contact"
              className="rounded-lg border border-black/10 bg-white/70 px-3 py-1.5 text-sm font-medium text-neutral-900 shadow-sm backdrop-blur hover:bg-white/90 dark:border-white/10 dark:bg-white/10 dark:text-white dark:hover:bg-white/15"
            >
              Get a quote
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            aria-label="Toggle navigation"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-lg border border-black/10 bg-white/60 shadow-sm backdrop-blur transition hover:bg-white/80 md:hidden dark:border-white/10 dark:bg-white/10 dark:hover:bg-white/15"
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
          className={`absolute inset-0 bg-black/40 transition-opacity ${
            open ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setOpen(false)}
        />
        {/* panel */}
        <aside
          className={`absolute top-0 left-0 h-full w-72 border-r border-black/10 bg-white/80 p-6 shadow-xl backdrop-blur-xl transition-transform duration-300 dark:border-white/10 dark:bg-neutral-900/80 ${
            open ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="mb-6 text-lg font-semibold">Menu</div>
          <nav className="flex flex-col gap-4">
            {links.map((l) => (
              <NavItem key={l.to} to={l.to} onClick={() => setOpen(false)}>
                {l.label}
              </NavItem>
            ))}
            <a
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-lg border border-black/10 bg-white/70 px-3 py-2 text-sm font-medium text-neutral-900 shadow-sm backdrop-blur hover:bg-white/90 dark:border-white/10 dark:bg-white/10 dark:text-white dark:hover:bg-white/15"
            >
              Get a quote
            </a>
          </nav>
        </aside>
      </div>
    </>
  );
}

/* — Helpers — */

function NavItem({
  to,
  children,
  onClick,
}: {
  to: string;
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) =>
        [
          "relative text-sm font-medium transition",
          "text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white",
          isActive && "text-neutral-900 dark:text-white",
        ]
          .filter(Boolean)
          .join(" ")
      }
    >
      {({ isActive }) => (
        <>
          {children}
          {/* subtle active underline like the core nav */}
          <span
            className={[
              "absolute -bottom-2 left-0 h-[2px] w-full rounded bg-neutral-900/70 transition dark:bg-white/80",
              isActive ? "opacity-100" : "opacity-0",
            ].join(" ")}
          />
        </>
      )}
    </NavLink>
  );
}
