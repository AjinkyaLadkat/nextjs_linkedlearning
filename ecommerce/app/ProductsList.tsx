import Image from "next/image";
import Link from "next/link";
import { Product } from "./product-data";

export default function ProductsList({ products }: { products: Product[] }) {
  return (
    <div className="flex flex-wrap gap-6 justify-center lg:flex-nowrap">
      {products.map((product) => (
        <Link
          key={product.id}
          href={"/products/" + product.id}
          className="bg-white p-4 rounded-lg shadow-lg w-full sm:w-1/2 md:w-1/3 lg:w-auto flex flex-col items-center text-center transition-transform hover:scale-105"
        >
          <Image
            src={"/" + product.imageUrl}
            alt="Product Image"
            width={150}
            height={150}
            className="rounded-md"
          />
          <h2 className="text-2xl text-gray-600 font-semibold mt-4">{product.name}</h2>
          <p className="text-black mt-2 text-lg">${product.price}</p>
        </Link>
      ))}
    </div>
  );
}
