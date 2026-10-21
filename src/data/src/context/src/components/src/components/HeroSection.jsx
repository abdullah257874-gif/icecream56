import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="section-container relative overflow-hidden py-12 sm:py-16 lg:py-20">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-8 top-14 h-24 w-24 rounded-full bg-[#FF6B9D]/20 blur-2xl" />
        <div className="absolute right-12 top-12 h-28 w-28 rounded-full bg-[#DCD1FF]/40 blur-2xl" />
        <div className="absolute bottom-10 left-1/2 h-32 w-32 -translate-x-1/2 rounded-full bg-[#B8E6D0]/40 blur-3xl" />
      </div>

      <div className="grid items-center gap-10 lg:grid-cols-2">
        <div>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#FF6B9D]/20 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-[#59352A] shadow-soft">
            <Sparkles className="h-4 w-4 text-[#FF6B9D]" />
            Freshly Made • Happiness Delivered
          </div>
          <h1 className="max-w-xl text-4xl font-black leading-tight text-[#59352A] sm:text-5xl lg:text-6xl">
            Make Every Day Sweeter!
          </h1>
          <p className="mt-5 max-w-lg text-lg text-[#59352A]/75">
            Discover handcrafted ice cream made with creamy goodness, delicious flavors, and a little bit of magic.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link to="/#flavors" className="btn-primary inline-flex items-center gap-2">
              Order Ice Cream <ArrowRight size={18} />
            </Link>
            <Link to="/#flavors" className="btn-secondary">
              Explore Flavors
            </Link>
          </div>

          <div className="mt-10 flex items-center gap-6 text-sm text-[#59352A]/75">
            <div>
              <div className="text-2xl font-black text-[#59352A]">4.9/5</div>
              <div>Average rating</div>
            </div>
            <div>
              <div className="text-2xl font-black text-[#59352A]">15 min</div>
              <div>Fast delivery</div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-8 top-10 h-28 w-28 rounded-full bg-[#DCD1FF] opacity-80 blur-3xl" />
          <div className="absolute -right-8 bottom-6 h-28 w-28 rounded-full bg-[#B8E6D0] opacity-80 blur-3xl" />

          <div className="relative rounded-[36px] border border-white/60 bg-white/70 p-4 shadow-card backdrop-blur">
            <div className="overflow-hidden rounded-[30px] bg-gradient-to-br from-[#FFE7F0] via-white to-[#E7F9EE]">
              <img
                src="https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=1200&q=80"
                alt="Premium strawberry ice cream cone"
                className="h-[500px] w-full object-cover"
              />
            </div>

            <div className="absolute left-8 top-10 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-[#59352A] shadow-soft">
              Premium Ice Cream
            </div>

            <div className="absolute bottom-8 right-8 rounded-[24px] bg-[#59352A] px-4 py-3 text-white shadow-soft">
              <div className="text-xs uppercase tracking-[0.2em] text-white/70">Today’s Treat</div>
              <div className="mt-1 text-2xl font-black">Strawberry Bliss</div>
            </div>
          </div>

          <div className="absolute -left-6 bottom-10 rounded-full border border-[#FF6B9D]/20 bg-white px-3 py-2 text-sm font-semibold text-[#59352A] shadow-soft">
            🍓 Fresh Scoop
          </div>
          <div className="absolute right-6 top-8 rounded-full border border-[#B8E6D0]/40 bg-white px-3 py-2 text-sm font-semibold text-[#59352A] shadow-soft">
            ✨ Sweet Joy
          </div>
        </div>
      </div>
    </section>
  );
}
