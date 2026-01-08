import { useNavigate } from "react-router-dom";

export default function Menu() {
  const navigate = useNavigate();

  const menuItems = [
    { name: "Creamy Pasta", price: "₹299", img: "/menu1.png" },
    { name: "Chicken Biryani", price: "₹499", img: "/menu2.png" },
    { name: "Ice Cream", price: "₹125", img: "/menu3.png" },
    { name: "Fresh Juice", price: "₹199", img: "/menu4.png" },
    { name: "Fresh Maggy", price: "₹119", img: "/menu5.png" },
    { name: "Special Pizza", price: "₹399", img: "/menu6.png" },
    { name: "Veg Sandwich", price: "₹129", img: "/menu7.png" },
    { name: "Hot Soup", price: "₹109", img: "/menu8.png" },
    { name: "BreakFast", price: "₹119", img: "/menu9.png" },
    { name: "Green Salad", price: "₹139", img: "/menu10.png" },
    { name: "Special Salad", price: "₹189", img: "/menu11.png" },
    { name: "Biryani", price: "₹179", img: "/menu12.png" },
  ];

  return (
    <section id="menu" className="w-full py-20 bg-green-50">
      <div className="max-w-7xl mx-auto px-4">

        <h2 className="text-4xl font-bold text-center">
          <span style={{ color: "#e63946" }}>Our</span>{" "}
          <span style={{ color: "#2a9d8f" }}>Popular Menu</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-14">
          {menuItems.map((dish, index) => (
            <div key={index} className="bg-white p-5 rounded-2xl shadow-md">
              <img
                src={dish.img}
                alt={dish.name}
                className="w-full h-40 object-cover rounded-xl"
              />

              <h3 className="text-xl font-semibold mt-4">{dish.name}</h3>
              <p className="text-green-600 font-bold">{dish.price}</p>

              <button
                onClick={() => navigate("/payment", { state: { dish } })}
                className="mt-4 w-full bg-[#2a9d8f] text-white py-2 rounded-xl"
              >
                Order Now
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
