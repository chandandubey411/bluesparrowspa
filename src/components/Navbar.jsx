import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Services", link: "/services" },
    { name: "Pricing", link: "/pricing" },
    { name: "Gallery", link: "/gallery" },
    { name: "Reviews", link: "/reviews" },
    { name: "Contact", link: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#0F2A44]/90 backdrop-blur-md shadow-md">
      <div className="w-full mx-auto px-4 py-2 flex items-center justify-between">
        
        <div className="text-2xl font-serif font-bold text-white flex items-center">
            <img src="/logo.png" className="h-20"></img>
          Blue <span className="text-[#D4AF37] px-1">Sparrow</span> Spa
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.link}
              className="text-white/90 hover:text-[#D4AF37] transition font-medium"
            >
              {item.name}
            </a>
          ))}

          {/* WhatsApp Button */}
          <a
            href="https://wa.me/917303012822"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#D4AF37] text-[#0F2A44] px-5 py-2 rounded-full font-semibold hover:scale-105 transition"
          >
            Book Now
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0F2A44] border-t border-white/10">
          <nav className="flex flex-col px-6 py-4 gap-4">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.link}
                onClick={() => setIsOpen(false)}
                className="text-white text-lg hover:text-[#D4AF37]"
              >
                {item.name}
              </a>
            ))}

            <a
              href="https://wa.me/917303012822"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 bg-[#D4AF37] text-[#0F2A44] text-center py-3 rounded-full font-semibold"
            >
              Book on WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
