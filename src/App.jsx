import Desserts from "./components/Desserts";
import Cart from "./components/Cart";
import { useState, createContext } from "react";

export const FormContext = createContext();
export default function App() {
  const [quantity, setQuantity] = useState(0);
  return (
    <FormContext.Provider value={{ quantity, setQuantity }}>
      <div
        id="main-container"
        className="w-full min-h-screen grid grid-cols-1 md:grid-cols-4 gap-6 p-10"
      >
        <Desserts />
        <Cart />
      </div>
    </FormContext.Provider>
  );
}
