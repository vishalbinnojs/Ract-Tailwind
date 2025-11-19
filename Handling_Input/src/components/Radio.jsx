import React, { useState } from "react";

const Radio = () => {
  const [gender, setGender] = useState("other");
  console.log(gender);

  return (
    <>
      <div className="flex flex-col justify-center gap-3 items-center h-screen select-none">
        <label htmlFor="male">
          <input
            id="male"
            name="gender"
            type="radio"
            value="male"
            checked={gender === "male"}
            onChange={(e) => setGender(e.target.value)}
          />
          Male
        </label>
        <label htmlFor="female">
          <input
            id="female"
            name="gender"
            type="radio"
            value="female"
            checked={gender === "female"}
            onChange={(e) => setGender(e.target.value)}
          />
          Female
        </label>
        <label htmlFor="other">
          <input
            id="other"
            name="gender"
            type="radio"
            value="other"
            checked={gender === "other"}
            onChange={(e) => setGender(e.target.value)}
          />
          Other
        </label>
      </div>
    </>
  );
};

export default Radio;
