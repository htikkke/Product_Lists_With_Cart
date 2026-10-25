import addToCartIcon from "../assets/images/icon-add-to-cart.svg";
import { useContext } from "react";
import { CartContext } from "./cartContext";

export default function ProductCard({ product }) {
  const { cart, handleUpdateCart } = useContext(CartContext);

  const cartItem = cart.find((item) => item.name === product.name);
  const quantity = cartItem ? cartItem.quantity : 0;

  const handleIncrement = () => {
    handleUpdateCart(product, quantity + 1);
  };
  const handleDecrement = () => {
    handleUpdateCart(product, quantity - 1);
  };

  return (
    <div className="flex flex-col mb-4 font-redhat">
      <div className="relative group">
        <img
          src={product.image.desktop}
          alt={product.name}
          className={`w-full rounded-xl object-cover border-3 ${quantity > 0 ? "border-custom-red" : "border-transparent"}`}
        />
        {quantity === 0 ? (
          <button
            onClick={handleIncrement}
            aria-label={`Add ${product.name} to cart`}
            className="absolute left-1/2 -translate-x-1/2 -bottom-5 w-1/2 flex items-center justify-center gap-3 bg-white rounded-full px-6 py-3 border border-custom-red shadow-md cursor-pointer group max-[1025px]:w-3/4"
          >
            <img
              src={addToCartIcon}
              alt=""
              aria-hidden="true"
              className="w-5 h-5"
            />
            <span className="text-custom-rose-900 text-sm font-semibold group-hover:text-custom-red transition-colors">
              Add to Cart
            </span>
          </button>
        ) : (
          <div className="absolute left-1/2 -translate-x-1/2 -bottom-5 w-1/2 flex items-center justify-between bg-custom-red text-white rounded-full px-4 py-3 shadow-md max-[1025px]:w-3/4">
            {/* Minus-button */}
            <button
              onClick={handleDecrement}
              aria-label={`Decrease quantity of ${product.name}`}
              className="w-6 h-6 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-custom-red transition-colors"
            >
              <span className="text-sm font-bold">-</span>
            </button>
            <span className="text-sm font-semibold">{quantity}</span>
            {/* Plus-button */}
            <button
              onClick={handleIncrement}
              aria-label={`Increase quantity of ${product.name}`}
              className="w-6 h-6 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-custom-red transition-colors"
            >
              <span className="text-sm font-bold">+</span>
            </button>
          </div>
        )}
      </div>
      <div className="mt-10 px-1">
        <p className="text-sm text-custom-rose-500">{product.category}</p>
        <h3 className="font-semibold text-lg text-custom-rose-900 mt-1">
          {product.name}
        </h3>
        <p className="font-bold text-lg mt-1 text-custom-red">
          ${product.price.toFixed(2)}
        </p>
      </div>
    </div>
  );
}
