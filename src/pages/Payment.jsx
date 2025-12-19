import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function Payment() {
  const location = useLocation();
  const dish = location.state?.dish;

  // Load Razorpay script
  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  // Load script on mount
  useEffect(() => {
    loadRazorpayScript();
  }, []);

  // Handle Payment
  const handlePayment = async () => {
    if (!dish) {
      alert("No dish selected!");
      return;
    }

    const loaded = await loadRazorpayScript();
    if (!loaded) {
      alert("Razorpay SDK failed to load. Check your internet.");
      return;
    }

    const options = {
      key: "rzp_test_RiksrCFbdFEKhn",
      amount: parseInt(dish.price.replace("₹", "")) * 100,
      currency: "INR",
      name: "FreshDish",
      description: dish.name,

      handler: function (response) {
        alert(`Payment successful! Payment ID: ${response.razorpay_payment_id}`);
      },

      prefill: {
        name: "Sumit Kumar",
        email: "customer@example.com",
        contact: "XXXXXXXXXX",
      },

      theme: { color: "#2a9d8f" },
    };

    const razorpay = new window.Razorpay(options);
    razorpay.open();
  };

  return (
    <div className="min-h-screen bg-green-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-md w-full">
        
        <h1 className="text-3xl font-bold text-green-700 text-center mb-6">
          FreshDish Payment
        </h1>

        {/* Dish Details */}
        {dish ? (
          <>
            <img
              src={dish.img}
              alt={dish.name}
              className="w-48 h-48 mx-auto rounded-2xl object-cover shadow-lg"
            />
            <h2 className="text-2xl font-semibold mt-4 text-center">
              {dish.name}
            </h2>
            <p className="text-center text-green-600 font-bold mt-1">
              {dish.price}
            </p>
          </>
        ) : (
          <p className="text-center text-gray-600 mt-4">
            No order selected.
          </p>
        )}

        {/* Pay Button */}
        <button
          onClick={handlePayment}
          className="mt-8 w-full py-3 rounded-xl bg-green-600 text-white font-semibold hover:bg-green-700 transition"
        >
          Pay Now
        </button>

        <p className="text-center text-gray-500 mt-4 text-sm">
          Safe and secure payment
        </p>
      </div>
    </div>
  );
}
