import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as solidIcons from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { motion } from "framer-motion";

const Navigation = () => {
  const feedData = [
    {
      name: "My feed",
      icon: solidIcons.faHouseChimney,
      key: 1,
    },
    {
      name: "New Squad",
      icon: solidIcons.faPlus,
      key: 2,
    },
  ];

  const discoverData = [
    {
      name: "Popular",
      icon: solidIcons.faFire,
      key: 3,
    },
    {
      name: "Most upvoted",
      icon: solidIcons.faUpLong,
      key: 4,
    },
    {
      name: "Best discounts",
      icon: solidIcons.faCommentDollar,
      key: 5,
    },
    {
      name: "Squad",
      icon: solidIcons.faCampground,
      key: 6,
    },
    {
      name: "Search",
      icon: solidIcons.faSearchPlus,
      key: 7,
    },
  ];

  const contributeData = [
    {
      name: "Submit article",
      icon: solidIcons.faLink,
      key: 8,
    },
    {
      name: "Suggestion",
      icon: solidIcons.faCode,
      key: 9,
    },
  ];

  const manageData = [
    {
      name: "BookMarks",
      icon: solidIcons.faBookBookmark,
      key: 10,
    },
    {
      name: "Reading History",
      icon: solidIcons.faEye,
      key: 11,
    },
    {
      name: "Pause new tab",
      icon: solidIcons.faPause,
      key: 12,
    },
    {
      name: "Customize",
      icon: solidIcons.faGear,
      key: 13,
    },
  ];

  const footerData = [
    {
      name: "We are hiring",
      icon: solidIcons.faCircleInfo,
      key: 14,
    },
    {
      name: "Docs",
      icon: solidIcons.faFile,
      key: 15,
    },
    {
      name: "Changelog",
      icon: solidIcons.faPenNib,
      key: 16,
    },
    {
      name: "Feedback",
      icon: solidIcons.faComment,
      key: 17,
    },
    {
      name: "Invite People",
      icon: solidIcons.faEnvelope,
      key: 18,
    },
  ];

  const [activeButton, setActiveButton] = useState(-1);
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked((prevState) => !prevState);
  };

  return (
    <motion.div
      className={`${isClicked ? "w-60" : "w-10"}`}
      initial={false}
      animate={{ width: isClicked ? 240 : 40 }}
    >
      <motion.button
        onClick={handleClick}
        initial={false}
        animate={{ rotate: "360deg" }}
      >
        {isClicked ? (
          <FontAwesomeIcon
            icon={solidIcons.faChevronCircleLeft}
            className={`text-white absolute ml-56`}
          />
        ) : (
          <FontAwesomeIcon
            icon={solidIcons.faChevronCircleRight}
            className="text-white  absolute ml-8"
          />
        )}
      </motion.button>
      <div className="flex flex-col items-center px-1 mt-10">
        {feedData.map((list, index) => (
          <motion.button
            key={index}
            whileHover={{ scale: 0.9 }}
            className={`flex flex-row text-base items-center justify-center ${
              isClicked ? "my-1" : "my-2"
            }
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

            {isClicked ? (
              <motion.div
                className="w-48 ml-2 flex justify-start"
                initial={{ opacity: 0 }}
                animate={{ opacity: isClicked ? 1 : 0 }}
                transition={{ duration: 0.5 }}
              >
                {list.name}
              </motion.div>
            ) : null}
          </motion.button>
        ))}
      </div>

      <div className="flex  flex-col items-center px-1">
        {isClicked ? (
          <div className="text-sm font-semibold text-gray-700 self-start ml-1 py-2">
            Discover
          </div>
        ) : (
          <div className="py-3"></div>
        )}

        {discoverData.map((list, index) => (
          <motion.button
            key={index}
            whileHover={{ scale: 0.9 }}
            className={`flex flex-row text-base items-center justify-center ${
              isClicked ? "my-1" : "my-2"
            }
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

            {isClicked ? (
              <motion.div
                className="w-48 ml-2 flex justify-start"
                initial={{ opacity: 0 }}
                animate={{ opacity: isClicked ? 1 : 0 }}
                transition={{ duration: 0.5 }}
              >
                {list.name}
              </motion.div>
            ) : null}
          </motion.button>
        ))}
      </div>

      <div className="flex  flex-col items-center px-1">
        {isClicked ? (
          <div className="text-sm font-semibold text-gray-700 self-start ml-1 py-2">
            Contribute
          </div>
        ) : (
          <div className="py-3"></div>
        )}
        {contributeData.map((list, index) => (
          <motion.button
            key={index}
            className={`flex flex-row text-base items-center justify-center ${
              isClicked ? "my-1" : "my-2"
            }
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

            {isClicked ? (
              <motion.div
                className="w-48 ml-2 flex justify-start"
                initial={{ opacity: 0 }}
                animate={{ opacity: isClicked ? 1 : 0 }}
                transition={{ duration: 0.5 }}
              >
                {list.name}
              </motion.div>
            ) : null}
          </motion.button>
        ))}
      </div>

      <div className="flex  flex-col items-center px-1">
        {isClicked ? (
          <div className="text-sm font-semibold text-gray-700 self-start ml-1 py-2">
            Manage
          </div>
        ) : (
          <div className="py-3"></div>
        )}
        {manageData.map((list, index) => (
          <motion.button
            key={index}
            whileHover={{ scale: 0.9 }}
            className={`flex flex-row text-base items-center justify-center ${
              isClicked ? "my-1" : "my-2"
            }
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

            {isClicked ? (
              <motion.div
                className="w-48 ml-2 flex justify-start"
                initial={{ opacity: 0 }}
                animate={{ opacity: isClicked ? 1 : 0 }}
                transition={{ duration: 0.5 }}
              >
                {list.name}
              </motion.div>
            ) : null}
          </motion.button>
        ))}
      </div>

      <div className={`${isClicked ? "py-28" : "py-32"}`}></div>

      <div className="flex flex-col items-center">
        {footerData.map((list, index) => (
          <motion.button
            key={index}
            whileHover={{ scale: 0.9 }}
            className={`flex flex-row text-base items-center justify-center ${
              isClicked ? "my-1" : "my-2"
            }
       hover:border hover:bg-slate-800 hover:border-slate-800 hover:text-white
       ${
         activeButton === list.key
           ? "border bg-slate-800 w-full border-slate-800 text-white"
           : "text-gray-500"
       }
`}
            onClick={() => setActiveButton(list.key)}
          >
            <FontAwesomeIcon icon={list.icon} className="" />

            {isClicked ? (
              <motion.div
                className="w-48 ml-2 flex justify-start"
                initial={{ opacity: 0 }}
                animate={{ opacity: isClicked ? 1 : 0 }}
                transition={{ duration: 0.5 }}
              >
                {list.name}
              </motion.div>
            ) : null}
          </motion.button>
        ))}
      </div>
      {isClicked ? (
        <div className="flex ">
          <div className="border py-4 px-12 rounded-xl flex justify-start items-start">
            <div className="flex flex-row">
              <div>
                <FontAwesomeIcon
                  icon={solidIcons.faCircleRadiation}
                  className="text-4xl start-px text-gray-500"
                />
              </div>

              <div className="text-xl font-semibold text-gray-500">No rank</div>
            </div>
          </div>
        </div>
      ) : null}
    </motion.div>
  );
};

export default Navigation;
