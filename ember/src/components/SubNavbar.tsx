import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

type LinkItem = { label: string; to: string; isAnchor?: boolean };

export default function SubNavbar({ links = [] }: { links?: LinkItem[] }) {
  return (
    <nav className="w-full border-b border-neutral-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-8 py-4">
          {links.map((link) =>
            link.isAnchor ? (
              <AnchorLink key={link.to} link={link} />
            ) : (
              <RouterLink key={link.to} link={link} />
            ),
          )}
        </div>
      </div>
    </nav>
  );
}

function AnchorLink({ link }: { link: LinkItem }) {
  const [activeAnchor, setActiveAnchor] = useState("");

  useEffect(() => {
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
  }, []);

  const isActive = activeAnchor === link.to;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.querySelector(link.to);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <a
      href={link.to}
      onClick={handleClick}
      className={[
        "relative text-sm font-medium transition-colors duration-200",
        isActive
          ? "text-[var(--color-primary)]"
          : "text-neutral-600 hover:text-[var(--color-primary)]",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {link.label}
      {isActive && (
        <span className="absolute -bottom-4 left-0 h-[2px] w-full bg-[var(--color-primary)]" />
      )}
    </a>
  );
}

function RouterLink({ link }: { link: LinkItem }) {
  return (
    <NavLink
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
  );
}
