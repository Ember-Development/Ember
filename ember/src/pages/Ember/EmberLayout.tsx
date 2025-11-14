import { Outlet } from "react-router-dom";
import SubNavbar from "../../components/SubNavbar";

export default function EmberLayout() {
  return (
    <div className="">
      <SubNavbar
        links={[
          { label: "About", to: "#about", isAnchor: true },
          { label: "Services", to: "#services", isAnchor: true },
          { label: "Work", to: "#work", isAnchor: true },
          { label: "Pricing", to: "#pricing", isAnchor: true },
          { label: "Contact", to: "#contact", isAnchor: true },
        ]}
      />
      <div className="h-full w-full text-center">
        <Outlet />
      </div>
    </div>
  );
}
