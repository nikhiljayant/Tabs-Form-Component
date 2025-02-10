import React from "react";
// Components
import Profile from "./Profile";
import Interests from "./Interests";
import Settings from "./Settings";

const TabForm = () => {
  // 26:20
  const tabs = [
    { name: "Profile", component: <Profile /> },
    { name: "Interests", component: <Interests /> },
    { name: "Settings", component: <Settings /> },
  ];
  return (
    <div>
      <div className="heading-container">
        {tabs.map((t) => (
          <div key={t.name} className="heading">
            {t.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TabForm;
