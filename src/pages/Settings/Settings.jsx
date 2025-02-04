import { Dropdown, Search } from "@/components";
import { FaCreditCard } from "react-icons/fa6";
import { HiMenuAlt2 } from "react-icons/hi";
import {
  HiOutlineClipboard,
  HiOutlineFolder,
  HiOutlinePhone,
  HiOutlineChatBubbleLeftEllipsis,
  HiOutlineChatBubbleLeftRight,
  HiOutlineEnvelope,
} from "react-icons/hi2";
import { LuSquareUserRound } from "react-icons/lu";
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
      options: [
        {
          id: "general",
          icon: <HiMenuAlt2 size={20} />,
          label: "General",
          slug: "/settings/workspace/general",
        },
        {
          id: "billing",
          icon: <FaCreditCard size={20} />,
          label: "Billing",
          slug: "/settings/workspace/billing",
        },
        {
          id: "teammates",
          icon: <LuSquareUserRound size={20} />,
          label: "Teammates",
          slug: "/settings/workspace/teammates",
        },
      ],
    },
    {
      id: "channels",
      label: "Channels",
      options: [
        {
          id: "messenger",
          icon: <HiOutlineChatBubbleLeftEllipsis size={20} />,
          label: "Messenger",
          slug: "/settings/channels/messenger",
        },
        {
          id: "email",
          icon: <HiOutlineEnvelope size={20} />,
          label: "Email",
          slug: "/settings/channels/email",
        },
        {
          id: "phone",
          icon: <HiOutlinePhone size={20} />,
          label: "Phone",
          slug: "/settings/channels/phone",
        },
        {
          id: "switch",
          icon: <HiOutlineClipboard size={20} />,
          label: "Switch",
          slug: "/settings/channels/switch",
        },
        {
          id: "sms",
          icon: <HiOutlineChatBubbleLeftRight size={20} />,
          label: "SMS",
          slug: "/settings/channels/sms",
        },
        {
          id: "socialchannels",
          icon: <HiOutlineFolder size={20} />,
          label: "Social Channels",
          slug: "/settings/channels/social-channels",
        },
      ],
    },
    {
      id: "integrations",
      label: "Integrations",
      options: [],
    },
    {
      id: "helpcenter",
      label: "Help Center",
      options: [],
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
              {!mI?.options ? (
                <NavLink
                  to={mI.slug}
                  className={({ isActive }) =>
                    `text-decoration-none d-block p-2 px-3 rounded-2 fw-medium ${
                      isActive
                        ? "text-primary opacity-100"
                        : "text-secondary opacity-75"
                    }`
                  }
                >
                  {mI.label}
                </NavLink>
              ) : (
                <Dropdown title={mI.label}>
                  <ul className="list-unstyled rounded-2">
                    {mI?.options.map((o) => (
                      <li key={o.id}>
                        <NavLink
                          to={o.slug}
                          className={({ isActive }) =>
                            `text-decoration-none d-flex w-100 align-items-center gap-2 p-2 rounded-3 ${
                              isActive
                                ? "text-primary opacity-10"
                                : "text-secondary opacity-75"
                            }`
                          }
                        >
                          <span className="lh-1">{o.icon}</span>
                          <span>{o.label}</span>
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </Dropdown>
              )}
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
