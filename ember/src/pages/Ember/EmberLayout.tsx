import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";

export default function EmberLayout() {
  return (
    <div className="">
      <Navbar
        brand="Ember"
        links={[
          { label: "Services", to: "/ember/services" },
          { label: "Work", to: "/ember/work" },
          { label: "Pricing", to: "/ember/pricing" },
          { label: "About", to: "/ember/about" },
          { label: "Contact", to: "/ember/contact" },
        ]}
        contactLink="/ember/contact"
      />
      <div className="h-full w-full text-center">
        <Outlet />
      </div>
    </div>
  );
}

