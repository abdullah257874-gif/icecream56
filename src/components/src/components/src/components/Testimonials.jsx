import { Star } from "lucide-react";
import { topReviews } from "../data/products";

export default function Testimonials() {
  return (
    <section className="section-container py-16">
      <div className="mb-10 text-center">
        <div className="label-pill">Customer Reviews</div>
        <h2 className="mt-4 text-3xl font-black text-[#59352A] sm:text-4xl">Sweet words from happy scoopers</h2>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {topReviews.map((review) => (
          <div key={review.name} className="rounded-[30px] border border-[#59352A]/10 bg-white p-6 shadow-soft">
            <div className="flex items-center gap-4">
              <img
                src={review.image}
                alt={review.name}
                className="h-14 w-14 rounded-full object-cover"
              />
              <div>
                <h3 className="font-black text-[#59352A]">{review.name}</h3>
                <div className="mt-1 flex">
                  {Array.from({ length: review.rating }).map((_, index) => (
                    <Star key={index} className="h-4 w-4 fill-[#FFB703] text-[#FFB703]" />
                  ))}
                </div>
              </div>
            </div>

            <p className="mt-4 text-[#59352A]/75">{review.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
