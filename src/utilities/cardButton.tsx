import { BiUpvote, BiSolidUpvote } from "react-icons/bi";
import { FaRegCommentDots, FaCommentDots } from "react-icons/fa";
import { IoIosShare } from "react-icons/io";
interface CardButton {
  icon: React.ReactNode;
  color: string;
  value?: number;
}

const createCardButton = (
  icon: React.ReactNode,
  color: string,
  value?: number
): CardButton => {
  return { icon, value, color };
};

const LikeButton = createCardButton(
  <BiUpvote></BiUpvote>,
  "themeGreenButton",
  6
);
const CommentButton = createCardButton(
  <FaRegCommentDots />,
  "themeCyanButton",
  9
);
const ShareButton = createCardButton(<IoIosShare />, "themePurpleButton");
export { LikeButton, CommentButton, ShareButton };
