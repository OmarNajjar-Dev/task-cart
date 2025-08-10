import { Link } from "react-router-dom";
import { Home, CheckSquare, Package, Heart, ShoppingCart } from "lucide-react";

const LINK_STYLE =
  "flex items-center gap-2 text-gray-500 hover:text-gray-700 font-medium transition-colors duration-300";

export default function DesktopNav() {
  return (
    <nav className="hidden md:flex gap-6">
      <Link to="/" className={LINK_STYLE}>
        <Home size={20} />
        <span className="hidden sm:inline">Dashboard</span>
      </Link>
      <Link to="/tasks" className={LINK_STYLE}>
        <CheckSquare size={20} />
        <span className="hidden sm:inline">Tasks</span>
      </Link>
      <Link to="/products" className={LINK_STYLE}>
        <Package size={20} />
        <span className="hidden sm:inline">Products</span>
      </Link>
      <Link to="/favorites" className={LINK_STYLE}>
        <Heart size={20} />
        <span className="hidden sm:inline">Favorites</span>
      </Link>
      <Link to="/cart" className={LINK_STYLE}>
        <ShoppingCart size={20} />
        <span className="hidden sm:inline">Cart</span>
      </Link>
    </nav>
  );
}
