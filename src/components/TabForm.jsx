import React, { useState } from "react";
// Components
import Profile from "./Profile";
import Interests from "./Interests";
import Settings from "./Settings";

const TabForm = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { name: "Profile", component: <Profile /> },
    { name: "Interests", component: <Interests /> },
    { name: "Settings", component: <Settings /> },
  ];

  const activeTabComponent = tabs[activeTab].component;

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center">
      <div className="flex gap-5">
        {tabs.map((t, index) => (
          <button
            key={t.name}
            type="button"
            className={`border-b-2 px-4 py-2 mb-[10px] cursor-pointer transition-all duration-300 ease-in-out ${activeTab === index ? "border-green-500 text-green-500" : "border-slate-300 text-slate-500"}`}
            onClick={() => setActiveTab(index)}
          >
            {t.name}
          </button>
        ))}
      </div>
      <div className="w-[50%] border py-[10px] px-[20px] rounded-lg">{activeTabComponent}</div>
    </div>
  );
};

export default TabForm;
