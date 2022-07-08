import React, { useState } from 'react'

function PrimeInput({ update }) {
    const [new_input, setInput] = useState(0)
    const onSubmit = async (event) => {
        event.preventDefault();
    };

    return (
        <form onSubmit={onSubmit}>
            <input title="new input textbox" type="number" name="new_input" onChange={(event) => setInput(event.target.value)} ></input>
            <button type="submit" title="submit button" onClick={() => { sendData({ new_input }); update(); }}> Is it prime? </button>
        </form>
    );
}
function sendData(data) {
    var num = parseInt(data["new_input"])
    data["new_input"] = num
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };
    if (data["new_input"] !== '') {
        fetch("http://127.0.0.1:80/postData", options);
    }
}

export default PrimeInput;
export { sendData };