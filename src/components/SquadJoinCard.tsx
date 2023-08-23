import { useEffect, useState } from "react";
import { joinData } from "../utilities/SquadData";
import bg from "../assets/images/bg.jpg";
import SquadModal from "./SquadModal";

const SquadJoinCard = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const [modalOpen, setModalOpen] = useState(false);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 1024);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className={`flex flex-wrap ${
        isMobile ? "justify-center items-center" : "m-4"
      }`}
    >
      {joinData.map((list) => (
        <div
          key={list.id}
          className={`bg-white m-5 rounded-xl w-80 border`}
          style={{ borderColor: list.borderColor }}
        >
          <img src={bg} className="w-80 h-12 rounded-t-xl" />
          <div className="bg-gray-900 h-60 rounded-t-xl flex flex-col">
            <div>
              <img
                src={list.dp}
                className="w-20 h-20 rounded-full mr-40 absolute -mt-9 ml-5"
              />
            </div>
            <div className="text-white pt-12 text-base font-bold mx-4">
              {list.name}
            </div>
            <div className="text-white text-sm px-4">{list.userName}</div>
            <div className="text-sm text-white px-4">{list.description}</div>

            <button
              className="flex justify-center items-center text-white border border-white rounded-xl p-2 text-base w-11/12 self-center mt-3"
              onClick={() => setModalOpen(true)}
            >
              View Squad
            </button>
          </div>
        </div>
      ))}
      {modalOpen && <SquadModal>Sabin</SquadModal>}
    </div>
  );
};

export default SquadJoinCard;
