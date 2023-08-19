import { useState } from "react";
import * as solidIcons from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Mobile = ({ screenWidth }) => {
  const [activeButton, setActiveButton] = useState(-1);
  const mobileData = [
    {
      name: "My feed",
      icon: solidIcons.faHouseChimney,
      key: 1,
    },
    {
      name: "BookMarks",
      icon: solidIcons.faBookBookmark,
      key: 2,
    },
    {
      name: "Search",
      icon: solidIcons.faSearchPlus,
      key: 3,
    },
    {
      name: "Notifications",
      icon: solidIcons.faBell,
      key: 4,
    },
    {
      name: "Filter",
      icon: solidIcons.faFilter,
      key: 5,
    },
  ];

  return (
    <div>
      {mobileData.map((list, key) => (
        <motion.button
          key={key}
          whileHover={{ scale: 0.9 }}
          className={`flex flex-row text-base items-center justify-center
             hover:border hover:bg-slate-800 hover:border-slate-800 hover:text-white
             ${
               activeButton === list.key
                 ? "border bg-slate-800 w-full border-slate-800 text-white"
                 : "text-gray-500"
             }
     `}
          onClick={() => setActiveButton(list.key)}
        >
          <FontAwesomeIcon icon={list.icon} />
        </motion.button>
      ))}
    </div>
  );
};

export default Mobile;
