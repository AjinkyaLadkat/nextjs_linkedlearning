import ProductsList from "../ProductsList";
import { products } from "../product-data";

export default function ProductsPage() {
  return (
    <div className="container mx-auto p-8">
      {/* Title (separate from products list) */}
      <h1 className="text-4xl font-bold mb-8 text-center">Products</h1>

      {/* Horizontal Layout for Large Screens, Column Layout for Small Screens */}
      <div className="flex md:flex-col flex-row flex-wrap justify-center lg:flex-nowrap gap-6">
        <ProductsList products={products} />
      </div>
    </div>
  );
}
