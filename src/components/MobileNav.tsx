import { Link } from "react-router-dom";
import { Home, CheckSquare, Package, Heart, ShoppingCart } from "lucide-react";

export default function MobileNav() {
  return (
    <nav className="flex justify-around items-center md:hidden h-14 border-t bg-white fixed bottom-0 left-0 right-0 z-50">
      <Link
        to="/"
        className="flex flex-col items-center text-gray-500 hover:text-gray-700 text-xs"
      >
        <Home size={20} aria-hidden="true" />
        <span>Home</span>
      </Link>
      <Link
        to="/tasks"
        className="flex flex-col items-center text-gray-500 hover:text-gray-700 text-xs"
      >
        <CheckSquare size={20} aria-hidden="true" />
        <span>Tasks</span>
      </Link>
      <Link
        to="/products"
        className="flex flex-col items-center text-gray-500 hover:text-gray-700 text-xs"
      >
        <Package size={20} aria-hidden="true" />
        <span>Products</span>
      </Link>
      <Link
        to="/favorites"
        className="flex flex-col items-center text-gray-500 hover:text-gray-700 text-xs"
      >
        <Heart size={20} aria-hidden="true" />
        <span>Favs</span>
      </Link>
      <Link
        to="/cart"
        className="flex flex-col items-center text-gray-500 hover:text-gray-700 text-xs"
      >
        <ShoppingCart size={20} aria-hidden="true" />
        <span>Cart</span>
      </Link>
    </nav>
  );
}
