import React, { useState } from "react";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import DrawerClose from "./DrawerClose";
import DrawerOpen from "./DrawerOpen";
const Navigation = () => {
  const [drawerOpen, setDrawerOpen] = useState(true);
  const buttonClick = () => {
    setDrawerOpen((prevState) => !prevState);
    console.log("Clicked");
  };

  return (
    <div
      className="bg-red-100 flex flex-1 flex-col"
      style={{
        justifyContent: "space-between",
      }}
    >
      <div style={{ flex: 0.03 }} className="">
        <button onClick={buttonClick}>
          {React.cloneElement(
            drawerOpen ? <RightOutlined /> : <LeftOutlined />,
            {
              style: {
                fontSize: 25,
                color: "black",
                position: "absolute",
                top: 40,
                left: 170,
                backgroundColor: "lightgray",
                borderRadius: 10,
              },
            }
          )}
        </button>
      </div>
      {drawerOpen ? <DrawerOpen /> : <DrawerClose />}
    </div>
  );
};

export default Navigation;
