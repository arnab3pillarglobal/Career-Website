import React from "react";
import "../app.css";



export function FilteringComponent(props) {
  const { data, name, handleChange, selectedValue } = props;
  const selectedOption = data?.data?.find((option) => option[name] === selectedValue);

  return (
    <div>
    <select name={name} className="selectFiltering" onChange={handleChange} value={selectedValue}>
    <option value="">{`Select ${name}`}</option>
      { 
        data?.data?.map((item, index) => (
        <option key={index} value={item[name]}>{item[name]}</option>
        ))
      }
    </select>

    <span className="description">
      {selectedOption && selectedOption[`${name}Definition`]}
    </span>
  </div>
  );
}
