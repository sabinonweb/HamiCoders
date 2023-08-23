import * as solidIcons from "@fortawesome/free-solid-svg-icons";
import * as regularIcons from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { useState } from "react";
import "../styles/Navigation.css";
// import Navigation from "./Navigation";

// const [isOpen, setIsOpen] = useState(false);

// const handleOpen = () => {
//   setIsOpen((prevState) => !prevState);
// };

const TopTab = () => {
  return (
    <>
      {/* {isMobile ? ( */}
      <div className="text-slate-500 flex justify-between items-center h-14 topbar">
        <div className="flex flex-row items-center">
          <FontAwesomeIcon
            icon={solidIcons.faCode}
            className="text-3xl text-gray-600"
          />
          <div className="text-xl ml-3 text-white font-bold">Hami</div>
          <div className="text-base mt-2">.coders</div>
        </div>
        <div className="flex flex-row">
          <div className="bg-gray-800 flex justify-center items-center rounded-xl">
            <FontAwesomeIcon
              icon={regularIcons.faBell}
              className="text-gray-200 text-xl w-12"
            />
          </div>
          <div className="flex justify-center items-center ml-3">
            <img
              src="https://picsum.photos/seed/picsum/200/300"
              className="h-8 w-8 rounded-xl mr-2"
            />
          </div>
        </div>
      </div>

      <div className="text-slate-500 flex justify-between items-center h-14 topBottom">
        <div className="flex flex-row items-center">
          <button>
            <FontAwesomeIcon
              icon={solidIcons.faBars}
              className="text-2xl text-gray-600 ml-4"
            />
          </button>
        </div>
        <div className="flex flex-row items-center">
          <div className="text-xl ml-3 text-white font-bold">Hami</div>
          <div className="text-base mt-1">.coders</div>
        </div>
        <div className="flex flex-row">
          <div className="bg-gray-800 flex justify-center items-center rounded-xl h-10">
            <FontAwesomeIcon
              icon={solidIcons.faCircleRadiation}
              className="text-gray-200 text-xl w-12"
            />
          </div>
        </div>
      </div>

      {/* {isOpen && <Navigation />} */}
    </>
  );
};

export default TopTab;
