import { Clock3, Heart, Leaf, Star } from "lucide-react";

const features = [
  {
    title: "Fresh Ingredients",
    text: "Made with carefully selected ingredients.",
    icon: Leaf
  },
  {
    title: "Amazing Flavors",
    text: "From timeless classics to exciting new creations.",
    icon: Star
  },
  {
    title: "Fast Delivery",
    text: "Enjoy your favorite treats delivered to your door.",
    icon: Clock3
  },
  {
    title: "Made with Love",
    text: "Every scoop is prepared with care.",
    icon: Heart
  }
];

export default function FeaturesSection() {
  return (
    <section className="section-container py-16">
      <div className="mb-10 text-center">
        <div className="label-pill">Why Choose Us</div>
        <h2 className="mt-4 text-3xl font-black text-[#59352A] sm:text-4xl">A scoop above the rest</h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {features.map(({ title, text, icon: Icon }) => (
          <div key={title} className="rounded-[30px] border border-[#59352A]/10 bg-white/80 p-6 text-center shadow-soft transition hover:-translate-y-1">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#FFF7E8] text-[#FF6B9D]">
              <Icon size={28} />
            </div>
            <h3 className="text-xl font-black text-[#59352A]">{title}</h3>
            <p className="mt-3 text-sm text-[#59352A]/70">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
