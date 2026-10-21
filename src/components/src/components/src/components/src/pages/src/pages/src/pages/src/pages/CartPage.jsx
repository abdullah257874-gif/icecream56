import { Link } from "react-router-dom";
import { Minus, Plus, Trash2 } from "lucide-react";
import { useCart } from "../context/CartContext";

const DELIVERY_FEE = 250;
const DISCOUNT_CODE = "FROSTY15";

export default function CartPage() {
  const { cart, updateQuantity, removeFromCart, subtotal } = useCart();
  const [discountInput, setDiscountInput] = useState("");
  const [discountApplied, setDiscountApplied] = useState(false);

  const discountValue = discountApplied ? subtotal * 0.15 : 0;
  const total = subtotal + DELIVERY_FEE - discountValue;

  const handleApplyDiscount = () => {
    if (discountInput.trim().toUpperCase() === DISCOUNT_CODE) {
      setDiscountApplied(true);
    } else {
      setDiscountApplied(false);
    }
  };

  if (!cart.length) {
    return (
      <div className="section-container py-16">
        <div className="rounded-[32px] bg-white p-10 text-center shadow-soft">
          <h1 className="text-3xl font-black text-[#59352A]">Your cart is empty</h1>
          <p className="mt-3 text-[#59352A]/70">Add some delicious scoops and make today sweeter.</p>
          <Link to="/" className="mt-6 inline-block btn-primary">Continue Shopping</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="section-container py-12">
      <h1 className="text-4xl font-black text-[#59352A]">Your Cart</h1>

      <div className="mt-8 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-5">
          {cart.map((item) => (
            <div key={item.key} className="flex flex-col gap-4 rounded-[28px] bg-white p-4 shadow-soft sm:flex-row">
              <img src={item.image} alt={item.name} className="h-32 w-32 rounded-[22px] object-cover" />

              <div className="flex-1">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-black text-[#59352A]">{item.name}</h3>
                    <p className="text-sm text-[#59352A]/60">{item.size || "Single Scoop"}</p>
                  </div>

                  <button onClick={() => removeFromCart(item.key)} className="text-[#59352A]/60 hover:text-[#FF6B9D]">
                    <Trash2 size={18} />
                  </button>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <div className="inline-flex items-center gap-3 rounded-full border border-[#59352A]/10 bg-[#FFF7E8] px-3 py-2">
                    <button onClick={() => updateQuantity(item.key, -1)}><Minus size={16} /></button>
                    <span className="w-5 text-center font-bold">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.key, 1)}><Plus size={16} /></button>
                  </div>

                  <div className="text-xl font-black text-[#59352A]">Rs. {item.price * item.quantity}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-[28px] bg-white p-6 shadow-soft">
          <h2 className="text-2xl font-black text-[#59352A]">Order Summary</h2>

          <div className="mt-6 space-y-3 text-[#59352A]">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>Rs. {subtotal}</span>
            </div>
            <div className="flex justify-between">
              <span>Delivery Fee</span>
              <span>Rs. {DELIVERY_FEE}</span>
            </div>
            <div className="flex justify-between">
              <span>Discount</span>
              <span>-Rs. {discountValue}</span>
            </div>
            <div className="border-t border-[#59352A]/10 pt-3 text-lg font-black">
              <div className="flex justify-between">
                <span>Total</span>
                <span>Rs. {total}</span>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <label className="mb-2 block text-sm font-semibold text-[#59352A]">Promo code</label>
            <div className="flex gap-2">
              <input
                value={discountInput}
                onChange={(e) => setDiscountInput(e.target.value)}
                placeholder="FROSTY15"
                className="flex-1 rounded-full border border-[#59352A]/10 bg-[#FFF7E8] px-4 py-3"
              />
              <button onClick={handleApplyDiscount} className="rounded-full bg-[#59352A] px-4 py-3 text-sm font-semibold text-white">
                Apply
              </button>
            </div>
          </div>

          <Link to="/checkout" className="mt-6 block w-full rounded-full bg-[#FF6B9D] px-6 py-4 text-center font-bold text-white">
            Proceed to Checkout
          </Link>
          <Link to="/" className="mt-3 block text-center text-sm font-semibold text-[#FF6B9D]">
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
}
