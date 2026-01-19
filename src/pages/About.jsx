import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="w-full">

      {/* INTRO */}
      <section className="py-24 bg-gradient-to-b from-[#0F2A44] to-[#163A5F] text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-serif font-bold"
          >
            About Blue Sparrow Spa
          </motion.h1>

          <p className="mt-6 max-w-3xl mx-auto text-white/80 text-lg">
            A refined wellness destination where tranquility, comfort and
            expert care come together to rejuvenate your body and soul.
          </p>

        </div>
      </section>

      {/* STORY SECTION */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-serif font-bold text-[#0F2A44]">
              Our Story
            </h2>

            <p className="mt-6 text-gray-600 leading-relaxed">
              Blue Sparrow Spa was created with a simple vision — to offer a
              serene escape from everyday stress. Inspired by traditional
              wellness practices and modern luxury, we provide therapies that
              focus on complete physical and mental relaxation.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              Every detail, from the ambience to the techniques used by our
              therapists, is thoughtfully designed to ensure a calming and
              personalized experience for each guest.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {[
              "Certified & Experienced Therapists",
              "Premium Natural Oils & Products",
              "Private, Hygienic Treatment Rooms",
              "Calm & Luxurious Ambience",
            ].map((item) => (
              <div
                key={item}
                className="bg-white rounded-2xl shadow-lg p-6 text-center"
              >
                <p className="font-semibold text-[#0F2A44] text-sm leading-snug">
                  {item}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section className="py-24 bg-[#0F2A44] text-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-12 text-center">

          {[
            {
              title: "Personalized Care",
              desc: "Each therapy is tailored to your body’s needs for maximum comfort and benefit.",
            },
            {
              title: "Expert Techniques",
              desc: "Our therapists use refined techniques to ensure deep relaxation and recovery.",
            },
            {
              title: "Complete Privacy",
              desc: "Enjoy your experience in a calm, private and hygienic environment.",
            },
          ].map((item) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white/10 rounded-3xl p-8 backdrop-blur"
            >
              <h3 className="text-xl font-serif font-bold text-[#D4AF37]">
                {item.title}
              </h3>
              <p className="mt-4 text-white/80 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PROMISE */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-serif font-bold text-[#0F2A44]"
          >
            Our Promise to You
          </motion.h2>

          <p className="mt-6 text-gray-600 leading-relaxed">
            At Blue Sparrow Spa, we promise an atmosphere of peace, professional
            care, complete hygiene and a rejuvenating experience that helps you
            disconnect, relax and feel truly refreshed.
          </p>
        </div>
      </section>

    </div>
  );
};

export default About;
