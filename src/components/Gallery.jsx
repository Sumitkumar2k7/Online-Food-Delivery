export default function Gallery() {
  const galleryImages = [
    "/dis1.jpg",
    "/dis2.jpg",
    "/dis3.jpg",
    "/dis4.jpg",
    "/dis5.jpg",
    "/dis6.jpg",
    "/dis7.jpg",
    "/dis8.jpg",
  ];

  return (
    <section id="gallery" className="w-full py-20 bg-green-50">
      <div className="max-w-7xl mx-auto px-4">

        <h2 className="text-4xl font-bold text-center">
          <span style={{ color: "#e63946" }}>Food</span>{" "}
          <span style={{ color: "#2a9d8f" }}>Gallery</span>
        </h2>

        <p className="text-center text-gray-600 mt-2">
          Explore our delicious food collection — fresh, tasty and beautiful.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mt-14">
          {galleryImages.map((img, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all"
            >
              <img
                src={img}
                alt="Food"
                className="w-full h-40 object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
