import RightPostContent from "./RightPostContent";
import LeftPostContent from "./LeftPostContent";
import { useParams } from "react-router-dom";
import Posts from "../../utilities/CardElement";
import { createContext } from "react";
import { PostData } from "../../utilities/CardElement";
import { motion } from "framer-motion"; 
export const PostContext = createContext<PostData | undefined>(undefined);

function PostDisplay() {
  const { id } = useParams();
  let foundPost;
  if (id) {
    foundPost = Posts.find((post) => post.id === parseInt(id));
  }
  const animationVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <>
 
    <motion.div 
 initial="hidden"
 animate="visible"
 variants={animationVariants}
 transition={{ duration: 0.2 }}
    >
      <div className="fixed inset-0 h-full bg-themePurpleButton opacity-30 z-10 "></div> 
      <div className="fixed inset-0 flex items-start top-7 justify-center z-20 p-2">
        <div className="flex bg-themeBgPrimary rounded-lg shadow border-[1px] border-themeBgNotification max-w-4xl">
          <PostContext.Provider value={foundPost}>
            <LeftPostContent></LeftPostContent>
            <RightPostContent></RightPostContent>
          </PostContext.Provider>
        </div>
      </div>


    </motion.div>

    </>
  );
}

export default PostDisplay;
