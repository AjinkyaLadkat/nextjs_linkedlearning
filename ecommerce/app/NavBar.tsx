import Link from "next/link";

export default function NavBar(){
    return (
        <nav className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">ShopEase</h1>
        <ul className="flex space-x-6">
          <li>
            <Link href="/" className="hover:text-gray-400">Home</Link>
          </li>
          <li>
            <Link href="/products" className="hover:text-gray-400">Products</Link>
          </li>
          <li>
            <Link href="/cart" className="hover:text-gray-400">Cart</Link>
          </li>
          <li>
            <Link href="/checkout" className="hover:text-gray-400">Checkout</Link>
          </li>
        </ul>
      </div>
    </nav>
    )
}