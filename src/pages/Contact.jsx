import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="w-full bg-[#F8FAFC]">

      {/* HEADER */}
      <section className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-6">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col md:flex-row md:items-end md:justify-between gap-6"
          >
            <div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#0F2A44]">
                Contact & Location
              </h1>
              <p className="mt-3 text-gray-600 max-w-xl">
                Visit us for a calm and rejuvenating wellness experience at
                Blue Sparrow Spa.
              </p>
            </div>

            <div className="text-sm text-gray-500">
              Open 24 Hours
            </div>
          </motion.div>

          <div className="mt-10 h-px bg-gray-200"></div>
        </div>
      </section>

      {/* CONTACT INFO */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">

          {/* DETAILS */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-serif font-bold text-[#0F2A44]">
              Blue Sparrow Spa
            </h2>

            <p className="mt-4 text-gray-600 leading-relaxed">
              <strong>Located in:</strong> City Center GZB
            </p>

            <p className="mt-2 text-gray-600 leading-relaxed">
              <strong>Address:</strong><br />
              2nd floor, World Square Mall,<br />
              Loni Industrial Area, Mohan Nagar,<br />
              Sahibabad, Delhi, Ghaziabad,<br />
              Uttar Pradesh – 201007
            </p>

            <p className="mt-4 text-gray-600">
              <strong>Hours:</strong> Open 24 Hours
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/917303012822"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#D4AF37] text-[#0F2A44] px-8 py-4 rounded-full font-semibold text-center hover:scale-105 transition"
              >
                Chat on WhatsApp
              </a>

              <a
                href="tel:7303012822"
                className="border border-[#0F2A44]/30 px-8 py-4 rounded-full text-center font-semibold text-[#0F2A44] hover:bg-[#0F2A44] hover:text-white transition"
              >
                Call Now
              </a>
            </div>
          </motion.div>

          {/* MAP */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden shadow-lg"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.3376043254925!2d77.3819421!3d28.679545999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf07ed1e6c85d%3A0xd36fc6abe7fda1d!2sBlue%20Sparrow%20Spa!5e0!3m2!1sen!2sin!4v1768798001431!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Blue Sparrow Spa Location"
            ></iframe>
          </motion.div>

        </div>
      </section>

    </div>
  );
};

export default Contact;
