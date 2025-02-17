import React from "react";
// Components
import FormInput from "./reusable_components/FormInput";

const Profile = ({ data, setData, setNextStep = () => {} }) => {
  const handleDataChange = (e) => {
    setData({
      ...data,
      profile: { ...data?.profile, [e.target.name]: e.target.value },
    });
  };

  return (
    <div className="flex flex-col gap-5 py-[15px] px-[20px]">
      <FormInput
        type="text"
        name="name"
        value={data?.profile?.name}
        onChange={handleDataChange}
        placeholder="Enter your name"
      />
      <FormInput
        type="text"
        name="age"
        value={data?.profile?.age}
        onChange={handleDataChange}
        placeholder="Enter your age"
      />

      <div className="flex justify-end">
        <button
          type="button"
          className="rounded-full bg-blue-400 text-white px-7 py-2 cursor-pointer"
          onClick={() => setNextStep(1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Profile;
