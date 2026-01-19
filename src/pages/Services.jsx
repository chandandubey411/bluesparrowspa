import { motion } from "framer-motion";

const services = [
  {
    title: "Swedish Massage",
    desc: "Gentle full-body massage to relax muscles and improve circulation.",
    image:
      "https://tattvaspa.com/wp-content/uploads/2025/08/Swedish-massage-Feature-Image-scaled.webp",
  },
  {
    title: "Deep Tissue Massage",
    desc: "Targets deep muscle layers to relieve chronic pain and stiffness.",
    image:
      "https://images.squarespace-cdn.com/content/v1/5f2864b6ee63644ee0b157d3/1724694633011-SJLESBYMV1Y4CDQ4T7CK/deep+tissue+massage+techniques+for+beginners.jpg",
  },
  {
    title: "Aroma Therapy",
    desc: "Essential oils therapy to calm the mind and relieve stress.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeeCMaUx8pl2anSh2qENgQVtp3CrDWzKqORg&s",
  },
  {
    title: "Thai Massage",
    desc: "Traditional stretching techniques to improve flexibility & energy.",
    image:
      "https://www.health.com/thmb/XwSLq9__b0ANDbCqdb2kGAVdXLw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1438172458-fc10c26db84048b99a3feaa316701fa3.jpg",
  },
  {
    title: "Relaxation Therapy",
    desc: "Perfect therapy to release tension and restore inner balance.",
    image:
      "https://www.salongold.co.uk/wp-content/uploads/2025/05/Relaxation-therapy-1-1920x640.png",
  },
  {
    title: "Couple Massage",
    desc: "Relax together in a peaceful private environment.",
    image:
      "https://tiimg.tistatic.com/fp/1/008/977/couple-massage-in-pimpri-chinchwad-pune-657.jpg",
  },
];

const Services = () => {
  return (
    <div className="w-full">
      {/* INTRO SECTION */}
      <section className="py-20 bg-gradient-to-b from-[#0F2A44] to-[#163A5F] text-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="bg-white/10 backdrop-blur-xl rounded-3xl p-10 md:p-14 text-center shadow-2xl"
          >
            <h1 className="text-4xl md:text-5xl font-serif font-bold">
              Our Signature Therapies
            </h1>

            <p className="mt-6 text-white/80 max-w-3xl mx-auto text-lg">
              Indulge in thoughtfully curated wellness experiences designed to
              relax your body, calm your mind and restore inner balance.
            </p>

            {/* TRUST POINTS */}
            <div className="grid sm:grid-cols-3 gap-6 mt-10">
              {[
                "Certified Therapists",
                "Private & Hygienic Rooms",
                "Premium Oils & Products",
              ].map((item) => (
                <div
                  key={item}
                  className="bg-white/15 rounded-2xl py-5 px-4 text-sm font-medium"
                >
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-serif font-bold text-center text-[#0F2A44]"
          >
            Premium Wellness Therapies
          </motion.h2>

          <p className="mt-4 text-center text-gray-600 max-w-2xl mx-auto">
            Carefully designed treatments to rejuvenate your body, calm your
            mind and refresh your soul.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-14">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover group-hover:scale-110 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-black/10"></div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-serif font-bold text-[#0F2A44]">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                    {service.desc}
                  </p>

                  <a
                    href="https://wa.me/917303012822"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-6 bg-[#D4AF37] text-[#0F2A44] px-6 py-3 rounded-full font-semibold hover:scale-105 transition"
                  >
                    Book Now
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Services;
