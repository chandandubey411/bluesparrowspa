import { useState } from "react";
import { motion } from "framer-motion";

const images = [
  "https://images.unsplash.com/photo-1583417267826-aebc4d1542e1?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1596178060671-7a80dc8059ea?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1583416750470-965b2707b355?auto=format&fit=crop&w=900&q=80",
  "https://spameraki.com/cdn/shop/files/MerakiWebsitePhotos_583e0b96-d5c0-434b-890e-1005d5e16695.png?v=1696255144",
];

const Gallery = () => {
  const [activeImage, setActiveImage] = useState(null);

  return (
    <div className="w-full bg-[#F8FAFC]">

      {/* SIMPLE HEADER */}
      <section className="pt-24 pb-10">
        <div className="max-w-7xl mx-auto px-6">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col md:flex-row md:items-end md:justify-between gap-6"
          >
            <div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#0F2A44]">
                Gallery
              </h1>
              <p className="mt-3 text-gray-600 max-w-xl">
                A glimpse into our calm spaces, premium therapies and
                rejuvenating environment.
              </p>
            </div>

            <div className="text-sm text-gray-500">
              {images.length}+ Moments
            </div>
          </motion.div>

          <div className="mt-10 h-px bg-gray-200"></div>

        </div>
      </section>

      {/* GALLERY GRID */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6">

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {images.map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.35 }}
                viewport={{ once: true }}
                className="relative overflow-hidden rounded-3xl shadow-md cursor-pointer group bg-white"
                onClick={() => setActiveImage(img)}
              >
                <img
                  src={img}
                  alt="Spa Gallery"
                  className="w-full object-cover group-hover:scale-110 transition duration-500"
                />

                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition"></div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* LIGHTBOX */}
      {activeImage && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center px-4"
          onClick={() => setActiveImage(null)}
        >
          <motion.img
            src={activeImage}
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.25 }}
            className="max-h-[90vh] max-w-full rounded-2xl shadow-2xl"
          />
        </div>
      )}

    </div>
  );
};

export default Gallery;
