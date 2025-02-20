import React from "react";

const Settings = ({ data, setData }) => {
  return (
    <div>
      <fieldset className="border">
        <legend className="py-[3px] ml-[10px]">
          Choose your favorite theme ?
        </legend>

        <div className="flex flex-col gap-5">
          <div className="flex gap-5 items-center">
            <input type="radio" className="!h-[20px]" />
            <label for="kraken">Kraken</label>
          </div>
        </div>
      </fieldset>
    </div>
  );
};

export default Settings;
