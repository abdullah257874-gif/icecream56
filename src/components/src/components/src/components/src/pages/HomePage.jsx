import HeroSection from "../components/HeroSection";
import OfferBanner from "../components/OfferBanner";
import FeaturesSection from "../components/FeaturesSection";
import Testimonials from "../components/Testimonials";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";

export default function HomePage() {
  return (
    <>
      <HeroSection />

      <section id="flavors" className="section-container py-16">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="label-pill">Our Delicious Flavors</div>
            <h2 className="mt-4 text-3xl font-black text-[#59352A] sm:text-4xl">Find your favorite scoop.</h2>
          </div>

          <div className="flex flex-wrap gap-3">
            {["All", "Chocolate", "Fruit", "Classic", "Premium"].map((cat) => (
              <button key={cat} className="rounded-full border border-[#59352A]/10 bg-white px-4 py-2 text-sm font-semibold text-[#59352A]">
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <OfferBanner />

      <FeaturesSection />

      <Testimonials />

      <section id="about" className="section-container py-16">
        <div className="grid items-center gap-8 rounded-[36px] border border-[#59352A]/10 bg-white/80 p-6 shadow-soft md:grid-cols-2">
          <div className="overflow-hidden rounded-[28px]">
            <img
              src="https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=1000&q=80"
              alt="Ice cream shop and family enjoying dessert"
              className="h-[420px] w-full object-cover"
            />
          </div>

          <div>
            <div className="label-pill">Our Story</div>
            <h2 className="mt-4 text-3xl font-black text-[#59352A] sm:text-4xl">Our Story, One Scoop at a Time</h2>
            <p className="mt-5 text-[#59352A]/75">
              Frosty Dreams was created to bring people together through delicious ice cream, joyful experiences, and creative flavor adventures. We believe good dessert is more than a treat — it is a moment of connection, laughter, and happiness.
            </p>
            <p className="mt-4 text-[#59352A]/75">
              Our mission is simple: use carefully selected ingredients, craft unforgettable flavors, and make every scoop feel special. We are passionate about creating new ideas while staying true to the comforting classics people love.
            </p>
            <button className="mt-6 btn-primary">Discover Our Story</button>
          </div>
        </div>
      </section>

      <section className="section-container py-16">
        <div className="mb-8 text-center">
          <div className="label-pill">Gallery</div>
          <h2 className="mt-4 text-3xl font-black text-[#59352A] sm:text-4xl">A little sweetness, in every frame</h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              img: "https://images.unsplash.com/photo-1570197788417-0e823ef4b9d6?auto=format&fit=crop&w=900&q=80",
              alt: "Strawberry ice cream cone",
              title: "Strawberry cone"
            },
            {
              img: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=900&q=80",
              alt: "Chocolate sundae",
              title: "Chocolate sundae"
            },
            {
              img: "https://images.unsplash.com/photo-1577805947697-89e18249d767?auto=format&fit=crop&w=900&q=80",
              alt: "Mango ice cream",
              title: "Mango scoop"
            },
            {
              img: "https://images.unsplash.com/photo-1525059696034-4967a729002e?auto=format&fit=crop&w=900&q=80",
              alt: "Waffle cone",
              title: "Waffle cone"
            },
            {
              img: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?auto=format&fit=crop&w=900&q=80",
              alt: "Ice cream tubs",
              title: "Ice cream tubs"
            },
            {
              img: "https://images.unsplash.com/photo-1517093602195-b40af9688b46?auto=format&fit=crop&w=900&q=80",
              alt: "Families enjoying ice cream",
              title: "Family treat"
            }
          ].map((item) => (
            <div key={item.title} className="group overflow-hidden rounded-[30px] bg-white shadow-soft">
              <img src={item.img} alt={item.alt} className="h-72 w-full object-cover transition duration-500 group-hover:scale-105" />
              <div className="p-4 text-center font-semibold text-[#59352A]">{item.title}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-container py-16">
        <div className="rounded-[36px] bg-[#59352A] p-8 text-center text-white shadow-card">
          <div className="label-pill !bg-white/10 !text-white border-white/20">Newsletter</div>
          <h2 className="mt-4 text-3xl font-black">Get the Scoop!</h2>
          <p className="mx-auto mt-2 max-w-2xl text-white/80">
            Sign up for new flavors, special deals, and sweet surprises.
          </p>

          <form className="mx-auto mt-6 flex max-w-xl flex-col gap-3 sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-white placeholder:text-white/60 focus:outline-none"
            />
            <button type="submit" className="rounded-full bg-[#FF6B9D] px-6 py-3 font-semibold text-white">
              Subscribe
            </button>
          </form>
        </div>
      </section>

      <section id="contact" className="section-container py-16">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-[32px] bg-white p-8 shadow-soft">
            <div className="label-pill">Contact Us</div>
            <h2 className="mt-4 text-3xl font-black text-[#59352A]">We would love to hear from you</h2>

            <form className="mt-6 grid gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <input type="text" placeholder="Name" className="rounded-2xl border border-[#59352A]/10 bg-[#FFF7E8] px-4 py-3 outline-none ring-0" />
                <input type="email" placeholder="Email" className="rounded-2xl border border-[#59352A]/10 bg-[#FFF7E8] px-4 py-3 outline-none ring-0" />
              </div>
              <input type="text" placeholder="Subject" className="rounded-2xl border border-[#59352A]/10 bg-[#FFF7E8] px-4 py-3 outline-none ring-0" />
              <textarea rows="5" placeholder="Message" className="rounded-2xl border border-[#59352A]/10 bg-[#FFF7E8] px-4 py-3 outline-none ring-0" />
              <button type="submit" className="btn-primary w-fit">Send Message</button>
            </form>
          </div>

          <div className="rounded-[32px] bg-[#FFF7E8] p-8 shadow-soft">
            <h3 className="text-2xl font-black text-[#59352A]">Get in touch</h3>

            <div className="mt-6 space-y-4 text-[#59352A]/75">
              <p>Phone: +92 300 0000000</p>
              <p>Email: hello@frostydreams.com</p>
              <p>Address: 24 Sweet Avenue, Gulshan, Karachi</p>
              <p>Opening Hours: Mon-Sun • 11:00 AM - 11:00 PM</p>
            </div>

            <div className="mt-6">
              <a href="https://wa.me/923000000000" target="_blank" rel="noreferrer" className="inline-flex rounded-full bg-[#25D366] px-5 py-3 font-semibold text-white">
                WhatsApp Order
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
