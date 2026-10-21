import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Minus, Plus, ShoppingCart, Star } from "lucide-react";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";

const toppings = ["Chocolate Chips", "Oreo Crumbs", "Nuts", "Sprinkles", "Caramel Sauce"];

export default function ProductDetailsPage() {
  const { id } = useParams();
  const product = useMemo(() => products.find((p) => String(p.id) === String(id)), [id]);
  const { addToCart } = useCart();

  const [selectedSize, setSelectedSize] = useState("Single Scoop");
  const [quantity, setQuantity] = useState(1);
  const [selectedToppings, setSelectedToppings] = useState([]);

  if (!product) {
    return <div className="section-container py-20 text-center text-xl">Product not found.</div>;
  }

  const toggleTopping = (name) => {
    setSelectedToppings((current) =>
      current.includes(name) ? current.filter((item) => item !== name) : [...current, name]
    );
  };

  const price = product.sizePrices[selectedSize] || product.price;

  return (
    <div className="section-container py-12">
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="overflow-hidden rounded-[36px] bg-white p-3 shadow-soft">
          <img
            src={product.image}
            alt={product.name}
            className="h-[520px] w-full rounded-[28px] object-cover"
          />
        </div>

        <div className="rounded-[36px] bg-white p-8 shadow-soft">
          <div className="label-pill">{product.category}</div>
          <h1 className="mt-4 text-4xl font-black text-[#59352A]">{product.name}</h1>

          <div className="mt-4 flex items-center gap-3">
            <div className="flex items-center gap-1 text-[#FFB703]">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} className="h-4 w-4 fill-[#FFB703] text-[#FFB703]" />
              ))}
            </div>
            <span className="text-sm font-medium text-[#59352A]/70">Sample rating • {product.rating}/5</span>
          </div>

          <p className="mt-5 text-[#59352A]/80">{product.description}</p>

          <div className="mt-6 text-3xl font-black text-[#59352A]">Rs. {price}</div>

          <div className="mt-6">
            <div className="mb-2 text-sm font-semibold uppercase tracking-[0.12em] text-[#59352A]/60">Size</div>
            <div className="grid grid-cols-2 gap-3">
              {Object.keys(product.sizePrices).map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`rounded-2xl px-4 py-3 text-sm font-semibold transition ${
                    selectedSize === size
                      ? "bg-[#FF6B9D] text-white"
                      : "border border-[#59352A]/10 bg-[#FFF7E8] text-[#59352A]"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-6">
            <div className="mb-2 text-sm font-semibold uppercase tracking-[0.12em] text-[#59352A]/60">Quantity</div>
            <div className="inline-flex items-center gap-4 rounded-full border border-[#59352A]/10 bg-[#FFF7E8] px-3 py-2">
              <button onClick={() => setQuantity((q) => Math.max(1, q - 1))} className="p-1">
                <Minus size={18} />
              </button>
              <span className="w-8 text-center font-bold">{quantity}</span>
              <button onClick={() => setQuantity((q) => q + 1)} className="p-1">
                <Plus size={18} />
              </button>
            </div>
          </div>

          <div className="mt-6">
            <div className="mb-2 text-sm font-semibold uppercase tracking-[0.12em] text-[#59352A]/60">Optional toppings</div>
            <div className="flex flex-wrap gap-2">
              {toppings.map((topping) => (
                <button
                  key={topping}
                  onClick={() => toggleTopping(topping)}
                  className={`rounded-full px-3 py-2 text-xs font-semibold transition ${
                    selectedToppings.includes(topping)
                      ? "bg-[#59352A] text-white"
                      : "border border-[#59352A]/10 bg-[#FFF7E8] text-[#59352A]"
                  }`}
                >
                  {topping}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={() =>
              addToCart({
                id: product.id,
                name: product.name,
                price: price,
                size: selectedSize,
                type: "product",
                quantity,
                image: product.image,
                toppings: selectedToppings
              })
            }
            className="mt-8 flex w-full items-center justify-center gap-2 rounded-full bg-[#FF6B9D] px-6 py-4 text-base font-bold text-white shadow-soft"
          >
            <ShoppingCart size={18} /> Add to Cart
          </button>

          <Link to="/" className="mt-4 block text-center text-sm font-semibold text-[#FF6B9D]">
            Continue shopping
          </Link>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-3xl font-black text-[#59352A]">Related products</h2>
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {products
            .filter((item) => item.id !== product.id)
            .slice(0, 3)
            .map((item) => (
              <Link key={item.id} to={`/product/${item.id}`} className="overflow-hidden rounded-[26px] bg-white p-4 shadow-soft">
                <img src={item.image} alt={item.name} className="h-52 w-full rounded-[18px] object-cover" />
                <div className="mt-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-black text-[#59352A]">{item.name}</h3>
                    <span className="font-bold text-[#FF6B9D]">Rs. {item.price}</span>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}
