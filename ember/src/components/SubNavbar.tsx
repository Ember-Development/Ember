import { NavLink } from "react-router-dom";

type LinkItem = { label: string; to: string };

export default function SubNavbar({ links = [] }: { links?: LinkItem[] }) {
  return (
    <nav className="w-full border-b border-neutral-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-8 py-4">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                [
                  "relative text-sm font-medium transition-colors duration-200",
                  isActive
                    ? "text-[var(--color-primary)]"
                    : "text-neutral-600 hover:text-[var(--color-primary)]",
                ]
                  .filter(Boolean)
                  .join(" ")
              }
            >
              {({ isActive }) => (
                <>
                  {link.label}
                  {isActive && (
                    <span className="absolute -bottom-4 left-0 h-[2px] w-full bg-[var(--color-primary)]" />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}

