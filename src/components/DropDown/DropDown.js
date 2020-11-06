import React, {useState, useEffect} from "react";
import "./DropDown.css";
import Select from "react-select";

const customStyles = {
  option: () => ({
    color: "black",
    fontWeight: 600,
    padding: 10,
  }),

  singleValue: () => ({
    color: "black",
    fontWeight: 600,
  }),

  dropdownIndicator: () => ({
    backgroundColor: "blue",
    padding: 10,
  }),

  input: () => ({
    padding: 10,
  }),
};

const DropDown = ({ label, list, choice }) => {

  // Select requires an array of <value, label> pairs
  const options = list.map((item) => {
    return { value: item, label: item.toUpperCase() };
  });

  // use default selection
  const [option, setOption] = useState({value : options[0].value})

  // set selected value
  const handleChange = (event) => {
    setOption({value : event.value})
  }

  // return selected option
  useEffect(() => {
    choice(option.value)
  }, [choice, option])
 

  return (
    <div>
      <form>
        <label htmlFor={label}>{label.toUpperCase()}:</label>
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
      </form>
    </div>
  );
};

export default DropDown;
