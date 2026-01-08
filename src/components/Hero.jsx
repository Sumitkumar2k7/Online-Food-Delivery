export default function Hero() {
  return (
    <section id="home" className="w-full pt-28">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        <div>
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
            style={{ color: "#e63946" }}
          >
            Fresh & Delicious Food <br />
            Delivered <span style={{ color: "#2a9d8f" }}>To Your Doorstep</span>
          </h1>

          <p className="text-gray-600 mt-4 text-lg">
            We cook healthy, tasty and fresh meals every day.
            Order now and enjoy fast delivery at your home.
          </p>

          <button className="mt-6 bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full text-lg font-medium shadow-md">
            Order Now
          </button>

          <div className="flex lg:hidden justify-center mt-10">
            <img src="/scooter.png" alt="Delivery" className="w-64" />
          </div>
        </div>

        <div className="hidden lg:flex justify-center relative">
          <img src="/hero.jpg" alt="Food" className="w-[480px]" />
          <img
            src="/scooter.png"
            alt="Delivery Man"
            className="absolute -bottom-1 -right-10 w-48"
          />
        </div>

      </div>
    </section>
  );
}
