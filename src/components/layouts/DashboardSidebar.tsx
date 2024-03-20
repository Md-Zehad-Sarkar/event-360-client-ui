import { cn } from "@/lib/utils";
import { LayoutDashboard } from "lucide-react";
import { NavLink } from "react-router-dom";

const DashboardSidebar = () => {
  return (
    <aside className="sticky top-0 left-0 h-screen p-5 overflow-auto">
      <nav className="flex flex-col gap-2">
        <NavLink
          to="/admin"
          className={({ isActive }) =>
            cn("flex gap-1 p-2 rounded-md items-center", {
              "bg-white text-indigo-800 text-2xl": isActive,
            })
          }
        >
          <LayoutDashboard className="shrink-0" />
          <span className="truncate lg:font-bold md:font-medium">
            Dashboard
          </span>
        </NavLink>
        {/* manage event route */}
        <span className="md:font-bold lg:text-2xl md:text-xl">
          Manage Event
        </span>
        <hr className="w-3/4" />
        <NavLink
          to="/admin/add-event"
          className={({ isActive }) =>
            cn("flex gap-1 p-2 rounded-md", {
              "text-purple-600 ": isActive,
            })
          }
        >
          <span className="w-32 p-2 font-medium truncate rounded-md hover:bg-gray-50">
            Add Event
          </span>
        </NavLink>

        {/* manage services route */}
        <span className="md:font-bold lg:text-2xl md:text-xl">
          Manage Services
        </span>
        <hr className="w-3/4" />
        <NavLink
          to="/admin/add-services"
          className={({ isActive }) =>
            cn("flex gap-1 p-2 rounded-md ", {
              "text-purple-600 ": isActive,
            })
          }
        >
          <span className="w-32 p-2 font-medium truncate rounded-md hover:bg-gray-50">
            Add Service
          </span>
        </NavLink>
      </nav>
    </aside>
  );
};

export default DashboardSidebar;
