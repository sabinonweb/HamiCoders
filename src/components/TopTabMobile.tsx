import * as solidIcons from "@fortawesome/free-solid-svg-icons";
import * as regularIcons from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/Navigation.css";

const TopTabMobile = () => {
  return (
    <div className="text-slate-500 flex justify-between items-center h-14 topbar">
      <div className="flex flex-row items-center">
        <FontAwesomeIcon
          icon={solidIcons.faCode}
          className="text-3xl text-gray-600"
        />
        <div className="text-xl ml-3 text-white font-bold">daily</div>
        <div className="text-base mt-2">.dev</div>
      </div>
      <div className="flex flex-row">
        <div className="bg-gray-800 flex justify-center items-center rounded-xl">
          <FontAwesomeIcon
            icon={regularIcons.faBell}
            className="text-gray-200 text-xl w-12"
          />
        </div>
      </div>
    </div>
  );
};

export default TopTabMobile;
