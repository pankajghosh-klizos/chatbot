import { Search } from "@/components";
import { NavLink, Outlet } from "react-router";

const Settings = () => {
  const settingsMenuItems = [
    {
      id: "home",
      label: "Home",
      slug: "/settings",
    },
    {
      id: "workspace",
      label: "Workspace",
      slug: "/settings/workspace",
    },
    {
      id: "channels",
      label: "Cannels",
      slug: "/settings/channels",
    },
    {
      id: "integrations",
      label: "Integrations",
      slug: "/settings/integrations",
    },
    {
      id: "helpcenter",
      label: "Help Center",
      slug: "/settings/help-center",
    },
  ];

  return (
    <div className="d-flex gap-2 h-100">
      <aside className="rounded-3 p-2 bg-light-subtle">
        <h4 className="text-black mb-3">Settings</h4>

        <Search className="px-2 pe-1 mb-3" />

        <ul className="list-unstyled d-flex flex-column gap-2">
          {settingsMenuItems.map((mI) => (
            <li key={mI.id}>
              <NavLink
                to={mI.slug}
                className={({ isActive }) =>
                  `border text-decoration-none d-block py-2 px-2 rounded-2 fw-medium ${
                    isActive
                      ? "text-primary opacity-100"
                      : "text-secondary opacity-75"
                  }`
                }
              >
                {mI.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </aside>

      <div className="content flex-grow-1 border rounded-3 overflow-hidden">
        <Outlet />
      </div>
    </div>
  );
};

export default Settings;
