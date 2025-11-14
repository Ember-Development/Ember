import { Outlet } from "react-router-dom";
import SubNavbar from "../../components/SubNavbar";

export default function EmberLayout() {
  return (
    <div className="">
      <SubNavbar
        links={[
          { label: "Services", to: "/ember/services" },
          { label: "Work", to: "/ember/work" },
          { label: "Pricing", to: "/ember/pricing" },
          { label: "About", to: "/ember/about" },
          { label: "Contact", to: "/ember/contact" },
        ]}
      />
      <div className="h-full w-full text-center">
        <Outlet />
      </div>
    </div>
  );
}

