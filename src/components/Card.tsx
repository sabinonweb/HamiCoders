import CardFunctionalButton from "./CardFunctionalButton";
import {
  LikeButton,
  CommentButton,
  ShareButton,
} from "../utilities/cardButton";
import { PostData } from "../utilities/CardElement";
function Card({PostElement}:{ PostElement: PostData }) {
  return (
    <div className="bg-themeFloat p-4 rounded-lg shadow border-[1px] border-themeBgNotification">
      <div className="mb-2">
        <img
          src="https://picsum.photos/600/400"
          alt="Image"
          className="w-10 h-10 rounded-full object-cover "
        ></img>
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

      <div className="flex justify-between">
        <CardFunctionalButton button={LikeButton}></CardFunctionalButton>
        <CardFunctionalButton button={CommentButton}></CardFunctionalButton>
        <CardFunctionalButton button={ShareButton}></CardFunctionalButton>
      </div>
    </div>
  );
}

export default Card;
