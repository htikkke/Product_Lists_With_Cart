import noItem from "../assets/images/illustration-empty-cart.svg";
import { useContext } from "react";
import { CartContext } from "./cartContext";

export default function Cart() {
  const { cart, handleUpdateCart } = useContext(CartContext);

  const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
  const orderTotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  return (
    <div
      id="cart-container"
      className="md:col-span-1 w-full p-6 rounded-xl font-redhat bg-white h-fit shadow-sm"
    >
      {/* Cart Title */}
      <h3 className="text-custom-red text-xl font-bold mb-6">
        Your Cart ({totalQuantity})
      </h3>
      {cart.length === 0 ? (
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
      ) : (
        <div className="flex flex-col">
          <div className="divide-y divide-custom-rose-100">
            {cart.map((item) => (
              <div
                key={item.name}
                className="py-4 flex items-center justify-between"
              >
                <div>
                  <h4 className="font-semibold text-custom-rose-900 text-sm">
                    {item.name}
                  </h4>
                  <div className="flex items-center space-x-3 text-sm mt-1">
                    <span className="font-bold text-custom-red">
                      {item.quantity}x
                    </span>
                    <span className="text-custom-rose-400">
                      @ ${item.price.toFixed(2)}
                    </span>
                    <span className="font-semibold text-custom-rose-500">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                </div>
                {/* Remove-item button */}
                <button
                  onClick={() => handleUpdateCart(item, 0)}
                  className="w-5 h-5 rounded-full border border-custom-rose-400 flex items-center justify-center text-custom-rose-400 hover:text-custom-rose-900 hover:border-custom-rose-900 transition-colors text-xs"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
