import DataOfProducts from "../data/DataOfProducts";
import ProductCard from "./ProductCard";

export default function Desserts() {
  return (
    <div id="desserts-container" className="md:col-span-3 font-redhat">
      <header className="text-3xl font-bold mb-8">Desserts</header>
      {/* Product-Grid-Container */}
      <div
        id="products-container"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10"
      >
        {DataOfProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
