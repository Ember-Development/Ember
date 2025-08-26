import Navbar from "../components/Navbar";
import SplineHero from "../components/SplineHero";

export default function Home() {
  return (
    <div className="w-full">
      <Navbar
        brand="Ember"
        links={[
          { label: "Services", to: "/services" },
          { label: "Work", to: "/work" },
          { label: "Pricing", to: "/pricing" },
          { label: "About", to: "/about" },
          { label: "Contact", to: "/contact" },
        ]}
      />

      <SplineHero />

      {/* Example content below hero so you can scroll */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl font-semibold">What we do</h2>
        <p className="mt-2 text-gray-600">
          Web development, mobile apps, maintenance, and DevOps for modern
          teams.
        </p>
      </section>
    </div>
  );
}
