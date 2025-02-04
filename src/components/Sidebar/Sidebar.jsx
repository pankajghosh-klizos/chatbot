import { Images } from "@/constants/images";
import { Link, NavLink } from "react-router";
import { BsFillGrid1X2Fill } from "react-icons/bs";
import { FaGear, FaInbox } from "react-icons/fa6";
import { FaUserCircle } from "react-icons/fa";
import { TiPin } from "react-icons/ti";
import "./Sidebar.scss";

const Sidebar = () => {
  const inboxCount = 5;

  const sidebarPrimaryItems = [
    {
      id: "dashboard",
      label: "Dashboard",
      slug: "/getting-started",
      icon: <BsFillGrid1X2Fill size={20} />,
    },
    {
      id: "inbox",
      label: "Inbox",
      slug: "/inbox",
      icon: <FaInbox size={20} />,
    },
  ];

  const sidebarSecondaryItems = [
    {
      id: "settings",
      label: "Settings",
      slug: "/settings",
      icon: <FaGear size={20} />,
    },
    {
      id: "profile",
      label: "Profile",
      slug: "/profile",
      icon: <FaUserCircle size={20} />,
    },
  ];

  return (
    <aside className="sidebar rounded-3 p-2 bg-primary text-white">
      <nav className="d-flex flex-column gap-5 h-100">
        <div className="d-flex align-items-center justify-content-between p-2 gap-2">
          <Link to={"/getting-started"} className="lh-1 py-1">
            <img src={Images.klizoLogo} height={20} alt="logo" />
          </Link>

          <button className="pin-btn btn d-flex align-items-center justify-content-center rounded-3 p-1  text-white border">
            <TiPin size={18} />
          </button>
        </div>

        <ul className="list-unstyled flex-grow-1 d-flex flex-column gap-3">
          {sidebarPrimaryItems.map((pI) => (
            <li key={pI.id}>
              <NavLink
                to={pI.slug}
                className={({ isActive }) =>
                  `nav-item text-white text-decoration-none d-flex gap-2 align-items-center p-2 rounded-3 position-relative ${
                    isActive ? "bg-white-15" : ""
                  }`
                }
              >
                {pI.icon && <span className="lh-1">{pI.icon}</span>}

                {pI.id === "inbox" && inboxCount > 0 && (
                  <span className="bg-danger badge-pill position-absolute top-0 end-0"></span>
                )}

                <span className="item-label lh-1">{pI.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>

        <ul className="list-unstyled d-flex flex-column gap-3">
          {sidebarSecondaryItems.map((sI) => (
            <li key={sI.id}>
              <NavLink
                to={sI.slug}
                className={({ isActive }) =>
                  `nav-item text-white text-decoration-none d-flex gap-2 align-items-center p-2 rounded-3 ${
                    isActive ? "bg-white-15" : ""
                  }`
                }
              >
                {sI.icon && <span className="lh-1">{sI.icon}</span>}
                <span className="item-label lh-1">{sI?.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
