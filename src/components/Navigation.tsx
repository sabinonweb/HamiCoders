import React, { useState } from "react";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import DrawerClose from "./DrawerClose";
import DrawerOpen from "./DrawerOpen";

const Navigation = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const buttonClick = () => {
    setDrawerOpen((prevState) => !prevState);
    console.log("Clicked");
  };

  return (
    <div
      className={
        drawerOpen
          ? "flex  flex-col bg-yellow-400 p-1"
          : "flex  flex-col bg-yellow-400 p-1"
      }
      style={{
        justifyContent: "space-between",
      }}
    >
      <button onClick={buttonClick} className={drawerOpen ? "w-1/12" : "w-5"}>
        {React.cloneElement(drawerOpen ? <LeftOutlined /> : <RightOutlined />, {
          style: drawerOpen
            ? {
                fontSize: 25,
                color: "black",
                position: "absolute",
                top: 40,
                left: 170,
                backgroundColor: "lightgray",
                borderRadius: 10,
                zIndex: 1,
              }
            : {
                fontSize: 25,
                color: "black",
                position: "absolute",
                top: 40,
                left: 20,
                backgroundColor: "lightgray",
                borderRadius: 10,
                transition: "left 0.5s",
                zIndex: 1,
              },
        })}
      </button>

      <div style={{}}>
        {drawerOpen ? (
          <DrawerOpen drawerOpen={drawerOpen} />
        ) : (
          <DrawerClose drawerOpen={drawerOpen} />
        )}
      </div>
    </div>
  );
};

export default Navigation;
