import { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import { RiChatSmile3Fill } from "react-icons/ri";
import { TbHome } from "react-icons/tb";
import { HiOutlineTicket } from "react-icons/hi";
import { LuCircleHelp, LuMessageSquareText } from "react-icons/lu";
import { motion } from "motion/react";
import { Home, Message, Ticket, Help } from "./screens";
import "./ChatBot.scss";

const ChatBot = () => {
  const [isBotOpen, setIsBotOpen] = useState(false);
  const screenMenuItems = [
    {
      id: "home",
      title: "Home",
      icon: <TbHome size={26} />,
    },
    {
      id: "message",
      title: "Message",
      icon: <LuMessageSquareText size={26} />,
    },
    {
      id: "tickets",
      title: "Tickets",
      icon: <HiOutlineTicket size={26} />,
    },
    {
      id: "help",
      title: "Help",
      icon: <LuCircleHelp size={26} />,
    },
  ];
  const [selectedMenuItem, setSelectedMenuItem] = useState("home");

  return (
    <div className="chatbot position-fixed d-flex flex-column gap-3 align-items-end">
      {/* Screen */}
      <motion.div
        className="bot-screen rounded-4 bg-primary-subtle shadow-sm d-flex flex-column overflow-hidden overflow-y-auto"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: isBotOpen ? 1 : 0, scale: isBotOpen ? 1 : 0.8 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        style={{ display: isBotOpen ? "block" : "none" }}
      >
        {/* Screen content */}
        <div className="flex-grow-1">
          {selectedMenuItem === "home" && <Home />}
          {selectedMenuItem === "message" && <Message />}
          {selectedMenuItem === "tickets" && <Ticket />}
          {selectedMenuItem === "help" && <Help />}
        </div>

        {/* Screen menu */}
        <ul className="list-unstyled bg-white p-2 shadow d-flex align-items-center justify-content-center gap-3 position-sticky bottom-0">
          {screenMenuItems.map((mI) => (
            <li key={mI.id}>
              <motion.button
                onClick={() => setSelectedMenuItem(mI.id)}
                className={`btn p-2 rounded-2 p-2 d-flex flex-column align-items-center justify-content-center gap-1 border-0 ${
                  selectedMenuItem === mI.id
                    ? "text-primary opacity-100"
                    : "text-secondary opacity-75"
                }`}
                transition={{ duration: 0.2 }}
              >
                <span className="lh-1">{mI.icon}</span>
                <span className="lh-1">{mI.title}</span>
              </motion.button>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Screen toggle button */}
      <motion.button
        type="button"
        onClick={() => setIsBotOpen(!isBotOpen)}
        className="bot-open-btn border rounded-circle p-2 bg-primary text-white shadow-sm"
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.2 }}
      >
        {isBotOpen ? <FaAngleDown size={35} /> : <RiChatSmile3Fill size={35} />}
      </motion.button>
    </div>
  );
};

export default ChatBot;
