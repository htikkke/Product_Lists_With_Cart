import Desserts from "./Desserts";
import Cart from "./Cart";

export default function App() {
  return (
    <div
      id="main-container"
      className="w-full min-h-screen grid grid-cols-1 md:grid-cols-4 gap-6 p-8"
    >
      <Desserts />
      <Cart />
    </div>
  );
}
