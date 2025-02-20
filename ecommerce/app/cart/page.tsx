'use client';

import { useState } from "react"
import { products } from "../product-data";
import Link from "next/link";

export default function CartPage() {
    const [cartIds] = useState(['123', '345']);
    const cartProducts = cartIds.map(id => products.find(p => p.id === id)!);

    return (
        <>
            

            <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">Shopping Cart</h1>

      <ul className="space-y-4"> {/* List for cart items */}
        {cartProducts.map(product => (
          <li key={product.id} className="text-gray-300 rounded-lg shadow-md p-4 hover:shadow-lg transition duration-300">
            <Link href={`/products/${product.id}`}>
              <h3 className="text-xl text-gray-300 font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-300">${product.price}</p>
              <div className="flex justify-end">
                <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >Remove from Cart</button>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>

        </>)
}