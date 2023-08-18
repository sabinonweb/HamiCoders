import { IoIosShare } from "react-icons/io";
function ShareFunctionComponent() {
  return (
    <div className={`flex px-4 items-center card-button`}>
      <p className="text-xl font-bold text-themeLabelTertiary p-2 cursor-pointer transition-colors duration-100 ease-in-out hover:text-themeOrangeButton">
       <IoIosShare></IoIosShare>
      </p>
      <p className={`text-base text-themeLabelTertiary `}>1</p>
    </div>
  );
}

export default ShareFunctionComponent;
