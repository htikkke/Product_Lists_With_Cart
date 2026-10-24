import confirmIcon from "../assets/images/icon-order-confirmed.svg";
import { useContext } from "react";
import { CartContext } from "./cartContext";

export default function ConfirmationPage() {
  const { cart, orderTotal, setConfirmed } = useContext(CartContext);
  return (
    // confirm-container-warpper
    <div className="fixed inset-0 bg-black/20 flex items-center justify-center">
      {/* confirm-container */}
      <div
        id="confirm-container"
        className="max-w-full w-1/3 p-6 rounded-xl font-redhat bg-white h-fit shadow-sm max-[1025px]:w-1/2"
      >
        <img src={confirmIcon} />
        <h1 className="font-bold text-3xl mt-5">Order Confirmed</h1>
        <p className="text-custom-rose-400 mt-3">
          We hope you enjoy your food!
        </p>
        {/* orders */}
        <div className="divide-y divide-custom-rose-100 bg-custom-rose-50 mt-8 rounded-xl p-4">
          {cart.map((item) => (
            <div key={item.name} className="flex items-center justify-between">
              <div className="py-4 flex items-center justify-between space-x-4">
                <img
                  src={item.image.desktop}
                  alt={item.name}
                  className="w-14 h-14 object-cover rounded-lg shrink-0 shadow-sm"
                />
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
                  </div>
                </div>
              </div>
              <p className="font-semibold text-custom-rose-900">
                ${(item.price * item.quantity).toFixed(2)}
              </p>
            </div>
          ))}
          {/* Total */}
          <div className="flex items-center justify-between mt-4">
            <p className="text-custom-rose-500 text-sm">Order Total</p>
            <p className="font-bold text-2xl">${orderTotal.toFixed(2)}</p>
          </div>
        </div>
        {/* New-order-button */}
        <button
          onClick={() => setConfirmed(false)}
          className="mt-6 w-full bg-custom-red hover:bg-red-700 text-white font-semibold py-3.5 rounded-full transition-colors text-sm cursor-pointer"
        >
          Start New Order
        </button>
      </div>
    </div>
  );
}
