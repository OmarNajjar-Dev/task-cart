import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import Tasks from "./pages/Tasks";
// import Products from "./pages/Products";
// import Favorites from "./pages/Favorites";
// import Cart from "./pages/Cart";

function App() {
  return (
    <Router>
      <Header />
      <main className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto pt-14 px-4 sm:px-6 lg:px-8">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/tasks" element={<Tasks />} />
            {/* <Route path="/products" element={<Products />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/cart" element={<Cart />} /> */}
          </Routes>
        </div>
      </main>
    </Router>
  );
}

export default App;
