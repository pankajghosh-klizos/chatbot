import { Search } from "@/components";
import { Badge } from "react-bootstrap";
import { FaQuestionCircle } from "react-icons/fa";
import { FaListCheck, FaRegNewspaper } from "react-icons/fa6";
import { FiMinusCircle } from "react-icons/fi";
import { HiChatBubbleLeftRight } from "react-icons/hi2";
import { LuTickets } from "react-icons/lu";
import { RiRobot2Line } from "react-icons/ri";

const Home = () => {
  const featuredOptions = [
    {
      id: "startConversation",
      icon: <HiChatBubbleLeftRight size={30} />,
      label: "Start a Conversation",
    },
    {
      id: "checktask",
      icon: <FaListCheck size={30} />,
      label: "Check Tasks",
    },
    {
      id: "raiseticket",
      icon: <LuTickets size={30} />,
      label: "Raise a Ticket",
    },
    {
      id: "explorehelp",
      icon: <FaQuestionCircle size={30} />,
      label: "Explore Help",
    },
    {
      id: "explorenews",
      icon: <FaRegNewspaper size={30} />,
      label: "Explore News",
    },
  ];

  const tickets = [
    {
      id: "ticket1",
      status: "in progress",
      title: "Order Issue: Package Damaged",
      createdAt: "jan 22, 2025",
      updatedAt: "jan 23, 2025",
      responseStatus: "pending response",
    },
    {
      id: "ticket2",
      status: "open",
      title: "Login Issue: Unable to Access Account",
      createdAt: "jan 20, 2025",
      updatedAt: "jan 23, 2025",
      responseStatus: "awaiting customer response",
    },
  ];

  return (
    <>
      <div className="p-3 bg-success-subtle shadow-sm position-sticky top-0">
        <div className="d-flex gap-2 justify-content-between align-items-center mb-3">
          <div className="bg-primary rounded-circle p-2 text-black d-flex align-items-center justify-content-center">
            <RiRobot2Line size={22} />
          </div>

          <h3 className="text-white mb-0">
            Chat<span className="fw-lighter">Bot</span>
          </h3>

          <button className="btn p-0 border-0">
            <FiMinusCircle size={22} color="#37CA27" />
          </button>
        </div>

        <Search
          placeholder="Search for help or articles"
          className="rounded-3 ps-3 pe-1"
        />
      </div>

      <div className="p-3">
        <p className="fs-5 text-black fw-medium mb-3">
          <span className="d-block fs-6 text-secondary fw-light">
            Welcome to, Chatbot
          </span>{" "}
          How can we assist you today?
        </p>

        <ul className="list-unstyled d-grid grid-cols-2 gap-3 mb-3">
          {featuredOptions.map((fO) => (
            <li key={fO.id}>
              <button className="btn bg-white py-4 w-100 h-100 d-flex flex-column align-items-center justify-content-center gap-2 rounded-3 border">
                <span className="text-primary">{fO.icon}</span>
                <span>{fO.label}</span>
              </button>
            </li>
          ))}
        </ul>

        <p className="fs-5 text-black mb-3">
          Your open tickets: <span className="fw-medium">2 pending</span>
        </p>

        <ul className="list-unstyled d-flex flex-column gap-3">
          {tickets.map((t) => (
            <li key={t.id}>
              <div className="border shadow-sm p-3 rounded-4 bg-white">
                <Badge
                  bg="primary"
                  className="fs-6 fw-normal text-capitalize mb-2"
                >
                  {t.status}
                </Badge>

                <p className="fs-5 fw-medium text-black">{t.title}</p>
                <p className="text-capitalize">
                  Date Created:{" "}
                  <span className="text-black">{t.createdAt}</span>
                </p>
                <p className="text-capitalize">
                  Last Update: <span className="text-black">{t.updatedAt}</span>
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Home;
