import React, { useState } from 'react'
import './App.css';

function sendData(data) {
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
function PrimeInput(onChildClick) {
    const[new_input,setInput] = useState(0)
    const onSubmit = async (event) => {
        event.preventDefault();
    };

    console.log(new_input);
    return (
        <form onSubmit={onSubmit}>
            <input type="number" name="new_input" onChange={(event) => setInput(event.target.value)} ></input>
            <button type="submit" onClick={() => sendData({new_input})}> Is it prime? </button>
        </form>
    );
}


class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            prime: true,
            didInput: false,
            databaseVal: 0
        }
    }


    componentDidMount() {
        console.log("database prime is being loaded")
        fetch("http://localhost:80/is-prime")
            .then(res => res.json())
            .then(json => {
                this.setState({
                    prime: json["prime"],
                    databaseVal: json["input"],
                })
            });
    }


    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h2>Welcome to the prime finder App.</h2>
                    <p>Enter a Number below</p>
                    <PrimeInput/>
                    <label id="dbNum">Current database number:</label>
                    <p>{this.state.databaseVal}</p>
                    <p>{this.state.prime ? "Yes its prime!" : "No its not prime"}</p>
                </header>
            </div>
        );
    }

}

export default App;
