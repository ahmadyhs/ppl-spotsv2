"use client";

import { useState } from "react";

interface CheckboxProps {
  value: number;
}

const Checkbox: React.FC<CheckboxProps> = ({ value }) => {
  const [facilities, setFacilities]: any = useState({
    languages: [],
    response: [],
  });

  const handleChange = (e: any) => {
    const { value, checked } = e.target;
    const { languages } = facilities;

    if (checked) {
      setFacilities({
        languages: [...languages, value],
        response: [...languages, value],
      });
    } else {
      setFacilities({
        languages: languages.filter((e: any) => e !== value),
        response: languages.filter((e: any) => e !== value),
      });
    }
  };
  return <input type="checkbox" value={value} onChange={handleChange} />;
};

export default Checkbox;
