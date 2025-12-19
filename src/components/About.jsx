import aboutImg from "../assets/modernfood.png";

export default function About() {
  return (
    <section id="about" className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-14 items-center">

        <div className="flex justify-center">
          <img
            src={aboutImg}
            alt="About Food"
            className="w-[420px] rounded-3xl shadow-xl hover:scale-105 transition-transform duration-500"
          />
        </div>

        <div>
          <h2 className="text-4xl font-bold leading-tight">
            <span style={{ color: "#e63946" }}>About</span>{" "}
            <span style={{ color: "#2a9d8f" }}>FreshDish</span>
          </h2>

          <p className="text-gray-600 mt-4 text-lg leading-relaxed">
            FreshDish delivers fresh, healthy and delicious meals prepared by
            expert chefs. We use premium ingredients and ensure the highest
            food quality. Fast delivery and great taste — thats our promise.
          </p>

          <ul className="mt-6 space-y-3 text-gray-700">
            <li className="flex gap-3 items-start">
              <span className="w-3 h-3 mt-2 bg-green-600 rounded-full"></span>
              Fresh & Hygienic Food Everyday
            </li>

            <li className="flex gap-3 items-start">
              <span className="w-3 h-3 mt-2 bg-green-600 rounded-full"></span>
              100% Quality Ingredients & Expert Chefs
            </li>

            <li className="flex gap-3 items-start">
              <span className="w-3 h-3 mt-2 bg-green-600 rounded-full"></span>
              Fast Delivery To Your Home & Office
            </li>
          </ul>

          <button className="mt-8 bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full text-lg font-medium shadow-md transition">
            Learn More
          </button>
        </div>

      </div>
    </section>
  );
}
