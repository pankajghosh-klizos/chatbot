import { FaCreditCard } from "react-icons/fa6";
import { FiUsers } from "react-icons/fi";
import { HiMenuAlt2 } from "react-icons/hi";
import { LuSquareUserRound } from "react-icons/lu";
import { TbMessageChatbot } from "react-icons/tb";
import { Link } from "react-router";

const Home = () => {
  const settingsOptions = [
    {
      id: "workspace",
      label: "Workspace",
      options: [
        {
          id: "general",
          icon: <HiMenuAlt2 size={40} />,
          label: "General",
          description:
            "Set your workspace name, time zone, languages. and more.",
          slug: "/settings/workspace/general",
        },
        {
          id: "billing",
          icon: <FaCreditCard size={40} />,
          label: "Billing",
          description: "Manage your subscription and payment details.",
          slug: "/settings/workspace/billing",
        },
        {
          id: "teammates",
          icon: <LuSquareUserRound size={40} />,
          label: "Teammates",
          description: "Manage or Invite teammates and see all activity logs.",
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
          icon: <TbMessageChatbot size={40} />,
          label: "Messenger",
          description:
            "Install and customize your messenger on web and mobile.",
          slug: "/settings/chennels/messenger",
        },
      ],
    },
    {
      id: "helpdesk",
      label: "Help Desk",
      options: [
        {
          id: "teaminboxes",
          icon: <FiUsers size={40} />,
          label: "Team Inboxes",
          description:
            "Create inboxes so groups of teammates can work together.",
          slug: "/settings/workspace/team-inboxes",
        },
      ],
    },
  ];

  return (
    <div className="d-flex flex-column">
      <h4 className="text-black border-bottom p-2 mb-4">Home</h4>

      <div className="w-100 max-w-7xl mx-auto">
        <ul className="list-unstyled d-flex flex-column gap-5">
          {settingsOptions.map((sO) => (
            <li key={sO.id}>
              <div className="d-flex flex-column gap-3">
                <h5 className="text-black m-0">{sO.label}</h5>

                <ul className="list-unstyled d-flex gap-3">
                  {sO.options.map((o) => (
                    <li key={o.id}>
                      <Link
                        to={o.slug}
                        className="border rounded-3 p-4 d-flex gap-3 shadow-sm max-w-sm h-100 text-decoration-none text-secondary"
                      >
                        <div className="bg-primary-subtle text-primary p-2 rounded-3 align-self-baseline">
                          {o.icon}
                        </div>

                        <div className="flex-grow-1">
                          <p className="fs-5 text-black fw-medium">{o.label}</p>

                          <p>{o.description}</p>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
