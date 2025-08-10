import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
// import Tasks from "./pages/Tasks";
// import Products from "./pages/Products";
// import Favorites from "./pages/Favorites";
// import Cart from "./pages/Cart";

function App() {
  return (
    <Router>
      <Header />
      <main className="min-h-screen bg-gray-50 pt-14">
        <Routes>
          {<Route path="/" element={<Dashboard />} />
          /* <Route path="/tasks" element={<Tasks />} />
          <Route path="/products" element={<Products />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/cart" element={<Cart />} /> */}
        </Routes>
      </main>
    </Router>
  );
}

export default App;
