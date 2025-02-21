import React, { useState } from "react";

const JSONInput = ({ setJsonData, setResponse }) => {
    const [inputValue, setInputValue] = useState("");

    const handleSubmit = () => {
        try {
            const parsedData = JSON.parse(inputValue);
            if (parsedData.data && Array.isArray(parsedData.data)) {
                setJsonData(parsedData.data);
                setResponse(parsedData.data);
            } else {
                alert("Invalid JSON format. Ensure it contains a 'data' array.");
            }
        } catch (error) {
            alert("Invalid JSON input!");
        }
    };

    return (
        <div>
            <textarea 
                value={inputValue} 
                onChange={(e) => setInputValue(e.target.value)} 
                placeholder='Enter JSON request...'
                rows={5}
            />
            <br />
            <button onClick={handleSubmit}>Process JSON</button>
        </div>
    );
};

export default JSONInput;
