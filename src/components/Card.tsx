import CardFunctionalButton from "./CardFunctionalButton";
import {
  LikeButton,
  CommentButton,
  ShareButton,
} from "../utilities/cardButton";

function Card() {
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
        Forward Compatibility and Toolchain Management in Go 1.21
      </p>
      <p className="text-sm font-normal mb-2 text-themeLabelSeconday  ">
        Aug 2023 . 5 min read
      </p>
      <div className="max-w-lg mx-auto ">
        <img
          src="https://picsum.photos/600/400"
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
