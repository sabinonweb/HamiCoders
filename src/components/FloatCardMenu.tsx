import React from "react";
import { AiOutlineEye, AiOutlineFlag } from "react-icons/ai";
import { BsBookmark } from "react-icons/bs";
import { CgRemove } from "react-icons/cg";
import { BiDownvote } from "react-icons/bi";

type FloatCardMenuProps = {
  menuRef: React.RefObject<any>;
  isClick: boolean;
};

const cardMenuContext = [
  {
    icon: <AiOutlineEye></AiOutlineEye>,
    text: "Hide",
  },
  {
    icon: <BsBookmark></BsBookmark>,
    text: "Save to bookmarks",
  },
  {
    icon: <BiDownvote></BiDownvote>,
    text: "Downvote",
  },
  {
    icon: <CgRemove></CgRemove>,
    text: `Don't Show posts from Account`,
  },
  {
    icon: <AiOutlineFlag></AiOutlineFlag>,
    text: "Report",
  },
];

const FloatCardMenu: React.FC<FloatCardMenuProps> = ({ menuRef, isClick }) => {
  return (
    <div
      className={`py-2 bg-themeBgSecondary rounded-lg shadow border-[1px] border-themeBgNotification absolute top-16  right-2 ${
        !isClick ? "opacity-0" : "opacity-100"
      }`}
      ref={menuRef}
    >
      {cardMenuContext.map((item) => {
        return (
          <p className="flex gap-4 text-base text-themeDividerPrimary p-2 cursor-pointer hover:bg-themeBgNotification">
            <p className="flex-1/4">{item.icon}</p>
            <p className="flex-3/4">{item.text}</p>
          </p>
        );
      })}
    </div>
  );
};

export default FloatCardMenu;
