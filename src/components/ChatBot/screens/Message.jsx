import { FiMinusCircle } from "react-icons/fi";
import { HiOutlineInformationCircle } from "react-icons/hi2";
import { RiSendPlane2Fill } from "react-icons/ri";

const Message = () => {
  return (
    <>
      {/* Screen header */}
      <div className="p-3 bg-success-subtle shadow-sm position-sticky top-0">
        <div className="d-flex gap-2 justify-content-between align-items-center">
          <h3 className="text-white">Message</h3>

          <button className="btn p-0 border-0">
            <FiMinusCircle size={22} color="#37CA27" />
          </button>
        </div>
      </div>

      <div className="py-5 text-center d-flex flex-column align-items-center justify-content-center gap-3">
        <div className="text-white bg-primary p-2 rounded-circle">
          <HiOutlineInformationCircle size={50} />
        </div>

        <p>
          <span className="d-block fs-5 fw-medium text-black">No Messages</span>{" "}
          Messages from the team will be shown here
        </p>

        <button className="btn p-2 px-3 d-flex align-items-center justify-content-center gap-2 btn-primary text-white rounded-4">
          <span>Send us a message</span>

          <RiSendPlane2Fill size={22} />
        </button>
      </div>
    </>
  );
};

export default Message;
