export default function ProductCard({ product }) {
  return (
    <div className="flex flex-col mb-4">
      <div className="relative group">
        <img src={product.image} />
      </div>
    </div>
  );
}
