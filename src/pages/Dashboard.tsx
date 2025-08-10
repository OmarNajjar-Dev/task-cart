import { Link } from "react-router-dom";
import { CheckSquare, Package } from "lucide-react";

function Dashboard() {
  const CARD_STYLE =
    "flex flex-col gap-2 justify-center items-center p-8 shadow-md hover:shadow-lg bg-white rounded-md transition-shadow duration-200";
  const ICON_STYLE = "w-16 h-16 text-indigo-500 mb-2";
  const TITLE_STYLE = "text-2xl font-bold text-gray-900";
  const DESCRIPTION_STYLE = "text-base text-gray-600";

  return (
    <section className="grid grid-cols-2 gap-8">
      <Link to="/tasks" className={CARD_STYLE}>
        <CheckSquare className={ICON_STYLE} />
        <h2 className={TITLE_STYLE}>Task Manager</h2>
        <p className={DESCRIPTION_STYLE}>
          Manage your daily tasks and stay organized
        </p>
      </Link>

      <Link to="/products" className={CARD_STYLE}>
        <Package className={ICON_STYLE} />
        <h2 className={TITLE_STYLE}>Products</h2>
        <p className={DESCRIPTION_STYLE}>
          Browse our collection of amazing products
        </p>
      </Link>
    </section>
  );
}

export default Dashboard;
