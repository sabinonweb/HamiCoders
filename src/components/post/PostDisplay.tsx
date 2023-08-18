import RightPostContent from "./RightPostContent";
import LeftPostContent from "./LeftPostContent";

function PostDisplay() {
  return (
    <>
      <div className="fixed inset-0 flex items-start top-7 justify-center z-20 p-2">
        <div className="flex bg-themeBgPrimary rounded-lg shadow border-[1px] border-themeBgNotification max-w-4xl">
          <LeftPostContent></LeftPostContent>
          <RightPostContent></RightPostContent>
        </div>
      </div>

      <div className="fixed inset-0 h-full bg-themePurpleButton opacity-30 z-10 "></div>
    </>
  );
}

export default PostDisplay;
