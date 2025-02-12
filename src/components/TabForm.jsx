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
    <div>
      <div className="heading-container">
        {tabs.map((t, index) => (
          <div key={t.name} className="heading" onClick={() => setActiveTab(index)}>
            {t.name}
          </div>
        ))}
      </div>
      <div className="tab-body">
        {activeTabComponent}
      </div>
    </div>
  );
};

export default TabForm;
