import React, { useState, useEffect } from "react";
import "./DropDown.css";
import Select, { components } from "react-select";
import CreatableSelect from "react-select/creatable";

const customStyles = {
  option: () => ({
    color: "white",
    fontWeight: 500,
    padding: 10,
    fontSize: 15,
  }),

  dropdownIndicator: () => ({
    backgroundColor: "black",
    padding: 10,
  }),

  menuList: () => ({
    backgroundColor: "black",
  }),
};

// select limit
const limit = 10;

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
    <form>
      <label htmlFor={label}>{label.toUpperCase()}:</label>
      <div className="position">
        <Select
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
  const handleChange = (event) => {
    if (event instanceof Array) {
      return setOption({ value: Array.from(event).map((item) => item.value) });
    }
  };

  // return selected options
  useEffect(() => {
    choice(option.value);
  }, [choice, option]);

  // handle more than 10 selections
  const Menu = (props) => {
    const optionSelectedLength = props.getValue().length || 0;
    return (
      <components.Menu {...props}>
        {optionSelectedLength < limit ? (
          props.children
        ) : (
          <div className="restrict">MAX LIMIT ACHIEVED</div>
        )}
      </components.Menu>
    );
  };

  const isValidNewOption = (inputValue, selectValue) =>
    inputValue.length > 0 && selectValue.length < limit;

  return (
    // https://react-select.com/home
    <form>
      <label htmlFor={label}>{label.toUpperCase()}:</label>
      <div className="position">
        {/* <Select
          classNamePrefix="multi-select"
          isMulti
          value={list.value}
          onChange={handleChange}
          defaultValue={[options[0], options[1]]}
          name={label}
          options={options}
          styles={customStyles}
          closeMenuOnSelect={false}
        /> */}
        <CreatableSelect
          classNamePrefix="multi-select"
          components={{ Menu }}
          isMulti
          isValidNewOption={isValidNewOption}
          options={options}
          styles={customStyles}
          onChange={handleChange}
          closeMenuOnSelect={false}
          defaultValue={[options[0], options[1]]}
        />
      </div>
    </form>
  );
};

export default DropDown;
