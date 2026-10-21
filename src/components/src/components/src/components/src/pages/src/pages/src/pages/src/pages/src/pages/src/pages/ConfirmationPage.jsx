import { useLocation, Link } from "react-router-dom";

export default function ConfirmationPage() {
  const location = useLocation();
  const order = location.state?.order;

  if (!order) {
    return (
      <div className="section-container py-16">
        <div className="rounded-[32px] bg-white p-8 text-center shadow-soft">
          <h1 className="text-3xl font-black text-[#59352A]">No order found</h1>
          <Link to="/" className="mt-6 inline-block btn-primary">Back to Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="section-container py-16">
      <div className="mx-auto max-w-3xl rounded-[32px] bg-white p-8 text-center shadow-soft">
        <div className="label-pill">Order Confirmed</div>
        <h1 className="mt-4 text-4xl font-black text-[#59352A]">Thank you for your demo order!</h1>
        <p className="mt-3 text-[#59352A]/70">
          Your order has been created as a demo checkout. No real payment or backend processing is active.
        </p>

        <div className="mt-8 rounded-[24px] bg-[#FFF7E8] p-6 text-left">
          <div className="flex justify-between"><span className="font-semibold">Order Number</span><span>{order.orderNumber}</span></div>
          <div className="mt-3 flex justify-between"><span className="font-semibold">Payment</span><span>{order.paymentMethod}</span></div>
          <div className="mt-3 flex justify-between"><span className="font-semibold">Total</span><span>Rs. {order.total}</span></div>
        </div>

        <div className="mt-8 text-left">
          <h2 className="text-2xl font-black text-[#59352A]">Order Summary</h2>
          <div className="mt-4 space-y-3">
            {order.items.map((item) => (
              <div key={item.key} className="flex justify-between border-b border-[#59352A]/10 pb-2">
                <span>{item.name} x {item.quantity}</span>
                <span>Rs. {item.price * item.quantity}</span>
              </div>
            ))}
          </div>
        </div>

        <Link to="/" className="mt-8 inline-block btn-primary">Back to Home</Link>
      </div>
    </div>
  );
}
