import React from "react";

/**
 * Coffee Classic Landing Page
 *
 * Design System: Velvet Roast
 * Primary Color: #4E342E
 * Typography: Noto Serif (Headings), Manrope (Body)
 */

type MenuCardProps = {
  title: string;
  desc: string;
  price: string | number;
  image: string;
  label?: string;
};

const TopAppBar = () => (
  <header className="fixed top-0 w-full z-50 bg-[#fef8f5]/80 backdrop-blur-xl shadow-[0_32px_64px_-12px_rgba(29,27,26,0.06)] px-8 py-4 flex justify-between items-center max-w-7xl mx-auto left-1/2 -translate-x-1/2">
    <div className="flex items-center gap-2">
      <span className="material-icons text-[#361f1a]">local_cafe</span>
      <h1 className="font-['Noto_Serif'] text-2xl font-bold tracking-tighter text-[#361f1a]">
        Coffee Classic
      </h1>
    </div>
    <button className="bg-[#361f1a] text-[#fef8f5] px-6 py-2 rounded-full font-medium transition-all active:scale-95">
      Order Now
    </button>
  </header>
);

const Hero = () => (
  <section className="relative h-[80vh] flex items-center justify-center overflow-hidden pt-20">
    <div className="absolute inset-0 bg-[url('/images/Picture5.png')] bg-cover bg-center">
      <div className="absolute inset-0 bg-black/40" />
    </div>
    <div className="relative z-10 text-center px-6 max-w-2xl">
      <span className="text-[#fef8f5] font-['Manrope'] tracking-[0.2em] uppercase text-xs mb-4 block">
        Crafted with Care
      </span>
      <h2 className="font-['Noto_Serif'] text-6xl md:text-7xl text-[#fef8f5] leading-[1.1] mb-8 italic">
        Your Daily Brew, Classic Style.
      </h2>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button className="bg-[#361f1a] text-[#fef8f5] px-8 py-4 rounded-full font-bold shadow-xl hover:scale-105 transition-transform">
          Visit Our Truck
        </button>
        <button className="bg-[#d4e2bc] text-[#361f1a] px-8 py-4 rounded-full font-bold shadow-xl hover:scale-105 transition-transform">
          View Full Menu
        </button>
      </div>
    </div>
  </section>
);

const Heritage = () => (
  <section className="py-24 px-8 bg-[#fef8f5]">
    <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-16 items-center">
      <div className="relative">
        <img
          src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80"
          alt="Coffee Beans"
          className="rounded-[2rem] shadow-2xl grayscale"
        />
        <div className="absolute -bottom-10 -right-6 bg-white p-8 rounded-2xl shadow-xl max-w-[280px]">
          <p className="font-['Noto_Serif'] italic text-[#504442] text-sm">
            "We don't just pour coffee; we pour memories of the quiet
            countryside."
          </p>
        </div>
      </div>
      <div>
        <h3 className="font-['Noto_Serif'] text-5xl text-[#361f1a] mb-8 leading-tight">
          Rustic Heritage, Modern Precision
        </h3>
        <p className="text-[#504442] font-['Manrope'] mb-6 leading-relaxed">
          It started with a 1964 vintage truck and a passion for the perfect
          pour. Our journey began in the rolling hills of the countryside, where
          time moves a little slower and quality is the only currency that
          matters.
        </p>
        <p className="text-[#504442] font-['Manrope'] mb-8 leading-relaxed">
          Today, Coffee Classic continues that tradition. Every bean is
          ethically sourced, every roast is intentional, and every cup is served
          with the same warmth as that first morning in the truck.
        </p>
        <button className="flex items-center gap-2 font-bold text-[#361f1a] group">
          Read Our Full Story{" "}
          <span className="material-icons group-hover:translate-x-1 transition-transform">
            arrow_forward
          </span>
        </button>
      </div>
    </div>
  </section>
);

const MenuCard = ({ title, desc, price, image, label }: MenuCardProps) => (
  <div className="bg-white rounded-[2rem] p-4 shadow-[0_20px_40px_rgba(0,0,0,0.04)] hover:shadow-xl transition-shadow border border-[#e7e1df]">
    <div className="aspect-square rounded-2xl overflow-hidden mb-6">
      <img src={image} alt={title} className="w-full h-full object-cover" />
    </div>
    <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#8b736f] block mb-2">
      {label}
    </span>
    <h4 className="font-['Noto_Serif'] text-2xl text-[#361f1a] mb-2">
      {title}
    </h4>
    <p className="text-sm text-[#504442] font-['Manrope'] mb-6 line-clamp-2">
      {desc}
    </p>
    <div className="flex justify-between items-center">
      <span className="font-['Noto_Serif'] font-bold text-xl text-[#361f1a]">
        ${price}
      </span>
      <button className="p-2 bg-[#fef8f5] rounded-full text-[#361f1a] hover:bg-[#361f1a] hover:text-[#fef8f5] transition-colors">
        <span className="material-icons">add</span>
      </button>
    </div>
  </div>
);

const TestimonialCard = ({ quote, name, role, avatar, dark }) => (
  <div
    className={`p-8 rounded-[2rem] ${dark ? "bg-[#361f1a] text-[#fef8f5]" : "bg-white text-[#361f1a]"} shadow-lg`}
  >
    <div className="flex gap-1 mb-6 text-[#526442]">
      {[...Array(5)].map((_, i) => (
        <span key={i} className="material-icons text-sm">
          star
        </span>
      ))}
    </div>
    <p
      className={`font-['Manrope'] italic mb-8 text-lg leading-relaxed ${dark ? "text-[#d4c3bf]" : "text-[#504442]"}`}
    >
      "{quote}"
    </p>
    <div className="flex items-center gap-4">
      <img
        src={avatar}
        alt={name}
        className="w-12 h-12 rounded-full grayscale"
      />
      <div>
        <p className="font-bold">{name}</p>
        <p
          className={`text-[10px] uppercase tracking-widest ${dark ? "text-[#8b736f]" : "text-[#8b736f]"}`}
        >
          {role}
        </p>
      </div>
    </div>
  </div>
);

const CoffeeClassicApp = () => {
  return (
    <div className="min-h-screen font-['Manrope'] bg-[#fef8f5] text-[#361f1a]">
      <TopAppBar />

      <main>
        <Hero />

        <Heritage />

        <section className="py-24 px-8 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="font-['Noto_Serif'] text-5xl mb-4">
              The Curator's Selection
            </h3>
            <p className="text-[#504442] max-w-md mx-auto">
              Hand-picked favorites that define our signature roasting profile.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <MenuCard
              label="Concentrated Heart"
              title="Pure Espresso"
              desc="A double shot of our house-roasted Heritage blend. Notes of dark chocolate and toasted walnut."
              price="4.50"
              image="https://images.unsplash.com/photo-1510707577719-5d6815a05335?auto=format&fit=crop&q=80"
            />
            <MenuCard
              label="Velvet Texture"
              title="Heritage Latte"
              desc="Micro-foamed local dairy poured over our signature roast. Smooth, creamy, and balanced."
              price="5.75"
              image="https://images.unsplash.com/photo-1536939459926-301728717817?auto=format&fit=crop&q=80"
            />
            <MenuCard
              label="18-Hour Steep"
              title="Cold Brew"
              desc="Steeped in small batches for low acidity and maximum floral notes."
              price="6.25"
              image="https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&q=80"
            />
          </div>
        </section>

        <section className="py-24 px-8 bg-[#f8f2f0]">
          <div className="text-center mb-16">
            <h3 className="font-['Noto_Serif'] text-5xl mb-4">
              Loved by the Locals
            </h3>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <TestimonialCard
              quote="The atmosphere is as rich as the coffee. It feels like stepping into a peaceful sanctuary every morning."
              name="Julian Reed"
              role="Architect"
              avatar="https://i.pravatar.cc/150?u=julian"
            />
            <TestimonialCard
              dark
              quote="Best latte in the city. Their dedication to the 'Slow Digital' lifestyle is something you can actually taste in every cup."
              name="Elena Vance"
              role="Gallery Curator"
              avatar="https://i.pravatar.cc/150?u=elena"
            />
            <TestimonialCard
              quote="Finally, a coffee shop that understands heritage. The vintage truck is charming, but the brew is the real star."
              name="Marcus Thorne"
              role="Photographer"
              avatar="https://i.pravatar.cc/150?u=marcus"
            />
          </div>
        </section>

        <section className="py-24 px-8">
          <div className="bg-[#d4e2bc] rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden">
            <div className="relative z-10">
              <span className="material-icons text-6xl text-[#361f1a]/20 mb-6">
                local_shipping
              </span>
              <h3 className="font-['Noto_Serif'] text-5xl md:text-6xl mb-8">
                Ready for a Better Brew?
              </h3>
              <p className="text-[#361f1a]/80 max-w-xl mx-auto mb-12 text-lg">
                Join us at the truck or order ahead for a taste of the
                countryside in your daily commute.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-[#361f1a] text-[#fef8f5] px-10 py-5 rounded-full font-bold shadow-2xl">
                  Find Our Truck
                </button>
                <button className="border-2 border-[#361f1a] text-[#361f1a] px-10 py-5 rounded-full font-bold">
                  Explore the Menu
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#e7e1df] px-12 py-16 rounded-t-[3rem] mt-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div>
            <h2 className="font-['Noto_Serif'] text-2xl font-bold text-[#361f1a] mb-2">
              Coffee Classic
            </h2>
            <p className="text-sm text-[#504442]">
              © 2024 Coffee Classic. Hand-poured in the countryside.
            </p>
          </div>
          <nav className="flex gap-8">
            {["Menu", "Heritage", "Brew Guides", "Locations"].map((link) => (
              <a
                key={link}
                href="#"
                className="text-sm font-medium text-[#504442] hover:text-[#361f1a] transition-colors"
              >
                {link}
              </a>
            ))}
          </nav>
          <div className="flex gap-6 text-[#361f1a]">
            <span className="material-icons cursor-pointer hover:opacity-70">
              local_cafe
            </span>
            <span className="material-icons cursor-pointer hover:opacity-70">
              eco
            </span>
            <span className="material-icons cursor-pointer hover:opacity-70">
              public
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CoffeeClassicApp;
