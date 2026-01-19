import { motion } from "framer-motion";

const plans = [
  {
    name: "Swedish Massage",
    duration: "60 Minutes",
    price: "₹2,999",
    highlight: false,
  },
  {
    name: "Deep Tissue Massage",
    duration: "60 Minutes",
    price: "₹3,499",
    highlight: true,
  },
  {
    name: "Aroma Therapy",
    duration: "60 Minutes",
    price: "₹3,999",
    highlight: false,
  },
  {
    name: "Thai Massage",
    duration: "60 Minutes",
    price: "₹4,499",
    highlight: false,
  },
  {
    name: "Relaxation Therapy",
    duration: "60 Minutes",
    price: "₹3,299",
    highlight: false,
  },
  {
    name: "Couple Massage",
    duration: "60 Minutes",
    price: "₹6,999",
    highlight: true,
  },
];

const Pricing = () => {
  return (
    <div className="w-full">

      {/* PRICING */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6">

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-serif  font-bold text-center text-[#0F2A44]"
          >
            Transparent & Premium Pricing
          </motion.h2>

          <p className="mt-4 text-center text-gray-600 max-w-2xl mx-auto">
            Choose a therapy that suits your needs. No hidden charges, only
            pure relaxation.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-14">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative rounded-3xl p-8 shadow-lg hover:shadow-2xl transition ${
                  plan.highlight
                    ? "bg-[#0F2A44] text-white  scale-[1.03]"
                    : "bg-white "
                }`}
              >
                {plan.highlight && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#D4AF37] text-[#0F2A44] px-4 py-1 rounded-full text-sm font-semibold">
                    Popular
                  </span>
                )}

                <h3
                  className={`text-xl font-serif font-bold ${
                    plan.highlight ? "text-[#D4AF37]" : "text-[#0F2A44]"
                  }`}
                >
                  {plan.name}
                </h3>

                <p className="mt-2 text-sm opacity-80">
                  {plan.duration}
                </p>

                <p
                  className={`mt-6 text-4xl font-bold ${
                    plan.highlight ? "text-white" : "text-[#0F2A44]"
                  }`}
                >
                  {plan.price}
                </p>

                <ul className="mt-6 space-y-3 text-sm">
                  <li>✔ Professional Therapist</li>
                  <li>✔ Premium Oils</li>
                  <li>✔ Private Room</li>
                  <li>✔ Hygienic Environment</li>
                </ul>

                <a
                  href="https://wa.me/917303012822"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-block mt-8 w-full text-center px-6 py-3 rounded-full font-semibold transition ${
                    plan.highlight
                      ? "bg-[#D4AF37] text-[#0F2A44]"
                      : "bg-[#0F2A44] text-white hover:bg-[#0F2A44]/90"
                  }`}
                >
                  Book on WhatsApp
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* NOTE */}
      <section className="py-1 bg-[#0F2A44] text-white text-center px-6">
        <p className="text-white/80 max-w-3xl mx-auto">
          * Prices may vary based on therapist availability and special offers.
          Please contact us on WhatsApp for current deals and custom packages.
        </p>
      </section>

    </div>
  );
};

export default Pricing;
