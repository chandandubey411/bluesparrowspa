import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="w-full">
      {/* HERO SECTION */}
      <section
        className="relative min-h-[90vh] flex items-center justify-center text-white px-6 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-[#0F2A44]/70"></div>

        {/* Content */}
        <div className="relative max-w-6xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-serif font-bold"
          >
            Relax. Rejuvenate. Restore.
          </motion.h1>

          <p className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
            Experience premium wellness therapies designed to relax your body,
            mind and soul at Blue Sparrow Spa.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/917303012822"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#D4AF37] text-[#0F2A44] px-8 py-4 rounded-full font-semibold hover:scale-105 transition"
            >
              Book on WhatsApp
            </a>

            <a
              href="/services"
              className="border border-white/40 px-8 py-4 rounded-full hover:bg-white hover:text-[#0F2A44] transition"
            >
              View Services
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center">
            Our Popular Services
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {[
              "Swedish Massage",
              "Deep Tissue Massage",
              "Aroma Therapy",
              "Thai Massage",
              "Relaxation Therapy",
              "Couple Massage",
            ].map((service) => (
              <div
                key={service}
                className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition"
              >
                <h3 className="text-xl font-semibold text-[#0F2A44]">
                  {service}
                </h3>
                <p className="mt-3 text-sm text-gray-600">
                  Professional therapy designed to reduce stress and restore
                  balance.
                </p>
                <a
                  href="https://wa.me/917303012822"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-[#D4AF37] font-semibold"
                >
                  Book Now →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 bg-[#0F2A44] text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold">
            Why Choose Blue Sparrow Spa?
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {[
              "Certified Therapists",
              "Hygienic & Private Rooms",
              "Premium Oils & Products",
            ].map((item) => (
              <div
                key={item}
                className="bg-white/10 rounded-xl p-6 backdrop-blur"
              >
                <h3 className="text-xl font-semibold text-[#D4AF37]">{item}</h3>
                <p className="mt-3 text-sm text-white/80">
                  We ensure the highest standards of comfort, privacy and
                  relaxation.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold">
            What Our Clients Say
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-2xl shadow-md p-6">
                <p className="text-gray-600">
                  “Amazing experience! Very professional staff and calming
                  ambience. Highly recommended.”
                </p>
                <p className="mt-4 font-semibold text-[#0F2A44]">★★★★★</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
