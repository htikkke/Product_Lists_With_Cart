import addToCartIcon from "../assets/images/icon-add-to-cart.svg";
import { useContext } from "react";
import { FormContext } from "../App";

export default function ProductCard({ product }) {
  const { quantity, setQuantity } = useContext(FormContext);

  const handleIncrement = () => {
    setQuantity((prev) => prev + 1);
  };
  const handleDecrement = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 0));
  };

  return (
    <div className="flex flex-col mb-4 font-redhat">
      <div className="relative group">
        <img
          src={product.image.desktop}
          alt={product.name}
          className={`w-full rounded-xl object-cover border-3 ${quantity > 0 ? "border-custom-red" : "border-transparent"}`}
        />
        <button className="absolute left-1/2 -translate-x-1/2 -bottom-5 w-1/2 flex items-center justify-center gap-3 bg-white rounded-full px-6 py-3 border border-custom-red shadow-md cursor-pointer group">
          <img src={addToCartIcon} alt="add-button" className="w-5 h-5" />
          <span className="text-custom-rose-900 text-sm font-semibold group-hover:text-custom-red transition-colors">
            Add to Cart
          </span>
        </button>
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
