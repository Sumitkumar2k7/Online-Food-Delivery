import hero from "../assets/hero.jpg";
import Scooter from "../assets/scooter.png";

export default function Hero() {
    return (
        <section
            id="home"
            className="w-full pt-28  from-green-50 to-white"
        >
            <div className="max-w-7xl mx-auto px-4 lg:px-8 grid grid-cols-1 lg:grid-cols-2 items-center gap-12">

                {/* Left Section */}
                <div>
                    <h1
                        className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
                        style={{ color: "#e63946" }}
                    >
                        Fresh & Delicious Food<br />
                        Delivered <span style={{ color: "#2a9d8f" }}>To Your Doorstep</span>
                    </h1>

                    <p className="text-gray-600 mt-4 text-lg">
                        We cook healthy, tasty and fresh meals every day.
                        Order now and enjoy fast delivery at your home.
                    </p>

                    <button className="mt-6 bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full text-lg font-medium shadow-md transition-all">
                        Order Now
                    </button>

                    <div className="flex lg:hidden justify-center mt-10">
                        <img
                            src={Scooter}
                            alt="Food delivery"
                            className="w-64 drop-shadow-xl"
                        />
                    </div>
                </div>

                {/* Right Section */}
                <div className="relative hidden lg:flex items-center justify-center">
                    <img
                        src={hero}
                        alt="Delicious Food"
                        className="w-[480px] drop-shadow-xl animate-float"
                    />

                    <img
                        src={Scooter}
                        alt="Delivery Man"
                        className="absolute -bottom-1 -right-10 w-48 drop-shadow-xl animate-bounce-slow"
                    />
                </div>

            </div>
        </section>
    );
}
