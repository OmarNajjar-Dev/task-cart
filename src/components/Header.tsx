import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

export default function Header() {
  return (
    <header className="w-full shadow-lg bg-white z-50 sticky">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="text-xl font-bold text-gray-800">MyApp</div>
        <DesktopNav />
      </div>
      <MobileNav />
    </header>
  );
}
