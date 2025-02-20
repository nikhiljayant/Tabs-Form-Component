import React from "react";

const Settings = ({ data, setData }) => {
  return (
    <div>
      <fieldset className="border rounded-lg">
        <legend className="py-[3px] ml-[15px]">
          Choose your favorite theme ?
        </legend>

        <div className="flex flex-col gap-3 ml-[25px] my-[15px]">
          <div className="flex gap-5 items-center">
            <input
              type="radio"
              name="theme"
              value="light"
              checked={data?.settings?.theme === "light"}
              onChange={(e) => {
                setData({
                  ...data,
                  settings: { theme: e.target.value },
                });
                localStorage.setItem("theme", e.target.value);
              }}
              className="!h-[20px] !static !w-[15px]"
            />
            <label for="kraken">Light</label>
          </div>
          <div className="flex gap-5 items-center">
            <input
              type="radio"
              name="theme"
              value="dark"
              checked={data?.settings?.theme === "dark"}
              className="!h-[20px] !static !w-[15px]"
              onChange={(e) => {
                setData({
                  ...data,
                  settings: { theme: e.target.value },
                });
                localStorage.setItem("theme", e.target.value);
              }}
            />
            <label for="kraken">Dark</label>
          </div>
        </div>
      </fieldset>
    </div>
  );
};

export default Settings;
