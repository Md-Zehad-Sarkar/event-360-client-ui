import App from "@/App";
import AdminLayout from "@/components/layouts/AdminLayout";
import About from "@/pages/About/About";
import Home from "@/pages/Home/Home";
import Dashboard from "@/pages/admin/Dashboard";
import { createBrowserRouter } from "react-router-dom";
import AddEvent from "@/pages/admin/AddEvent";
import EventManagement from "@/pages/admin/EventManagement";
import AddService from "@/pages/admin/AddService";
import ContactUs from "@/pages/ContactUs/ContactUs";
import UpdateEvent from "@/pages/admin/UpdateEvent";
import UpdateService from "@/pages/admin/UpdateService";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact-us",
        element: <ContactUs />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "/admin/event-management",
        element: <EventManagement />,
      },
      {
        path: "/admin/add-event",
        element: <AddEvent />,
      },
      {
        path: "/admin/add-services",
        element: <AddService />,
      },
      {
        path: "/admin/update-event",
        element: <UpdateEvent />,
      },
      {
        path: "/admin/update-service",
        element: <UpdateService />,
      },
    ],
  },
]);

export default router;
