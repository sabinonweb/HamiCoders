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
      className="flex flex-1 flex-col"
      style={{
        justifyContent: "space-between",
      }}
    >
      <div style={{ flex: 0.03, transition: "left 10s" }}>
        <button onClick={buttonClick}>
          {React.cloneElement(
            drawerOpen ? <LeftOutlined /> : <RightOutlined />,
            {
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
            }
          )}
        </button>
      </div>
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
