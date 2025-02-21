import React from "react";

const ResponseDisplay = ({ response, filters }) => {
    const applyFilters = () => {
        if (filters.length === 0) return response; // Return full response if no filters are applied

        let filteredData = {};

        if (filters.includes("alphabets")) {
            filteredData.alphabets = response.alphabets || [];
        }
        if (filters.includes("numbers")) {
            filteredData.numbers = response.numbers || [];
        }
        if (filters.includes("highest_alphabet")) { // Fixed key name
            filteredData.highest_alphabet = response.highest_alphabet || [];
        }

        return filteredData;
    };

    const filteredResponse = applyFilters();

    return (
        <div>
            <h3>Filtered Response:</h3>
            <pre>{JSON.stringify(filteredResponse, null, 2)}</pre>
        </div>
    );
};

export default ResponseDisplay;
