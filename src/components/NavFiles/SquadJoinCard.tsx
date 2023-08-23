import { useEffect, useState } from "react";
import { joinData } from "../../utilities/SquadData";
import bg from "../../assets/images/bg.jpg";

const SquadJoinCard = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

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
      {joinData.map(
        (list) => (
          console.log(list.borderColor),
          (
            <div
              key={list.id}
              className={`bg-white m-5 rounded-xl h-72 w-80`}
              style={{ borderColor: list.borderColor }}
            >
              <img src={bg} className="w-80 h-12 filled" />
              <div className="bg-red-700 h-60 rounded-t-xl flex flex-col">
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
                <div className="text-sm text-white px-4">
                  {list.description}
                </div>

                <div className="flex justify-center items-center text-white border border-white rounded-xl p-2 text-base w-11/12 self-center mt-3">
                  View Squad
                </div>
              </div>
            </div>
          )
        )
      )}
    </div>
  );
};

export default SquadJoinCard;
