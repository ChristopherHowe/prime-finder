import React, { useState } from 'react'
import './App.css';

class App extends React.Component {
    state = {
        prime: true,
        didInput: 0,
        databaseVal: 0
    }
    updateApp = () => {
        this.setState({  })
        console.log("database prime number is being loaded")
        fetch("http://localhost:80/is-prime")
            .then(res => res.json())
            .then(json => {
                this.setState({
                    prime: json["prime"],
                    databaseVal: json["input"],
                    didInput: this.state.didInput + 1
                })
            });
    }

    componentDidMount() {
        this.updateApp();
    }


    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h2>Welcome to the prime finder App.</h2>
                    <div className="interface">
                        <div className="element">
                            <label>Enter a Number below</label>
                            <PrimeInput update={this.updateApp} />
                        </div>
                        <div className="element">
                            <label id="dbNum">Current database number: </label>
                            <output>{this.state.databaseVal}</output>
                            <p>{this.state.prime ? "Yes its prime!" : "No its not prime"}</p>
                        </div>
                    </div>
                </header>
            </div>
        );
    }

}

function PrimeInput({update}) {
    const[new_input,setInput] = useState(0)
    const onSubmit = async (event) => {
        event.preventDefault();
    };

    return (
        <form onSubmit={onSubmit}>
            <input type="number" name="new_input" data-testid="input_textbox" onChange={(event) => setInput(event.target.value)} ></input>
            <button type="submit" onClick={() => { sendData({ new_input }); update(); }}> Is it prime? </button>
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

export default App;