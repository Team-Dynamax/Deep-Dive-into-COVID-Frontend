import React from "react";
import "./DropDown.css";
import Select from "react-select";


const customStyles = {
    option: () => ({
        color: 'black',
        fontWeight: 600,
        padding: 10
    }),

    singleValue: () => ({
        color: 'black',
        fontWeight: 600,
      }),

    dropdownIndicator: () => ({
        backgroundColor: 'blue',
        padding: 10
    }),

    input: () => ({
        padding: 5,
    })
}

const DropDown = ({ label, list }) => {

  const select = label.toString();

  const  options = list.map((item) => {
      return { value: item.toLowerCase(), label: item.toUpperCase()};
  });


  return (
    <div>
      <form>
        <label for={select}>{select.toUpperCase()}:</label>
        <Select
          className="basic-single"
          classNamePrefix="select"
          defaultValue={options[0]}
          name= {select}
          options={options}
          styles={customStyles}
        />
      </form>
    </div>
  );
};

export default DropDown;
