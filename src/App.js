import React, { useState, useEffect } from "react";
import JSONInput from "./components/JSONInput";
import DropdownFilter from "./components/DropdownFilter";
import ResponseDisplay from "./components/ResponseDisplay";
import "./App.css";

const App = () => {
    // eslint-disable-next-line no-unused-vars
    const [jsonData, setJsonData] = useState(null);
    const [response, setResponse] = useState(null);
    const [selectedFilters, setSelectedFilters] = useState([]);

    useEffect(() => {
        document.title = "YourRollNumber";
    }, []);

    const processData = (data) => {
        if (!data || !Array.isArray(data)) {
            return { is_success: false, message: "Invalid data format" };
        }

        const numbers = data.filter((item) => !isNaN(item));
        const alphabets = data.filter((item) => isNaN(item));
        const highestAlphabet = alphabets.length > 0 ? [alphabets.sort().reverse()[0]] : [];

        return {
            is_success: true,
            user_id: "john_doe_17091999",
            email: "john@xyz.com",
            roll_number: "ABCD123",
            numbers: numbers,
            alphabets: alphabets,
            highest_alphabet: highestAlphabet
        };
    };

    return (
        <div className="container">
            <h2>JSON Processor</h2>
            <JSONInput setJsonData={setJsonData} setResponse={(data) => setResponse(processData(data))} />
            {response && (
                <>
                    <DropdownFilter setSelectedFilters={setSelectedFilters} />
                    <ResponseDisplay response={response} filters={selectedFilters} />
                </>
            )}
        </div>
    );
};

export default App;
