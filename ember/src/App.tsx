import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <div className="bg-gray-50">
      {/* Page content renders here */}
      <div className="h-full w-full text-center">
        <Outlet />
      </div>
    </div>
  );
}
