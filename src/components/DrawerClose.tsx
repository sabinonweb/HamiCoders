import React from "react";
import {
  FireOutlined,
  ArrowUpOutlined,
  UngroupOutlined,
  LinkOutlined,
  SearchOutlined,
  CodeOutlined,
  PauseCircleOutlined,
  HomeOutlined,
  PlusCircleOutlined,
  LeftOutlined,
  SoundOutlined,
  FileTextOutlined,
  MinusSquareOutlined,
  AlertOutlined,
  ShareAltOutlined,
  CreditCardOutlined,
  BookOutlined,
  EyeOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { useState } from "react";
const DrawerClose = () => {
  const feedData = [
    {
      name: "My feed",
      icon: <HomeOutlined />,
    },
    {
      name: "New Squad",
      icon: <PlusCircleOutlined />,
    },
  ];

  const discoverData = [
    {
      name: "Popular",
      icon: <FireOutlined />,
    },
    {
      name: "Most unvoted",
      icon: <ArrowUpOutlined />,
    },
    {
      name: "Best discounts",
      icon: <CreditCardOutlined />,
    },
    {
      name: "Squad",
      icon: <UngroupOutlined />,
    },
    {
      name: "Search",
      icon: <SearchOutlined />,
    },
  ];

  const contributeData = [
    {
      name: "Submit article",
      icon: <LinkOutlined />,
    },
    {
      name: "Suggest new source",
      icon: <CodeOutlined />,
    },
  ];

  const manageData = [
    {
      name: "BookMarks",
      icon: <BookOutlined />,
    },
    {
      name: "Reading History",
      icon: <EyeOutlined />,
    },
    {
      name: "Pause new tab",
      icon: <PauseCircleOutlined />,
    },
    {
      name: "Customize",
      icon: <SettingOutlined />,
    },
  ];

  const footerData = [
    {
      name: "We are hiring",
      icon: <SoundOutlined />,
    },
    {
      name: "Docs",
      icon: <FileTextOutlined />,
    },
    {
      name: "Changelog",
      icon: <MinusSquareOutlined />,
    },
    {
      name: "Feedback",
      icon: <AlertOutlined />,
    },
    {
      name: "Invite People",
      icon: <ShareAltOutlined />,
    },
  ];
  const [drawerOpen, setDrawerOpen] = useState(false);
  const buttonClick = () => {
    setDrawerOpen((prevState) => !prevState);
  };

  return (
    <div
      className="bg-black flex flex-1 flex-col w-1/12"
      style={{ justifyContent: "space-between" }}
    >
      <div style={{ flex: 0.03 }} className="bg-purple-100">
        <button onClick={buttonClick} aria-label="close sidebar">
          {React.cloneElement(<LeftOutlined />, {
            style: {
              fontSize: 25,
              color: "black",
              position: "absolute",
              top: 40,
              left: 170,
              backgroundColor: "lightgray",
              borderRadius: 10,
            },
          })}
        </button>
      </div>
      <div className="mt-20 bg-orange-200" style={{ flex: 0.57 }}>
        {feedData.map((list, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
            className="my-1"
          >
            {React.cloneElement(list.icon, {
              style: { fontSize: "20px", color: "gray" },
            })}
          </div>
        ))}
        <div className="py-2"></div>
        {discoverData.map((list, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
            className="my-2"
          >
            {React.cloneElement(list.icon, {
              style: { fontSize: "20px", color: "gray" },
            })}
          </div>
        ))}
        <div className="py-2"></div>
        {contributeData.map((list, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
            className="my-2"
          >
            {React.cloneElement(list.icon, {
              style: { fontSize: "20px", color: "gray" },
            })}
          </div>
        ))}

        {manageData.map((list, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
            className="my-2"
          >
            {React.cloneElement(list.icon, {
              style: { fontSize: "20px", color: "gray" },
            })}
          </div>
        ))}
      </div>
      <div
        style={{ flex: 0.1, padding: "150px 0", backgroundColor: "#99c0de" }}
      />
      <div style={{ flex: 0.3 }} className="bg-green-300">
        {footerData.map((list, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
            className="my-2"
          >
            {React.cloneElement(list.icon, {
              style: { fontSize: "20px", color: "gray" },
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DrawerClose;
