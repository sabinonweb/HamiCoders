import Navigation from "./Navigation";
import TopTab from "./TopTab";
import Squad from "./NavFiles/Squad";

function Secondary() {
  return (
    <div className="flex flex-col">
      <div
        className="border-b w-full border-slate-600"
        style={{ fontFamily: "Roboto, sans-serif", color: "white" }}
      >
        <TopTab />
      </div>
      <div className="flex flex-row">
        <div className="border border-slate-600">
          <Navigation />
        </div>
      </div>
    </div>
  );
}

export default Secondary;