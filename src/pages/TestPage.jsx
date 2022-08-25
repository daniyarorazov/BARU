import React from "react";
import DropdownComponent from "../components/UI/buttons/DropdownComponent";

const TestPage = () => {
  const options = [
    { label: "Сортировка", value: "" },
    { label: "Возрастание цены", value: "price_up" },
    { label: "Убывание цены", value: "price_down" },
    { label: "Ближайшие", value: "near" },
  ];

  const [value, setValue] = React.useState();

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <>
      <DropdownComponent
        label="What do we eat?"
        options={options}
        value={value}
        onChange={handleChange}
      />

      <p>We eat {value}!</p>
    </>
  );
};

export default TestPage;
