import chef1 from "../assets/AnayaSingh.jpg";
import chef2 from "../assets/amritamorya.png";
import chef3 from "../assets/rinathomas.png"

export default function Chefs() {
  const chefs = [
    { name: "Anaya Singh", role: "Head Chef", img: chef1 },
    { name: "Amrita Morya", role: "Senior Chef", img: chef2 },
    { name: "Rina Thomas", role: "Pastry Specialist", img: chef3 },
  ];

  return (
    <section id="chefs" className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">

        <h2 className="text-4xl font-bold text-center">
          <span style={{ color: "#e63946" }}>Meet Our</span>{" "}
          <span style={{ color: "#2a9d8f" }}>Expert Chefs</span>
        </h2>

        <p className="text-center text-gray-600 mt-2">
          Our talented chefs bring delicious dishes to your table every day.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-14">
          {chefs.map((chef, index) => (
            <div
              key={index}
              className="bg-green-50 p-6 rounded-2xl shadow-md hover:shadow-xl transition-all text-center"
            >
              <img
                src={chef.img}
                alt={chef.name}
                className="w-40 h-40 object-cover rounded-full mx-auto shadow-lg"
              />

              <h3 className="text-2xl font-semibold text-gray-800 mt-6">
                {chef.name}
              </h3>

              <p className="text-green-600 font-medium">{chef.role}</p>

              <p className="text-gray-600 mt-3 text-sm">
                Cooking with passion and creativity to make your meals special.
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
