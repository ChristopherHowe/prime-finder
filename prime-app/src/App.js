import React from 'react';
import './App.css';
import PrimeInput from './userInput.js';

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
                            <label title='enter label'>Enter a Number below</label>
                            <PrimeInput title='main input' update={this.updateApp} />
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

export default App;