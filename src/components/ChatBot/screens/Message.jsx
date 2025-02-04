import { Badge } from "react-bootstrap";
import { FiMinusCircle } from "react-icons/fi";
import { HiOutlineInformationCircle } from "react-icons/hi2";
import { RiSendPlane2Fill } from "react-icons/ri";

const Message = () => {
  const messages = [
    {
      id: "message1",
      photo:
        "https://s3-alpha-sig.figma.com/img/4efc/2b65/3098956f84b1822f2eb7e8ed84a31750?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=N57hEicdejIla8ti62ceLVdtTARz5hjDycnYtcFh6kl3bXcu1z2zDcYIOSIgAAcrrNnrIw3JbZOuuV6vxzQE5-6JN6q-L2LEGtTrBF8C6ekeNn9UkwU1b-JW5PCMpRzPInra06F0yYBr~dhOCHksjZaCxSxMnoPQxf7ycHz0CFiTUJFGd1gaBbCI67jDSqFTOPieiNAvOAZm7z9wGSANy5sd-XpXwazWjf~EURwWSOHWbldineDYsMMM9K6sUuh6UfX8Rpj1Lt2eVLJDSeCVT6v6SKFPpaFJyE513dwXilWI5X2mROa~7wZYG62gL4PJsw2I3~jYdHEfYDuU0Ec25g__",
      sender: "Darlene Steward",
      lastMessage: "Pls take a look at the images.",
      messageCount: "5",
      time: "18.31",
    },
    {
      id: "message2",
      photo:
        "https://s3-alpha-sig.figma.com/img/0cb4/ef6b/4f6dc3624a44fb5e01e406158e3d1b49?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=JRy25bTux8RSXK-GJgS7hLeR5UE~bG6eBw~tnif1npiNsoTXt-jWxsetbFYOFVuFEMtjVrwAYWDE-VsppFZINbyb4Q6kXDYh4fKrGHuiQB96RT~xhpcdlGDGsqGsAQIwqKUyvCVFBA7pETYove02jGUJ62oMJSRXiTmom2ueQkjEvBT5J6LuI24whD7DL7ns9yfEGgnnWWn0Ls-dUFmtd95LpgfcDmyjRAntW6buZRTLW4qtMsFjs8Ar3IAeP46ymclg2AYls5R-~vztRDgNG351RsbFGA9--RTmA76LAoPwzy1~MKJPr7C765M5lVbjYZnb1EFVYseCnEuih2iM~g__",
      sender: "Fullsnack Designers",
      lastMessage: "Hello guys, we have discussed about ...",
      messageCount: "3",
      time: "18.31",
    },
    {
      id: "message3",
      photo:
        "https://s3-alpha-sig.figma.com/img/5f97/eb43/1bd4dd6069428f64473bd4e633b7c00b?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=qx0Tlci8~H~3T7~Vd23lX5ELZukdjKiIw4V6lTTmDwLX9E9N4RQkabwPjBQWNT1z9qVusAYdC-X4XiS3cykR6NRTTjpdV-Ae8U65TBbPtMmDMoaT8KxusWSRj8u0Hcl8EgM57oO9TPwLZApBYeULiw~rvUXaDwKpFo-NGDdX24XRYjnP4qsJF6GEzeYWBULswR4Du7BGqwVztruld39D5sADZh1XtI42GUKqvtglS60Z42dGOlMxqgyASNDw0kdzHzBw3HRAB-q~7CorOac4oMc~HNSJPUIpW0Vuk7n0xhC1BSO45NDelKTpwYXXLsjdmtDJMjoK4qMqqBz2lZDzVA__",
      sender: "Lee Williamson",
      lastMessage: "Yes, that’s gonna work, hopefully.",
      messageCount: "0",
      time: "18.31",
    },
    {
      id: "message4",
      photo:
        "https://s3-alpha-sig.figma.com/img/b79f/ac86/34d0c3811e30299006dfa8f78b2cd446?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=oZ3-0hX6-eZX1WtcQSId1gthn-478EujIZOyMGDQw6K0eWbwNs~d0J9E-O53EU-x2RoxxbG5y-RnAbHg8~JwyHYlXgM62d-JBRNtVVXFXQHHON-KBf2KBXLpBl8MXBMK4WClcThoyOJCnpwLzO8fXvg2lbWiHrDf584vOGP2zMyJJQCrcfS4bX2SsMtmZM~sxjnY-n4~loHmZPNR48Iw4UW8R1uMlU-bVBCmGSPlcIAJWCknmcsyHnHgTyp2gx-Iya-EgshM7ndCknulgNiGseVXshHAc2Eh6kbiHT9jF3KcEmEervGnHzuVe~7wnrh-e~f1n~E-r8~MG3fq5b4upw__",
      sender: "Ronald Mccoy",
      lastMessage: "Thanks dude 😉",
      messageCount: "0",
      time: "18.31",
    },
    {
      id: "message5",
      photo:
        "https://s3-alpha-sig.figma.com/img/4efc/2b65/3098956f84b1822f2eb7e8ed84a31750?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=N57hEicdejIla8ti62ceLVdtTARz5hjDycnYtcFh6kl3bXcu1z2zDcYIOSIgAAcrrNnrIw3JbZOuuV6vxzQE5-6JN6q-L2LEGtTrBF8C6ekeNn9UkwU1b-JW5PCMpRzPInra06F0yYBr~dhOCHksjZaCxSxMnoPQxf7ycHz0CFiTUJFGd1gaBbCI67jDSqFTOPieiNAvOAZm7z9wGSANy5sd-XpXwazWjf~EURwWSOHWbldineDYsMMM9K6sUuh6UfX8Rpj1Lt2eVLJDSeCVT6v6SKFPpaFJyE513dwXilWI5X2mROa~7wZYG62gL4PJsw2I3~jYdHEfYDuU0Ec25g__",
      sender: "Darlene Steward",
      lastMessage: "Pls take a look at the images.",
      messageCount: "0",
      time: "18.31",
    },
  ];

  return (
    <>
      {/* Screen header */}
      <div className="p-3 bg-success-subtle shadow-sm position-sticky top-0">
        <div className="d-flex gap-2 justify-content-between align-items-center">
          <h3 className="text-white mb-0">Message</h3>

          <button className="btn p-0 border-0">
            <FiMinusCircle size={22} color="#37CA27" />
          </button>
        </div>
      </div>

      {/* <div className="py-5 text-center d-flex flex-column align-items-center justify-content-center gap-3">
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
      </div> */}

      <ul className="list-unstyled p-3 d-flex flex-column gap-3">
        {messages.map((m) => (
          <li key={m.id}>
            <button className="btn bg-white p-0 d-flex gap-3 p-2 w-100">
              <div
                className="rounded-circle overflow-hidden position-relative d-flex align-items-center justify-content-center"
                style={{ height: 50, width: 50 }}
              >
                <img
                  src={m.photo}
                  height="50px"
                  alt="pfp"
                  className="position-absolute"
                />
              </div>

              <div className="h-100 flex-grow-1">
                <div className="d-flex justify-content-between mb-1">
                  <p className="fw-medium text-black">{m.sender}</p>
                  <p className="text-secondary">{m.time}</p>
                </div>

                <div className="d-flex justify-content-between">
                  <p className="text-secondary">{m.lastMessage}</p>
                  {m.messageCount > 0 && (
                    <Badge className="d-flex align-items-center justify-content-center rounded-3">
                      {m.messageCount}
                    </Badge>
                  )}
                </div>
              </div>
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Message;
