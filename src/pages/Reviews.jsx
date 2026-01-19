import { motion } from "framer-motion";

const reviews = [
  {
    name: "SK Pandey",
    rating: 5,
    text: "A peaceful place amid traffic kreek. Can present ones daughter before a would b groom and his family. A big prayer hall is there, well maintained.",
  },
  {
    name: "aj jain",
    rating: 5,
    text: "I usually take all salon related services from.there only ....they do nice hair cut ..colouring etc ...Happy to visit ...",
  },
  {
    name: "Akshay Kumar",
    rating: 4,
    text: "Synch proc roc SLC SFU Mack fan jab jb ne",
  },
  {
    name: "Neeraj Birma Kumar",
    rating: 5,
    text: "Nice spa with all kind of services ,good job",
  },
  {
    name: "Alok Tiwari",
    rating: 4,
    text: "Very nice surrounding and relaxing environment",
  },
  {
    name: "Saurabh Rawat",
    rating: 5,
    text: "Do they provide happy ending?",
  },
];

const Reviews = () => {
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
                Client Reviews
              </h1>
              <p className="mt-3 text-gray-600 max-w-xl">
                Honest feedback from our valued clients who experienced
                relaxation at Blue Sparrow Spa.
              </p>
            </div>

            <div className="text-right">
              <p className="text-3xl font-bold text-[#0F2A44]">4.8 ★</p>
              <p className="text-sm text-gray-500">
                Based on {reviews.length}+ reviews
              </p>
            </div>
          </motion.div>

          <div className="mt-10 h-px bg-gray-200"></div>
        </div>
      </section>

      {/* REVIEWS GRID */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl shadow-md p-6 hover:shadow-xl transition"
              >
                {/* Rating */}
                <div className="flex items-center gap-1 text-[#D4AF37]">
                  {"★".repeat(review.rating)}
                  {"☆".repeat(5 - review.rating)}
                </div>

                {/* Text */}
                <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                  “{review.text}”
                </p>

                {/* Name */}
                <p className="mt-6 font-semibold text-[#0F2A44]">
                  {review.name}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-2 bg-[#0F2A44] text-white text-center px-6">
        <h2 className="text-3xl md:text-4xl font-serif font-bold">
          Experience It Yourself
        </h2>
        <p className="mt-4 text-white/80">
          Book your session today and feel the difference.
        </p>

        <a
          href="https://wa.me/917303012822"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-8 bg-[#D4AF37] text-[#0F2A44] px-10 py-2 rounded-full font-semibold hover:scale-105 transition"
        >
          WhatsApp 7303012822
        </a>
      </section>

    </div>
  );
};

export default Reviews;
