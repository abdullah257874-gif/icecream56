import { useMemo, useState } from "react";
import { ShoppingCart } from "lucide-react";
import { useCart } from "../context/CartContext";

const flavorOptions = ["Strawberry", "Vanilla", "Chocolate", "Mango", "Mint", "Caramel", "Cookies & Cream", "Pistachio"];
const toppings = ["Chocolate Chips", "Oreo Crumbs", "Nuts", "Sprinkles", "Caramel Sauce"];
const waffleOptions = ["Classic Waffle Cone", "Sugar Cone", "Cup Only"];

export default function BuildYourBoxPage() {
  const { addToCart } = useCart();
  const [boxSize, setBoxSize] = useState(4);
  const [selectedFlavors, setSelectedFlavors] = useState(Array.from({ length: 4 }, () => "Strawberry"));
  const [selectedToppings, setSelectedToppings] = useState(["Chocolate Chips"]);
  const [waffleCone, setWaffleCone] = useState("Classic Waffle Cone");

  const totalPrice = useMemo(() => {
    const base = boxSize * 180;
    const toppingCost = selectedToppings.length * 60;
    const coneCost = waffleCone === "Classic Waffle Cone" ? 80 : 0;
    return base + toppingCost + coneCost;
  }, [boxSize, selectedToppings, waffleCone]);

  const updateFlavor = (index, value) => {
    setSelectedFlavors((current) => {
      const next = [...current];
      next[index] = value;
      return next.slice(0, boxSize);
    });
  };

  const handleBoxSizeChange = (newSize) => {
    setBoxSize(newSize);
    setSelectedFlavors((current) => {
      const next = [...current];
      while (next.length < newSize) next.push("Vanilla");
      return next.slice(0, newSize);
    });
  };

  const handleAddToCart = () => {
    addToCart({
      id: `custom-box-${boxSize}`,
      name: `${boxSize}-Scoop Custom Box`,
      price: totalPrice,
      quantity: 1,
      size: `${boxSize} scoops`,
      type: "custom-box",
      image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=1000&q=80",
      flavors: selectedFlavors,
      toppings: selectedToppings,
      waffleCone
    });
  };

  return (
    <div className="section-container py-12">
      <div className="mb-8 text-center">
        <div className="label-pill">Build Your Own</div>
        <h1 className="mt-4 text-4xl font-black text-[#59352A]">Create your custom ice cream box</h1>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1fr_0.75fr]">
        <div className="rounded-[32px] bg-white p-6 shadow-soft">
          <div>
            <div className="mb-3 text-sm font-semibold uppercase tracking-[0.12em] text-[#59352A]/60">Box size</div>
            <div className="grid grid-cols-3 gap-3">
              {[4, 6, 12].map((size) => (
                <button
                  key={size}
                  onClick={() => handleBoxSizeChange(size)}
                  className={`rounded-2xl px-4 py-3 font-semibold ${
                    boxSize === size ? "bg-[#FF6B9D] text-white" : "bg-[#FFF7E8] text-[#59352A]"
                  }`}
                >
                  {size} scoops
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <div className="mb-3 text-sm font-semibold uppercase tracking-[0.12em] text-[#59352A]/60">Select flavors</div>
            <div className="grid gap-3">
              {selectedFlavors.map((flavor, idx) => (
                <div key={idx} className="rounded-2xl border border-[#59352A]/10 bg-[#FFF7E8] p-3">
                  <label className="mb-2 block text-sm font-semibold text-[#59352A]">Scoop {idx + 1}</label>
                  <select
                    value={flavor}
                    onChange={(e) => updateFlavor(idx, e.target.value)}
                    className="w-full rounded-xl border border-[#59352A]/10 bg-white px-3 py-3 text-[#59352A] outline-none"
                  >
                    {flavorOptions.map((option) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <div className="mb-3 text-sm font-semibold uppercase tracking-[0.12em] text-[#59352A]/60">Toppings</div>
            <div className="flex flex-wrap gap-2">
              {toppings.map((topping) => (
                <button
                  key={topping}
                  onClick={() =>
                    setSelectedToppings((current) =>
                      current.includes(topping)
                        ? current.filter((item) => item !== topping)
                        : [...current, topping]
                    )
                  }
                  className={`rounded-full px-3 py-2 text-xs font-semibold ${
                    selectedToppings.includes(topping)
                      ? "bg-[#59352A] text-white"
                      : "bg-[#FFF7E8] text-[#59352A]"
                  }`}
                >
                  {topping}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <div className="mb-3 text-sm font-semibold uppercase tracking-[0.12em] text-[#59352A]/60">Waffle cone</div>
            <div className="grid grid-cols-3 gap-3">
              {waffleOptions.map((option) => (
                <button
                  key={option}
                  onClick={() => setWaffleCone(option)}
                  className={`rounded-2xl px-3 py-3 text-sm font-semibold ${
                    waffleCone === option ? "bg-[#FF6B9D] text-white" : "bg-[#FFF7E8] text-[#59352A]"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="rounded-[32px] bg-[#59352A] p-6 text-white shadow-soft">
          <h2 className="text-2xl font-black">Live order summary</h2>

          <div className="mt-6 space-y-4">
            <div>
              <div className="text-sm uppercase tracking-[0.12em] text-white/70">Flavors</div>
              <div className="mt-2 flex flex-wrap gap-2">
                {selectedFlavors.map((flavor, index) => (
                  <span key={index} className="rounded-full bg-white/10 px-3 py-2 text-xs font-semibold">
                    {flavor}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <div className="text-sm uppercase tracking-[0.12em] text-white/70">Toppings</div>
              <div className="mt-2 text-sm">{selectedToppings.length ? selectedToppings.join(", ") : "None"}</div>
            </div>

            <div>
              <div className="text-sm uppercase tracking-[0.12em] text-white/70">Quantity</div>
              <div className="mt-2 text-sm">{boxSize} scoops</div>
            </div>

            <div className="border-t border-white/20 pt-4">
              <div className="flex items-center justify-between">
                <span>Estimated total</span>
                <span className="text-2xl font-black">Rs. {totalPrice}</span>
              </div>
            </div>
          </div>

          <button
            onClick={handleAddToCart}
            className="mt-8 flex w-full items-center justify-center gap-2 rounded-full bg-[#FF6B9D] px-6 py-4 font-bold text-white"
          >
            <ShoppingCart size={18} /> Add Custom Box to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
