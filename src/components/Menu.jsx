import { useNavigate } from "react-router-dom";

import dish1 from "../assets/menu1.png";
import dish2 from "../assets/menu2.png";
import dish3 from "../assets/menu3.png";
import dish4 from "../assets/menu4.png";
import dish5 from "../assets/menu5.png";
import dish6 from "../assets/menu6.png";
import dish7 from "../assets/menu7.png";
import dish8 from "../assets/menu8.png";
import dish9 from "../assets/menu9.png";
import dish10 from "../assets/menu10.png";
import dish11 from "../assets/menu11.png";
import dish12 from "../assets/menu12.png";

export default function Menu() {
  const navigate = useNavigate();

  const menuItems = [
    { name: "Creamy Pasta", price: "₹299", img: dish1 },
    { name: "Chicken Biryani", price: "₹499", img: dish2 },
    { name: "Ice Cream", price: "₹125", img: dish3 },
    { name: "Fresh Juice", price: "₹199", img: dish4 },
    { name: "Fresh Maggy", price: "₹119", img: dish5 },
    { name: "Special Pizza", price: "₹399", img: dish6 },
    { name: "Veg Sandwich", price: "₹129", img: dish7 },
    { name: "Hot Soup", price: "₹109", img: dish8 },
    { name: "BreakFast", price: "₹119", img: dish9 },
    { name: "Green Salad", price: "₹139", img: dish10 },
    { name: "Special Salad", price: "₹189", img: dish11 },
    { name: "Biryani", price: "₹179", img: dish12 },
  ];

  const handleOrderNow = (dish) => {
    navigate("/payment", { state: { dish } });
  };

  return (
    <section id="menu" className="w-full py-20 bg-green-50">
      <div className="max-w-7xl mx-auto px-4">

        <h2 className="text-4xl font-bold text-center">
          <span style={{ color: "#e63946" }}>Our</span>{" "}
          <span style={{ color: "#2a9d8f" }}>Popular Menu</span>
        </h2>

        <p className="text-center text-gray-600 mt-2">
          Choose your favourite meals from our delicious food menu.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-14">
          {menuItems.map((dish, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all p-5"
            >
              <img
                src={dish.img}
                alt={dish.name}
                className="w-full h-40 object-cover rounded-xl"
              />

              <h3 className="text-xl font-semibold mt-4 text-gray-800">
                {dish.name}
              </h3>

              <p className="text-green-600 font-bold text-lg mt-1">
                {dish.price}
              </p>

              <button
                onClick={() => handleOrderNow(dish)}
                className="mt-4 w-full bg-[#2a9d8f] hover:bg-[#e63946] text-white py-2 rounded-xl transition"
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
