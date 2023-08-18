import { FaRegCommentDots, FaCommentDots } from "react-icons/fa";


function CommentFunctionButton() {
  return (
    <div className={`flex px-4 items-center card-button`}>
    <p className="text-xl font-bold text-themeLabelTertiary p-2 cursor-pointer hover:text-themePurpleButton"><FaRegCommentDots></FaRegCommentDots></p>
    <p className={`text-base text-themeLabelTertiary `}>10</p>
  </div>
  )
}

export default CommentFunctionButton