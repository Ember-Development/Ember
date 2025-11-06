import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div className="">
      {/* Bomber Collective root layout */}
      <Navbar
        brand="Bomber Collective"
        links={[
          { label: "Ember", to: "/ember" },
          { label: "NIL", to: "#" }, // External link - update with actual URL
          { label: "Recruiting", to: "#" }, // External link - update with actual URL
        ]}
      />
      <div className="h-full w-full">
        <Outlet />
      </div>
    </div>
  );
}
