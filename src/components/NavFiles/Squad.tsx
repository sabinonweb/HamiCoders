import { squadData, joinData } from "../../utilities/SquadData";

const Squad = () => {
  return (
    <div>
      {squadData.map((list: any) => (
        <div>
          <img src={list.background} />
        </div>
      ))}
    </div>
  );
};

export default Squad;
