import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as solidIcons from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { motion, spring } from "framer-motion";
import "../styles/Navigation.css";

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

  const mobileData = [
    {
      name: "My feed",
      icon: solidIcons.faHouseChimney,
      key: 19,
    },
    {
      name: "BookMarks",
      icon: solidIcons.faBookBookmark,
      key: 20,
    },
    {
      name: "Search",
      icon: solidIcons.faSearchPlus,
      key: 21,
    },
    {
      name: "Notifications",
      icon: solidIcons.faBell,
      key: 22,
    },
    {
      name: "Filter",
      icon: solidIcons.faSliders,
      key: 23,
    },
  ];

  const [activeButton, setActiveButton] = useState(-1);
  const [isClicked, setIsClicked] = useState(true);
  // const [isMobileView, setIsMobileView] = useState(true);

  const handleClick = () => {
    setIsClicked((prevState) => !prevState);
  };

  // const handleMobileView = () => {
  //   setIsMobileView(window.innerWidth <= 1024);
  //   setIsClicked(window.innerWidth > 1024);
  // };

  // useEffect(() => {
  //   window.addEventListener("resize", handleMobileView);
  // }, []);

  return (
    <>
      {/* {!isMobileView ? ( */}
      <motion.button onClick={handleClick}>
        {isClicked ? (
          <FontAwesomeIcon
            icon={solidIcons.faChevronCircleLeft}
            className={`text-white absolute ml-56 navbar`}
          />
        ) : (
          <FontAwesomeIcon
            icon={solidIcons.faChevronCircleRight}
            className="text-white  absolute ml-8 navbar"
          />
        )}
      </motion.button>
      {/* ) : null} */}

      {/* {isMobileView ? ( */}
      <motion.div
        className={`border-t border-slate-700 bottom-0 absolute w-full flex justify-between items-center bottom`}
      >
        {mobileData.map((list, index) => (
          <motion.button
            className={` hover:bg-slate-500 w-28 rounded-xl`}
            onClick={() => setActiveButton(list.key)}
          >
            <motion.div
              className={
                activeButton === list.key
                  ? "bg-slate-50 h-1  w-16 flex justify-center"
                  : undefined
              }
              initial={false}
              animate={{
                x: activeButton === list.key ? 12 : 0,
              }}
              transition={{ type: spring }}
            ></motion.div>
            <FontAwesomeIcon
              key={list.key}
              icon={list.icon}
              className={`${
                activeButton === list.key ? "text-white mb-1" : "text-slate-400"
              } text-2xl hover:text-white mt-2`}
            />
          </motion.button>
        ))}
      </motion.div>
      {/* ) : ( */}
      <motion.div
        className={`${isClicked ? "w-60" : "w-10"} navbar`}
        initial={false}
        animate={{ width: isClicked ? 240 : 40 }}
      >
        <div className={`flex flex-col items-center px-1 mt-10 `}>
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
                  className="w-48 ml-2 flex justify-start button-text"
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
            <div className="text-sm font-semibold text-gray-700 self-start ml-1 py-2 title">
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
        {isClicked ? (
          <div className="flex">
            <div className="border py-4 px-12 rounded-xl flex justify-start items-start">
              <div className="flex flex-row">
                <div>
                  <FontAwesomeIcon
                    icon={solidIcons.faCircleRadiation}
                    className="text-4xl start-px text-gray-500"
                  />
                </div>

                <div className="text-xl font-semibold text-gray-500">
                  No rank
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </motion.div>
      {/* )} */}
    </>
  );
};

export default Navigation;
