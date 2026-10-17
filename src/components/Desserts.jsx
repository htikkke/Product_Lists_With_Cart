import DataOfProducts from "../data/DataOfProducts";

export default function Desserts() {
  return (
    <div id="desserts-container" className="md:col-span-3 font-redhat">
      <header className="text-3xl font-bold">Desserts</header>
      <div id="products-container" className="grid col-span-1 md:col-span-3">
        {DataOfProducts.map((product) => (
          <div></div>
        ))}
      </div>
    </div>
  );
}
