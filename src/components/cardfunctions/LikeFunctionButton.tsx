import { useContext, useState } from "react";
import { BiUpvote, BiSolidUpvote } from "react-icons/bi";
import { PostContext } from "../MainDisplay";
import { PostData } from "../../utilities/CardElement";
import { motion } from "framer-motion";

function LikeFunctionButton() {
  const PostElement: PostData | undefined = useContext(PostContext);
  const [isLiked, setIsLiked] = useState(false);
  const handleLike = () =>{
    if(PostElement?.likes)
    if (!isLiked)
    {
      PostElement.likes =PostElement.likes + 1;
    }
    else
    {
      PostElement.likes =PostElement.likes - 1;
    }
    setIsLiked(!isLiked);
  }
  return (
    <motion.div className="flex px-4 items-center card-button" onClick={handleLike}>
      <p className={`text-xl font-bold ${!isLiked? "text-themeLabelTertiary": "text-themeGreenButton"}  p-2 cursor-pointer hover:text-themeGreenButton`}>{!isLiked ? <BiUpvote></BiUpvote> : <BiSolidUpvote></BiSolidUpvote>}</p>
      <p className={`text-base ${!isLiked?"text-themeLabelTertiary":"text-themeGreenButton"}`}>{PostElement && PostElement.likes}</p>
    </motion.div>
  );
}

export default LikeFunctionButton;
