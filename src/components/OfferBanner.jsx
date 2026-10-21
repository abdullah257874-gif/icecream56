import { Gift } from "lucide-react";

export default function OfferBanner() {
  return (
    <section className="section-container py-16">
      <div className="rounded-[36px] bg-gradient-to-r from-[#FF6B9D] via-[#F7B7CC] to-[#B8E6D0] p-[2px] shadow-card">
        <div className="rounded-[34px] bg-[#FFF7E8]/90 px-6 py-8 sm:px-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-2xl shadow-soft">
                <Gift className="text-[#FF6B9D]" />
              </div>
              <div>
                <div className="text-sm uppercase tracking-[0.18em] text-[#59352A]/60">Example offers only</div>
                <h3 className="mt-1 text-3xl font-black text-[#59352A]">Sweet Deals, Sweeter Moments!</h3>
              </div>
            </div>

            <button className="btn-primary">Shop Offers</button>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              "Buy 2 Scoops, Get 1 Extra Scoop",
              "15% Off Your First Order",
              "Family Ice Cream Box Special"
            ].map((offer) => (
              <div key={offer} className="rounded-[22px] bg-white p-5 text-center text-[#59352A] shadow-soft">
                {offer}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
