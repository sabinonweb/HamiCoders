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
const DrawerOpen = (drawerOpen: boolean) => {
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
      className="bg-black flex flex-1 flex-col w-4/12 "
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
            className={`my-1 ${drawerOpen ? "fadeIn" : "fadeOut"}`}
          >
            {React.cloneElement(list.icon, {
              style: { fontSize: "20px", color: "gray" },
            })}
            <div
              className="text-base ml-4 text-slate-400 ease-in duration-500"
              style={{ alignSelf: "center" }}
            >
              {list.name}
            </div>
          </div>
        ))}
        <div className="text-slate-700 text-sm font-bold ease-in duration-500">
          Discover
        </div>
        {discoverData.map((list, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
            className={`my-1 ${drawerOpen ? "fadeIn" : "fadeOut"}`}
          >
            {React.cloneElement(list.icon, {
              style: {
                fontSize: "20px",
                color: "gray",
              },
            })}
            <div className="text-base ml-2 text-slate-400">{list.name}</div>
          </div>
        ))}
        <div className="text-gray-700 text-sm font-bold">Contribute</div>
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
            <div className="text-base ml-2 text-slate-400 ease-in duration-500">
              {list.name}
            </div>
          </div>
        ))}
        <div className="text-gray-700 text-sm">Manage</div>
        {manageData.map((list, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
            className={`my-1 ${drawerOpen ? "fadeIn" : "fadeOut"}`}
          >
            {React.cloneElement(list.icon, {
              style: { fontSize: "20px", color: "gray" },
            })}
            <div className="text-base ml-2 text-slate-400">{list.name}</div>
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
            className={`my-2 ${drawerOpen ? "fadeIn" : "fadeOut"}`}
          >
            {React.cloneElement(list.icon, {
              style: { fontSize: "20px", color: "gray" },
            })}
            <div className="text-base ml-2 text-slate-400">{list.name}</div>
          </div>
        ))}
      </div>
      <div
        className="border-2 text-slate-400 border-slate-400 p-2 w-44 flex flex-row justify-center rounded-xl mt-4"
        style={{ flex: 0.1 }}
      >
        <img src="../assets/images/daily.png" />
        <div className="flex-col ml-3">
          <div className="text-base">No rank</div>
          <div className="text-xs">Re-earn: 0/1 days</div>
        </div>
      </div>
    </div>
  );
};

export default DrawerOpen;
