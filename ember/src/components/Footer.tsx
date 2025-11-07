export default function Footer({ basePath = "" }: { basePath?: string }) {
  return (
    <footer className="mt-16 border-t border-[var(--color-surface-border)] bg-black/40 py-8 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 sm:flex-row">
        <div className="text-sm text-[var(--color-text-secondary)]">
          © {new Date().getFullYear()}{" "}
          {basePath === "/ember" ? "Ember Development" : "Bomber Collective"}
        </div>
        <nav className="flex gap-5 text-sm">
          <a
            href={`${basePath}/privacy`}
            className="text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-primary)]"
          >
            Privacy
          </a>
          <a
            href={`${basePath}/terms`}
            className="text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-primary)]"
          >
            Terms
          </a>
          <a
            href={`${basePath}/contact`}
            className="text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-primary)]"
          >
            Contact
          </a>
        </nav>
      </div>
    </footer>
  );
}
