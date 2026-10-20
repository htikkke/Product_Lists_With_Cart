import Desserts from "./components/Desserts";
import Cart from "./components/Cart";
import CartProvider from "./components/cartContext";

export default function App() {
  return (
    <CartProvider>
      <div
        id="main-container"
        className="w-full min-h-screen grid grid-cols-1 md:grid-cols-4 gap-6 p-10"
      >
        <Desserts />
        <Cart />
      </div>
    </CartProvider>
  );
}
