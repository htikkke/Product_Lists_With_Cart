import Desserts from "./components/Desserts";
import Cart from "./components/Cart";
import ConfirmationPage from "./components/ConfirmationPage";
import { useContext } from "react";
import { CartContext } from "./components/cartContext";

export default function App() {
  const { confirmed } = useContext(CartContext);
  return (
    <div
      id="main-container"
      className="w-full min-h-screen grid grid-cols-1 md:grid-cols-[3fr_1fr] lg:grid-cols-4 gap-6 p-10 relative max-[1025px]:p-4 max-[770px]:grid-cols-1"
    >
      <Desserts />
      <Cart />
      {confirmed && <ConfirmationPage />}
    </div>
  );
}
