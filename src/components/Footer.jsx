const Footer = () => {
  return (
    <footer className="bg-[#0F2A44] text-white">
      <div className="max-w-7xl mx-auto px-6 py-8">

        <div className="grid gap-12 md:grid-cols-3">

          {/* BRAND */}
          <div>
            <h2 className="text-2xl font-serif font-bold">
              Blue Sparrow Spa
            </h2>
            <p className="mt-4 text-white/80 text-sm leading-relaxed">
              A premium wellness destination offering calm, privacy and
              professional therapies designed to relax your body and mind.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm text-white/80">
              <li>
                <a href="/" className="hover:text-[#D4AF37] transition">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-[#D4AF37] transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-[#D4AF37] transition">
                  Services
                </a>
              </li>
              <li>
                <a href="/pricing" className="hover:text-[#D4AF37] transition">
                  Pricing
                </a>
              </li>
              <li>
                <a href="/gallery" className="hover:text-[#D4AF37] transition">
                  Gallery
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-[#D4AF37] transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Contact Us
            </h3>
            <p className="text-sm text-white/80 leading-relaxed">
              City Center GZB<br />
              2nd Floor, World Square Mall,<br />
              Loni Industrial Area, Mohan Nagar,<br />
              Sahibabad, Ghaziabad,<br />
              Uttar Pradesh – 201007
            </p>

            <p className="mt-4 text-sm text-white/80">
              Open 24 Hours
            </p>

            <div className="mt-6 flex gap-4">
              <a
                href="https://wa.me/917303012822"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#D4AF37] text-[#0F2A44] px-5 py-2 rounded-full text-sm font-semibold hover:scale-105 transition"
              >
                WhatsApp
              </a>

              <a
                href="tel:7303012822"
                className="border border-white/30 px-5 py-2 rounded-full text-sm font-semibold hover:bg-white hover:text-[#0F2A44] transition"
              >
                +91 7303012822
              </a>
            </div>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="border-t border-white/20 mt-12 pt-6 text-center text-sm text-white/70">
          © {new Date().getFullYear()} Blue Sparrow Spa. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;
