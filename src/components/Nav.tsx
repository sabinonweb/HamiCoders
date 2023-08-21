import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as solidIcons from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { motion, spring } from "framer-motion";
import "../styles/Navigation.css";
import {
  feedData,
  manageData,
  footerData,
  mobileData,
  discoverData,
  contributeData,
} from "../utilities/NavigationData";

const Nav = () => {
  const [activeButton, setActiveButton] = useState(-1);
  const [isClicked, setIsClicked] = useState(true);

  const handleClick = () => {
    setIsClicked((prevState) => !prevState);
  };

  return (
    <>
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
    </>
  );
};

export default Nav;
