import React from "react";
import appImage from "../assets/movilapp.png";
import appStore from "../assets/app1.png";
import googlePlay from "../assets/app2.png";

function AppSection() {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        
        <div>
          <h2 className="text-4xl font-bold mb-4 text-gray-800">
            Download Our App
          </h2>

          <p className="text-gray-600 text-lg mb-6">
            Order food quickly with our mobile app. Track your order live,
            get instant notifications, and enjoy exclusive app-only discounts.
          </p>

          <div className="flex gap-4">
            <img src={appStore} alt="App Store" className="h-12" />
            <img src={googlePlay} alt="Google Play" className="h-12" />
          </div>
        </div>

        <div className="flex justify-center">
          <img src={appImage} alt="App Preview" className="w-72 drop-shadow-xl" />
        </div>

      </div>
    </section>
  );
}

export default AppSection;
