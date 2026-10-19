import noItem from "../assets/images/illustration-empty-cart.svg";
import { useState } from "react";

export default function Cart() {
  const [quantity, setQuantity] = useState(0);
  return (
    <div
      id="cart-container"
      className="md:col-span-1 w-full p-6 rounded-xl font-redhat bg-white h-fit shadow-sm"
    >
      {/* Cart Title */}
      <h3 className="text-custom-red text-xl font-bold mb-6">Your Cart (0)</h3>

      {/* Empty Cart Content */}
      <div className="flex flex-col items-center justify-center py-6">
        <img
          src={noItem}
          alt="Empty Cart Illustration"
          className="w-32 h-32 mb-4"
        />
        <p className="text-custom-rose-500 text-sm font-semibold">
          Your added items will appear here
        </p>
      </div>
    </div>
  );
}
