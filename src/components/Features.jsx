export default function Features() {
  const features = [
    {
      title: "Fresh Food",
      desc: "We deliver freshly cooked meals using high-quality ingredients.",
      img: "/menu2.png",
    },
    {
      title: "Easy Payments",
      desc: "Pay using UPI, Debit/Credit Cards, Net Banking, or Wallets.",
      img: "/payments.png",
    },
    {
      title: "Fast Delivery",
      desc: "Your order arrives quickly at your doorstep — hot and fresh.",
      img: "/scooter.png",
    },
  ];

  return (
    <section id="features" className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">

        <h2 className="text-4xl font-bold text-center" style={{ color: "#e63946" }}>
          Why Choose <span style={{ color: "#2a9d8f" }}>FreshDish?</span>
        </h2>

        <p className="text-center text-gray-600 mt-2">
          We offer the best quality service with fresh food and super-fast delivery.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-14">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-green-50 rounded-2xl p-8 text-center shadow-md hover:shadow-lg transition-all"
            >
              <img src={item.img} alt={item.title} className="w-48 mx-auto mb-2" />
              <h3 className="text-3xl font-bold mb-4">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
