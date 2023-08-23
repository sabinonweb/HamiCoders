import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { joinData } from "../../utilities/SquadData";
import * as solidIcons from "@fortawesome/free-solid-svg-icons";
const SquadCard = () => {
  return (
    <div className="flex justify-center items-center">
      <div
        className="flex border rounded-3xl bg-primary flex-col p-7 m-7 justify-center items-center"
        style={{ backgroundColor: "#9abcdb" }}
      >
        <div>
          <FontAwesomeIcon
            icon={solidIcons.faCampground}
            className="text-5xl mx-auto"
          />
        </div>
        <div className="px-2 py-3">Introducing Squads</div>
        <div className="px-2 py-3 font-normal text-xl text-center">
          <div className="flex flex-col items-center h-full justify-center">
            Unleashing the magic of developer communities with Squads. An
            opportunity to dive deep and go niche together with like-minded
            devs.
          </div>
        </div>
        <div className="text-gray-500 text-base"></div>
        <button className="bg-white px-2 py-3 text-sm font-bold rounded-lg">
          Create New Squad
        </button>
      </div>
    </div>
  );
};

export default SquadCard;
