import React from 'react';
import './App.css';
import PrimeInput from './PrimeInput';

class App extends React.Component {
    state = {
        prime: true,
        databaseVal: 0
    }
    updateApp = () => {
        fetch("http://localhost:80/is-prime/")
            .then(res => res.json())
            .then(json => {
                this.setState({
                    prime: json["prime"],
                    databaseVal: json["input"],
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
                            <label title='database number label' id="dbNum">Current database number: </label>
                            <output>{this.state.databaseVal}</output>
                            <p>{this.state.prime ? "Yes it's prime!" : "No it's not prime"}</p>
                        </div>
                    </div>
                </header>
            </div>
        );
    }
}

export default App;