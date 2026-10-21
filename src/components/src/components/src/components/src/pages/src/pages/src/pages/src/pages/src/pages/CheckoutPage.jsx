import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

const DELIVERY_FEE = 250;

export default function CheckoutPage() {
  const navigate = useNavigate();
  const { cart, subtotal, clearCart } = useCart();

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    area: "",
    instructions: ""
  });
  const [errors, setErrors] = useState({});
  const [paymentMethod, setPaymentMethod] = useState("Cash on Delivery");
  const [discount, setDiscount] = useState(0);

  const finalTotal = subtotal + DELIVERY_FEE - discount;

  const validate = () => {
    const nextErrors = {};
    if (!formData.fullName.trim()) nextErrors.fullName = "Full name is required.";
    if (!formData.phone.trim()) nextErrors.phone = "Phone number is required.";
    else if (!/^\+?[0-9]{10,15}$/.test(formData.phone.trim())) nextErrors.phone = "Please enter a valid phone number.";
    if (!formData.address.trim()) nextErrors.address = "Delivery address is required.";
    if (!formData.city.trim()) nextErrors.city = "City is required.";
    if (!formData.area.trim()) nextErrors.area = "Area is required.";

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    const order = {
      orderNumber: `FD-${Math.floor(100000 + Math.random() * 900000)}`,
      items: cart,
      customer: formData,
      paymentMethod,
      subtotal,
      deliveryFee: DELIVERY_FEE,
      discount,
      total: finalTotal
    };

    localStorage.setItem("frostyRecentOrder", JSON.stringify(order));
    clearCart();
    navigate("/confirmation", { state: { order } });
  };

  return (
    <div className="section-container py-12">
      <h1 className="text-4xl font-black text-[#59352A]">Demo Checkout</h1>
      <p className="mt-2 text-[#59352A]/70">This is a demo checkout until a real order-processing backend is connected.</p>

      <div className="mt-8 grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
        <form onSubmit={handleSubmit} className="rounded-[30px] bg-white p-6 shadow-soft">
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-semibold">Full Name</label>
              <input
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className="w-full rounded-2xl border border-[#59352A]/10 bg-[#FFF7E8] px-4 py-3"
              />
              {errors.fullName && <p className="mt-1 text-sm text-red-500">{errors.fullName}</p>}
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold">Phone Number</label>
              <input
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full rounded-2xl border border-[#59352A]/10 bg-[#FFF7E8] px-4 py-3"
              />
              {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
            </div>

            <div className="md:col-span-2">
              <label className="mb-2 block text-sm font-semibold">Email Address (optional)</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full rounded-2xl border border-[#59352A]/10 bg-[#FFF7E8] px-4 py-3"
              />
            </div>

            <div className="md:col-span-2">
              <label className="mb-2 block text-sm font-semibold">Delivery Address</label>
              <textarea
                rows="3"
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                className="w-full rounded-2xl border border-[#59352A]/10 bg-[#FFF7E8] px-4 py-3"
              />
              {errors.address && <p className="mt-1 text-sm text-red-500">{errors.address}</p>}
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold">City</label>
              <input
                value={formData.city}
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                className="w-full rounded-2xl border border-[#59352A]/10 bg-[#FFF7E8] px-4 py-3"
              />
              {errors.city && <p className="mt-1 text-sm text-red-500">{errors.city}</p>}
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold">Area / Neighborhood</label>
              <input
                value={formData.area}
                onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                className="w-full rounded-2xl border border-[#59352A]/10 bg-[#FFF7E8] px-4 py-3"
              />
              {errors.area && <p className="mt-1 text-sm text-red-500">{errors.area}</p>}
            </div>

            <div className="md:col-span-2">
              <label className="mb-2 block text-sm font-semibold">Delivery Instructions</label>
              <textarea
                rows="2"
                value={formData.instructions}
                onChange={(e) => setFormData({ ...formData, instructions: e.target.value })}
                className="w-full rounded-2xl border border-[#59352A]/10 bg-[#FFF7E8] px-4 py-3"
              />
            </div>
          </div>

          <div className="mt-8">
            <div className="mb-3 text-sm font-semibold uppercase tracking-[0.12em] text-[#59352A]/60">Payment Method</div>
            <div className="space-y-3">
              {["Cash on Delivery", "Bank Transfer", "Online Payment"].map((method) => (
                <label key={method} className="flex items-center gap-3 rounded-2xl border border-[#59352A]/10 bg-[#FFF7E8] px-4 py-3">
                  <input
                    type="radio"
                    name="payment"
                    checked={paymentMethod === method}
                    onChange={() => setPaymentMethod(method)}
                  />
                  <span>{method}</span>
                </label>
              ))}
            </div>
          </div>

          <button type="submit" className="mt-8 btn-primary">Place Demo Order</button>
        </form>

        <aside className="rounded-[30px] bg-[#59352A] p-6 text-white shadow-soft">
          <h2 className="text-2xl font-black">Order Summary</h2>

          <div className="mt-6 space-y-4">
            {cart.map((item) => (
              <div key={item.key} className="flex items-center justify-between gap-3 border-b border-white/10 pb-3">
                <div>
                  <div className="font-semibold">{item.name}</div>
                  <div className="text-sm text-white/70">Qty: {item.quantity}</div>
                </div>
                <div>Rs. {item.price * item.quantity}</div>
              </div>
            ))}
          </div>

          <div className="mt-6 space-y-2 text-sm">
            <div className="flex justify-between"><span>Subtotal</span><span>Rs. {subtotal}</span></div>
            <div className="flex justify-between"><span>Delivery</span><span>Rs. {DELIVERY_FEE}</span></div>
            <div className="flex justify-between"><span>Discount</span><span>-Rs. {discount}</span></div>
            <div className="flex justify-between border-t border-white/10 pt-3 text-lg font-black">
              <span>Total</span><span>Rs. {finalTotal}</span>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
