import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div className="">
      {/* Bomber Collective root layout */}
      <Navbar
        brand={
          <Link to="/" className="transition-opacity hover:opacity-90">
            <img
              src="https://res.cloudinary.com/duwgrvngn/image/upload/v1762464403/Bomber_Collective-removebg-preview_lwlw2q.png"
              alt="Bomber Collective"
              className="h-14 w-auto"
            />
          </Link>
        }
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
