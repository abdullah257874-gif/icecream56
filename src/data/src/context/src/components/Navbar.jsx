import { Menu, ShoppingBag, Search, X } from "lucide-react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Our Flavors", to: "/#flavors" },
  { label: "Build Your Box", to: "/build-your-box" },
  { label: "About Us", to: "/#about" },
  { label: "Contact", to: "/#contact" }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { totalItems } = useCart();

  return (
    <header className="sticky top-0 z-50 bg-[#FFF7E8]/90 backdrop-blur-md border-b border-[#59352A]/10">
      <nav className="section-container flex items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#FF6B9D] to-[#F7C3D3] shadow-soft text-xl">
            🍦
          </div>
          <div>
            <div className="text-lg font-black tracking-wide text-[#59352A]">Frosty Dreams</div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-[#59352A]/60">Happiness in Every Scoop!</div>
          </div>
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.to}
              className={({ isActive }) =>
                `text-sm font-medium transition ${isActive ? "text-[#FF6B9D]" : "text-[#59352A] hover:text-[#FF6B9D]"}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <button className="rounded-full border border-[#59352A]/15 bg-white p-3 text-[#59352A] hover:border-[#FF6B9D]/40">
            <Search size={18} />
          </button>
          <Link to="/cart" className="relative rounded-full border border-[#59352A]/15 bg-white p-3 text-[#59352A] hover:border-[#FF6B9D]/40">
            <ShoppingBag size={18} />
            {totalItems > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#FF6B9D] text-[10px] font-bold text-white">
                {totalItems}
              </span>
            )}
          </Link>
          <Link to="/#flavors" className="btn-primary">Order Now</Link>
        </div>

        <button
          onClick={() => setIsOpen((s) => !s)}
          className="rounded-full border border-[#59352A]/15 bg-white p-3 text-[#59352A] lg:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-[#59352A]/10 bg-[#FFF7E8] px-4 py-4 lg:hidden">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <NavLink
                key={item.label}
                to={item.to}
                onClick={() => setIsOpen(false)}
                className="rounded-xl bg-white px-4 py-2 text-sm font-medium text-[#59352A]"
              >
                {item.label}
              </NavLink>
            ))}
            <Link to="/cart" onClick={() => setIsOpen(false)} className="rounded-xl bg-[#FF6B9D] px-4 py-2 text-sm font-semibold text-white">
              Cart ({totalItems})
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
