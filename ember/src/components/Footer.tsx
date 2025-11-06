export default function Footer({ basePath = "" }: { basePath?: string }) {
  return (
    <footer className="mt-16 border-t border-black/5 bg-white/70 py-8 backdrop-blur dark:border-white/10 dark:bg-neutral-900/60">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 sm:flex-row">
        <div className="text-sm text-neutral-600">
          © {new Date().getFullYear()}{" "}
          {basePath === "/ember" ? "Ember Development" : "Bomber Collective"}
        </div>
        <nav className="flex gap-5 text-sm">
          <a href={`${basePath}/privacy`} className="hover:underline">
            Privacy
          </a>
          <a href={`${basePath}/terms`} className="hover:underline">
            Terms
          </a>
          <a href={`${basePath}/contact`} className="hover:underline">
            Contact
          </a>
        </nav>
      </div>
    </footer>
  );
}
