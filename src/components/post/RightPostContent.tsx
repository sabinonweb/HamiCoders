import { FacebookFilled } from "@ant-design/icons";
import { useContext } from "react";
import { BiCopy } from "react-icons/bi";
import { IoLogoTwitter, IoMdClose } from "react-icons/io";
import { MdOpenInNew } from "react-icons/md";
import { SlOptionsVertical } from "react-icons/sl";
import { PostContext } from "./PostDisplay";



function RightPostContent() {
  const postValue = useContext(PostContext);
  return (

    <div className="w-2/5 p-4">
      <div className="flex flex-row items-center justify-between">
        <p className="text-sm text-white bg-themePurpleButton p-2 rounded-md flex items-center gap-2 cursor-pointer font-bold">
          Readmore <MdOpenInNew></MdOpenInNew>
        </p>
        <div className="flex flex-row gap-3 items-center">
          <p
            className="text-xl cursor-pointer hover:bg-themeBgSecondary hover:text-themeLabelTertiary text-themeLabelQuard p-3 rounded-lg"
            onClick={() => console.log("hello")}
          >
            <SlOptionsVertical />
          </p>

          <p
            className="text-xl cursor-pointer hover:bg-themeBgSecondary hover:text-themeLabelTertiary text-themeLabelQuard p-3 rounded-lg"
            onClick={() => console.log("hello")}
          >
            <IoMdClose />
          </p>
        </div>
      </div>
      <div className="flex flex-row gap-5 my-4 border px-4 border-themeBgNotification rounded-lg items-center py-2">
        <img
          src="https://picsum.photos/600/400"
          alt="Image"
          className="w-10 h-10 rounded-full object-cover "
        ></img>
        <div className="flex justify-start flex-col text-base">
          <p className=" text-themeLabelPrimary">Asayer</p>
          <p className=" text-themeLabelSeconday">@asayer</p>
        </div>
      </div>

      <div className="my-4 border px-4 border-themeBgNotification rounded-lg items-center py-2">
        <p className="text-base text-themeLabelQuard mb-2">
          Would you recommend this post?
        </p>
        <div className="flex flex-row flex-wrap gap-6 items-center">
          <div className="flex justify-start flex-col text-base items-center">
            <p className=" text-themeLabelTertiary text-xl p-2 flex items-start justify-center">
              <BiCopy />
            </p>
            <p className=" text-themeLabelTertiary">Copy link</p>
          </div>

          <div className="flex justify-start flex-col text-base items-center">
            <p className=" text-themeLabelTertiary text-xl p-2 flex items-start justify-center">
              <FacebookFilled></FacebookFilled>
            </p>
            <p className=" text-themeLabelTertiary">Facebook</p>
          </div>

          <div className="flex justify-start flex-col text-base items-center">
            <p className=" text-themeLabelTertiary text-xl p-2 flex items-start justify-center">
              <IoLogoTwitter></IoLogoTwitter>
            </p>
            <p className=" text-themeLabelTertiary">Twitter</p>
          </div>
        </div>
      </div>
    </div>


  );
}

export default RightPostContent;
