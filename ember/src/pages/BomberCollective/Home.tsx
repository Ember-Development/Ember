import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import Reveal from "../../components/Reveal";

export default function BomberCollectiveHome() {
  const products = [
    {
      name: "NIL",
      description: "Name, Image, and Likeness platform for student athletes",
      link: "#", // Replace with actual NIL product link
      external: true,
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "Ember",
      description: "Professional development and digital solutions",
      link: "/ember",
      external: false,
      color: "from-orange-500 to-red-500",
    },
    {
      name: "Recruiting",
      description: "Streamlined recruiting and talent acquisition platform",
      link: "#", // Replace with actual Recruiting product link
      external: true,
      color: "from-purple-500 to-pink-500",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-white dark:from-neutral-900 dark:to-neutral-800">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="text-center">
              <h1 className="mb-6 text-5xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-6xl lg:text-7xl">
                Bomber Collective
              </h1>
              <p className="mx-auto mb-12 max-w-2xl text-lg text-neutral-600 dark:text-neutral-300 sm:text-xl">
                Innovative solutions across sports, development, and recruiting.
                <br />
                Empowering athletes, businesses, and talent acquisition.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Products Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <h2 className="mb-12 text-center text-3xl font-bold text-neutral-900 dark:text-white sm:text-4xl">
              Our Products
            </h2>
          </Reveal>

          <div className="grid gap-8 md:grid-cols-3">
            {products.map((product, idx) => (
              <Reveal key={product.name}>
                <div
                  className="group relative overflow-hidden rounded-2xl border border-neutral-200 bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-2xl dark:border-neutral-700 dark:bg-neutral-800"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  {/* Gradient overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-0 transition-opacity duration-300 group-hover:opacity-10`}
                  />

                  <div className="relative z-10">
                    <h3 className="mb-4 text-2xl font-bold text-neutral-900 dark:text-white">
                      {product.name}
                    </h3>
                    <p className="mb-6 text-neutral-600 dark:text-neutral-300">
                      {product.description}
                    </p>

                    {product.external ? (
                      <a
                        href={product.link}
                        className={`inline-flex items-center gap-2 rounded-lg bg-gradient-to-r ${product.color} px-6 py-3 font-medium text-white transition-transform hover:scale-105`}
                      >
                        Learn More
                        <svg
                          className="h-4 w-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </a>
                    ) : (
                      <Link
                        to={product.link}
                        className={`inline-flex items-center gap-2 rounded-lg bg-gradient-to-r ${product.color} px-6 py-3 font-medium text-white transition-transform hover:scale-105`}
                      >
                        Explore
                        <svg
                          className="h-4 w-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </Link>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <div className="rounded-2xl border border-neutral-200 bg-white p-8 shadow-lg dark:border-neutral-700 dark:bg-neutral-800 md:p-12">
              <h2 className="mb-6 text-center text-3xl font-bold text-neutral-900 dark:text-white">
                About Bomber Collective
              </h2>
              <p className="mb-4 text-center text-lg text-neutral-600 dark:text-neutral-300">
                Bomber Collective is a parent company driving innovation across
                multiple industries. From empowering student athletes through
                our NIL platform, to providing cutting-edge development
                solutions with Ember, and revolutionizing recruiting processes,
                we're committed to excellence in everything we do.
              </p>
              <p className="text-center text-neutral-600 dark:text-neutral-300">
                Each product is designed with purpose, built with precision, and
                delivered with passion.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}

