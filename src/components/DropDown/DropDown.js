import React, { useState, useEffect } from "react";
import "./DropDown.css";
import Select from "react-select";

const customStyles = {
  option: () => ({
    color: "black",
    fontWeight: 600,
    padding: 10,
    fontSize: 15,
  }),

  singleValue: () => ({
    color: "black",
    fontWeight: 600,
    fontSize: 15,
  }),

  dropdownIndicator: () => ({
    backgroundColor: "blue",
    padding: 10,
  }),

  input: () => ({
    padding: 10,
  }),
};

const formatOptions = (options) =>
  options.map((item) => {
    return { value: item, label: item.toUpperCase() };
  });

export const DropDown = ({ label, list, choice }) => {
  // Select requires an array of <value, label> pairs
  const options = formatOptions(list);

  // use default selection
  const [option, setOption] = useState({ value: options[0].value });

  // set selected value
  const handleChange = (event) => {
    setOption({ value: event.value });
  };

  // return selected option
  useEffect(() => {
    choice(option.value);
  }, [choice, option]);


  return (
    // https://react-select.com/home
    <div>
      <form>
        <label htmlFor={label}>{label.toUpperCase()}:</label>
        <div className="position">
          <Select
            className="basic-single"
            classNamePrefix="select"
            value={list.value}
            onChange={handleChange}
            defaultValue={options[0]}
            name={label}
            options={options}
            styles={customStyles}
          />
        </div>
      </form>
    </div>
  );
};

export const MultiSelect = ({ label, list, choice }) => {
  // Select requires an array of <value, label> pairs
  const options = formatOptions(list);

  // use default selections
  const [option, setOption] = useState({
    value: [options[0].value, options[1].value],
  });

  // set selected values
  const handleChange = (event) =>
    setOption({ value: Array.from(event).map((item) => item.value) });

  // return selected options
  useEffect(() => {
    choice(option.value);
  }, [choice, option]);

  return (
    // https://react-select.com/home
    <div>
      <form>
        <label htmlFor={label}>{label.toUpperCase()}:</label>
        <div className="position">
          <Select
            className="basic-multi-select"
            classNamePrefix="select"
            isMulti
            value={list.value}
            onChange={handleChange}
            defaultValue={[options[0], options[1]]}
            name={label}
            options={options}
            styles={customStyles}
          />
        </div>
      </form>
    </div>
  );
};

export default DropDown;
