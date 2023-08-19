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
const DrawerOpen = (drawerOpen) => {
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

  return (
    <div
      className="bg-black flex flex-1 flex-col w-1/12 h-full"
      style={{ justifyContent: "space-between" }}
    >
      <div className="mt-20" style={{ flex: 0.57 }}>
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
        <div className="text-slate-700 text-sm font-bold h-5"></div>
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
              style: {
                fontSize: "20px",
                color: "gray",
              },
            })}
          </div>
        ))}
        <div className="text-gray-700 text-sm font-bold h-5"></div>
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
        <div className="text-gray-700 text-sm font-bold h-5"></div>
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
      <div style={{ flex: 0.1, padding: "60px 0" }} />
      <div style={{ flex: 0.2 }} className="">
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

export default DrawerOpen;
