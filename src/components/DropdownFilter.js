import React from "react";
import Select from "react-select";

const options = [
    { value: "alphabets", label: "Alphabets" },
    { value: "numbers", label: "Numbers" },
    { value: "highest_alphabet", label: "Highest Alphabet" } // Fixed key name
];

const DropdownFilter = ({ setSelectedFilters }) => {
    const handleChange = (selectedOptions) => {
        setSelectedFilters(selectedOptions.map(option => option.value));
    };

    return (
        <div>
            <h4>Select Filters:</h4>
            <Select options={options} isMulti onChange={handleChange} />
        </div>
    );
};

export default DropdownFilter;
