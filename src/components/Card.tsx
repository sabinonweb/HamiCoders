import { useContext } from "react"; 
import { MdOpenInNew } from "react-icons/md";
import { SlOptionsVertical } from "react-icons/sl";
import { PostData } from "../utilities/CardElement";
import { useEffect, useRef, useState } from "react";
import FloatCardMenu from "./FloatCardMenu";
import CardButtonComponent from "./cardfunctions/CardButtonComponent";


function Card({ PostElement }: { PostElement: PostData }) {
  
  const [isHovering, setIsHovering] = useState(false);
  const [isOptionClick, setIsOptionClick] = useState(false);
  useEffect(() => {
    const handler = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOptionClick(false);
      }
    };
    document.addEventListener("mousedown", handler);
  });
  const handleMouseOver = () => {
    setIsHovering(true);
  };
  const handleMouseOut = () => {
    setIsHovering(false);
  };
  const handleOptionClick = () => {
    setIsOptionClick(!isOptionClick);
  };
  let menuRef = useRef<HTMLDivElement>(null);


  return (
    <div
      className="bg-themeFloat p-4 rounded-lg shadow border-[1px] border-themeBgNotification relative"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <div className="mb-2 flex flex-row items-center justify-between transition-opacity duration-300">
        <img
          src="https://picsum.photos/600/400"
          alt="Image"
          className="w-10 h-10 rounded-full object-cover "
        ></img>
        {isHovering && (
          <div className="flex flex-row items-center">
            <p className="text-sm text-white bg-themePurpleButton p-2 rounded-md flex items-center gap-2 cursor-pointer font-bold">
              Readmore <MdOpenInNew></MdOpenInNew>
            </p>
            <p
              className="text-sm text-themeLabelTertiary p-2 cursor-pointer"
              onClick={handleOptionClick}
            >
              <SlOptionsVertical />
            </p>
          </div>
        )}
        {isOptionClick && (
          <FloatCardMenu
            menuRef={menuRef}
            isClick={isOptionClick}
          ></FloatCardMenu>
        )}
      </div>

      <p className="text-xl font-semibold mb-2 text-themeLabelPrimary">
        {PostElement.title}
      </p>
      <p className="text-sm font-normal mb-2 text-themeLabelSeconday  ">
        {PostElement.date}
      </p>
      <div className="max-w-lg mx-auto ">
        <img
          src={PostElement.image}
          alt="Image"
          className="w-full h-40 rounded-lg object-cover "
        ></img>
      </div>
      <CardButtonComponent></CardButtonComponent>
    </div>
  );
}

export default Card;
