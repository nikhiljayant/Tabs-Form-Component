import React from "react";
// Components
import FormInput from "./reusable_components/FormInput";

const Interests = ({ data, setData, setNextStep = () => {} }) => {
  const handleDataChange = (e) => {
    setData({
      ...data,
      interests: { ...data?.interests, [e.target.name]: e.target.value },
    });
  };

  return (
    <div className="flex flex-col gap-5 py-[15px] px-[20px]">
      <FormInput
        type="text"
        name="hobbies"
        value={data?.interests?.hobbies}
        onChange={handleDataChange}
        placeholder="Enter your hobbies"
      />
      <FormInput
        type="text"
        name="sports"
        value={data?.interests?.sports}
        onChange={handleDataChange}
        placeholder="Enter sports you like"
      />

      <div className="flex justify-end">
        <button
          type="button"
          className="rounded-full bg-blue-400 text-white px-7 py-2 cursor-pointer"
          onClick={() => setNextStep(2)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Interests;
