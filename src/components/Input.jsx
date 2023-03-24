import { useState } from "react";

const InputField = (props) => {
    const [inputBusiness, changeInput] = useState("");

    const handleChange = (event) => {
        changeInput(event.target.value);
    };

    const handleSave = () => {
        props.handleSave(inputBusiness);
        changeInput("");
    };

    return (
        <div>
            <input value={inputBusiness} type="text" onChange={handleChange} />
            <button
                onClick={() => {
                    handleSave();
                }}
            >
                add
            </button>
        </div>
    );
};

export default InputField;
