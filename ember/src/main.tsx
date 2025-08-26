import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import "./index.css";

// Lazy imports keep initial bundle tiny
const Home = React.lazy(() => import("./pages/Home"));
const Services = React.lazy(() => import("./pages/Services"));
const Web = React.lazy(() => import("./pages/Web"));
const Mobile = React.lazy(() => import("./pages/Mobile"));
const Maintenance = React.lazy(() => import("./pages/Maintenance"));
const DevOps = React.lazy(() => import("./pages/DevOps"));
const Facelift = React.lazy(() => import("./pages/FaceLift"));
const Work = React.lazy(() => import("./pages/contact/Work"));
const Pricing = React.lazy(() => import("./pages/contact/Pricing"));
const About = React.lazy(() => import("./pages/contact/About"));
const Blog = React.lazy(() => import("./pages/contact/Blog"));
const Resources = React.lazy(() => import("./pages/contact/Resources"));
const Contact = React.lazy(() => import("./pages/contact/Contact"));
const Privacy = React.lazy(() => import("./pages/contact/Privacy"));
const Terms = React.lazy(() => import("./pages/contact/Terms"));
const Cookies = React.lazy(() => import("./pages/contact/Cookies"));
const Accessibility = React.lazy(() => import("./pages/contact/Accessibility"));
const DataDeletion = React.lazy(() => import("./pages/contact/DataDeletion"));
const NotFound = React.lazy(() => import("./pages/contact/NotFound"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },

      // Services
      { path: "services", element: <Services /> },
      { path: "services/web", element: <Web /> },
      { path: "services/mobile", element: <Mobile /> },
      { path: "services/maintenance", element: <Maintenance /> },
      { path: "services/devops", element: <DevOps /> },
      { path: "services/facelift", element: <Facelift /> },

      // Company & marketing
      { path: "work", element: <Work /> },
      { path: "pricing", element: <Pricing /> },
      { path: "about", element: <About /> },
      { path: "blog", element: <Blog /> },
      { path: "resources", element: <Resources /> },
      { path: "contact", element: <Contact /> },

      // Legal
      { path: "privacy", element: <Privacy /> },
      { path: "terms", element: <Terms /> },
      { path: "cookies", element: <Cookies /> },
      { path: "accessibility", element: <Accessibility /> },
      { path: "data-deletion", element: <DataDeletion /> },

      // 404
      { path: "*", element: <NotFound /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <React.Suspense fallback={<div className="text-gray-500">Loading…</div>}>
      <RouterProvider router={router} />
    </React.Suspense>
  </React.StrictMode>,
);
