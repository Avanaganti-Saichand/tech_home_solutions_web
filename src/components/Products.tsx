// src/components/Products.tsx
export default function Products() {
  const products = [
    "Distribution Panel",
    "Motor Control Center (MCC)",
    "Power Control Center (PCC)",
    "Home Automation",
  ];

  return (
    <section
      id="products"
      className="py-20 px-4 md:px-20 bg-gradient-to-r from-[#F4A300] via-white to-[#fffdf5]"
      data-aos="fade-up"
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Title */}
        <h2 className="text-3xl sm:text-4xl font-extrabold text-black mb-12 relative inline-block">
          <span className="relative z-10">Our Products</span>
          <span className="absolute left-0 bottom-0 w-28 h-2"></span>
        </h2>

        {/* Product Grid */}
        <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((title, index) => (
            <div
              key={index}
              className="bg-white text-black p-6 rounded-xl shadow-md border hover:shadow-xl hover:scale-[1.03] transition duration-300 text-lg font-semibold tracking-wide"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              {title}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
