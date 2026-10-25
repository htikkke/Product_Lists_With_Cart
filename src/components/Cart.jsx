import noItem from "../assets/images/illustration-empty-cart.svg";
import crossIcon from "../assets/images/icon-remove-item.svg";
import carbonIcon from "../assets/images/icon-carbon-neutral.svg";
import { useContext } from "react";
import { CartContext } from "./cartContext";

export default function Cart() {
  const { cart, handleUpdateCart, setConfirmed, orderTotal, totalQuantity } =
    useContext(CartContext);
  // for keyboard user
  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setConfirmed(true);
    }
  };
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
          <div className="divide-y divide-custom-rose-100 max-h-80 overflow-y-auto pr-1">
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
                  aria-label={`Remove ${item.name} from cart`}
                  className="w-5 h-5 rounded-full border border-custom-rose-400 flex items-center justify-center text-custom-rose-400 hover:text-custom-rose-900 hover:border-custom-rose-900 transition-colors text-xs cursor-pointer group"
                >
                  <img
                    src={crossIcon}
                    alt=""
                    aria-hidden="true"
                    className="w-2.5 h-2.5 cursor-pointer"
                  />
                </button>
              </div>
            ))}
            {/* Total */}
            <div className="flex items-center justify-between mt-4">
              <p className="text-custom-rose-500 text-sm">Order Total</p>
              <p className="font-bold text-2xl">${orderTotal.toFixed(2)}</p>
            </div>
            {/* Safe-delivery-alert */}
            <div className="mt-6 bg-custom-rose-50 p-4 rounded-lg flex items-center justify-center space-x-2 text-sm text-custom-rose-900">
              <img src={carbonIcon} />
              <p>
                This is a{" "}
                <strong className="font-semibold">carbon-neutral</strong>{" "}
                delivery
              </p>
            </div>
            {/* Confrim-order-button */}
            <button
              onClick={() => setConfirmed(true)}
              onKeyDown={handleKeyDown}
              className="mt-6 w-full bg-custom-red hover:bg-red-700 text-white font-semibold py-3.5 rounded-full transition-colors text-sm cursor-pointer"
            >
              Confirm Order
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
